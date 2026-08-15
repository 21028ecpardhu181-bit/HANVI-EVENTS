'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Maximize2, Eye, ChevronDown } from 'lucide-react';
import { ImageWithSkeleton } from '../ui/ImageWithSkeleton';
import { LightboxModal, LightboxMedia } from '../ui/LightboxModal';
import { getExtendedGalleryForService, ExtendedGalleryImage } from '@/lib/data/serviceGalleries';
import { ServiceCategory } from '@/lib/types';

interface ServiceVisualShowcaseProps {
  service: ServiceCategory;
}

export const ServiceVisualShowcase: React.FC<ServiceVisualShowcaseProps> = ({ service }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  // Combine Sanity images with extended curated showcase photography
  const sanityImages = service.galleryImages || [service.heroImage];
  const allGalleryItems: ExtendedGalleryImage[] = getExtendedGalleryForService(service.slug, sanityImages);

  // Filter categories dynamically
  const categories = ['All', ...Array.from(new Set(allGalleryItems.map((item) => item.category)))];

  const filteredItems = activeCategory === 'All'
    ? allGalleryItems
    : allGalleryItems.filter((item) => item.category === activeCategory);

  // Visible items (limit to 6 on mobile/desktop before expanding)
  const INITIAL_VISIBLE_COUNT = 6;
  const visibleItems = isExpanded ? filteredItems : filteredItems.slice(0, INITIAL_VISIBLE_COUNT);
  const hasMore = filteredItems.length > INITIAL_VISIBLE_COUNT && !isExpanded;

  // Prepare items formatted for LightboxModal
  const lightboxMediaList: LightboxMedia[] = filteredItems.map((item) => ({
    id: item.id,
    title: item.title,
    category: item.category,
    image: item.url,
    images: [item.url],
    location: 'Hanvi Events Studio',
    isVideo: false,
    type: 'image',
  }));

  const handleOpenLightbox = (indexInFiltered: number) => {
    setLightboxIndex(indexInFiltered);
    setLightboxOpen(true);
  };

  return (
    <section className="bg-[#FCF9F5] border border-[#E8DDCD] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6 shadow-2xs overflow-hidden">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 sm:gap-4 border-b border-[#E8DDCD]/80 pb-3 sm:pb-5">
        <div>
          <div className="flex items-center gap-1.5 text-[#B88A44] mb-0.5">
            <Camera className="w-4 h-4" />
            <span className="font-script-accent text-lg sm:text-xl">Visual Inspiration</span>
          </div>
          <h2 className="font-serif-editorial text-xl sm:text-2xl md:text-3xl text-[#34281F]">
            {service.title} Photo Gallery
          </h2>
          <p className="font-sans-narrative text-[11px] sm:text-xs text-[#6E5D4F]">
            Real mandap architecture, floral setups, and captured moments.
          </p>
        </div>
      </div>

      {/* Category Filter Pills (App-like swipeable row) */}
      <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-hide py-1 -mx-1 px-1 snap-x">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          const count = cat === 'All'
            ? allGalleryItems.length
            : allGalleryItems.filter((i) => i.category === cat).length;

          return (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setIsExpanded(false);
              }}
              className={`px-3 py-1 sm:px-4 sm:py-1.5 rounded-full font-sans-ui text-[11px] sm:text-xs font-medium tracking-wide whitespace-nowrap shrink-0 transition-all cursor-pointer snap-start active:scale-95 ${
                isActive
                  ? 'bg-[#B88A44] text-[#FCF9F5] shadow-2xs font-semibold'
                  : 'bg-[#F5ECDD]/70 text-[#34281F] border border-[#E8DDCD] hover:bg-[#B88A44]/15'
              }`}
            >
              {cat} ({count})
            </button>
          );
        })}
      </div>

      {/* Gallery Compact 2-Column Grid on Mobile, 4-Column on Desktop */}
      <div className="relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-3.5">
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25, delay: idx * 0.03 }}
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden border border-[#E8DDCD] bg-[#1E1712] aspect-[4/3] sm:aspect-[4/3] shadow-2xs cursor-pointer active:scale-98"
                onClick={() => handleOpenLightbox(idx)}
              >
                <ImageWithSkeleton
                  src={item.url}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

                {/* Top Right Zoom Button */}
                <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-1.5 bg-white/20 hover:bg-white/40 text-white rounded-full backdrop-blur-xs border border-white/30">
                    <Maximize2 className="w-3 h-3" />
                  </div>
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 z-10 text-white flex flex-col justify-end">
                  <span className="font-sans-ui text-[9px] uppercase tracking-wider text-[#B88A44] font-semibold">
                    {item.category}
                  </span>
                  <h4 className="font-serif-editorial text-xs sm:text-sm font-normal text-white truncate">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More Button */}
        {hasMore && (
          <div className="pt-3 sm:pt-4 flex justify-center">
            <button
              onClick={() => setIsExpanded(true)}
              className="px-4 py-2 sm:px-6 sm:py-2.5 bg-gradient-to-r from-[#FFF9F0] via-[#FDF3E3] to-[#F5E6CC] text-[#7A531C] rounded-full font-sans-ui text-xs font-semibold uppercase tracking-wider shadow-2xs border border-[#B88A44]/40 hover:border-[#B88A44] flex items-center gap-1.5 cursor-pointer active:scale-95 transition-all"
            >
              <Eye className="w-3.5 h-3.5 text-[#B88A44]" />
              <span>View All {filteredItems.length} Photos</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* Fullscreen Interactive Lightbox */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={lightboxMediaList}
        currentIndex={lightboxIndex}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />

    </section>
  );
};
