import React from 'react';
import { notFound } from 'next/navigation';
import { weddingJourneySteps } from '@/lib/data/stories';
import { ImageWithSkeleton } from '@/components/ui/ImageWithSkeleton';
import { EditorialBadge } from '@/components/ui/EditorialBadge';
import { EditorialButton } from '@/components/ui/EditorialButton';

export default async function JourneyStepDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const step = weddingJourneySteps.find((s) => s.slug === slug);

  if (!step) {
    notFound();
  }

  return (
    <div className="pt-24 pb-20 bg-[#FCF9F5]">
      
      <section className="relative w-full py-20 bg-[#34281F] text-[#FCF9F5]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 text-center flex flex-col items-center">
          <EditorialBadge variant="gold">Step {step.stepNumber} of 06 • {step.timing}</EditorialBadge>
          <h1 className="font-serif-editorial text-4xl md:text-6xl text-[#FCF9F5] font-normal mt-3">
            {step.title} ({step.teluguName})
          </h1>
          <p className="font-script-accent text-2xl md:text-3xl text-[#B88A44] mt-2">
            {step.tagline}
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 md:px-8 mt-12 space-y-10">
        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl">
          <ImageWithSkeleton src={step.heroImage} alt={step.title} fill className="object-cover" />
        </div>

        <div className="space-y-4 font-sans-narrative text-sm text-[#6E5D4F] leading-relaxed">
          <p>{step.description}</p>
        </div>

        <div className="bg-[#F5ECDD]/40 border border-[#E8DDCD] rounded-3xl p-6 md:p-8 space-y-4">
          <h3 className="font-serif-editorial text-2xl text-[#34281F]">
            Custom Decor Highlights
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans-narrative text-xs text-[#34281F]">
            {step.decorIdeas.map((idea, idx) => (
              <li key={idx} className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B88A44]" />
                <span>{idea}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
}
