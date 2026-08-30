import { sanityClient } from './client';
import {
  weddingTraditionsQuery,
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
 * 1. Services Fetcher (Evidence-Safe Canonical Registry)
 */
export async function getSanityServices(): Promise<ServiceCategory[]> {
  return servicesData;
}

export async function getSanityServiceBySlug(slug: string): Promise<ServiceCategory | undefined> {
  const decoded = decodeURIComponent(slug);
  return getServiceBySlug(decoded);
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
 * 5. Stories Fetcher (Evidence-Safe Empty Portfolio until approved projects are added)
 */
export async function getSanityStories(): Promise<StoryCaseStudy[]> {
  return storyCaseStudies;
}

/**
 * 6. Gallery Fetcher (Evidence-Safe Channel Hub linking to official channels)
 */
export async function getSanityGalleryMedia(): Promise<MediaItem[]> {
  return defaultMediaItems;
}

/**
 * 7. Packages Fetcher
 */
export async function getSanityPackages(): Promise<any[]> {
  return packageTiers;
}

/**
 * 8. Testimonials Fetcher (Evidence-Safe Empty Registry)
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
 * 10. Team Members Fetcher (CANONICAL LEADERSHIP: Ch. Kala Prasad — Founder & Event Director)
 * Strictly grounded in the SEO Evidence Register.
 */
export async function getSanityTeamMembers(): Promise<TeamMember[]> {
  return staticTeamMembers;
}

export async function getSanityTeamMemberBySlug(slug: string): Promise<TeamMember | undefined> {
  const decoded = decodeURIComponent(slug);
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
