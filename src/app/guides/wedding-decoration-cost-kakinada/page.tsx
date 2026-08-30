import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Flower2,
  HelpCircle,
  MessageCircle,
  Layers,
  Palette,
  ShieldCheck,
} from 'lucide-react';
import { EditorialButton } from '@/components/ui/EditorialButton';
import { siteConfig } from '@/lib/data/site';
import { getBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Wedding Decoration & Mandap Cost Guide in Kakinada — Hanvi Events',
  description:
    'A practical guide to wedding mandap decoration costs in Kakinada — covering fresh jasmine domes, temple bell setups, acrylic stages, and reception backdrops.',
  alternates: {
    canonical: 'https://www.hanvievents.com/guides/wedding-decoration-cost-kakinada',
  },
};

export default function WeddingDecorationCostGuidePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Guides', url: '/guides' },
    { name: 'Wedding Decoration Cost in Kakinada', url: '/guides/wedding-decoration-cost-kakinada' },
  ]);

  const decorTiers = [
    {
      title: 'Traditional Temple Bell & Marigold Mandap',
      desc: 'Golden pillars, brass bells, fresh yellow/orange marigold garlands, brass diyas, and floating lotus urulis. Classic, culturally authentic, and cost-effective.',
    },
    {
      title: 'Fresh Botanical Floral Dome Mandap',
      desc: 'Dense overhead floral canopy handcrafted with fragrant Jasmine (Mallepoovu), Rajanigandha, and Bangalore Dutch roses. High floral volume requiring overnight cold-chain preparation.',
    },
    {
      title: 'Contemporary Acrylic, Mirror & LED Staging',
      desc: 'Reflective mirror floors, transparent acrylic arches, soft pastel carnations and hydrangeas, and integrated ambient LED warm spotlights. Modern and elegant.',
    },
    {
      title: 'Royal Heritage Carved Fiber Architecture',
      desc: '3D intricately carved temple sanctum panels, gold leafing, custom sanctum domes, and massive structural staging designed for large convention halls.',
    },
  ];

  const faqs = [
    {
      q: 'How does fresh flower selection affect mandap decoration pricing?',
      a: 'Locally sourced flowers like Marigold and seasonal tuberose are more economical, whereas high-volume Jasmine (Mallepoovu), imported Dutch roses, Lilies, and Orchids increase floral investment due to cold-chain transport and delicate handling.',
    },
    {
      q: 'Are entrance arches and walkway lighting included in mandap decoration?',
      a: 'We customize the decor scope based on your venue. Complete stage and mandap decor can be bundled with grand entrance arches, red carpets, floral photo booths, and walkway light stands.',
    },
    {
      q: 'How early should mandap decoration be confirmed?',
      a: 'We recommend confirming your mandap style and color theme 3 to 6 weeks in advance to allow time for structural fabrication and fresh flower reservations.',
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
            <Flower2 size={14} className="text-[#B88A44]" />
            <span className="font-sans-ui text-xs uppercase tracking-widest text-[#B88A44] font-bold">
              Mandap & Decor Guide
            </span>
          </div>

          <h1 className="font-serif-editorial text-3xl sm:text-5xl text-[#34281F] font-semibold leading-tight">
            Wedding Decoration & Mandap Cost Guide in Kakinada
          </h1>

          <p className="font-sans-narrative text-base sm:text-lg text-[#6E5D4F] leading-relaxed">
            From sacred South Indian Vedic temple mandaps to modern reception backdrops — understand what determines decoration investments in Kakinada and East Godavari.
          </p>
        </div>

        {/* Section: Decor Styles & Investment Factors */}
        <section className="space-y-6">
          <div className="border-b border-[#E8DDCD] pb-4">
            <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#34281F] font-semibold">
              Mandap Design Styles & Cost Factors
            </h2>
            <p className="font-sans-narrative text-sm text-[#6E5D4F] mt-1">
              The four major styles requested by families across Kakinada and the Godavari belt.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {decorTiers.map((tier) => (
              <div
                key={tier.title}
                className="bg-white border border-[#E8DDCD] rounded-2xl p-6 space-y-2 shadow-xs"
              >
                <h3 className="font-serif-editorial text-xl font-semibold text-[#34281F]">
                  {tier.title}
                </h3>
                <p className="font-sans-narrative text-xs sm:text-sm text-[#6E5D4F] leading-relaxed">
                  {tier.desc}
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
              Decoration FAQs
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
              Discuss your custom mandap design
            </h3>
            <p className="font-sans-narrative text-xs sm:text-sm text-[#6E5D4F] mt-1">
              Contact Event Director Ch. Kala Prasad for design recommendations and quotes.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hello%20Ch.%20Kala%20Prasad,%20I%20would%20like%20to%20discuss%20mandap%20decoration%20options.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <EditorialButton variant="gold" size="sm">
                <MessageCircle size={15} /> WhatsApp
              </EditorialButton>
            </a>
            <Link href="/mandap-decorators-kakinada">
              <EditorialButton variant="outline" size="sm">
                View Mandap Styles
              </EditorialButton>
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
