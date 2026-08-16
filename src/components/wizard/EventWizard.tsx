'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, RotateCcw } from 'lucide-react';
import {
  EventPlan,
  INITIAL_EVENT_PLAN,
  PLANNER_STORAGE_KEY,
} from '@/lib/data/plannerConfig';
import { WizardProgress } from './WizardProgress';
import { Step1EventTypeServices } from './Step1EventTypeServices';
import { Step2EventDetails } from './Step2EventDetails';
import { Step3Investment } from './Step3Investment';
import { Step4ReviewConnect } from './Step4ReviewConnect';
import { EditorialButton } from '../ui/EditorialButton';

interface EventWizardProps {
  className?: string;
  onComplete?: () => void;
}

export const EventWizard: React.FC<EventWizardProps> = ({ className = '' }) => {
  const [step, setStep] = useState<number>(1);
  const [plan, setPlan] = useState<EventPlan>(INITIAL_EVENT_PLAN);
  const [isHydrated, setIsHydrated] = useState<boolean>(false);

  // 1. Safe Hydration: Load saved draft from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(PLANNER_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && typeof parsed === 'object') {
          if (parsed.plan) setPlan((prev) => ({ ...prev, ...parsed.plan }));
          if (parsed.step && typeof parsed.step === 'number') setStep(parsed.step);
        }
      }
    } catch {
      // Ignore storage errors safely
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // 2. Auto-save draft changes
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem(
        PLANNER_STORAGE_KEY,
        JSON.stringify({ plan, step, updatedAt: Date.now() })
      );
    } catch {
      // Ignore quota errors
    }
  }, [plan, step, isHydrated]);

  const updatePlan = (updates: Partial<EventPlan>) => {
    setPlan((prev) => ({ ...prev, ...updates }));
  };

  const handleReset = () => {
    setPlan(INITIAL_EVENT_PLAN);
    setStep(1);
    try {
      localStorage.removeItem(PLANNER_STORAGE_KEY);
    } catch {}
  };

  // Validation Rules
  const isStep1Valid =
    Boolean(plan.eventType) &&
    (plan.eventType !== 'Other Celebration' || Boolean(plan.customEventType?.trim()));

  const isStep2Valid =
    (Boolean(plan.guestRange) || (plan.exactGuests !== null && plan.exactGuests > 0)) &&
    Boolean(plan.eventDate) &&
    Boolean(plan.location.trim());

  const isStep3Valid = Boolean(plan.budgetRange);

  const canContinue =
    step === 1 ? isStep1Valid : step === 2 ? isStep2Valid : step === 3 ? isStep3Valid : true;

  const handleNext = () => {
    if (!canContinue) return;
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleJumpToStep = (targetStep: number) => {
    if (targetStep >= 1 && targetStep <= 4) {
      setStep(targetStep);
    }
  };

  const getStepButtonLabel = () => {
    if (step === 1) return 'Continue to Scale & Date';
    if (step === 2) return 'Continue to Investment';
    if (step === 3) return 'Review Event Blueprint';
    return 'Confirm Consultation';
  };

  return (
    <div className={`w-full max-w-6xl xl:max-w-7xl mx-auto ${className}`}>
      {/* Editorial Card Canvas (Clean Ivory / Parchment, Restrained Beige Border) */}
      <div className="bg-[#FCF9F5] border border-[#E8DDCD] rounded-3xl p-5 sm:p-8 md:p-10 shadow-sm relative">
        {/* Header Ribbon & Reset Action */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E8DDCD]">
          <div>
            <span className="font-sans-ui text-[11px] uppercase tracking-widest text-[#B88A44] font-semibold block">
              Digital Consultation Assistant
            </span>
            <h1 className="font-serif-editorial text-2xl sm:text-3xl text-[#34281F]">
              Plan Your Celebration in 4 Steps
            </h1>
          </div>

          <button
            type="button"
            onClick={handleReset}
            title="Start Over"
            aria-label="Start over event planner"
            className="p-2.5 rounded-full bg-[#F5ECDD]/60 hover:bg-[#E8DDCD] text-[#6E5D4F] transition-colors focus-visible:ring-2 focus-visible:ring-[#B88A44] focus:outline-none cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Stepper Progress Bar */}
        <WizardProgress currentStep={step} onStepClick={handleJumpToStep} />

        {/* Step Transition Views */}
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <Step1EventTypeServices plan={plan} onUpdate={updatePlan} />
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <Step2EventDetails plan={plan} onUpdate={updatePlan} />
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <Step3Investment plan={plan} onUpdate={updatePlan} />
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <Step4ReviewConnect
                plan={plan}
                onUpdate={updatePlan}
                onJumpToStep={handleJumpToStep}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Action Buttons (Steps 1–3) */}
        {step < 4 && (
          <div className="pt-8 mt-8 border-t border-[#E8DDCD] flex items-center justify-between">
            {step > 1 ? (
              <EditorialButton variant="ghost" onClick={handleBack}>
                <ArrowLeft className="w-4 h-4 mr-1.5" />
                <span>Back</span>
              </EditorialButton>
            ) : (
              <div />
            )}

            <EditorialButton
              variant="primary"
              onClick={handleNext}
              disabled={!canContinue}
              className={!canContinue ? 'opacity-50 cursor-not-allowed' : ''}
            >
              <span>{getStepButtonLabel()}</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </EditorialButton>
          </div>
        )}
      </div>
    </div>
  );
};
