'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { INITIAL_EVENT_PLAN, EventPlan, PLANNER_STORAGE_KEY } from '@/lib/data/plannerConfig';

// Steps
import { CelebrationStep } from './steps/CelebrationStep';
import { ServicesStep } from './steps/ServicesStep';
import { GuestScaleStep } from './steps/GuestScaleStep';
import { DateVenueStep } from './steps/DateVenueStep';
import { InvestmentStep } from './steps/InvestmentStep';
import { ReviewStep } from './steps/ReviewStep';

import { WizardProgress } from './WizardProgress';
import { EditorialButton } from '@/components/ui/EditorialButton';
import { ArrowRight, ArrowLeft, RefreshCw, Sparkles } from 'lucide-react';

const TOTAL_STEPS = 6;

const STEP_LABELS = [
  'Celebration Type',
  'Curate Services',
  'Scale of Celebration',
  'Date & Venue',
  'Investment Range',
  'Blueprint & Connect',
];

export function EventWizard() {
  const [isMounted, setIsMounted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [plan, setPlan] = useState<EventPlan>(INITIAL_EVENT_PLAN);

  // Load draft from localStorage on mount
  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem(PLANNER_STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') {
          // Support both format with { plan } or raw plan
          const loadedPlan = parsed.plan || parsed;
          if (loadedPlan && typeof loadedPlan === 'object') {
            setPlan((prev) => ({ ...prev, ...loadedPlan }));
          }
        }
      } catch (e) {
        console.error('Failed to parse saved plan', e);
      }
    }
  }, []);

  // Auto-save to localStorage
  useEffect(() => {
    if (isMounted) {
      try {
        localStorage.setItem(PLANNER_STORAGE_KEY, JSON.stringify(plan));
      } catch (e) {
        console.error('Failed to save plan draft', e);
      }
    }
  }, [plan, isMounted]);

  const updatePlan = (updates: Partial<EventPlan>) => {
    setPlan((prev) => ({ ...prev, ...updates }));
  };

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setDirection(1);
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setDirection(-1);
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    if (window.confirm('Reset your celebration plan and start fresh?')) {
      setPlan(INITIAL_EVENT_PLAN);
      setCurrentStep(1);
      setDirection(-1);
      try {
        localStorage.removeItem(PLANNER_STORAGE_KEY);
      } catch {}
    }
  };

  if (!isMounted) {
    return (
      <div className="w-full min-h-[400px] flex items-center justify-center bg-[#FCF9F5] rounded-2xl border border-[#E8DDCD]">
        <div className="text-xs font-sans-ui text-[#6E5D4F] flex items-center gap-2">
          <Sparkles size={14} className="text-[#B88A44] animate-spin" />
          <span>Loading consultation suite...</span>
        </div>
      </div>
    );
  }

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 40 : -40,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 40 : -40,
      opacity: 0,
    }),
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-sm border border-[#E8DDCD] flex flex-col">
      {/* Header & Progress Bar */}
      <div className="bg-white border-b border-[#E8DDCD]">
        <div className="flex justify-between items-center px-4 py-2.5 sm:px-6">
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-[#B88A44]" />
            <h1 className="font-serif-editorial text-[#34281F] text-lg sm:text-xl font-bold tracking-tight">
              Design Your Celebration
            </h1>
          </div>
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-1 text-xs font-sans-ui text-[#6E5D4F] hover:text-[#B88A44] transition-colors cursor-pointer py-1 px-2 rounded-md hover:bg-[#F5ECDD]/50"
            title="Start Over"
          >
            <RefreshCw size={12} />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>

        <WizardProgress
          currentStep={currentStep}
          totalSteps={TOTAL_STEPS}
          stepLabel={STEP_LABELS[currentStep - 1]}
        />
      </div>

      {/* Main Content Step Area */}
      <div className="flex-grow bg-[#FCF9F5] p-2 sm:p-4 min-h-[380px] flex flex-col justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentStep}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="w-full"
          >
            {currentStep === 1 && (
              <CelebrationStep
                selectedEventType={plan.eventType}
                customEventType={plan.customEventType || ''}
                onChange={(type, custom) =>
                  updatePlan({ eventType: type, customEventType: custom })
                }
              />
            )}

            {currentStep === 2 && (
              <ServicesStep
                selectedEventType={plan.eventType}
                selectedServices={plan.services}
                onChange={(services) => updatePlan({ services })}
              />
            )}

            {currentStep === 3 && (
              <GuestScaleStep
                guestRange={plan.guestRange}
                exactGuests={plan.exactGuests}
                onChange={(range, exact) =>
                  updatePlan({ guestRange: range, exactGuests: exact })
                }
              />
            )}

            {currentStep === 4 && (
              <DateVenueStep
                eventDate={plan.eventDate}
                location={plan.location}
                venueStatus={plan.venueStatus}
                onChange={updatePlan}
              />
            )}

            {currentStep === 5 && (
              <InvestmentStep
                budgetRange={plan.budgetRange}
                onChange={(range) => updatePlan({ budgetRange: range })}
              />
            )}

            {currentStep === 6 && (
              <ReviewStep plan={plan} onChange={updatePlan} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Navigation Footer */}
      <div className="bg-white border-t border-[#E8DDCD] px-4 py-3 sm:px-6 flex justify-between items-center">
        <button
          type="button"
          onClick={handleBack}
          disabled={currentStep === 1}
          className={`flex items-center gap-1.5 font-sans-ui text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer py-2 px-3 rounded-lg ${
            currentStep === 1
              ? 'opacity-0 pointer-events-none'
              : 'text-[#6E5D4F] hover:text-[#34281F] hover:bg-[#F5ECDD]/40'
          }`}
        >
          <ArrowLeft size={14} /> Back
        </button>

        {currentStep < TOTAL_STEPS && (
          <EditorialButton
            onClick={handleNext}
            variant="primary"
            size="sm"
            className="text-xs px-5 py-2.5"
            icon={<ArrowRight size={14} />}
          >
            Continue
          </EditorialButton>
        )}
      </div>
    </div>
  );
}
