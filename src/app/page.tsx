import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { QuickEventSearch } from '@/components/sections/QuickEventSearch';
import { TrustIndicatorsSection } from '@/components/sections/TrustIndicatorsSection';
import { ChooseCelebrationSection } from '@/components/sections/ChooseCelebrationSection';
import { CelebrationPlannerSection } from '@/components/sections/CelebrationPlannerSection';
import { WeddingTypesSection } from '@/components/sections/WeddingTypesSection';
import { FeaturedStoriesSection } from '@/components/sections/FeaturedStoriesSection';
import { OurCraftSection } from '@/components/sections/OurCraftSection';
import { LatestMomentsSection } from '@/components/sections/LatestMomentsSection';
import { EmotionalCtaSection } from '@/components/sections/EmotionalCtaSection';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full relative pb-12 sm:pb-0">
      {/* 1. Opening Scene: Emotional Cinema Hero */}
      <HeroSection />

      {/* 2. Instant Search: Availability & Budget Search */}
      <QuickEventSearch />

      {/* 3. Trust & Badges */}
      <TrustIndicatorsSection />

      {/* 4. Discovery: Asymmetric Celebration Grid */}
      <ChooseCelebrationSection />

      {/* 5. Interactive Planner: Early Pricing & Budget Estimator */}
      <CelebrationPlannerSection />

      {/* 6. Tradition Discovery: Choose Your Wedding Tradition (3 Apple-style Cards) */}
      <WeddingTypesSection />

      {/* 7. Inspiration & Crafted Fine Art */}
      <FeaturedStoriesSection />
      <OurCraftSection />

      {/* 8. Merged Media: Latest Moments (Instagram Reels + YouTube Cinema Films) */}
      <LatestMomentsSection />

      {/* 9. Final Studio Consultation CTA */}
      <EmotionalCtaSection />
    </div>
  );
}
