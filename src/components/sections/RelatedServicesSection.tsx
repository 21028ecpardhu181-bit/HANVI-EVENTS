'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { ServiceCategory } from '@/lib/types';
import { ImageWithSkeleton } from '../ui/ImageWithSkeleton';
import { EditorialBadge } from '../ui/EditorialBadge';

interface RelatedServicesSectionProps {
  services: ServiceCategory[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export const RelatedServicesSection: React.FC<RelatedServicesSectionProps> = ({
  services,
  title = 'Related Services & Celebrations',
  subtitle = 'Enhance your function with our complementary event planning & decor offerings.',
  className = '',
}) => {
  if (!services || services.length === 0) return null;

  return (
    <section className={`py-12 md:py-16 bg-[#F5ECDD]/30 border-t border-[#E8DDCD]/80 ${className}`}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B88A44]/15 border border-[#B88A44]/30 text-[#B88A44] font-script-accent text-lg">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Complete Event Ecosystem</span>
            </div>
            <h2 className="font-serif-editorial text-2xl sm:text-4xl text-[#34281F]">
              {title}
            </h2>
            <p className="font-sans-narrative text-xs sm:text-sm text-[#6E5D4F] max-w-2xl">
              {subtitle}
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-xs font-sans-ui uppercase tracking-wider text-[#B88A44] font-semibold hover:text-[#34281F] transition-colors self-start md:self-auto"
          >
            <span>Explore All Services</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Responsive Grid: Desktop (3-4), Tablet (2), Mobile (1) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
          {services.map((item) => {
            const detailUrl = `/services/${item.slug}`;

            return (
              <div
                key={item.id}
                className="group bg-[#FCF9F5] border border-[#E8DDCD] rounded-2xl md:rounded-3xl overflow-hidden shadow-xs hover:shadow-hover hover:border-[#B88A44]/60 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#E8DDCD]/40">
                    <ImageWithSkeleton
                      src={item.heroImage}
                      alt={`${item.title} - Hanvi Events Service`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-5 space-y-2.5">
                    <span className="font-script-accent text-base text-[#B88A44] block line-clamp-1">
                      {item.tagline}
                    </span>
                    <h3 className="font-serif-editorial text-xl text-[#34281F] font-medium leading-tight group-hover:text-[#B88A44] transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="font-sans-narrative text-xs text-[#6E5D4F] leading-relaxed line-clamp-2">
                      {item.shortDescription || item.description}
                    </p>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="p-5 pt-0">
                  <Link
                    href={detailUrl}
                    aria-label={`View details about ${item.title}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#FFF9F0] via-[#FDF3E3] to-[#F5E6CC] border border-[#B88A44]/40 hover:from-[#B88A44] hover:via-[#C99C55] hover:to-[#A07635] text-[#7A531C] hover:text-[#FCF9F5] font-sans-ui text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-between group/btn shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#B88A44]"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-4 h-4 text-[#B88A44] group-hover/btn:text-[#FCF9F5] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
