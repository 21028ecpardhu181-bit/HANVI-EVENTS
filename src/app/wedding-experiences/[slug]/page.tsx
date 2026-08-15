import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { weddingExperienceTypes } from '@/lib/data/celebrations';
import { getSanityWeddingTraditions, getSacredJourneySteps } from '@/lib/sanity/fetch';
import { weddingJourneysByReligion } from '@/lib/data/stories';
import { culturalThemes, CulturalTheme } from '@/lib/theme/themeEngine';
import { siteConfig } from '@/lib/data/site';
import { TraditionExperienceClient, TraditionData } from '@/components/traditions/TraditionExperienceClient';
import { createPageMetadata } from '@/lib/seo';

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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const sanityTraditions = await getSanityWeddingTraditions();
  const allExp = sanityTraditions && sanityTraditions.length > 0 ? sanityTraditions : weddingExperienceTypes;
  const exp = findExperienceBySlug(allExp, slug);
  if (!exp) return { title: 'Wedding Tradition | Hanvi Events' };

  const norm = (slug || '').toLowerCase();
  const keywords = norm.includes('muslim')
    ? [
        'Muslim wedding planner in Kakinada',
        'Nikah stage decoration East Godavari',
        'Walima banquet organizers Andhra Pradesh',
        'best event management near me',
        'Ch Kala Prasad wedding planner',
      ]
    : norm.includes('christian')
    ? [
        'Christian wedding planner in Kakinada',
        'Cathedral church wedding decoration AP',
        'Beach resort wedding planners Vizag Godavari',
        'best event management near me',
        'Ch Kala Prasad wedding planner',
      ]
    : [
        'Hindu wedding planner in Kakinada',
        'Telugu wedding traditions planner East Godavari',
        'Vedic mandapam decoration near me',
        'Pellikuthuru ceremony planners AP',
        'best event management near me',
        'Ch Kala Prasad wedding planner',
      ];

  const title = exp.seoTitle || `${exp.title || exp.traditionTitle} in Kakinada | Hanvi Events • Ch. Kala Prasad`;
  const description = exp.seoDescription || `${exp.description} Managed by Event Director Ch. Kala Prasad across East Godavari and Andhra Pradesh.`;

  return createPageMetadata({
    title,
    description,
    path: `/wedding-experiences/${exp.slug}`,
    image: exp.heroImage,
    keywords,
  });
}

export default async function WeddingExperiencePage({ params }: PageProps) {
  const { slug } = await params;
  const sanityTraditions = await getSanityWeddingTraditions();
  const allExp = sanityTraditions && sanityTraditions.length > 0 ? sanityTraditions : weddingExperienceTypes;
  
  const currentExp = findExperienceBySlug(allExp, slug);
  if (!currentExp) {
    notFound();
  }

  // Pre-build data for all 3 traditions so client-side switching is instantaneous (0ms)
  const religionKeys = ['hindu', 'christian', 'muslim'] as const;
  const traditionsMap: Record<string, TraditionData> = {};

  await Promise.all(
    religionKeys.map(async (key) => {
      const exp = findExperienceBySlug(allExp, key);
      const theme: CulturalTheme = culturalThemes[key] || culturalThemes.hindu;

      let sanityJourneySteps = await getSacredJourneySteps(exp.slug);
      if (sanityJourneySteps.length === 0 && exp.slug !== key) {
        sanityJourneySteps = await getSacredJourneySteps(key);
      }

      const staticJourney =
        weddingJourneysByReligion.find(
          (j) =>
            j.religionId === exp.slug ||
            j.religionId === key ||
            exp.slug?.includes(j.religionId)
        ) || weddingJourneysByReligion.find((j) => j.religionId === key) || weddingJourneysByReligion[0];

      const journeySteps = sanityJourneySteps.length > 0 ? sanityJourneySteps : staticJourney.steps;
      const journeySubtitle =
        sanityJourneySteps.length > 0
          ? (exp.subtitle || exp.region || 'Sacred Ceremony Journey')
          : staticJourney.subtitle;

      traditionsMap[key] = {
        exp,
        religionKey: key,
        theme,
        journeySteps,
        journeySubtitle,
      };
    })
  );

  const rawWhatsApp = siteConfig.whatsapp ? siteConfig.whatsapp.replace(/[^0-9]/g, '') : '916305457612';

  // Schema.org structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: currentExp.title,
    description: currentExp.description,
    organizer: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      telephone: siteConfig.phone,
      address: siteConfig.address,
    },
    image: currentExp.heroImage,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TraditionExperienceClient
        initialSlug={slug}
        traditionsMap={traditionsMap}
        rawWhatsApp={rawWhatsApp}
      />
    </>
  );
}
