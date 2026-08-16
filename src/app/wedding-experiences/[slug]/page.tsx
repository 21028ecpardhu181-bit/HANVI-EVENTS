import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { weddingExperienceTypes } from '@/lib/data/celebrations';
import { getSanityWeddingTraditions, getSacredJourneySteps } from '@/lib/sanity/fetch';
import { weddingJourneysByReligion } from '@/lib/data/stories';
import { culturalThemes, CulturalTheme } from '@/lib/theme/themeEngine';
import { siteConfig } from '@/lib/data/site';
import { TraditionExperienceClient, TraditionData } from '@/components/traditions/TraditionExperienceClient';
import { createPageMetadata, SITE_URL } from '@/lib/seo';

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
  const title = exp.seoTitle || (norm.includes('muslim')
    ? 'Muslim Nikah & Walima Celebrations in Kakinada | Hanvi Events'
    : norm.includes('christian')
    ? 'Christian Wedding Celebrations & Cathedral Decor in Kakinada | Hanvi Events'
    : 'Telugu Hindu Wedding Traditions & Vedic Mandaps | Hanvi Events');

  const keywords = norm.includes('muslim')
    ? [
        'Muslim wedding traditions',
        'Nikah stage decoration Kakinada',
        'Walima celebrations East Godavari',
        'Hanvi Events wedding experiences',
      ]
    : norm.includes('christian')
    ? [
        'Christian wedding planning Kakinada',
        'Cathedral church decoration Andhra Pradesh',
        'Beach wedding planning Godavari',
        'Hanvi Events',
      ]
    : [
        'Telugu Hindu wedding traditions',
        'Vedic mandap design Kakinada',
        'Pellikuthuru ceremony planning',
        'traditional marriage rituals Andhra Pradesh',
      ];

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

  // Schema.org structured data (Service & BreadcrumbList)
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: currentExp.title || currentExp.traditionTitle,
    serviceType: 'Wedding Planning & Ritual Design',
    description: currentExp.description,
    provider: {
      '@id': `${SITE_URL}/#business`,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Andhra Pradesh',
    },
    image: currentExp.heroImage,
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Wedding Traditions', item: `${SITE_URL}/wedding-experiences` },
      { '@type': 'ListItem', position: 3, name: currentExp.title || currentExp.traditionTitle, item: `${SITE_URL}/wedding-experiences/${currentExp.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <TraditionExperienceClient
        initialSlug={slug}
        traditionsMap={traditionsMap}
        rawWhatsApp={rawWhatsApp}
      />
    </>
  );
}
