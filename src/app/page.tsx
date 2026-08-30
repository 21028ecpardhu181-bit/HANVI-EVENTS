import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { QuickEventSearch } from '@/components/sections/QuickEventSearch';
import { TrustIndicatorsSection } from '@/components/sections/TrustIndicatorsSection';
import { ChooseCelebrationSection } from '@/components/sections/ChooseCelebrationSection';
import { CelebrationPlannerSection } from '@/components/sections/CelebrationPlannerSection';
import { WeddingTypesSection } from '@/components/sections/WeddingTypesSection';
import { TeamShowcaseSection } from '@/components/sections/TeamShowcaseSection';
import { OurCraftSection } from '@/components/sections/OurCraftSection';
import { LatestMomentsSection } from '@/components/sections/LatestMomentsSection';
import { FaqAuthoritySection } from '@/components/sections/FaqAuthoritySection';
import { EmotionalCtaSection } from '@/components/sections/EmotionalCtaSection';
import {
  getSanityServices,
  getSanityWeddingTraditions,
  getSanityGalleryMedia,
  getSanityTeamMembers,
} from '@/lib/sanity/fetch';

export default async function HomePage() {
  const [services, weddingTraditions, galleryMedia, teamMembers] = await Promise.all([
    getSanityServices(),
    getSanityWeddingTraditions(),
    getSanityGalleryMedia(),
    getSanityTeamMembers(),
  ]);

  return (
    <div className="flex flex-col w-full relative pb-12 sm:pb-0">
      {/* 1. Opening Scene: Emotional Cinema Hero */}
      <HeroSection />

      {/* 2. Instant Search: Availability & Budget Search */}
      <QuickEventSearch />

      {/* 3. Trust & Badges */}
      <TrustIndicatorsSection />

      {/* 4. Discovery: Asymmetric Celebration Grid */}
      <ChooseCelebrationSection items={services} />

      {/* 5. Interactive Planner: Early Pricing & Budget Estimator */}
      <CelebrationPlannerSection />

      {/* 6. Tradition Discovery: Choose Your Wedding Tradition */}
      <WeddingTypesSection items={weddingTraditions} />

      {/* 7. Inspiration & Crafted Fine Art */}
      <OurCraftSection />

      {/* 8. Dynamic Team Showcase */}
      <TeamShowcaseSection members={teamMembers} />

      {/* 9. Merged Media: Latest Moments (Instagram Reels + YouTube Cinema Films) */}
      <LatestMomentsSection items={galleryMedia} />

      {/* 10. Local Authority FAQ & Direct Answer Block (AEO / GEO Engine) */}
      <FaqAuthoritySection />

      {/* 11. Final Studio Consultation CTA */}
      <EmotionalCtaSection />
    </div>
  );
}
