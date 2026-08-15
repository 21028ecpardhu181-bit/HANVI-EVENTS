'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Sparkles, CheckCircle2, ChevronRight, SlidersHorizontal } from 'lucide-react';
import { ServiceCategory } from '@/lib/types';
import { ImageWithSkeleton } from '../ui/ImageWithSkeleton';
import { EditorialBadge } from '../ui/EditorialBadge';

interface ServicesCatalogClientProps {
  services: ServiceCategory[];
}

export const ServicesCatalogClient: React.FC<ServicesCatalogClientProps> = ({ services }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Derive categories
  const categories = useMemo(() => {
    const cats = ['All'];
    services.forEach((s) => {
      const cat = s.category || (s.title.includes('Wedding') || s.title.includes('Marriage') ? 'Weddings' : s.title.includes('Birthday') ? 'Birthdays' : 'Bespoke');
      if (cat && !cats.includes(cat)) cats.push(cat);
    });
    return cats;
  }, [services]);

  // Filtered services
  const filteredServices = useMemo(() => {
    if (selectedCategory === 'All') return services;
    return services.filter((s) => {
      const cat = s.category || (s.title.includes('Wedding') || s.title.includes('Marriage') ? 'Weddings' : s.title.includes('Birthday') ? 'Birthdays' : 'Bespoke');
      return cat === selectedCategory;
    });
  }, [services, selectedCategory]);

  return (
    <div className="space-y-6 sm:space-y-10">
      
      {/* Category Pills (App-like Filter Bar on Mobile & Desktop) */}
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide py-1 px-1 -mx-1 snap-x">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full font-sans-ui text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap shrink-0 transition-all cursor-pointer snap-start active:scale-95 ${
                isActive
                  ? 'bg-[#B88A44] text-[#FCF9F5] shadow-sm font-semibold'
                  : 'bg-[#F5ECDD]/70 text-[#34281F] border border-[#E8DDCD] hover:bg-[#B88A44]/15'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Services Grid — 2-Column App Grid on Mobile (Amazon/Airbnb style), 3-Column on Desktop */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 md:gap-8">
        {filteredServices.map((item, idx) => {
          const isFeatured = item.featured || item.slug === 'bridal-makeup' || idx === 0;

          return (
            <div
              key={item.id || item.slug}
              className={`group bg-[#FCF9F5] border ${
                isFeatured
                  ? 'border-[#B88A44]/60 shadow-sm'
                  : 'border-[#E8DDCD] hover:border-[#B88A44]/50'
              } rounded-2xl sm:rounded-3xl overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col justify-between`}
            >
              <Link
                href={`/services/${item.slug}`}
                aria-label={`Explore details for ${item.title}`}
                className="block flex-grow flex flex-col justify-between h-full focus:outline-none focus:ring-2 focus:ring-[#B88A44]"
              >
                <div>
                  {/* Card Thumbnail Image */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#E8DDCD]/30">
                    <ImageWithSkeleton
                      src={item.heroImage}
                      alt={`${item.title} - Hanvi Events`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Floating Price / Tag Badge */}
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10">
                      {isFeatured ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-[#B88A44] text-[#FCF9F5] font-sans-ui text-[10px] sm:text-xs font-semibold shadow-xs">
                          <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          <span>Featured</span>
                        </span>
                      ) : (
                        <span className="inline-block px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-xs text-[#FCF9F5] font-sans-ui text-[9px] sm:text-[11px] font-medium">
                          {item.category || item.tagline || 'Hanvi Craft'}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Body Info */}
                  <div className="p-3 sm:p-5 space-y-1.5 sm:space-y-2.5">
                    <h2 className="font-serif-editorial text-sm sm:text-xl md:text-2xl text-[#34281F] font-normal leading-snug group-hover:text-[#B88A44] transition-colors line-clamp-1">
                      {item.title}
                    </h2>

                    <p className="font-sans-narrative text-[11px] sm:text-xs text-[#6E5D4F] leading-snug line-clamp-2">
                      {item.shortDescription || item.description}
                    </p>

                    {/* Deliverable pills (compact) */}
                    {item.features && item.features.length > 0 && (
                      <div className="pt-1 hidden sm:block space-y-1">
                        {item.features.slice(0, 2).map((feat, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-[11px] text-[#34281F]/85 truncate">
                            <CheckCircle2 className="w-3 h-3 text-[#B88A44] shrink-0" />
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="p-2.5 sm:p-4 pt-0">
                  <div className="w-full py-1.5 sm:py-2.5 px-2.5 sm:px-4 rounded-xl bg-gradient-to-r from-[#FFF9F0] via-[#FDF3E3] to-[#F5E6CC] border border-[#B88A44]/30 group-hover:border-[#B88A44] text-[#7A531C] font-sans-ui text-[10px] sm:text-xs font-semibold tracking-wide uppercase flex items-center justify-between transition-colors shadow-2xs">
                    <span>View Details</span>
                    <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#B88A44]" />
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

    </div>
  );
};
