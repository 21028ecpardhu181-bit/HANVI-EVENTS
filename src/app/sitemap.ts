import { MetadataRoute } from 'next';
import { getAllServices } from '@/lib/data/services';
import { weddingJourneySteps } from '@/lib/data/stories';
import { staticTeamMembers } from '@/lib/data/team';
import { weddingExperienceTypes } from '@/lib/data/celebrations';
import { getPublicProjects } from '@/lib/data/projects';
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
    '/birthday-party-organisers-kakinada',
    '/corporate-event-management-kakinada',
    '/event-management-rajahmundry',
    '/wedding-planner-rajahmundry',
    '/event-management-east-godavari',
    '/guides',
    '/guides/wedding-planning-cost-kakinada',
    '/guides/wedding-decoration-cost-kakinada',
    '/guides/telugu-wedding-planning-checklist',
    '/guides/how-to-choose-wedding-planner-kakinada',
    '/guides/birthday-party-planning-kakinada',
    '/team/ch-kala-prasad',
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
    changeFrequency: 'weekly' as const,
    priority:
      route === '' ||
      route === '/about' ||
      route === '/event-management-company-kakinada' ||
      route === '/wedding-planner-kakinada'
        ? 1.0
        : 0.9,
  }));

  const projectPages = getPublicProjects()
    .map((p) => ({
      url: `${baseUrl}/projects/${p.slug}`,
      lastModified: p.updatedAt,
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    }));

  const servicePages = services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    changeFrequency: 'weekly' as const,
    priority: 0.95,
  }));

  const traditionPages = weddingExperienceTypes.map((t) => ({
    url: `${baseUrl}/wedding-experiences/${t.slug}`,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const journeyPages = weddingJourneySteps.map((s) => ({
    url: `${baseUrl}/wedding-journey/${s.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  const teamPages = staticTeamMembers.map((m) => ({
    url: `${baseUrl}/team/${m.slug}`,
    changeFrequency: 'monthly' as const,
    priority: m.slug === 'kala-prasad' ? 0.95 : 0.8,
  }));

  return [...staticPages, ...projectPages, ...servicePages, ...traditionPages, ...journeyPages, ...teamPages];
}
