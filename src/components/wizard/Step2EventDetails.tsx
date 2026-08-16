'use client';

import React from 'react';
import { Users, Calendar, Clock, MapPin, Building2, CheckCircle2 } from 'lucide-react';
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

export const Step2EventDetails: React.FC<Step2Props> = ({ plan, onUpdate }) => {
  const handleSelectGuestRange = (rangeLabel: string) => {
    const rangeObj = GUEST_RANGES.find((r) => r.label === rangeLabel);
    const fallbackCount = rangeObj ? Math.round((rangeObj.min + Math.min(rangeObj.max, 1000)) / 2) : 100;
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
      {/* ── LEFT COLUMN: Guest Scale & Count ── */}
      <div className="space-y-4">
        <div>
          <span className="font-sans-ui text-[11px] uppercase tracking-widest text-[#B88A44] font-semibold block">
            Step 2 • Guest Scale
          </span>
          <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#34281F] font-normal mt-0.5">
            How many guests are expected?
          </h2>
          <p className="font-sans-narrative text-xs sm:text-sm text-[#6E5D4F] mt-1">
            Pick a capacity tier or specify your exact guest count.
          </p>
        </div>

        {/* Non-overlapping Guest Range Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {GUEST_RANGES.map((r) => {
            const isSelected = plan.guestRange === r.label;

            return (
              <button
                key={r.id}
                type="button"
                onClick={() => handleSelectGuestRange(r.label)}
                className={`p-3 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[84px] focus-visible:ring-2 focus-visible:ring-[#B88A44] focus:outline-none ${
                  isSelected
                    ? 'bg-gradient-to-br from-[#FFF9F0] via-[#FDF3E3] to-[#F5E6CC] text-[#34281F] border-[#B88A44] ring-2 ring-[#B88A44]/60 shadow-[0_6px_20px_rgba(184,138,68,0.2)]'
                    : 'bg-[#F5ECDD]/40 text-[#34281F] border-[#E8DDCD] hover:bg-[#F5ECDD] hover:border-[#B88A44]/60'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`font-serif-editorial text-lg font-semibold ${isSelected ? 'text-[#34281F]' : 'text-[#34281F]'}`}>
                    {r.label}
                  </span>
                  {isSelected && <CheckCircle2 className="w-4 h-4 text-[#B88A44]" />}
                </div>

                <span
                  className={`font-sans-narrative text-[11px] line-clamp-1 block mt-1 ${
                    isSelected ? 'text-[#6E5D4F] font-medium' : 'text-[#6E5D4F]'
                  }`}
                >
                  {r.subtitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Exact Guest Count Direct Input Synchronizer */}
        <div className="p-3.5 bg-[#F5ECDD]/40 border border-[#E8DDCD] rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <label htmlFor="exactGuestsInput" className="font-sans-ui text-xs font-semibold text-[#34281F] uppercase tracking-wider block">
              Or Enter Exact Guest Count:
            </label>
            <span className="font-sans-narrative text-xs text-[#6E5D4F]">
              (Auto-syncs with tier)
            </span>
          </div>

          <div className="relative w-full sm:w-36">
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B88A44]" />
            <input
              id="exactGuestsInput"
              type="text"
              inputMode="numeric"
              placeholder="e.g. 350"
              value={plan.exactGuests ?? ''}
              onChange={(e) => handleExactGuestsChange(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-[#FCF9F5] border border-[#E8DDCD] rounded-xl font-sans-narrative text-sm font-semibold text-[#34281F] focus:outline-none focus:border-[#B88A44]"
            />
          </div>
        </div>
      </div>

      {/* ── RIGHT COLUMN: Timeline & Location ── */}
      <div className="space-y-5 lg:pl-6 lg:border-l lg:border-[#E8DDCD] pt-6 lg:pt-0 border-t lg:border-t-0 border-[#E8DDCD]">
        <div>
          <span className="font-sans-ui text-[11px] uppercase tracking-widest text-[#B88A44] font-semibold block">
            Timeline & Location
          </span>
          <h3 className="font-serif-editorial text-xl sm:text-2xl text-[#34281F] font-normal mt-0.5">
            When and where is the event?
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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

          {/* Preferred Time (Optional) */}
          <div className="space-y-1.5">
            <label className="font-sans-ui text-xs uppercase tracking-wider text-[#34281F] font-semibold flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#B88A44]" />
              <span>Preferred Time (Optional)</span>
            </label>
            <input
              type="time"
              value={plan.eventTime || ''}
              onChange={(e) => onUpdate({ eventTime: e.target.value })}
              className="w-full p-2.5 bg-[#FCF9F5] border border-[#E8DDCD] rounded-xl font-sans-narrative text-sm text-[#34281F] focus:outline-none focus:border-[#B88A44] cursor-pointer"
            />
          </div>
        </div>

        {/* City / Venue Input */}
        <div className="space-y-1.5">
          <label className="font-sans-ui text-xs uppercase tracking-wider text-[#34281F] font-semibold flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#B88A44]" />
            <span>Event City or Venue *</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Kakinada, Visakhapatnam, Rajahmundry, Beach Resort..."
            value={plan.location}
            onChange={(e) => onUpdate({ location: e.target.value })}
            className="w-full p-2.5 bg-[#FCF9F5] border border-[#E8DDCD] rounded-xl font-sans-narrative text-sm text-[#34281F] focus:outline-none focus:border-[#B88A44]"
          />
        </div>

        {/* Venue Booking Status */}
        <div className="space-y-2">
          <label className="font-sans-ui text-xs uppercase tracking-wider text-[#34281F] font-semibold flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-[#B88A44]" />
            <span>Venue Booking Status</span>
          </label>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {VENUE_STATUS_OPTIONS.map((opt) => {
              const isSelected = plan.venueStatus === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => onUpdate({ venueStatus: opt.id })}
                  className={`px-2.5 py-2 rounded-xl border text-xs font-sans-narrative transition-colors text-center cursor-pointer min-h-[40px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[#B88A44] focus:outline-none ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#FFF9F0] via-[#FDF3E3] to-[#F5E6CC] text-[#34281F] border-[#B88A44] ring-2 ring-[#B88A44]/50 font-semibold shadow-xs'
                      : 'bg-[#F5ECDD]/40 text-[#6E5D4F] border-[#E8DDCD] hover:bg-[#F5ECDD]'
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
