'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, MapPin, Sparkles, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/lib/data/site';
import { EditorialBadge } from '@/components/ui/EditorialBadge';

interface ServiceBookingGlassPanelProps {
  serviceTitle: string;
  startingPrice?: string;
  category?: string;
}

export const ServiceBookingGlassPanel: React.FC<ServiceBookingGlassPanelProps> = ({
  serviceTitle,
  startingPrice,
}) => {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    `Hello Hanvi Events! I am inquiring about ${serviceTitle}. Please share package options, pricing, and availability.`
  )}`;

  return (
    <div className="relative group overflow-hidden rounded-3xl p-6 sm:p-8 space-y-6 backdrop-blur-2xl bg-[#FCF9F5]/90 border border-[#E8DDCD] shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-all duration-500">
      
      {/* Subtle warm glow */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-60 h-60 bg-gradient-to-br from-[#B88A44]/10 via-[#FDF3E3]/20 to-transparent rounded-full blur-3xl" />

      {/* Header */}
      <div className="relative z-10 space-y-3">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <EditorialBadge variant="gold" className="bg-[#B88A44]/10 border-[#B88A44]/30 text-[#7A531C]">
            <ShieldCheck className="w-3.5 h-3.5 mr-1 text-[#B88A44]" />
            Ch. Kala Prasad Supervision
          </EditorialBadge>
          {startingPrice && (
            <span className="font-sans-ui text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#B88A44]/8 text-[#7A531C] border border-[#B88A44]/20">
              From {startingPrice}
            </span>
          )}
        </div>

        <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#34281F] font-normal leading-tight">
          Reserve {serviceTitle}
        </h3>

        <p className="font-sans-narrative text-[#6E5D4F] text-xs sm:text-sm leading-relaxed">
          Get an instant customized estimate & availability check for your celebration in Kakinada & Andhra Pradesh.
        </p>
      </div>

      {/* CTA Buttons — clean, flat, elegant */}
      <div className="relative z-10 space-y-3 pt-1">
        {/* Call Studio */}
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-2xl bg-[#B88A44] text-[#FCF9F5] font-sans-ui text-sm font-semibold tracking-wide hover:bg-[#A07635] active:scale-[0.98] transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B88A44]/50 focus:ring-offset-2"
        >
          <Phone className="w-4 h-4" />
          <span>Call Studio: {siteConfig.phone}</span>
        </a>

        {/* WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-2xl bg-[#59624C] text-[#FCF9F5] font-sans-ui text-sm font-semibold tracking-wide hover:bg-[#4A5240] active:scale-[0.98] transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#59624C]/50 focus:ring-offset-2"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp Instant Inquiry</span>
        </a>

        {/* Event Wizard */}
        <Link
          href="/wizard"
          className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-2xl border border-[#E8DDCD] bg-[#F5ECDD]/50 text-[#34281F] hover:bg-[#F5ECDD] hover:border-[#B88A44]/50 font-sans-ui text-xs font-semibold tracking-wider uppercase transition-all duration-200"
        >
          <Sparkles className="w-4 h-4 text-[#B88A44]" />
          <span>Launch 4-Step Event Wizard →</span>
        </Link>
      </div>

      {/* Studio link */}
      <div className="relative z-10 pt-3 border-t border-[#E8DDCD]/80 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-1.5 text-[#7A531C] hover:text-[#34281F] text-xs font-sans-narrative font-medium transition-colors hover:underline"
        >
          <MapPin className="w-3.5 h-3.5 text-[#B88A44]" />
          <span>View Kakinada Studio Map & Hours →</span>
        </Link>
      </div>

    </div>
  );
};
