import type { Metadata } from 'next';
import { createPageMetadata, getBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Contact Hanvi Events | Luxury Event & Wedding Planner in Kakinada',
  description: 'Contact Hanvi Events in Kakinada for wedding planning, mandap decoration, birthdays, corporate events, catering, and celebration design consultations.',
  path: '/contact',
  keywords: ['Contact Hanvi Events', 'Wedding Planner Kakinada Contact', 'Event Planner Kakinada Phone'],
});

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
