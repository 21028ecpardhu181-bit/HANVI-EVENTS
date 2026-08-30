import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Sparkles,
  Calculator,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { EditorialButton } from '@/components/ui/EditorialButton';
import { siteConfig } from '@/lib/data/site';
import { getBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'How Much Does Wedding Planning Cost in Kakinada? — Price Guide | Hanvi Events',
  description:
    'A practical guide to wedding planning costs in Kakinada — understanding mandap decoration, catering, sound & lighting, and logistics budget factors.',
  alternates: {
    canonical: 'https://www.hanvievents.com/guides/wedding-planning-cost-kakinada',
  },
};

export default function WeddingPlanningCostGuidePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Guides', url: '/guides' },
    { name: 'Wedding Planning Cost in Kakinada', url: '/guides/wedding-planning-cost-kakinada' },
  ]);

  const costDrivers = [
    {
      title: '1. Mandap Architecture & Floral Volume',
      desc: 'Mandap investment varies depending on whether you choose traditional Marigold structures, dense fragrant Jasmine (Mallepoovu) domes, imported Dutch roses, or acrylic LED stages.',
    },
    {
      title: '2. Number of Ceremonies & Venues',
      desc: 'A single-day wedding has different logistical requirements than a multi-day celebration spanning Nischithardham, Haldi/Pellikuthuru, Sangeet evening, Vedic Muhurtham, and Reception.',
    },
    {
      title: '3. Guest Scale & Catering Logistics',
      desc: 'Catering coordination costs depend on whether you host a 300-guest intimate banquet or a 2,000-guest grand feast with multiple live counters and traditional banana leaf service.',
    },
    {
      title: '4. Audio-Visual, Truss Staging & Lighting',
      desc: 'Ambient lighting and acoustic sound pods require less infrastructure than concert-grade aluminium box trussing, P3 LED video backdrops, and moving head DMX spotlights.',
    },
    {
      title: '5. Hospitality Hostesses & Guest Management',
      desc: 'Including uniformed welcome girls, luggage assistance, VIP car transfers, and venue ushering adds coordination personnel to your event budget.',
    },
  ];

  const faqs = [
    {
      q: 'How much does complete wedding planning cost in Kakinada?',
      a: 'There is no fixed blanket price because every wedding differs in scale, venue, floral density, and required vendor services. At Hanvi Events, we prepare a transparent, itemized proposal based on your specific brief rather than forcing rigid generic packages.',
    },
    {
      q: 'What is the most cost-effective way to plan a luxury Telugu wedding?',
      a: 'Early planning (2–4 months prior) is key. Bundling mandap design, lighting, sound, hospitality, and vendor coordination with a single event management partner reduces duplicate vendor setup fees and logistics costs.',
    },
    {
      q: 'How can we get an accurate wedding estimate from Hanvi Events?',
      a: 'Connect with our studio via WhatsApp or phone with your tentative dates, venue, expected guest count, and decor preferences. Event Director Ch. Kala Prasad will provide an itemized blueprint.',
    },
  ];

  const whatsappNumber = siteConfig.whatsapp.replace(/[^0-9]/g, '');

  return (
    <main className="min-h-screen bg-[#FCF9F5] text-[#34281F] pt-24 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5ECDD] border border-[#E8DDCD]">
            <Calculator size={14} className="text-[#B88A44]" />
            <span className="font-sans-ui text-xs uppercase tracking-widest text-[#B88A44] font-bold">
              Wedding Cost & Budgeting Guide
            </span>
          </div>

          <h1 className="font-serif-editorial text-3xl sm:text-5xl text-[#34281F] font-semibold leading-tight">
            How Much Does Wedding Planning Cost in Kakinada?
          </h1>

          <p className="font-sans-narrative text-base sm:text-lg text-[#6E5D4F] leading-relaxed">
            Planning a Telugu wedding in Kakinada involves coordinating sacred rituals, architectural mandap setups, banquets, and guest hospitality. Here is a factual, transparent breakdown of what drives wedding investments and how to budget wisely.
          </p>
        </div>

        {/* Section: Price Depends on Event Scope */}
        <section className="bg-white border border-[#E8DDCD] rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="font-serif-editorial text-2xl text-[#34281F] font-semibold">
            Why Blanket Package Prices Are Misleading
          </h2>
          <p className="font-sans-narrative text-sm leading-relaxed text-[#6E5D4F]">
            Many generic wedding packages quote flat numbers that either skimp on flower quality or add hidden fees on the event day. Real wedding investments depend entirely on your specific family traditions, venue dimensions, floral choices, and guest scale.
          </p>
        </section>

        {/* Section: 5 Primary Cost Drivers */}
        <section className="space-y-6">
          <div className="border-b border-[#E8DDCD] pb-4">
            <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#34281F] font-semibold">
              The 5 Primary Cost Drivers in Wedding Planning
            </h2>
          </div>

          <div className="space-y-4">
            {costDrivers.map((driver) => (
              <div
                key={driver.title}
                className="bg-white border border-[#E8DDCD] rounded-2xl p-6 space-y-2 shadow-xs"
              >
                <h3 className="font-serif-editorial text-xl font-semibold text-[#34281F]">
                  {driver.title}
                </h3>
                <p className="font-sans-narrative text-sm text-[#6E5D4F] leading-relaxed">
                  {driver.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="space-y-6">
          <div className="border-b border-[#E8DDCD] pb-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5ECDD] border border-[#E8DDCD] mb-2">
              <HelpCircle size={12} className="text-[#B88A44]" />
              <span className="font-sans-ui text-[10px] sm:text-xs uppercase tracking-widest text-[#B88A44] font-bold">
                Direct Answers
              </span>
            </div>
            <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#34281F] font-semibold">
              Wedding Cost FAQs
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.q}
                open={index === 0}
                className="rounded-2xl border border-[#E8DDCD] bg-white open:border-[#B88A44] transition-colors"
              >
                <summary className="cursor-pointer list-none p-4 sm:p-5 font-serif-editorial text-base sm:text-lg text-[#34281F] font-semibold leading-snug">
                  <span className="mr-2 text-[#B88A44]">Q{index + 1}.</span>
                  {faq.q}
                </summary>
                <p className="px-4 pb-4 sm:px-5 sm:pb-5 font-sans-narrative text-xs sm:text-sm leading-relaxed text-[#6E5D4F]">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-[#F5ECDD]/60 border border-[#E8DDCD] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-serif-editorial text-xl sm:text-2xl text-[#34281F] font-semibold">
              Want an itemized wedding estimate?
            </h3>
            <p className="font-sans-narrative text-xs sm:text-sm text-[#6E5D4F] mt-1">
              Contact Event Director Ch. Kala Prasad for a personalized discussion.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hello%20Ch.%20Kala%20Prasad,%20I%20would%20like%20to%20request%20a%20wedding%20planning%20estimate.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <EditorialButton variant="gold" size="sm">
                <MessageCircle size={15} /> WhatsApp
              </EditorialButton>
            </a>
            <Link href="/wedding-planner-kakinada">
              <EditorialButton variant="outline" size="sm">
                Wedding Services
              </EditorialButton>
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
