'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Clock, Check } from 'lucide-react';
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
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  React.useEffect(() => {
    setActiveIndex(0);
  }, [steps]);

  if (!steps || steps.length === 0) return null;

  const activeStep = steps[activeIndex] || steps[0];

  const cleanTitle = activeStep.title.replace(/\s*\([^)]*\)/g, '').trim();
  const cleanSubtitle = activeStep.teluguName
    ? activeStep.teluguName.replace(cleanTitle, '').replace(/[()]/g, '').trim()
    : '';

  return (
    <div className="w-full">
      {/* Compact Horizontal Step Selector Tabs */}
      <div className="flex overflow-x-auto scrollbar-hide gap-1.5 sm:gap-2.5 pb-2 sm:pb-4 mb-4 sm:mb-8 max-w-5xl mx-auto snap-x -mx-2 px-2 sm:mx-auto">
        {steps.map((step, idx) => {
          const isActive = activeIndex === idx;
          const stepCleanTitle = step.title.replace(/\s*\([^)]*\)/g, '').trim();

          return (
            <button
              key={step.id || `step-${idx}`}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`shrink-0 min-w-[100px] sm:min-w-[150px] p-2 sm:p-3 rounded-xl sm:rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between snap-start active:scale-95 ${
                isActive
                  ? 'bg-gradient-to-br from-[#FFF9F0] via-[#FDF3E3] to-[#F5E6CC] text-[#34281F] border-[#B88A44] ring-1 ring-[#B88A44]/50 shadow-2xs font-semibold'
                  : 'border-[#E8DDCD] bg-[#FCF9F5] text-[#6E5D4F] hover:bg-[#F5ECDD]/60'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span
                  className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full text-[10px] sm:text-[11px] font-sans-ui flex items-center justify-center font-bold shadow-2xs ${
                    isActive ? 'bg-[#B88A44] text-white' : 'bg-[#E8DDCD] text-[#6E5D4F]'
                  }`}
                >
                  {step.stepNumber || `0${idx + 1}`}
                </span>

                {isActive && (
                  <span className="font-sans-ui text-[8px] sm:text-[9px] uppercase tracking-wider text-[#B88A44] font-bold">
                    Active
                  </span>
                )}
              </div>

              <span className="font-serif-editorial text-xs sm:text-base font-medium mt-1.5 sm:mt-3 truncate block">
                {stepCleanTitle}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Step Showcase Card — Compact on Mobile */}
      <div className="bg-[#FCF9F5] border border-[#E8DDCD] rounded-2xl sm:rounded-3xl overflow-hidden p-3.5 sm:p-6 md:p-8 shadow-sm max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.id || `step-active-${activeIndex}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-6 md:gap-8 items-center"
          >
            {/* Step Image */}
            <div className="lg:col-span-6 relative aspect-[16/10] sm:aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xs w-full border border-[#E8DDCD]">
              <ImageWithSkeleton
                src={activeStep.heroImage}
                alt={activeStep.title}
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white text-[11px] font-sans-ui">
                <span className="flex items-center gap-1 bg-black/60 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-white/20">
                  <Clock className="w-3 h-3 text-[#B88A44]" />
                  <span>{activeStep.timing || 'Curated Milestone'}</span>
                </span>
              </div>
            </div>

            {/* Step Details */}
            <div className="lg:col-span-6 space-y-2.5 sm:space-y-4">
              <div className="flex items-center gap-1.5 flex-wrap">
                <EditorialBadge variant="gold" className="text-[9px] sm:text-[10px] px-2 py-0.5">
                  Milestone {activeStep.stepNumber || `0${activeIndex + 1}`} of {steps.length.toString().padStart(2, '0')}
                </EditorialBadge>
                {cleanSubtitle && (
                  <span className="font-script-accent text-base sm:text-lg text-[#B88A44]">
                    {cleanSubtitle}
                  </span>
                )}
              </div>

              <h3 className="font-serif-editorial text-lg sm:text-2xl md:text-3xl text-[#34281F] font-normal leading-tight">
                {cleanTitle}
              </h3>

              <p className="font-sans-narrative text-[11px] sm:text-sm text-[#6E5D4F] leading-relaxed">
                {activeStep.description}
              </p>

              {/* Spatial Decor Highlights (Compact 2-col chips) */}
              {activeStep.highlights && activeStep.highlights.length > 0 && (
                <div className="pt-2 sm:pt-3 border-t border-[#E8DDCD] space-y-1.5 text-xs font-sans-narrative">
                  <span className="font-sans-ui text-[10px] sm:text-[11px] uppercase tracking-wider text-[#B88A44] font-semibold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Spatial Decor Highlights:</span>
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-1.5">
                    {activeStep.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5 bg-[#F5ECDD]/50 p-1.5 sm:p-2 rounded-lg border border-[#E8DDCD]/80 text-[#34281F]">
                        <Check className="w-3 h-3 text-[#59624C] shrink-0" strokeWidth={2.5} />
                        <span className="text-[10px] sm:text-xs font-medium leading-tight truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
