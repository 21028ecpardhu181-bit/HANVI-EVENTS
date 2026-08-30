import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/lib/data/site';
import { getBreadcrumbSchema, getServiceSchema } from '@/lib/seo';
import { Sparkles, CheckCircle2, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { EditorialButton } from '@/components/ui/EditorialButton';

export const metadata: Metadata = {
  title: 'Wedding Planner in Kakinada — Luxury Telugu Wedding Management',
  description:
    'Hanvi Events is a wedding planning company in Kakinada specializing in traditional Telugu weddings, mandap design, Sangeet decor, and full event execution.',
  alternates: {
    canonical: 'https://www.hanvievents.com/wedding-planner-kakinada',
  },
};

export default function WeddingPlannerKakinadaPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Wedding Planner Kakinada', url: '/wedding-planner-kakinada' },
  ]);

  return (
    <main className="min-h-screen bg-[#FCF9F5] text-[#34281F] pt-24 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 space-y-12">
        {/* Hero */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5ECDD] border border-[#E8DDCD]">
            <Sparkles size={14} className="text-[#B88A44]" />
            <span className="font-sans-ui text-xs uppercase tracking-widest text-[#B88A44] font-bold">
              Wedding Planning & Coordination
            </span>
          </div>

          <h1 className="font-serif-editorial text-3xl sm:text-5xl text-[#34281F] font-semibold leading-tight">
            Wedding Planner in Kakinada
          </h1>

          <p className="font-sans-narrative text-sm sm:text-base text-[#6E5D4F] leading-relaxed">
            From sacred Muhurtham mandaps to grand evening receptions, Hanvi Events provides turnkey wedding planning, stage fabrication, guest management, and vendor coordination across Kakinada and East Godavari.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <a
              href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Ch.%20Kala%20Prasad,%20I%20would%20like%20to%20inquire%20about%20wedding%20planning%20in%20Kakinada.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <EditorialButton variant="gold" size="sm">
                Discuss Your Wedding
              </EditorialButton>
            </a>
            <Link href="/mandap-decorators-kakinada">
              <EditorialButton variant="outline" size="sm">
                Explore Mandap Decor
              </EditorialButton>
            </Link>
          </div>
        </div>

        {/* What Hanvi Handles */}
        <div className="bg-white border border-[#E8DDCD] rounded-2xl p-6 sm:p-8 space-y-6">
          <h2 className="font-serif-editorial text-2xl text-[#34281F] font-semibold">
            Complete Wedding Services Handled
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans-narrative text-xs sm:text-sm text-[#6E5D4F]">
            <div className="p-4 rounded-xl bg-[#FCF9F5] border border-[#E8DDCD] space-y-2">
              <h3 className="font-serif-editorial text-lg text-[#34281F] font-semibold">1. Traditional Telugu Rituals</h3>
              <p>Nischithardham (Engagement), Pellikuthuru, Pellikoduku, Haldi, Snathakam, and sacred Vedic Muhurtham coordination.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#FCF9F5] border border-[#E8DDCD] space-y-2">
              <h3 className="font-serif-editorial text-lg text-[#34281F] font-semibold">2. Sacred Mandap Architecture</h3>
              <p>Fresh Jasmine, Marigold, imported roses, temple bell structures, acrylic backdrops, and lotus water ponds.</p>
              <Link href="/mandap-decorators-kakinada" className="text-xs text-[#B88A44] font-sans-ui hover:underline block pt-1">
                Learn more about mandaps →
              </Link>
            </div>

            <div className="p-4 rounded-xl bg-[#FCF9F5] border border-[#E8DDCD] space-y-2">
              <h3 className="font-serif-editorial text-lg text-[#34281F] font-semibold">3. Reception Stage & Sangeet</h3>
              <p>Contemporary grand stage setups, Bollywood Sangeet truss lighting, red carpets, and lounge seating.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#FCF9F5] border border-[#E8DDCD] space-y-2">
              <h3 className="font-serif-editorial text-lg text-[#34281F] font-semibold">4. Catering Coordination</h3>
              <p>Traditional South Indian banana leaf feasts, multi-cuisine banquets, live chaat stalls, and dessert counters.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#FCF9F5] border border-[#E8DDCD] space-y-2">
              <h3 className="font-serif-editorial text-lg text-[#34281F] font-semibold">5. Guest & Logistics</h3>
              <p>Welcome hostesses, VIP transport coordination, luggage assistance, and venue crowd management.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#FCF9F5] border border-[#E8DDCD] space-y-2">
              <h3 className="font-serif-editorial text-lg text-[#34281F] font-semibold">6. Media & Sound</h3>
              <p>Candid wedding photography coordination, cinema videography, DMX moving head lighting, and acoustic audio.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
