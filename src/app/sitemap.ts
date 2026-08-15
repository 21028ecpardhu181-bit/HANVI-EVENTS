import { MetadataRoute } from 'next';
import { getAllServices } from '@/lib/data/services';
import { weddingJourneySteps } from '@/lib/data/stories';
import { staticTeamMembers } from '@/lib/data/team';
import { SITE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || SITE_URL;
  const services = getAllServices();

  const staticPages = [
    '',
    '/wizard',
    '/services',
    '/celebrations',
    '/wedding-journey',
    '/wedding-experiences',
    '/gallery',
    '/team',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const servicePages = services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const journeyPages = weddingJourneySteps.map((s) => ({
    url: `${baseUrl}/wedding-journey/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  const teamPages = staticTeamMembers.map((m) => ({
    url: `${baseUrl}/team/${m.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages, ...journeyPages, ...teamPages];
}
