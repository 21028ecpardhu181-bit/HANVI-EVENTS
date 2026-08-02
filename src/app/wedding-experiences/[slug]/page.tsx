import React from 'react';
import { notFound } from 'next/navigation';
import Metadata from 'next';
import Link from 'next/link';
import { weddingExperienceTypes } from '@/lib/data/celebrations';
import { weddingJourneysByReligion } from '@/lib/data/stories';
import { culturalThemes, CulturalTheme } from '@/lib/theme/themeEngine';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { EditorialButton } from '@/components/ui/EditorialButton';
import { EditorialBadge } from '@/components/ui/EditorialBadge';
import { ImageWithSkeleton } from '@/components/ui/ImageWithSkeleton';
import { InteractiveSacredJourney } from '@/components/sections/InteractiveSacredJourney';
import { SignatureDetailsShowcase } from '@/components/sections/SignatureDetailsShowcase';
import { Calendar, ArrowLeft } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return weddingExperienceTypes.map((experience) => ({
    slug: experience.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const exp = weddingExperienceTypes.find((e) => e.slug === slug);
  if (!exp) return { title: 'Wedding Tradition | Hanvi Events' };

  return {
    title: `${exp.title} — Hanvi Events Luxury Weddings`,
    description: exp.description,
  };
}

export default async function WeddingExperiencePage({ params }: PageProps) {
  const { slug } = await params;
  const exp = weddingExperienceTypes.find((e) => e.slug === slug);

  if (!exp) {
    notFound();
  }

  // Get Cultural Theme configuration
  const theme: CulturalTheme = culturalThemes[exp.slug] || culturalThemes.hindu;
  
  // Find dedicated journey for this religion
  const journey = weddingJourneysByReligion.find((j) => j.religionId === exp.slug) || weddingJourneysByReligion[0];

  return (
    <main style={{ backgroundColor: theme.bgMain }} className="min-h-screen">
      {/* Chapter 1: Opening Scene (Cinematic Hero) */}
      <section className={`relative w-full py-16 sm:py-24 md:py-32 bg-gradient-to-b ${theme.bgHeroGradient} text-[#FCF9F5] overflow-hidden`}>
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#B88A44_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8">
          <Link
            href="/wedding-experiences"
            className="inline-flex items-center gap-2 text-xs font-sans-ui uppercase tracking-wider text-[#B88A44] hover:text-[#FCF9F5] mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Traditions
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div>
                <EditorialBadge variant="gold" className="bg-black/40 border-white/20">
                  {exp.subtitle}
                </EditorialBadge>
              </div>

              <h1 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight text-[#FCF9F5]">
                {exp.title}
              </h1>

              <p className="font-sans-narrative text-xs sm:text-base md:text-lg text-[#FCF9F5]/90 leading-relaxed font-light max-w-2xl">
                {exp.description}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a href="#book-experience">
                  <EditorialButton variant="primary" size="lg" icon={<Calendar className="w-4 h-4" />}>
                    Book Consultation →
                  </EditorialButton>
                </a>
                <a href="#sacred-journey">
                  <EditorialButton variant="outline" size="lg" className="border-white/40 text-white hover:bg-white hover:text-[#34281F]">
                    Explore Journey →
                  </EditorialButton>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 w-full">
              <ImageWithSkeleton
                src={exp.heroImage}
                alt={exp.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: The Soul & Philosophy */}
      <section className="py-12 sm:py-20 border-b border-[#E8DDCD]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <SectionHeader
            scriptEyebrow={theme.motif.headerScript}
            title="The Sacred Heritage"
            description={exp.culturalBackground}
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto bg-[#FCF9F5] border border-[#E8DDCD] rounded-3xl p-6 sm:p-8 shadow-xs">
            <div className="space-y-2">
              <span style={{ color: theme.accent }} className="font-sans-ui text-xs uppercase tracking-wider font-semibold block">
                🌸 Floral Styling & Sculpting
              </span>
              <p className="font-sans-narrative text-sm text-[#34281F] leading-relaxed">
                {theme.motif.decorStyle}
              </p>
            </div>
            <div className="space-y-2">
              <span style={{ color: theme.accent }} className="font-sans-ui text-xs uppercase tracking-wider font-semibold block">
                ✨ Ambiance & Lighting Architecture
              </span>
              <p className="font-sans-narrative text-sm text-[#34281F] leading-relaxed">
                {exp.lightingStyle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: The Sacred Journey (Interactive Magazine Layout) */}
      <section id="sacred-journey" className="py-12 sm:py-24 bg-[#F5ECDD]/30 border-b border-[#E8DDCD]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <SectionHeader
            scriptEyebrow={journey.subtitle}
            title="The Sacred Journey"
            description="From initial covenant blessings to grand banquet galas, explore every sacred milestone crafted by Hanvi Events."
            align="center"
          />

          <InteractiveSacredJourney steps={journey.steps} theme={theme} />
        </div>
      </section>

      {/* Chapter 4: Signature Details (Macro Detail Showcase) */}
      <section className="py-12 sm:py-20 border-b border-[#E8DDCD]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <SectionHeader
            scriptEyebrow="Macro Craftsmanship"
            title="Signature Details"
            description="Exquisite tactile details that make every Hanvi celebration feel handcrafted."
            align="center"
          />

          <SignatureDetailsShowcase theme={theme} />
        </div>
      </section>

      {/* Chapter 5: Moments From Real Celebrations */}
      <section className="py-12 sm:py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <SectionHeader
            scriptEyebrow="Captured Memories"
            title="Moments From Real Celebrations"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {exp.galleryImages.map((imgUrl, idx) => (
              <div key={idx} className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm border border-[#E8DDCD] group">
                <ImageWithSkeleton
                  src={imgUrl}
                  alt={`${exp.title} Photo ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter 6: Handwritten Pull Quote */}
      <section className="py-16 sm:py-24 bg-[#FCF9F5] border-t border-[#E8DDCD] text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span style={{ color: theme.accent }} className="font-script-accent text-3xl sm:text-4xl">
            Family Blessing
          </span>
          <blockquote className="font-serif-editorial text-2xl sm:text-4xl text-[#34281F] italic leading-relaxed max-w-3xl mx-auto">
            "{exp.storyQuote}"
          </blockquote>
          <span className="font-sans-ui text-xs uppercase tracking-wider text-[#6E5D4F] font-semibold block pt-3">
            — {exp.quoteAuthor}
          </span>
        </div>
      </section>

      {/* Chapter 7: Begin Your Celebration */}
      <section id="book-experience" className="py-16 sm:py-28 bg-[#34281F] text-[#FCF9F5] text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <span className="font-script-accent text-3xl sm:text-4xl text-[#B88A44]">
            Ready to begin your own story?
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-6xl text-[#FCF9F5] font-normal leading-tight">
            Reserve Your {exp.title}
          </h2>
          <p className="font-sans-narrative text-xs sm:text-base text-[#FCF9F5]/80 leading-relaxed max-w-xl mx-auto">
            Contact Event Manager Ch. Kala Prasad to discuss venue availability, floral customisation, and package details.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/919849012345?text=Hello%20Hanvi%20Events!%20I%20want%20to%20plan%20a%20${encodeURIComponent(exp.title)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <EditorialButton variant="primary" size="lg" className="w-full sm:w-auto bg-[#B88A44] hover:bg-[#a07436] text-white">
                Book via WhatsApp
              </EditorialButton>
            </a>
            <Link href="/contact" className="w-full sm:w-auto">
              <EditorialButton variant="outline" size="lg" className="w-full sm:w-auto border-white/40 text-white hover:bg-white hover:text-[#34281F]">
                Book Consultation →
              </EditorialButton>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
