import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Compass,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  MessageCircle,
} from 'lucide-react';
import { EditorialButton } from '@/components/ui/EditorialButton';
import { siteConfig } from '@/lib/data/site';
import { getBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'How to Choose the Right Wedding Planner in Kakinada — Hanvi Events',
  description:
    'A buyer guide for couples and families in Kakinada — what to ask, what to verify, avoiding hidden fees, and choosing an authentic wedding planning studio.',
  alternates: {
    canonical: 'https://www.hanvievents.com/guides/how-to-choose-wedding-planner-kakinada',
  },
};

export default function HowToChooseWeddingPlannerGuidePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Guides', url: '/guides' },
    { name: 'How to Choose a Wedding Planner in Kakinada', url: '/guides/how-to-choose-wedding-planner-kakinada' },
  ]);

  const criteria = [
    {
      title: '1. Verified Physical Studio & Leadership',
      desc: 'Always choose a wedding planner with a physical office or design studio in Kakinada where you can sit down with the event director in person. Avoid virtual brokers without on-ground fabrication teams.',
    },
    {
      title: '2. Real Project Proof vs Stock Photos',
      desc: 'Ask to review actual video footage and unedited photographs of recent Telugu weddings they have executed locally. Verify that the portfolio reflects their actual work rather than downloaded internet images.',
    },
    {
      title: '3. Itemized & Transparent Written Estimates',
      desc: 'Professional planners provide transparent, itemized quotes separating mandap fabrication, floral costs, lighting, sound, hospitality hostesses, and coordination fees. Avoid vague blanket packages.',
    },
    {
      title: '4. Vedic Cultural Depth & Ceremony Expertise',
      desc: 'Your planner must understand the exact sequence and timing of Telugu Muhurtham traditions — including Jeelakarra Bellam, Gauri Puja, and Talambralu — to coordinate smoothly with your family priests.',
    },
    {
      title: '5. In-House Staging & Floral Management',
      desc: 'Planners with direct floral procurement and in-house staging fabrication ensure structural safety, overnight setups, and crisp fresh flower preservation for early morning rituals.',
    },
  ];

  const redFlags = [
    'Demanding large cash advances without a formal itemized contract.',
    'Inability to provide unedited video proof of completed local weddings.',
    'Quoting unrealistically cheap prices that compromise on fresh flowers or truss safety.',
    'Lack of a dedicated on-ground day-of coordinator at the wedding venue.',
  ];

  const faqs = [
    {
      q: 'When is the best time to hire a wedding planner in Kakinada?',
      a: 'Ideal timing is 2 to 6 months prior to the wedding date, right after your family confirms the marriage Muhurtham and reserves the kalyana mandapam or convention center.',
    },
    {
      q: 'What is the role of Event Director Ch. Kala Prasad at Hanvi Events?',
      a: 'At Hanvi Events, Event Director Ch. Kala Prasad personally oversees the entire creative design, vendor logistics, priest coordination, and day-of execution on site for our clients.',
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
            <Compass size={14} className="text-[#B88A44]" />
            <span className="font-sans-ui text-xs uppercase tracking-widest text-[#B88A44] font-bold">
              Buyer Guide & Evaluation
            </span>
          </div>

          <h1 className="font-serif-editorial text-3xl sm:text-5xl text-[#34281F] font-semibold leading-tight">
            How to Choose the Right Wedding Planner in Kakinada
          </h1>

          <p className="font-sans-narrative text-base sm:text-lg text-[#6E5D4F] leading-relaxed">
            Hiring the right wedding planner is the single most important decision for a peaceful, magnificent wedding. Here is an essential checklist of what to look for and what pitfalls to avoid.
          </p>
        </div>

        {/* 5 Essential Criteria */}
        <section className="space-y-6">
          <div className="border-b border-[#E8DDCD] pb-4">
            <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#34281F] font-semibold">
              5 Essential Criteria When Selecting a Wedding Planner
            </h2>
          </div>

          <div className="space-y-4">
            {criteria.map((c) => (
              <div
                key={c.title}
                className="bg-white border border-[#E8DDCD] rounded-2xl p-6 space-y-2 shadow-xs"
              >
                <h3 className="font-serif-editorial text-xl font-semibold text-[#34281F]">
                  {c.title}
                </h3>
                <p className="font-sans-narrative text-sm text-[#6E5D4F] leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Red Flags to Avoid */}
        <section className="bg-white border border-[#E8DDCD] rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-[#B88A44]">
            <AlertTriangle size={18} />
            <h2 className="font-serif-editorial text-2xl text-[#34281F] font-semibold">
              Warning Signs & Red Flags to Avoid
            </h2>
          </div>

          <div className="space-y-2 font-sans-narrative text-sm text-[#6E5D4F]">
            {redFlags.map((flag) => (
              <div key={flag} className="flex items-start gap-2.5">
                <span className="text-[#B88A44] font-bold text-base mt-0.5">•</span>
                <p>{flag}</p>
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
              Frequently Asked Questions
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
              Speak directly with our Event Director
            </h3>
            <p className="font-sans-narrative text-xs sm:text-sm text-[#6E5D4F] mt-1">
              Visit our Kakinada studio or connect via WhatsApp for an open consultation.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hello%20Ch.%20Kala%20Prasad,%20I%20would%20like%20to%20schedule%20a%20wedding%20consultation.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <EditorialButton variant="gold" size="sm">
                <MessageCircle size={15} /> WhatsApp
              </EditorialButton>
            </a>
            <Link href="/about">
              <EditorialButton variant="outline" size="sm">
                About Studio
              </EditorialButton>
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
