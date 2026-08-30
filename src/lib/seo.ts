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
    'event management in Kakinada',
    'wedding planners in Kakinada',
    'mandap decoration East Godavari',
    'birthday party event planners',
    'Telugu wedding traditions',
    'bridal makeup Kakinada',
    'wedding catering services Andhra Pradesh',
    'Hanvi Events',
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
    jobTitle: 'Event Director & Founder',
    worksFor: {
      '@id': `${SITE_URL}/#business`,
    },
    url: `${SITE_URL}/team/ch-kala-prasad`,
    image: `${SITE_URL}/logo.png`,
    telephone: siteConfig.phoneRaw || siteConfig.phone,
    description: 'Ch. Kala Prasad is the founder and event director of Hanvi Events (Kakinada), orchestrating weddings, mandap architecture, birthday celebrations and corporate events across East Godavari and Andhra Pradesh.',
    knowsAbout: [
      'Wedding Planning & Coordination',
      'Traditional Mandap Architecture',
      'Telugu Wedding Ceremonies',
      'Event Stage Decoration & Lighting',
      'Catering & Hospitality Management',
    ],
    sameAs: [siteConfig.social.instagram, siteConfig.social.youtube],
  };
}

/**
 * Primary LocalBusiness Schema with accurate NAP and service signals
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
    ],
    description: 'Hanvi Events is an event management and luxury wedding planning company based in Kakinada, Andhra Pradesh. Specializing in wedding coordination, mandap design, birthday parties, cradle ceremonies, catering and corporate events.',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: [`${SITE_URL}/logo.png`, `${SITE_URL}/icon.png`, DEFAULT_OG_IMAGE],
    telephone: siteConfig.phoneRaw || siteConfig.phone,
    email: siteConfig.email,
    founder: {
      '@type': 'Person',
      '@id': `${SITE_URL}/#founder`,
      name: 'Ch. Kala Prasad',
      jobTitle: 'Event Director',
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
    hasMap: siteConfig.googleMapsUrl,
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
    ],
    knowsAbout: [
      'Event Management in Kakinada',
      'Wedding Planners in Kakinada',
      'Event Management Companies in Andhra Pradesh',
      'Mandap Decoration in East Godavari',
      'Telugu Wedding Traditions and Muhurtham Sets',
      'Birthday Celebrations and Cradle Ceremonies',
      'Half Saree and Dhoti Functions',
      'Corporate Event Management and Annual Galas',
      'Bridal Makeup & Styling Coordination',
      'Banquet Catering & Traditional Feasts',
      'Stage Lighting & AV Production',
      'Ch Kala Prasad Event Director',
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
