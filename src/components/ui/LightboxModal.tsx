'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play, Pause, MessageCircle } from 'lucide-react';
import { EditorialBadge } from './EditorialBadge';
import { getYouTubeEmbedUrl } from '@/lib/utils';
import { siteConfig } from '@/lib/data/site';

export interface LightboxMedia {
  id: string;
  title: string;
  category: string;
  image: string;
  images?: string[];
  videoUrl?: string;
  location?: string;
  isVideo?: boolean;
  type?: 'reel' | 'film' | 'image';
}

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: LightboxMedia[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  items,
  currentIndex,
  onNavigate,
}) => {
  const currentItem = items[currentIndex];
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const autoPlayTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setActiveImageIdx(0);
  }, [currentIndex, currentItem?.id]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const galleryImages =
    Array.isArray(currentItem?.images) && currentItem.images.length > 0
      ? currentItem.images
      : currentItem?.image
      ? [currentItem.image]
      : [];

  const selectedImage = galleryImages[activeImageIdx] || galleryImages[0] || currentItem?.image || '';

  const handleNext = useCallback(() => {
    if (!items || items.length === 0) return;
    if (galleryImages.length > 1 && activeImageIdx < galleryImages.length - 1) {
      setActiveImageIdx((prev) => prev + 1);
    } else {
      setActiveImageIdx(0);
      onNavigate((currentIndex + 1) % items.length);
    }
  }, [items, galleryImages.length, activeImageIdx, currentIndex, onNavigate]);

  const handlePrev = useCallback(() => {
    if (!items || items.length === 0) return;
    if (galleryImages.length > 1 && activeImageIdx > 0) {
      setActiveImageIdx((prev) => prev - 1);
    } else {
      const prevItemIdx = (currentIndex - 1 + items.length) % items.length;
      const prevItem = items[prevItemIdx];
      const prevImgs = Array.isArray(prevItem?.images) && prevItem.images.length > 0 ? prevItem.images : [prevItem?.image];
      setActiveImageIdx(prevImgs.length - 1);
      onNavigate(prevItemIdx);
    }
  }, [items, galleryImages.length, activeImageIdx, currentIndex, onNavigate]);

  // Auto-slideshow
  useEffect(() => {
    if (!isOpen || !isPlaying) {
      if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
      return;
    }
    autoPlayTimer.current = setInterval(handleNext, 4500);
    return () => { if (autoPlayTimer.current) clearInterval(autoPlayTimer.current); };
  }, [isOpen, isPlaying, handleNext]);

  // Keyboard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === ' ') { e.preventDefault(); setIsPlaying((p) => !p); }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handlePrev, handleNext, onClose]);

  // Touch swipe
  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) { diff > 0 ? handleNext() : handlePrev(); }
    touchStartX.current = null;
  };

  if (!currentItem) return null;

  const youtubeEmbedUrl = getYouTubeEmbedUrl(currentItem.videoUrl);
  const isVideoFormat =
    (currentItem.type === 'reel' || currentItem.type === 'film' || Boolean(currentItem.videoUrl)) &&
    Boolean(youtubeEmbedUrl || currentItem.videoUrl);

  const handleWhatsAppInquiry = () => {
    const cleanNumber = siteConfig.whatsapp.replace(/[^0-9]/g, '');
    const text = encodeURIComponent(
      `Hello Hanvi Events! I saw your ${currentItem.title} (${currentItem.category}) in the gallery and would like to inquire about booking.`
    );
    window.open(`https://wa.me/${cleanNumber}?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 bg-black text-white select-none"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* ── Top Bar ── */}
          <div className="absolute top-0 left-0 right-0 z-30">
            {/* Progress */}
            <div className="w-full h-0.5 bg-white/10">
              {isPlaying && (
                <motion.div
                  key={`${currentIndex}-${activeImageIdx}`}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 4.5, ease: 'linear' }}
                  className="h-full bg-[#B88A44]"
                />
              )}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-gradient-to-b from-black/80 to-transparent">
              <div className="flex items-center gap-3 min-w-0">
                <EditorialBadge variant="gold" className="text-[10px] shrink-0">
                  {currentItem.category || 'Gallery'}
                </EditorialBadge>
                <span className="font-serif-editorial text-base sm:text-lg font-medium text-white truncate">
                  {currentItem.title}
                </span>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setIsPlaying((p) => !p)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  title={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                </button>
                <span className="font-sans-ui text-xs text-white/60 tabular-nums">
                  {currentIndex + 1}/{items.length}
                </span>
                <button
                  onClick={onClose}
                  aria-label="Close"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* ── Prev / Next Arrows ── */}
          <button
            onClick={handlePrev}
            aria-label="Previous"
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/50 hover:bg-[#B88A44] text-white transition-all backdrop-blur-sm cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next"
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/50 hover:bg-[#B88A44] text-white transition-all backdrop-blur-sm cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* ── Main Image / Video ── fills the entire screen ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentItem.id}-${activeImageIdx}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 z-10 flex items-center justify-center"
            >
              {isVideoFormat ? (
                youtubeEmbedUrl ? (
                  <iframe
                    src={youtubeEmbedUrl}
                    title={currentItem.title}
                    className={`w-full h-full m-auto rounded-none sm:rounded-2xl shadow-2xl ${
                      currentItem.type === 'reel'
                        ? 'max-w-[380px] max-h-[82vh] aspect-[9/16]'
                        : 'max-w-5xl max-h-[85vh] aspect-video'
                    }`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                ) : (
                  <video
                    src={currentItem.videoUrl}
                    controls
                    autoPlay
                    className="max-w-full max-h-full object-contain"
                  />
                )
              ) : (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={selectedImage}
                  alt={currentItem.title}
                  className="max-w-full max-h-full object-contain"
                  draggable={false}
                />
              )}
            </motion.div>
          </AnimatePresence>

          {/* ── Bottom Bar ── */}
          <div className="absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-black/80 to-transparent">
            {/* Thumbnail strip */}
            {galleryImages.length > 1 && (
              <div className="flex justify-center gap-1.5 px-4 py-2 overflow-x-auto scrollbar-hide">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                      activeImageIdx === idx
                        ? 'border-[#B88A44] ring-1 ring-[#B88A44]/50 scale-105'
                        : 'border-white/20 opacity-50 hover:opacity-90'
                    }`}
                  >
                    <img src={img} alt={`Photo ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Footer info */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 gap-4">
              <div className="min-w-0">
                <p className="font-sans-narrative text-xs text-white/60 truncate">
                  {currentItem.location || 'Hanvi Events • Kakinada'}
                </p>
              </div>
              <button
                onClick={handleWhatsAppInquiry}
                className="shrink-0 px-4 py-2 bg-[#25D366] hover:bg-[#1DA851] text-white font-sans-ui text-[10px] font-semibold uppercase tracking-wider rounded-full shadow-lg transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>Inquire</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
