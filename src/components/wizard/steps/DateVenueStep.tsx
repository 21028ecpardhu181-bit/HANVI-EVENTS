'use client';

import React from 'react';
import { VENUE_STATUS_OPTIONS } from '@/lib/data/plannerConfig';
import { Calendar, MapPin, Building2, Check } from 'lucide-react';

const CITIES = ['Kakinada', 'Rajahmundry', 'Vizag', 'Hyderabad', 'Vijayawada', 'Other'];

interface DateVenueStepProps {
  eventDate?: string;
  location?: string;
  venueStatus?: 'booked' | 'looking' | 'home' | 'flexible';
  onChange: (updates: {
    eventDate?: string;
    location?: string;
    venueStatus?: 'booked' | 'looking' | 'home' | 'flexible';
  }) => void;
}

export function DateVenueStep({
  eventDate = '',
  location = 'Kakinada',
  venueStatus = 'looking',
  onChange,
}: DateVenueStepProps) {
  const isCustomCity = !CITIES.includes(location) && location !== '';

  return (
    <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 py-2 sm:py-3 space-y-3">
      <div className="text-center mb-2">
        <h2 className="text-xl sm:text-2xl font-serif-editorial text-[#34281F] font-semibold">
          When & Where?
        </h2>
        <p className="text-[11px] sm:text-xs font-sans-ui text-[#6E5D4F]">
          Event timeline and preferred location
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Date Selection */}
        <div className="bg-white rounded-xl p-3 border border-[#E8DDCD] shadow-xs">
          <div className="flex items-center gap-2 mb-2 text-[#34281F]">
            <Calendar className="text-[#B88A44]" size={16} />
            <h3 className="text-xs sm:text-sm font-sans-narrative font-semibold">Celebration Date</h3>
          </div>
          <input
            type="date"
            value={eventDate}
            onChange={(e) => onChange({ eventDate: e.target.value })}
            className="w-full text-xs sm:text-sm p-2 rounded-lg border border-[#E8DDCD] bg-[#FCF9F5] text-[#34281F] focus:outline-none focus:border-[#B88A44] font-sans-ui"
          />
        </div>

        {/* Venue Status */}
        <div className="bg-white rounded-xl p-3 border border-[#E8DDCD] shadow-xs">
          <div className="flex items-center gap-2 mb-2 text-[#34281F]">
            <Building2 className="text-[#B88A44]" size={16} />
            <h3 className="text-xs sm:text-sm font-sans-narrative font-semibold">Venue Status</h3>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {VENUE_STATUS_OPTIONS.map((status) => {
              const isSelected = venueStatus === status.id;
              return (
                <button
                  key={status.id}
                  type="button"
                  onClick={() => onChange({ venueStatus: status.id })}
                  className={`p-1.5 sm:p-2 rounded-lg border text-left text-[11px] font-sans-ui transition-all cursor-pointer ${
                    isSelected
                      ? 'border-[#B88A44] bg-[#FFFDF9] ring-1 ring-[#B88A44]/60 font-semibold text-[#34281F]'
                      : 'border-[#E8DDCD] bg-[#FCF9F5] text-[#6E5D4F] hover:border-[#B88A44]/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="truncate">{status.label}</span>
                    {isSelected && <Check size={12} className="text-[#B88A44] shrink-0" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* City / Location */}
      <div className="bg-white rounded-xl p-3 border border-[#E8DDCD] shadow-xs">
        <div className="flex items-center gap-2 mb-2 text-[#34281F]">
          <MapPin className="text-[#B88A44]" size={16} />
          <h3 className="text-xs sm:text-sm font-sans-narrative font-semibold">Destination / City</h3>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {CITIES.map((city) => {
            const isSelected = isCustomCity ? city === 'Other' : location === city;
            return (
              <button
                key={city}
                type="button"
                onClick={() => {
                  if (city === 'Other') {
                    onChange({ location: '' });
                  } else {
                    onChange({ location: city });
                  }
                }}
                className={`px-3 py-1 rounded-full text-xs font-sans-ui transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#34281F] text-white shadow-xs'
                    : 'bg-[#FCF9F5] border border-[#E8DDCD] text-[#6E5D4F] hover:border-[#B88A44]'
                }`}
              >
                {city}
              </button>
            );
          })}
        </div>

        {isCustomCity && (
          <input
            type="text"
            value={location}
            onChange={(e) => onChange({ location: e.target.value })}
            placeholder="Type your city or venue address..."
            className="w-full mt-2 text-xs p-2 rounded-lg border border-[#B88A44] bg-[#FCF9F5] text-[#34281F] focus:outline-none font-sans-ui"
            autoFocus
          />
        )}
      </div>
    </div>
  );
}
