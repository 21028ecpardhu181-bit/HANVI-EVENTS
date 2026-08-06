'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WeddingJourneyStep } from '@/lib/types';
import { CulturalTheme } from '@/lib/theme/themeEngine';
import { ImageWithSkeleton } from '../ui/ImageWithSkeleton';
import { EditorialBadge } from '../ui/EditorialBadge';

interface InteractiveSacredJourneyProps {
  steps: WeddingJourneyStep[];
  theme: CulturalTheme;
}

export const InteractiveSacredJourney: React.FC<InteractiveSacredJourneyProps> = ({
  steps,
  theme,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Reset active index when steps change (e.g. switching wedding tradition)
  React.useEffect(() => {
    setActiveIndex(0);
  }, [steps]);

  const activeStep = steps[activeIndex] || steps[0];

  return (
    <div className="w-full">
      {/* Step Buttons Selector */}
      <div className="flex overflow-x-auto no-scrollbar gap-2 pb-4 mb-6 md:mb-10 max-w-5xl mx-auto border-b border-[#E8DDCD]">
        {steps.map((step, idx) => {
          const isActive = activeIndex === idx;
          return (
            <button
              key={step.id}
              onClick={() => setActiveIndex(idx)}
              className={`flex-1 min-w-[130px] p-3 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                isActive
                  ? 'border-[#B88A44] bg-[#F5ECDD] text-[#34281F] shadow-sm font-semibold'
                  : 'border-[#E8DDCD] bg-[#FCF9F5] text-[#6E5D4F] hover:bg-[#F5ECDD]/40'
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  style={{ backgroundColor: isActive ? theme.primary : '#E8DDCD' }}
                  className={`w-5 h-5 rounded-full text-[10px] font-sans-ui flex items-center justify-center font-bold transition-colors ${
                    isActive ? 'text-white' : 'text-[#6E5D4F]'
                  }`}
                >
                  {step.stepNumber}
                </span>
                <span className="text-[9px] uppercase font-sans-ui text-[#6E5D4F]">
                  {step.slug}
                </span>
              </div>
              <span className="font-serif-editorial text-xs sm:text-sm font-medium mt-2 line-clamp-1">
                {step.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Step Showcase */}
      <div className="bg-[#FCF9F5] border border-[#E8DDCD] rounded-3xl overflow-hidden p-5 sm:p-8 md:p-10 shadow-sm max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 items-center"
          >
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md w-full border border-[#E8DDCD]">
              <ImageWithSkeleton
                src={activeStep.heroImage}
                alt={activeStep.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div>
                <EditorialBadge variant="gold" className="text-[10px] px-2.5 py-0.5">
                  Step {activeStep.stepNumber} of 06 • {activeStep.timing}
                </EditorialBadge>
              </div>

              <h3 className="font-serif-editorial text-2xl sm:text-4xl text-[#34281F]">
                {activeStep.title} ({activeStep.teluguName})
              </h3>

              <p className="font-sans-narrative text-xs sm:text-base text-[#6E5D4F] leading-relaxed">
                {activeStep.description}
              </p>

              <div className="pt-3 border-t border-[#E8DDCD] space-y-2 text-xs font-sans-narrative text-[#34281F]">
                <span style={{ color: theme.accent }} className="font-semibold block">
                  Spatial Decor Highlights:
                </span>
                <ul className="space-y-1 text-[#6E5D4F]">
                  {activeStep.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B88A44]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
