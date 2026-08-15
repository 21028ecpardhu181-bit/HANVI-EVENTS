import type { Metadata } from 'next';
import { createPageMetadata, getBreadcrumbSchema, getLocalBusinessSchema, getFounderPersonSchema, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Contact Ch. Kala Prasad | Best Event Management in Kakinada & AP',
  description: 'Connect directly with Event Director Ch. Kala Prasad at Hanvi Events Studio (Kakinada) for bespoke weddings, mandap decor, birthdays, cradle ceremonies & catering consultations across East Godavari and Andhra Pradesh.',
  path: '/contact',
  keywords: [
    'best event management near me',
    'contact Hanvi Events',
    'Ch Kala Prasad event manager phone number',
    'wedding planner Kakinada contact',
    'event planners in Kakinada address',
    'Hanvi Events Jagannaickpur Netaji Park',
    'event management company East Godavari phone',
    'marriage decorators Kakinada WhatsApp',
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
