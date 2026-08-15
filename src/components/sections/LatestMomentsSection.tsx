'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  Film,
  Video,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  SlidersHorizontal,
  Eye,
} from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from '../ui/BrandIcons';
import { MediaItem, getStoredMediaItems } from '@/lib/data/reelsStore';
import { SectionHeader } from '../ui/SectionHeader';
import { ImageWithSkeleton } from '../ui/ImageWithSkeleton';
import { EditorialBadge } from '../ui/EditorialBadge';
import { LightboxModal, LightboxMedia } from '../ui/LightboxModal';
import { getYouTubeEmbedUrl } from '@/lib/utils';

export interface LatestMomentsSectionProps {
  items?: MediaItem[];
}

export const LatestMomentsSection: React.FC<LatestMomentsSectionProps> = ({ items }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'reel' | 'film'>('all');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mediaItems, setMediaItems] = useState<MediaItem[]>(items && items.length > 0 ? items : []);
  
  // Carousel scroll track reference
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (items && items.length > 0) {
      setMediaItems(items);
    } else {
      setMediaItems(getStoredMediaItems());
    }

    const handleUpdate = () => {
      if (!items || items.length === 0) {
        setMediaItems(getStoredMediaItems());
      }
    };
    window.addEventListener('reelsUpdated', handleUpdate);
    return () => window.removeEventListener('reelsUpdated', handleUpdate);
  }, [items]);

  // Extract unique categories
  const categories = Array.from(
    new Set(
      mediaItems
        .map((m) => m.category?.trim())
        .filter((c): c is string => typeof c === 'string' && c.length > 0 && c.toLowerCase() !== 'all')
    )
  );

  // Filtered items
  const filteredItems = mediaItems.filter((item) => {
    const matchesType = activeFilter === 'all' || item.type === activeFilter;
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    return matchesType && matchesCat;
  });

  // Track scroll state
  const checkScroll = () => {
    if (!scrollTrackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollTrackRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress(Math.min(100, Math.max(0, (scrollLeft / maxScroll) * 100)));
    }
  };

  useEffect(() => {
    const el = scrollTrackRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [filteredItems]);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollTrackRef.current) return;
    const scrollAmount = scrollTrackRef.current.clientWidth * 0.75;
    scrollTrackRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const lightboxMedia: LightboxMedia[] = filteredItems.map((item) => ({
    id: item.id,
    title: item.title,
    category: item.category || (item.type === 'reel' ? 'Reel' : 'Film'),
    image: item.thumbnail,
    images: Array.isArray(item.images) && item.images.length > 0 ? item.images : [item.thumbnail],
    location: item.subtitle,
    videoUrl: item.videoUrl,
    type: item.type,
    isVideo: item.type === 'reel' || item.type === 'film' || Boolean(item.videoUrl),
  }));

  const handleOpenItem = (item: MediaItem) => {
    const idx = filteredItems.findIndex((m) => m.id === item.id);
    setSelectedIndex(idx >= 0 ? idx : 0);
    setLightboxOpen(true);
  };

  return (
    <section id="moments" className="py-16 sm:py-28 bg-[#1F1915] text-[#FCF9F5] relative overflow-hidden">
      {/* Background Ambience & Delicate Noise Texture */}
      <div className="absolute inset-0 bg-radial-gradient from-[#34281F]/60 via-[#1F1915] to-[#14100D] pointer-events-none opacity-80" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B88A44]/40 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
        
        {/* Top Header & Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="max-w-2xl">
            <span className="font-script-accent text-xl sm:text-2xl text-[#B88A44] block mb-1">
              Instagram Reels & YouTube Cinema Films
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl text-[#FCF9F5] font-normal tracking-wide">
              Latest Moments
            </h2>
            <p className="font-sans-narrative text-xs sm:text-sm text-[#FCF9F5]/70 mt-2">
              Explore authentic behind-the-scenes reels and cinematic wedding films shot at live events across Andhra Pradesh.
            </p>
          </div>

          {/* Desktop Left/Right Scroll Arrows */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll videos left"
              className={`p-3 rounded-full border transition-all duration-200 cursor-pointer ${
                canScrollLeft
                  ? 'bg-white/10 hover:bg-[#B88A44] border-white/20 text-white shadow-md'
                  : 'bg-white/5 border-white/5 text-white/30 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll videos right"
              className={`p-3 rounded-full border transition-all duration-200 cursor-pointer ${
                canScrollRight
                  ? 'bg-white/10 hover:bg-[#B88A44] border-white/20 text-white shadow-md'
                  : 'bg-white/5 border-white/5 text-white/30 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 my-6">
          {/* Main Format Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full font-sans-ui text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer min-h-[40px] ${
                activeFilter === 'all'
                  ? 'bg-[#B88A44] text-white font-semibold shadow-md ring-2 ring-[#B88A44]/30'
                  : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/10'
              }`}
            >
              All Moments ({mediaItems.length})
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter('reel')}
              className={`px-4 py-2 rounded-full font-sans-ui text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-1.5 min-h-[40px] ${
                activeFilter === 'reel'
                  ? 'bg-[#B88A44] text-white font-semibold shadow-md ring-2 ring-[#B88A44]/30'
                  : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/10'
              }`}
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>Instagram Reels</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter('film')}
              className={`px-4 py-2 rounded-full font-sans-ui text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-1.5 min-h-[40px] ${
                activeFilter === 'film'
                  ? 'bg-[#B88A44] text-white font-semibold shadow-md ring-2 ring-[#B88A44]/30'
                  : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/10'
              }`}
            >
              <YoutubeIcon className="w-3.5 h-3.5" />
              <span>Cinema Films</span>
            </button>
          </div>

          {/* Sub-Category Filter Chips */}
          {categories.length > 0 && (
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              <button
                type="button"
                onClick={() => setActiveCategory('all')}
                className={`px-3 py-1 rounded-full text-xs font-sans-narrative transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === 'all'
                    ? 'bg-white/20 text-white font-medium'
                    : 'text-white/50 hover:text-white/80'
                }`}
              >
                All Themes
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1 rounded-full text-xs font-sans-narrative transition-colors whitespace-nowrap cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-white/20 text-white font-medium border border-white/20'
                      : 'text-white/50 hover:text-white/80 border border-transparent'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── Continuous Horizontal Sideways Scroll Track ── */}
        <div
          ref={scrollTrackRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 pt-2 select-none no-scrollbar cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredItems.map((item, idx) => {
            const isReel = item.type === 'reel';
            const isFilm = item.type === 'film';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                onClick={() => handleOpenItem(item)}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-xl border border-white/10 hover:border-[#B88A44] transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between shrink-0 snap-start bg-[#171310] ${
                  isReel
                    ? 'w-[240px] sm:w-[280px] aspect-[9/16]'
                    : isFilm
                    ? 'w-[320px] sm:w-[400px] aspect-[16/10]'
                    : 'w-[280px] sm:w-[320px] aspect-[4/3]'
                }`}
              >
                {/* Background Image / Poster */}
                <div className="absolute inset-0 w-full h-full bg-black/60 overflow-hidden">
                  <ImageWithSkeleton
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 80vw, 400px"
                    className="object-cover group-hover:scale-108 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14100D] via-black/30 to-black/20 group-hover:opacity-75 transition-opacity" />
                </div>

                {/* Top Badges */}
                <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[#FCF9F5] font-sans-ui text-[10px] uppercase tracking-wider font-semibold flex items-center gap-1.5 shadow-sm">
                    {isReel ? (
                      <>
                        <InstagramIcon className="w-3 h-3 text-[#E1306C]" />
                        <span>Reel</span>
                      </>
                    ) : isFilm ? (
                      <>
                        <YoutubeIcon className="w-3 h-3 text-[#FF0000]" />
                        <span>Cinema Film</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3 h-3 text-[#B88A44]" />
                        <span>{item.category || 'Gallery'}</span>
                      </>
                    )}
                  </span>

                  {item.category && (
                    <span className="px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-sans-narrative text-white/80">
                      {item.category}
                    </span>
                  )}
                </div>

                {/* Centered Glowing Play Button */}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-[#B88A44] group-hover:bg-[#d49f4f] text-white flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-115 ring-4 ring-[#B88A44]/30 group-hover:ring-[#B88A44]/60">
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white ml-0.5" />
                  </div>
                </div>

                {/* Bottom Story & Metadata Bar */}
                <div className="relative z-10 p-4 sm:p-5 space-y-2 bg-gradient-to-t from-black/95 via-black/70 to-transparent pt-8">
                  <h3 className="font-serif-editorial text-base sm:text-lg text-[#FCF9F5] font-normal leading-snug group-hover:text-[#B88A44] transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="font-sans-narrative text-xs text-[#FCF9F5]/70 line-clamp-1">
                    {item.subtitle}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-[11px] text-[#B88A44] font-sans-ui uppercase tracking-wider border-t border-white/10">
                    <span className="flex items-center gap-1 font-semibold group-hover:translate-x-0.5 transition-transform">
                      <span>Watch Story</span>
                      <span>→</span>
                    </span>
                    <span className="text-white/60 font-medium">{item.views}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Horizontal Progress Indicator */}
        <div className="mt-4 flex items-center justify-between gap-4 text-xs font-sans-narrative text-white/50">
          <span>{filteredItems.length} Stories Available</span>

          <div className="flex-1 max-w-xs h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#B88A44] rounded-full transition-all duration-150"
              style={{ width: `${Math.max(15, scrollProgress)}%` }}
            />
          </div>

          <span className="flex items-center gap-1 text-[#B88A44]">
            <span>Scroll Sideways</span>
            <span>⇄</span>
          </span>
        </div>

      </div>

      {/* Lightbox Media Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={lightboxMedia}
        currentIndex={selectedIndex}
        onNavigate={(idx) => setSelectedIndex(idx)}
      />
    </section>
  );
};
