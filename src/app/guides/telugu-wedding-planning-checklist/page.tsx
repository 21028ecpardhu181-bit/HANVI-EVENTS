import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ListChecks,
  CheckCircle2,
  Calendar,
  Sparkles,
  HelpCircle,
  MessageCircle,
} from 'lucide-react';
import { EditorialButton } from '@/components/ui/EditorialButton';
import { siteConfig } from '@/lib/data/site';
import { getBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Complete Telugu Wedding Planning Checklist & Timeline — Hanvi Events',
  description:
    'A comprehensive Telugu wedding checklist covering ceremony sequence, Muhurtham timing, Vedic rituals, mandap requirements, and month-by-month planning timeline.',
  alternates: {
    canonical: 'https://www.hanvievents.com/guides/telugu-wedding-planning-checklist',
  },
};

export default function TeluguWeddingChecklistGuidePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Guides', url: '/guides' },
    { name: 'Telugu Wedding Planning Checklist', url: '/guides/telugu-wedding-planning-checklist' },
  ]);

  const ritualSequence = [
    {
      ritual: '1. Nischithardham (Formal Engagement)',
      desc: 'The official match agreement conducted at the bride’s home or banquet hall with Lagnapatrika reading, ring exchange, and auspicious gifts.',
    },
    {
      ritual: '2. Pellikuthuru & Pellikoduku (Haldi Ceremonies)',
      desc: 'Family elders apply fragrant turmeric paste and aromatic oils to the bride and groom, followed by Mangala Snanam (sacred bath) and auspicious gifting.',
    },
    {
      ritual: '3. Snathakam & Kasi Yatra',
      desc: 'Sacred thread ritual for the groom marking passage into grihastha ashram, followed by the playful Kasi Yatra tradition where the bride’s father persuades him to marry.',
    },
    {
      ritual: '4. Gauri Puja & Bridal Entry',
      desc: 'The bride performs sacred Gauri Puja praying for marital prosperity before making her ceremonial entry to the wedding mandap in a doli or under a floral chadar.',
    },
    {
      ritual: '5. Sacred Muhurtham (Jeelakarra Bellam)',
      desc: 'The defining Vedic moment. At the exact Muhurtham second, bride and groom place cumin seeds and jaggery paste on each other’s heads symbolizing unbreakable union.',
    },
    {
      ritual: '6. Kanyadanam & Mangalsutra Dharana',
      desc: 'Parents bestow the bride into the groom’s family, followed by tying of the two sacred gold discs (Mangalasutram) with three Vedic knots.',
    },
    {
      ritual: '7. Talambralu & Saptapadi (Seven Sacred Steps)',
      desc: 'Joyful showering of sacred pearl and turmeric-colored rice (Talambralu), followed by Saptapadi around the sacred havan fire and ring searching games.',
    },
    {
      ritual: '8. Grand Evening Reception',
      desc: 'Glamorous stage setup, couple photo-shoots, celebratory speeches, live music, and royal multi-cuisine banquet feast for all extended guests.',
    },
  ];

  const timelineSteps = [
    {
      time: '6 Months Prior',
      tasks: 'Finalize wedding date with family astrologer (Muhurtham), book convention hall / Kalyana Mandapam, hire wedding planner & event director.',
    },
    {
      time: '3 Months Prior',
      tasks: 'Finalize mandap theme & floral concepts, book catering menu & tasting, reserve candid photographer & cinema videographer, order wedding invitations.',
    },
    {
      time: '1 Month Prior',
      tasks: 'Confirm Haldi & Sangeet choreography, finalize welcome hostesses & guest hotel bookings, schedule bridal makeup trials at Kakinada studio.',
    },
    {
      time: '1 Week Prior',
      tasks: 'Reconfirm ritual pooja item lists with family priest, verify guest transport logistics, conduct final production walkthrough at the venue.',
    },
  ];

  const faqs = [
    {
      q: 'Why is a structured checklist critical for Telugu weddings?',
      a: 'Telugu weddings involve multiple sacred rituals with precise astrological Muhurtham timings. Having a structured checklist ensures that all Vedic pooja ingredients, mandap setup, and guest logistics are synchronized without stress.',
    },
    {
      q: 'Can Hanvi Events coordinate priest requirements and traditional pooja items?',
      a: 'Yes. Our team works closely with your family priests to ensure all ceremonial requirements (Gangalam water basins, brass diyas, sacred havan kund, coconuts, and talambralu bowls) are fully prepared before rituals begin.',
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
            <ListChecks size={14} className="text-[#B88A44]" />
            <span className="font-sans-ui text-xs uppercase tracking-widest text-[#B88A44] font-bold">
              Telugu Traditions & Timeline Guide
            </span>
          </div>

          <h1 className="font-serif-editorial text-3xl sm:text-5xl text-[#34281F] font-semibold leading-tight">
            Complete Telugu Wedding Planning Checklist & Timeline
          </h1>

          <p className="font-sans-narrative text-base sm:text-lg text-[#6E5D4F] leading-relaxed">
            A comprehensive guide to the sacred rituals, ceremonial sequence, and month-by-month planning timeline for authentic South Indian Telugu weddings in Kakinada and East Godavari.
          </p>
        </div>

        {/* Section: Ritual Sequence */}
        <section className="space-y-6">
          <div className="border-b border-[#E8DDCD] pb-4">
            <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#34281F] font-semibold">
              The 8 Sacred Telugu Wedding Ceremonies in Sequence
            </h2>
            <p className="font-sans-narrative text-sm text-[#6E5D4F] mt-1">
              Every stage of the Vedic marriage journey from engagement to reception.
            </p>
          </div>

          <div className="space-y-4">
            {ritualSequence.map((item) => (
              <div
                key={item.ritual}
                className="bg-white border border-[#E8DDCD] rounded-2xl p-6 space-y-2 shadow-xs"
              >
                <h3 className="font-serif-editorial text-xl font-semibold text-[#34281F]">
                  {item.ritual}
                </h3>
                <p className="font-sans-narrative text-sm text-[#6E5D4F] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Planning Timeline */}
        <section className="bg-white border border-[#E8DDCD] rounded-2xl p-6 sm:p-8 space-y-6">
          <h2 className="font-serif-editorial text-2xl text-[#34281F] font-semibold">
            Month-by-Month Telugu Wedding Timeline
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {timelineSteps.map((step) => (
              <div key={step.time} className="p-4 rounded-xl bg-[#FCF9F5] border border-[#E8DDCD] space-y-2">
                <span className="font-sans-ui text-xs font-bold uppercase tracking-widest text-[#B88A44] block">
                  {step.time}
                </span>
                <p className="font-sans-narrative text-xs sm:text-sm text-[#6E5D4F] leading-relaxed">
                  {step.tasks}
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
              Telugu Wedding Planning FAQs
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
              Planning your Telugu wedding?
            </h3>
            <p className="font-sans-narrative text-xs sm:text-sm text-[#6E5D4F] mt-1">
              Connect with Hanvi Events for authentic ritual orchestration and mandap design.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hello%20Ch.%20Kala%20Prasad,%20I%20would%20like%20to%20discuss%20Telugu%20wedding%20planning.`}
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
