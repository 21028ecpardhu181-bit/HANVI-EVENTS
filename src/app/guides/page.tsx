import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Sparkles,
  BookOpen,
  ArrowRight,
  Calculator,
  Flower2,
  ListChecks,
  Compass,
  PartyPopper,
} from 'lucide-react';
import { getBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Event & Wedding Planning Guides — Kakinada & Andhra Pradesh | Hanvi Events',
  description:
    'Expert planning guides, Telugu wedding ceremony checklists, mandap cost factors, and buyer advice by Hanvi Events in Kakinada.',
  alternates: {
    canonical: 'https://www.hanvievents.com/guides',
  },
};

export default function GuidesIndexPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Guides & Planning Resources', url: '/guides' },
  ]);

  const guides = [
    {
      slug: 'wedding-planning-cost-kakinada',
      icon: Calculator,
      category: 'Cost & Budgeting',
      title: 'How Much Does Wedding Planning Cost in Kakinada?',
      description:
        'A comprehensive guide to understanding wedding planning investments, mandap and catering cost drivers, and getting transparent estimates in Kakinada.',
      readTime: '6 min read',
    },
    {
      slug: 'wedding-decoration-cost-kakinada',
      icon: Flower2,
      category: 'Decor & Mandaps',
      title: 'Wedding Decoration & Mandap Cost Guide in Kakinada',
      description:
        'Factors that influence floral mandap pricing, temple bell setups, acrylic staging, fresh jasmine sourcing, and reception backdrops.',
      readTime: '5 min read',
    },
    {
      slug: 'telugu-wedding-planning-checklist',
      icon: ListChecks,
      category: 'Telugu Traditions',
      title: 'Complete Telugu Wedding Planning Checklist & Timeline',
      description:
        'The step-by-step ceremony sequence from Nischithardham, Pellikuthuru, Snathakam to sacred Vedic Muhurtham and Talambralu timing.',
      readTime: '8 min read',
    },
    {
      slug: 'how-to-choose-wedding-planner-kakinada',
      icon: Compass,
      category: 'Buyer Guide',
      title: 'How to Choose the Right Wedding Planner in Kakinada',
      description:
        'Essential questions to ask, verification criteria, portfolio evaluation, contract clarity, and avoiding hidden vendor charges.',
      readTime: '5 min read',
    },
    {
      slug: 'birthday-party-planning-kakinada',
      icon: PartyPopper,
      category: 'Milestones & Birthdays',
      title: 'How to Plan a Milestone Birthday or Cradle Ceremony in Kakinada',
      description:
        'Theme selection, venue choices, balloon and floral staging, interactive entertainment, and catering coordination for family celebrations.',
      readTime: '5 min read',
    },
  ];

  return (
    <main className="min-h-screen bg-[#FCF9F5] text-[#34281F] pt-24 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5ECDD] border border-[#E8DDCD]">
            <BookOpen size={14} className="text-[#B88A44]" />
            <span className="font-sans-ui text-xs uppercase tracking-widest text-[#B88A44] font-bold">
              Knowledge & Planning Hub
            </span>
          </div>

          <h1 className="font-serif-editorial text-3xl sm:text-5xl text-[#34281F] font-semibold leading-tight">
            Event & Wedding Planning Guides
          </h1>

          <p className="font-sans-narrative text-base sm:text-lg text-[#6E5D4F] leading-relaxed">
            Practical advice, Telugu wedding cultural traditions, realistic budgeting factors, and planning checklists authored by the production team at Hanvi Events.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => {
            const IconComp = guide.icon;
            return (
              <article
                key={guide.slug}
                className="bg-white border border-[#E8DDCD] rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs hover:border-[#B88A44] transition-colors flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-[10px] uppercase font-sans-ui font-bold tracking-widest px-2.5 py-1 rounded-full bg-[#F5ECDD] text-[#B88A44]">
                      {guide.category}
                    </span>
                    <span className="text-xs font-sans-ui text-[#6E5D4F]">
                      {guide.readTime}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-[#F5ECDD] flex items-center justify-center text-[#B88A44]">
                    <IconComp size={20} />
                  </div>

                  <h2 className="font-serif-editorial text-xl sm:text-2xl font-semibold text-[#34281F] leading-snug">
                    <Link
                      href={`/guides/${guide.slug}`}
                      className="hover:text-[#B88A44] transition-colors"
                    >
                      {guide.title}
                    </Link>
                  </h2>

                  <p className="font-sans-narrative text-xs sm:text-sm text-[#6E5D4F] leading-relaxed">
                    {guide.description}
                  </p>
                </div>

                <Link
                  href={`/guides/${guide.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-sans-ui text-[#B88A44] hover:underline pt-2 font-medium"
                >
                  Read Full Guide <ArrowRight size={12} />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
