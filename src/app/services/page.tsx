import React from 'react';
import type { Metadata } from 'next';
import { servicesData } from '@/lib/data/services';
import { getSanityServices } from '@/lib/sanity/fetch';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav';
import { ServicesCatalogClient } from '@/components/services/ServicesCatalogClient';
import { createPageMetadata, SITE_URL, getBreadcrumbSchema, getFAQSchema } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Best Event Management & Wedding Services in Kakinada | Hanvi Events',
  description: 'Explore bespoke wedding planning, Vedic mandap decoration, bridal makeup, birthday celebrations, catering, and corporate event management by Hanvi Events & Ch. Kala Prasad across East Godavari and Andhra Pradesh.',
  path: '/services',
  keywords: [
    'best event management near me',
    'event planners in Kakinada',
    'wedding services East Godavari',
    'mandap decoration Kakinada',
    'birthday party planners near me',
    'bridal makeup Kakinada',
    'wedding catering AP',
    'Ch Kala Prasad event manager',
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

  const faqJsonLd = getFAQSchema([
    {
      question: 'What event management services does Hanvi Events provide in Kakinada?',
      answer:
        'Hanvi Events provides luxury wedding planning, mandap decoration, thematic birthday party organizing, corporate event management, bridal styling, premium catering, and AV production across Kakinada and East Godavari.',
    },
    {
      question: 'Which areas do you cover for wedding and event planning?',
      answer:
        'We provide end-to-end event planning across Kakinada, Rajahmundry, East Godavari, Konaseema, Samalkota, Pithapuram, Visakhapatnam, Vijayawada, and the broader Andhra Pradesh region.',
    },
    {
      question: 'How do I book a consultation with Hanvi Events?',
      answer:
        'You can book a consultation directly through our website contact form or by calling our studio line at +91 97009 29650 or WhatsApp at +91 63054 57612.',
    },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
            description="Explore our full collection of bespoke offerings. Tap any card for full details, pricing, and visual gallery."
            align="center"
          />
        </div>

        {/* Interactive App-Like Services Catalog Component */}
        <ServicesCatalogClient services={services} />

      </div>
    </div>
  );
}
