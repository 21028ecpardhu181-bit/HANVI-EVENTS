'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface WizardProgressProps {
  currentStep: number;
  totalSteps?: number;
  onStepClick?: (step: number) => void;
}

const STEPS = [
  { step: 1, title: 'Event & Services' },
  { step: 2, title: 'Details & Venue' },
  { step: 3, title: 'Investment' },
  { step: 4, title: 'Review & Connect' },
];

export const WizardProgress: React.FC<WizardProgressProps> = ({
  currentStep,
  totalSteps = 4,
  onStepClick,
}) => {
  const percentage = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="w-full mb-8 md:mb-12">
      {/* Mobile Stepper Header */}
      <div className="flex md:hidden items-center justify-between font-sans-ui text-xs text-[#6E5D4F] mb-3">
        <span className="font-medium text-[#34281F]">
          Step {currentStep} of {totalSteps}:{' '}
          <strong className="text-[#B88A44] font-semibold">{STEPS[currentStep - 1]?.title}</strong>
        </span>
        <span className="font-semibold text-[#B88A44]">{percentage}%</span>
      </div>

      {/* Mobile Progress Bar */}
      <div className="block md:hidden w-full h-1.5 bg-[#E8DDCD]/60 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#B88A44] to-[#D4A559] rounded-full"
          initial={false}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
        />
      </div>

      {/* Desktop Stepper Navigation */}
      <div className="hidden md:flex items-center justify-between relative">
        {/* Continuous Background Line */}
        <div className="absolute top-1/2 left-6 right-6 h-[1.5px] bg-[#E8DDCD] -translate-y-1/2 z-0" />
        
        {/* Active Line Fill */}
        <motion.div
          className="absolute top-1/2 left-6 h-[2.5px] bg-gradient-to-r from-[#B88A44] to-[#D4A559] -translate-y-1/2 z-0 origin-left"
          initial={false}
          animate={{
            width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%`,
          }}
          transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
          style={{ maxWidth: 'calc(100% - 48px)' }}
        />

        {STEPS.map((s) => {
          const isCompleted = currentStep > s.step;
          const isCurrent = currentStep === s.step;
          const isClickable = s.step < currentStep && onStepClick;

          return (
            <button
              key={s.step}
              type="button"
              onClick={() => isClickable && onStepClick(s.step)}
              disabled={!isClickable}
              className={`relative z-10 flex items-center gap-3 bg-[#FCF9F5] px-3 py-1 rounded-full transition-all text-left ${
                isClickable ? 'cursor-pointer hover:opacity-80' : 'cursor-default'
              }`}
            >
              {/* Step Circle Indicator */}
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-sans-ui font-semibold transition-all duration-300 ${
                  isCompleted
                    ? 'bg-[#59624C] text-[#FCF9F5] ring-2 ring-[#59624C]/20'
                    : isCurrent
                    ? 'bg-gradient-to-r from-[#B88A44] to-[#9E7432] text-white ring-4 ring-[#B88A44]/30 shadow-md'
                    : 'bg-[#F5ECDD] text-[#6E5D4F] border border-[#E8DDCD]'
                }`}
              >
                {isCompleted ? <Check className="w-4 h-4 text-[#FCF9F5]" strokeWidth={2.5} /> : s.step}
              </div>

              {/* Step Title Label */}
              <div className="flex flex-col">
                <span className="font-sans-ui text-[10px] uppercase tracking-wider text-[#6E5D4F]">
                  Step 0{s.step}
                </span>
                <span
                  className={`font-serif-editorial text-sm leading-none ${
                    isCurrent
                      ? 'text-[#B88A44] font-semibold'
                      : isCompleted
                      ? 'text-[#59624C] font-medium'
                      : 'text-[#6E5D4F]/70'
                  }`}
                >
                  {s.title}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
