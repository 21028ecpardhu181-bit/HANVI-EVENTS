import { sanityClient } from './client';
import {
  servicesQuery,
  weddingTraditionsQuery,
  storiesQuery,
  galleryMediaQuery,
  teamMembersQuery,
  teamMemberBySlugQuery,
  sacredJourneyByTraditionQuery,
  allSacredJourneyStepsQuery,
} from './queries';
import { urlForImage } from './image';
import { servicesData, getServiceBySlug } from '../data/services';
import { defaultMediaItems, MediaItem } from '../data/reelsStore';
import { storyCaseStudies } from '../data/stories';
import { testimonials } from '../data/testimonials';
import { staticTeamMembers, getTeamMemberBySlug } from '../data/team';
import { DEFAULT_WIZARD_CONFIG, WizardConfig } from '../data/wizardConfig';
import { ServiceCategory, StoryCaseStudy, Testimonial, TeamMember } from '../types';
import { siteConfig } from '../data/site';
import { packageTiers } from '../data/packages';
import { weddingExperienceTypes } from '../data/celebrations';

/**
 * Convert Sanity image field or string URL into a usable image URL string
 */
export function resolveImageUrl(imageField: any, fallback: string): string {
  if (!imageField) return fallback;
  if (typeof imageField === 'string') return imageField;
  if (imageField.asset) {
    try {
      const builder = urlForImage(imageField);
      if (builder) {
        return builder.width(1200).fit('max').auto('format').url();
      }
    } catch {
      // Return fallback on image builder error
    }
  }
  return fallback;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * Centralized fetcher with revalidate: 0 to bypass Next.js static caching
 */
async function fetchSanity<T = any>(query: string, params: Record<string, any> = {}): Promise<T> {
  return sanityClient.fetch<T>(query, params, { next: { revalidate: 0 } });
}

/**
 * 1. Services Fetcher (Dyanmically retrieves all services & authentic backend images from Sanity CMS)
 */
export async function getSanityServices(): Promise<ServiceCategory[]> {
  try {
    const rawServices: any[] = await fetchSanity(servicesQuery);
    if (!rawServices || rawServices.length === 0) return servicesData;

    return rawServices.map((s, idx) => {
      const rawSlug = typeof s.slug === 'string' ? s.slug : s.slug?.current;
      const cleanSlug = rawSlug ? slugify(rawSlug) : s.title ? slugify(s.title) : `service-${idx}`;

      const matchedStatic = servicesData.find((sd) => sd.slug === cleanSlug || slugify(sd.title) === cleanSlug);
      const fallbackHero = matchedStatic?.heroImage || servicesData[idx % servicesData.length]?.heroImage || '/logo.png';

      const heroUrl = resolveImageUrl(s.heroImage, fallbackHero);

      const galleryUrls = Array.isArray(s.galleryImages) && s.galleryImages.length > 0
        ? s.galleryImages.map((img: any) => resolveImageUrl(img, heroUrl))
        : matchedStatic?.galleryImages || [heroUrl];

      return {
        id: s._id || `service-${cleanSlug}`,
        slug: cleanSlug,
        title: s.title || matchedStatic?.title || 'Event Celebration',
        category: s.category || matchedStatic?.category || 'Celebration',
        subtitle: s.subtitle || matchedStatic?.subtitle || '',
        tagline: s.tagline || matchedStatic?.tagline || 'Bespoke Celebration',
        description: s.description || matchedStatic?.description || '',
        shortDescription: s.shortDescription || s.description || matchedStatic?.shortDescription || '',
        startingPrice: s.startingPrice || matchedStatic?.startingPrice || 'Contact for pricing',
        heroImage: heroUrl,
        galleryImages: galleryUrls,
        features: Array.isArray(s.features) && s.features.length > 0 ? s.features : (matchedStatic?.features || []),
        relatedServices: s.relatedServices || matchedStatic?.relatedServices || ['bridal-makeup', 'weddings-receptions', 'catering-food-services'],
        faq: Array.isArray(s.faq) && s.faq.length > 0
          ? s.faq.map((item: any) => ({
              question: item.question || '',
              answer: item.answer || '',
            }))
          : (matchedStatic?.faq || []),
        featured: Boolean(s.featured || matchedStatic?.featured),
        displayOrder: typeof s.displayOrder === 'number' ? s.displayOrder : idx + 1,
        icon: s.icon || matchedStatic?.icon || 'sparkles',
        duration: s.duration || matchedStatic?.duration || '',
        seoTitle: s.seoTitle || matchedStatic?.seoTitle || '',
        seoDescription: s.seoDescription || matchedStatic?.seoDescription || '',
      };
    });
  } catch (err) {
    console.warn('Sanity services fetch warning:', err);
    return servicesData;
  }
}

export async function getSanityServiceBySlug(slug: string): Promise<ServiceCategory | undefined> {
  const allServices = await getSanityServices();
  const decoded = decodeURIComponent(slug);
  const normalized = slugify(decoded);

  let found = allServices.find((s) => slugify(s.slug) === normalized || slugify(s.title) === normalized);
  if (found) return found;

  const staticMatch = getServiceBySlug(decoded);
  if (staticMatch) {
    const matchedSanity = allServices.find((s) => slugify(s.slug) === staticMatch.slug);
    if (matchedSanity) return matchedSanity;
    return staticMatch;
  }

  return undefined;
}

/**
 * 2. Home Page Fetcher (Returns static null)
 */
export async function getSanityHomeData(): Promise<any> {
  return null;
}

/**
 * 3. Event Wizard Fetcher (Returns default wizard config)
 */
export async function getSanityEventWizardData(): Promise<WizardConfig> {
  return DEFAULT_WIZARD_CONFIG;
}

/**
 * 4. Wedding Traditions Fetcher
 */
export async function getSanityWeddingTraditions(): Promise<any[]> {
  try {
    const raw: any[] = await fetchSanity(weddingTraditionsQuery);
    if (!raw || raw.length === 0) return weddingExperienceTypes;
    return raw.map((t, idx) => {
      const rawSlug = typeof t.slug === 'string' ? t.slug : t.slug?.current;
      const cleanSlug = rawSlug ? slugify(rawSlug) : t.traditionTitle ? slugify(t.traditionTitle) : `tradition-${idx}`;

      const staticFallback =
        weddingExperienceTypes.find((st) => {
          const stSlug = slugify(st.slug);
          const stTitle = slugify(st.title);
          return (
            stSlug === cleanSlug ||
            cleanSlug.includes(stSlug) ||
            stSlug.includes(cleanSlug) ||
            cleanSlug.includes(stTitle) ||
            stTitle.includes(cleanSlug)
          );
        }) || weddingExperienceTypes[idx % weddingExperienceTypes.length];

      const heroUrl = resolveImageUrl(
        t.coverImage || t.heroImage,
        staticFallback.heroImage
      );

      const rawGallery = Array.isArray(t.galleryImages) && t.galleryImages.length > 0
        ? t.galleryImages.map((img: any) => resolveImageUrl(img, heroUrl)).filter(Boolean)
        : staticFallback.galleryImages;

      return {
        id: t._id || `tradition-${cleanSlug}`,
        title: t.traditionTitle || t.title || staticFallback.title,
        shortTitle: t.shortTitle || t.region || staticFallback.shortTitle,
        slug: cleanSlug,
        subtitle: t.subtitle || t.region || staticFallback.subtitle,
        region: t.region || staticFallback.region,
        description: t.description || staticFallback.description,
        culturalBackground: t.culturalBackground || staticFallback.culturalBackground,
        storyQuote: t.storyQuote || staticFallback.storyQuote,
        quoteAuthor: t.quoteAuthor || staticFallback.quoteAuthor,
        floralStyle: t.floralStyle || staticFallback.floralStyle,
        lightingStyle: t.lightingStyle || staticFallback.lightingStyle,
        paletteDescription: t.paletteDescription || staticFallback.paletteDescription,
        paletteSwatches: t.paletteSwatches || staticFallback.paletteSwatches,
        bgGradient: t.bgGradient || staticFallback.bgGradient,
        heroImage: heroUrl,
        coverImage: resolveImageUrl(t.coverImage, heroUrl),
        galleryImages: rawGallery,
        videoUrl: t.videoUrl || staticFallback.videoUrl || '',
        rituals: Array.isArray(t.rituals) && t.rituals.length > 0 ? t.rituals : staticFallback.ritualMilestones,
        ritualMilestones: Array.isArray(t.ritualMilestones) && t.ritualMilestones.length > 0 ? t.ritualMilestones : staticFallback.ritualMilestones,
        signatureFeatures: Array.isArray(t.signatureFeatures) && t.signatureFeatures.length > 0 ? t.signatureFeatures : staticFallback.signatureFeatures,
        faq: Array.isArray(t.faq) && t.faq.length > 0 ? t.faq : staticFallback.faq,
      };
    });
  } catch (err) {
    console.warn('Sanity wedding traditions fetch warning:', err);
    return weddingExperienceTypes;
  }
}

/**
 * 5. Stories Fetcher (Dyanmically retrieves authentic wedding stories from Sanity CMS)
 */
export async function getSanityStories(): Promise<StoryCaseStudy[]> {
  try {
    const rawStories: any[] = await fetchSanity(storiesQuery);
    if (!rawStories || rawStories.length === 0) return storyCaseStudies;

    return rawStories.map((st, idx) => {
      const heroUrl = resolveImageUrl(
        st.coverImage || st.heroImage,
        storyCaseStudies[idx % (storyCaseStudies.length || 1)]?.heroImage || '/logo.png'
      );

      return {
        id: st._id || `story-${st.slug || idx}`,
        slug: st.slug || `story-${idx}`,
        title: st.title || 'Wedding Story',
        coupleNames: st.coupleName || st.coupleNames || 'Couple Celebration',
        celebrationType: st.eventType || st.celebrationType || 'Luxury Wedding',
        location: st.location || 'Kakinada, AP',
        guestCount: st.guestCount || '500 Guests',
        heroImage: heroUrl,
        galleryImages: Array.isArray(st.gallery || st.galleryImages)
          ? (st.gallery || st.galleryImages).map((img: any) => resolveImageUrl(img, heroUrl))
          : [heroUrl],
        quote: st.quote || '',
        narrative: Array.isArray(st.storyContent || st.narrative) ? (st.storyContent || st.narrative) : [],
      };
    });
  } catch (err) {
    console.warn('Sanity stories fetch warning:', err);
    return storyCaseStudies;
  }
}

/**
 * 6. Gallery Fetcher (Dynamically retrieves authentic gallery albums from Sanity CMS)
 */
export async function getSanityGalleryMedia(): Promise<MediaItem[]> {
  try {
    const rawMedia: any[] = await fetchSanity(galleryMediaQuery);
    if (!rawMedia || rawMedia.length === 0) return defaultMediaItems;

    const categoryFallbacks = ['Mandap', 'Florals', 'Lighting', 'Stage', 'Entrance'];

    return rawMedia.map((m, idx) => {
      const vUrl = m.videoUrl || (Array.isArray(m.videos) && m.videos[0]) || '';
      const ytThumb = vUrl && (vUrl.includes('youtube.com') || vUrl.includes('youtu.be'))
        ? `https://img.youtube.com/vi/${vUrl.match(/(?:shorts\/|v=|youtu\.be\/)([a-zA-Z0-9_-]+)/)?.[1] || ''}/hqdefault.jpg`
        : null;

      const coverUrl = resolveImageUrl(
        m.coverImage || m.thumbnail,
        ytThumb || '/logo.png'
      );

      const imagesArray = Array.isArray(m.images) && m.images.length > 0
        ? m.images.map((img: any) => resolveImageUrl(img, coverUrl))
        : [coverUrl];

      const rawCat = (m.category || '').trim();
      const cleanCat = (!rawCat || rawCat.toLowerCase() === 'all')
        ? categoryFallbacks[idx % categoryFallbacks.length]
        : rawCat;

      let detectedType: 'reel' | 'film' | 'image' = m.type === 'film' ? 'film' : m.type === 'reel' ? 'reel' : 'image';
      if (vUrl) {
        if (vUrl.includes('shorts') || vUrl.includes('reel')) {
          detectedType = 'reel';
        } else if (detectedType === 'image') {
          detectedType = 'film';
        }
      }

      return {
        id: m._id || `media-${idx}`,
        type: detectedType,
        title: m.albumTitle || m.title || 'Celebration Media',
        subtitle: m.eventName || m.subtitle || 'Kakinada Event',
        category: cleanCat,
        thumbnail: coverUrl,
        images: imagesArray,
        videoUrl: vUrl,
        views: m.views || (detectedType === 'reel' ? 'Short Reel' : detectedType === 'film' ? 'Cinema Film' : 'Featured'),
      };
    });
  } catch (err) {
    console.warn('Sanity gallery fetch warning:', err);
    return defaultMediaItems;
  }
}

/**
 * 7. Packages Fetcher
 */
export async function getSanityPackages(): Promise<any[]> {
  return packageTiers;
}

/**
 * 8. Testimonials Fetcher
 */
export async function getSanityTestimonials(): Promise<Testimonial[]> {
  return testimonials;
}

/**
 * 9. FAQs Fetcher
 */
export async function getSanityFaqs(): Promise<Array<{ question: string; answer: string; category?: string }>> {
  return [];
}

/**
 * 10. Team Members Fetcher
 * Founder & Event Director is strictly Ch. Kala Prasad.
 * Welcome Girls and hospitality support teams are dynamically included from Sanity CMS.
 */
export async function getSanityTeamMembers(): Promise<TeamMember[]> {
  const result: TeamMember[] = [...staticTeamMembers];

  try {
    const raw: any[] = await fetchSanity(teamMembersQuery);
    if (Array.isArray(raw)) {
      for (const m of raw) {
        // Strictly filter out any conflicting founder profiles
        if (m.name && (m.name.includes('Chitra') || m.name.includes('A.Chitra'))) {
          continue;
        }

        const cleanSlug = typeof m.slug === 'string' ? m.slug : m.slug?.current || slugify(m.name || `team`);
        // If it's Welcome Girls or a supporting team from Sanity, include it
        if (m.name && !result.some((t) => slugify(t.slug) === slugify(cleanSlug) || slugify(t.name) === slugify(m.name))) {
          const profileUrl = resolveImageUrl(m.profileImage, '/logo.png');
          const coverUrl = resolveImageUrl(m.coverImage, profileUrl);
          const galleryUrls = Array.isArray(m.galleryImages)
            ? m.galleryImages.map((img: any) => resolveImageUrl(img, coverUrl))
            : [];

          result.push({
            id: m._id || `team-${cleanSlug}`,
            slug: cleanSlug,
            name: m.name,
            role: m.role || 'Guest Hospitality & Welcome Team',
            category: m.category || 'Hospitality',
            shortBio: m.shortBio || 'Professional hospitality team for events and wedding guest receptions.',
            detailedBio: m.detailedBio || m.shortBio || 'Providing gracious and traditional guest welcome services across Kakinada and East Godavari.',
            profileImage: profileUrl,
            coverImage: coverUrl,
            galleryImages: galleryUrls,
            videos: [],
            experience: 'Professional Team',
            skills: Array.isArray(m.skills) ? m.skills : ['Guest Welcome', 'Hospitality', 'Bangle Stalls'],
            socialLinks: Array.isArray(m.socialLinks) ? m.socialLinks : [],
            contactInfo: m.contactInfo || { phone: '+91 97009 29650' },
            featured: Boolean(m.featured),
            displayOrder: typeof m.displayOrder === 'number' ? m.displayOrder : 2,
            seoTitle: m.seoTitle || `${m.name} | Hanvi Events`,
            seoDescription: m.seoDescription || `Hanvi Events ${m.name} in Kakinada, Andhra Pradesh.`,
          });
        }
      }
    }
  } catch (err) {
    console.warn('Sanity team fetch warning:', err);
  }

  return result;
}

export async function getSanityTeamMemberBySlug(slug: string): Promise<TeamMember | undefined> {
  const decoded = decodeURIComponent(slug);
  const normalized = slugify(decoded);

  const allMembers = await getSanityTeamMembers();
  let found = allMembers.find((m) => slugify(m.slug) === normalized || slugify(m.name) === normalized || m.id === slug);
  if (found) return found;

  return getTeamMemberBySlug(decoded);
}

/**
 * 11. Studio Leadership Fetcher
 */
export async function getSanityStudioLeadership(): Promise<any[]> {
  return [];
}

/**
 * 12. Venues Fetcher
 */
export async function getSanityVenues(): Promise<any[]> {
  return [];
}

/**
 * 13. Contact Page Fetcher
 */
export async function getSanityContactPage(): Promise<any> {
  return siteConfig;
}

/**
 * 14. Site Settings Fetcher
 */
export async function getSanitySiteSettings(): Promise<any> {
  return null;
}

/**
 * 15. Portfolio Fetcher
 */
export async function getSanityPortfolio(): Promise<any[]> {
  return [];
}

// ─────────────────────────────────────────────────────────────────────────────
// 16. Sacred Journey Collection
// ─────────────────────────────────────────────────────────────────────────────

function mapSacredJourneyToStep(s: any, idx: number, fallbackImage: string): import('../types').WeddingJourneyStep {
  const heroUrl = resolveImageUrl(s.heroImage, fallbackImage);
  const padded = String(s.stepNumber ?? idx + 1).padStart(2, '0');

  return {
    id: s._id || `sj-${s.slug || idx}`,
    slug: s.slug || `step-${padded}`,
    stepNumber: padded,
    title: s.journeyTitle || 'Ceremony Step',
    teluguName: s.ceremonyName || '',
    timing: s.timeline || s.journeyLabel || '',
    tagline: s.journeyLabel || `Step ${padded}`,
    description: s.shortDescription || s.detailedDescription || '',
    heroImage: heroUrl,
    highlights: Array.isArray(s.highlights) ? s.highlights : [],
    decorIdeas: Array.isArray(s.decorIdeas) ? s.decorIdeas : [],
  };
}

const FALLBACK_SACRED_JOURNEY_IMAGE = '/logo.png';

export async function getSacredJourneySteps(traditionSlug: string): Promise<import('../types').WeddingJourneyStep[]> {
  try {
    const raw: any[] = await fetchSanity(sacredJourneyByTraditionQuery, { traditionSlug });
    if (raw && raw.length > 0) {
      return raw.map((s, idx) => mapSacredJourneyToStep(s, idx, FALLBACK_SACRED_JOURNEY_IMAGE));
    }

    const allRaw: any[] = await fetchSanity(allSacredJourneyStepsQuery);
    if (!allRaw || allRaw.length === 0) return [];

    const normSlug = slugify(traditionSlug || '');
    const key = (['christian', 'muslim', 'hindu'] as const).find((k) => normSlug.includes(k)) || normSlug;

    const filtered = allRaw.filter((s) => {
      const refSlug = slugify(s.traditionSlug || '');
      const refId = slugify(s.traditionId || '');
      const refTitle = slugify(s.traditionTitle || '');
      return (
        (refSlug && (refSlug.includes(key) || key.includes(refSlug))) ||
        (refId && refId.includes(key)) ||
        (refTitle && refTitle.includes(key))
      );
    });

    return filtered.map((s, idx) => mapSacredJourneyToStep(s, idx, FALLBACK_SACRED_JOURNEY_IMAGE));
  } catch (err) {
    console.warn('Sacred Journey fetch warning:', err);
    return [];
  }
}

export async function getAllSacredJourneySteps(): Promise<import('../types').WeddingJourneyStep[]> {
  try {
    const raw: any[] = await fetchSanity(allSacredJourneyStepsQuery);
    if (!raw || raw.length === 0) return [];
    return raw.map((s, idx) => mapSacredJourneyToStep(s, idx, FALLBACK_SACRED_JOURNEY_IMAGE));
  } catch (err) {
    console.warn('All Sacred Journey steps fetch warning:', err);
    return [];
  }
}
