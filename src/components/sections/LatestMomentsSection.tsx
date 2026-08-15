'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Film, Video, Sparkles } from 'lucide-react';
import { MediaItem, getStoredMediaItems } from '@/lib/data/reelsStore';
import { SectionHeader } from '../ui/SectionHeader';
import { ImageWithSkeleton } from '../ui/ImageWithSkeleton';
import { EditorialBadge } from '../ui/EditorialBadge';
import { LightboxModal, LightboxMedia } from '../ui/LightboxModal';
import { getYouTubeEmbedUrl } from '@/lib/utils';

export interface LatestMomentsSectionProps {
  items?: MediaItem[];
}

const MomentsCardItem: React.FC<{
  item: MediaItem;
  onClick: () => void;
}> = ({ item, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const embedUrl = getYouTubeEmbedUrl(item.videoUrl);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-[#FCF9F5]/5 border border-white/10 rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:border-[#B88A44] transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
    >
      <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-black/50">
        {/* If hovered and embed URL exists, play video embed preview */}
        {isHovered && embedUrl ? (
          <iframe
            src={`${embedUrl}?autoplay=1&mute=1&controls=0&loop=1`}
            title={item.title}
            className="w-full h-full object-cover pointer-events-none scale-105 transition-transform duration-500"
            allow="autoplay"
          />
        ) : (
          <ImageWithSkeleton
            src={item.thumbnail}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover group-hover:scale-108 transition-transform duration-700"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:opacity-60 transition-opacity" />

        {/* Dynamic Play Icon */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <span className={`rounded-full bg-[#B88A44] text-white flex items-center justify-center shadow-2xl transition-all duration-300 ${
            isHovered ? 'w-14 h-14 scale-110 bg-[#B88A44] ring-4 ring-[#B88A44]/40' : 'w-12 h-12'
          }`}>
            <Play className="w-5 h-5 fill-white ml-0.5" />
          </span>
        </div>

        <div className="absolute top-3 left-3 z-10">
          <EditorialBadge variant="gold" className="bg-black/60 text-white border-white/20 text-[10px]">
            {item.type === 'reel' ? 'Instagram Reel' : 'Cinema Film'}
          </EditorialBadge>
        </div>
      </div>

      <div className="p-5 space-y-2 relative z-10">
        <h3 className="font-serif-editorial text-lg text-[#FCF9F5] font-normal leading-snug group-hover:text-[#B88A44] transition-colors line-clamp-2">
          {item.title}
        </h3>
        <p className="font-sans-narrative text-xs text-[#FCF9F5]/70 line-clamp-1">
          {item.subtitle}
        </p>
        <div className="pt-2 flex items-center justify-between text-[11px] text-[#B88A44] font-sans-ui uppercase tracking-wider border-t border-white/10">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            <span>Watch Story →</span>
          </span>
          <span>{item.views || item.duration || 'Featured'}</span>
        </div>
      </div>
    </motion.div>
  );
};

export const LatestMomentsSection: React.FC<LatestMomentsSectionProps> = ({ items }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'reel' | 'film'>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mediaItems, setMediaItems] = useState<MediaItem[]>(items && items.length > 0 ? items : []);

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

  const filteredItems = mediaItems.filter(
    (item) => activeFilter === 'all' || item.type === activeFilter
  );

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
    <section className="py-12 sm:py-24 bg-[#34281F] text-[#FCF9F5]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        <SectionHeader
          scriptEyebrow="Instagram Reels & YouTube Cinema Films"
          title="Latest Moments"
          description="Explore authentic behind-the-scenes reels and cinematic wedding films shot at live events across Andhra Pradesh."
          align="center"
          isDark
        />

        {/* Media Filter Tabs */}
        <div className="flex justify-center gap-2 sm:gap-4 my-6">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full font-sans-ui text-xs uppercase tracking-wider transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[#B88A44] text-white font-semibold shadow-md'
                : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            All Moments ({mediaItems.length})
          </button>
          <button
            onClick={() => setActiveFilter('reel')}
            className={`px-4 py-2 rounded-full font-sans-ui text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
              activeFilter === 'reel'
                ? 'bg-[#B88A44] text-white font-semibold shadow-md'
                : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            <Video className="w-3.5 h-3.5" />
            <span>Reels</span>
          </button>
          <button
            onClick={() => setActiveFilter('film')}
            className={`px-4 py-2 rounded-full font-sans-ui text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
              activeFilter === 'film'
                ? 'bg-[#B88A44] text-white font-semibold shadow-md'
                : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            <Film className="w-3.5 h-3.5" />
            <span>Films</span>
          </button>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <MomentsCardItem
                key={item.id}
                item={item}
                onClick={() => handleOpenItem(item)}
              />
            ))}
          </AnimatePresence>
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
