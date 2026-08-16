'use client';

import React from 'react';
import Image from 'next/image';
import { EVENT_TYPES } from '@/lib/data/plannerConfig';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface CelebrationStepProps {
  selectedEventType: string;
  customEventType: string;
  onChange: (eventType: string, customEventType?: string) => void;
}

export function CelebrationStep({ selectedEventType, customEventType, onChange }: CelebrationStepProps) {
  const currentType = selectedEventType?.toLowerCase() || 'wedding';

  return (
    <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 py-2 sm:py-4">
      <div className="text-center mb-3 sm:mb-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif-editorial text-[#34281F] font-semibold">
          What are you celebrating?
        </h2>
        <p className="text-[11px] sm:text-xs font-sans-ui text-[#6E5D4F] mt-0.5">
          Tap to select your celebration style
        </p>
      </div>

      {/* 3x3 Grid with compact image cards */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {EVENT_TYPES.map((type) => {
          const isSelected = currentType === type.id.toLowerCase();

          return (
            <motion.button
              key={type.id}
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onChange(type.id, customEventType)}
              className={`group relative flex flex-col rounded-xl overflow-hidden border text-left transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'border-[#B88A44] ring-2 ring-[#B88A44]/60 shadow-md bg-[#FFFDF9]'
                  : 'border-[#E8DDCD] bg-white hover:border-[#B88A44]/50 shadow-xs'
              }`}
            >
              {/* Image thumbnail container */}
              <div className="relative w-full h-16 sm:h-22 md:h-26 overflow-hidden bg-[#F5ECDD]">
                <Image
                  src={type.image}
                  alt={type.title}
                  fill
                  sizes="(max-width: 640px) 33vw, 250px"
                  className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
                    isSelected ? 'scale-105 brightness-100' : 'brightness-95'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Selected Badge */}
                {isSelected && (
                  <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-[#B88A44] text-white flex items-center justify-center shadow-xs">
                    <Check size={12} strokeWidth={2.5} />
                  </div>
                )}

                {/* Title on image overlay */}
                <div className="absolute bottom-1 left-1.5 right-1.5">
                  <h3 className="text-white font-sans-narrative text-[11px] sm:text-xs md:text-sm font-bold leading-tight drop-shadow-sm line-clamp-1">
                    {type.title}
                  </h3>
                </div>
              </div>

              {/* Text subtitle beneath */}
              <div className="p-1.5 sm:p-2 bg-white flex items-center justify-between">
                <p className="text-[9px] sm:text-[11px] font-sans-ui text-[#6E5D4F] line-clamp-1">
                  {type.description}
                </p>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Custom celebration field if 'other' is selected */}
      {currentType === 'other' && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 max-w-md mx-auto"
        >
          <input
            type="text"
            value={customEventType}
            onChange={(e) => onChange('other', e.target.value)}
            placeholder="e.g. 50th Anniversary, Retirement Gala"
            className="w-full bg-white border border-[#B88A44] rounded-lg px-3 py-2 text-center text-xs sm:text-sm text-[#34281F] focus:outline-none focus:ring-1 focus:ring-[#B88A44]"
            autoFocus
          />
        </motion.div>
      )}
    </div>
  );
}
