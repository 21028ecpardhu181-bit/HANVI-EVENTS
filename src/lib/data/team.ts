import { TeamMember } from '../types';

export const staticTeamMembers: TeamMember[] = [
  {
    id: 'kala-prasad',
    slug: 'kala-prasad',
    name: 'Ch. Kala Prasad',
    role: 'Founder & Event Director',
    category: 'Core Leadership',
    shortBio: 'Founder and Event Director at Hanvi Events, Kakinada.',
    detailedBio: 'Ch. Kala Prasad leads Hanvi Events and discusses planning, event design, venue coordination, and celebration requirements with clients. Detailed professional history and original portrait media will be published only after approval.',
    profileImage: '/logo.png',
    coverImage: '/logo.png',
    skills: [
      'Vedic Mandap Architecture',
      'Luxury Event Management',
      'VIP Protocol & Logistics',
      'Floral Artistry',
      'Sangeet Staging & Lighting'
    ],
    galleryImages: [],
    socialLinks: [
      { platform: 'Instagram', url: 'https://linktw.in/utNIGS' },
      { platform: 'YouTube', url: 'https://youtube.com/@hanvievents' },
    ],
    contactInfo: {
      phone: '+91 97009 29650',
      email: 'hello@hanvievents.com',
      whatsapp: '+91 63054 57612'
    },
    featured: true,
    displayOrder: 1,
    seoTitle: 'Ch. Kala Prasad — Founder & Event Director | Hanvi Events',
    seoDescription: 'Founder & Event Director at Hanvi Events Kakinada.'
  }
];

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  const norm = slug.toLowerCase().trim();
  return staticTeamMembers.find((m) => m.slug.toLowerCase() === norm || m.id.toLowerCase() === norm);
}
