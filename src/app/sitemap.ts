import { MetadataRoute } from 'next';
import { getAllServices } from '@/lib/data/services';
import { weddingJourneySteps } from '@/lib/data/stories';
import { staticTeamMembers } from '@/lib/data/team';
import { weddingExperienceTypes } from '@/lib/data/celebrations';
import { staticProjects } from '@/lib/data/projects';
import { SITE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || SITE_URL;
  const services = getAllServices();

  const staticPages = [
    '',
    '/about',
    '/event-management-company-kakinada',
    '/wedding-planner-kakinada',
    '/mandap-decorators-kakinada',
    '/projects',
    '/wizard',
    '/services',
    '/celebrations',
    '/wedding-journey',
    '/wedding-experiences',
    '/wedding-experiences/hindu',
    '/wedding-experiences/christian',
    '/wedding-experiences/muslim',
    '/gallery',
    '/team',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' || route === '/about' || route === '/event-management-company-kakinada' ? 1.0 : 0.9,
  }));

  const projectPages = staticProjects
    .filter((p) => p.published)
    .map((p) => ({
      url: `${baseUrl}/projects/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    }));

  const servicePages = services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.95,
  }));

  const traditionPages = weddingExperienceTypes.map((t) => ({
    url: `${baseUrl}/wedding-experiences/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
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
    priority: m.slug === 'kala-prasad' ? 0.95 : 0.8,
  }));

  return [...staticPages, ...projectPages, ...servicePages, ...traditionPages, ...journeyPages, ...teamPages];
}
