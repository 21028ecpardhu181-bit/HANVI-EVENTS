'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingJourneysByReligion } from '@/lib/data/stories';
import { SectionHeader } from '../ui/SectionHeader';
import { ImageWithSkeleton } from '../ui/ImageWithSkeleton';
import { EditorialButton } from '../ui/EditorialButton';
import { EditorialBadge } from '../ui/EditorialBadge';

export const WeddingJourneySection: React.FC = () => {
  const [activeReligionId, setActiveReligionId] = useState<'hindu' | 'christian' | 'muslim'>('hindu');
  const activeJourney = weddingJourneysByReligion.find((j) => j.religionId === activeReligionId) || weddingJourneysByReligion[0];
  
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Reset active step index when switching religion
  const handleReligionSwitch = (id: 'hindu' | 'christian' | 'muslim') => {
    setActiveReligionId(id);
    setActiveStepIndex(0);
  };

  const activeStep = activeJourney.steps[activeStepIndex] || activeJourney.steps[0];

  // Auto-advance to next step every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % activeJourney.steps.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, activeJourney.steps.length]);

  const handleStepClick = (index: number) => {
    setActiveStepIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-8 md:py-20 bg-[#FCF9F5]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        <SectionHeader
          scriptEyebrow="Not sure what happens in a wedding?"
          title="Hanvi's Signature Wedding Journey"
          description="Select your wedding tradition to view sacred ritual sequences, spatial decor ideas, and milestone timings tailored to your culture."
          align="center"
        />

        {/* Religion Selection Tabs */}
        <div className="flex justify-center gap-2 sm:gap-3 max-w-2xl mx-auto mb-6">
          {weddingJourneysByReligion.map((j) => {
            const isActive = activeReligionId === j.religionId;
            return (
              <button
                key={j.religionId}
                onClick={() => handleReligionSwitch(j.religionId)}
                className={`flex-1 px-3 sm:px-5 py-2 sm:py-3 rounded-full font-sans-ui text-[11px] sm:text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer text-center ${
                  isActive
                    ? 'bg-[#34281F] text-[#FCF9F5] shadow-md font-semibold ring-2 ring-[#B88A44]'
                    : 'bg-[#F5ECDD]/60 text-[#6E5D4F] border border-[#E8DDCD] hover:bg-[#F5ECDD]'
                }`}
              >
                <span>{j.religionName.split(' ')[0]} Path</span>
              </button>
            );
          })}
        </div>

        {/* 2x3 Bento Step Grid on Mobile — Zero Side Scroll! */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 md:gap-3 mt-4 max-w-5xl mx-auto w-full">
          {activeJourney.steps.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.id}
                onClick={() => handleStepClick(idx)}
                className={`relative p-2 sm:p-4 rounded-2xl border text-center transition-all duration-500 cursor-pointer flex flex-col items-center justify-between min-h-[75px] sm:min-h-[90px] overflow-hidden ${
                  isActive
                    ? 'border-[#B88A44] bg-[#F5ECDD] text-[#34281F] shadow-sm font-semibold'
                    : 'border-[#E8DDCD] bg-[#FCF9F5] text-[#6E5D4F] hover:bg-[#F5ECDD]/40'
                }`}
              >
                <span
                  className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full text-[9px] sm:text-[10px] font-sans-ui flex items-center justify-center font-bold transition-colors duration-300 ${
                    isActive ? 'bg-[#B88A44] text-[#FCF9F5]' : 'bg-[#E8DDCD]/60 text-[#6E5D4F]'
                  }`}
                >
                  {step.stepNumber}
                </span>

                <span className="font-serif-editorial text-[11px] sm:text-sm font-medium mt-1 leading-tight line-clamp-1">
                  {step.title}
                </span>

                <span className="font-sans-narrative text-[9px] sm:text-[10px] text-[#6E5D4F] line-clamp-1">
                  {step.teluguName}
                </span>

                {/* Progress Bar */}
                {isActive && isAutoPlaying && (
                  <motion.div
                    key={`progress-${activeStepIndex}`}
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 5, ease: 'linear' }}
                    className="absolute bottom-0 left-0 h-1 bg-[#B88A44]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Step Showcase Card */}
        <div className="mt-4 md:mt-8 max-w-5xl mx-auto bg-[#F5ECDD]/40 border border-[#E8DDCD] rounded-3xl overflow-hidden p-4 sm:p-8 md:p-10 shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-8 items-center"
            >
              <div className="lg:col-span-6 relative aspect-[16/9] sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-md w-full">
                <ImageWithSkeleton
                  src={activeStep.heroImage}
                  alt={activeStep.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="lg:col-span-6 space-y-3.5">
                <div>
                  <EditorialBadge variant="gold" className="text-[10px] px-2 py-0.5">
                    Step {activeStep.stepNumber} of 06 • {activeStep.timing}
                  </EditorialBadge>
                </div>

                <h3 className="font-serif-editorial text-xl sm:text-3xl md:text-4xl text-[#34281F]">
                  {activeStep.title} ({activeStep.teluguName})
                </h3>

                <p className="font-sans-narrative text-xs md:text-sm text-[#6E5D4F] leading-relaxed">
                  {activeStep.description}
                </p>

                <div className="pt-2">
                  <Link href={`/wedding-experiences/${activeJourney.experienceSlug}#rituals`} className="block w-full sm:w-auto">
                    <EditorialButton variant="primary" size="sm" className="w-full sm:w-auto text-xs py-2.5">
                      Explore Dedicated {activeJourney.religionName.split(' ')[0]} Page →
                    </EditorialButton>
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
