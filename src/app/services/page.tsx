import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { servicesData } from '@/lib/data/services';
import { getSanityServices } from '@/lib/sanity/fetch';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { EditorialBadge } from '@/components/ui/EditorialBadge';
import { ImageWithSkeleton } from '@/components/ui/ImageWithSkeleton';
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav';
import { createPageMetadata, SITE_URL, getBreadcrumbSchema, getFAQSchema } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Event Planning Services in Kakinada | Hanvi Events',
  description: 'Explore wedding planning, mandap decoration, bridal makeup, birthdays, catering, entertainment, and corporate event services by Hanvi Events in Kakinada.',
  path: '/services',
  keywords: ['Event Planning Services Kakinada', 'Wedding Services Kakinada', 'Mandap Decoration Kakinada', 'Bridal Makeup Kakinada'],
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
        'You can book a consultation directly through our website contact form or by calling our studio line at +91 93902 46849.',
    },
  ]);

  return (
    <div className="pt-24 md:pt-28 pb-24 bg-[#FCF9F5]">
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

      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <BreadcrumbNav items={[{ label: 'Services Collection' }]} />
        </div>

        {/* Section Header */}
        <SectionHeader
          scriptEyebrow="Single Services Collection • Managed by Ch. Kala Prasad"
          title="Services Collection"
          description="Explore our full collection of bespoke offerings. Click any card to view detailed specifications, pricing, and visual gallery."
          align="center"
        />

        {/* Services Collection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 sm:mt-12">
          {services.map((item, idx) => {
            const isFeatured = item.featured || item.slug === 'bridal-makeup' || idx === 0;

            return (
              <div
                key={item.id}
                className={`group bg-[#F5ECDD]/40 border ${
                  isFeatured
                    ? 'border-[#B88A44] shadow-md ring-1 ring-[#B88A44]/30'
                    : 'border-[#E8DDCD] hover:border-[#B88A44]/60 shadow-sm'
                } rounded-3xl overflow-hidden hover:shadow-hover transition-all duration-500 flex flex-col justify-between`}
              >
                <Link
                  href={`/services/${item.slug}`}
                  aria-label={`Explore details for ${item.title}`}
                  className="block flex-grow flex flex-col justify-between h-full focus:outline-none focus:ring-2 focus:ring-[#B88A44]"
                >
                  <div>
                    {/* Featured Image */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#E8DDCD]/40">
                      <ImageWithSkeleton
                        src={item.heroImage}
                        alt={`${item.title} - Hanvi Events`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />

                      {isFeatured && (
                        <div className="absolute top-4 left-4 z-10">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B88A44] text-[#FCF9F5] font-sans-ui text-xs uppercase tracking-wider font-semibold shadow-md">
                            <Sparkles className="w-3.5 h-3.5 fill-white" />
                            <span>Featured Service</span>
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content Details: Service Name, Category Badge & Short Description */}
                    <div className="p-4 sm:p-6 space-y-3">
                      <div className="flex items-center justify-between">
                        <EditorialBadge variant="gold">
                          {item.category || item.tagline}
                        </EditorialBadge>
                        {item.duration && (
                          <span className="font-sans-ui text-[11px] text-[#6E5D4F]">
                            {item.duration}
                          </span>
                        )}
                      </div>

                      {/* Service Name */}
                      <h2 className="font-serif-editorial text-xl sm:text-2xl text-[#34281F] font-normal group-hover:text-[#B88A44] transition-colors">
                        {item.title}
                      </h2>

                      {/* Short Description */}
                      <p className="font-sans-narrative text-xs text-[#6E5D4F] leading-relaxed line-clamp-3">
                        {item.shortDescription || item.description}
                      </p>

                      {/* Key Deliverables */}
                      {item.features && item.features.length > 0 && (
                        <div className="pt-2 space-y-1.5 border-t border-[#E8DDCD]/60">
                          {item.features.slice(0, 3).map((feat, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs font-sans-narrative text-[#34281F]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#B88A44] shrink-0" />
                              <span className="truncate">{feat}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 border-t border-[#E8DDCD]/80 flex items-center justify-between">
                    <span className="w-full py-3 px-4 rounded-xl bg-[#34281F] group-hover:bg-[#B88A44] text-[#FCF9F5] font-sans-ui text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-between">
                      <span>View Service Details</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
