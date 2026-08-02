'use client';

import React, { useState } from 'react';
import { galleryItems } from '@/lib/data/gallery';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ImageWithSkeleton } from '@/components/ui/ImageWithSkeleton';
import { EditorialBadge } from '@/components/ui/EditorialBadge';
import { LightboxModal, LightboxMedia } from '@/components/ui/LightboxModal';

const categories = ['All', 'Mandap', 'Florals', 'Lighting', 'Stage', 'Entrance'] as const;

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const mediaItems: LightboxMedia[] = galleryItems.map((g) => ({
    id: g.id,
    title: g.title,
    category: g.category,
    image: g.image,
    location: g.location,
    isVideo: false,
  }));

  const filteredItems = activeCategory === 'All'
    ? mediaItems
    : mediaItems.filter((item) => item.category === activeCategory);

  const handleOpenLightbox = (item: LightboxMedia) => {
    const idx = filteredItems.findIndex((m) => m.id === item.id);
    setSelectedIndex(idx >= 0 ? idx : 0);
    setLightboxOpen(true);
  };

  return (
    <div className="pt-28 pb-24 bg-[#FCF9F5]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">

        <SectionHeader
          scriptEyebrow="Visual Portfolio • Est. 2018"
          title="Mandap & Decor Fine Art Gallery"
          description="A curated gallery of sacred mandaps, floral sculptures, reception stages, and grand entrances managed by Ch. Kala Prasad."
          align="center"
        />

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8 md:mt-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full font-sans-ui text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#34281F] text-[#FCF9F5] shadow-md font-semibold'
                    : 'bg-[#F5ECDD]/60 text-[#6E5D4F] border border-[#E8DDCD] hover:border-[#B88A44]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 mt-10">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(item)}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-[#F5ECDD] border border-[#E8DDCD] shadow-sm hover:shadow-hover hover:border-[#B88A44]/60 transition-all duration-500 cursor-pointer"
            >
              <ImageWithSkeleton
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#34281F]/85 via-[#34281F]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Info Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-[#FCF9F5] space-y-1 z-10">
                <EditorialBadge variant="gold">
                  {item.category} {item.location ? `• ${item.location}` : ''}
                </EditorialBadge>
                <h3 className="font-serif-editorial text-lg font-medium leading-tight group-hover:text-[#B88A44] transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Preview Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={filteredItems}
        currentIndex={selectedIndex}
        onNavigate={(idx) => setSelectedIndex(idx)}
      />
    </div>
  );
}
