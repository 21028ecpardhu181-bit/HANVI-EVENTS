import React from 'react';
import { Metadata } from 'next';
import { getSanityTeamMembers } from '@/lib/sanity/fetch';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TeamShowcaseSection } from '@/components/sections/TeamShowcaseSection';

export const metadata: Metadata = {
  title: 'Our Team — Master Event Directors & Stylists | Hanvi Events Kakinada',
  description: 'Meet Founder & Event Director Ch. Kala Prasad and our expert team of floral architects, mandap stylists, and technical production leads.',
  openGraph: {
    title: 'Our Team — Hanvi Events Kakinada',
    description: 'Bespoke wedding planning, mandap architecture & milestone celebrations directed by Ch. Kala Prasad.',
  },
};

export default async function TeamPage() {
  const teamMembers = await getSanityTeamMembers();

  return (
    <div className="pt-28 pb-24 bg-[#FCF9F5]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <SectionHeader
          scriptEyebrow="Est. 2018 in Kakinada • Dedicated Directorship"
          title="Meet Our Studio Team"
          description="Every sacred wedding mandap, sangeet concert, and corporate gala is directed by our passionate team of artists and production specialists."
          align="center"
        />

        <TeamShowcaseSection members={teamMembers} showTitle={false} />
      </div>
    </div>
  );
}
