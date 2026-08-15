'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, MapPin, Sparkles, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/lib/data/site';
import { EditorialBadge } from '@/components/ui/EditorialBadge';
import { MetalButton, LiquidButton } from '@/components/ui/liquid-glass-button';

interface ServiceBookingGlassPanelProps {
  serviceTitle: string;
  startingPrice?: string;
  category?: string;
}

export const ServiceBookingGlassPanel: React.FC<ServiceBookingGlassPanelProps> = ({
  serviceTitle,
  startingPrice,
  category,
}) => {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    `Hello Hanvi Events! I am inquiring about ${serviceTitle}. Please share package options, pricing, and availability.`
  )}`;

  return (
    <div className="relative group overflow-hidden rounded-3xl p-6 sm:p-8 space-y-6 backdrop-blur-2xl bg-[#FCF9F5]/85 border border-[#B88A44]/35 shadow-[0_20px_60px_rgba(184,138,68,0.12)] hover:shadow-[0_24px_70px_rgba(184,138,68,0.18)] transition-all duration-500">
      
      {/* Liquid Glass Highlight Sheen */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-60 h-60 bg-gradient-to-br from-[#B88A44]/20 via-[#FDF3E3]/30 to-transparent rounded-full blur-2xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 w-48 h-48 bg-gradient-to-tr from-[#59624C]/15 via-[#FCF9F5]/40 to-transparent rounded-full blur-xl" />

      {/* Header Info */}
      <div className="relative z-10 space-y-2">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <EditorialBadge variant="gold" className="bg-[#B88A44]/15 border-[#B88A44]/40 text-[#7A531C] font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 mr-1 text-[#B88A44]" />
            Ch. Kala Prasad Supervision
          </EditorialBadge>
          {startingPrice && (
            <span className="font-sans-ui text-xs font-semibold px-2.5 py-1 rounded-full bg-[#B88A44]/10 text-[#7A531C] border border-[#B88A44]/20">
              From {startingPrice}
            </span>
          )}
        </div>

        <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#34281F] font-normal leading-tight pt-1">
          Reserve {serviceTitle}
        </h3>

        <p className="font-sans-narrative text-[#6E5D4F] text-xs sm:text-sm leading-relaxed">
          Get an instant customized estimate, decor blueprint & calendar reservation for your celebration across Kakinada and Andhra Pradesh.
        </p>
      </div>

      {/* Action CTA Buttons in 3D Metal & Liquid Glass */}
      <div className="relative z-10 space-y-3.5 pt-2">
        {/* Primary Call Studio */}
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="block w-full focus:outline-none focus:ring-2 focus:ring-[#B88A44] rounded-md"
        >
          <MetalButton
            variant="gold"
            className="w-full flex items-center justify-center gap-2.5 h-12 text-sm font-semibold tracking-wide"
          >
            <Phone className="w-4 h-4 shrink-0" />
            <span>Call Studio: {siteConfig.phone}</span>
          </MetalButton>
        </a>

        {/* WhatsApp Instant Inquiry */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full focus:outline-none focus:ring-2 focus:ring-[#59624C] rounded-md"
        >
          <MetalButton
            variant="success"
            className="w-full flex items-center justify-center gap-2.5 h-12 text-sm font-semibold tracking-wide"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>WhatsApp Instant Inquiry</span>
          </MetalButton>
        </a>

        {/* Event Wizard Direct Planner Link */}
        <Link
          href="/wizard"
          className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#FFF9F0] via-[#FDF3E3] to-[#F5E6CC] border border-[#B88A44]/40 text-[#7A531C] hover:text-[#34281F] hover:border-[#B88A44] font-sans-ui text-xs font-semibold tracking-wider uppercase shadow-xs transition-all"
        >
          <Sparkles className="w-4 h-4 text-[#B88A44]" />
          <span>Launch 4-Step Event Wizard →</span>
        </Link>
      </div>

      {/* Studio Location & Hours Link */}
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
