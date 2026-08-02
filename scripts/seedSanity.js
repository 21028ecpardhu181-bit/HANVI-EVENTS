const { createClient } = require('next-sanity');

// Read configuration
const projectId = 'dgvr6ylk';
const dataset = 'production';
const apiVersion = '2024-01-01';
const token = 'skeMY8wsrI9xh1KoyKF2qF5z2M38AQ7SYvRYlESHbqM4Vy2HmkB6UhKZmMDZWhWG7ENj9MQ8oMI8wpRDZlQ1KOpWtpfV9dAqq1ZRWpFXh7IMX96hc37QBpQMrqHdOR8YhCscOzMLEC53HO6psYq1yKBFB4R3LXFEnSvDmobOGhoR1BxazjL4';

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

const services = [
  {
    title: 'Wedding Planning & Grand Mandaps',
    slug: 'wedding-planning',
    subtitle: 'Grand Vedic Mandaps, Hospitality & End-to-End Orchestration',
    tagline: 'Timeless Sacred Unions',
    description: 'Complete marriage orchestration from grand mandap floral setups, welcoming hostesses (Welcome Girls), bangle stalls, royal mandap architecture, and full logistics management.',
    shortDescription: 'Grand Vedic mandap setups, Welcome Girls, bangle stalls & full marriage orchestration.',
    startingPrice: '₹1,50,000',
    features: [
      'Grand Mandap Floral Sculptures & Rajanigandha Canopy',
      'Professional Welcome Girls & Hospitality Hostesses',
      'Traditional Bangle & Flower Stalls for Guests',
      'Royal Bride & Groom Grand Entrance Setups',
      'Comprehensive Catering Support & Coordination',
    ],
    faq: [
      {
        question: 'Do you provide Welcome Girls for wedding guest hospitality?',
        answer: 'Yes! Hanvi Events provides professionally trained Welcome Girls for guest receptions, floral petal welcomes, and bangle stalls.',
      },
      {
        question: 'How early should we book our wedding planning team?',
        answer: 'We recommend booking 3 to 6 months in advance for auspicious Muhurtham dates to reserve custom mandap structures.',
      },
    ],
  },
  {
    title: 'Birthday Parties & Balloon Decor',
    slug: 'birthday-parties',
    subtitle: 'Surprise Parties, Theme Balloons & Entertainment',
    tagline: 'Joyous Celebrations for Every Age',
    description: 'Transforming birthday milestones into magical realms with custom 3D balloon arches, cake backdrops, secret surprise event arrangements, and acoustic entertainment.',
    shortDescription: 'Custom 3D balloon arches, secret surprise event setups, cake backdrops & live music.',
    startingPrice: '₹15,000',
    features: [
      'Custom 3D Balloon Structures & Organic Arches',
      'Surprise Event Arrangements & Gift Entrances',
      'Entertainment & DJ Sound System Coordination',
      'Theme Cake Display & Ambient Lighting Pods',
    ],
    faq: [
      {
        question: 'Can you organize surprise birthday events in Kakinada?',
        answer: 'Yes, we specialize in secret surprise event setups, surprise entrance decor, and live acoustic music for birthdays.',
      },
    ],
  },
  {
    title: 'Engagement & Ring Ceremony',
    slug: 'engagement',
    subtitle: 'Royal Stage Styling, Ring Trays & Floral Arches',
    tagline: 'The First Step to Forever',
    description: 'Charming engagement stage backdrops, custom ring tray presentation setups, floral aisle runners, and intimate family feast management.',
    shortDescription: 'Elegant ring exchange setups, floral backdrop stages, custom ring trays & family dining decor.',
    startingPrice: '₹30,000',
    features: [
      'Custom Floral Stage Backdrops & Monogram Arches',
      'Bespoke Decorative Ring Presentation Trays',
      'Couple Entrance Spotlights & Cold Pyro Effects',
      'Guest Seating & Ambient Candlelight Pods',
    ],
    faq: [
      {
        question: 'Can you customize the ring tray design according to our theme?',
        answer: 'Yes, we offer hand-crafted floral, velvet, and acrylic ring trays tailored to your engagement attire.',
      },
    ],
  },
  {
    title: 'Event Decoration & Stage Styling',
    slug: 'decoration',
    subtitle: 'Floral Sculptures, Light Rigs & Custom Backdrops',
    tagline: 'Transforming Spaces into Fine Art',
    description: 'Extensive floral sculptures, entrance archways, stage backdrops, ceiling drapes, and LED intelligent lighting for all traditional and contemporary events.',
    shortDescription: 'Bespoke floral sculptures, entrance arches, stage backdrops & intelligent lighting rigs.',
    startingPrice: '₹25,000',
    features: [
      'Fresh Exotic Floral Arrangements & Sculptures',
      'Ceiling Draping & Fairy-Light Canopy Rigging',
      'Custom Stage Framing & Modern Backdrop Wall Arts',
      'Entrance Grand Archways & Welcome Standees',
    ],
    faq: [
      {
        question: 'Do you supply both artificial and fresh flower decorations?',
        answer: 'Yes, we provide 100% fresh flowers, premium high-grade silk artificial florals, or a hybrid combination based on budget.',
      },
    ],
  },
  {
    title: 'Mehendi & Henna Art Lounges',
    slug: 'mehendi',
    subtitle: 'Boho Henna Lounges, Organic Mehendi & Group Artists',
    tagline: 'Vibrant Festive Beats & Intricate Artistry',
    description: 'Lush marigold curtains, boho floor seating, organic chemical-free Mehandi artists for bridal and guest groups, bangle counters, and festive photo booths.',
    shortDescription: 'Intricate bridal henna, group Mehendi artists, marigold drapes & boho seating lounges.',
    startingPrice: '₹15,000',
    features: [
      'Custom Bridal Portrait & Figure Mehendi Designs',
      'Team of Fast-Paced Henna Artists for 100+ Guests',
      '100% Natural Organic Cone Paste (Dark Color Stain)',
      'Marigold Lounge Seating, Bangle Stalls & Low Tables',
    ],
    faq: [
      {
        question: 'Is the Mehendi paste natural and safe for sensitive skin?',
        answer: 'Yes! We prepare fresh 100% organic henna cones using eucalyptus oil with zero chemical additives.',
      },
    ],
  },
];

const mediaItems = [
  {
    id: 'm1',
    type: 'reel',
    title: '40,000 Jasmine Strand Canopy Reveal',
    subtitle: 'Royal Muhurtham Mandap • Kakinada Convention',
    videoUrl: 'https://linktw.in/utNIGS',
    views: '120K Views',
  },
  {
    id: 'm2',
    type: 'reel',
    title: 'Grand Haldi Turmeric Rain & Brass Uruli Bath',
    subtitle: 'Celebration Reel • Vizag Beachfront Lawn',
    videoUrl: 'https://linktw.in/utNIGS',
    views: '85K Views',
  },
  {
    id: 'm3',
    type: 'film',
    title: 'The Royal Wedding of Ananya & Vikram',
    subtitle: 'Full Cinematic Film • Kakinada Palace',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    views: 'Featured Film',
  },
];

const stories = [
  {
    title: 'Ananya & Vikram’s Celestial Lotus Mandap',
    slug: 'ananya-vikram-lotus-mandap',
    coupleNames: 'Ananya & Vikram',
    celebrationType: 'Royal Telugu Hindu Wedding',
    location: 'Kakinada Palace Grounds, AP',
    guestCount: '1,200 Guests',
    quote: 'Hanvi Events turned our vision into an ethereal paradise. The 40,000 jasmine strand canopy was breathtaking!',
    narrative: [
      'Designed around a floating lotus mandap, Ananya and Vikram’s sacred wedding ceremony merged traditional South Indian sacred architecture with contemporary luxury styling.',
    ],
  },
  {
    title: 'Rachel & David’s Ivory Cathedral & Beachfront Union',
    slug: 'rachel-david-cathedral-union',
    coupleNames: 'Rachel & David',
    celebrationType: 'Christian Cathedral & Seaside Gala',
    location: 'Vizag Coastline Resort, AP',
    guestCount: '450 Guests',
    quote: 'The white rose aisle archway and evening candlelit reception were straight out of a fairytale story.',
    narrative: [
      'Blending classic European cathedral elegance with coastal Andhra serenity, Rachel and David celebrated their vows under a white rose archway.',
    ],
  },
];

async function seedData() {
  console.log('🚀 Seeding content directly to Sanity project (dgvr6ylk)...');
  const tx = client.transaction();

  // 1. Services
  services.forEach((s) => {
    tx.createOrReplace({
      _id: `service-${s.slug}`,
      _type: 'service',
      title: s.title,
      slug: { _type: 'slug', current: s.slug },
      subtitle: s.subtitle,
      tagline: s.tagline,
      description: s.description,
      shortDescription: s.shortDescription,
      startingPrice: s.startingPrice,
      features: s.features,
      faq: s.faq.map((f) => ({
        _type: 'faqItem',
        question: f.question,
        answer: f.answer,
      })),
    });
  });

  // 2. Media
  mediaItems.forEach((m) => {
    tx.createOrReplace({
      _id: `media-${m.id}`,
      _type: 'galleryMedia',
      title: m.title,
      subtitle: m.subtitle,
      type: m.type,
      category: 'All',
      videoUrl: m.videoUrl,
      views: m.views,
    });
  });

  // 3. Stories
  stories.forEach((st) => {
    tx.createOrReplace({
      _id: `story-${st.slug}`,
      _type: 'story',
      title: st.title,
      slug: { _type: 'slug', current: st.slug },
      coupleNames: st.coupleNames,
      celebrationType: st.celebrationType,
      location: st.location,
      guestCount: st.guestCount,
      quote: st.quote,
      narrative: st.narrative,
    });
  });

  // 4. Wizard
  tx.createOrReplace({
    _id: 'wizardConfig-default',
    _type: 'wizardConfig',
    whatsappNumber: '9700929650',
    celebrationTypes: ['Weddings', 'Birthday Parties', 'Engagement', 'Mehendi & Sangeet', 'Cradle Ceremony', 'Corporate Galas'],
    guestCountOptions: ['Under 100 Guests', '100 - 300 Guests', '300 - 800 Guests', '800+ Grand Gathering'],
    budgetOptions: ['Minimal Tier (₹50k - ₹1.5L)', 'Elegant Tier (₹1.5L - ₹3.5L)', 'Royal Mandap Tier (₹3.5L - ₹7L)', 'Imperial Luxury Tier (₹7L+)'],
  });

  try {
    const result = await tx.commit();
    console.log('✅ SANITY SEED SUCCESSFUL!', result.transactionId);
    console.log('🎉 Seeded 5 Services, 3 Media/Reels, 2 Stories, and 1 Wizard Config into Sanity!');
  } catch (err) {
    console.error('❌ SANITY SEED FAILED:', err.message);
  }
}

seedData();
