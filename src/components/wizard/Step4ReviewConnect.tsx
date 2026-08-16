'use client';

import React from 'react';
import { Edit3, MessageCircle, Calendar, Users, MapPin, Sparkles, DollarSign, Phone } from 'lucide-react';
import { EventPlan, formatWhatsAppMessage } from '@/lib/data/plannerConfig';
import { siteConfig } from '@/lib/data/site';

interface Step4Props {
  plan: EventPlan;
  onUpdate: (updates: Partial<EventPlan>) => void;
  onJumpToStep: (step: number) => void;
}

export const Step4ReviewConnect: React.FC<Step4Props> = ({ plan, onUpdate, onJumpToStep }) => {
  const effectiveEvent = plan.eventType === 'Other Celebration' ? (plan.customEventType?.trim() || 'Custom Celebration') : plan.eventType;
  const guestDisplay = plan.exactGuests ? `${plan.exactGuests} Guests (${plan.guestRange})` : `${plan.guestRange} Guests`;

  const formatDateDisplay = (dateStr: string) => {
    if (!dateStr) return 'To be decided';
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });
    } catch {
      return dateStr;
    }
  };

  const handleProceedWhatsApp = () => {
    const rawNumber = siteConfig.whatsapp ? siteConfig.whatsapp.replace(/[^0-9]/g, '') : '916305457612';
    const message = formatWhatsAppMessage(plan);
    const url = `https://wa.me/${rawNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-5 md:space-y-6">
      <div>
        <span className="font-sans-ui text-[11px] uppercase tracking-widest text-[#B88A44] font-semibold block">
          Step 4 of 4 • Confirmation
        </span>
        <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#34281F] font-normal mt-0.5">
          Your Event Blueprint
        </h2>
      </div>

      {/* Sleek Blueprint Receipt Card */}
      <div className="bg-[#F5ECDD]/40 border border-[#E8DDCD] rounded-2xl p-4 sm:p-6 space-y-4">
        {/* Header Ribbon */}
        <div className="flex items-center justify-between pb-3 border-b border-[#E8DDCD]">
          <div>
            <span className="font-sans-ui text-[10px] uppercase tracking-wider text-[#6E5D4F] font-semibold block">
              Event Blueprint
            </span>
            <h3 className="font-serif-editorial text-xl sm:text-2xl text-[#34281F] font-semibold">
              {effectiveEvent}
            </h3>
          </div>

          <button
            type="button"
            onClick={() => onJumpToStep(1)}
            className="px-2.5 py-1 rounded-full bg-white border border-[#E8DDCD] font-sans-ui text-[11px] text-[#6E5D4F] hover:text-[#B88A44] flex items-center gap-1 cursor-pointer"
          >
            <Edit3 className="w-3 h-3" />
            <span>Edit</span>
          </button>
        </div>

        {/* 2x2 Metric Grid */}
        <div className="grid grid-cols-2 gap-3 text-xs font-sans-narrative">
          <div className="p-2.5 bg-white/70 rounded-xl border border-[#E8DDCD]/80">
            <span className="font-sans-ui text-[10px] uppercase tracking-wider text-[#6E5D4F] font-semibold flex items-center gap-1">
              <Users className="w-3 h-3 text-[#B88A44]" />
              <span>Scale</span>
            </span>
            <span className="font-semibold text-[#34281F] text-xs sm:text-sm mt-0.5 block truncate">
              {guestDisplay}
            </span>
          </div>

          <div className="p-2.5 bg-white/70 rounded-xl border border-[#E8DDCD]/80">
            <span className="font-sans-ui text-[10px] uppercase tracking-wider text-[#6E5D4F] font-semibold flex items-center gap-1">
              <Calendar className="w-3 h-3 text-[#B88A44]" />
              <span>Date</span>
            </span>
            <span className="font-semibold text-[#34281F] text-xs sm:text-sm mt-0.5 block truncate">
              {formatDateDisplay(plan.eventDate)}
            </span>
          </div>

          <div className="p-2.5 bg-white/70 rounded-xl border border-[#E8DDCD]/80">
            <span className="font-sans-ui text-[10px] uppercase tracking-wider text-[#6E5D4F] font-semibold flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#B88A44]" />
              <span>Location</span>
            </span>
            <span className="font-semibold text-[#34281F] text-xs sm:text-sm mt-0.5 block truncate">
              {plan.location || 'Kakinada'} ({plan.venueStatus})
            </span>
          </div>

          <div className="p-2.5 bg-white/70 rounded-xl border border-[#E8DDCD]/80">
            <span className="font-sans-ui text-[10px] uppercase tracking-wider text-[#6E5D4F] font-semibold flex items-center gap-1">
              <DollarSign className="w-3 h-3 text-[#B88A44]" />
              <span>Budget</span>
            </span>
            <span className="font-semibold text-[#B88A44] text-xs sm:text-sm mt-0.5 block truncate">
              {plan.budgetRange}
            </span>
          </div>
        </div>

        {/* Selected Services Tags */}
        <div className="space-y-1.5 pt-1">
          <span className="font-sans-ui text-[10px] uppercase tracking-wider text-[#6E5D4F] font-semibold flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#B88A44]" />
            <span>Selected Craft ({plan.services.length})</span>
          </span>
          <div className="flex flex-wrap gap-1">
            {plan.services.map((svc) => (
              <span
                key={svc}
                className="px-2 py-0.5 rounded-full bg-white border border-[#E8DDCD] text-[10px] font-sans-narrative text-[#34281F] font-medium"
              >
                {svc}
              </span>
            ))}
          </div>
        </div>

        {/* Optional Notes */}
        <div className="space-y-1 pt-2 border-t border-[#E8DDCD]">
          <label className="font-sans-ui text-[10px] uppercase tracking-wider text-[#6E5D4F] font-semibold block">
            Special Requests / Vision Notes
          </label>
          <textarea
            rows={2}
            value={plan.notes || ''}
            onChange={(e) => onUpdate({ notes: e.target.value })}
            placeholder="e.g. Traditional yellow marigold theme, beachside mandap..."
            className="w-full p-2.5 bg-[#FCF9F5] border border-[#E8DDCD] rounded-xl font-sans-narrative text-xs text-[#34281F] focus:outline-none focus:border-[#B88A44]"
          />
        </div>
      </div>

      {/* ── High-Converting 1-Tap WhatsApp Button ── */}
      <div className="space-y-2 pt-1">
        <button
          type="button"
          onClick={handleProceedWhatsApp}
          className="w-full py-3.5 px-5 rounded-2xl bg-[#59624C] hover:bg-[#4A533E] text-white font-sans-ui text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>Send Blueprint to WhatsApp (+91 63054 57612)</span>
        </button>

        <a
          href="tel:+919700929650"
          className="w-full py-2.5 px-4 rounded-xl bg-transparent border border-[#E8DDCD] hover:bg-[#F5ECDD] text-[#34281F] font-sans-ui text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-[#B88A44]" />
          <span>Or Call Direct Studio Line (+91 97009 29650)</span>
        </a>
      </div>
    </div>
  );
};
