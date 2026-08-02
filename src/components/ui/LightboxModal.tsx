'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { ImageWithSkeleton } from './ImageWithSkeleton';
import { EditorialBadge } from './EditorialBadge';

export interface LightboxMedia {
  id: string;
  title: string;
  category: string;
  image: string; // image or thumbnail
  videoUrl?: string;
  location?: string;
  isVideo?: boolean;
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

          {/* Navigation Prev */}
          <button
            onClick={handlePrev}
            aria-label="Previous Media"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Next */}
          <button
            onClick={handleNext}
            aria-label="Next Media"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Media Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center rounded-3xl overflow-hidden bg-[#FCF9F5] shadow-2xl border border-[#E8DDCD]"
          >
            <div className="relative w-full h-[65vh] min-h-[350px] bg-[#34281F] flex items-center justify-center overflow-hidden">
              {currentItem.isVideo || currentItem.videoUrl ? (
                <video
                  src={currentItem.videoUrl || currentItem.image}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              ) : (
                <ImageWithSkeleton
                  src={currentItem.image}
                  alt={currentItem.title}
                  fill
                  sizes="(max-width: 1200px) 100vw, 80vw"
                  className="object-contain"
                />
              )}
            </div>

            {/* Media Information Bar */}
            <div className="w-full p-4 sm:p-6 bg-[#FCF9F5] border-t border-[#E8DDCD] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[#34281F]">
              <div>
                <EditorialBadge variant="gold">
                  {currentItem.category} {currentItem.location ? `• ${currentItem.location}` : ''}
                </EditorialBadge>
                <h3 className="font-serif-editorial text-xl sm:text-2xl font-medium mt-1">
                  {currentItem.title}
                </h3>
              </div>

              <span className="font-sans-ui text-xs text-[#6E5D4F]">
                {currentIndex + 1} of {items.length}
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
