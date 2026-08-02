'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Star } from 'lucide-react';
import { ServiceCategory } from '@/lib/types';
import { servicesData } from '@/lib/data/services';
import { getSanityServices } from '@/lib/sanity/fetch';
import { SectionHeader } from '../ui/SectionHeader';
import { EditorialButton } from '../ui/EditorialButton';
import { EditorialBadge } from '../ui/EditorialBadge';
import { ImageWithSkeleton } from '../ui/ImageWithSkeleton';
import { staggerContainerVariants, fadeUpVariants } from '@/animations/variants';

export const ChooseCelebrationSection: React.FC = () => {
  const [services, setServices] = useState<ServiceCategory[]>(servicesData);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    async function loadServices() {
      const data = await getSanityServices();
      if (data && data.length > 0) {
        setServices(data);
      }
    }
    loadServices();
  }, []);

  // Derive unique categories from the Services collection
  const categories = ['All', ...Array.from(new Set(services.map((s) => s.category).filter(Boolean)))];

  const filteredServices = selectedCategory === 'All'
    ? services
    : services.filter((s) => s.category === selectedCategory);

  return (
    <section className="py-8 md:py-20 bg-[#FCF9F5]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        <SectionHeader
          scriptEyebrow="Every Moment Has a Reason to Be Celebrated"
          title="Choose Your Service & Celebration"
          description="Filtered dynamically from our single Services collection. Explore luxury bridal makeup, mandaps, milestone galas, corporate staging, catering & live entertainment."
          align="center"
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 md:mt-8">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat as string)}
                className={`px-4 py-1.5 rounded-full font-sans-ui text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#34281F] text-[#FCF9F5] font-semibold shadow-md'
                    : 'bg-[#F5ECDD]/60 text-[#6E5D4F] border border-[#E8DDCD] hover:border-[#B88A44]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-12 gap-4 sm:gap-6 mt-8 md:mt-10"
        >
          {filteredServices.map((category, index) => {
            const isFeatured = category.featured || category.slug === 'bridal-makeup' || (index === 0 && selectedCategory === 'All');
            const colSpanClass = isFeatured
              ? 'col-span-12 lg:col-span-8'
              : 'col-span-12 sm:col-span-6 lg:col-span-4';

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
                  <div className="relative w-full h-52 sm:h-64 md:h-72 overflow-hidden">
                    <ImageWithSkeleton
                      src={category.heroImage}
                      alt={`${category.title} - Hanvi Events`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Featured Pill */}
                    {isFeatured && (
                      <div className="absolute top-3 left-3 z-10">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B88A44] text-[#FCF9F5] font-sans-ui text-[11px] uppercase tracking-wider font-semibold shadow-md">
                          <Sparkles className="w-3.5 h-3.5 fill-white" />
                          <span>Featured Beauty Lounge</span>
                        </span>
                      </div>
                    )}

                    <div className="absolute top-3 right-3 z-10">
                      <EditorialBadge variant="gold" className="text-[10px] sm:text-xs px-2.5 py-0.5 bg-black/60 text-white border-white/20">
                        {category.startingPrice ? `From ${category.startingPrice}` : 'Custom Pricing'}
                      </EditorialBadge>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-[#34281F]/85 via-[#34281F]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  </div>

                  <div className="p-4 sm:p-6 flex-grow flex flex-col justify-between space-y-3">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-script-accent text-base sm:text-xl text-[#B88A44] block">
                          {category.category || category.tagline}
                        </span>
                        {isFeatured && (
                          <div className="flex items-center text-[#B88A44]">
                            <Star className="w-4 h-4 fill-[#B88A44]" />
                          </div>
                        )}
                      </div>

                      <h3 className="font-serif-editorial text-xl sm:text-3xl text-[#34281F] font-medium leading-tight group-hover:text-[#B88A44] transition-colors mt-0.5">
                        {category.title}
                      </h3>

                      <p className="font-sans-narrative text-xs sm:text-sm text-[#6E5D4F] leading-relaxed mt-1.5 line-clamp-2">
                        {category.shortDescription || category.description}
                      </p>
                    </div>

                    <div className="pt-3 flex items-center justify-between border-t border-[#E8DDCD]/80">
                      <span className="font-sans-ui text-[11px] sm:text-xs uppercase tracking-wider text-[#34281F] group-hover:text-[#B88A44] font-semibold flex items-center gap-1 transition-colors">
                        <span>Explore Details</span>
                        <ArrowUpRight className="w-4 h-4 text-[#B88A44]" />
                      </span>
                      {category.duration && (
                        <span className="font-sans-ui text-[11px] text-[#6E5D4F]">
                          {category.duration}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-8 md:mt-12 text-center">
          <Link href="/services">
            <EditorialButton variant="secondary" size="md">
              View All Services Catalog →
            </EditorialButton>
          </Link>
        </div>

      </div>
    </section>
  );
};
