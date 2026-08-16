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
  Sparkle,
  Layers,
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

// Flat list of services with short, crisp display names
const ALL_SERVICES = [
  { id: 'mandap', title: 'Vedic Mandap Setup', shortTitle: 'Mandap & Stage', category: 'Ceremonies', iconName: 'sparkles' },
  { id: 'florals', title: 'Fresh Floral Art & Stage', shortTitle: 'Floral Architecture', category: 'Decor & Styling', iconName: 'palette' },
  { id: 'entrance', title: 'Grand Royal Entrance Arch', shortTitle: 'Royal Entrance Arch', category: 'Decor & Styling', iconName: 'tent' },
  { id: 'lighting', title: 'Intelligent Ambient Lighting', shortTitle: 'Ambient Lighting & FX', category: 'Decor & Styling', iconName: 'sparkles' },
  { id: 'bridal', title: 'Bridal Makeup & Nail Art', shortTitle: 'Bridal Makeup & Hair', category: 'Decor & Styling', iconName: 'palette' },
  { id: 'catering', title: 'Traditional Catering Feasts', shortTitle: 'Banquet Catering', category: 'Feasts & Stalls', iconName: 'utensils' },
  { id: 'live-counters', title: 'Live Chaat & Dessert Counters', shortTitle: 'Live Food Counters', category: 'Feasts & Stalls', iconName: 'utensils' },
  { id: 'mehendi-stall', title: 'Mehendi & Bangle Stall', shortTitle: 'Mehendi & Bangle Stall', category: 'Feasts & Stalls', iconName: 'gift' },
  { id: 'photo-cinema', title: 'Candid Photography & Cinema', shortTitle: 'Photo & Cinematic Film', category: 'Media & Entertainment', iconName: 'camera' },
  { id: 'dj-sound', title: 'DJ, Sound & Truss Lighting', shortTitle: 'DJ & Sound Production', category: 'Media & Entertainment', iconName: 'music' },
  { id: 'drone', title: 'Drone Aerial Coverage', shortTitle: 'Drone Aerial Coverage', category: 'Media & Entertainment', iconName: 'film' },
  { id: 'welcome', title: 'Welcome Girls & Aarti Stalls', shortTitle: 'Welcome Hostesses', category: 'Ceremonies', iconName: 'gift' },
  { id: 'rituals', title: 'Priest & Ritual Coordination', shortTitle: 'Priest & Rituals', category: 'Ceremonies', iconName: 'sparkles' },
] as const;

const CATEGORY_TABS = ['All', 'Decor & Styling', 'Feasts & Stalls', 'Media & Entertainment', 'Ceremonies'] as const;

export const Step1EventTypeServices: React.FC<Step1Props> = ({ plan, onUpdate }) => {
  const [selectedCategoryTab, setSelectedCategoryTab] = useState<string>('All');
  const activeEventKey = plan.eventType.toLowerCase().replace(/[^a-z0-9]/g, '-');
  const recommendedList = EVENT_RECOMMENDATIONS[activeEventKey] || [];

  const handleSelectEventType = (typeTitle: string) => {
    const nextKey = typeTitle.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const autoRec = EVENT_RECOMMENDATIONS[nextKey] || [];
    
    // Auto-select recommended services if services are currently empty
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

  const filteredServices = selectedCategoryTab === 'All'
    ? ALL_SERVICES
    : ALL_SERVICES.filter((s) => s.category === selectedCategoryTab);

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
    const iconClass = `w-4 h-4 transition-colors ${isSelected ? 'text-[#B88A44]' : 'text-[#6E5D4F]'}`;
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
      {/* ── SECTION 1: Celebration Type (Equal-Sized Symmetrical Grid) ── */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-sans-ui text-[10px] sm:text-[11px] uppercase tracking-widest text-[#B88A44] font-semibold block">
              Step 1 of 4 • Celebration
            </span>
            <h2 className="font-serif-editorial text-xl sm:text-2xl md:text-3xl text-[#34281F] font-normal mt-0.5">
              What are you celebrating?
            </h2>
          </div>
          <span className="hidden sm:inline font-sans-narrative text-xs text-[#6E5D4F]">
            1 Tap to select
          </span>
        </div>

        {/* 2-Column Mobile, 4-Column Desktop Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
          {EVENT_TYPES.map((type) => {
            const isSelected = plan.eventType === type.title;

            return (
              <button
                key={type.id}
                type="button"
                onClick={() => handleSelectEventType(type.title)}
                className={`p-3 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[78px] sm:min-h-[86px] focus-visible:ring-2 focus-visible:ring-[#B88A44] focus:outline-none ${
                  isSelected
                    ? 'bg-gradient-to-br from-[#FFF9F0] via-[#FDF3E3] to-[#F5E6CC] text-[#34281F] border-[#B88A44] ring-2 ring-[#B88A44]/60 shadow-[0_4px_14px_rgba(184,138,68,0.22)]'
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

                <div className="mt-1">
                  <span className="font-serif-editorial text-sm sm:text-base font-semibold leading-tight block text-[#34281F]">
                    {type.title}
                  </span>
                  <span className="font-sans-narrative text-[10px] text-[#6E5D4F] line-clamp-1 block">
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
            className="p-3 bg-[#F5ECDD]/50 border border-[#E8DDCD] rounded-2xl space-y-1"
          >
            <label className="block font-sans-ui text-[11px] uppercase tracking-wider text-[#34281F] font-semibold">
              Celebration Name *
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

      {/* ── SECTION 2: Symmetrical Boutique Service Cards (Equal Height Grid) ── */}
      <div className="space-y-3 pt-2 border-t border-[#E8DDCD]">
        {/* Header & Quick Action Helpers */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-sans-ui text-[10px] sm:text-[11px] uppercase tracking-widest text-[#B88A44] font-semibold block">
                Required Services & Craft
              </span>
              <span className="text-[10px] text-[#6E5D4F] font-sans-ui bg-[#F5ECDD] px-2 py-0.5 rounded-full font-semibold">
                {plan.services.length} Selected
              </span>
            </div>
            <h3 className="font-serif-editorial text-lg sm:text-2xl text-[#34281F] font-normal mt-0.5">
              Choose Services for {plan.eventType}
            </h3>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            {recommendedList.length > 0 && (
              <button
                type="button"
                onClick={handleSelectAllRecommended}
                className="px-2.5 py-1 rounded-full bg-[#F5ECDD] hover:bg-[#E8DDCD] text-[#34281F] font-sans-ui text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
              >
                <Sparkle className="w-3 h-3 text-[#B88A44]" />
                <span>Recommended ({recommendedList.length})</span>
              </button>
            )}

            {plan.services.length > 0 && (
              <button
                type="button"
                onClick={handleClearAllServices}
                className="px-2 py-1 rounded-full hover:bg-[#F5ECDD]/60 text-[#6E5D4F] font-sans-ui text-xs transition-colors cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Clean Category Segmented Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {CATEGORY_TABS.map((tab) => {
            const isActive = selectedCategoryTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setSelectedCategoryTab(tab)}
                className={`px-3 py-1.5 rounded-full font-sans-ui text-xs whitespace-nowrap transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-[#34281F] text-[#FCF9F5] font-semibold border-[#34281F] shadow-xs'
                    : 'bg-[#FCF9F5] text-[#6E5D4F] border-[#E8DDCD] hover:border-[#B88A44]'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Symmetrical Equal 2-Column Mobile / 3-Column Tablet / 4-Column Desktop Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-2.5">
          {filteredServices.map((service) => {
            const isSelected = plan.services.includes(service.title);
            const isRecommended = recommendedList.includes(service.title);

            return (
              <button
                key={service.id}
                type="button"
                onClick={() => handleToggleService(service.title)}
                className={`p-2.5 sm:p-3 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[72px] sm:min-h-[82px] relative focus-visible:ring-2 focus-visible:ring-[#B88A44] focus:outline-none ${
                  isSelected
                    ? 'bg-gradient-to-br from-[#FFF9F0] via-[#FDF3E3] to-[#F5E6CC] text-[#34281F] border-[#B88A44] ring-2 ring-[#B88A44]/60 shadow-[0_3px_12px_rgba(184,138,68,0.18)]'
                    : 'bg-[#F5ECDD]/35 text-[#34281F] border-[#E8DDCD] hover:bg-[#F5ECDD] hover:border-[#B88A44]/50'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <div className={`p-1.5 rounded-lg transition-colors ${isSelected ? 'bg-[#B88A44] text-white shadow-2xs' : 'bg-white/80'}`}>
                    {renderServiceIcon(service.iconName, isSelected)}
                  </div>

                  <div className="flex items-center gap-1">
                    {isRecommended && !isSelected && (
                      <span className="text-[9px] text-[#B88A44] font-sans-ui font-bold uppercase bg-[#B88A44]/15 px-1.5 py-0.5 rounded-full">
                        Curated
                      </span>
                    )}

                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-[#B88A44] text-white shadow-2xs'
                          : 'border border-[#E8DDCD] bg-white/60'
                      }`}
                    >
                      {isSelected && <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />}
                    </div>
                  </div>
                </div>

                <div className="mt-1.5">
                  <span className="font-sans-narrative text-xs sm:text-sm font-semibold leading-tight block text-[#34281F]">
                    {service.shortTitle}
                  </span>
                  <span className="font-sans-ui text-[9px] text-[#6E5D4F] block mt-0.5 truncate">
                    {service.category}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
