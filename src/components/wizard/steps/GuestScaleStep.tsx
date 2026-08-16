'use client';

import React from 'react';
import { GUEST_RANGES } from '@/lib/data/plannerConfig';
import { Users, Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface GuestScaleStepProps {
  guestRange: string;
  exactGuests: number | null;
  onChange: (range: string, exactGuests: number | null) => void;
}

export function GuestScaleStep({ guestRange, exactGuests, onChange }: GuestScaleStepProps) {
  const handleExactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === '') {
      onChange(guestRange, null);
      return;
    }

    const num = parseInt(val, 10);
    if (!isNaN(num)) {
      const match = GUEST_RANGES.find((r) => num >= r.min && num <= r.max);
      const newRange = match ? match.label : '1000+';
      onChange(newRange, num);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 py-2 sm:py-4">
      <div className="text-center mb-3 sm:mb-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif-editorial text-[#34281F] font-semibold">
          Scale of Celebration
        </h2>
        <p className="text-[11px] sm:text-xs font-sans-ui text-[#6E5D4F] mt-0.5">
          Select your expected guest gathering size
        </p>
      </div>

      {/* 3x2 Grid of Guest Range Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-3">
        {GUEST_RANGES.map((range) => {
          const isSelected = guestRange === range.label;

          return (
            <motion.button
              key={range.id}
              type="button"
              whileTap={{ scale: 0.98 }}
              onClick={() => onChange(range.label, exactGuests)}
              className={`relative p-3 sm:p-4 rounded-xl border text-center transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'border-[#B88A44] bg-[#FFFDF9] ring-2 ring-[#B88A44]/60 shadow-md'
                  : 'border-[#E8DDCD] bg-white hover:border-[#B88A44]/50 shadow-xs'
              }`}
            >
              {isSelected && (
                <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-[#B88A44] text-white flex items-center justify-center">
                  <Check size={10} strokeWidth={3} />
                </div>
              )}
              <h3 className="text-base sm:text-lg md:text-xl font-serif-editorial font-bold text-[#34281F]">
                {range.label}
              </h3>
              <p className="text-[10px] sm:text-xs font-sans-ui text-[#6E5D4F] mt-0.5 line-clamp-1">
                {range.subtitle}
              </p>
            </motion.button>
          );
        })}
      </div>

      {/* Compact Exact Count Box */}
      <div className="max-w-xs mx-auto bg-white border border-[#E8DDCD] rounded-xl p-2.5 sm:p-3 text-center shadow-xs">
        <label className="block text-[11px] font-sans-ui text-[#6E5D4F] mb-1">
          Exact guest count (optional)
        </label>
        <div className="flex items-center justify-center gap-2">
          <Users size={16} className="text-[#B88A44]" />
          <input
            type="number"
            min="1"
            max="10000"
            value={exactGuests || ''}
            onChange={handleExactChange}
            placeholder="e.g. 350"
            className="w-24 text-center text-sm font-semibold border-b border-[#B88A44] focus:outline-none text-[#34281F] py-0.5"
          />
        </div>
      </div>
    </div>
  );
}
