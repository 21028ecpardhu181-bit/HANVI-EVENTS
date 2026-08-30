import React from 'react';
import type { Metadata } from 'next';
import { servicesData } from '@/lib/data/services';
import { getSanityServices } from '@/lib/sanity/fetch';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav';
import { ServicesCatalogClient } from '@/components/services/ServicesCatalogClient';
import { createPageMetadata, SITE_URL, getBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Event Planning & Wedding Services in Kakinada | Hanvi Events',
  description: 'Explore bespoke wedding planning, Vedic mandap decoration, bridal makeup, birthday celebrations, catering, and corporate event management by Hanvi Events in Kakinada & Andhra Pradesh.',
  path: '/services',
  keywords: [
    'event planning services Kakinada',
    'wedding services East Godavari',
    'mandap decoration Kakinada',
    'birthday party planners',
    'bridal makeup artist Kakinada',
    'wedding catering services',
    'Hanvi Events services',
  ],
});

export default async function ServicesCatalogPage() {
  const sanityServices = await getSanityServices();
  const services = sanityServices && sanityServices.length > 0 ? sanityServices : servicesData;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Hanvi Events Services Collection',
    description: 'Services collection containing Bridal Makeup, Weddings, Birthdays, Corporate Events, Decor, Catering & Entertainment',
    itemListElement: services.map((s, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: s.title,
      url: `${SITE_URL}/services/${s.slug}`,
    })),
  };

  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
  ]);

  return (
    <div className="pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-24 bg-[#FCF9F5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 md:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-3 sm:mb-6">
          <BreadcrumbNav items={[{ label: 'Services Collection' }]} />
        </div>

        {/* Section Header */}
        <div className="mb-5 sm:mb-8">
          <SectionHeader
            scriptEyebrow="Single Services Collection • Managed by Ch. Kala Prasad"
            title="Services Collection"
            description="Explore our complete event services — combining in-house mandap fabrication and event directorship with vetted specialist partner coordination for catering, beauty, and entertainment."
            align="center"
          />
        </div>

        {/* Interactive App-Like Services Catalog Component */}
        <ServicesCatalogClient services={services} />

      </div>
    </div>
  );
}
