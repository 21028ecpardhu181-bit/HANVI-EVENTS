import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { weddingExperienceTypes } from '@/lib/data/celebrations';
import { getSanityWeddingTraditions, getSacredJourneySteps } from '@/lib/sanity/fetch';
import { weddingJourneysByReligion } from '@/lib/data/stories';
import { culturalThemes, CulturalTheme } from '@/lib/theme/themeEngine';
import { siteConfig } from '@/lib/data/site';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { EditorialButton } from '@/components/ui/EditorialButton';
import { EditorialBadge } from '@/components/ui/EditorialBadge';
import { ImageWithSkeleton } from '@/components/ui/ImageWithSkeleton';
import { InteractiveSacredJourney } from '@/components/sections/InteractiveSacredJourney';
import { SignatureDetailsShowcase } from '@/components/sections/SignatureDetailsShowcase';
import {
  Calendar,
  ArrowLeft,
  MessageCircle,
  Sparkles,
  Palette,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function findExperienceBySlug(allExp: any[], targetSlug: string) {
  const decoded = decodeURIComponent(targetSlug || '').toLowerCase().trim();
  const normalized = slugify(decoded);

  // 1. Direct slug match
  let found = allExp.find((e) => e.slug === targetSlug || e.slug === decoded);
  if (found) return found;

  // 2. Normalized slug match
  found = allExp.find((e) => slugify(e.slug || '') === normalized);
  if (found) return found;

  // 3. Keyword matching (christian, muslim, hindu)
  for (const key of ['christian', 'muslim', 'hindu'] as const) {
    if (normalized.includes(key)) {
      found = allExp.find(
        (e) =>
          slugify(e.slug || '').includes(key) ||
          slugify(e.title || '').includes(key)
      );
      if (found) return found;
    }
  }

  // 4. Substring match on slug
  found = allExp.find((e) => {
    const s = slugify(e.slug || '');
    return s.includes(normalized) || normalized.includes(s);
  });
  if (found) return found;

  // 5. Substring match on title
  found = allExp.find((e) => {
    const t = slugify(e.title || '');
    return t.includes(normalized) || normalized.includes(t);
  });
  if (found) return found;

  // 6. Check static weddingExperienceTypes directly
  const staticFound = weddingExperienceTypes.find((st) => {
    const stSlug = slugify(st.slug);
    const stTitle = slugify(st.title);
    return (
      stSlug === normalized ||
      normalized.includes(stSlug) ||
      stSlug.includes(normalized) ||
      stTitle.includes(normalized)
    );
  });
  if (staticFound) return staticFound;

  return weddingExperienceTypes[0];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const sanityTraditions = await getSanityWeddingTraditions();
  const allExp = sanityTraditions && sanityTraditions.length > 0 ? sanityTraditions : weddingExperienceTypes;
  return allExp.map((experience) => ({
    slug: experience.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const sanityTraditions = await getSanityWeddingTraditions();
  const allExp = sanityTraditions && sanityTraditions.length > 0 ? sanityTraditions : weddingExperienceTypes;
  const exp = findExperienceBySlug(allExp, slug);
  if (!exp) return { title: 'Wedding Tradition | Hanvi Events' };

  return {
    title: `${exp.title || exp.traditionTitle} — Hanvi Events Luxury Weddings`,
    description: exp.description,
  };
}

export default async function WeddingExperiencePage({ params }: PageProps) {
  const { slug } = await params;
  const sanityTraditions = await getSanityWeddingTraditions();
  const allExp = sanityTraditions && sanityTraditions.length > 0 ? sanityTraditions : weddingExperienceTypes;
  const exp = findExperienceBySlug(allExp, slug);

  // Get Cultural Theme configuration
  const religionKey = (['christian', 'muslim', 'hindu'] as const).find(
    (key) => exp.slug?.toLowerCase().includes(key) || exp.title?.toLowerCase().includes(key)
  ) || 'hindu';

  const theme: CulturalTheme = culturalThemes[religionKey] || culturalThemes.hindu;

  // --- Sacred Journey steps: prefer Sanity CMS, fall back to static data ---
  let sanityJourneySteps = await getSacredJourneySteps(exp.slug);
  if (sanityJourneySteps.length === 0 && exp.slug !== religionKey) {
    sanityJourneySteps = await getSacredJourneySteps(religionKey);
  }

  const staticJourney =
    weddingJourneysByReligion.find(
      (j) =>
        j.religionId === exp.slug ||
        j.religionId === religionKey ||
        exp.slug.includes(j.religionId)
    ) || weddingJourneysByReligion.find((j) => j.religionId === religionKey) || weddingJourneysByReligion[0];

  const journeySteps = sanityJourneySteps.length > 0 ? sanityJourneySteps : staticJourney.steps;
  const journeySubtitle =
    sanityJourneySteps.length > 0
      ? (exp.subtitle || exp.region || 'Sacred Ceremony Journey')
      : staticJourney.subtitle;

  const rawWhatsApp = siteConfig.whatsapp ? siteConfig.whatsapp.replace(/[^0-9]/g, '') : '916305457612';
  const whatsappInquiryUrl = `https://wa.me/${rawWhatsApp}?text=${encodeURIComponent(
    `Hello Ch. Kala Prasad (Hanvi Events)! I would like to inquire about planning our ${exp.title} with custom floral decor and mandap architecture.`
  )}`;

  // Find other 2 traditions to allow quick switcher
  const otherTraditions = weddingExperienceTypes.filter((t) => t.slug !== exp.slug && t.slug !== religionKey);

  return (
    <main style={{ backgroundColor: theme.bgMain }} className="min-h-screen pt-14 sm:pt-0">
      
      {/* Chapter 1: Opening Scene (Cinematic Hero — Compact on Mobile) */}
      <section className={`relative w-full py-8 sm:py-16 md:py-24 bg-gradient-to-b ${theme.bgHeroGradient} text-[#FCF9F5] overflow-hidden`}>
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#B88A44_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-3 sm:px-6 md:px-8">
          
          {/* Top Breadcrumb & Switcher */}
          <div className="flex items-center justify-between gap-2 mb-4 sm:mb-6">
            <Link
              href="/wedding-experiences"
              className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-sans-ui uppercase tracking-wider text-[#B88A44] hover:text-[#FCF9F5] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Traditions</span>
            </Link>

            {/* Quick Switcher Tabs */}
            <div className="flex items-center gap-1 bg-black/40 backdrop-blur-xs p-1 rounded-full border border-white/15 text-[10px] sm:text-[11px] font-sans-narrative">
              <Link
                href="/wedding-experiences/hindu"
                className={`px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full transition-all ${
                  religionKey === 'hindu' ? 'bg-[#B88A44] text-white font-medium shadow-2xs' : 'text-white/60 hover:text-white'
                }`}
              >
                Hindu
              </Link>
              <Link
                href="/wedding-experiences/christian"
                className={`px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full transition-all ${
                  religionKey === 'christian' ? 'bg-[#B88A44] text-white font-medium shadow-2xs' : 'text-white/60 hover:text-white'
                }`}
              >
                Christian
              </Link>
              <Link
                href="/wedding-experiences/muslim"
                className={`px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full transition-all ${
                  religionKey === 'muslim' ? 'bg-[#B88A44] text-white font-medium shadow-2xs' : 'text-white/60 hover:text-white'
                }`}
              >
                Muslim
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-12 items-center">
            
            {/* Left Col: Info & Quick Action */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2">
                <EditorialBadge variant="gold" className="bg-black/50 border-white/25 text-[10px] sm:text-xs">
                  {exp.subtitle}
                </EditorialBadge>
              </div>

              <h1 className="font-serif-editorial text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-[#FCF9F5]">
                {exp.title}
              </h1>

              <p className="font-sans-narrative text-xs sm:text-base text-[#FCF9F5]/90 leading-relaxed font-light line-clamp-3 sm:line-clamp-none">
                {exp.description}
              </p>

              {/* Action Buttons Row */}
              <div className="pt-2 flex flex-wrap items-center gap-2.5">
                <a href="#book-experience" className="shrink-0">
                  <EditorialButton variant="primary" size="sm" icon={<Calendar className="w-3.5 h-3.5" />} className="text-xs sm:text-sm">
                    Book Consultation →
                  </EditorialButton>
                </a>
                <a href="#sacred-journey" className="shrink-0">
                  <EditorialButton variant="outline" size="sm" className="border-white/40 text-white hover:bg-white hover:text-[#34281F] text-xs sm:text-sm">
                    Explore Journey →
                  </EditorialButton>
                </a>
                <Link href="/wizard" className="shrink-0">
                  <EditorialButton variant="glass" size="sm" className="text-white border-white/30 hover:bg-white/20 text-xs sm:text-sm">
                    Plan in 4 Steps ⇄
                  </EditorialButton>
                </Link>
              </div>
            </div>

            {/* Right Col: Hero Visual Thumbnail */}
            <div className="lg:col-span-5 relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-white/15 w-full">
              <ImageWithSkeleton
                src={exp.heroImage}
                alt={exp.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="font-sans-ui text-[9px] uppercase tracking-wider text-[#B88A44] font-semibold block">
                  Managed Personally by
                </span>
                <span className="font-serif-editorial text-sm sm:text-base font-medium">
                  Ch. Kala Prasad • Event Director
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Chapter 2: The Soul & Cultural Heritage (Compact on Mobile) */}
      <section className="py-8 sm:py-16 border-b border-[#E8DDCD]">
        <div className="max-w-[1280px] mx-auto px-3 sm:px-6 md:px-8">
          <SectionHeader
            scriptEyebrow={theme.motif.headerScript}
            title="The Sacred Heritage"
            description={exp.culturalBackground}
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 max-w-4xl mx-auto mt-4 sm:mt-8">
            <div className="space-y-1.5 bg-[#FCF9F5] border border-[#E8DDCD] rounded-2xl p-4 sm:p-6 shadow-2xs">
              <span style={{ color: theme.accent }} className="font-sans-ui text-xs uppercase tracking-wider font-semibold block flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>🌸 Floral Architecture</span>
              </span>
              <p className="font-sans-narrative text-xs sm:text-sm text-[#34281F] leading-relaxed">
                {exp.floralStyle || theme.motif.decorStyle}
              </p>
            </div>

            <div className="space-y-1.5 bg-[#FCF9F5] border border-[#E8DDCD] rounded-2xl p-4 sm:p-6 shadow-2xs">
              <span style={{ color: theme.accent }} className="font-sans-ui text-xs uppercase tracking-wider font-semibold block flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>✨ Ambiance & Lighting</span>
              </span>
              <p className="font-sans-narrative text-xs sm:text-sm text-[#34281F] leading-relaxed">
                {exp.lightingStyle}
              </p>
            </div>
          </div>

          {/* Color Palette Swatches — Compact Grid */}
          {exp.paletteSwatches && exp.paletteSwatches.length > 0 && (
            <div className="mt-4 sm:mt-6 max-w-4xl mx-auto bg-[#FCF9F5] border border-[#E8DDCD] rounded-2xl p-4 sm:p-6 shadow-2xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3 pb-2 border-b border-[#E8DDCD]">
                <span className="font-sans-ui text-[11px] uppercase tracking-wider text-[#B88A44] font-semibold flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5" />
                  <span>Ceremonial Color Palette</span>
                </span>
                <p className="font-sans-narrative text-[11px] text-[#6E5D4F]">
                  {exp.paletteDescription}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {exp.paletteSwatches.map((swatch: { name: string; hex: string }, idx: number) => (
                  <div
                    key={idx}
                    className="p-2 sm:p-2.5 rounded-xl bg-[#F5ECDD]/40 border border-[#E8DDCD] flex items-center gap-2"
                  >
                    <span
                      className="w-6 h-6 rounded-full shadow-2xs shrink-0 border border-black/10"
                      style={{ backgroundColor: swatch.hex }}
                    />
                    <div className="overflow-hidden">
                      <span className="font-serif-editorial text-xs text-[#34281F] font-semibold block truncate">
                        {swatch.name}
                      </span>
                      <span className="font-sans-ui text-[9px] text-[#6E5D4F] uppercase tracking-wider block">
                        {swatch.hex}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Chapter 3: The Sacred Journey */}
      <section id="sacred-journey" className="py-8 sm:py-16 bg-[#F5ECDD]/30 border-b border-[#E8DDCD]">
        <div className="max-w-[1280px] mx-auto px-3 sm:px-6 md:px-8">
          <SectionHeader
            scriptEyebrow={journeySubtitle}
            title="The Sacred Journey"
            description="From initial covenant blessings to grand banquet galas, explore every sacred milestone crafted by Hanvi Events."
            align="center"
          />

          <div className="mt-4 sm:mt-8">
            <InteractiveSacredJourney steps={journeySteps} theme={theme} />
          </div>
        </div>
      </section>

      {/* Chapter 4: Ritual Milestones (Horizontal Snap Carousel on Mobile) */}
      {exp.ritualMilestones && exp.ritualMilestones.length > 0 && (
        <section className="py-8 sm:py-16 border-b border-[#E8DDCD]">
          <div className="max-w-[1280px] mx-auto px-3 sm:px-6 md:px-8">
            <SectionHeader
              scriptEyebrow="Key Ceremonial Stages"
              title="Ritual Architecture & Milestones"
              description="Detailed spatial staging crafted specifically for each ceremony."
              align="center"
            />

            <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-4 sm:mt-8 overflow-x-auto scrollbar-hide snap-x -mx-3 px-3 sm:mx-0 sm:px-0 py-1">
              {exp.ritualMilestones.map((m: any, idx: number) => (
                <div
                  key={idx}
                  className="w-[220px] sm:w-auto shrink-0 snap-start bg-[#FCF9F5] border border-[#E8DDCD] rounded-2xl p-4 sm:p-5 shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <span className="font-sans-ui text-[10px] font-bold text-[#B88A44] bg-[#B88A44]/15 px-2 py-0.5 rounded-full inline-block">
                      Stage {m.step || `0${idx + 1}`}
                    </span>
                    <h3 className="font-serif-editorial text-sm sm:text-lg text-[#34281F] font-normal leading-snug">
                      {m.title}
                    </h3>
                    <p className="font-sans-narrative text-[11px] text-[#6E5D4F] leading-snug line-clamp-3">
                      {m.description}
                    </p>
                  </div>

                  <div className="pt-2 mt-2 border-t border-[#E8DDCD] text-[10px] font-sans-narrative text-[#34281F]">
                    <span className="font-semibold text-[#B88A44] block uppercase tracking-wider">
                      Staging:
                    </span>
                    <span className="text-[#6E5D4F] text-[10px] leading-tight block mt-0.5 line-clamp-2">
                      {m.spatialDecor}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Chapter 5: Signature Details (Macro Craftsmanship) */}
      <section className="py-8 sm:py-16 border-b border-[#E8DDCD]">
        <div className="max-w-[1280px] mx-auto px-3 sm:px-6 md:px-8">
          <SectionHeader
            scriptEyebrow="Macro Craftsmanship"
            title="Signature Details"
            description="Exquisite tactile details that make every Hanvi celebration feel handcrafted."
            align="center"
          />

          <SignatureDetailsShowcase theme={theme} />
        </div>
      </section>

      {/* Chapter 6: Signature Architectural Features */}
      {exp.signatureFeatures && exp.signatureFeatures.length > 0 && (
        <section className="py-8 sm:py-16 bg-[#FCF9F5] border-b border-[#E8DDCD]">
          <div className="max-w-[1280px] mx-auto px-3 sm:px-6 md:px-8">
            <SectionHeader
              scriptEyebrow="Bespoke Hanvi Craft"
              title="Exclusive Signature Features"
              description="Distinctive amenities and setups provided exclusively by our event studio."
              align="center"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 max-w-4xl mx-auto mt-4 sm:mt-8">
              {exp.signatureFeatures.map((feat: any, idx: number) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-[#FFF9F0] via-[#FDF3E3] to-[#F5E6CC] border border-[#B88A44]/50 rounded-2xl p-4 sm:p-6 shadow-2xs space-y-1.5"
                >
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#B88A44]" />
                    <h3 className="font-serif-editorial text-base sm:text-xl text-[#34281F] font-normal">
                      {feat.title}
                    </h3>
                  </div>
                  <p className="font-sans-narrative text-xs text-[#6E5D4F] leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Chapter 7: Moments From Real Celebrations (Horizontal Snap on Mobile) */}
      <section className="py-8 sm:py-16">
        <div className="max-w-[1280px] mx-auto px-3 sm:px-6 md:px-8">
          <SectionHeader
            scriptEyebrow="Captured Memories"
            title="Moments From Real Celebrations"
            description="Visual vignettes captured at live weddings across Andhra Pradesh."
            align="center"
          />

          <div className="flex sm:grid sm:grid-cols-3 gap-3 sm:gap-5 mt-4 sm:mt-8 overflow-x-auto scrollbar-hide snap-x -mx-3 px-3 sm:mx-0 sm:px-0 py-1">
            {(exp.galleryImages || []).map((imgUrl: string, idx: number) => (
              <div key={idx} className="w-[220px] sm:w-auto shrink-0 snap-start relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xs border border-[#E8DDCD] group">
                <ImageWithSkeleton
                  src={imgUrl}
                  alt={`${exp.title} Photo ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2 left-2 text-white text-[10px] font-sans-ui opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>{exp.shortTitle} • Kakinada Staging</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter 8: Family Blessing & Review */}
      <section className="py-8 sm:py-16 bg-[#FCF9F5] border-t border-[#E8DDCD] text-center">
        <div className="max-w-3xl mx-auto px-3 space-y-2.5">
          <span style={{ color: theme.accent }} className="font-script-accent text-2xl sm:text-3xl">
            Family Blessing & Review
          </span>
          <blockquote className="font-serif-editorial text-lg sm:text-3xl text-[#34281F] italic leading-relaxed max-w-2xl mx-auto">
            "{exp.storyQuote}"
          </blockquote>
          <span className="font-sans-ui text-[11px] uppercase tracking-wider text-[#6E5D4F] font-semibold block pt-1">
            — {exp.quoteAuthor}
          </span>
        </div>
      </section>

      {/* Chapter 9: Frequently Asked Questions */}
      {exp.faq && exp.faq.length > 0 && (
        <section className="py-8 sm:py-16 bg-[#F5ECDD]/30 border-t border-[#E8DDCD]">
          <div className="max-w-3xl mx-auto px-3 sm:px-6">
            <SectionHeader
              scriptEyebrow="Clarifications & Planning"
              title="Frequently Asked Questions"
              align="center"
            />

            <div className="space-y-2.5 sm:space-y-3 mt-4 sm:mt-8">
              {exp.faq.map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="p-3.5 sm:p-5 bg-[#FCF9F5] border border-[#E8DDCD] rounded-xl sm:rounded-2xl shadow-2xs space-y-1"
                >
                  <h4 className="font-serif-editorial text-sm sm:text-base text-[#34281F] font-medium flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-[#B88A44] shrink-0" />
                    <span>{item.question}</span>
                  </h4>
                  <p className="font-sans-narrative text-[11px] sm:text-xs text-[#6E5D4F] leading-relaxed pl-5">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Chapter 10: Switch to Other Traditions */}
      {otherTraditions.length > 0 && (
        <section className="py-8 sm:py-12 bg-[#FCF9F5] border-t border-[#E8DDCD]">
          <div className="max-w-[1280px] mx-auto px-3 sm:px-6 md:px-8">
            <span className="font-sans-ui text-[11px] uppercase tracking-wider text-[#B88A44] font-semibold block mb-2 text-center">
              Explore Other Wedding Traditions
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-2xl mx-auto mt-3">
              {otherTraditions.map((trad) => (
                <Link
                  key={trad.id}
                  href={`/wedding-experiences/${trad.slug}`}
                  className="p-3 sm:p-4 rounded-xl bg-[#F5ECDD]/40 border border-[#E8DDCD] hover:border-[#B88A44] hover:bg-[#F5ECDD] transition-all flex items-center justify-between group"
                >
                  <div>
                    <span className="font-serif-editorial text-sm sm:text-base text-[#34281F] font-semibold group-hover:text-[#B88A44] block">
                      {trad.title}
                    </span>
                    <span className="font-sans-narrative text-[11px] text-[#6E5D4F] block">
                      {trad.subtitle}
                    </span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B88A44] group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Chapter 11: Final Consultation CTA */}
      <section id="book-experience" className="py-10 sm:py-20 bg-[#34281F] text-[#FCF9F5] text-center">
        <div className="max-w-3xl mx-auto px-3 sm:px-6 space-y-4 sm:space-y-6">
          <span className="font-script-accent text-2xl sm:text-4xl text-[#B88A44]">
            Ready to begin your own story?
          </span>
          <h2 className="font-serif-editorial text-2xl sm:text-5xl text-[#FCF9F5] font-normal leading-tight">
            Reserve Your {exp.title}
          </h2>
          <p className="font-sans-narrative text-xs sm:text-base text-[#FCF9F5]/80 leading-relaxed max-w-xl mx-auto">
            Contact Event Manager <strong>Ch. Kala Prasad</strong> to discuss date availability, custom mandap framing, and package options.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4">
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <EditorialButton
                variant="primary"
                size="md"
                className="w-full sm:w-auto bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white shadow-sm hover:brightness-110"
                icon={<MessageCircle className="w-4 h-4 fill-white" />}
              >
                Discuss via WhatsApp
              </EditorialButton>
            </a>

            <Link href="/wizard" className="w-full sm:w-auto">
              <EditorialButton
                variant="gold"
                size="md"
                className="w-full sm:w-auto"
              >
                Launch 4-Step Planner →
              </EditorialButton>
            </Link>

            <Link href="/contact" className="w-full sm:w-auto">
              <EditorialButton
                variant="outline"
                size="md"
                className="w-full sm:w-auto border-white/40 text-white hover:bg-white hover:text-[#34281F]"
              >
                Store & Studio Details
              </EditorialButton>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
