import { sanityClient } from './client';
import {
  servicesQuery,
  homeQuery,
  eventWizardQuery,
  weddingTraditionsQuery,
  storiesQuery,
  galleryMediaQuery,
  packagesQuery,
  articlesQuery,
  testimonialsQuery,
  faqsQuery,
  teamMembersQuery,
  studioLeadershipQuery,
  venuesQuery,
  contactPageQuery,
  siteSettingsQuery,
  portfolioQuery,
} from './queries';
import { urlForImage } from './image';
import { servicesData, getServiceBySlug } from '../data/services';
import { defaultMediaItems, MediaItem } from '../data/reelsStore';
import { storyCaseStudies } from '../data/stories';
import { testimonials } from '../data/testimonials';
import { journalArticles } from '../data/journal';
import { DEFAULT_WIZARD_CONFIG, WizardConfig } from '../data/wizardConfig';
import { ServiceCategory, StoryCaseStudy, Testimonial, JournalArticle } from '../types';
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
      const url = urlForImage(imageField);
      if (url) return url.toString();
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
 * 1. Services Fetcher (EXISTING SERVICES COLLECTION - UNCHANGED)
 */
export async function getSanityServices(): Promise<ServiceCategory[]> {
  try {
    const rawServices: any[] = await fetchSanity(servicesQuery);
    if (!rawServices || rawServices.length === 0) return servicesData;

    return rawServices.map((s, idx) => {
      const rawSlug = typeof s.slug === 'string' ? s.slug : s.slug?.current;
      const cleanSlug = rawSlug ? slugify(rawSlug) : s.title ? slugify(s.title) : `service-${idx}`;

      const heroUrl = resolveImageUrl(
        s.heroImage,
        servicesData[idx % servicesData.length]?.heroImage ||
          'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop'
      );

      const galleryUrls = Array.isArray(s.galleryImages)
        ? s.galleryImages.map((img: any) => resolveImageUrl(img, heroUrl))
        : [heroUrl];

      return {
        id: s._id || `service-${cleanSlug}`,
        slug: cleanSlug,
        title: s.title || 'Event Celebration',
        category: s.category || 'Celebration',
        subtitle: s.subtitle || '',
        tagline: s.tagline || 'Bespoke Celebration',
        description: s.description || '',
        shortDescription: s.shortDescription || s.description || '',
        startingPrice: s.startingPrice || '₹15,000',
        heroImage: heroUrl,
        galleryImages: galleryUrls,
        features: Array.isArray(s.features) ? s.features : [],
        relatedServices: s.relatedServices || ['bridal-makeup', 'weddings-receptions', 'catering-food-services'],
        faq: Array.isArray(s.faq)
          ? s.faq.map((item: any) => ({
              question: item.question || '',
              answer: item.answer || '',
            }))
          : [],
        featured: Boolean(s.featured),
        displayOrder: typeof s.displayOrder === 'number' ? s.displayOrder : idx + 1,
        icon: s.icon || 'sparkles',
        duration: s.duration || '',
        seoTitle: s.seoTitle || '',
        seoDescription: s.seoDescription || '',
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

  let found = allServices.find((s) => slugify(s.slug) === normalized);
  if (found) return found;

  found = allServices.find((s) => slugify(s.title) === normalized);
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
 * 2. Home Page Fetcher
 */
export async function getSanityHomeData(): Promise<any> {
  try {
    const data = await fetchSanity(homeQuery);
    if (!data) return null;
    return {
      ...data,
      heroBackgroundImage: resolveImageUrl(
        data.heroBackgroundImage,
        'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1600&auto=format&fit=crop'
      ),
    };
  } catch (err) {
    console.warn('Sanity home fetch warning:', err);
    return null;
  }
}

/**
 * 3. Event Wizard Fetcher
 */
export async function getSanityEventWizardData(): Promise<WizardConfig> {
  try {
    const raw = await fetchSanity(eventWizardQuery);
    if (!raw) return DEFAULT_WIZARD_CONFIG;

    return {
      whatsappNumber: raw.whatsappNumber || DEFAULT_WIZARD_CONFIG.whatsappNumber,
      celebrationTypes:
        Array.isArray(raw.steps) && raw.steps.length > 0 ? raw.steps : DEFAULT_WIZARD_CONFIG.celebrationTypes,
      guestCountOptions: DEFAULT_WIZARD_CONFIG.guestCountOptions,
      budgetOptions: DEFAULT_WIZARD_CONFIG.budgetOptions,
    };
  } catch (err) {
    console.warn('Sanity event wizard fetch warning:', err);
    return DEFAULT_WIZARD_CONFIG;
  }
}

/**
 * 4. Wedding Traditions Fetcher
 */
export async function getSanityWeddingTraditions(): Promise<any[]> {
  try {
    const raw: any[] = await fetchSanity(weddingTraditionsQuery);
    if (!raw || raw.length === 0) return weddingExperienceTypes;
    return raw.map((t, idx) => ({
      id: t._id || `tradition-${t.slug || idx}`,
      title: t.traditionTitle || t.title || weddingExperienceTypes[idx % weddingExperienceTypes.length]?.title || 'Wedding Experience',
      shortTitle: t.shortTitle || t.region || 'South Indian',
      slug: t.slug || `tradition-${idx}`,
      subtitle: t.subtitle || t.region || 'Bespoke Ceremony',
      region: t.region || 'South Indian',
      description: t.description || '',
      heroImage: resolveImageUrl(
        t.coverImage || t.heroImage,
        weddingExperienceTypes[idx % weddingExperienceTypes.length]?.heroImage ||
          'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop'
      ),
      coverImage: resolveImageUrl(t.coverImage, 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop'),
      galleryImages: Array.isArray(t.galleryImages)
        ? t.galleryImages.map((img: any) => resolveImageUrl(img, ''))
        : [],
      videoUrl: t.videoUrl || '',
      rituals: Array.isArray(t.rituals) ? t.rituals : [],
    }));
  } catch (err) {
    console.warn('Sanity wedding traditions fetch warning:', err);
    return weddingExperienceTypes;
  }
}

/**
 * 5. Stories Fetcher
 */
export async function getSanityStories(): Promise<StoryCaseStudy[]> {
  try {
    const rawStories: any[] = await fetchSanity(storiesQuery);
    if (!rawStories || rawStories.length === 0) return storyCaseStudies;

    return rawStories.map((st, idx) => {
      const heroUrl = resolveImageUrl(
        st.coverImage || st.heroImage,
        storyCaseStudies[idx % storyCaseStudies.length]?.heroImage ||
          'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop'
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
 * 6. Gallery Fetcher
 */
export async function getSanityGalleryMedia(): Promise<MediaItem[]> {
  try {
    const rawMedia: any[] = await fetchSanity(galleryMediaQuery);
    if (!rawMedia || rawMedia.length === 0) return defaultMediaItems;

    return rawMedia.map((m, idx) => ({
      id: m._id || `media-${idx}`,
      type: m.type === 'film' ? 'film' : 'reel',
      title: m.albumTitle || m.title || 'Celebration Reel',
      subtitle: m.eventName || m.subtitle || 'Kakinada Event',
      thumbnail: resolveImageUrl(
        m.coverImage || m.thumbnail,
        defaultMediaItems[idx % defaultMediaItems.length]?.thumbnail ||
          'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop'
      ),
      videoUrl: m.videoUrl || (Array.isArray(m.videos) && m.videos[0]) || 'https://linktw.in/utNIGS',
      views: m.views || 'Featured',
    }));
  } catch (err) {
    console.warn('Sanity gallery fetch warning:', err);
    return defaultMediaItems;
  }
}

/**
 * 7. Packages Fetcher
 */
export async function getSanityPackages(): Promise<any[]> {
  try {
    const raw: any[] = await fetchSanity(packagesQuery);
    if (!raw || raw.length === 0) return packageTiers;

    return raw.map((p, idx) => ({
      id: p._id || `pkg-${idx}`,
      title: p.packageName || p.title || 'Event Package',
      name: p.packageName || p.name || 'Event Package',
      subtitle: p.packageSubtitle || p.subtitle || '',
      price: p.price || p.startingPrice || '₹1,50,000',
      startingPrice: p.price || p.startingPrice || '₹1,50,000',
      tagline: p.packageSubtitle || p.tagline || 'Comprehensive Event Planning',
      description: p.includedServices ? p.includedServices.join(', ') : p.description || '',
      features: Array.isArray(p.features) ? p.features : [],
      highlights: Array.isArray(p.features) ? p.features : [],
      packageImage: resolveImageUrl(p.packageImage, 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop'),
      isPopular: Boolean(p.featuredPackage || p.isPopular),
      featured: Boolean(p.featuredPackage),
      badge: p.featuredPackage ? 'Most Popular' : undefined,
    }));
  } catch (err) {
    console.warn('Sanity packages fetch warning:', err);
    return packageTiers;
  }
}

/**
 * 8. Journal / Articles Fetcher
 */
export async function getSanityJournalArticles(): Promise<JournalArticle[]> {
  try {
    const raw: any[] = await fetchSanity(articlesQuery);
    if (!raw || raw.length === 0) return journalArticles;

    return raw.map((a, idx) => ({
      id: a._id || `art-${idx}`,
      slug: a.slug || `art-${idx}`,
      title: a.title || 'Editorial Article',
      excerpt: a.excerpt || '',
      category: a.category || 'Design Philosophy',
      readTime: a.readTime || '4 Min Read',
      publishedDate: a.publishDate || a.publishedDate || 'February 2026',
      author: {
        name: a.author?.name || 'Ch. Kala Prasad',
        role: a.author?.role || 'Event Director',
        avatar: resolveImageUrl(
          a.author?.avatar,
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
        ),
      },
      heroImage: resolveImageUrl(
        a.featuredImage || a.heroImage,
        journalArticles[idx % journalArticles.length]?.heroImage ||
          'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1600&auto=format&fit=crop'
      ),
      content: Array.isArray(a.content) ? a.content : [],
    }));
  } catch (err) {
    console.warn('Sanity journal fetch warning:', err);
    return journalArticles;
  }
}

export async function getSanityJournalArticleBySlug(slug: string): Promise<JournalArticle | undefined> {
  const articles = await getSanityJournalArticles();
  const normalized = slugify(decodeURIComponent(slug));
  return articles.find((a) => slugify(a.slug) === normalized);
}

/**
 * 9. Testimonials Fetcher
 */
export async function getSanityTestimonials(): Promise<Testimonial[]> {
  try {
    const raw: any[] = await fetchSanity(testimonialsQuery);
    if (!raw || raw.length === 0) return testimonials;

    return raw.map((t, idx) => ({
      id: t._id || `test-${idx}`,
      clientNames: t.clientName || t.coupleName || 'Happy Client',
      celebrationType: t.eventType || 'Celebration',
      location: t.location || 'Kakinada',
      rating: typeof t.rating === 'number' ? t.rating : 5,
      reviewText: t.review || '',
      avatar: resolveImageUrl(
        t.clientPhoto,
        testimonials[idx % testimonials.length]?.avatar ||
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
      ),
    }));
  } catch (err) {
    console.warn('Sanity testimonials fetch warning:', err);
    return testimonials;
  }
}

/**
 * 10. FAQs Fetcher
 */
export async function getSanityFaqs(): Promise<Array<{ question: string; answer: string; category?: string }>> {
  try {
    const raw: any[] = await fetchSanity(faqsQuery);
    if (!raw || raw.length === 0) return [];
    return raw.map((f) => ({
      question: f.question || '',
      answer: f.answer || '',
      category: f.category || 'General',
    }));
  } catch (err) {
    console.warn('Sanity FAQs fetch warning:', err);
    return [];
  }
}

/**
 * 11. Team Members Fetcher
 */
export async function getSanityTeamMembers(): Promise<any[]> {
  try {
    const raw: any[] = await fetchSanity(teamMembersQuery);
    if (!raw || raw.length === 0) return [];
    return raw.map((m, idx) => ({
      id: m._id || `team-${idx}`,
      name: m.name || '',
      role: m.role || '',
      category: m.category || 'Core Team',
      profileImage: resolveImageUrl(m.profileImage, 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'),
      shortBio: m.shortBio || '',
      experience: m.experience || '',
    }));
  } catch (err) {
    console.warn('Sanity team fetch warning:', err);
    return [];
  }
}

/**
 * 12. Studio Leadership Fetcher
 */
export async function getSanityStudioLeadership(): Promise<any[]> {
  try {
    const raw: any[] = await fetchSanity(studioLeadershipQuery);
    if (!raw || raw.length === 0) return [];
    return raw.map((l, idx) => ({
      id: l._id || `lead-${idx}`,
      name: l.name || 'Ch. Kala Prasad',
      position: l.position || 'Founder & Event Director',
      profileImage: resolveImageUrl(l.profileImage, 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'),
      biography: l.biography || '',
      visionStatement: l.visionStatement || '',
      experience: l.experience || '8+ Years',
    }));
  } catch (err) {
    console.warn('Sanity studio leadership fetch warning:', err);
    return [];
  }
}

/**
 * 13. Venues Fetcher
 */
export async function getSanityVenues(): Promise<any[]> {
  try {
    const raw: any[] = await fetchSanity(venuesQuery);
    if (!raw || raw.length === 0) return [];
    return raw.map((v, idx) => ({
      id: v._id || `venue-${idx}`,
      venueName: v.venueName || '',
      slug: v.slug || `venue-${idx}`,
      location: v.location || 'Kakinada',
      capacity: v.capacity || '1,000 Guests',
      indoorOutdoor: v.indoorOutdoor || 'Indoor AC Hall',
      coverImage: resolveImageUrl(v.coverImage, 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop'),
      description: v.description || '',
    }));
  } catch (err) {
    console.warn('Sanity venues fetch warning:', err);
    return [];
  }
}

/**
 * 14. Contact Page Fetcher
 */
export async function getSanityContactPage(): Promise<any> {
  try {
    const data = await fetchSanity(contactPageQuery);
    if (!data) return siteConfig;
    return {
      officeAddress: data.officeAddress || siteConfig.address,
      phoneNumbers: Array.isArray(data.phoneNumbers) ? data.phoneNumbers : [siteConfig.phone],
      whatsappNumber: data.whatsappNumber || siteConfig.whatsapp,
      email: data.email || siteConfig.email,
      businessHours: data.businessHours || 'Mon - Sun: 9:00 AM - 9:00 PM',
      socialLinks: data.socialLinks || [],
    };
  } catch (err) {
    console.warn('Sanity contact fetch warning:', err);
    return siteConfig;
  }
}

/**
 * 15. Site Settings & Navigation Fetcher
 */
export async function getSanitySiteSettings(): Promise<any> {
  try {
    const data = await fetchSanity(siteSettingsQuery);
    if (!data) return null;
    return {
      ...data,
      logoUrl: resolveImageUrl(data.logo, ''),
    };
  } catch (err) {
    console.warn('Sanity site settings fetch warning:', err);
    return null;
  }
}

/**
 * 16. Portfolio Fetcher
 */
export async function getSanityPortfolio(): Promise<any[]> {
  try {
    const raw: any[] = await fetchSanity(portfolioQuery);
    if (!raw || raw.length === 0) return [];
    return raw.map((p, idx) => ({
      id: p._id || `port-${idx}`,
      projectTitle: p.projectTitle || '',
      slug: p.slug || `port-${idx}`,
      eventType: p.eventType || 'Luxury Celebration',
      coverImage: resolveImageUrl(p.coverImage, 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop'),
      clientName: p.clientName || '',
      description: p.description || '',
    }));
  } catch (err) {
    console.warn('Sanity portfolio fetch warning:', err);
    return [];
  }
}
