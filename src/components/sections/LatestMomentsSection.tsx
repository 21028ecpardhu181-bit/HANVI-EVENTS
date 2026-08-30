'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Play,
  Film,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Video,
} from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from '../ui/BrandIcons';
import { MediaItem, getStoredMediaItems } from '@/lib/data/reelsStore';
import { siteConfig } from '@/lib/data/site';
import { ImageWithSkeleton } from '../ui/ImageWithSkeleton';
import { LightboxModal, LightboxMedia } from '../ui/LightboxModal';
import { EditorialButton } from '../ui/EditorialButton';

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
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-radial-gradient from-[#34281F]/60 via-[#1F1915] to-[#14100D] pointer-events-none opacity-80" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B88A44]/40 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="max-w-2xl">
            <span className="font-script-accent text-xl sm:text-2xl text-[#B88A44] block mb-1">
              Official Media Channels
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl text-[#FCF9F5] font-normal tracking-wide">
              Live Celebration Cinema
            </h2>
            <p className="font-sans-narrative text-xs sm:text-sm text-[#FCF9F5]/70 mt-2">
              Watch real event reels, mandap reveals, and wedding cinema on our official verified social channels.
            </p>
          </div>

          {/* Desktop Left/Right Scroll Arrows (if items exist) */}
          {filteredItems.length > 0 && (
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
          )}
        </div>

        {/* Content Display: If Items exist, render carousel. If empty, render Verified Social Channels Card */}
        {filteredItems.length > 0 ? (
          <>
            {/* Filter Navigation Tabs */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 my-6">
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
            </div>

            {/* Continuous Horizontal Sideways Scroll Track */}
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
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                      <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-[#B88A44] group-hover:bg-[#d49f4f] text-white flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-115 ring-4 ring-[#B88A44]/30 group-hover:ring-[#B88A44]/60">
                        <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white ml-0.5" />
                      </div>
                    </div>

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
          </>
        ) : (
          /* Evidence-Safe Channel Hub Card */
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#E1306C]/20 border border-[#E1306C]/40 flex items-center justify-center text-[#E1306C]">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <h3 className="font-serif-editorial text-2xl text-[#FCF9F5] font-semibold">
                  Instagram Event Reels
                </h3>
                <p className="font-sans-narrative text-xs sm:text-sm text-[#FCF9F5]/70 leading-relaxed">
                  Watch latest behind-the-scenes ceremony setups, fresh mandap reveals, and daily event stories on our official Instagram channel.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-sans-ui uppercase font-semibold text-[#B88A44] hover:text-white transition-colors"
                >
                  <span>Open Instagram Reels (@hanvievents)</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#FF0000]/20 border border-[#FF0000]/40 flex items-center justify-center text-[#FF0000]">
                  <YoutubeIcon className="w-6 h-6" />
                </div>
                <h3 className="font-serif-editorial text-2xl text-[#FCF9F5] font-semibold">
                  YouTube Cinema Films
                </h3>
                <p className="font-sans-narrative text-xs sm:text-sm text-[#FCF9F5]/70 leading-relaxed">
                  Explore full-length wedding cinema highlights, stage lighting production, and Telugu wedding walkthroughs on YouTube.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-sans-ui uppercase font-semibold text-[#B88A44] hover:text-white transition-colors"
                >
                  <span>Open YouTube Cinema (@hanvievents)</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Media Modal */}
      {filteredItems.length > 0 && (
        <LightboxModal
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          items={lightboxMedia}
          currentIndex={selectedIndex}
          onNavigate={(idx) => setSelectedIndex(idx)}
        />
      )}
    </section>
  );
};
