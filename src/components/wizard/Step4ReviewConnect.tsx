'use client';

import React from 'react';
import { Edit3, MessageCircle, Calendar, Users, MapPin, Sparkles, DollarSign } from 'lucide-react';
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
        month: 'long',
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
    <div className="space-y-8">
      <div>
        <span className="font-sans-ui text-[11px] uppercase tracking-widest text-[#B88A44] font-semibold block">
          Step 4 • Summary & Consultation
        </span>
        <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#34281F] font-normal mt-0.5">
          Review Your Event Blueprint
        </h2>
        <p className="font-sans-narrative text-xs sm:text-sm text-[#6E5D4F] mt-1">
          Everything looks set. Review your selections and connect directly with Event Manager Ch. Kala Prasad.
        </p>
      </div>

      {/* Editorial Summary Card */}
      <div className="bg-[#F5ECDD]/40 border border-[#E8DDCD] rounded-3xl p-5 sm:p-7 space-y-6">
        {/* Header Ribbon */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E8DDCD] gap-2">
          <div>
            <span className="font-sans-ui text-[10px] uppercase tracking-wider text-[#6E5D4F] font-semibold block">
              Event Classification
            </span>
            <h3 className="font-serif-editorial text-2xl text-[#34281F] font-medium">
              {effectiveEvent}
            </h3>
          </div>

          <button
            type="button"
            onClick={() => onJumpToStep(1)}
            className="self-start sm:self-auto px-3.5 py-1.5 rounded-full bg-white/80 border border-[#E8DDCD] font-sans-ui text-xs text-[#6E5D4F] hover:text-[#B88A44] hover:border-[#B88A44] flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Edit3 className="w-3 h-3" />
            <span>Edit Event</span>
          </button>
        </div>

        {/* 2-Column Summary Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs font-sans-narrative">
          {/* Left Column */}
          <div className="space-y-3.5">
            <div className="space-y-1">
              <span className="font-sans-ui text-[10px] uppercase tracking-wider text-[#6E5D4F] font-semibold flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#B88A44]" />
                <span>Estimated Scale</span>
              </span>
              <span className="text-sm font-semibold text-[#34281F] block">{guestDisplay}</span>
            </div>

            <div className="space-y-1">
              <span className="font-sans-ui text-[10px] uppercase tracking-wider text-[#6E5D4F] font-semibold flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#B88A44]" />
                <span>Target Timeline</span>
              </span>
              <span className="text-sm font-semibold text-[#34281F] block">
                {formatDateDisplay(plan.eventDate)} {plan.eventTime ? `(${plan.eventTime})` : ''}
              </span>
            </div>

            <div className="space-y-1">
              <span className="font-sans-ui text-[10px] uppercase tracking-wider text-[#6E5D4F] font-semibold flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#B88A44]" />
                <span>Venue & Location</span>
              </span>
              <span className="text-sm font-semibold text-[#34281F] block">
                {plan.location || 'Kakinada / AP'} • <span className="capitalize">{plan.venueStatus}</span>
              </span>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-3.5">
            <div className="space-y-1">
              <span className="font-sans-ui text-[10px] uppercase tracking-wider text-[#6E5D4F] font-semibold flex items-center gap-1.5">
                <DollarSign className="w-3.5 h-3.5 text-[#B88A44]" />
                <span>Estimated Investment</span>
              </span>
              <span className="text-base font-serif-editorial font-semibold text-[#B88A44] block">
                {plan.budgetRange}
              </span>
            </div>

            <div className="space-y-1.5">
              <span className="font-sans-ui text-[10px] uppercase tracking-wider text-[#6E5D4F] font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#B88A44]" />
                <span>Selected Services ({plan.services.length})</span>
              </span>
              <div className="flex flex-wrap gap-1.5">
                {plan.services.length > 0 ? (
                  plan.services.map((svc) => (
                    <span
                      key={svc}
                      className="px-2.5 py-1 rounded-full bg-gradient-to-r from-[#FFF9F0] to-[#F5E6CC] text-[#34281F] border border-[#B88A44]/40 text-[11px] font-sans-narrative font-medium shadow-2xs"
                    >
                      {svc}
                    </span>
                  ))
                ) : (
                  <span className="text-[#6E5D4F]">Complete event consultation</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Optional Custom Notes Input */}
        <div className="pt-4 border-t border-[#E8DDCD] space-y-1.5">
          <label className="font-sans-ui text-[11px] uppercase tracking-wider text-[#6E5D4F] font-semibold block">
            Special Requests / Notes (Optional)
          </label>
          <textarea
            rows={2}
            value={plan.notes || ''}
            onChange={(e) => onUpdate({ notes: e.target.value })}
            placeholder="e.g. Specific floral theme, beachside venue setup, muhurtham timing..."
            className="w-full p-3 bg-[#FCF9F5] border border-[#E8DDCD] rounded-xl font-sans-narrative text-xs text-[#34281F] focus:outline-none focus:border-[#B88A44]"
          />
        </div>
      </div>

      {/* Primary WhatsApp Direct CTA Button */}
      <div className="space-y-3 pt-2">
        <button
          type="button"
          onClick={handleProceedWhatsApp}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:brightness-105 text-white font-sans-ui text-sm font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2.5 shadow-[0_4px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.45)] cursor-pointer focus-visible:ring-2 focus-visible:ring-[#25D366] focus:outline-none active:scale-98"
        >
          <MessageCircle className="w-5 h-5 fill-white shrink-0" />
          <span>Discuss My Event on WhatsApp</span>
        </button>

        <p className="text-center font-sans-narrative text-xs text-[#6E5D4F]">
          Connects instantly to <strong>Ch. Kala Prasad</strong> (Event Manager & Creative Director)
        </p>
      </div>
    </div>
  );
};
