'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { ServiceCategory } from '@/lib/types';
import { ImageWithSkeleton } from '../ui/ImageWithSkeleton';

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
    <section className={`py-8 sm:py-12 md:py-16 bg-[#F5ECDD]/30 border-t border-[#E8DDCD]/80 ${className}`}>
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 md:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 sm:mb-8 gap-2">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#B88A44]/15 border border-[#B88A44]/30 text-[#B88A44] font-script-accent text-base">
              <Sparkles className="w-3 h-3" />
              <span>Event Ecosystem</span>
            </div>
            <h2 className="font-serif-editorial text-xl sm:text-3xl md:text-4xl text-[#34281F]">
              {title}
            </h2>
            <p className="font-sans-narrative text-[11px] sm:text-xs text-[#6E5D4F] max-w-xl">
              {subtitle}
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-sans-ui uppercase tracking-wider text-[#B88A44] font-semibold hover:text-[#34281F] transition-colors self-start sm:self-auto"
          >
            <span>All Services</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Responsive Grid: Horizontal Snap Carousel on Mobile, 4-Column Grid on Desktop */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 overflow-x-auto scrollbar-hide snap-x -mx-3 px-3 sm:mx-0 sm:px-0 py-1">
          {services.map((item) => {
            const detailUrl = `/services/${item.slug}`;

            return (
              <div
                key={item.id || item.slug}
                className="w-[200px] sm:w-auto shrink-0 snap-start group bg-[#FCF9F5] border border-[#E8DDCD] rounded-2xl overflow-hidden shadow-2xs hover:shadow-sm hover:border-[#B88A44]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <Link
                  href={detailUrl}
                  aria-label={`View details about ${item.title}`}
                  className="block flex-grow flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Card Image */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#E8DDCD]/30">
                      <ImageWithSkeleton
                        src={item.heroImage}
                        alt={`${item.title} - Hanvi Events Service`}
                        fill
                        sizes="(max-width: 640px) 200px, (max-width: 1200px) 33vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Card Content */}
                    <div className="p-3 sm:p-4 space-y-1 sm:space-y-1.5">
                      <span className="font-script-accent text-sm text-[#B88A44] block truncate">
                        {item.tagline || 'Bespoke Craft'}
                      </span>
                      <h3 className="font-serif-editorial text-sm sm:text-lg text-[#34281F] font-normal leading-snug group-hover:text-[#B88A44] transition-colors truncate">
                        {item.title}
                      </h3>
                      <p className="font-sans-narrative text-[11px] text-[#6E5D4F] leading-snug line-clamp-2">
                        {item.shortDescription || item.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Action Button */}
                  <div className="p-3 pt-0">
                    <div className="w-full py-1.5 sm:py-2 px-3 rounded-xl bg-gradient-to-r from-[#FFF9F0] via-[#FDF3E3] to-[#F5E6CC] border border-[#B88A44]/30 text-[#7A531C] font-sans-ui text-[10px] sm:text-xs font-semibold tracking-wide uppercase flex items-center justify-between shadow-2xs">
                      <span>Details</span>
                      <ArrowUpRight className="w-3 h-3 text-[#B88A44]" />
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
