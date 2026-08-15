import type { Metadata } from 'next';
import { siteConfig } from './data/site';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.hanvievents.com';
export const SITE_NAME = 'Hanvi Events';
export const DEFAULT_OG_IMAGE = 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop';

export function absoluteUrl(path = '/') {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
}

export function createPageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
}): Metadata {
  const url = absoluteUrl(path);

  const defaultKeywords = [
    'best event management near me',
    'event planners in Kakinada',
    'best event management company in East Godavari',
    'wedding planner Kakinada',
    'marriage event organizers near me',
    'mandap decoration in Kakinada',
    'Vedic mandapam decorators East Godavari',
    'Pellikuthuru decoration in Kakinada',
    'Barasala cradle ceremony event planners',
    'half saree function planners Andhra Pradesh',
    'birthday party organizers in Kakinada',
    'bridal makeup artist in Kakinada',
    'wedding catering services East Godavari',
    'event planners in Rajahmundry',
    'Ch Kala Prasad Event Director Kakinada',
    'Hanvi Events Jagannaickpur Netaji Park',
    'luxury wedding decorators Andhra Pradesh',
  ];

  return {
    title,
    description,
    keywords: keywords || defaultKeywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

/**
 * Founder & Leadership Schema (Ch. Kala Prasad)
 */
export function getFounderPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#founder`,
    name: 'Ch. Kala Prasad',
    alternateName: ['Kala Prasad Event Manager', 'Ch Kala Prasad Hanvi Events', 'Event Director Kala Prasad'],
    jobTitle: 'Event Director & Founder',
    worksFor: {
      '@id': `${SITE_URL}/#business`,
    },
    url: `${SITE_URL}/team/ch-kala-prasad`,
    image: `${SITE_URL}/logo.png`,
    telephone: siteConfig.phoneRaw || siteConfig.phone,
    description: 'Ch. Kala Prasad is the founder, chief event director & planner at Hanvi Events (Kakinada), orchestrating luxury weddings, traditional Vedic mandaps, birthday galas & corporate events across East Godavari and Andhra Pradesh.',
    knowsAbout: [
      'Event Management in Kakinada',
      'Luxury Telugu Wedding Planning',
      'Vedic Mandap Architecture',
      'Pellikuthuru & Sangeet Ceremonies',
      'Stage Decoration & Lighting',
      'Banquet Catering & Hospitality',
      'Corporate Event Production',
    ],
    sameAs: [siteConfig.social.instagram, siteConfig.social.youtube],
  };
}

/**
 * Primary LocalBusiness Schema with multi-type and rich signals
 */
export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    additionalType: 'https://schema.org/EventPlanner',
    '@id': `${SITE_URL}/#business`,
    name: siteConfig.name,
    alternateName: [
      'Hanvi Events Kakinada',
      'Hanvi Wedding Planners',
      'Hanvi Event Management',
      'Ch Kala Prasad Events',
      'Best Event Management in Kakinada',
    ],
    description: 'Hanvi Events is Kakinada’s premier luxury wedding planning & event management company managed by Ch. Kala Prasad. Specializing in bespoke marriages, Vedic mandap decoration, birthday parties, cradle ceremonies, bridal makeup, catering & corporate galas across East Godavari and Andhra Pradesh.',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: [`${SITE_URL}/logo.png`, `${SITE_URL}/icon.png`, DEFAULT_OG_IMAGE],
    telephone: siteConfig.phoneRaw || siteConfig.phone,
    email: siteConfig.email,
    founder: {
      '@type': 'Person',
      '@id': `${SITE_URL}/#founder`,
      name: 'Ch. Kala Prasad',
      jobTitle: 'Event Director & Manager',
      telephone: siteConfig.phoneRaw || siteConfig.phone,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: siteConfig.phoneRaw || siteConfig.phone,
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['en', 'te', 'hi'],
      },
    ],
    hasMap: 'https://maps.google.com/?cid=HanviEventsKakinada',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1st Floor, Subhamasthu Showroom, D.No: 20-11-40, Majestic Street, Suryanarayana Puram',
      addressLocality: 'Kakinada',
      postalCode: '533001',
      addressRegion: 'Andhra Pradesh',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 16.945538,
      longitude: 82.235123,
    },
    areaServed: [
      { '@type': 'City', name: 'Kakinada' },
      { '@type': 'City', name: 'Rajahmundry' },
      { '@type': 'AdministrativeArea', name: 'East Godavari' },
      { '@type': 'AdministrativeArea', name: 'Kakinada District' },
      { '@type': 'AdministrativeArea', name: 'Dr. B. R. Ambedkar Konaseema District' },
      { '@type': 'City', name: 'Samalkota' },
      { '@type': 'City', name: 'Pithapuram' },
      { '@type': 'City', name: 'Amalapuram' },
      { '@type': 'City', name: 'Annavaram' },
      { '@type': 'City', name: 'Mandapeta' },
      { '@type': 'City', name: 'Peddapuram' },
      { '@type': 'City', name: 'Tuni' },
      { '@type': 'City', name: 'Visakhapatnam' },
      { '@type': 'City', name: 'Vijayawada' },
      { '@type': 'AdministrativeArea', name: 'Andhra Pradesh' },
      { '@type': 'Country', name: 'India' },
    ],
    knowsAbout: [
      'best event management near me',
      'best event planners in Kakinada',
      'best event management company in East Godavari',
      'wedding planners in Kakinada',
      'wedding planners in Rajahmundry',
      'mandap decoration Kakinada',
      'Telugu wedding decorators near me',
      'Pellikuthuru decoration in Kakinada',
      'birthday party organizers near me',
      'cradle ceremony decoration Kakinada',
      'Barasala function event organizers',
      'half saree function planners in Andhra Pradesh',
      'sangeet and mehendi stage decor',
      'bridal makeup artist in Kakinada',
      'wedding catering services East Godavari',
      'stage lighting and sound production',
      'corporate event organizers Kakinada',
      'Ch Kala Prasad Event Manager Kakinada',
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '09:00',
        closes: '21:30',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
    priceRange: '₹₹₹₹',
    sameAs: [siteConfig.social.instagram, siteConfig.social.youtube],
  };
}

export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: 'en-IN',
    publisher: {
      '@id': `${SITE_URL}/#business`,
    },
  };
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

export function getServiceSchema(serviceName: string, description: string, price?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceName,
    name: serviceName,
    description: description,
    provider: {
      '@id': `${SITE_URL}/#business`,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Andhra Pradesh',
    },
    ...(price ? {
      offers: {
        '@type': 'Offer',
        price: price.replace(/[^0-9]/g, '') || '15000',
        priceCurrency: 'INR',
      },
    } : {}),
  };
}

export function getFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
