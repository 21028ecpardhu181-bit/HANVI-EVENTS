export interface ExtendedGalleryImage {
  id: string;
  url: string;
  title: string;
  category: 'Mandap' | 'Florals' | 'Lighting' | 'Stage' | 'Entrances' | 'Details' | 'Celebrations';
  aspectRatio?: 'landscape' | 'portrait' | 'square';
  isSanity?: boolean;
}

/**
 * Authentic Hanvi Events & South Indian Wedding/Event Craft Defaults
 * (Used only when a service has no uploaded gallery in Sanity Studio)
 */
export const authenticHanviDefaults: Record<string, ExtendedGalleryImage[]> = {
  'weddings-receptions': [
    {
      id: 'h-wr-1',
      url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
      title: 'Sacred Golden Hour Mandap Architecture',
      category: 'Mandap',
      aspectRatio: 'landscape',
    },
    {
      id: 'h-wr-2',
      url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop',
      title: 'Traditional Telugu Bride Pellikuthuru Styling',
      category: 'Stage',
      aspectRatio: 'portrait',
    },
    {
      id: 'h-wr-3',
      url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop',
      title: 'Royal Chandelier Stage & Velvet Backdrop',
      category: 'Stage',
      aspectRatio: 'landscape',
    },
    {
      id: 'h-wr-4',
      url: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=1200&auto=format&fit=crop',
      title: 'Fresh Marigold & Brass Diya Welcome Entrance',
      category: 'Entrances',
      aspectRatio: 'portrait',
    },
    {
      id: 'h-wr-5',
      url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop',
      title: 'Warm Fairy Light Canopy & Chandelier Rigging',
      category: 'Lighting',
      aspectRatio: 'landscape',
    },
    {
      id: 'h-wr-6',
      url: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=1200&auto=format&fit=crop',
      title: 'Traditional Brass Uruli & Petal Float Pod',
      category: 'Details',
      aspectRatio: 'square',
    },
  ],
  'bridal-makeup': [
    {
      id: 'h-bm-1',
      url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop',
      title: 'HD Airbrush Bridal Glam & Jewel Highlights',
      category: 'Details',
      aspectRatio: 'portrait',
    },
    {
      id: 'h-bm-2',
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop',
      title: 'Traditional Jasmine & Rose Poola Jada Braid',
      category: 'Florals',
      aspectRatio: 'landscape',
    },
    {
      id: 'h-bm-3',
      url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop',
      title: 'Bridal Saree Draping & Styling Suite',
      category: 'Stage',
      aspectRatio: 'square',
    },
  ],
  'birthdays-anniversaries': [
    {
      id: 'h-ba-1',
      url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1200&auto=format&fit=crop',
      title: 'Organic Pastel 3D Balloon Arch & Theme Staging',
      category: 'Stage',
      aspectRatio: 'landscape',
    },
    {
      id: 'h-ba-2',
      url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop',
      title: 'Surprise Cake Table & LED Neon Illumination',
      category: 'Lighting',
      aspectRatio: 'portrait',
    },
    {
      id: 'h-ba-3',
      url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop',
      title: 'Anniversary Candlelight Stage & Floral Canopy',
      category: 'Florals',
      aspectRatio: 'landscape',
    },
  ],
};

export function getExtendedGalleryForService(
  serviceSlug: string,
  sanityImages: string[] = [],
  sanityMediaList: any[] = []
): ExtendedGalleryImage[] {
  const result: ExtendedGalleryImage[] = [];
  const existingUrls = new Set<string>();

  // 1. First priority: Real Sanity Service Gallery Images
  if (Array.isArray(sanityImages) && sanityImages.length > 0) {
    const defaultTitlesByCategory: Record<string, string[]> = {
      Mandap: ['Bespoke Mandap Architecture & Sacred Canopy', 'Vedic Mandap Pavilion', 'Royal Floral Mandap'],
      Florals: ['Jasmine & Rose Floral Canopy', 'Exquisite Floral Wall Decor', 'Fresh Marigold Accents'],
      Stage: ['Royal Chandelier Stage & Velvet Styling', 'Grand Backdrop & Custom Rigging', 'Luxury Couple Seating'],
      Lighting: ['Ambient Fairy Light & Chandelier Rigging', 'Warm Stage Ambiance', 'Illuminated Night Pathway'],
      Entrances: ['Grand Entrance Marigold Tunnel', 'Royal Archway Welcome Canopy', 'Artisanal Gateways'],
      Details: ['Traditional Brass Uruli Welcome Pod', 'Dining Banquet Decor', 'Handcrafted Accents'],
      Celebrations: ['Curated Celebration Styling', 'Grand Festive Decor'],
    };

    sanityImages.forEach((img, idx) => {
      const imgUrl =
        typeof img === 'string'
          ? img
          : typeof img === 'object' && img !== null
          ? (img as any).url || (img as any).asset?.url || (img as any).secure_url
          : undefined;

      const rawCustomTitle =
        typeof img === 'object' && img !== null && typeof (img as any).title === 'string'
          ? (img as any).title
          : undefined;

      const rawCustomCategory =
        typeof img === 'object' && img !== null && typeof (img as any).category === 'string'
          ? (img as any).category
          : undefined;

      if (typeof imgUrl === 'string' && imgUrl.trim().length > 0 && !existingUrls.has(imgUrl)) {
        existingUrls.add(imgUrl);
        const category: 'Mandap' | 'Florals' | 'Lighting' | 'Stage' | 'Entrances' | 'Details' | 'Celebrations' =
          (rawCustomCategory as any) || (idx === 0 ? 'Mandap' : idx % 2 === 0 ? 'Florals' : 'Stage');
        const titleList = defaultTitlesByCategory[category] || ['Bespoke Decor Setup'];
        const fallbackTitle = titleList[idx % titleList.length];

        result.push({
          id: `sanity-service-img-${idx}`,
          url: imgUrl,
          title: rawCustomTitle || fallbackTitle,
          category,
          isSanity: true,
          aspectRatio: idx % 3 === 0 ? 'landscape' : idx % 3 === 1 ? 'portrait' : 'square',
        });
      }
    });
  }

  // 2. Second priority: Real Sanity Gallery Media Items uploaded in Sanity Studio
  if (Array.isArray(sanityMediaList) && sanityMediaList.length > 0) {
    sanityMediaList.forEach((media, idx) => {
      const mediaImages = Array.isArray(media.images) && media.images.length > 0
        ? media.images
        : media.thumbnail
        ? [media.thumbnail]
        : [];

      mediaImages.forEach((url: string, imgIdx: number) => {
        if (typeof url === 'string' && url.trim().length > 0 && !existingUrls.has(url)) {
          existingUrls.add(url);
          const rawCat = (media.category || 'Celebrations').trim();
          const validCat: 'Mandap' | 'Florals' | 'Lighting' | 'Stage' | 'Entrances' | 'Details' | 'Celebrations' =
            ['Mandap', 'Florals', 'Lighting', 'Stage', 'Entrances', 'Details', 'Celebrations'].includes(rawCat)
              ? (rawCat as any)
              : 'Stage';

          result.push({
            id: `sanity-media-${idx}-${imgIdx}`,
            url,
            title: media.title || 'Hanvi Events Celebration',
            category: validCat,
            isSanity: true,
            aspectRatio: (idx + imgIdx) % 2 === 0 ? 'landscape' : 'portrait',
          });
        }
      });
    });
  }

  // 3. If there are fewer than 4 images from Sanity, fill with authentic defaults
  if (result.length < 4) {
    const normSlug = (serviceSlug || '').toLowerCase().trim();
    const defaults = authenticHanviDefaults[normSlug] || authenticHanviDefaults['weddings-receptions'];
    defaults.forEach((def) => {
      if (!existingUrls.has(def.url)) {
        existingUrls.add(def.url);
        result.push(def);
      }
    });
  }

  return result;
}
