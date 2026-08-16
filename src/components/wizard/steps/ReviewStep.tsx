'use client';

import React from 'react';
import Image from 'next/image';
import { EventPlan, formatWhatsAppMessage, EVENT_TYPES } from '@/lib/data/plannerConfig';
import { siteConfig } from '@/lib/data/site';
import { EditorialButton } from '@/components/ui/EditorialButton';
import { Calendar, Users, MapPin, IndianRupee, MessageCircle, Phone } from 'lucide-react';

interface ReviewStepProps {
  plan: EventPlan;
  onChange: (updates: Partial<EventPlan>) => void;
}

export function ReviewStep({ plan, onChange }: ReviewStepProps) {
  const currentTypeObj = EVENT_TYPES.find(
    (t) => t.id.toLowerCase() === (plan.eventType || 'wedding').toLowerCase()
  ) || EVENT_TYPES[0];

  const effectiveEvent =
    plan.eventType === 'other'
      ? plan.customEventType || 'Custom Celebration'
      : currentTypeObj.title;

  const handleWhatsApp = () => {
    const message = formatWhatsAppMessage(plan);
    const cleanPhone = siteConfig.whatsapp.replace(/[^0-9]/g, '');
    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const guestDisplay = plan.exactGuests
    ? `${plan.exactGuests} Guests`
    : `${plan.guestRange || '251–500'} Guests`;

  return (
    <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 py-2 sm:py-3">
      <div className="text-center mb-3">
        <h2 className="text-xl sm:text-2xl font-serif-editorial text-[#34281F] font-semibold">
          Your Celebration Blueprint
        </h2>
        <p className="text-[11px] sm:text-xs font-sans-ui text-[#6E5D4F]">
          Review summary & connect directly with styling team
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        {/* Summary Card with Image */}
        <div className="md:col-span-7 bg-white border border-[#E8DDCD] rounded-xl p-3 sm:p-4 shadow-xs">
          <div className="flex items-center gap-3 pb-3 border-b border-[#E8DDCD]">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden shrink-0 bg-[#F5ECDD]">
              <Image
                src={currentTypeObj.image}
                alt={effectiveEvent}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-[10px] uppercase font-sans-ui tracking-wider font-semibold text-[#B88A44]">
                Event Blueprint
              </span>
              <h3 className="text-base sm:text-lg font-serif-editorial font-bold text-[#34281F]">
                {effectiveEvent}
              </h3>
              <p className="text-[11px] font-sans-ui text-[#6E5D4F]">
                {plan.services?.length || 0} services selected
              </p>
            </div>
          </div>

          {/* Key Details Grid */}
          <div className="grid grid-cols-2 gap-2 my-2.5 text-xs font-sans-ui">
            <div className="flex items-center gap-1.5 text-[#34281F]">
              <Calendar size={13} className="text-[#B88A44] shrink-0" />
              <span className="truncate">{plan.eventDate || 'Date TBD'}</span>
            </div>

            <div className="flex items-center gap-1.5 text-[#34281F]">
              <MapPin size={13} className="text-[#B88A44] shrink-0" />
              <span className="truncate">{plan.location || 'Kakinada'}</span>
            </div>

            <div className="flex items-center gap-1.5 text-[#34281F]">
              <Users size={13} className="text-[#B88A44] shrink-0" />
              <span className="truncate">{guestDisplay}</span>
            </div>

            <div className="flex items-center gap-1.5 text-[#34281F]">
              <IndianRupee size={13} className="text-[#B88A44] shrink-0" />
              <span className="truncate">{plan.budgetRange}</span>
            </div>
          </div>

          {/* Selected Services Tags */}
          <div className="border-t border-[#E8DDCD] pt-2">
            <p className="text-[10px] uppercase font-sans-ui font-semibold text-[#6E5D4F] mb-1">
              Included Experiences
            </p>
            <div className="flex flex-wrap gap-1 max-h-16 overflow-y-auto">
              {(plan.services || []).map((s) => (
                <span
                  key={s}
                  className="px-2 py-0.5 rounded-md bg-[#F5ECDD]/60 text-[10px] text-[#34281F] font-sans-ui"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Column */}
        <div className="md:col-span-5 flex flex-col gap-2">
          <div className="bg-white border border-[#E8DDCD] rounded-xl p-3 shadow-xs">
            <label className="block text-[11px] font-sans-ui font-semibold text-[#34281F] mb-1">
              Special Wishes or Notes (Optional)
            </label>
            <textarea
              value={plan.notes || ''}
              onChange={(e) => onChange({ notes: e.target.value })}
              placeholder="E.g. Traditional yellow theme, muhurtham timing..."
              rows={2}
              className="w-full bg-[#FCF9F5] border border-[#E8DDCD] rounded-lg p-2 text-xs text-[#34281F] focus:outline-none focus:border-[#B88A44] resize-none font-sans-ui"
            />
          </div>

          <div className="bg-[#FFFDF9] border border-[#E8DDCD] rounded-xl p-3 text-center shadow-xs flex flex-col justify-center">
            <EditorialButton
              onClick={handleWhatsApp}
              className="w-full !bg-[#25D366] hover:!bg-[#20bd5a] !text-white !border-[#25D366] mb-2 font-bold shadow-sm"
              size="md"
              icon={<MessageCircle size={16} />}
            >
              Send Blueprint to WhatsApp
            </EditorialButton>

            <a
              href={`tel:${siteConfig.phoneRaw || siteConfig.phone.replace(/[^0-9]/g, '')}`}
              className="inline-flex items-center justify-center gap-1.5 text-xs font-sans-ui text-[#B88A44] hover:text-[#34281F] font-semibold transition-colors py-1"
            >
              <Phone size={13} />
              Call Studio ({siteConfig.phone})
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
