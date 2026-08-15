export interface ExtendedGalleryImage {
  id: string;
  url: string;
  title: string;
  category: 'Mandap' | 'Florals' | 'Lighting' | 'Stage' | 'Entrances' | 'Details' | 'Celebrations';
  aspectRatio?: 'landscape' | 'portrait' | 'square';
  isSanity?: boolean;
}

export const curatedServiceGalleries: Record<string, ExtendedGalleryImage[]> = {
  'weddings-receptions': [
    {
      id: 'wr-1',
      url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
      title: 'Sacred Golden Hour Mandap Architecture',
      category: 'Mandap',
      aspectRatio: 'landscape',
    },
    {
      id: 'wr-2',
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
      title: 'Jasmine & Rose Floral Canopy Installation',
      category: 'Florals',
      aspectRatio: 'portrait',
    },
    {
      id: 'wr-3',
      url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop',
      title: 'Royal Chandelier Stage & Velvet Sofa Styling',
      category: 'Stage',
      aspectRatio: 'landscape',
    },
    {
      id: 'wr-4',
      url: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=1200&auto=format&fit=crop',
      title: 'Grand Entrance Marigold Tunnel & Brass Lamps',
      category: 'Entrances',
      aspectRatio: 'portrait',
    },
    {
      id: 'wr-5',
      url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop',
      title: 'Ambient Fairy Light & Crystal Chandelier Rigging',
      category: 'Lighting',
      aspectRatio: 'landscape',
    },
    {
      id: 'wr-6',
      url: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=1200&auto=format&fit=crop',
      title: 'Traditional Brass Uruli & Petal Float Welcome Pod',
      category: 'Details',
      aspectRatio: 'square',
    },
    {
      id: 'wr-7',
      url: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1200&auto=format&fit=crop',
      title: 'Royal Couple Seating & Floral Wall Backdrops',
      category: 'Stage',
      aspectRatio: 'landscape',
    },
    {
      id: 'wr-8',
      url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1200&auto=format&fit=crop',
      title: 'Vedic Fire Kund & Petal Shower Muhurtham Setup',
      category: 'Mandap',
      aspectRatio: 'portrait',
    },
    {
      id: 'wr-9',
      url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop',
      title: 'Banquet Table Floral Runner & Linen Dining Setups',
      category: 'Details',
      aspectRatio: 'landscape',
    },
    {
      id: 'wr-10',
      url: 'https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=1200&auto=format&fit=crop',
      title: 'Illuminated Pathway & Night Gala Ambiance',
      category: 'Lighting',
      aspectRatio: 'portrait',
    },
  ],
  'bridal-makeup': [
    {
      id: 'bm-1',
      url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop',
      title: 'HD Airbrush Bridal Glam & Jewel Highlights',
      category: 'Details',
      aspectRatio: 'portrait',
    },
    {
      id: 'bm-2',
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop',
      title: 'Traditional Floral Braid Sculpting & Jasmine Gajra',
      category: 'Florals',
      aspectRatio: 'landscape',
    },
    {
      id: 'bm-3',
      url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop',
      title: 'Saree Draping Lounge & Bridal Styling Suite',
      category: 'Stage',
      aspectRatio: 'square',
    },
    {
      id: 'bm-4',
      url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop',
      title: 'Live Nail Art & Manicure Station for Guests',
      category: 'Details',
      aspectRatio: 'landscape',
    },
    {
      id: 'bm-5',
      url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1200&auto=format&fit=crop',
      title: 'Guest Touch-Up Vanity & Mirror Lighting Rigs',
      category: 'Lighting',
      aspectRatio: 'portrait',
    },
    {
      id: 'bm-6',
      url: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1200&auto=format&fit=crop',
      title: 'Fresh Rose & Lotus Hair Crown Artistry',
      category: 'Florals',
      aspectRatio: 'landscape',
    },
  ],
  'birthdays-anniversaries': [
    {
      id: 'ba-1',
      url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1200&auto=format&fit=crop',
      title: 'Organic Pastel 3D Balloon Arch & Gold Backdrop',
      category: 'Stage',
      aspectRatio: 'landscape',
    },
    {
      id: 'ba-2',
      url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop',
      title: 'Surprise Cake Table & Custom LED Neon Signs',
      category: 'Lighting',
      aspectRatio: 'portrait',
    },
    {
      id: 'ba-3',
      url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop',
      title: 'Milestone Anniversary Candlelight Arch & Flowers',
      category: 'Florals',
      aspectRatio: 'landscape',
    },
    {
      id: 'ba-4',
      url: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1200&auto=format&fit=crop',
      title: 'Confetti Rain & Ambient Stage Illumination',
      category: 'Celebrations',
      aspectRatio: 'portrait',
    },
    {
      id: 'ba-5',
      url: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1200&auto=format&fit=crop',
      title: 'Memory Photo Wall & Retro Fairy Light Grid',
      category: 'Details',
      aspectRatio: 'landscape',
    },
  ],
  'corporate-events': [
    {
      id: 'ce-1',
      url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
      title: 'Executive Summit Stage & LED Wall Branding',
      category: 'Stage',
      aspectRatio: 'landscape',
    },
    {
      id: 'ce-2',
      url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop',
      title: 'Showroom Grand Opening Floral Arch & Ribbon Setup',
      category: 'Entrances',
      aspectRatio: 'portrait',
    },
    {
      id: 'ce-3',
      url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop',
      title: 'Intelligent Podium Lighting & AV Sound Rigging',
      category: 'Lighting',
      aspectRatio: 'landscape',
    },
    {
      id: 'ce-4',
      url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200&auto=format&fit=crop',
      title: 'Corporate Banquet Dining & Table Protocol Styling',
      category: 'Details',
      aspectRatio: 'square',
    },
  ],
  'decoration-theme-setup': [
    {
      id: 'dt-1',
      url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop',
      title: 'Bespoke Floral Sculptures & Ceiling Draping',
      category: 'Florals',
      aspectRatio: 'landscape',
    },
    {
      id: 'dt-2',
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
      title: 'Intelligent Moving Light Rigs & Stage Framing',
      category: 'Lighting',
      aspectRatio: 'portrait',
    },
    {
      id: 'dt-3',
      url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
      title: 'Grand Tunnel Entrance with Brass Lamps & Flowers',
      category: 'Entrances',
      aspectRatio: 'landscape',
    },
    {
      id: 'dt-4',
      url: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=1200&auto=format&fit=crop',
      title: 'Traditional Uruli & Marigold Petal Rangoli Wall Art',
      category: 'Details',
      aspectRatio: 'portrait',
    },
    {
      id: 'dt-5',
      url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop',
      title: 'Royal Mandap Stage Backdrop & Chandelier Rig',
      category: 'Stage',
      aspectRatio: 'landscape',
    },
  ],
  'catering-food-services': [
    {
      id: 'cf-1',
      url: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200&auto=format&fit=crop',
      title: 'Traditional Andhra Banana Leaf Banquet Presentation',
      category: 'Details',
      aspectRatio: 'landscape',
    },
    {
      id: 'cf-2',
      url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop',
      title: 'Multi-Cuisine Luxury Buffet Table Lighting',
      category: 'Lighting',
      aspectRatio: 'portrait',
    },
    {
      id: 'cf-3',
      url: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=1200&auto=format&fit=crop',
      title: 'Live Chaat & Mocktail Bar Pod Setup',
      category: 'Entrances',
      aspectRatio: 'landscape',
    },
    {
      id: 'cf-4',
      url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',
      title: 'Exotic Fruit & Royal Indian Dessert Display',
      category: 'Details',
      aspectRatio: 'square',
    },
  ],
  'entertainment-live-performances': [
    {
      id: 'el-1',
      url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop',
      title: 'Concert Sound Rigs & Intelligent Moving Lights',
      category: 'Lighting',
      aspectRatio: 'landscape',
    },
    {
      id: 'el-2',
      url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop',
      title: 'Celebrity DJ Console & LED Screen Visuals',
      category: 'Stage',
      aspectRatio: 'portrait',
    },
    {
      id: 'el-3',
      url: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=1200&auto=format&fit=crop',
      title: 'Punjabi Dhol Tasha Troupe & Baraat Dance Party',
      category: 'Celebrations',
      aspectRatio: 'landscape',
    },
    {
      id: 'el-4',
      url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop',
      title: 'Live Fusion Band & Vocalist Performance Stage',
      category: 'Stage',
      aspectRatio: 'portrait',
    },
  ],
};

export function getExtendedGalleryForService(
  serviceSlug: string,
  sanityImages: string[] = []
): ExtendedGalleryImage[] {
  const result: ExtendedGalleryImage[] = [];

  // 1. First add any images uploaded via Sanity CMS
  if (Array.isArray(sanityImages) && sanityImages.length > 0) {
    const defaultTitlesByCategory: Record<string, string[]> = {
      Mandap: [
        'Bespoke Mandap Architecture & Sacred Canopy',
        'Golden Hour Vedic Mandap Pavilion',
        'Royal Floral Mandap & Petal Backdrop',
      ],
      Florals: [
        'Jasmine & Rose Floral Canopy Installation',
        'Exquisite Artisanal Floral Wall & Garland Decor',
        'Fresh Marigold & Orchid Floral Accents',
      ],
      Stage: [
        'Royal Chandelier Stage & Velvet Styling',
        'Grand Backdrop & Custom Stage Rigging',
        'Luxury Couple Seating & Floral Backdrop',
      ],
      Lighting: [
        'Ambient Fairy Light & Chandelier Rigging',
        'Intelligent Moving Lights & Warm Ambiance',
        'Illuminated Pathway & Night Gala Lighting',
      ],
      Entrances: [
        'Grand Entrance Marigold Tunnel & Brass Lamps',
        'Royal Archway & Welcome Canopy',
        'Artisanal Entrance Floral Gateways',
      ],
      Details: [
        'Traditional Brass Uruli & Petal Float Welcome Pod',
        'Banquet Table Floral Runner & Linen Dining Setup',
        'Custom Handcrafted Decor Accents & Elements',
      ],
      Celebrations: [
        'Curated Celebration Styling & Ambience',
        'Grand Event Decor & Festive Setups',
      ],
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

      if (typeof imgUrl === 'string' && imgUrl.trim().length > 0) {
        const category: 'Mandap' | 'Florals' | 'Lighting' | 'Stage' | 'Entrances' | 'Details' | 'Celebrations' =
          (rawCustomCategory as any) || (idx === 0 ? 'Mandap' : idx % 2 === 0 ? 'Florals' : 'Stage');
        const titleList = defaultTitlesByCategory[category] || ['Bespoke Decor & Theme Setup'];
        const fallbackTitle = titleList[idx % titleList.length];

        const hasValidCustomTitle =
          typeof rawCustomTitle === 'string' &&
          rawCustomTitle.trim().length > 0 &&
          !rawCustomTitle.includes('Sanity CMS');

        result.push({
          id: `sanity-img-${idx}`,
          url: imgUrl,
          title: hasValidCustomTitle ? rawCustomTitle : fallbackTitle,
          category,
          isSanity: true,
          aspectRatio: idx % 3 === 0 ? 'landscape' : idx % 3 === 1 ? 'portrait' : 'square',
        });
      }
    });
  }

  // 2. Normalize slug to fetch curated high-res showcase photos
  const normSlug = (serviceSlug || '').toLowerCase().trim();
  const aliasMap: Record<string, string> = {
    'wedding-planning': 'weddings-receptions',
    'marriage-weddings': 'weddings-receptions',
    'birthday-parties': 'birthdays-anniversaries',
    'birthday-events': 'birthdays-anniversaries',
    'sangeet-mehandi': 'bridal-makeup',
    'mehendi': 'bridal-makeup',
    'makeup': 'bridal-makeup',
    'cradle-ceremony': 'birthdays-anniversaries',
    'anniversary-get-together': 'birthdays-anniversaries',
    'corporate-decorations': 'corporate-events',
    'decoration': 'decoration-theme-setup',
    'catering': 'catering-food-services',
    'dj': 'entertainment-live-performances',
    'entertainment': 'entertainment-live-performances',
    'venue-booking': 'weddings-receptions',
  };

  const targetKey = aliasMap[normSlug] || normSlug;
  const curated = curatedServiceGalleries[targetKey] || curatedServiceGalleries['weddings-receptions'];

  // 3. Append curated photos, filtering out exact duplicate URLs
  const existingUrls = new Set(result.map((r) => r.url));
  curated.forEach((item) => {
    if (!existingUrls.has(item.url)) {
      result.push(item);
    }
  });

  return result;
}
