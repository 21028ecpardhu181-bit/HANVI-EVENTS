import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { storyCaseStudies } from '@/lib/data/stories';
import { getSanityStories } from '@/lib/sanity/fetch';
import { ImageWithSkeleton } from '@/components/ui/ImageWithSkeleton';
import { EditorialBadge } from '@/components/ui/EditorialBadge';
import { EditorialButton } from '@/components/ui/EditorialButton';

export default async function StoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sanityStories = await getSanityStories();
  const allStories = sanityStories && sanityStories.length > 0 ? sanityStories : storyCaseStudies;
  const story = allStories.find((s) => s.slug === slug || s.slug === decodeURIComponent(slug));

  if (!story) {
    notFound();
  }

  return (
    <div className="pt-24 pb-20 bg-[#FCF9F5]">
      
      <section className="relative w-full h-[55vh] min-h-[400px] flex items-center justify-center bg-[#34281F]">
        <ImageWithSkeleton
          src={story.heroImage}
          alt={story.title}
          fill
          className="object-cover opacity-40"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-[#FCF9F5] space-y-3">
          <EditorialBadge variant="gold">{story.celebrationType} • {story.location}</EditorialBadge>
          <h1 className="font-serif-editorial text-4xl md:text-6xl text-[#FCF9F5] font-normal">
            {story.title}
          </h1>
          <div className="flex items-center justify-center space-x-4 text-xs font-sans-ui uppercase tracking-wider text-[#B88A44]">
            <span>{story.coupleNames}</span>
            <span>•</span>
            <span>{story.guestCount} Guests</span>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 md:px-8 mt-12 space-y-10">
        <blockquote className="p-8 bg-[#F5ECDD]/40 border-l-4 border-[#B88A44] rounded-r-3xl font-serif-editorial text-2xl text-[#34281F] italic">
          "{story.quote}"
        </blockquote>

        <div className="prose prose-stone max-w-none space-y-4 font-sans-narrative text-sm text-[#6E5D4F] leading-relaxed">
          {story.narrative.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        <div className="pt-6 text-center">
          <Link href="/contact">
            <EditorialButton variant="primary">
              Plan Your Celebration Like This →
            </EditorialButton>
          </Link>
        </div>
      </div>

    </div>
  );
}
