import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  PartyPopper,
  HelpCircle,
  MessageCircle,
  Cake,
  Gift,
  Smile,
  Calendar,
} from 'lucide-react';
import { EditorialButton } from '@/components/ui/EditorialButton';
import { siteConfig } from '@/lib/data/site';
import { getBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'How to Plan a Birthday Party in Kakinada — Planning Guide | Hanvi Events',
  description:
    'A practical planning guide for milestone 1st birthdays, Barasala cradle ceremonies, and kids theme parties in Kakinada — themes, decor, games, and catering tips.',
  alternates: {
    canonical: 'https://www.hanvievents.com/guides/birthday-party-planning-kakinada',
  },
};

export default function BirthdayPartyPlanningGuidePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Guides', url: '/guides' },
    { name: 'Birthday Party Planning in Kakinada', url: '/guides/birthday-party-planning-kakinada' },
  ]);

  const planningSteps = [
    {
      step: '1. Select an Age-Appropriate Theme',
      desc: 'For 1st birthdays, choose soft pastel dreamscapes, jungle safari, or royal prince/princess concepts. For older kids, superhero adventures, space exploration, and carnival setups work brilliantly.',
    },
    {
      step: '2. Reserve the Right Venue in Kakinada',
      desc: 'Choose between an intimate home terrace, society clubhouse, or AC hotel banquet hall depending on guest count and weather. Ensure adequate height for balloon arches and 3D backdrops.',
    },
    {
      step: '3. Staging, Balloon Arches & Cake Table Setup',
      desc: 'Work with your planner to design a customized backdrop featuring organic balloon garlands, 3D character props, neon light signages, and a bespoke cake cutting pedestal.',
    },
    {
      step: '4. Plan Engaging Entertainment & Activities',
      desc: 'Keep young guests thrilled with professional party anchors (MC), live magic shows, character mascots, tattoo artists, and interactive group games with prizes.',
    },
    {
      step: '5. Coordinate Kid-Friendly Food & Live Stalls',
      desc: 'Combine a balanced family dinner buffet with fun live food counters like freshly spun cotton candy, warm popcorn carts, chocolate fountains, and mini slider stations.',
    },
  ];

  const faqs = [
    {
      q: 'How much time in advance should we plan a 1st birthday party in Kakinada?',
      a: 'We recommend starting theme discussions 2 to 4 weeks before the birthday date. This provides ample time to design custom backdrop graphics, fabricate props, and coordinate entertainment.',
    },
    {
      q: 'Can Hanvi Events coordinate cradle ceremonies (Barasala) alongside birthday planning?',
      a: 'Yes. We specialize in traditional Telugu Barasala cradle setups with fresh floral swings, marigold drops, brass urulis, and family elder seating.',
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
            <PartyPopper size={14} className="text-[#B88A44]" />
            <span className="font-sans-ui text-xs uppercase tracking-widest text-[#B88A44] font-bold">
              Birthday & Milestone Guide
            </span>
          </div>

          <h1 className="font-serif-editorial text-3xl sm:text-5xl text-[#34281F] font-semibold leading-tight">
            How to Plan a Birthday Party or Milestone in Kakinada
          </h1>

          <p className="font-sans-narrative text-base sm:text-lg text-[#6E5D4F] leading-relaxed">
            From magical 1st birthday universes to traditional Barasala naming ceremonies and vibrant kids parties — here is the step-by-step roadmap to hosting an unforgettable family celebration.
          </p>
        </div>

        {/* 5-Step Planning Roadmap */}
        <section className="space-y-6">
          <div className="border-b border-[#E8DDCD] pb-4">
            <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#34281F] font-semibold">
              The 5-Step Birthday Planning Roadmap
            </h2>
          </div>

          <div className="space-y-4">
            {planningSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white border border-[#E8DDCD] rounded-2xl p-6 space-y-2 shadow-xs"
              >
                <h3 className="font-serif-editorial text-xl font-semibold text-[#34281F]">
                  {step.step}
                </h3>
                <p className="font-sans-narrative text-sm text-[#6E5D4F] leading-relaxed">
                  {step.desc}
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
              Birthday Planning FAQs
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
              Ready to plan your child’s celebration?
            </h3>
            <p className="font-sans-narrative text-xs sm:text-sm text-[#6E5D4F] mt-1">
              Share your theme ideas with Hanvi Events for a tailored stage concept.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hello%20Ch.%20Kala%20Prasad,%20I%20would%20like%20to%20inquire%20about%20birthday%20party%20planning.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <EditorialButton variant="gold" size="sm">
                <MessageCircle size={15} /> WhatsApp
              </EditorialButton>
            </a>
            <Link href="/birthday-party-organisers-kakinada">
              <EditorialButton variant="outline" size="sm">
                Birthday Services
              </EditorialButton>
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
