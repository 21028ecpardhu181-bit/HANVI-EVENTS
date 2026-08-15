import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { weddingExperienceTypes } from '@/lib/data/celebrations';
import { getSanityWeddingTraditions } from '@/lib/sanity/fetch';
import { ImageWithSkeleton } from '@/components/ui/ImageWithSkeleton';
import { EditorialButton } from '@/components/ui/EditorialButton';
import { EditorialBadge } from '@/components/ui/EditorialBadge';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Hindu, Christian & Muslim Wedding Traditions | Hanvi Events Kakinada',
  description: 'Explore bespoke wedding traditions curated by Hanvi Events — Hindu Telugu Vedic Mandaps, Christian Cathedral Unions, and Muslim Nikah Galas in Andhra Pradesh.',
  path: '/wedding-experiences',
  keywords: ['Hindu Wedding Planner Kakinada', 'Christian Wedding Planner Kakinada', 'Muslim Wedding Planner Kakinada', 'Vedic Mandap Kakinada'],
});

export default async function WeddingExperiencesHubPage() {
  const sanityTraditions = await getSanityWeddingTraditions();
  const experiences = sanityTraditions && sanityTraditions.length > 0 ? sanityTraditions : weddingExperienceTypes;

  return (
    <main className="min-h-screen bg-[#FCF9F5]">
      {/* Hero Header */}
      <section className="relative w-full py-16 sm:py-24 md:py-32 bg-[#34281F] text-[#FCF9F5] overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#B88A44_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <EditorialBadge variant="gold">
            Vedic, Cathedral & Royal Heritage
          </EditorialBadge>

          <h1 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl font-normal leading-tight text-[#FCF9F5]">
            Choose Your Wedding Tradition
          </h1>

          <p className="font-sans-narrative text-sm sm:text-lg text-[#FCF9F5]/85 leading-relaxed font-light max-w-2xl mx-auto">
            From Vedic mandap architecture and fresh jasmine canopies to pristine cathedral aisles and royal Mughal Nikah galas, we honor every sacred ritual with bespoke spatial luxury.
          </p>
        </div>
      </section>

      {/* 3 Main Tradition Cards */}
      <section className="py-12 sm:py-20 max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {experiences.map((exp) => (
            <Link
              key={exp.id}
              href={`/wedding-experiences/${exp.slug}`}
              className="group block relative bg-[#FCF9F5] border border-[#E8DDCD] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#B88A44]/60 transition-all duration-500 transform hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <ImageWithSkeleton
                  src={exp.heroImage}
                  alt={exp.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3 right-3 z-10">
                  <EditorialBadge variant="gold" className="bg-black/50 text-white border-white/20 text-[10px]">
                    {exp.shortTitle}
                  </EditorialBadge>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4 flex-grow flex flex-col justify-between">
                <div>
                  <span className="font-script-accent text-xl text-[#B88A44] block">
                    {exp.subtitle}
                  </span>
                  <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#34281F] font-normal group-hover:text-[#B88A44] transition-colors mt-1">
                    {exp.title}
                  </h2>
                  <p className="font-sans-narrative text-xs sm:text-sm text-[#6E5D4F] leading-relaxed mt-2.5 line-clamp-3">
                    {exp.description}
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-[#E8DDCD]">
                  <span className="font-sans-ui text-xs uppercase tracking-wider text-[#34281F] group-hover:text-[#B88A44] font-semibold flex items-center gap-1.5 transition-colors">
                    <span>Explore Tradition</span>
                    <ArrowUpRight className="w-4 h-4 text-[#B88A44]" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Future Expansion Architectural Showcase */}
      <section className="py-12 sm:py-20 bg-[#F5ECDD]/40 border-t border-[#E8DDCD]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 text-center space-y-4">
          <span className="font-script-accent text-3xl text-[#B88A44]">Bespoke Styling</span>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#34281F] font-normal">
            Destination & Culture Lookbooks
          </h2>
          <p className="font-sans-narrative text-xs sm:text-base text-[#6E5D4F] max-w-xl mx-auto leading-relaxed">
            Whether planning a Telugu Vedic Muhurtham in Kakinada, a beach resort wedding in Visakhapatnam, or a destination palace union in Rajahmundry, our studio customizes every floral and lighting detail.
          </p>

          <div className="pt-6">
            <Link href="/contact">
              <EditorialButton variant="primary" size="lg">
                Discuss Custom Wedding Concept →
              </EditorialButton>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
