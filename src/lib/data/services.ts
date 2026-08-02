import { ServiceCategory } from '../types';

export const servicesData: ServiceCategory[] = [
  {
    id: 'bridal-makeup',
    slug: 'bridal-makeup',
    title: 'Bridal Makeup',
    category: 'Beauty & Styling',
    subtitle: 'HD & Airbrush Bridal Makeovers, Guest Touch-up Pods & Floral Hair Styling',
    tagline: 'Signature Luxury Beauty & Radiance',
    description: 'Our flagship premium beauty lounge service. High-definition HD and airbrush bridal makeovers, saree draping with fresh floral hair sculpting, guest touch-up stations, and live nail-art stalls for sangeet and mehendi galas.',
    shortDescription: 'Flagship HD & Airbrush bridal makeup, floral hair sculpting, saree draping & guest touch-up pods.',
    startingPrice: '₹15,000',
    duration: '3 - 5 Hours',
    featured: true,
    displayOrder: 1,
    icon: 'sparkles',
    seoTitle: 'Bridal Makeup Services in Kakinada & AP | Hanvi Events',
    seoDescription: 'Premium HD & Airbrush bridal makeup, saree draping, and floral hair sculpting by Hanvi Events in Kakinada & Andhra Pradesh.',
    heroImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    ],
    features: [
      'HD & Airbrush Long-Lasting Waterproof Bridal Makeup',
      'Traditional Silk Saree Draping & Hair Styling with Fresh Florals',
      'Guest Beauty Touch-Up Stations at Venue',
      'Live Nail-Art & Manicure Stalls for Sangeet & Mehendi',
    ],
    relatedServices: ['weddings-receptions', 'decoration-theme-setup', 'catering-food-services'],
    faq: [
      {
        question: 'Are makeup trial sessions available for brides?',
        answer: 'Yes, bridal trial makeups can be scheduled at our Kakinada studio prior to the main function date.',
      },
    ],
  },
  {
    id: 'weddings-receptions',
    slug: 'weddings-receptions',
    title: 'Weddings & Receptions',
    category: 'Weddings',
    subtitle: 'Grand Vedic Mandaps, Hospitality Hostesses & Complete Orchestration',
    tagline: 'Timeless Sacred Unions',
    description: 'Complete marriage and reception orchestration from grand mandap floral setups, welcoming hostesses (Welcome Girls), bangle stalls, royal mandap architecture, and full logistics management.',
    shortDescription: 'Grand Vedic mandap setups, Welcome Girls, bangle stalls & complete marriage orchestration.',
    startingPrice: '₹1,50,000',
    duration: 'Full Day Event',
    featured: false,
    displayOrder: 2,
    icon: 'heart',
    seoTitle: 'Wedding & Reception Planning Kakinada | Hanvi Events',
    seoDescription: 'Grand Vedic mandap setups, welcoming hostesses, and complete wedding planning in Kakinada by Hanvi Events.',
    heroImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    ],
    features: [
      'Grand Mandap Floral Sculptures & Rajanigandha Canopy',
      'Professional Welcome Girls & Hospitality Hostesses',
      'Traditional Bangle & Flower Stalls for Guests',
      'Royal Bride & Groom Grand Entrance Setups',
      'Comprehensive Catering Support & Coordination',
    ],
    relatedServices: ['bridal-makeup', 'decoration-theme-setup', 'catering-food-services'],
    faq: [
      {
        question: 'Do you provide Welcome Girls for wedding guest hospitality?',
        answer: 'Yes! Hanvi Events provides professionally trained Welcome Girls for guest receptions, floral petal welcomes, and bangle stalls.',
      },
    ],
  },
  {
    id: 'birthdays-anniversaries',
    slug: 'birthdays-anniversaries',
    title: 'Birthdays & Anniversaries',
    category: 'Milestone Parties',
    subtitle: 'Surprise Celebrations, 3D Balloon Arches & Milestone Galas',
    tagline: 'Joyous Celebrations for Every Milestone',
    description: 'Transforming birthdays and anniversary milestones into magical realms with custom 3D balloon arches, cake backdrops, secret surprise event arrangements, memory photo walls, and acoustic entertainment.',
    shortDescription: 'Custom 3D balloon arches, surprise event setups, cake backdrops & memory walls.',
    startingPrice: '₹15,000',
    duration: '4 - 6 Hours',
    featured: false,
    displayOrder: 3,
    icon: 'party-popper',
    seoTitle: 'Birthday & Anniversary Event Organizers Kakinada | Hanvi Events',
    seoDescription: 'Custom 3D balloon arches, surprise birthday setups, and milestone galas in Kakinada by Hanvi Events.',
    heroImage: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=800&auto=format&fit=crop',
    ],
    features: [
      'Custom 3D Balloon Structures & Organic Arches',
      'Surprise Event Arrangements & Gift Entrances',
      'Candlelight Romantic Table & Archway Styling',
      'Theme Cake Display & Ambient Lighting Pods',
    ],
    relatedServices: ['bridal-makeup', 'decoration-theme-setup', 'catering-food-services'],
    faq: [
      {
        question: 'Can you organize surprise birthday events in Kakinada?',
        answer: 'Yes, we specialize in secret surprise event setups, surprise entrance decor, and live acoustic music.',
      },
    ],
  },
  {
    id: 'corporate-events',
    slug: 'corporate-events',
    title: 'Corporate Events & Conferences',
    category: 'Corporate Staging',
    subtitle: 'Showroom Openings, Executive Summits & Brand Staging',
    tagline: 'Professional Elegance & Brand Prestige',
    description: 'Executive stage designs, showroom grand opening arches, podium backdrops, banquet styling, audio-visual rigging, and catering support for corporate summits and brand launches.',
    shortDescription: 'Showroom ribbon arches, podium backdrops, audio-visual rigs & corporate catering.',
    startingPrice: '₹40,000',
    duration: 'Full Day Event',
    featured: false,
    displayOrder: 4,
    icon: 'briefcase',
    seoTitle: 'Corporate Event Management Kakinada | Hanvi Events',
    seoDescription: 'Showroom launches, corporate summits, podium backdrops, and event management by Hanvi Events in Kakinada.',
    heroImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop',
    ],
    features: [
      'Custom Corporate Backdrop & Podium Staging',
      'Grand Opening Floral Arches & Ribbon Setups',
      'Full Catering Support & Hospitality Management',
      'Audio-Visual & Lighting Rigging',
    ],
    relatedServices: ['catering-food-services', 'decoration-theme-setup'],
    faq: [
      {
        question: 'Who manages corporate events at Hanvi Events?',
        answer: 'Every corporate event is personally supervised by Event Director Ch. Kala Prasad.',
      },
    ],
  },
  {
    id: 'decoration-theme-setup',
    slug: 'decoration-theme-setup',
    title: 'Decoration & Theme Setup',
    category: 'Decor & Design',
    subtitle: 'Bespoke Floral Sculptures, Light Rigs & Custom Backdrops',
    tagline: 'Transforming Spaces into Fine Art',
    description: 'Extensive floral sculptures, entrance archways, stage backdrops, ceiling drapes, and LED intelligent lighting for traditional Muhurthams, Sangeet lounges, and modern get-togethers.',
    shortDescription: 'Bespoke floral sculptures, entrance arches, stage backdrops & intelligent lighting rigs.',
    startingPrice: '₹25,000',
    duration: 'Full Day Event',
    featured: false,
    displayOrder: 5,
    icon: 'palette',
    seoTitle: 'Event Decoration & Stage Styling Kakinada | Hanvi Events',
    seoDescription: 'Bespoke floral sculptures, stage backdrops, entrance arches, and lighting rigs in Kakinada by Hanvi Events.',
    heroImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop',
    ],
    features: [
      'Fresh Exotic Floral Arrangements & Sculptures',
      'Ceiling Draping & Fairy-Light Canopy Rigging',
      'Custom Stage Framing & Modern Backdrop Wall Arts',
      'Entrance Grand Archways & Welcome Standees',
    ],
    relatedServices: ['bridal-makeup', 'weddings-receptions', 'catering-food-services'],
    faq: [
      {
        question: 'Do you supply both artificial and fresh flower decorations?',
        answer: 'Yes, we provide 100% fresh flowers, high-grade silk artificial florals, or a hybrid combination based on budget.',
      },
    ],
  },
  {
    id: 'catering-food-services',
    slug: 'catering-food-services',
    title: 'Catering & Food Services',
    category: 'Catering Feasts',
    subtitle: 'Authentic South Indian Banquets & International Fine Dining',
    tagline: 'Delectable Feasts Crafted with Perfection',
    description: 'Comprehensive wedding banquet catering, traditional banana leaf feasts (Vindhu Bhojanam), live counter food stalls, mocktail bars, and dessert displays.',
    shortDescription: 'Traditional banana leaf feasts, multi-cuisine buffets, live food counters & dessert bars.',
    startingPrice: '₹40,000',
    duration: 'Event Duration',
    featured: false,
    displayOrder: 6,
    icon: 'utensils',
    seoTitle: 'Catering & Food Services Kakinada | Hanvi Events',
    seoDescription: 'Traditional banana leaf feasts, multi-cuisine buffets, and live food counters by Hanvi Events in Kakinada.',
    heroImage: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop',
    ],
    features: [
      'Traditional Andhra vindhu bhojanam on fresh banana leaves',
      'Multi-cuisine buffet setups (North & South Indian, Chinese, Continental)',
      'Live Chaat, Dosa, BBQ & Mocktail Counter Pods',
      'Professional uniformed serving staff & hygiene supervision',
    ],
    relatedServices: ['weddings-receptions', 'corporate-events', 'decoration-theme-setup'],
    faq: [
      {
        question: 'Can we schedule a food tasting session before booking?',
        answer: 'Yes! We arrange menu sampling sessions for families planning weddings and major banquets.',
      },
    ],
  },
  {
    id: 'entertainment-live-performances',
    slug: 'entertainment-live-performances',
    title: 'Entertainment & Live Performances',
    category: 'Live Entertainment',
    subtitle: 'DJs, Concert Sound Systems, Live Acoustic Bands & Anchors',
    tagline: 'Electrifying Rhythm & Unforgettable Spectacle',
    description: 'Professional event DJs, concert-grade Line Array sound systems, intelligent moving lights, live acoustic bands, Punjabi Dhol Tasha troupes, and bilingual celebrity anchors.',
    shortDescription: 'Professional DJs, concert-grade sound, live acoustic bands, Punjabi Dhol & emcees.',
    startingPrice: '₹20,000',
    duration: '4 - 6 Hours',
    featured: false,
    displayOrder: 7,
    icon: 'music',
    seoTitle: 'Live DJ & Entertainment Services Kakinada | Hanvi Events',
    seoDescription: 'Professional DJs, live acoustic music bands, Punjabi Dhol troupes, and sound systems in Kakinada by Hanvi Events.',
    heroImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop',
    ],
    features: [
      'Professional Celebrity & Event DJs with Live Mixing',
      'Concert-Grade JBL / RCF Line Array Sound Rigs',
      'Live Acoustic Fusion Bands & Singer Performers',
      'Bilingual Professional Event Anchors & Emcees',
    ],
    relatedServices: ['bridal-makeup', 'weddings-receptions', 'birthdays-anniversaries'],
    faq: [
      {
        question: 'Can you arrange Telugu and Hindi bilingual event anchors?',
        answer: 'Yes, our professional anchors speak fluent English, Telugu, and Hindi.',
      },
    ],
  },
];

/**
 * Get all services list
 */
export function getAllServices(): ServiceCategory[] {
  return servicesData;
}

/**
 * Get service by slug
 */
export function getServiceBySlug(slug: string): ServiceCategory | undefined {
  const normalized = slug.toLowerCase().trim();
  let found = servicesData.find((s) => s.slug === normalized);
  if (found) return found;

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

  const mappedSlug = aliasMap[normalized];
  if (mappedSlug) {
    return servicesData.find((s) => s.slug === mappedSlug);
  }

  return undefined;
}

/**
 * Get dynamic related services for a given service slug
 */
export function getRelatedServices(slug: string): ServiceCategory[] {
  const currentService = getServiceBySlug(slug);
  if (!currentService) {
    return servicesData.slice(0, 4);
  }
  return servicesData.filter((s) => s.slug !== currentService.slug).slice(0, 4);
}
