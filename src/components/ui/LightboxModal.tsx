'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon, Film } from 'lucide-react';
import { ImageWithSkeleton } from './ImageWithSkeleton';
import { EditorialBadge } from './EditorialBadge';
import { getYouTubeEmbedUrl } from '@/lib/utils';

export interface LightboxMedia {
  id: string;
  title: string;
  category: string;
  image: string; // Cover / thumbnail
  images?: string[]; // Array of gallery images
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

  // Reset active image index whenever current item changes
  useEffect(() => {
    setActiveImageIdx(0);
  }, [currentIndex, currentItem?.id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, items.length]);

  if (!currentItem) return null;

  const handlePrev = () => {
    const newIdx = (currentIndex - 1 + items.length) % items.length;
    onNavigate(newIdx);
  };

  const handleNext = () => {
    const newIdx = (currentIndex + 1) % items.length;
    onNavigate(newIdx);
  };

  const youtubeEmbedUrl = getYouTubeEmbedUrl(currentItem.videoUrl);
  const isVideoFormat =
    (currentItem.type === 'reel' || currentItem.type === 'film' || Boolean(currentItem.videoUrl)) &&
    Boolean(youtubeEmbedUrl || currentItem.videoUrl);

  const galleryImages =
    Array.isArray(currentItem.images) && currentItem.images.length > 0
      ? currentItem.images
      : currentItem.image
      ? [currentItem.image]
      : [];

  const hasImages = galleryImages.length > 0;
  const selectedImage = galleryImages[activeImageIdx] || galleryImages[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#34281F]/90 backdrop-blur-md">
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close Lightbox"
            className="absolute top-5 right-5 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev Item */}
          <button
            onClick={handlePrev}
            aria-label="Previous Media"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Next Item */}
          <button
            onClick={handleNext}
            aria-label="Next Media"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Media Card */}
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col rounded-3xl overflow-hidden bg-[#FCF9F5] shadow-2xl border border-[#E8DDCD]"
          >
            {/* Scrollable Mixed Media Content Body */}
            <div className="overflow-y-auto max-h-[76vh] p-4 sm:p-6 bg-[#1E1712] text-[#FCF9F5] space-y-6">
              
              {/* 1. EMBEDDED VIDEO AT TOP (If Reel/Film or Video link exists) */}
              {isVideoFormat && (
                <div className="w-full flex flex-col items-center space-y-3">
                  <div className="w-full flex items-center justify-between px-2 text-xs font-sans-ui uppercase tracking-wider text-[#B88A44]">
                    <span className="flex items-center gap-1.5 font-semibold">
                      <Film className="w-3.5 h-3.5" />
                      <span>{currentItem.type === 'reel' ? 'Instagram Reel Cinema' : 'Wedding Film Cinema'}</span>
                    </span>
                  </div>

                  <div className="w-full flex justify-center py-2">
                    {youtubeEmbedUrl ? (
                      <div
                        className={`relative w-full flex items-center justify-center ${
                          currentItem.type === 'reel'
                            ? 'max-w-[340px] aspect-[9/16] h-[52vh] max-h-[500px]'
                            : 'max-w-4xl aspect-video h-[50vh] max-h-[480px]'
                        }`}
                      >
                        <iframe
                          src={youtubeEmbedUrl}
                          title={currentItem.title}
                          className="w-full h-full rounded-2xl shadow-2xl border border-white/10"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      </div>
                    ) : (
                      <video
                        src={currentItem.videoUrl}
                        controls
                        autoPlay
                        className="w-full max-w-4xl max-h-[50vh] rounded-2xl object-contain"
                      />
                    )}
                  </div>
                </div>
              )}

              {/* 2. GALLERY IMAGES BELOW VIDEO (Or alone if Image format / no video) */}
              {hasImages && (
                <div className={`w-full flex flex-col items-center space-y-4 ${isVideoFormat ? 'pt-4 border-t border-white/10' : ''}`}>
                  {isVideoFormat && (
                    <div className="w-full flex items-center justify-between px-2 text-xs font-sans-ui uppercase tracking-wider text-[#B88A44]">
                      <span className="flex items-center gap-1.5 font-semibold">
                        <ImageIcon className="w-3.5 h-3.5" />
                        <span>Gallery Photography ({galleryImages.length} Photos)</span>
                      </span>
                    </div>
                  )}

                  {/* Main Display Image */}
                  <div className="relative w-full h-[50vh] min-h-[300px] max-h-[500px] rounded-2xl overflow-hidden bg-black/40 flex items-center justify-center">
                    <ImageWithSkeleton
                      src={selectedImage}
                      alt={currentItem.title}
                      fill
                      sizes="(max-width: 1200px) 100vw, 80vw"
                      className="object-contain"
                    />
                  </div>

                  {/* Gallery Thumbnails Selection Strip (If > 1 image) */}
                  {galleryImages.length > 1 && (
                    <div className="flex flex-wrap justify-center gap-2 max-w-full overflow-x-auto py-2">
                      {galleryImages.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveImageIdx(idx)}
                          className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                            activeImageIdx === idx
                              ? 'border-[#B88A44] scale-105 shadow-lg'
                              : 'border-white/20 opacity-60 hover:opacity-100 hover:border-white/50'
                          }`}
                        >
                          <ImageWithSkeleton
                            src={img}
                            alt={`${currentItem.title} ${idx + 1}`}
                            fill
                            className="object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

            </div>

            {/* Media Information Bar */}
            <div className="w-full p-4 sm:p-6 bg-[#FCF9F5] border-t border-[#E8DDCD] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[#34281F]">
              <div>
                <EditorialBadge variant="gold">
                  {currentItem.category || 'Mandap'} {currentItem.location ? `• ${currentItem.location}` : ''}
                </EditorialBadge>
                <h3 className="font-serif-editorial text-xl sm:text-2xl font-medium mt-1">
                  {currentItem.title}
                </h3>
              </div>

              <span className="font-sans-ui text-xs text-[#6E5D4F]">
                Item {currentIndex + 1} of {items.length}
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};


