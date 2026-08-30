import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/lib/data/site';
import { getBreadcrumbSchema, getServiceSchema } from '@/lib/seo';
import { Sparkles, CheckCircle2, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { EditorialButton } from '@/components/ui/EditorialButton';

export const metadata: Metadata = {
  title: 'Event Management Company in Kakinada — Hanvi Events',
  description:
    'Hanvi Events is a Kakinada-based event management company specializing in weddings, mandap design, milestone celebrations, and corporate galas across East Godavari.',
  alternates: {
    canonical: 'https://www.hanvievents.com/event-management-company-kakinada',
  },
};

export default function EventManagementKakinadaPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Event Management Company Kakinada', url: '/event-management-company-kakinada' },
  ]);
  const serviceSchema = getServiceSchema(
    'Event Management Company in Kakinada',
    'Full-scale event management, wedding planning, mandap decoration, and corporate event coordination in Kakinada and East Godavari.'
  );

  return (
    <main className="min-h-screen bg-[#FCF9F5] text-[#34281F] pt-24 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 space-y-12">
        {/* Hero */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5ECDD] border border-[#E8DDCD]">
            <Sparkles size={14} className="text-[#B88A44]" />
            <span className="font-sans-ui text-xs uppercase tracking-widest text-[#B88A44] font-bold">
              Kakinada Event Management
            </span>
          </div>

          <h1 className="font-serif-editorial text-3xl sm:text-5xl text-[#34281F] font-semibold leading-tight">
            Event Management Company in Kakinada
          </h1>

          <p className="font-sans-narrative text-sm sm:text-base text-[#6E5D4F] leading-relaxed">
            Hanvi Events provides end-to-end event planning, traditional mandap architecture, floral stage fabrication, catering coordination, and event-day management for families and businesses in Kakinada and East Godavari.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <a
              href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Ch.%20Kala%20Prasad,%20I%20would%20like%20to%20inquire%20about%20event%20management%20in%20Kakinada.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <EditorialButton variant="gold" size="sm">
                WhatsApp Consultation
              </EditorialButton>
            </a>
            <Link href="/projects">
              <EditorialButton variant="outline" size="sm">
                View Case Studies
              </EditorialButton>
            </Link>
          </div>
        </div>

        {/* Services & Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-[#E8DDCD] rounded-2xl p-6 space-y-3">
            <h2 className="font-serif-editorial text-xl font-semibold text-[#34281F]">
              Wedding Planning & Mandaps
            </h2>
            <p className="font-sans-narrative text-xs text-[#6E5D4F] leading-relaxed">
              Traditional Telugu Muhurtham sets, sacred Vedic rituals, reception stages, Sangeet dance floors, and guest receiving.
            </p>
            <Link href="/wedding-planner-kakinada" className="inline-flex items-center gap-1 text-xs font-sans-ui text-[#B88A44] hover:underline pt-2">
              Explore Wedding Services <ArrowRight size={12} />
            </Link>
          </div>

          <div className="bg-white border border-[#E8DDCD] rounded-2xl p-6 space-y-3">
            <h2 className="font-serif-editorial text-xl font-semibold text-[#34281F]">
              Milestone Celebrations
            </h2>
            <p className="font-sans-narrative text-xs text-[#6E5D4F] leading-relaxed">
              Themed 1st birthdays, cradle ceremonies (Barasala), half saree (Langa Voni) functions, and house warming pujas.
            </p>
            <Link href="/birthday-party-organisers-kakinada" className="inline-flex items-center gap-1 text-xs font-sans-ui text-[#B88A44] hover:underline pt-2">
              Explore Birthday Services <ArrowRight size={12} />
            </Link>
          </div>

          <div className="bg-white border border-[#E8DDCD] rounded-2xl p-6 space-y-3">
            <h2 className="font-serif-editorial text-xl font-semibold text-[#34281F]">
              Corporate & Brand Galas
            </h2>
            <p className="font-sans-narrative text-xs text-[#6E5D4F] leading-relaxed">
              Truss staging, high-definition audio-visual projection, speaker podiums, product launches, and employee galas.
            </p>
            <Link href="/corporate-event-management-kakinada" className="inline-flex items-center gap-1 text-xs font-sans-ui text-[#B88A44] hover:underline pt-2">
              Explore Corporate Services <ArrowRight size={12} />
            </Link>
          </div>
        </div>

        {/* Factual Evidence Box */}
        <div className="bg-white border border-[#E8DDCD] rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="font-serif-editorial text-2xl text-[#34281F] font-semibold">
            Why Kakinada Families Work With Hanvi Events
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans-narrative text-sm text-[#6E5D4F]">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-[#B88A44] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#34281F] block">Local Studio & Leadership</strong>
                Physical studio at Suryanarayana Puram, Kakinada, personally led by Event Director Ch. Kala Prasad.
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-[#B88A44] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#34281F] block">End-to-End Execution</strong>
                Full production management including floral installation, lighting, acoustics, and catering coordination.
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-[#B88A44] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#34281F] block">Telugu Wedding Expertise</strong>
                In-depth understanding of Vedic rituals, Muhurtham timing, and traditional South Indian decor.
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-[#B88A44] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#34281F] block">Real Documented Work</strong>
                Explore real case studies and documented client projects on our website.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
