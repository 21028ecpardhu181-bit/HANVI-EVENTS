import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Sparkles,
  Phone,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Award,
} from 'lucide-react';
import { EditorialButton } from '@/components/ui/EditorialButton';
import { siteConfig } from '@/lib/data/site';
import { getBreadcrumbSchema, getFounderPersonSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Ch. Kala Prasad — Founder & Event Director | Hanvi Events',
  description:
    'Ch. Kala Prasad is the founder and event director of Hanvi Events in Kakinada, directing luxury Telugu wedding planning, mandap architecture, and celebrations.',
  alternates: {
    canonical: 'https://www.hanvievents.com/team/ch-kala-prasad',
  },
};

export default function FounderProfilePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Team', url: '/team' },
    { name: 'Ch. Kala Prasad', url: '/team/ch-kala-prasad' },
  ]);

  const personSchema = getFounderPersonSchema();

  const leadershipPillars = [
    {
      title: 'Vedic Wedding Direction',
      desc: 'Deep cultural understanding of traditional Telugu rituals, Muhurtham timing, and ceremonial sequencing.',
    },
    {
      title: 'Architectural Mandap Engineering',
      desc: 'Hands-on oversight of structural fabrication, temple bell geometry, and floral cold-chain preservation.',
    },
    {
      title: 'Day-of Event Management',
      desc: 'Single-point on-ground operational leadership ensuring stage timings, catering coordination, and VIP protocol.',
    },
    {
      title: 'Personalized Client Consultations',
      desc: 'Direct consultation with couples and families at the Kakinada studio to design custom celebratory blueprints.',
    },
  ];

  const whatsappNumber = siteConfig.whatsapp.replace(/[^0-9]/g, '');

  return (
    <main className="min-h-screen bg-[#FCF9F5] text-[#34281F] pt-24 pb-16">
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 space-y-16">
        {/* Profile Header */}
        <div className="bg-white border border-[#E8DDCD] rounded-3xl p-6 sm:p-12 shadow-xs grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 flex flex-col items-center text-center space-y-4">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[#F5ECDD] border-2 border-[#B88A44] flex items-center justify-center text-[#B88A44] shadow-sm">
              <span className="font-serif-editorial text-4xl sm:text-5xl font-semibold">KP</span>
            </div>
            <div>
              <h1 className="font-serif-editorial text-2xl sm:text-3xl font-semibold text-[#34281F]">
                Ch. Kala Prasad
              </h1>
              <p className="font-sans-ui text-xs uppercase tracking-widest text-[#B88A44] font-bold mt-1">
                Founder & Event Director
              </p>
              <p className="font-sans-narrative text-xs text-[#6E5D4F] mt-1">
                Hanvi Events • Kakinada, Andhra Pradesh
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#F5ECDD] flex items-center justify-center text-[#B88A44] hover:bg-[#B88A44] hover:text-white transition-colors"
                aria-label="Instagram Profile"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#F5ECDD] flex items-center justify-center text-[#B88A44] hover:bg-[#B88A44] hover:text-white transition-colors"
                aria-label="YouTube Channel"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-2 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5ECDD] border border-[#E8DDCD]">
              <Sparkles size={14} className="text-[#B88A44]" />
              <span className="font-sans-ui text-xs uppercase tracking-widest text-[#B88A44] font-bold">
                Executive Profile
              </span>
            </div>

            <h2 className="font-serif-editorial text-2xl sm:text-3xl font-semibold text-[#34281F] leading-tight">
              Leading Bespoke Event Production & Wedding Management
            </h2>

            <p className="font-sans-narrative text-sm sm:text-base leading-relaxed text-[#6E5D4F]">
              Ch. Kala Prasad is the founder and event director of Hanvi Events, based in Suryanarayana Puram, Kakinada. With a dedicated passion for South Indian cultural heritage, architectural floral mandaps, and precise day-of event orchestration, he leads a team of craftsmen, stage fabricators, and hospitality coordinators serving families and corporate brands across East Godavari and Andhra Pradesh.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hello%20Ch.%20Kala%20Prasad,%20I%20would%20like%20to%20schedule%20a%20consultation.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <EditorialButton variant="gold" size="sm">
                  <MessageCircle size={15} /> WhatsApp Director
                </EditorialButton>
              </a>
              <a href={`tel:${siteConfig.phoneRaw}`}>
                <EditorialButton variant="outline" size="sm">
                  <Phone size={15} /> Call Studio Direct
                </EditorialButton>
              </a>
            </div>
          </div>
        </div>

        {/* Leadership Pillars */}
        <div className="space-y-6">
          <div className="border-b border-[#E8DDCD] pb-4">
            <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#34281F] font-semibold">
              Operational Focus & Expertise
            </h2>
            <p className="font-sans-narrative text-sm text-[#6E5D4F] mt-1">
              Direct leadership standards applied to every celebration at Hanvi Events.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white border border-[#E8DDCD] rounded-2xl p-6 space-y-2 shadow-xs hover:border-[#B88A44] transition-colors"
              >
                <div className="flex items-center gap-2 text-[#34281F] font-semibold font-serif-editorial text-lg">
                  <CheckCircle2 size={18} className="text-[#B88A44]" />
                  <span>{pillar.title}</span>
                </div>
                <p className="font-sans-narrative text-xs sm:text-sm leading-relaxed text-[#6E5D4F]">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Studio Location & Consultation Details */}
        <div className="bg-white border border-[#E8DDCD] rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-[#B88A44]">
            <MapPin size={18} />
            <span className="font-sans-ui text-xs font-bold uppercase tracking-widest">
              Physical Studio Address
            </span>
          </div>
          <p className="font-sans-narrative text-sm sm:text-base text-[#34281F] font-medium leading-relaxed">
            1st Floor, Subhamasthu Showroom, D.No: 20-11-40, Majestic Street, Suryanarayana Puram, Kakinada, Andhra Pradesh 533001
          </p>
          <p className="font-sans-narrative text-xs text-[#6E5D4F]">
            In-person consultations are available by appointment from Monday through Sunday (9:00 AM to 9:30 PM).
          </p>
        </div>

        {/* Interlinking */}
        <div className="border-t border-[#E8DDCD] pt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-4 text-xs font-sans-ui text-[#6E5D4F]">
            <span>Explore pages:</span>
            <Link
              href="/about"
              className="text-[#B88A44] hover:underline inline-flex items-center gap-1"
            >
              About Hanvi Events <ArrowRight size={11} />
            </Link>
            <Link
              href="/wedding-planner-kakinada"
              className="text-[#B88A44] hover:underline inline-flex items-center gap-1"
            >
              Wedding Planning <ArrowRight size={11} />
            </Link>
            <Link
              href="/event-management-company-kakinada"
              className="text-[#B88A44] hover:underline inline-flex items-center gap-1"
            >
              Kakinada Event Management <ArrowRight size={11} />
            </Link>
          </div>
          <Link href="/contact" className="text-xs font-sans-ui text-[#34281F] hover:text-[#B88A44] font-medium">
            Contact Studio →
          </Link>
        </div>
      </div>
    </main>
  );
}
