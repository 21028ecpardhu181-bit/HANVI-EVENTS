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

  return {
    title,
    description,
    keywords: keywords || [
      'Hanvi Events Kakinada',
      'Wedding Planner Kakinada',
      'Mandap Decoration Kakinada',
      'Event Management Kakinada',
      'Birthday Planner Kakinada',
      'Telugu Wedding Planner Andhra Pradesh',
    ],
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

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EventPlanner',
    '@id': `${SITE_URL}/#business`,
    name: siteConfig.name,
    alternateName: ['Hanvi Events Kakinada', 'Hanvi Wedding Planners', 'Hanvi Event Management'],
    description: 'Premier luxury wedding planner & event management company in Kakinada, Rajahmundry, East Godavari & Andhra Pradesh. Specializing in marriage event planning, sacred mandap decoration, birthday celebrations, corporate galas & catering.',
    url: SITE_URL,
    telephone: siteConfig.phoneRaw || siteConfig.phone,
    email: siteConfig.email,
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
      { '@type': 'City', name: 'Visakhapatnam' },
      { '@type': 'City', name: 'Vijayawada' },
      { '@type': 'AdministrativeArea', name: 'Andhra Pradesh' },
      { '@type': 'Country', name: 'India' },
    ],
    knowsAbout: [
      'Best event planners near me',
      'Marriage event planning',
      'Wedding planners in Kakinada',
      'Wedding planners in Rajahmundry',
      'Mandap decoration Kakinada',
      'Birthday event planning',
      'Birthday party organizers near me',
      'Half saree function decoration',
      'Sangeet and mehendi decor',
      'Cradle ceremony decoration',
      'Corporate event organizers',
      'Catering and event management',
      'Stage lighting and sound production',
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
    },
    priceRange: '₹₹ - ₹₹₹₹',
    image: DEFAULT_OG_IMAGE,
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
    ...(price ? {
      offers: {
        '@type': 'Offer',
        price: price.replace(/[^0-9]/g, '') || '0',
        priceCurrency: 'INR',
      },
    } : {}),
  };
}
