import type { Metadata } from 'next';
import { createPageMetadata, getBreadcrumbSchema, getLocalBusinessSchema, getFounderPersonSchema, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Contact Studio & Consultations | Hanvi Events Kakinada',
  description: 'Connect with Event Director Ch. Kala Prasad at Hanvi Events Studio (Kakinada) for bespoke weddings, mandap design, birthday parties, and event consultations across East Godavari and Andhra Pradesh.',
  path: '/contact',
  keywords: [
    'contact Hanvi Events',
    'wedding planner Kakinada phone number',
    'event planners in Kakinada address',
    'Hanvi Events Studio Kakinada',
    'Ch Kala Prasad contact',
  ],
});

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact Studio', url: '/contact' },
  ]);

  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Hanvi Events Studio — Ch. Kala Prasad',
    url: `${SITE_URL}/contact`,
    mainEntity: {
      '@id': `${SITE_URL}/#business`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      {children}
    </>
  );
}
