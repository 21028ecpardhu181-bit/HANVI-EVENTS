import { PackageTier } from '../types';

/**
 * 3 Strategic Investment Tiers using Behavioral Economics (Decoy / Theater Drinks Pricing Tactic):
 * 1. Essential (₹35,000) — Entry tier for intimate events.
 * 2. Elegant (₹75,000) — Most Popular / Best Value sweet spot.
 * 3. Royal Signature (₹1,15,000) — High-value anchor decoy (just ₹40k upgrade for complete royal transformation!).
 */
export const packageTiers: PackageTier[] = [
  {
    id: 'essential',
    title: 'Essential Celebration',
    tagline: 'Refined Simplicity for Intimate Moments',
    price: '₹35,000',
    recommendedFor: 'Intimate Gatherings, Birthdays & Cradle Ceremonies',
    badge: 'Essential Tier',
    features: [
      'Bespoke Stage Backdrop & Floral Arch',
      'Fresh Marigold & Jasmine Accents',
      'Standard Ambient Lighting Setup',
      'On-Site Event Coordinator',
      'Clean Audio & Microphone System',
    ],
  },
  {
    id: 'elegant',
    title: 'Elegant Ceremony',
    tagline: 'Complete Celebration & Mandap Orchestration',
    price: '₹75,000',
    recommendedFor: 'Sangeet, Mehandi, Birthdays & Weddings',
    badge: 'Most Popular • Best Value',
    isPopular: true,
    features: [
      'Custom Mandap / Backdrop Architecture',
      'Fresh Floral Sculptures & Flower Wall',
      'Intelligent Moving Lights & Staging',
      'Welcome Girls & Bangle Stall Setups',
      'Surprise Event Arrangements & Balloon Pods',
      'Full Technical & AV System Coordination',
    ],
  },
  {
    id: 'royal-signature',
    title: 'Royal Mandap Signature',
    tagline: 'Majestic Heritage Architecture for Royal Marriages',
    price: '₹1,15,000',
    recommendedFor: 'Grand Weddings & High-Scale Receptions',
    badge: 'Grand Value Upgrade',
    features: [
      'Grand 4-Pillar Vedic Mandap Architecture',
      'Tens of Thousands of Fresh Jasmine & Rose Strands',
      'Multi-Tier Crystal Chandeliers & Warm Lighting',
      'Royal Bride & Groom Grand Entrance Setup',
      'Nail-Art Stalls & Bridal Makeup Stations',
      'Personal Supervision by Ch. Kala Prasad (Event Manager)',
      'Complete Catering Support & Executive Dining Decor',
    ],
  },
];
