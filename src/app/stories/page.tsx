import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { storyCaseStudies } from '@/lib/data/stories';
import { getSanityStories } from '@/lib/sanity/fetch';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ImageWithSkeleton } from '@/components/ui/ImageWithSkeleton';
import { EditorialBadge } from '@/components/ui/EditorialBadge';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Wedding Stories & Event Case Studies | Hanvi Events Kakinada',
  description: 'Explore real wedding, sangeet, birthday, and gala celebrations designed by Hanvi Events in Kakinada and across Andhra Pradesh.',
  path: '/stories',
  keywords: ['Wedding Stories Kakinada', 'Event Planning Case Studies', 'Hanvi Events Weddings', 'Real Telugu Weddings Kakinada'],
});

export default async function StoriesPage() {
  const sanityStories = await getSanityStories();
  const stories = sanityStories && sanityStories.length > 0 ? sanityStories : storyCaseStudies;

  return (
    <div className="pt-24 sm:pt-28 pb-24 bg-[#FCF9F5]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        <SectionHeader
          scriptEyebrow="Real Celebrations • Handcrafted Memories"
          title="Featured Family Stories"
          description="Explore authentic photo essays of marriages, sangeet, and milestone galas designed by Ch. Kala Prasad."
          align="center"
        />

        <div className="space-y-8 md:space-y-12 mt-6 md:mt-12">
          {stories.map((story, idx) => (
            <div
              key={story.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center bg-[#F5ECDD]/30 border border-[#E8DDCD] rounded-3xl p-4 sm:p-8 ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md">
                <ImageWithSkeleton
                  src={story.heroImage}
                  alt={story.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="lg:col-span-5 space-y-3 sm:space-y-4">
                <EditorialBadge variant="gold">
                  {story.celebrationType} • {story.location}
                </EditorialBadge>

                <h2 className="font-serif-editorial text-xl sm:text-3xl text-[#34281F]">
                  {story.title}
                </h2>

                <p className="font-sans-narrative text-xs sm:text-sm text-[#6E5D4F] leading-relaxed line-clamp-4">
                  "{story.quote}"
                </p>

                <div className="pt-2">
                  <Link
                    href={`/stories/${story.slug}`}
                    className="font-sans-ui text-xs uppercase tracking-wider text-[#B88A44] font-semibold hover:underline"
                  >
                    Read Full Story →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
