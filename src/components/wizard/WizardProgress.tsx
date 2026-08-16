'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface WizardProgressProps {
  currentStep: number;
  totalSteps: number;
  stepLabel: string;
}

export function WizardProgress({ currentStep, totalSteps, stepLabel }: WizardProgressProps) {
  const progressPercent = Math.max(0, Math.min(100, ((currentStep - 1) / (totalSteps - 1)) * 100));

  return (
    <div className="w-full">
      {/* Animated gold progress line */}
      <div className="h-1 w-full bg-[#F5ECDD] relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#B88A44] to-[#d4af37]"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
        />
      </div>

      {/* Step Indicator */}
      <div className="py-2 px-4 sm:px-6 flex justify-between items-center text-[11px] sm:text-xs font-sans-ui text-[#6E5D4F]">
        <span className="font-medium">
          Step <strong className="text-[#34281F] font-bold">{currentStep}</strong> of {totalSteps} &middot; <span className="text-[#B88A44] font-semibold">{stepLabel}</span>
        </span>
        <span className="text-[10px] text-[#6E5D4F]/70 font-mono">
          {Math.round(progressPercent)}% completed
        </span>
      </div>
    </div>
  );
}
