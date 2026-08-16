'use client';

import React from 'react';
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
  const activeEventKey = plan.eventType.toLowerCase().replace(/[^a-z0-9]/g, '-');
  const recommendedList = EVENT_RECOMMENDATIONS[activeEventKey] || [];

  const handleSelectEventType = (typeTitle: string) => {
    onUpdate({ eventType: typeTitle });
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
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
      {/* ── LEFT COLUMN: Event Type Selection ── */}
      <div className="lg:col-span-5 xl:col-span-5 space-y-4">
        <div>
          <span className="font-sans-ui text-[11px] uppercase tracking-widest text-[#B88A44] font-semibold block">
            Step 1 • Event Selection
          </span>
          <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#34281F] font-normal mt-0.5">
            What are you celebrating?
          </h2>
          <p className="font-sans-narrative text-xs sm:text-sm text-[#6E5D4F] mt-1">
            Choose your celebration type to customize styling, rituals, and services.
          </p>
        </div>

        {/* 2-Column Grid of Celebration Types */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2.5">
          {EVENT_TYPES.map((type) => {
            const isSelected = plan.eventType === type.title;

            return (
              <button
                key={type.id}
                type="button"
                onClick={() => handleSelectEventType(type.title)}
                className={`p-3 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[86px] focus-visible:ring-2 focus-visible:ring-[#B88A44] focus:outline-none ${
                  isSelected
                    ? 'bg-gradient-to-br from-[#FFF9F0] via-[#FDF3E3] to-[#F5E6CC] text-[#34281F] border-[#B88A44] ring-2 ring-[#B88A44]/60 shadow-[0_6px_20px_rgba(184,138,68,0.22)]'
                    : 'bg-[#F5ECDD]/40 text-[#34281F] border-[#E8DDCD] hover:bg-[#F5ECDD] hover:border-[#B88A44]/60'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <div className={`p-1.5 rounded-lg transition-colors ${isSelected ? 'bg-[#B88A44] text-white shadow-xs' : 'bg-white/60'}`}>
                    {renderEventIcon(type.iconName, isSelected)}
                  </div>
                  {isSelected && (
                    <span className="font-sans-ui text-[9px] font-bold text-white bg-gradient-to-r from-[#B88A44] to-[#9E7432] px-2 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                      Selected
                    </span>
                  )}
                </div>

                <div className="mt-1.5">
                  <span className={`font-serif-editorial text-base font-semibold leading-tight block ${isSelected ? 'text-[#34281F]' : 'text-[#34281F]'}`}>
                    {type.title}
                  </span>
                  <span
                    className={`font-sans-narrative text-[11px] line-clamp-1 block mt-0.5 ${
                      isSelected ? 'text-[#6E5D4F]' : 'text-[#6E5D4F]'
                    }`}
                  >
                    {type.description}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Custom Event Name input when 'Other' is picked */}
        {plan.eventType === 'Other Celebration' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-[#F5ECDD]/50 border border-[#E8DDCD] rounded-2xl space-y-1.5"
          >
            <label className="block font-sans-ui text-xs uppercase tracking-wider text-[#34281F] font-medium">
              Custom Celebration Name *
            </label>
            <input
              type="text"
              value={plan.customEventType || ''}
              onChange={(e) => onUpdate({ customEventType: e.target.value })}
              placeholder="e.g. Silver Jubilee, Terrace Pool Gala, Sangeet Soiree..."
              className="w-full p-3 bg-[#FCF9F5] border border-[#E8DDCD] rounded-xl font-sans-narrative text-sm text-[#34281F] focus:outline-none focus:border-[#B88A44]"
            />
          </motion.div>
        )}
      </div>

      {/* ── RIGHT COLUMN: Categorized Services Selection ── */}
      <div className="lg:col-span-7 xl:col-span-7 space-y-5 lg:pl-6 lg:border-l lg:border-[#E8DDCD] pt-6 lg:pt-0 border-t lg:border-t-0 border-[#E8DDCD]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <span className="font-sans-ui text-[11px] uppercase tracking-widest text-[#B88A44] font-semibold block">
              Required Services & Craft
            </span>
            <h3 className="font-serif-editorial text-xl sm:text-2xl text-[#34281F] font-normal mt-0.5">
              Select what you need for this event
            </h3>
            <p className="font-sans-narrative text-xs text-[#6E5D4F] mt-0.5">
              Items with <strong className="text-[#B88A44]">Recommended</strong> are curated pairings for {plan.eventType}.
            </p>
          </div>

          {/* Quick Helper Actions */}
          <div className="flex items-center gap-2 shrink-0">
            {recommendedList.length > 0 && (
              <button
                type="button"
                onClick={handleSelectAllRecommended}
                className="px-3 py-1.5 rounded-full bg-[#F5ECDD] hover:bg-[#E8DDCD] border border-[#E8DDCD] font-sans-ui text-xs text-[#34281F] flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Sparkle className="w-3.5 h-3.5 text-[#B88A44]" />
                <span>Select Recommended</span>
              </button>
            )}

            {plan.services.length > 0 && (
              <button
                type="button"
                onClick={handleClearAllServices}
                className="px-3 py-1.5 rounded-full bg-transparent hover:bg-[#F5ECDD]/60 border border-[#E8DDCD] font-sans-ui text-xs text-[#6E5D4F] flex items-center gap-1 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Clear</span>
              </button>
            )}
          </div>
        </div>

        {/* Categorized Service Groups */}
        <div className="space-y-4">
          {SERVICE_CATEGORIES.map((group) => (
            <div key={group.category} className="space-y-2">
              <span className="font-sans-ui text-[10px] uppercase tracking-wider text-[#6E5D4F] font-semibold block px-1">
                {group.category}
              </span>

              <div className="flex flex-wrap gap-2">
                {group.services.map((service) => {
                  const isSelected = plan.services.includes(service.title);
                  const isRecommended = recommendedList.includes(service.title);

                  return (
                    <motion.button
                      key={service.id}
                      type="button"
                      onClick={() => handleToggleService(service.title)}
                      layout
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 30,
                        mass: 0.5,
                      }}
                      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs sm:text-sm font-sans-narrative transition-all cursor-pointer border min-h-[40px] focus-visible:ring-2 focus-visible:ring-[#B88A44] focus:outline-none ${
                        isSelected
                          ? 'bg-gradient-to-r from-[#FFF9F0] via-[#FDF3E3] to-[#F5E6CC] text-[#34281F] border-[#B88A44] ring-2 ring-[#B88A44]/50 shadow-xs font-semibold'
                          : 'bg-[#F5ECDD]/40 text-[#34281F] border-[#E8DDCD] hover:bg-[#F5ECDD] hover:border-[#B88A44]/60'
                      }`}
                    >
                      {renderServiceIcon(service.iconName, isSelected)}

                      <span className="font-medium whitespace-nowrap">{service.title}</span>

                      {/* Recommended Tag */}
                      {isRecommended && !isSelected && (
                        <span className="px-1.5 py-0.5 rounded-full bg-[#B88A44]/15 text-[#B88A44] font-sans-ui text-[9px] uppercase tracking-wider font-semibold">
                          Recommended
                        </span>
                      )}

                      {/* Selected Check Badge */}
                      <AnimatePresence>
                        {isSelected && (
                          <motion.span
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            className="w-3.5 h-3.5 rounded-full bg-[#B88A44] flex items-center justify-center shrink-0 ml-0.5 shadow-xs"
                          >
                            <Check className="w-2.5 h-2.5 text-white" strokeWidth={2.5} />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Selected count footer */}
        <div className="p-3 bg-[#F5ECDD]/50 border border-[#E8DDCD] rounded-2xl flex items-center justify-between text-xs font-sans-narrative text-[#6E5D4F]">
          <span>
            {plan.services.length > 0 ? (
              <>
                <strong className="text-[#34281F] font-semibold">{plan.services.length}</strong> services chosen
              </>
            ) : (
              'Full event management assumed'
            )}
          </span>
          <span className="text-[#B88A44] font-medium hidden sm:inline">Personalize details in Step 2 →</span>
        </div>
      </div>
    </div>
  );
};
