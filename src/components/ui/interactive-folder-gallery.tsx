'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export interface GalleryPhoto {
  id: string | number;
  image: string;
  title?: string;
  category?: string;
}

const defaultPhotos: GalleryPhoto[] = [
  { id: 1, image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop', title: 'Grand Mandap' },
  { id: 2, image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop', title: 'Jasmine Canopy' },
  { id: 3, image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop', title: 'Royal Stage' },
  { id: 4, image: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=800&auto=format&fit=crop', title: 'Floral Entrance' },
  { id: 5, image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop', title: 'Fairy Lighting' },
];

export interface InteractiveFolderGalleryProps {
  photos?: GalleryPhoto[];
  folderName?: string;
  dragHintText?: string;
  className?: string;
  onSelectPhoto?: (photo: GalleryPhoto, index: number) => void;
}

export function InteractiveFolderGallery({
  photos = defaultPhotos,
  folderName = "Mandap & Decor Gallery",
  dragHintText = "Drag any photo down to close folder",
  className,
  onSelectPhoto,
}: InteractiveFolderGalleryProps) {
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [hoverFolder, setHoverFolder] = useState(false);

  const displayPhotos = photos && photos.length > 0 ? photos.slice(0, 5) : defaultPhotos;

  return (
    <div className={`w-full py-12 sm:py-20 relative select-none ${className || ""}`}>
      <div className="relative w-full min-h-[440px] sm:min-h-[520px] flex flex-col items-center justify-center">

        <div className="relative w-[320px] sm:w-[400px] h-[440px] sm:h-[500px] flex justify-center pointer-events-none z-0">

          {/* Folder Backing Container */}
          <motion.div 
            className="absolute bottom-6 w-72 sm:w-80 h-52 sm:h-56 drop-shadow-2xl"
            animate={{ opacity: isFolderOpen ? 0 : 1, scale: isFolderOpen ? 0.9 : 1 }}
          >
            <div className="absolute top-0 left-0 w-32 h-10 bg-gradient-to-t from-[#1e1e1e] to-[#2a2a2a] rounded-t-xl border-t border-l border-r border-white/10" />
            <div className="absolute top-8 left-0 right-0 bottom-0 bg-gradient-to-b from-[#1e1e1e] to-[#0a0a0a] rounded-b-xl rounded-tr-xl border border-white/10 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)]" />
            <div className="absolute top-10 left-2 right-2 bottom-2 bg-black rounded-lg shadow-inner pointer-events-none" />
          </motion.div>

          {/* Photo Cards Stack & Fan Out */}
          <div className="absolute bottom-10 z-10 flex justify-center">
            {displayPhotos.map((photo, i) => {
              const offset = i - 2;

              const stackY = hoverFolder ? offset * -10 - 40 : offset * -5;
              const stackX = hoverFolder ? offset * 30 : offset * 3;
              const stackRotate = hoverFolder ? offset * 8 : offset * 3;
              const stackScale = 1 - Math.abs(offset) * 0.03;

              const openY = -130;
              const openX = offset * 90;
              const openRotate = offset * 4;
              const openScale = 1.05;

              return (
                <motion.div
                  key={photo.id || i}
                  drag={isFolderOpen ? true : false}
                  dragSnapToOrigin={true}
                  onDragEnd={(e, info) => {
                    if (info.offset.y > 100 && isFolderOpen) {
                      setIsFolderOpen(false);
                      setHoverFolder(false);
                    }
                  }}
                  onClick={() => {
                    if (isFolderOpen && onSelectPhoto) {
                      onSelectPhoto(photo, i);
                    }
                  }}
                  className={`absolute bottom-0 w-44 sm:w-56 h-60 sm:h-72 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] overflow-hidden border border-white/20 origin-bottom ${
                    isFolderOpen ? "cursor-grab active:cursor-grabbing pointer-events-auto" : "pointer-events-none"
                  }`}
                  animate={!isFolderOpen ? {
                    y: stackY,
                    x: stackX,
                    rotate: stackRotate,
                    scale: stackScale,
                    zIndex: i + 10
                  } : {
                    y: openY,
                    x: openX,
                    rotate: openRotate,
                    scale: openScale,
                    zIndex: 50
                  }}
                  whileHover={isFolderOpen ? { scale: openScale + 0.05, zIndex: 100 } : {}}
                  whileDrag={isFolderOpen ? { scale: openScale + 0.1, rotate: 5, zIndex: 150 } : {}}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                >
                  <img src={photo.image} alt={photo.title || "Gallery item"} className="w-full h-full object-cover pointer-events-none" />
                </motion.div>
              );
            })}
          </div>

          {/* Folder Front Cover Door */}
          <motion.div 
            className="absolute bottom-0 w-[290px] sm:w-[340px] h-38 sm:h-44 drop-shadow-[0_-20px_40px_rgba(0,0,0,0.8)] cursor-pointer z-20 pointer-events-auto"
            style={{ transformOrigin: "bottom" }}
            animate={{ 
              opacity: isFolderOpen ? 0 : 1, 
              rotateX: hoverFolder ? -25 : 0, 
              y: hoverFolder ? 10 : 0,
              pointerEvents: isFolderOpen ? "none" : "auto" 
            }}
            onMouseEnter={() => setHoverFolder(true)}
            onMouseLeave={() => setHoverFolder(false)}
            onClick={() => setIsFolderOpen(true)}
          >
            <div className="w-full h-full bg-gradient-to-b from-[#2a2a2a] to-[#111] rounded-2xl border border-white/20 shadow-[inset_0_2px_10px_rgba(255,255,255,0.1)] relative overflow-hidden flex items-end justify-center pb-8">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

              <div className="px-5 py-2.5 bg-black/90 rounded-lg border border-white/20 shadow-inner flex items-center justify-center backdrop-blur-md">
                <span className="text-white/90 text-xs sm:text-sm font-medium tracking-wide">
                  📁 {folderName} (Click to Open)
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Drag Hint Message when Folder is Open */}
        <motion.div 
          animate={{ opacity: isFolderOpen ? 1 : 0, y: isFolderOpen ? 0 : 50 }}
          className="absolute bottom-6 px-6 py-3 rounded-full bg-black/80 text-white/90 border border-white/20 backdrop-blur-md text-xs font-medium uppercase tracking-widest pointer-events-none z-30 shadow-xl"
        >
          {dragHintText}
        </motion.div>

      </div>
    </div>
  );
}

export { InteractiveFolderGallery as Component };
