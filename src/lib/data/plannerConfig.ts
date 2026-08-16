import { siteConfig } from './site';

export interface EventPlan {
  eventType: string;
  customEventType?: string;
  services: string[];
  guestRange: string;
  exactGuests: number | null;
  eventDate: string;
  eventTime?: string;
  location: string;
  venueStatus: 'booked' | 'looking' | 'home' | 'flexible';
  budgetRange: string;
  notes?: string;
}

export interface EventTypeItem {
  id: string;
  title: string;
  image: string;
  iconName: 'heart' | 'cake' | 'gem' | 'sparkles' | 'users' | 'building' | 'home' | 'party' | 'plus';
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: 'Ceremonies' | 'Decor & Styling' | 'Feasts & Stalls' | 'Media & Entertainment';
  iconName: 'sparkles' | 'music' | 'camera' | 'utensils' | 'palette' | 'gift' | 'film' | 'tent';
}

export interface GuestRangeItem {
  id: string;
  label: string;
  min: number;
  max: number;
  subtitle: string;
}

export interface BudgetRangeItem {
  id: string;
  label: string;
  subtitle: string;
  badge?: string;
}

export const EVENT_TYPES: EventTypeItem[] = [
  { id: 'wedding', title: 'Wedding', image: '/images/events/wedding.jpg', iconName: 'heart', description: 'Mandap & Vedic Rituals' },
  { id: 'reception', title: 'Reception & Gala', image: '/images/events/reception.jpg', iconName: 'sparkles', description: 'Grand Stage & Banquet' },
  { id: 'engagement', title: 'Engagement', image: '/images/events/engagement.jpg', iconName: 'gem', description: 'Ring Ceremony & Canopy' },
  { id: 'sangeet-mehendi', title: 'Sangeet & Mehendi', image: '/images/events/sangeet.jpg', iconName: 'party', description: 'Dance Floor & Henna' },
  { id: 'birthday', title: 'Birthday Bash', image: '/images/events/birthday.jpg', iconName: 'cake', description: 'Themed Decor & Fun' },
  { id: 'baby-shower', title: 'Baby Shower / Cradle', image: '/images/events/babyshower.jpg', iconName: 'users', description: 'Seemantham & Naming' },
  { id: 'house-warming', title: 'House Warming', image: '/images/events/housewarming.jpg', iconName: 'home', description: 'Gruhapravesam Puja' },
  { id: 'corporate', title: 'Corporate Gala', image: '/images/events/corporate.jpg', iconName: 'building', description: 'Conferences & Awards' },
  { id: 'other', title: 'Custom Celebration', image: '/images/events/bespoke.jpg', iconName: 'plus', description: 'Bespoke Private Event' },
];

export const SERVICE_CATEGORIES: { category: ServiceItem['category']; services: ServiceItem[] }[] = [
  {
    category: 'Ceremonies',
    services: [
      { id: 'mandap-rituals', title: 'Vedic Mandap Setup', category: 'Ceremonies', iconName: 'sparkles' },
      { id: 'ritual-coordination', title: 'Priest & Ritual Coordination', category: 'Ceremonies', iconName: 'sparkles' },
      { id: 'welcome-girls', title: 'Welcome Girls & Aarti Stalls', category: 'Ceremonies', iconName: 'gift' },
    ],
  },
  {
    category: 'Decor & Styling',
    services: [
      { id: 'floral-decor', title: 'Fresh Floral Art & Stage', category: 'Decor & Styling', iconName: 'palette' },
      { id: 'grand-entrance', title: 'Grand Royal Entrance Arch', category: 'Decor & Styling', iconName: 'tent' },
      { id: 'ambient-lighting', title: 'Intelligent Ambient Lighting', category: 'Decor & Styling', iconName: 'sparkles' },
      { id: 'bridal-styling', title: 'Bridal Makeup & Nail Art', category: 'Decor & Styling', iconName: 'palette' },
    ],
  },
  {
    category: 'Feasts & Stalls',
    services: [
      { id: 'catering-feasts', title: 'Traditional Catering Feasts', category: 'Feasts & Stalls', iconName: 'utensils' },
      { id: 'live-food-counters', title: 'Live Chaat & Dessert Counters', category: 'Feasts & Stalls', iconName: 'utensils' },
      { id: 'bangle-mehendi-stall', title: 'Mehendi & Bangle Stall', category: 'Feasts & Stalls', iconName: 'gift' },
    ],
  },
  {
    category: 'Media & Entertainment',
    services: [
      { id: 'photography-cinema', title: 'Candid Photography & Cinema', category: 'Media & Entertainment', iconName: 'camera' },
      { id: 'dj-sound-system', title: 'DJ, Sound & Truss Lighting', category: 'Media & Entertainment', iconName: 'music' },
      { id: 'drone-aerial', title: 'Drone Aerial Coverage', category: 'Media & Entertainment', iconName: 'film' },
    ],
  },
];

export const EVENT_RECOMMENDATIONS: Record<string, string[]> = {
  wedding: ['Vedic Mandap Setup', 'Fresh Floral Art & Stage', 'Traditional Catering Feasts', 'Candid Photography & Cinema', 'Bridal Makeup & Nail Art'],
  reception: ['Fresh Floral Art & Stage', 'Intelligent Ambient Lighting', 'DJ, Sound & Truss Lighting', 'Traditional Catering Feasts', 'Candid Photography & Cinema'],
  engagement: ['Fresh Floral Art & Stage', 'Grand Royal Entrance Arch', 'Candid Photography & Cinema', 'Traditional Catering Feasts'],
  'sangeet-mehendi': ['DJ, Sound & Truss Lighting', 'Mehendi & Bangle Stall', 'Fresh Floral Art & Stage', 'Candid Photography & Cinema'],
  birthday: ['Intelligent Ambient Lighting', 'Live Chaat & Dessert Counters', 'Candid Photography & Cinema', 'DJ, Sound & Truss Lighting'],
  'baby-shower': ['Fresh Floral Art & Stage', 'Traditional Catering Feasts', 'Candid Photography & Cinema'],
  'house-warming': ['Fresh Floral Art & Stage', 'Priest & Ritual Coordination', 'Traditional Catering Feasts'],
  corporate: ['Intelligent Ambient Lighting', 'DJ, Sound & Truss Lighting', 'Live Chaat & Dessert Counters', 'Candid Photography & Cinema'],
};

export const GUEST_RANGES: GuestRangeItem[] = [
  { id: '1-50', label: '1–50', min: 1, max: 50, subtitle: 'Intimate Family Gathering' },
  { id: '51-100', label: '51–100', min: 51, max: 100, subtitle: 'Cozy Celebration' },
  { id: '101-250', label: '101–250', min: 101, max: 250, subtitle: 'Classic Banquet' },
  { id: '251-500', label: '251–500', min: 251, max: 500, subtitle: 'Grand Celebration' },
  { id: '501-1000', label: '501–1000', min: 501, max: 1000, subtitle: 'Royal Gala Assembly' },
  { id: '1000+', label: '1000+', min: 1001, max: 50000, subtitle: 'Imperial Mega Event' },
];

export const BUDGET_RANGES: BudgetRangeItem[] = [
  { id: 'under-2l', label: 'Under ₹2 Lakhs', subtitle: 'Essential setup, backdrop & audio' },
  { id: '2l-5l', label: '₹2 Lakhs – ₹5 Lakhs', subtitle: 'Complete mandap/stage, florals & lighting', badge: 'Most Popular' },
  { id: '5l-10l', label: '₹5 Lakhs – ₹10 Lakhs', subtitle: 'Premium signature decor, catering & cinema' },
  { id: '10l-20l', label: '₹10 Lakhs – ₹20 Lakhs', subtitle: 'Royal heritage architecture & multi-day suites' },
  { id: '20l+', label: '₹20 Lakhs+', subtitle: 'Bespoke destination & palace scale execution' },
];

export const VENUE_STATUS_OPTIONS = [
  { id: 'booked', label: 'Venue Booked' },
  { id: 'looking', label: 'Looking for Venue' },
  { id: 'home', label: 'Home / Private Estate' },
  { id: 'flexible', label: 'Flexible / To Be Decided' },
] as const;

export function getRangeFromExactCount(count: number): string {
  if (count <= 0) return '';
  const match = GUEST_RANGES.find((r) => count >= r.min && count <= r.max);
  return match ? match.label : '1000+';
}

export const INITIAL_EVENT_PLAN: EventPlan = {
  eventType: 'wedding',
  customEventType: '',
  services: ['Vedic Mandap Setup', 'Fresh Floral Art & Stage', 'Traditional Catering Feasts'],
  guestRange: '251–500',
  exactGuests: 350,
  eventDate: '',
  eventTime: '',
  location: 'Kakinada',
  venueStatus: 'looking',
  budgetRange: '₹2 Lakhs – ₹5 Lakhs',
  notes: '',
};

export const PLANNER_STORAGE_KEY = 'hanvi_event_planner_draft_v2';

export function formatWhatsAppMessage(plan: EventPlan): string {
  const effectiveEvent = plan.eventType === 'Other' ? (plan.customEventType?.trim() || 'Custom Celebration') : plan.eventType;
  const servicesList = plan.services.length > 0 ? plan.services.map((s) => `  • ${s}`).join('\n') : '  • Complete Event Planning';
  const guestDisplay = plan.exactGuests ? `${plan.exactGuests} Guests (${plan.guestRange})` : `${plan.guestRange} Guests`;
  const dateDisplay = plan.eventDate || 'To be decided';
  const timeDisplay = plan.eventTime ? ` (${plan.eventTime})` : '';

  const venueLabelMap: Record<string, string> = {
    booked: 'Venue Booked',
    looking: 'Need Venue Recommendations',
    home: 'Home / Private Property',
    flexible: 'Flexible / Open',
  };

  return `Hello Ch. Kala Prasad (Hanvi Events),

I would like to discuss my celebration requirements:

*Event:* ${effectiveEvent}
*Date:* ${dateDisplay}${timeDisplay}
*Location:* ${plan.location || 'Kakinada / AP'} (${venueLabelMap[plan.venueStatus] || 'Flexible'})
*Estimated Guests:* ${guestDisplay}
*Estimated Investment:* ${plan.budgetRange}

*Selected Services:*
${servicesList}

${plan.notes ? `*Additional Notes:* ${plan.notes}\n` : ''}
Please connect with me to discuss personalized styling and planning. Thank you!`;
}
