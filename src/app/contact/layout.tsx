import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Contact Hanvi Events | Luxury Event & Wedding Planner in Kakinada',
  description: 'Contact Hanvi Events in Kakinada for wedding planning, mandap decoration, birthdays, corporate events, catering, and celebration design consultations.',
  path: '/contact',
  keywords: ['Contact Hanvi Events', 'Wedding Planner Kakinada Contact', 'Event Planner Kakinada Phone'],
});

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
