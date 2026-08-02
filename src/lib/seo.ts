import { siteConfig } from './data/site';

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EventPlanner',
    name: siteConfig.name,
    description: siteConfig.mission,
    url: 'https://hanvievents.com',
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'D No: 60-1-1/1, Jammichettu Center, Jagannaickpur (Near Netaji Park)',
      addressLocality: 'Kakinada',
      postalCode: '533002',
      addressRegion: 'Andhra Pradesh',
      addressCountry: 'IN',
    },
    areaServed: [
      { '@type': 'City', name: 'Kakinada' },
      { '@type': 'City', name: 'Rajahmundry' },
      { '@type': 'City', name: 'Visakhapatnam' },
      { '@type': 'City', name: 'Vijayawada' },
      { '@type': 'AdministrativeArea', name: 'Andhra Pradesh' },
      { '@type': 'AdministrativeArea', name: 'Telangana' },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '8',
      bestRating: '5',
    },
    priceRange: '₹₹₹₹',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
    sameAs: [siteConfig.social.instagram, siteConfig.social.youtube],
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
      item: `https://hanvievents.com${item.url}`,
    })),
  };
}

export function getServiceSchema(serviceName: string, description: string, price: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceName,
    name: serviceName,
    description: description,
    provider: {
      '@type': 'EventPlanner',
      name: siteConfig.name,
    },
    offers: {
      '@type': 'Offer',
      price: price.replace(/[^0-9]/g, ''),
      priceCurrency: 'INR',
    },
  };
}
