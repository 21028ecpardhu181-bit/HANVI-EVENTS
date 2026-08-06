import { TeamMember } from '../types';

export const staticTeamMembers: TeamMember[] = [
  {
    id: 'kala-prasad',
    slug: 'kala-prasad',
    name: 'Ch. Kala Prasad',
    role: 'Founder & Event Director',
    category: 'Core Leadership',
    shortBio: 'Pioneered bespoke mandap design & luxury event orchestration in Kakinada since 2018 with 500+ successful celebrations.',
    detailedBio: 'Ch. Kala Prasad is the visionary force behind Hanvi Events. With over 8 years of personal event management directorship across Andhra Pradesh, he has transformed traditional marriages into sacred heirloom experiences. Known for meticulous attention to Rajanigandha floral alignment, acoustics, and seamless guest hospitality, he personally oversees every stage of planning and execution.',
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
    experience: '8+ Years Directorship',
    skills: [
      'Vedic Mandap Architecture',
      'Luxury Event Management',
      'VIP Protocol & Logistics',
      'Floral Artistry',
      'Sangeet Staging & Lighting'
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop',
    ],
    videos: [
      {
        title: 'Grand Mandap Directorship Reel',
        url: '/videos/hero-video.mp4'
      }
    ],
    socialLinks: [
      { platform: 'Instagram', url: 'https://instagram.com' },
      { platform: 'YouTube', url: 'https://youtube.com' },
      { platform: 'LinkedIn', url: 'https://linkedin.com' }
    ],
    contactInfo: {
      phone: '+91 97009 29650',
      email: 'info@hanvievents.com',
      whatsapp: '+91 63054 57612'
    },
    featured: true,
    displayOrder: 1,
    seoTitle: 'Ch. Kala Prasad — Founder & Event Director | Hanvi Events',
    seoDescription: 'Founder & Event Director at Hanvi Events Kakinada. 8+ years experience directing luxury marriages, mandaps, and corporate galas.'
  },
  {
    id: 'sravani-reddy',
    slug: 'sravani-reddy',
    name: 'Sravani Reddy',
    role: 'Lead Floral & Mandap Stylist',
    category: 'Design & Aesthetics',
    shortBio: 'Crafting fragrant Marigold, Orchid & Rajanigandha mandap installations with bespoke traditional motifs.',
    detailedBio: 'Sravani brings artistic brilliance to spatial and floral decor. Her deep understanding of South Indian ritual aesthetics ensures that every ceremony backdrop radiates warmth, elegance, and divine reverence.',
    profileImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1600&auto=format&fit=crop',
    experience: '6+ Years Experience',
    skills: [
      'Botanical Spatial Styling',
      'Fresh Floral Mandap Sculpting',
      'Traditional Garland Curation',
      'Color Palette Design'
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop'
    ],
    socialLinks: [
      { platform: 'Instagram', url: 'https://instagram.com' }
    ],
    contactInfo: {
      phone: '+91 97009 29650',
      whatsapp: '+91 63054 57612'
    },
    featured: true,
    displayOrder: 2,
    seoTitle: 'Sravani Reddy — Lead Floral Stylist | Hanvi Events',
    seoDescription: 'Lead Floral & Mandap Stylist at Hanvi Events Kakinada.'
  },
  {
    id: 'ramesh-varma',
    slug: 'ramesh-varma',
    name: 'Ramesh Varma',
    role: 'Production & Technical Operations Lead',
    category: 'Operations',
    shortBio: 'Head of stage architecture, concert trussing, intelligent moving heads & high-definition sound distribution.',
    detailedBio: 'Ramesh leads the heavy technical infrastructure and production setups for sangeet nights, reception stages, and massive outdoor conventions across coastal Andhra Pradesh.',
    profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1600&auto=format&fit=crop',
    experience: '7+ Years Experience',
    skills: [
      'Stage Structural Engineering',
      'Intelligent DMX Lighting',
      'Concert Sound Setup',
      'Safety & Power Backup'
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop'
    ],
    socialLinks: [
      { platform: 'LinkedIn', url: 'https://linkedin.com' }
    ],
    contactInfo: {
      phone: '+91 97009 29650'
    },
    featured: false,
    displayOrder: 3,
    seoTitle: 'Ramesh Varma — Production Lead | Hanvi Events',
    seoDescription: 'Production & Technical Operations Lead at Hanvi Events.'
  }
];

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  const norm = slug.toLowerCase().trim();
  return staticTeamMembers.find((m) => m.slug.toLowerCase() === norm || m.id.toLowerCase() === norm);
}
