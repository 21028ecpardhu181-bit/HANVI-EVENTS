'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Users,
  DollarSign,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Edit3,
  RotateCcw,
  MessageCircle,
  Clock,
  CheckSquare,
  Square,
} from 'lucide-react';
import {
  getWizardConfig,
  getSavedWizardProgress,
  saveWizardProgress,
  clearWizardProgress,
  WizardConfig,
} from '@/lib/data/wizardConfig';
import { EditorialButton } from '../ui/EditorialButton';
import { EditorialBadge } from '../ui/EditorialBadge';
import { crossfadeVariants } from '@/animations/variants';

interface EventWizardProps {
  onComplete?: () => void;
  className?: string;
}

export const EventWizard: React.FC<EventWizardProps> = ({ onComplete, className = '' }) => {
  const [config, setConfig] = useState<WizardConfig>(getWizardConfig());
  const [step, setStep] = useState<number>(1);

  // Multi-Select Form State for Step 1
  const [selectedCelebrations, setSelectedCelebrations] = useState<string[]>([]);
  const [customCelebration, setCustomCelebration] = useState<string>('');

  // Step 2, 3, 4 State
  const [guestCount, setGuestCount] = useState<string>('');
  const [budget, setBudget] = useState<string>('');
  const [eventDate, setEventDate] = useState<string>('');
  const [eventTime, setEventTime] = useState<string>('');
  const [venue, setVenue] = useState<string>('');

  // Initial load: Listen for admin config updates & restore draft progress
  useEffect(() => {
    const handleConfigUpdate = () => {
      setConfig(getWizardConfig());
    };
    window.addEventListener('wizardConfigUpdated', handleConfigUpdate);

    // Restore draft progress from localStorage if available
    const saved = getSavedWizardProgress();
    if (saved) {
      if (saved.step) setStep(saved.step);
      if (saved.celebrationTypesSelected && Array.isArray(saved.celebrationTypesSelected)) {
        setSelectedCelebrations(saved.celebrationTypesSelected);
      } else if (saved.celebrationType) {
        setSelectedCelebrations([saved.celebrationType]);
      }
      if (saved.customCelebrationType) setCustomCelebration(saved.customCelebrationType);
      if (saved.guestCount) setGuestCount(saved.guestCount);
      if (saved.budget) setBudget(saved.budget);
      if (saved.eventDate) setEventDate(saved.eventDate);
      if (saved.eventTime) setEventTime(saved.eventTime);
      if (saved.venue) setVenue(saved.venue);
    }

    return () => {
      window.removeEventListener('wizardConfigUpdated', handleConfigUpdate);
    };
  }, []);

  // Auto-save progress to localStorage on any state change
  useEffect(() => {
    saveWizardProgress({
      step,
      celebrationType: selectedCelebrations[0] || '',
      celebrationTypesSelected: selectedCelebrations,
      customCelebrationType: customCelebration,
      guestCount,
      budget,
      eventDate,
      eventTime,
      venue,
    });
  }, [step, selectedCelebrations, customCelebration, guestCount, budget, eventDate, eventTime, venue]);

  // Multi-select Toggle Handler
  const toggleCelebration = (type: string) => {
    setSelectedCelebrations((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  // Derived effective list of celebration titles
  const effectiveCelebrationsList = selectedCelebrations.map((item) =>
    item === 'Other' ? customCelebration.trim() || 'Custom Celebration' : item
  );

  const effectiveCelebrationsFormatted =
    effectiveCelebrationsList.length > 0
      ? effectiveCelebrationsList.join(', ')
      : 'None Selected';

  // Validation Checks for each step
  const isStep1Valid =
    selectedCelebrations.length > 0 &&
    (!selectedCelebrations.includes('Other') || customCelebration.trim().length > 0);
  const isStep2Valid = guestCount !== '';
  const isStep3Valid = budget !== '';
  const isStep4Valid = eventDate !== '';

  const handleNext = () => {
    if (step === 1 && !isStep1Valid) return;
    if (step === 2 && !isStep2Valid) return;
    if (step === 3 && !isStep3Valid) return;
    if (step === 4 && !isStep4Valid) return;
    setStep((prev) => Math.min(prev + 1, 5));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleReset = () => {
    setStep(1);
    setSelectedCelebrations([]);
    setCustomCelebration('');
    setGuestCount('');
    setBudget('');
    setEventDate('');
    setEventTime('');
    setVenue('');
    clearWizardProgress();
  };

  // Format Date for Summary
  const formatDateDisplay = (dateStr: string) => {
    if (!dateStr) return 'Not specified';
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
    } catch {
      return dateStr;
    }
  };

  // Generate WhatsApp Redirect Link
  const handleProceedWhatsApp = () => {
    const cleanPhone = config.whatsappNumber.replace(/[^0-9]/g, '');
    const dateFormatted = formatDateDisplay(eventDate);
    const timeFormatted = eventTime ? ` at ${eventTime}` : '';

    const celebrationsBulleted = effectiveCelebrationsList
      .map((item) => `• ${item}`)
      .join('\n');

    const message = `Hello Hanvi Events,

I would like to enquire about an event.

Here are my requirements.

Celebration Services Required:
${celebrationsBulleted}

Estimated Guests:
${guestCount}

Budget:
${budget}

Event Date:
${dateFormatted}${timeFormatted}

Venue:
${venue || 'To be decided'}

Please contact me regarding my event planning.

Thank you.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;

    // Clear saved progress on completion
    clearWizardProgress();
    if (onComplete) onComplete();

    // Open WhatsApp in new window
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`max-w-3xl mx-auto ${className}`}>
      <div className="bg-[#FCF9F5] border border-[#E8DDCD] rounded-3xl p-5 sm:p-8 md:p-10 shadow-xl backdrop-blur-md relative">
        
        {/* Top Header & Reset Action */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E8DDCD]">
          <div>
            <span className="font-sans-ui text-[11px] uppercase tracking-wider text-[#B88A44] font-semibold block">
              Event Planning Assistant
            </span>
            <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#34281F]">
              {step === 5 ? 'Review Your Event Details' : 'Plan Your Event in 4 Steps'}
            </h2>
          </div>

          <button
            onClick={handleReset}
            title="Start Over"
            aria-label="Start over wizard"
            className="p-2.5 rounded-full bg-[#F5ECDD]/60 hover:bg-[#E8DDCD] text-[#6E5D4F] transition-colors focus:outline-none focus:ring-2 focus:ring-[#B88A44]"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Progress Indicator (Steps 1–4) */}
        {step <= 4 && (
          <div className="mb-8 space-y-2">
            <div className="flex items-center justify-between font-sans-ui text-xs font-semibold text-[#B88A44]">
              <span>Step {step} of 4</span>
              <span>{Math.round((step / 4) * 100)}% Completed</span>
            </div>

            {/* Progress Bar */}
            <div
              className="w-full h-2 bg-[#E8DDCD]/60 rounded-full overflow-hidden"
              role="progressbar"
              aria-valuenow={step}
              aria-valuemin={1}
              aria-valuemax={4}
              aria-label={`Step ${step} of 4`}
            >
              <motion.div
                initial={false}
                animate={{ width: `${(step / 4) * 100}%` }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="h-full bg-[#B88A44] rounded-full"
              />
            </div>
          </div>
        )}

        {/* Step Content Switcher */}
        <AnimatePresence mode="wait">
          
          {/* STEP 1: Celebration Types (MULTI-SELECT) */}
          {step === 1 && (
            <motion.div
              key="wizard-step-1"
              variants={crossfadeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <h3 className="font-serif-editorial text-xl sm:text-2xl text-[#34281F] font-medium">
                    1. Select Celebration / Service Types
                  </h3>
                  <p className="font-sans-narrative text-xs text-[#6E5D4F] mt-1">
                    Select one or multiple services required for your event.
                  </p>
                </div>
                {selectedCelebrations.length > 0 && (
                  <EditorialBadge variant="gold">
                    {selectedCelebrations.length} Selected
                  </EditorialBadge>
                )}
              </div>

              {/* Multi-Select Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {config.celebrationTypes.map((type) => {
                  const isSelected = selectedCelebrations.includes(type);
                  return (
                    <button
                      key={type}
                      type="button"
                      onClick={() => toggleCelebration(type)}
                      aria-pressed={isSelected}
                      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between min-h-[95px] focus:outline-none focus:ring-2 focus:ring-[#B88A44] ${
                        isSelected
                          ? 'bg-[#34281F] text-[#FCF9F5] border-[#34281F] shadow-md ring-2 ring-[#B88A44]/50'
                          : 'bg-[#F5ECDD]/40 text-[#34281F] border-[#E8DDCD] hover:bg-[#F5ECDD] hover:border-[#B88A44]/60'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="font-script-accent text-sm text-[#B88A44]">
                          {isSelected ? '✓ Added' : 'Option'}
                        </span>
                        {isSelected ? (
                          <CheckSquare className="w-4 h-4 text-[#B88A44]" />
                        ) : (
                          <Square className="w-4 h-4 text-[#6E5D4F]/40" />
                        )}
                      </div>
                      <span className="font-serif-editorial text-base sm:text-lg font-medium leading-snug mt-2">
                        {type}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Custom Input when 'Other' is selected */}
              {selectedCelebrations.includes('Other') && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-[#F5ECDD]/60 border border-[#E8DDCD] rounded-2xl space-y-2"
                >
                  <label className="block font-sans-ui text-xs uppercase tracking-wider text-[#34281F] font-medium">
                    Specify Custom Celebration Name *
                  </label>
                  <input
                    type="text"
                    value={customCelebration}
                    onChange={(e) => setCustomCelebration(e.target.value)}
                    placeholder="e.g. Sangeet Soiree, Pearl Jubilee, Pool Party..."
                    className="w-full p-3 bg-[#FCF9F5] border border-[#E8DDCD] rounded-xl font-sans-narrative text-sm text-[#34281F] focus:outline-none focus:border-[#B88A44]"
                    autoFocus
                  />
                </motion.div>
              )}

              {/* Step 1 Actions */}
              <div className="pt-4 flex items-center justify-between border-t border-[#E8DDCD]">
                <span className="font-sans-narrative text-xs text-[#6E5D4F]">
                  {!isStep1Valid && '⚠️ Please select at least one celebration type.'}
                </span>

                <EditorialButton
                  variant="primary"
                  onClick={handleNext}
                  disabled={!isStep1Valid}
                  className={!isStep1Valid ? 'opacity-50 cursor-not-allowed' : ''}
                >
                  <span>Next: Guest Count</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </EditorialButton>
              </div>
            </motion.div>
          )}

          {/* STEP 2: Estimated Guest Count */}
          {step === 2 && (
            <motion.div
              key="wizard-step-2"
              variants={crossfadeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-6"
            >
              <div>
                <h3 className="font-serif-editorial text-xl sm:text-2xl text-[#34281F] font-medium">
                  2. Estimated Guest Count
                </h3>
                <p className="font-sans-narrative text-xs text-[#6E5D4F] mt-1">
                  How many guests are expected at your celebration?
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {config.guestCountOptions.map((option) => {
                  const isSelected = guestCount === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setGuestCount(option)}
                      aria-pressed={isSelected}
                      className={`p-5 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#B88A44] ${
                        isSelected
                          ? 'bg-[#34281F] text-[#FCF9F5] border-[#34281F] shadow-md ring-2 ring-[#B88A44]/50'
                          : 'bg-[#F5ECDD]/40 text-[#34281F] border-[#E8DDCD] hover:bg-[#F5ECDD] hover:border-[#B88A44]/60'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Users className={`w-5 h-5 ${isSelected ? 'text-[#B88A44]' : 'text-[#6E5D4F]'}`} />
                        <div>
                          <span className="font-serif-editorial text-lg font-medium block">
                            {option} Guests
                          </span>
                          <span className="font-sans-narrative text-xs opacity-75 block">
                            {option === '0-50'
                              ? 'Intimate Family Gathering'
                              : option === '50-100'
                              ? 'Cozy Celebration'
                              : option === '100-200'
                              ? 'Medium Banquet'
                              : option === '200-500'
                              ? 'Grand Event'
                              : 'Imperial Celebration'}
                          </span>
                        </div>
                      </div>
                      {isSelected && <CheckCircle2 className="w-5 h-5 text-[#B88A44]" />}
                    </button>
                  );
                })}
              </div>

              {/* Step 2 Actions */}
              <div className="pt-4 flex items-center justify-between border-t border-[#E8DDCD]">
                <EditorialButton variant="ghost" onClick={handleBack}>
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  <span>Back</span>
                </EditorialButton>

                <EditorialButton
                  variant="primary"
                  onClick={handleNext}
                  disabled={!isStep2Valid}
                  className={!isStep2Valid ? 'opacity-50 cursor-not-allowed' : ''}
                >
                  <span>Next: Budget Range</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </EditorialButton>
              </div>
            </motion.div>
          )}

          {/* STEP 3: Budget Range */}
          {step === 3 && (
            <motion.div
              key="wizard-step-3"
              variants={crossfadeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-6"
            >
              <div>
                <h3 className="font-serif-editorial text-xl sm:text-2xl text-[#34281F] font-medium">
                  3. Comfortable Budget Range
                </h3>
                <p className="font-sans-narrative text-xs text-[#6E5D4F] mt-1">
                  Select your targeted decor & planning budget range.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {config.budgetOptions.map((option) => {
                  const isSelected = budget === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setBudget(option)}
                      aria-pressed={isSelected}
                      className={`p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between min-h-[100px] focus:outline-none focus:ring-2 focus:ring-[#B88A44] ${
                        isSelected
                          ? 'bg-[#34281F] text-[#FCF9F5] border-[#34281F] shadow-md ring-2 ring-[#B88A44]/50'
                          : 'bg-[#F5ECDD]/40 text-[#34281F] border-[#E8DDCD] hover:bg-[#F5ECDD] hover:border-[#B88A44]/60'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <DollarSign className={`w-4 h-4 ${isSelected ? 'text-[#B88A44]' : 'text-[#6E5D4F]'}`} />
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-[#B88A44]" />}
                      </div>

                      <div className="mt-2">
                        <span className="font-serif-editorial text-lg sm:text-xl font-medium block">
                          {option}
                        </span>
                        <span className="font-sans-narrative text-[11px] opacity-75 block mt-0.5">
                          {option.includes('15,000')
                            ? 'Intimate & Boutique Setup'
                            : option.includes('50,000')
                            ? 'Standard Celebration Package'
                            : option.includes('1 Lakh')
                            ? 'Premium Luxury Decor'
                            : option.includes('3 Lakhs')
                            ? 'Royal Mandap & Stage Suite'
                            : 'Imperial Palace Scale'}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Step 3 Actions */}
              <div className="pt-4 flex items-center justify-between border-t border-[#E8DDCD]">
                <EditorialButton variant="ghost" onClick={handleBack}>
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  <span>Back</span>
                </EditorialButton>

                <EditorialButton
                  variant="primary"
                  onClick={handleNext}
                  disabled={!isStep3Valid}
                  className={!isStep3Valid ? 'opacity-50 cursor-not-allowed' : ''}
                >
                  <span>Next: Event Date</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </EditorialButton>
              </div>
            </motion.div>
          )}

          {/* STEP 4: Event Date & Location */}
          {step === 4 && (
            <motion.div
              key="wizard-step-4"
              variants={crossfadeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-6"
            >
              <div>
                <h3 className="font-serif-editorial text-xl sm:text-2xl text-[#34281F] font-medium">
                  4. Event Date & Venue Details
                </h3>
                <p className="font-sans-narrative text-xs text-[#6E5D4F] mt-1">
                  Specify your event date, preferred time, and venue location.
                </p>
              </div>

              <div className="space-y-4">
                {/* Event Date (Required) */}
                <div className="space-y-1.5">
                  <label className="font-sans-ui text-xs uppercase tracking-wider text-[#34281F] font-semibold flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#B88A44]" />
                    <span>Target Event Date *</span>
                  </label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full p-3.5 bg-[#F5ECDD]/40 border border-[#E8DDCD] rounded-2xl font-sans-narrative text-sm text-[#34281F] focus:outline-none focus:border-[#B88A44] cursor-pointer"
                  />
                </div>

                {/* Event Time & Venue (Optional) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-sans-ui text-xs uppercase tracking-wider text-[#34281F] font-semibold flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#B88A44]" />
                      <span>Preferred Time (Optional)</span>
                    </label>
                    <input
                      type="time"
                      value={eventTime}
                      onChange={(e) => setEventTime(e.target.value)}
                      className="w-full p-3.5 bg-[#F5ECDD]/40 border border-[#E8DDCD] rounded-2xl font-sans-narrative text-sm text-[#34281F] focus:outline-none focus:border-[#B88A44] cursor-pointer"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-sans-ui text-xs uppercase tracking-wider text-[#34281F] font-semibold flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#B88A44]" />
                      <span>Venue / City (Optional)</span>
                    </label>
                    <input
                      type="text"
                      value={venue}
                      onChange={(e) => setVenue(e.target.value)}
                      placeholder="e.g. Rajahmundry, Kakinada Beach Resort..."
                      className="w-full p-3.5 bg-[#F5ECDD]/40 border border-[#E8DDCD] rounded-2xl font-sans-narrative text-sm text-[#34281F] focus:outline-none focus:border-[#B88A44]"
                    />
                  </div>
                </div>
              </div>

              {/* Step 4 Actions */}
              <div className="pt-4 flex items-center justify-between border-t border-[#E8DDCD]">
                <EditorialButton variant="ghost" onClick={handleBack}>
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  <span>Back</span>
                </EditorialButton>

                <EditorialButton
                  variant="primary"
                  onClick={handleNext}
                  disabled={!isStep4Valid}
                  className={!isStep4Valid ? 'opacity-50 cursor-not-allowed' : ''}
                >
                  <span>Review Event Summary</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </EditorialButton>
              </div>
            </motion.div>
          )}

          {/* STEP 5: REVIEW PAGE SUMMARY CARD */}
          {step === 5 && (
            <motion.div
              key="wizard-step-5"
              variants={crossfadeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-6"
            >
              <div className="text-center space-y-2">
                <EditorialBadge variant="gold">Verification & Summary</EditorialBadge>
                <h3 className="font-serif-editorial text-2xl sm:text-4xl text-[#34281F] font-normal">
                  Your Event Details
                </h3>
                <p className="font-sans-narrative text-xs sm:text-sm text-[#6E5D4F] max-w-md mx-auto">
                  Please review your requirements before submitting to Hanvi Events.
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-[#F5ECDD]/50 border border-[#E8DDCD] rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E8DDCD]">
                  
                  {/* Left Column Summary */}
                  <div className="space-y-3 pr-0 sm:pr-4">
                    <div>
                      <span className="font-sans-ui text-[11px] uppercase tracking-wider text-[#6E5D4F] font-semibold block mb-1">
                        Celebrations & Services
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {effectiveCelebrationsList.map((item, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-0.5 rounded-md bg-[#34281F] text-[#FCF9F5] font-serif-editorial text-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="font-sans-ui text-[11px] uppercase tracking-wider text-[#6E5D4F] font-semibold block">
                        Estimated Guests
                      </span>
                      <span className="font-sans-narrative text-sm text-[#34281F] font-medium block">
                        {guestCount} Guests
                      </span>
                    </div>

                    <div>
                      <span className="font-sans-ui text-[11px] uppercase tracking-wider text-[#6E5D4F] font-semibold block">
                        Target Budget
                      </span>
                      <span className="font-serif-editorial text-lg text-[#B88A44] font-semibold block">
                        {budget}
                      </span>
                    </div>
                  </div>

                  {/* Right Column Summary */}
                  <div className="space-y-3 pt-3 sm:pt-0 pl-0 sm:pl-4">
                    <div>
                      <span className="font-sans-ui text-[11px] uppercase tracking-wider text-[#6E5D4F] font-semibold block">
                        Event Date
                      </span>
                      <span className="font-sans-narrative text-sm text-[#34281F] font-medium block">
                        {formatDateDisplay(eventDate)}
                        {eventTime && <span className="text-xs text-[#6E5D4F]"> ({eventTime})</span>}
                      </span>
                    </div>

                    <div>
                      <span className="font-sans-ui text-[11px] uppercase tracking-wider text-[#6E5D4F] font-semibold block">
                        Target Venue / Location
                      </span>
                      <span className="font-sans-narrative text-sm text-[#34281F] font-medium block">
                        {venue || 'To be decided / Flexible'}
                      </span>
                    </div>

                    <div>
                      <span className="font-sans-ui text-[11px] uppercase tracking-wider text-[#6E5D4F] font-semibold block">
                        Execution Lead
                      </span>
                      <span className="font-sans-narrative text-xs text-[#59624C] font-semibold block">
                        Managed by Ch. Kala Prasad
                      </span>
                    </div>
                  </div>

                </div>

                {/* Edit Jump Buttons */}
                <div className="pt-4 border-t border-[#E8DDCD] flex flex-wrap gap-2 justify-center">
                  <button
                    onClick={() => setStep(1)}
                    className="px-3 py-1.5 rounded-full bg-[#FCF9F5] border border-[#E8DDCD] font-sans-ui text-[11px] text-[#6E5D4F] hover:text-[#B88A44] flex items-center gap-1"
                  >
                    <Edit3 className="w-3 h-3" /> Edit Services
                  </button>
                  <button
                    onClick={() => setStep(2)}
                    className="px-3 py-1.5 rounded-full bg-[#FCF9F5] border border-[#E8DDCD] font-sans-ui text-[11px] text-[#6E5D4F] hover:text-[#B88A44] flex items-center gap-1"
                  >
                    <Edit3 className="w-3 h-3" /> Edit Guests
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="px-3 py-1.5 rounded-full bg-[#FCF9F5] border border-[#E8DDCD] font-sans-ui text-[11px] text-[#6E5D4F] hover:text-[#B88A44] flex items-center gap-1"
                  >
                    <Edit3 className="w-3 h-3" /> Edit Budget
                  </button>
                  <button
                    onClick={() => setStep(4)}
                    className="px-3 py-1.5 rounded-full bg-[#FCF9F5] border border-[#E8DDCD] font-sans-ui text-[11px] text-[#6E5D4F] hover:text-[#B88A44] flex items-center gap-1"
                  >
                    <Edit3 className="w-3 h-3" /> Edit Date & Venue
                  </button>
                </div>
              </div>

              {/* Action Buttons: Back vs Proceed WhatsApp */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                <EditorialButton variant="ghost" onClick={() => setStep(4)}>
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  <span>Back to Date</span>
                </EditorialButton>

                <button
                  type="button"
                  onClick={handleProceedWhatsApp}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#1DA851] text-white font-sans-ui text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#25D366]"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Proceed via WhatsApp</span>
                </button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
};
