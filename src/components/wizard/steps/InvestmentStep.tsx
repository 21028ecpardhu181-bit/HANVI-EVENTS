'use client';

import React from 'react';
import { BUDGET_RANGES } from '@/lib/data/plannerConfig';
import { Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface InvestmentStepProps {
  budgetRange?: string;
  onChange: (budgetRange: string) => void;
}

export function InvestmentStep({ budgetRange = '₹2 Lakhs – ₹5 Lakhs', onChange }: InvestmentStepProps) {
  return (
    <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 py-2 sm:py-3">
      <div className="text-center mb-3">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif-editorial text-[#34281F] font-semibold">
          Investment Range
        </h2>
        <p className="text-[11px] sm:text-xs font-sans-ui text-[#6E5D4F] mt-0.5">
          Select an estimated investment tier for your celebration
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-2.5">
        {BUDGET_RANGES.map((range) => {
          const isSelected = budgetRange === range.label;

          return (
            <motion.button
              key={range.id}
              type="button"
              whileTap={{ scale: 0.98 }}
              onClick={() => onChange(range.label)}
              className={`relative flex flex-col p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'border-[#B88A44] bg-[#FFFDF9] ring-2 ring-[#B88A44]/60 shadow-md'
                  : 'border-[#E8DDCD] bg-white hover:border-[#B88A44]/40 shadow-xs'
              }`}
            >
              {range.badge && (
                <div className="absolute -top-2 right-2 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded-full bg-[#B88A44] text-white flex items-center gap-1 shadow-xs">
                  <Sparkles size={8} /> {range.badge}
                </div>
              )}

              <div className="flex items-center justify-between mb-1">
                <span className="text-sm sm:text-base font-serif-editorial font-bold text-[#34281F]">
                  {range.label}
                </span>
                {isSelected && (
                  <div className="w-4 h-4 rounded-full bg-[#B88A44] text-white flex items-center justify-center shrink-0">
                    <Check size={10} strokeWidth={3} />
                  </div>
                )}
              </div>

              <p className="text-[10px] sm:text-[11px] font-sans-ui text-[#6E5D4F] line-clamp-2">
                {range.subtitle}
              </p>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
