export interface SiteStat {
  id: string;
  label: string;
  value: string;
  sublabel: string;
}

export interface SitePhoneNumber {
  label: string;
  number: string;
  raw: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  mission: string;
  founder?: string;
  founderTitle?: string;
  phone: string;
  phoneRaw: string;
  phoneNumbers?: SitePhoneNumber[];
  whatsapp: string;
  email: string;
  address: string;
  googleMapsUrl: string;
  social: {
    instagram: string;
    youtube: string;
    whatsappUrl: string;
  };
  stats: SiteStat[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface CelebrationCategory {
  id: string;
  slug: string;
  title: string;
  category?: string;
  subtitle: string;
  tagline: string;
  description: string;
  shortDescription?: string;
  startingPrice: string;
  heroImage: string;
  galleryImages: string[];
  features: string[];
  relatedServices?: string[];
  ritualsOrFlow?: string[];
  faq: Array<{ question: string; answer: string }>;
  featured?: boolean;
  displayOrder?: number;
  icon?: string;
  duration?: string;
  seoTitle?: string;
  seoDescription?: string;
}

export type ServiceCategory = CelebrationCategory;


export interface WeddingJourneyStep {
  id: string;
  slug: string;
  stepNumber: string;
  title: string;
  teluguName: string;
  timing: string;
  tagline: string;
  description: string;
  heroImage: string;
  highlights: string[];
  decorIdeas: string[];
}

export interface StoryCaseStudy {
  id: string;
  slug: string;
  title: string;
  coupleNames: string;
  celebrationType: string;
  location: string;
  guestCount: string;
  heroImage: string;
  galleryImages: string[];
  quote: string;
  narrative: string[];
}

export interface PackageTier {
  id: string;
  title: string;
  tagline: string;
  price: string;
  recommendedFor: string;
  badge?: string;
  isPopular?: boolean;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Mandap' | 'Florals' | 'Lighting' | 'Stage' | 'Entrance';
  image: string;
  location: string;
}

export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  heroImage: string;
  content: string[];
}

export interface Testimonial {
  id: string;
  clientNames: string;
  celebrationType: string;
  location: string;
  rating: number;
  reviewText: string;
  avatar: string;
}
