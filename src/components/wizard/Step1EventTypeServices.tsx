'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  Cake,
  Gem,
  Sparkles,
  Building,
  Home,
  PartyPopper,
  Plus,
  Check,
  Camera,
  Utensils,
  Palette,
  Music,
  Tent,
  Gift,
  Film,
  RotateCcw,
  Sparkle,
  ChevronDown,
  ChevronUp,
  SlidersHorizontal,
} from 'lucide-react';
import {
  EventPlan,
  EVENT_TYPES,
  SERVICE_CATEGORIES,
  EVENT_RECOMMENDATIONS,
} from '@/lib/data/plannerConfig';

interface Step1Props {
  plan: EventPlan;
  onUpdate: (updates: Partial<EventPlan>) => void;
}

export const Step1EventTypeServices: React.FC<Step1Props> = ({ plan, onUpdate }) => {
  const [showCustomizer, setShowCustomizer] = useState<boolean>(false);
  const activeEventKey = plan.eventType.toLowerCase().replace(/[^a-z0-9]/g, '-');
  const recommendedList = EVENT_RECOMMENDATIONS[activeEventKey] || [];

  const handleSelectEventType = (typeTitle: string) => {
    const nextKey = typeTitle.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const autoRec = EVENT_RECOMMENDATIONS[nextKey] || [];
    
    // Auto-select recommended services for this event type if services are empty or user hasn't heavily customized
    const nextServices = plan.services.length === 0 
      ? autoRec 
      : Array.from(new Set([...plan.services, ...autoRec]));

    onUpdate({ 
      eventType: typeTitle,
      services: nextServices,
    });
  };

  const handleToggleService = (serviceTitle: string) => {
    const exists = plan.services.includes(serviceTitle);
    const updated = exists
      ? plan.services.filter((s) => s !== serviceTitle)
      : [...plan.services, serviceTitle];
    onUpdate({ services: updated });
  };

  const handleSelectAllRecommended = () => {
    const merged = Array.from(new Set([...plan.services, ...recommendedList]));
    onUpdate({ services: merged });
  };

  const handleClearAllServices = () => {
    onUpdate({ services: [] });
  };

  const renderEventIcon = (name: string, isSelected: boolean) => {
    const iconClass = `w-4 h-4 transition-colors ${isSelected ? 'text-white' : 'text-[#6E5D4F]'}`;
    switch (name) {
      case 'heart': return <Heart className={iconClass} />;
      case 'cake': return <Cake className={iconClass} />;
      case 'gem': return <Gem className={iconClass} />;
      case 'sparkles': return <Sparkles className={iconClass} />;
      case 'party': return <PartyPopper className={iconClass} />;
      case 'home': return <Home className={iconClass} />;
      case 'building': return <Building className={iconClass} />;
      case 'plus': return <Plus className={iconClass} />;
      default: return <Sparkles className={iconClass} />;
    }
  };

  const renderServiceIcon = (name: string, isSelected: boolean) => {
    const iconClass = `w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-[#B88A44]' : 'text-[#6E5D4F]/80'}`;
    switch (name) {
      case 'sparkles': return <Sparkles className={iconClass} />;
      case 'music': return <Music className={iconClass} />;
      case 'camera': return <Camera className={iconClass} />;
      case 'utensils': return <Utensils className={iconClass} />;
      case 'palette': return <Palette className={iconClass} />;
      case 'gift': return <Gift className={iconClass} />;
      case 'film': return <Film className={iconClass} />;
      case 'tent': return <Tent className={iconClass} />;
      default: return <Sparkles className={iconClass} />;
    }
  };

  return (
    <div className="space-y-6 md:space-y-8">
      {/* ── SECTION 1: Event Type Selection (App-Like 2x4 Grid) ── */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-sans-ui text-[11px] uppercase tracking-widest text-[#B88A44] font-semibold block">
              Step 1 of 4
            </span>
            <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#34281F] font-normal mt-0.5">
              Select Celebration Type
            </h2>
          </div>
          <span className="hidden sm:inline font-sans-narrative text-xs text-[#6E5D4F]">
            1 Tap to select
          </span>
        </div>

        {/* Compact, Touch-Friendly 2-Column Mobile Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
          {EVENT_TYPES.map((type) => {
            const isSelected = plan.eventType === type.title;

            return (
              <button
                key={type.id}
                type="button"
                onClick={() => handleSelectEventType(type.title)}
                className={`p-2.5 sm:p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[76px] sm:min-h-[92px] focus-visible:ring-2 focus-visible:ring-[#B88A44] focus:outline-none ${
                  isSelected
                    ? 'bg-gradient-to-br from-[#FFF9F0] via-[#FDF3E3] to-[#F5E6CC] text-[#34281F] border-[#B88A44] ring-2 ring-[#B88A44]/60 shadow-[0_4px_16px_rgba(184,138,68,0.2)]'
                    : 'bg-[#F5ECDD]/40 text-[#34281F] border-[#E8DDCD] hover:bg-[#F5ECDD] hover:border-[#B88A44]/60'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <div className={`p-1.5 rounded-lg transition-colors ${isSelected ? 'bg-[#B88A44] text-white shadow-xs' : 'bg-white/70'}`}>
                    {renderEventIcon(type.iconName, isSelected)}
                  </div>
                  {isSelected && (
                    <span className="font-sans-ui text-[9px] font-bold text-white bg-[#B88A44] px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                      ✓
                    </span>
                  )}
                </div>

                <div className="mt-1 sm:mt-2">
                  <span className="font-serif-editorial text-sm sm:text-base font-semibold leading-tight block text-[#34281F]">
                    {type.title}
                  </span>
                  <span className="font-sans-narrative text-[10px] sm:text-[11px] text-[#6E5D4F] line-clamp-1 block">
                    {type.description}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Custom Event Input if Other */}
        {plan.eventType === 'Other Celebration' && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3.5 bg-[#F5ECDD]/50 border border-[#E8DDCD] rounded-2xl space-y-1"
          >
            <label className="block font-sans-ui text-[11px] uppercase tracking-wider text-[#34281F] font-semibold">
              Name Your Celebration *
            </label>
            <input
              type="text"
              value={plan.customEventType || ''}
              onChange={(e) => onUpdate({ customEventType: e.target.value })}
              placeholder="e.g. Silver Jubilee, Housewarming Gala..."
              className="w-full p-2.5 bg-[#FCF9F5] border border-[#E8DDCD] rounded-xl font-sans-narrative text-sm text-[#34281F] focus:outline-none focus:border-[#B88A44]"
            />
          </motion.div>
        )}
      </div>

      {/* ── SECTION 2: Smart Curated Services Card ── */}
      <div className="bg-[#F5ECDD]/30 border border-[#E8DDCD] rounded-2xl p-3.5 sm:p-5 space-y-3">
        {/* Curated Package Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#B88A44]/15 flex items-center justify-center text-[#B88A44]">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <div>
              <h3 className="font-serif-editorial text-base sm:text-lg text-[#34281F] font-medium leading-tight">
                Curated Services for {plan.eventType}
              </h3>
              <p className="font-sans-narrative text-[11px] text-[#6E5D4F]">
                {plan.services.length} services selected ({recommendedList.length} recommended)
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowCustomizer(!showCustomizer)}
            className="px-3 py-1.5 rounded-full bg-[#FCF9F5] border border-[#E8DDCD] hover:border-[#B88A44] text-[#34281F] font-sans-ui text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#B88A44]" />
            <span>{showCustomizer ? 'Hide Options' : 'Customize Services'}</span>
            {showCustomizer ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Selected Services Quick Chips Preview */}
        {!showCustomizer && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {plan.services.map((svc) => (
              <span
                key={svc}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white border border-[#E8DDCD] text-xs font-sans-narrative text-[#34281F] font-medium shadow-2xs"
              >
                <Check className="w-3 h-3 text-[#B88A44]" strokeWidth={2.5} />
                <span>{svc}</span>
              </span>
            ))}
          </div>
        )}

        {/* Expanded Categorized Services (Unfolds on toggle or desktop) */}
        <AnimatePresence>
          {showCustomizer && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="space-y-4 pt-3 border-t border-[#E8DDCD] overflow-hidden"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-sans-ui text-[10px] uppercase tracking-wider text-[#6E5D4F] font-semibold">
                  Tap to add or remove services
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleSelectAllRecommended}
                    className="text-[11px] text-[#B88A44] font-semibold hover:underline cursor-pointer"
                  >
                    Select All Recommended
                  </button>
                  <span className="text-[#E8DDCD]">|</span>
                  <button
                    type="button"
                    onClick={handleClearAllServices}
                    className="text-[11px] text-[#6E5D4F] hover:underline cursor-pointer"
                  >
                    Clear
                  </button>
                </div>
              </div>

              {SERVICE_CATEGORIES.map((group) => (
                <div key={group.category} className="space-y-1.5">
                  <span className="font-sans-ui text-[10px] uppercase tracking-wider text-[#6E5D4F] font-semibold block px-0.5">
                    {group.category}
                  </span>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {group.services.map((service) => {
                      const isSelected = plan.services.includes(service.title);
                      const isRecommended = recommendedList.includes(service.title);

                      return (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => handleToggleService(service.title)}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-sans-narrative transition-all cursor-pointer border focus:outline-none ${
                            isSelected
                              ? 'bg-gradient-to-r from-[#FFF9F0] via-[#FDF3E3] to-[#F5E6CC] text-[#34281F] border-[#B88A44] ring-1 ring-[#B88A44]/50 font-semibold shadow-2xs'
                              : 'bg-white/80 text-[#34281F] border-[#E8DDCD] hover:bg-[#F5ECDD]'
                          }`}
                        >
                          {renderServiceIcon(service.iconName, isSelected)}
                          <span>{service.title}</span>
                          {isRecommended && !isSelected && (
                            <span className="text-[9px] text-[#B88A44] font-semibold">★</span>
                          )}
                          {isSelected && (
                            <Check className="w-3 h-3 text-[#B88A44]" strokeWidth={2.5} />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
