import React from 'react';
import { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav';
import { EventWizard } from '@/components/wizard/EventWizard';

export const metadata: Metadata = {
  title: '4-Step Event Planning Wizard | Hanvi Events Kakinada',
  description: 'Plan your marriage, birthday, engagement, catering, or corporate celebration in 4 simple steps. Get instant package estimates and connect with Ch. Kala Prasad.',
  keywords: [
    'Event Planning Wizard',
    'Hanvi Events Planner',
    'Wedding Cost Calculator Kakinada',
    'Event Estimator Andhra Pradesh',
    'Marriage Planning Tool',
  ],
  openGraph: {
    title: '4-Step Event Planning Wizard | Hanvi Events',
    description: 'Interactive celebration planner for weddings, birthdays, catering, and venue bookings.',
    url: 'https://hanvievents.com/wizard',
    siteName: 'Hanvi Events',
    type: 'website',
  },
  alternates: {
    canonical: 'https://hanvievents.com/wizard',
  },
};

export default function WizardPage() {
  return (
    <div className="pt-24 md:pt-28 pb-24 bg-[#FCF9F5]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-6">
          <BreadcrumbNav items={[{ label: 'Event Planning Wizard' }]} />
        </div>

        {/* Header */}
        <SectionHeader
          scriptEyebrow="Est. 2018 in Kakinada • Supervised by Ch. Kala Prasad"
          title="Interactive Event Planning Wizard"
          description="Select your celebration type, guest count, budget, and date to generate a complete requirements sheet for direct consultation."
          align="center"
        />

        {/* Wizard Container */}
        <div className="mt-8 md:mt-12">
          <EventWizard />
        </div>

      </div>
    </div>
  );
}
