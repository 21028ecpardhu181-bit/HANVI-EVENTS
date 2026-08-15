'use client';

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ChevronDown, Grid3x3, LayoutGrid, Search } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { EditorialBadge } from '@/components/ui/EditorialBadge';
import { LightboxModal, LightboxMedia } from '@/components/ui/LightboxModal';
import { ImageStreamHero, StreamImage } from '@/components/ui/image-stream-hero';

const categories = ['All', 'Mandap', 'Florals', 'Lighting', 'Stage', 'Entrance'] as const;
const ITEMS_PER_PAGE = 24;

interface GalleryClientViewProps {
  initialItems: LightboxMedia[];
}

export function GalleryClientView({ initialItems }: GalleryClientViewProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'masonry' | 'grid'>('masonry');

  // Hero stream images
  const streamImages: StreamImage[] = useMemo(() => {
    return initialItems.slice(0, 12).map((item) => ({
      src: item.image,
      alt: item.title,
    }));
  }, [initialItems]);

  // Filtered items
  const filteredItems = useMemo(() => {
    let items = activeCategory.trim().toLowerCase() === 'all'
      ? initialItems
      : initialItems.filter((item) => {
          const itemCat = (item.category || '').trim().toLowerCase();
          return itemCat === activeCategory.trim().toLowerCase();
        });

    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      items = items.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          (item.category || '').toLowerCase().includes(q) ||
          (item.location || '').toLowerCase().includes(q)
      );
    }
    return items;
  }, [initialItems, activeCategory, searchQuery]);

  const visibleItems = useMemo(() => filteredItems.slice(0, visibleCount), [filteredItems, visibleCount]);
  const hasMore = visibleCount < filteredItems.length;

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: initialItems.length };
    initialItems.forEach((item) => {
      const cat = (item.category || 'Other').trim();
      counts[cat] = (counts[cat] || 0) + 1;
    });
    return counts;
  }, [initialItems]);

  // Reset pagination on filter change
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [activeCategory, searchQuery]);

  const handleLoadMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + ITEMS_PER_PAGE, filteredItems.length));
  }, [filteredItems.length]);

  const handleOpenLightbox = useCallback(
    (item: LightboxMedia) => {
      const idx = filteredItems.findIndex((m) => m.id === item.id);
      setSelectedIndex(idx >= 0 ? idx : 0);
      setLightboxOpen(true);
    },
    [filteredItems]
  );

  return (
    <div className="pt-24 sm:pt-28 pb-24 bg-[#FCF9F5]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 space-y-8 md:space-y-12">

        {/* Hero */}
        <div className="relative">
          <ImageStreamHero
            images={streamImages}
            cards={9}
            speed={20}
            axis={52}
            className="h-[400px] sm:h-[480px] md:h-[520px] w-full rounded-3xl border border-[#E8DDCD] bg-[#F5ECDD]/40 shadow-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#FCF9F5]/90 via-[#FCF9F5]/70 to-[#FCF9F5]/95 pointer-events-none" />
            <div className="relative z-10 flex h-full flex-col items-center justify-between py-10 sm:py-14 text-center px-4">
              <div />
              <div className="max-w-3xl mx-auto px-4">
                <SectionHeader
                  scriptEyebrow="Visual Portfolio • Est. 2018"
                  title="Mandap & Decor Fine Art Gallery"
                  description="A curated gallery of sacred mandaps, floral sculptures, reception stages, and grand entrances managed by Ch. Kala Prasad."
                  align="center"
                />
              </div>
              <div className="text-xs font-sans-ui uppercase tracking-widest text-[#B88A44] font-medium bg-[#F5ECDD]/80 px-4 py-1.5 rounded-full border border-[#E8DDCD]">
                {initialItems.length} Curated Masterpieces
              </div>
            </div>
          </ImageStreamHero>
        </div>

        {/* Toolbar */}
        <div className="space-y-4">
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6E5D4F]/60" />
            <input
              type="text"
              placeholder="Search by name, category, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#F5ECDD]/60 border border-[#E8DDCD] text-[#34281F] font-sans-ui text-sm placeholder:text-[#6E5D4F]/50 focus:outline-none focus:border-[#B88A44] focus:ring-2 focus:ring-[#B88A44]/20 transition-all"
            />
          </div>

          {/* Filters + View Toggle */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                const count = categoryCounts[cat] || 0;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full font-sans-ui text-xs uppercase tracking-wider shrink-0 whitespace-nowrap transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-[#34281F] text-[#FCF9F5] shadow-md font-semibold'
                        : 'bg-[#F5ECDD]/60 text-[#6E5D4F] border border-[#E8DDCD] hover:border-[#B88A44]'
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`text-[10px] ${isActive ? 'text-[#B88A44]' : 'text-[#6E5D4F]/50'}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-1 bg-[#F5ECDD]/60 rounded-xl p-1 border border-[#E8DDCD]">
              <button
                onClick={() => setViewMode('masonry')}
                className={`p-2 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'masonry' ? 'bg-[#34281F] text-white shadow-sm' : 'text-[#6E5D4F] hover:text-[#34281F]'
                }`}
                title="Masonry View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'grid' ? 'bg-[#34281F] text-white shadow-sm' : 'text-[#6E5D4F] hover:text-[#34281F]'
                }`}
                title="Grid View"
              >
                <Grid3x3 className="w-4 h-4" />
              </button>
            </div>
          </div>

          <p className="text-center text-xs font-sans-ui text-[#6E5D4F]/70">
            Showing {visibleItems.length} of {filteredItems.length} items
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>

        {/* Gallery */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-serif-editorial text-2xl text-[#34281F]/40 mb-2">No Results Found</p>
            <p className="font-sans-narrative text-sm text-[#6E5D4F]/60">Try a different category or search term</p>
          </div>
        ) : viewMode === 'masonry' ? (
          /* ─── CSS COLUMNS MASONRY ─── */
          <div
            className="masonry-gallery"
            style={{
              columnGap: '16px',
              columnFill: 'balance' as React.CSSProperties['columnFill'],
              // Cap column count to item count so no empty columns appear
              ['--item-count' as string]: visibleItems.length,
            }}
          >
            <style jsx>{`
              .masonry-gallery {
                column-count: ${Math.min(2, visibleItems.length)};
                column-gap: 16px;
                column-fill: balance;
              }
              @media (min-width: 640px) {
                .masonry-gallery { column-count: ${Math.min(3, visibleItems.length)}; }
              }
              @media (min-width: 1024px) {
                .masonry-gallery { column-count: ${Math.min(4, visibleItems.length)}; }
              }
            `}</style>
            {visibleItems.map((item, idx) => (
              <GalleryCard key={item.id} item={item} index={idx} onClick={() => handleOpenLightbox(item)} />
            ))}
          </div>
        ) : (
          /* ─── UNIFORM GRID ─── */
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {visibleItems.map((item, idx) => (
              <GalleryCard key={item.id} item={item} index={idx} onClick={() => handleOpenLightbox(item)} isGrid />
            ))}
          </div>
        )}

        {/* Load More */}
        {hasMore && (
          <div className="flex justify-center pt-8">
            <button
              onClick={handleLoadMore}
              className="group flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#34281F] text-[#FCF9F5] font-sans-ui text-sm font-semibold uppercase tracking-wider hover:bg-[#B88A44] transition-colors shadow-lg cursor-pointer"
            >
              <span>Load More Photos</span>
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              <span className="text-[10px] text-[#B88A44] group-hover:text-white">
                ({filteredItems.length - visibleCount} remaining)
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
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

/* ─── Gallery Card Component ─── */
const GalleryCard: React.FC<{
  item: LightboxMedia;
  index: number;
  onClick: () => void;
  isGrid?: boolean;
}> = ({ item, index, onClick, isGrid }) => {
  const isVideo = item.isVideo || item.type === 'reel' || item.type === 'film';
  const imageCount = Array.isArray(item.images) ? item.images.length : 1;
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.025, 0.25) }}
      onClick={onClick}
      className={`group relative rounded-2xl overflow-hidden bg-[#F5ECDD] border border-[#E8DDCD] shadow-sm hover:shadow-xl hover:border-[#B88A44]/60 transition-all duration-500 cursor-pointer ${
        isGrid ? 'aspect-square' : 'break-inside-avoid mb-4'
      }`}
    >
      {/* Image — natural height in masonry, square in grid */}
      <img
        src={item.image || ''}
        alt={item.title}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full transition-all duration-700 ease-out group-hover:scale-105 ${
          isGrid ? 'h-full object-cover' : 'h-auto object-cover'
        } ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Loading skeleton */}
      {!loaded && (
        <div className={`${isGrid ? 'aspect-square' : 'aspect-[4/3]'} w-full bg-[#E8DDCD] animate-pulse`} />
      )}

      {/* Video play badge */}
      {isVideo && (
        <div className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-[#B88A44] text-white flex items-center justify-center shadow-lg backdrop-blur-sm border border-white/30 group-hover:scale-110 transition-transform">
          <Play className="w-4 h-4 fill-white ml-0.5" />
        </div>
      )}

      {/* Multi-photo count */}
      {imageCount > 1 && !isVideo && (
        <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-sm text-white text-[10px] font-sans-ui font-semibold border border-white/20">
          +{imageCount}
        </div>
      )}

      {/* Hover overlay + info */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
        <EditorialBadge variant="gold" className="text-[9px] uppercase tracking-wider font-semibold mb-1">
          {item.category}
        </EditorialBadge>
        <h3 className="font-serif-editorial text-sm font-medium leading-tight text-white line-clamp-2">
          {item.title}
        </h3>
      </div>
    </motion.div>
  );
};
