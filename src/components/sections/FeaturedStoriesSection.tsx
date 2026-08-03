'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { storyCaseStudies } from '@/lib/data/stories';
import { SectionHeader } from '../ui/SectionHeader';
import { EditorialButton } from '../ui/EditorialButton';
import { EditorialBadge } from '../ui/EditorialBadge';
import { ImageWithSkeleton } from '../ui/ImageWithSkeleton';
import { staggerContainerVariants, fadeUpVariants } from '@/animations/variants';

export interface FeaturedStoriesSectionProps {
  stories?: any[];
}

export const FeaturedStoriesSection: React.FC<FeaturedStoriesSectionProps> = ({ stories }) => {
  const displayStories = stories && stories.length > 0 ? stories : storyCaseStudies;

  return (
    <section className="py-8 md:py-20 bg-[#F5ECDD]/40 border-y border-[#E8DDCD]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        <SectionHeader
          scriptEyebrow="Real Celebrations • Handcrafted Memories"
          title="Featured Family Stories"
          description="Explore authentic photo essays of marriages, sangeet, and milestone galas designed by Ch. Kala Prasad."
          align="center"
        />

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="space-y-6 md:space-y-12 mt-6 md:mt-12"
        >
          {displayStories.slice(0, 2).map((story, idx) => (
            <motion.div
              key={story.id}
              variants={fadeUpVariants}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-8 items-center bg-[#FCF9F5] border border-[#E8DDCD] rounded-3xl p-4 sm:p-8 shadow-sm hover:shadow-hover transition-all duration-500 w-full ${
                idx === 1 ? 'hidden md:grid' : ''
              } ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:col-span-7 relative aspect-[16/9] sm:aspect-[16/10] rounded-2xl overflow-hidden shadow-sm w-full">
                <ImageWithSkeleton
                  src={story.heroImage}
                  alt={story.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="lg:col-span-5 space-y-3">
                <div>
                  <EditorialBadge variant="gold" className="text-[10px] px-2 py-0.5">
                    {story.celebrationType} • {story.location}
                  </EditorialBadge>
                </div>

                <h3 className="font-serif-editorial text-xl sm:text-3xl text-[#34281F] font-normal leading-tight">
                  {story.title}
                </h3>

                <p className="font-sans-narrative text-xs sm:text-sm text-[#6E5D4F] leading-relaxed italic line-clamp-2 sm:line-clamp-3">
                  "{story.quote}"
                </p>

                <div className="pt-1">
                  <Link
                    href={`/stories/${story.slug}`}
                    className="font-sans-ui text-xs uppercase tracking-wider text-[#B88A44] font-semibold flex items-center gap-1.5 hover:underline"
                  >
                    <span>View Story</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-6 md:mt-10 text-center">
          <Link href="/stories">
            <EditorialButton variant="secondary" size="md">
              Explore All Stories →
            </EditorialButton>
          </Link>
        </div>

      </div>
    </section>
  );
};
