'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles, Star, Clock } from 'lucide-react';
import { ServiceCategory } from '@/lib/types';
import { servicesData } from '@/lib/data/services';
import { SectionHeader } from '../ui/SectionHeader';
import { ImageWithSkeleton } from '../ui/ImageWithSkeleton';
import { EditorialBadge } from '../ui/EditorialBadge';
import { staggerContainerVariants, fadeUpVariants } from '@/animations/variants';

export interface ChooseCelebrationSectionProps {
  items?: ServiceCategory[];
}

export const ChooseCelebrationSection: React.FC<ChooseCelebrationSectionProps> = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const displayServices = (items && items.length > 0) ? items : servicesData;

  // Extract unique categories for dynamic filter pills
  const categories = ['All', ...Array.from(new Set(displayServices.map(item => item.category)))];

  const filteredServices = selectedCategory === 'All' 
    ? displayServices 
    : displayServices.filter(service => service.category === selectedCategory);

  return (
    <section className="py-8 sm:py-16 md:py-24 bg-[#FCF9F5]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <SectionHeader
          scriptEyebrow="Every Moment Has a Reason to Be Celebrated"
          title="Choose Your Service & Celebration"
          description="Filtered dynamically from our single Services collection. Explore luxury bridal makeup, mandaps, milestone galas, corporate staging, catering & live entertainment."
          align="center"
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-3 mt-4 md:mt-8">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat as string)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-sans-ui text-[11px] sm:text-xs uppercase tracking-wider shrink-0 whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#34281F] text-[#FCF9F5] font-semibold shadow-md border border-[#34281F]'
                    : 'bg-[#F5ECDD]/60 text-[#6E5D4F] border border-[#E8DDCD] hover:border-[#B88A44]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Services Responsive Grid (2-column on mobile, 3/4-column on desktop) */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-12 gap-3 sm:gap-6 mt-6 md:mt-10"
        >
          {filteredServices.map((category, index) => {
            const isFeatured = category.featured || category.slug === 'bridal-makeup' || (index === 0 && selectedCategory === 'All');
            const colSpanClass = isFeatured
              ? 'col-span-12 lg:col-span-8'
              : 'col-span-6 sm:col-span-6 lg:col-span-4';

            return (
              <motion.div
                key={category.id}
                variants={fadeUpVariants}
                className={`${colSpanClass} group bg-[#F5ECDD]/40 border ${
                  isFeatured
                    ? 'border-[#B88A44] shadow-md ring-1 ring-[#B88A44]/30'
                    : 'border-[#E8DDCD] hover:border-[#B88A44]/60 shadow-xs'
                } rounded-2xl md:rounded-3xl overflow-hidden hover:shadow-hover transition-all duration-500 flex flex-col justify-between relative`}
              >
                <Link
                  href={`/services/${category.slug}`}
                  aria-label={`Explore ${category.title} service`}
                  className="block flex-grow flex flex-col justify-between h-full focus:outline-none focus:ring-2 focus:ring-[#B88A44]"
                >
                  <div className={`relative w-full overflow-hidden ${isFeatured ? 'h-40 sm:h-64 md:h-72' : 'h-28 sm:h-48 md:h-60'}`}>
                    <ImageWithSkeleton
                      src={category.heroImage}
                      alt={`${category.title} - Hanvi Events`}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Featured Pill */}
                    {isFeatured && (
                      <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10">
                        <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#B88A44] text-[#FCF9F5] font-sans-ui text-[9px] sm:text-[11px] uppercase tracking-wider font-semibold shadow-md">
                          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-white" />
                          <span>Featured Lounge</span>
                        </span>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#34281F]/85 via-[#34281F]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  </div>

                  <div className="p-3 sm:p-6 flex-grow flex flex-col justify-between space-y-2 sm:space-y-3">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-script-accent text-xs sm:text-base md:text-xl text-[#B88A44] block truncate">
                          {category.category || category.tagline}
                        </span>
                        {isFeatured && (
                          <div className="hidden sm:flex items-center text-[#B88A44]">
                            <Star className="w-4 h-4 fill-[#B88A44]" />
                          </div>
                        )}
                      </div>

                      <h3 className="font-serif-editorial text-sm sm:text-2xl md:text-3xl text-[#34281F] font-medium leading-tight group-hover:text-[#B88A44] transition-colors mt-0.5 line-clamp-1 sm:line-clamp-none">
                        {category.title}
                      </h3>

                      <p className="font-sans-narrative text-[10px] sm:text-sm text-[#6E5D4F] leading-relaxed mt-1 sm:mt-2 line-clamp-2 sm:line-clamp-3">
                        {category.description}
                      </p>
                    </div>

                    <div className="pt-2 sm:pt-4 border-t border-[#E8DDCD]/80 flex items-center justify-between">
                      <span className="font-sans-ui text-[9px] sm:text-xs text-[#B88A44] font-semibold uppercase tracking-wider group-hover:text-[#34281F] transition-colors flex items-center gap-1">
                        <span>Explore Details</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </span>

                      {category.duration && (
                        <span className="hidden sm:flex items-center text-[11px] text-[#6E5D4F] font-sans-narrative gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#B88A44]" />
                          <span>{category.duration}</span>
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Services Link */}
        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#34281F] text-[#FCF9F5] font-sans-ui text-xs uppercase tracking-wider font-semibold hover:bg-[#B88A44] transition-colors shadow-md"
          >
            <span>View All Services Catalog →</span>
          </Link>
        </div>

      </div>
    </section>
  );
};
