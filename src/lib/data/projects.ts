export interface CaseStudyProject {
  id: string;
  slug: string;
  title: string;
  eventType: 'Wedding' | 'Birthday' | 'Mandap' | 'Corporate';
  clientName?: string;
  location: string;
  venue: string;
  date: string;
  guestCount?: number;
  services: string[];
  designStyle: string;
  description: string;
  challengeAndExecution: string;
  photos: string[];
  videoUrl?: string;
  testimonial?: {
    quote: string;
    author: string;
    location: string;
  };
  // Privacy & Governance Metadata
  consentStatus: boolean;
  published: boolean;
  sourceAsset: string;
  testimonialPermission: boolean;
}

export const staticProjects: CaseStudyProject[] = [
  {
    id: 'kakinada-telugu-wedding-mandap',
    slug: 'telugu-wedding-mandap-kakinada',
    title: 'Traditional Floral Mandap & Wedding Production',
    eventType: 'Mandap',
    clientName: 'Reddy Family Wedding',
    location: 'Kakinada, Andhra Pradesh',
    venue: 'Subhamasthu Royal Banquet, Kakinada',
    date: '2026',
    guestCount: 600,
    services: [
      'Vedic Mandap Architecture',
      'Fresh Jasmine & Marigold Canopy',
      'Stage Lighting & Acoustic Sound',
      'Guest Hospitality Management',
    ],
    designStyle: 'South Indian Temple Bell Motif with Fresh Florals',
    description:
      'A grand traditional Telugu Muhurtham mandap featuring red marigold suspensions, fragrant jasmine garlands, and gold-gilded temple pillars.',
    challengeAndExecution:
      'The client requested an authentic Vedic altar that retained warmth under high-definition photography lighting. Our team fabricated a ventilated timber framework topped with imported Dutch roses and natural brass oil lamps.',
    photos: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
    ],
    testimonial: {
      quote:
        'Ch. Kala Prasad garu and the Hanvi Events team executed our family wedding mandap flawlessly. Every floral detail was fresh and perfectly aligned for the Muhurtham.',
      author: 'Reddy Family',
      location: 'Kakinada',
    },
    consentStatus: true,
    published: true,
    sourceAsset: 'Internal Archive #2026-KW-01',
    testimonialPermission: true,
  },
  {
    id: 'kakinada-reception-stage-gala',
    slug: 'luxury-reception-stage-kakinada',
    title: 'Contemporary Acrylic & Rose Reception Stage',
    eventType: 'Wedding',
    clientName: 'Venkata & Sravanthi Reception',
    location: 'Kakinada, Andhra Pradesh',
    venue: 'Grand Convention Center, Kakinada',
    date: '2025',
    guestCount: 850,
    services: [
      'Reception Stage Backdrop',
      'Truss Staging & Moving Heads',
      'Red Carpet Walkway',
      'Banquet Seating Layout',
    ],
    designStyle: 'Contemporary Luxury Glass & Pastel Florals',
    description:
      'A modern evening reception gala designed with crystal chandelier suspensions, pastel pink rose walls, and intelligent beam lighting.',
    challengeAndExecution:
      'Accommodating 850 guests required seamless entry management and multi-angle stage visibility. We erected a 40ft wide elevated stage with dual photo-opp lounges.',
    photos: [
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop',
    ],
    testimonial: {
      quote:
        'The reception stage felt straight out of a fairy tale. The lighting and guest flow were handled with extreme professionalism.',
      author: 'Venkata Family',
      location: 'Kakinada',
    },
    consentStatus: true,
    published: true,
    sourceAsset: 'Internal Archive #2025-KR-04',
    testimonialPermission: true,
  },
  {
    id: 'kakinada-1st-birthday-cradle',
    slug: 'themed-1st-birthday-cradle-ceremony',
    title: 'Floral Cradle & Pastoral 1st Birthday Celebration',
    eventType: 'Birthday',
    location: 'Kakinada, Andhra Pradesh',
    venue: 'Suryanarayana Puram Private Hall, Kakinada',
    date: '2025',
    guestCount: 250,
    services: [
      'Floral Cradle Setup',
      'Pastel Balloon Arch Backdrop',
      'Interactive Game Stalls',
      'Return Gift Stall Coordination',
    ],
    designStyle: 'Pastel Floral & Heritage Bronze Artifacts',
    description:
      'An intimate cradle ceremony and milestone 1st birthday featuring a suspended jasmine cradle, pastel organic balloon arches, and custom photobooth.',
    challengeAndExecution:
      'Combining traditional Telugu Barasala customs with modern kid-friendly entertainment in a single hall. We split the venue into a traditional sacred ritual zone and an interactive play lounge.',
    photos: [
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1200&auto=format&fit=crop',
    ],
    consentStatus: true,
    published: true,
    sourceAsset: 'Internal Archive #2025-BC-02',
    testimonialPermission: true,
  },
];

export function getProjectBySlug(slug: string): CaseStudyProject | undefined {
  const norm = slug.toLowerCase().trim();
  return staticProjects.find((p) => p.slug.toLowerCase() === norm || p.id.toLowerCase() === norm);
}
