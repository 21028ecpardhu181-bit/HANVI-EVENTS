'use client';

import React, { useState, useEffect } from 'react';
import { SERVICE_CATEGORIES, ServiceItem, EVENT_RECOMMENDATIONS } from '@/lib/data/plannerConfig';
import { Sparkles, Music, Camera, Utensils, Palette, Gift, Film, Tent, Check, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap: Record<ServiceItem['iconName'], React.ElementType> = {
  sparkles: Sparkles,
  music: Music,
  camera: Camera,
  utensils: Utensils,
  palette: Palette,
  gift: Gift,
  film: Film,
  tent: Tent,
};

interface ServicesStepProps {
  selectedEventType?: string;
  selectedServices?: string[];
  onChange: (services: string[]) => void;
}

export function ServicesStep({
  selectedEventType = 'wedding',
  selectedServices = [],
  onChange,
}: ServicesStepProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const normalizedEventType = (selectedEventType || 'wedding').toLowerCase();
  const recommendedServices = EVENT_RECOMMENDATIONS[normalizedEventType] || [];
  const currentSelected = Array.isArray(selectedServices) ? selectedServices : [];

  // Auto-select recommendations if none selected yet
  useEffect(() => {
    if (currentSelected.length === 0 && recommendedServices.length > 0) {
      onChange(recommendedServices);
    }
  }, []);

  const categories = ['All', ...SERVICE_CATEGORIES.map((c) => c.category)];
  const allServices = SERVICE_CATEGORIES.flatMap((c) => c.services);
  const filteredServices =
    activeCategory === 'All'
      ? allServices
      : allServices.filter((s) => s.category === activeCategory);

  const toggleService = (title: string) => {
    if (currentSelected.includes(title)) {
      onChange(currentSelected.filter((s) => s !== title));
    } else {
      onChange([...currentSelected, title]);
    }
  };

  const handleSelectRecommended = () => {
    onChange([...new Set([...currentSelected, ...recommendedServices])]);
  };

  const handleClear = () => {
    onChange([]);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 py-2 sm:py-3">
      {/* Step Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mb-3">
        <div className="text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl font-serif-editorial text-[#34281F] font-semibold">
            Curate Your Services
          </h2>
          <p className="text-[11px] sm:text-xs font-sans-ui text-[#6E5D4F]">
            {currentSelected.length} of {allServices.length} services selected
          </p>
        </div>

        {/* Quick Actions */}
        <div className="flex items-center gap-2 text-[11px] font-sans-ui">
          <button
            type="button"
            onClick={handleSelectRecommended}
            className="px-2.5 py-1 rounded-md bg-[#F5ECDD] text-[#B88A44] hover:bg-[#B88A44] hover:text-white font-medium transition-colors cursor-pointer"
          >
            Recommended
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="px-2.5 py-1 rounded-md bg-stone-100 text-stone-600 hover:bg-stone-200 font-medium transition-colors cursor-pointer"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-2.5 hide-scrollbar">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded-full text-xs font-sans-ui whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#34281F] text-[#FCF9F5] shadow-xs'
                  : 'bg-white text-[#6E5D4F] border border-[#E8DDCD] hover:border-[#B88A44]'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Compact Services Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-[300px] overflow-y-auto pr-1">
        {filteredServices.map((service) => {
          const Icon = iconMap[service.iconName] || Sparkles;
          const isSelected = currentSelected.includes(service.title);
          const isRecommended = recommendedServices.includes(service.title);

          return (
            <motion.button
              key={service.id}
              type="button"
              whileTap={{ scale: 0.98 }}
              onClick={() => toggleService(service.title)}
              className={`flex items-center gap-2 p-2 sm:p-2.5 rounded-xl border text-left transition-all duration-150 cursor-pointer ${
                isSelected
                  ? 'border-[#B88A44] bg-[#FFFDF9] ring-1 ring-[#B88A44]/60 shadow-xs'
                  : 'border-[#E8DDCD] bg-white hover:border-[#B88A44]/40'
              }`}
            >
              <div
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                  isSelected ? 'bg-[#B88A44] text-white' : 'bg-[#F5ECDD] text-[#B88A44]'
                }`}
              >
                <Icon size={15} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <h4 className="text-[11px] sm:text-xs font-sans-narrative font-semibold text-[#34281F] truncate">
                    {service.title}
                  </h4>
                </div>
                <div className="flex items-center gap-1 text-[9px] sm:text-[10px] text-[#6E5D4F]">
                  <span className="truncate">{service.category}</span>
                  {isRecommended && (
                    <span className="shrink-0 text-[#B88A44] font-medium">• Rec</span>
                  )}
                </div>
              </div>

              <div
                className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 border ${
                  isSelected
                    ? 'bg-[#B88A44] border-[#B88A44] text-white'
                    : 'border-[#E8DDCD] bg-white'
                }`}
              >
                {isSelected ? <Check size={10} strokeWidth={3} /> : <Plus size={10} className="text-stone-300" />}
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
