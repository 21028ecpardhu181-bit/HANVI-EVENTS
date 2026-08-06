import { CelebrationCategory } from '../types';

export interface WeddingExperienceDetail {
  id: string;
  slug: 'hindu' | 'christian' | 'muslim' | string;
  title: string;
  shortTitle: string;
  tagline: string;
  subtitle: string;
  region?: string;
  videoUrl?: string;
  description: string;
  culturalBackground: string;
  storyQuote: string;
  quoteAuthor: string;
  floralStyle: string;
  lightingStyle: string;
  paletteDescription: string;
  paletteSwatches: { name: string; hex: string }[];
  bgGradient: string;
  heroImage: string;
  galleryImages: string[];
  ritualMilestones: {
    step: string;
    title: string;
    description: string;
    spatialDecor: string;
  }[];
  signatureFeatures: {
    title: string;
    description: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export const celebrationCategories: CelebrationCategory[] = [
  {
    id: 'marriage-weddings',
    slug: 'marriage-weddings',
    title: 'Marriage & Wedding Planning',
    subtitle: 'Grand Vedic Mandaps & Welcome Girls Stalls',
    tagline: 'Timeless Sacred Unions',
    description: 'Complete marriage orchestration from grand mandap floral setups, welcoming hostesses (Welcome Girls), bangle stalls, and royal mandap architecture.',
    startingPrice: '₹1,50,000',
    heroImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    ],
    features: [
      'Grand Mandap Floral Sculptures',
      'Professional Welcome Girls & Hospitality Hostesses',
      'Traditional Bangle & Flower Stalls',
      'Royal Bride & Groom Grand Entrance Setups',
      'Comprehensive Catering Support & Coordination',
    ],
    faq: [
      {
        question: 'Do you provide Welcome Girls for wedding guest hospitality?',
        answer: 'Yes! Hanvi Events provides professionally trained Welcome Girls for guest receptions, floral petal welcomes, and bangle stalls.',
      },
    ],
  },
  {
    id: 'birthday-parties',
    slug: 'birthday-parties',
    title: 'Birthday Parties & Balloon Decor',
    subtitle: 'Surprise Parties, Theme Balloons & Entertainment',
    tagline: 'Joyous Celebrations for Every Age',
    description: 'Transforming birthday milestones into magical realms with custom balloon arches, cake backdrops, surprise event arrangements, and acoustic entertainment.',
    startingPrice: '₹15,000',
    heroImage: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800&auto=format&fit=crop',
    ],
    features: [
      'Custom 3D Balloon Structures & Backdrops',
      'Surprise Event Arrangements & Gift Entrances',
      'Entertainment & Music System Coordination',
      'Theme Cake Display & Lighting Pods',
    ],
    faq: [
      {
        question: 'Can you organize surprise birthday events in Kakinada?',
        answer: 'Yes, we specialize in secret surprise event setups, surprise entrance decor, and live acoustic music for birthdays.',
      },
    ],
  },
  {
    id: 'sangeet-mehandi',
    slug: 'sangeet-mehandi',
    title: 'Sangeet, Mehandi & Nail Art',
    subtitle: 'Boho Henna Lounges, Bridal Make-up & Nail Art Stalls',
    tagline: 'Vibrant Festive Beats & Artistry',
    description: 'Lush marigold curtains, boho seating, professional Mehandi artists, bridal makeup artists, nail-art stalls, and high-energy concert staging.',
    startingPrice: '₹35,000',
    heroImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop',
    ],
    features: [
      'Lush Yellow & Orange Marigold Lounges',
      'Professional Bridal Make-up & Nail-Art Stalls',
      'Live Henna & Mehandi Artists for Guests',
      'Concert-Grade Staging & Intelligent Moving Lights',
    ],
    faq: [
      {
        question: 'Do you arrange nail-art and make-up stalls at Mehandi events?',
        answer: 'Yes! We arrange specialized beauty pods including nail-art, guest makeup touch-up stations, and live Mehandi artists.',
      },
    ],
  },
  {
    id: 'cradle-ceremony',
    slug: 'cradle-ceremony',
    title: 'Cradle Ceremony & Naming Events',
    subtitle: 'Floral Cradles, Namakaran & Blessing Setups',
    tagline: 'Sacred Welcomes for Little Angels',
    description: 'Charming pastel flower cradles, auspicious brass diya arrangements, and cozy dining setups for family cradle ceremonies (Namakaran).',
    startingPrice: '₹20,000',
    heroImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    ],
    features: [
      'Handcrafted Fresh Floral Cradle Suspensions',
      'Auspicious Brass Uruli Diya & Jasmine Backdrop',
      'Personalized Baby Name Archways',
      'Intimate Family Dining Decor',
    ],
    faq: [
      {
        question: 'Can the cradle decor be customized with specific flowers?',
        answer: 'Absolutely. We use fresh Rajanigandha, roses, and orchids tailored to your family preference.',
      },
    ],
  },
  {
    id: 'anniversary-get-together',
    slug: 'anniversary-get-together',
    title: 'Anniversary & Get-Together Parties',
    subtitle: 'Milestone Celebrations & Intimate Family Galas',
    tagline: 'Cherishing Years of Love',
    description: 'Bespoke romantic candlelight dining setups, anniversary stage backdrops, lounge seating, and family get-together event management.',
    startingPrice: '₹25,000',
    heroImage: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=800&auto=format&fit=crop',
    ],
    features: [
      'Candlelight Romantic Table & Archway Styling',
      'Custom Memory Photo Gallery Walls',
      'Acoustic Live Music & Sound System',
      'Catering Support & Buffet Counter Decor',
    ],
    faq: [
      {
        question: 'Do you manage indoor and outdoor family get-togethers?',
        answer: 'Yes, we design both intimate home venues and large hotel banquet halls across Kakinada and surrounding cities.',
      },
    ],
  },
  {
    id: 'corporate-decorations',
    slug: 'corporate-decorations',
    title: 'Corporate Events & All Types of Decorations',
    subtitle: 'Showroom Launches, Stage Podiums & Custom Decor',
    tagline: 'Professional Elegance & Brand Staging',
    description: 'Executive stage designs, showroom grand opening arches, podium backdrops, banquet styling, and catering support for corporate summits.',
    startingPrice: '₹40,000',
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
    faq: [
      {
        question: 'Who manages the event execution at Hanvi Events?',
        answer: 'Every event is personally supervised by Event Manager Ch. Kala Prasad to ensure 100% flawless execution.',
      },
    ],
  },
];

export const weddingExperienceTypes: WeddingExperienceDetail[] = [
  {
    id: 'hindu-telugu',
    slug: 'hindu',
    title: 'Hindu Marriage Ceremonies',
    shortTitle: 'Hindu Weddings',
    subtitle: 'Vedic Heritage & Royal Mandap Architecture',
    tagline: 'Auspicious Rituals • Sacred Agni Homa • Temple Artistry',
    description: 'From Pellikuthuru turmeric oil baths and sacred Gauri Pujas to grand 4-pillar Vedic temple mandaps wrapped in 40,000 fresh jasmine strands, we honor every sacred ritual with authentic spatial perfection.',
    culturalBackground: 'Rooted in Vedic tradition and the sacred Panchabhutaalu (Earth, Sky, Fire, Water, Air), traditional Telugu Hindu marriages embody divine sanctity. We craft architectural mandaps honoring Agni Homa, Talambralu, and Kanyadaan.',
    storyQuote: 'Every detail in our mandap felt like a divine blessing. Ch. Kala Prasad supervised the entire execution seamlessly.',
    quoteAuthor: 'Ananya & Rahul (Rajahmundry Vedic Marriage)',
    floralStyle: '40,000 Fresh Jasmine Strands, Rajanigandha Columns & Marigold Walls',
    lightingStyle: 'Warm 2700K Directional Illumination & Brass Kuthuvilakku Flames',
    paletteDescription: 'Auspicious Vermilion Red, Sacred Turmeric Gold, Ivory Jasmine & Banana Leaf Green',
    paletteSwatches: [
      { name: 'Temple Vermilion', hex: '#7A1C29' },
      { name: 'Sacred Turmeric Gold', hex: '#B88A44' },
      { name: 'Ivory Jasmine', hex: '#FCF9F5' },
      { name: 'Vedic Banana Leaf', hex: '#344A32' },
    ],
    bgGradient: 'from-[#34281F] via-[#5C1A24] to-[#34281F]',
    heroImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop',
    ],
    ritualMilestones: [
      {
        step: '01',
        title: 'Pellikuthuru & Pellikoduku (Nalugu)',
        description: 'Purifying herbal turmeric paste ritual for bride & groom in their respective homes.',
        spatialDecor: 'Lush yellow & orange marigold backdrops, traditional brass urulis & low wooden chowkis.',
      },
      {
        step: '02',
        title: 'Snathakam & Kashi Yatra',
        description: 'Sacred thread investiture followed by the playful Kashi Yatra ritual.',
        spatialDecor: 'Traditional banana leaf pillars, silver umbrella props & carved wooden seating.',
      },
      {
        step: '03',
        title: 'Gauri Puja & Tera Separation',
        description: 'Bride prays to Goddess Gauri; couple separated by ceremonial silk curtain until Muhurtham.',
        spatialDecor: 'Embroidered silk Tera curtain, terracotta kalash pots & jasmine floral dividers.',
      },
      {
        step: '04',
        title: 'Muhurtham & Talambralu Shower',
        description: 'Sacred Jeelakarra Bellam placement on bride & groom head, followed by joyful pearl/rice showers.',
        spatialDecor: '4-Pillar Temple Mandap, brass Agni Kunda, and elevated Talambralu bowls.',
      },
    ],
    signatureFeatures: [
      {
        title: 'Welcome Girls & Bangle Stalls',
        description: 'Dressed in traditional silk sarees, our trained Welcome Girls greet guests with sandalwood paste, rose water spray, and customizable glass bangle stalls.',
      },
      {
        title: 'Fresh Jasmine Mandap Ceiling',
        description: 'Over 40,000 fresh white Rajanigandha and jasmine strands hand-woven into a fragrant dense ceiling canopy directly above the couple.',
      },
    ],
    faq: [
      {
        question: 'How many days before the wedding do you start setting up the Vedic Mandap?',
        answer: 'Our architectural team begins structural timber framing 24 hours prior, with fresh floral sculpting completed 4 hours before the Muhurtham.',
      },
      {
        question: 'Are Welcome Girls and Bangle Stalls included in the Mandap package?',
        answer: 'Yes! Our Elegant and Royal packages include trained Welcome Girls and guest bangle stations.',
      },
    ],
  },
  {
    id: 'christian-wedding',
    slug: 'christian',
    title: 'Christian Cathedral & Beach Unions',
    shortTitle: 'Christian Weddings',
    subtitle: 'Sacred Altar Archways & Oceanfront Champagne Galas',
    tagline: 'Understated Elegance • White Floral Aisles • Candlelight Magic',
    description: 'Walk down pristine white rose-carpeted aisles lined with candlelit hurricane lanterns toward cathedral floral archways of Ecuadorian white roses and hydrangeas overlooking the ocean.',
    culturalBackground: 'Blending sacred church solemnity with romantic coastal receptions, Christian unions celebrate grace, purity, and lifelong covenant. We craft architectural altars and fairy-lit oceanfront banquets.',
    storyQuote: 'The ivory cathedral archway took everyone’s breath away. Pure understated luxury.',
    quoteAuthor: 'Kavya & David (Visakhapatnam Oceanfront Wedding)',
    floralStyle: 'Ecuadorian White Roses, Gypsophila (Baby’s Breath), White Orchids & Hydrangeas',
    lightingStyle: 'Soft Candlelight Hurricane Lanterns, Warm String Lights & Crystal Sconces',
    paletteDescription: 'Pristine Ivory Silk, Eucalyptus Sage Green, Dusty Rose Quartz & Champagne Gold',
    paletteSwatches: [
      { name: 'Ivory Silk', hex: '#FDFBF7' },
      { name: 'Eucalyptus Sage', hex: '#59624C' },
      { name: 'Dusty Rose Quartz', hex: '#C68F87' },
      { name: 'Champagne Gold', hex: '#B88A44' },
    ],
    bgGradient: 'from-[#34281F] via-[#2F3D32] to-[#34281F]',
    heroImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop',
    ],
    ritualMilestones: [
      {
        step: '01',
        title: 'The Processional Walk',
        description: 'Bridal entrance down the flower-adorned carpeted aisle with acoustic violin accompaniment.',
        spatialDecor: 'White rose-petal runner, brass hurricane lanterns, and eucalyptus-draped pews.',
      },
      {
        step: '02',
        title: 'Sacred Altar Vow Exchange',
        description: 'Exchanging eternal vows and rings beneath a towering floral cathedral archway.',
        spatialDecor: 'Full white rose & hydrangea arch, clear acrylic altar podium, and unity candle pillar.',
      },
      {
        step: '03',
        title: 'Oceanfront Sunset Toast',
        description: 'Cocktail hour and champagne toast as the sun sets over coastal waters.',
        spatialDecor: 'Lounge seating pods, floating candle pool bowls, and rustic wooden bar counters.',
      },
      {
        step: '04',
        title: 'Grand Reception Dinner Gala',
        description: 'First dance beneath fairy-light canopy followed by 5-course banquet dining.',
        spatialDecor: 'Overhead 10,000-fairy-light canopy, crystal table centerpieces, and cake stage.',
      },
    ],
    signatureFeatures: [
      {
        title: 'Cathedral Arch Architecture',
        description: 'Bespoke 12ft architectural altar arches woven with fresh Ecuadorian white roses, gypsophila, and cascading greenery.',
      },
      {
        title: 'Candlelit Aisle Pathways',
        description: 'Pristine white carpeted pathways bounded by hand-blown glass hurricane lanterns and pillar candles.',
      },
    ],
    faq: [
      {
        question: 'Do you manage outdoor beach resort weddings in Vizag & Kakinada Coast?',
        answer: 'Yes! We specialize in oceanfront resort staging with wind-anchored floral structures and waterproof lighting rigs.',
      },
    ],
  },
  {
    id: 'muslim-nikah',
    slug: 'muslim',
    title: 'Muslim Nikah & Walima Galas',
    shortTitle: 'Muslim Weddings',
    subtitle: 'Mughal Royal Velvet Partitions & Palace Galas',
    tagline: 'Imperial Opulence • Velvet Purdah Partitions • Crystal Chandeliers',
    description: 'Experience palace-scale grandeur with hand-carved Mughal royal archways, rich velvet Purdah partitions, multi-tier crystal chandeliers, and opulent dawat banquet lounges.',
    culturalBackground: 'Honoring Islamic Nikah sanctity and the celebratory joy of Walima, Muslim unions showcase timeless royal heritage. We recreate Mughal palace spatial luxury with exquisite privacy and hospitality.',
    storyQuote: 'The royal velvet partitions and crystal chandeliers made our Walima look like a palace gala.',
    quoteAuthor: 'Farhan & Sameera (Hyderabad & Vizag Walima Gala)',
    floralStyle: 'Royal Emerald Orchids, Red Velvet Roses, White Jasmine Partitions & Gold Brocade Drape',
    lightingStyle: 'Multi-Tier Crystal Chandeliers, Carved Moroccan Brass Lanterns & Warm Amber Sconces',
    paletteDescription: 'Royal Emerald Green, Imperial Ruby Velvet, Metallic Gold Brocade & Pearl Cream',
    paletteSwatches: [
      { name: 'Royal Emerald Green', hex: '#0D3B2E' },
      { name: 'Imperial Ruby Velvet', hex: '#661720' },
      { name: 'Metallic Gold Brocade', hex: '#B88A44' },
      { name: 'Pearl Cream', hex: '#FCF9F5' },
    ],
    bgGradient: 'from-[#34281F] via-[#123B2A] to-[#34281F]',
    heroImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    ],
    ritualMilestones: [
      {
        step: '01',
        title: 'The Nikah Contract Signing',
        description: 'Sacred Iqrar & Qubool signing ceremony conducted with privacy and reverence.',
        spatialDecor: 'Gold brocade Nikah stage, velvet seating cushions, and silver flower bouquet stands.',
      },
      {
        step: '02',
        title: 'Arsi Mashaf Mirror Viewing',
        description: 'Traditional mirror-viewing ceremony under a veil of jasmine flowers.',
        spatialDecor: 'Carved silver mirror frame, floating rose petal urulis, and amber candle pods.',
      },
      {
        step: '03',
        title: 'The Royal Walima Dawat',
        description: 'Grand reception dawat banquet welcoming extended family and esteemed guests.',
        spatialDecor: 'Multi-tier crystal chandeliers, velvet seating partitions, and lavish buffet arches.',
      },
    ],
    signatureFeatures: [
      {
        title: 'Mughal Velvet Purdah Partitions',
        description: 'Handcrafted velvet and wooden lattice screens that provide elegant, respectful privacy partition between guest sections while maintaining seamless aesthetic flow.',
      },
      {
        title: 'Multi-Tier Crystal Chandeliers',
        description: 'Palace-grade crystal chandeliers suspended over stage & royal dining lounges, casting warm golden illumination.',
      },
    ],
    faq: [
      {
        question: 'Can you set up separate men and women dining and reception partitions?',
        answer: 'Yes! We specialize in designing velvet Purdah partitions and dual-hall dawat arrangements.',
      },
    ],
  },
];
