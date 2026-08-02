'use client';

import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { EventWizard } from '../wizard/EventWizard';

export const CelebrationPlannerSection: React.FC = () => {
  return (
    <section id="planner" className="relative py-16 md:py-28 bg-[#FCF9F5]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        
        <SectionHeader
          scriptEyebrow="Get a personalized recommendation & instant quote"
          title="Plan Your Celebration in 4 Steps"
          description="Select your celebration type, estimated guests, budget range, and event date to receive a complete requirements sheet for direct consultation."
          align="center"
        />

        <div className="mt-8 md:mt-12">
          <EventWizard />
        </div>

      </div>
    </section>
  );
};
