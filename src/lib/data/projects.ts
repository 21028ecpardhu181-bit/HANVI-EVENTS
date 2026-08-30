export interface CaseStudyProject {
  id: string;
  slug: string;
  title: string;
  eventType: 'Wedding' | 'Birthday' | 'Mandap' | 'Corporate';
  location: string;
  venue?: string;
  date: string;
  guestCount?: number;
  services: string[];
  designStyle: string;
  description: string;
  challengeAndExecution: string;
  photos: string[];
  videoUrl?: string;
  testimonial?: { quote: string; author: string; location?: string };
  /** Written client permission covering names, venue and project facts. */
  consentStatus: boolean;
  /** Rights-managed first-party asset reference; never use stock imagery as proof. */
  sourceAsset: string;
  /** Written client permission for the exact testimonial. */
  testimonialPermission: boolean;
  /** Explicit editorial decision to display this case study. */
  published: boolean;
  updatedAt: string;
}

// Intentionally empty: sample or stock material must never be presented as a Hanvi event.
export const staticProjects: CaseStudyProject[] = [];

export function isPublicProject(project: CaseStudyProject): boolean {
  return project.published
    && project.consentStatus
    && Boolean(project.sourceAsset)
    && project.photos.length > 0
    && (!project.testimonial || project.testimonialPermission);
}

export function getPublicProjects(): CaseStudyProject[] {
  return staticProjects.filter(isPublicProject);
}

export function getProjectBySlug(slug: string): CaseStudyProject | undefined {
  const norm = slug.toLowerCase().trim();
  return getPublicProjects().find((p) => p.slug.toLowerCase() === norm || p.id.toLowerCase() === norm);
}
