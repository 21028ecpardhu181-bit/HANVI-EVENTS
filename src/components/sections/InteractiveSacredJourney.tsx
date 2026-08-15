'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Clock, Check, ChevronRight } from 'lucide-react';
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

  if (!steps || steps.length === 0) return null;

  const activeStep = steps[activeIndex] || steps[0];

  // Clean title & subtitle without repetitive parenthesized duplicates
  const cleanTitle = activeStep.title.replace(/\s*\([^)]*\)/g, '').trim();
  const cleanSubtitle = activeStep.teluguName
    ? activeStep.teluguName.replace(cleanTitle, '').replace(/[()]/g, '').trim()
    : '';

  return (
    <div className="w-full">
      {/* Step Buttons Selector Tabs */}
      <div className="flex overflow-x-auto no-scrollbar gap-2.5 pb-4 mb-6 md:mb-10 max-w-5xl mx-auto">
        {steps.map((step, idx) => {
          const isActive = activeIndex === idx;
          const stepCleanTitle = step.title.replace(/\s*\([^)]*\)/g, '').trim();

          return (
            <button
              key={step.id || `step-${idx}`}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`flex-1 min-w-[140px] sm:min-w-[160px] p-3.5 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-[#B88A44] focus:outline-none ${
                isActive
                  ? 'bg-gradient-to-br from-[#FFF9F0] via-[#FDF3E3] to-[#F5E6CC] text-[#34281F] border-[#B88A44] ring-2 ring-[#B88A44]/50 shadow-md font-semibold'
                  : 'border-[#E8DDCD] bg-[#FCF9F5] text-[#6E5D4F] hover:bg-[#F5ECDD]/60 hover:border-[#B88A44]/40'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span
                  className={`w-6 h-6 rounded-full text-[11px] font-sans-ui flex items-center justify-center font-bold transition-colors shadow-2xs ${
                    isActive ? 'bg-[#B88A44] text-white' : 'bg-[#E8DDCD] text-[#6E5D4F]'
                  }`}
                >
                  {step.stepNumber || `0${idx + 1}`}
                </span>

                {isActive && (
                  <span className="font-sans-ui text-[9px] uppercase tracking-wider text-[#B88A44] font-bold">
                    Active
                  </span>
                )}
              </div>

              <span className="font-serif-editorial text-sm sm:text-base font-medium mt-3 line-clamp-1">
                {stepCleanTitle}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Step Showcase Card */}
      <div className="bg-[#FCF9F5] border border-[#E8DDCD] rounded-3xl overflow-hidden p-5 sm:p-8 md:p-10 shadow-lg max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.id || `step-active-${activeIndex}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 items-center"
          >
            {/* Step Image */}
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md w-full border border-[#E8DDCD] group">
              <ImageWithSkeleton
                src={activeStep.heroImage}
                alt={activeStep.title}
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-sans-ui">
                <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  <Clock className="w-3.5 h-3.5 text-[#B88A44]" />
                  <span>{activeStep.timing || 'Curated Milestone'}</span>
                </span>
              </div>
            </div>

            {/* Step Details */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2">
                <EditorialBadge variant="gold" className="text-[10px] px-2.5 py-0.5">
                  Milestone {activeStep.stepNumber || `0${activeIndex + 1}`} of {steps.length.toString().padStart(2, '0')}
                </EditorialBadge>
                {cleanSubtitle && (
                  <span className="font-script-accent text-lg text-[#B88A44]">
                    {cleanSubtitle}
                  </span>
                )}
              </div>

              <h3 className="font-serif-editorial text-2xl sm:text-3xl md:text-4xl text-[#34281F] font-normal leading-tight">
                {cleanTitle}
              </h3>

              <p className="font-sans-narrative text-xs sm:text-sm md:text-base text-[#6E5D4F] leading-relaxed">
                {activeStep.description}
              </p>

              {/* Spatial Decor Highlights */}
              {activeStep.highlights && activeStep.highlights.length > 0 && (
                <div className="pt-4 border-t border-[#E8DDCD] space-y-2 text-xs font-sans-narrative">
                  <span className="font-sans-ui text-[11px] uppercase tracking-wider text-[#B88A44] font-semibold block flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Spatial Decor & Execution Highlights:</span>
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeStep.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 bg-[#F5ECDD]/50 p-2.5 rounded-xl border border-[#E8DDCD]/80 text-[#34281F]">
                        <Check className="w-3.5 h-3.5 text-[#59624C] shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="text-[11px] sm:text-xs font-medium leading-snug">{h}</span>
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
