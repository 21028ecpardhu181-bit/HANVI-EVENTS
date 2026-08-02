const { createClient } = require('next-sanity');

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

// Testimonials
const testimonialsData = [
  {
    _id: 'test-1',
    _type: 'testimonial',
    clientNames: 'Swathi & Rajesh Varma',
    celebrationType: 'Traditional Marriage',
    location: 'Kakinada',
    rating: 5,
    reviewText: 'Managed personally by Ch. Kala Prasad. Our wedding mandap was the talk of the entire city. From the welcome girls to the flower arrangements, everything was flawless!',
  },
  {
    _id: 'test-2',
    _type: 'testimonial',
    clientNames: 'Srinivas & Family',
    celebrationType: 'Cradle Ceremony & Namakaran',
    location: 'Jagannaickpur, Kakinada',
    rating: 5,
    reviewText: 'The floral cradle setup for our baby girl was beyond magical. Hanvi Events has been our family event planner since 2018!',
  },
  {
    _id: 'test-3',
    _type: 'testimonial',
    clientNames: 'Priya & Anish Chowdary',
    celebrationType: 'Sangeet & Mehendi',
    location: 'Visakhapatnam',
    rating: 5,
    reviewText: 'The marigold lounge decor, nail-art stalls for our guests, and concert stage lighting exceeded all our expectations!',
  },
];

// Articles
const articlesData = [
  {
    _id: 'art-1',
    _type: 'article',
    title: 'The Art of Mandap Architecture: Balancing Sacred Heritage & Modern Luxury',
    slug: { _type: 'slug', current: 'art-of-mandap-architecture' },
    excerpt: 'Discover how traditional Vedic geometry combines with modern floral sculpting to create mandaps that feel like sanctuaries.',
    category: 'Design Philosophy',
    readTime: '4 Min Read',
    publishedDate: 'January 14, 2026',
    authorName: 'Ch. Kala Prasad',
    authorRole: 'Event Director',
    content: [
      'The wedding mandap is the spiritual center of any Indian wedding ceremony. It is the sacred space where vows are exchanged around the holy fire.',
      'When designing a mandap for a modern luxury wedding, our goal is to create a sense of awe without overwhelming the sanctity of the ritual.',
    ],
  },
];

async function seedAll() {
  console.log('🚀 Seeding Sanity CMS (project: dgvr6ylk)...');
  const tx = client.transaction();

  testimonialsData.forEach((item) => tx.createOrReplace(item));
  articlesData.forEach((item) => tx.createOrReplace(item));

  try {
    const res = await tx.commit();
    console.log('✅ SANITY SEEDED SUCCESSFULLY!', res.transactionId);
  } catch (err) {
    console.warn('⚠️ Seeding note:', err.message);
  }
}

seedAll();
