'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Maximize2, Eye, Camera, Image as ImageIcon, ChevronDown } from 'lucide-react';
import { ImageWithSkeleton } from '../ui/ImageWithSkeleton';
import { EditorialBadge } from '../ui/EditorialBadge';
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

  // Visible items (limit to 8 if not expanded, show all if expanded)
  const INITIAL_VISIBLE_COUNT = 8;
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
    <section className="bg-[#FCF9F5] border border-[#E8DDCD] rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs overflow-hidden">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E8DDCD]/80 pb-6">
        <div>
          <div className="flex items-center gap-2 text-[#B88A44] mb-1">
            <Camera className="w-5 h-5" />
            <span className="font-script-accent text-xl">Visual Portfolio & Decor Inspiration</span>
          </div>
          <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#34281F]">
            {service.title} Photo Gallery
          </h2>
          <p className="font-sans-narrative text-xs sm:text-sm text-[#6E5D4F] mt-1">
            Explore our mandap architecture, floral installations, and staging.
          </p>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pb-1">
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
              className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full font-sans-ui text-xs font-medium tracking-wide whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#34281F] text-[#FCF9F5] shadow-md border border-[#34281F] font-semibold'
                  : 'bg-[#F5ECDD]/80 text-[#34281F] border border-[#E8DDCD] hover:bg-[#B88A44] hover:text-[#FCF9F5] hover:border-[#B88A44]'
              }`}
            >
              {cat} ({count})
            </button>
          );
        })}
      </div>

      {/* Gallery Asymmetric Grid */}
      <div className="relative min-h-[300px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item, idx) => {
              const isLarge = idx % 5 === 0;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  className={`group relative rounded-2xl overflow-hidden border border-[#E8DDCD] bg-[#1E1712] shadow-sm cursor-pointer ${
                    isLarge ? 'sm:col-span-2 sm:row-span-2 aspect-[4/3] sm:aspect-auto sm:min-h-[320px]' : 'aspect-[4/3]'
                  }`}
                  onClick={() => handleOpenLightbox(idx)}
                >
                  <ImageWithSkeleton
                    src={item.url}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                  {/* Top Right Zoom Button */}
                  <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-2 bg-white/20 hover:bg-white/40 text-white rounded-full backdrop-blur-md border border-white/30">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom Content Bar */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-10 text-white flex flex-col justify-end transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="font-sans-ui text-[10px] uppercase tracking-wider text-[#B88A44] font-semibold">
                      {item.category}
                    </span>
                    <h4 className="font-serif-editorial text-base sm:text-lg font-medium text-white line-clamp-1 mt-0.5">
                      {item.title}
                    </h4>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Gradient Blur Fade & Show More Button */}
        {hasMore && (
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#FCF9F5] via-[#FCF9F5]/90 to-transparent flex items-end justify-center pb-4 z-20">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsExpanded(true)}
              className="px-6 py-3.5 bg-[#34281F] text-[#FCF9F5] rounded-full font-sans-ui text-xs font-semibold uppercase tracking-wider shadow-xl border border-[#B88A44]/50 flex items-center gap-2 cursor-pointer hover:bg-[#B88A44] transition-colors"
            >
              <Eye className="w-4 h-4 text-[#B88A44] group-hover:text-white" />
              <span>Show All {filteredItems.length} Gallery Photos</span>
              <ChevronDown className="w-4 h-4" />
            </motion.button>
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
