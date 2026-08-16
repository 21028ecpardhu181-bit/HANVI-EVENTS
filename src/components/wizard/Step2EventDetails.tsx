'use client';

import React from 'react';
import { Users, Calendar, MapPin, CheckCircle2, Building, Home, HelpCircle } from 'lucide-react';
import {
  EventPlan,
  GUEST_RANGES,
  VENUE_STATUS_OPTIONS,
  getRangeFromExactCount,
} from '@/lib/data/plannerConfig';

interface Step2Props {
  plan: EventPlan;
  onUpdate: (updates: Partial<EventPlan>) => void;
}

const QUICK_CITIES = ['Kakinada', 'Rajahmundry', 'Konaseema', 'Samalkota', 'Visakhapatnam', 'Other AP'];

export const Step2EventDetails: React.FC<Step2Props> = ({ plan, onUpdate }) => {
  const handleSelectGuestRange = (rangeLabel: string) => {
    const rangeObj = GUEST_RANGES.find((r) => r.label === rangeLabel);
    const fallbackCount = rangeObj ? Math.round((rangeObj.min + Math.min(rangeObj.max, 1000)) / 2) : 150;
    onUpdate({
      guestRange: rangeLabel,
      exactGuests: fallbackCount,
    });
  };

  const handleExactGuestsChange = (valStr: string) => {
    const clean = valStr.replace(/[^0-9]/g, '');
    if (!clean) {
      onUpdate({ exactGuests: null, guestRange: '' });
      return;
    }
    const num = Math.min(Math.max(1, parseInt(clean, 10)), 50000);
    const range = getRangeFromExactCount(num);
    onUpdate({
      exactGuests: num,
      guestRange: range,
    });
  };

  return (
    <div className="space-y-6 md:space-y-8">
      {/* ── SECTION 1: Guest Scale ── */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-sans-ui text-[11px] uppercase tracking-widest text-[#B88A44] font-semibold block">
              Step 2 of 4 • Scale & Logistics
            </span>
            <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#34281F] font-normal mt-0.5">
              Guest Scale & Attendance
            </h2>
          </div>
          {plan.exactGuests && (
            <span className="font-sans-ui text-xs font-semibold text-[#B88A44] bg-[#F5ECDD] px-2.5 py-1 rounded-full">
              {plan.exactGuests} Guests
            </span>
          )}
        </div>

        {/* 4-Column / 2-Row Guest Scale Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {GUEST_RANGES.map((r) => {
            const isSelected = plan.guestRange === r.label;

            return (
              <button
                key={r.id}
                type="button"
                onClick={() => handleSelectGuestRange(r.label)}
                className={`p-2.5 sm:p-3 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[68px] sm:min-h-[76px] focus-visible:ring-2 focus-visible:ring-[#B88A44] focus:outline-none ${
                  isSelected
                    ? 'bg-gradient-to-br from-[#FFF9F0] via-[#FDF3E3] to-[#F5E6CC] text-[#34281F] border-[#B88A44] ring-2 ring-[#B88A44]/60 shadow-[0_4px_12px_rgba(184,138,68,0.2)]'
                    : 'bg-[#F5ECDD]/40 text-[#34281F] border-[#E8DDCD] hover:bg-[#F5ECDD]'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="font-serif-editorial text-base sm:text-lg font-semibold text-[#34281F]">
                    {r.label}
                  </span>
                  {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#B88A44]" />}
                </div>

                <span className="font-sans-narrative text-[10px] text-[#6E5D4F] line-clamp-1 block mt-0.5">
                  {r.subtitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Inline Exact Guest Input Sync */}
        <div className="flex items-center gap-2 pt-1">
          <span className="font-sans-ui text-xs text-[#6E5D4F]">Or enter exact:</span>
          <div className="relative w-32">
            <Users className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#B88A44]" />
            <input
              type="text"
              inputMode="numeric"
              placeholder="e.g. 250"
              value={plan.exactGuests ?? ''}
              onChange={(e) => handleExactGuestsChange(e.target.value)}
              className="w-full pl-8 pr-2.5 py-1.5 bg-[#FCF9F5] border border-[#E8DDCD] rounded-xl font-sans-narrative text-xs font-semibold text-[#34281F] focus:outline-none focus:border-[#B88A44]"
            />
          </div>
        </div>
      </div>

      {/* ── SECTION 2: Date & City Selection ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#E8DDCD]">
        {/* Target Event Date */}
        <div className="space-y-1.5">
          <label className="font-sans-ui text-xs uppercase tracking-wider text-[#34281F] font-semibold flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#B88A44]" />
            <span>Target Event Date *</span>
          </label>
          <input
            type="date"
            required
            min={new Date().toISOString().split('T')[0]}
            value={plan.eventDate}
            onChange={(e) => onUpdate({ eventDate: e.target.value })}
            className="w-full p-2.5 bg-[#FCF9F5] border border-[#E8DDCD] rounded-xl font-sans-narrative text-sm text-[#34281F] focus:outline-none focus:border-[#B88A44] cursor-pointer"
          />
        </div>

        {/* Location & City Selector */}
        <div className="space-y-1.5">
          <label className="font-sans-ui text-xs uppercase tracking-wider text-[#34281F] font-semibold flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#B88A44]" />
            <span>Event City / Area *</span>
          </label>
          <div className="flex flex-wrap gap-1.5">
            {QUICK_CITIES.map((city) => {
              const isSelected = plan.location === city;
              return (
                <button
                  key={city}
                  type="button"
                  onClick={() => onUpdate({ location: city })}
                  className={`px-3 py-1.5 rounded-full text-xs font-sans-narrative cursor-pointer border transition-colors ${
                    isSelected
                      ? 'bg-[#B88A44] text-white border-[#B88A44] font-semibold shadow-2xs'
                      : 'bg-[#F5ECDD]/50 text-[#34281F] border-[#E8DDCD] hover:bg-[#F5ECDD]'
                  }`}
                >
                  {city}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── SECTION 3: Venue Status Pills ── */}
      <div className="space-y-2 pt-2 border-t border-[#E8DDCD]">
        <label className="font-sans-ui text-xs uppercase tracking-wider text-[#34281F] font-semibold block">
          Venue Arrangement Status
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {VENUE_STATUS_OPTIONS.map((opt) => {
            const isSelected = plan.venueStatus === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => onUpdate({ venueStatus: opt.id })}
                className={`p-2.5 rounded-xl border text-left flex items-center justify-between cursor-pointer transition-colors ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#FFF9F0] to-[#F5E6CC] text-[#34281F] border-[#B88A44] ring-1 ring-[#B88A44]/60 font-semibold'
                    : 'bg-[#F5ECDD]/40 text-[#34281F] border-[#E8DDCD] hover:bg-[#F5ECDD]'
                }`}
              >
                <span className="font-sans-narrative text-xs">{opt.label}</span>
                {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#B88A44] shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
