'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { ServiceCategory } from '@/lib/types';
import { servicesData } from '@/lib/data/services';
import { getSanityServices } from '@/lib/sanity/fetch';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { EditorialBadge } from '@/components/ui/EditorialBadge';
import { ImageWithSkeleton } from '@/components/ui/ImageWithSkeleton';
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav';

export default function ServicesCatalogPage() {
  const [services, setServices] = useState<ServiceCategory[]>(servicesData);

  useEffect(() => {
    async function loadData() {
      const sanityData = await getSanityServices();
      if (sanityData && sanityData.length > 0) {
        setServices(sanityData);
      }
    }
    loadData();
  }, []);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Hanvi Events Services Collection',
    description: 'Services collection containing Bridal Makeup, Weddings, Birthdays, Corporate Events, Decor, Catering & Entertainment',
    itemListElement: services.map((s, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: s.title,
      url: `https://hanvievents.com/services/${s.slug}`,
    })),
  };

  return (
    <div className="pt-24 md:pt-28 pb-24 bg-[#FCF9F5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
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

                      <div className="absolute top-4 right-4 z-10">
                        <EditorialBadge variant="gold" className="bg-black/60 text-white border-white/20">
                          {item.startingPrice ? `Starting ${item.startingPrice}` : 'Custom Pricing'}
                        </EditorialBadge>
                      </div>
                    </div>

                    {/* Content Details: Service Name, Category Badge & Short Description */}
                    <div className="p-6 space-y-3">
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
                      <h2 className="font-serif-editorial text-2xl text-[#34281F] font-normal group-hover:text-[#B88A44] transition-colors">
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
                  <div className="px-6 pb-6 pt-2 border-t border-[#E8DDCD]/80 flex items-center justify-between">
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
