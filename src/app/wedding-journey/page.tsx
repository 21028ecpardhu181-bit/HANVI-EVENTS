import React from 'react';
import Link from 'next/link';
import { weddingJourneySteps } from '@/lib/data/stories';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { EditorialBadge } from '@/components/ui/EditorialBadge';
import { ImageWithSkeleton } from '@/components/ui/ImageWithSkeleton';

export default function WeddingJourneyPage() {
  return (
    <div className="pt-28 pb-24 bg-[#FCF9F5]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        <SectionHeader
          scriptEyebrow="6 Sacred Ceremony Steps"
          title="Hanvi's Signature Wedding Journey"
          description="From engagement to reception, we guide families through every traditional Andhra ritual with sacred architecture and floral artistry."
          align="center"
        />

        <div className="space-y-12 mt-12">
          {weddingJourneySteps.map((step, idx) => (
            <div
              key={step.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F5ECDD]/40 border border-[#E8DDCD] rounded-3xl p-6 md:p-8 ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md">
                <ImageWithSkeleton
                  src={step.heroImage}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 z-10">
                  <EditorialBadge variant="gold">Step {step.stepNumber} of 06</EditorialBadge>
                </div>
              </div>

              <div className="lg:col-span-6 flex flex-col justify-center space-y-4">
                <span className="font-script-accent text-3xl text-[#B88A44]">{step.teluguName}</span>
                <h2 className="font-serif-editorial text-3xl md:text-4xl text-[#34281F]">
                  {step.title}
                </h2>

                <p className="font-sans-narrative text-xs md:text-sm text-[#6E5D4F] leading-relaxed">
                  {step.description}
                </p>

                <div className="pt-2">
                  <Link
                    href={`/wedding-journey/${step.slug}`}
                    className="font-sans-ui text-xs uppercase tracking-wider text-[#B88A44] font-semibold hover:underline"
                  >
                    Explore Step Details →
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
