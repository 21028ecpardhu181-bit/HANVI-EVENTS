import { NextResponse } from 'next/server';
import { sanityClient } from '@/lib/sanity/client';
import { servicesData } from '@/lib/data/services';
import { defaultMediaItems } from '@/lib/data/reelsStore';
import { storyCaseStudies } from '@/lib/data/stories';
import { testimonials } from '@/lib/data/testimonials';
import { journalArticles } from '@/lib/data/journal';
import { DEFAULT_WIZARD_CONFIG } from '@/lib/data/wizardConfig';
import { packageTiers } from '@/lib/data/packages';
import { siteConfig } from '@/lib/data/site';

export async function POST() {
  try {
    const token = process.env.SANITY_API_WRITE_TOKEN;
    if (!token) {
      return NextResponse.json(
        { error: 'SANITY_API_WRITE_TOKEN missing in .env.local' },
        { status: 400 }
      );
    }

    const tx = sanityClient.transaction();

    // 1. Existing Services Collection (UNCHANGED)
    servicesData.forEach((cat) => {
      tx.createOrReplace({
        _id: `service-${cat.slug}`,
        _type: 'service',
        title: cat.title,
        slug: { _type: 'slug', current: cat.slug },
        category: cat.category || 'Celebration',
        featured: Boolean(cat.featured),
        displayOrder: cat.displayOrder || 1,
        subtitle: cat.subtitle,
        tagline: cat.tagline,
        description: cat.description,
        shortDescription: cat.shortDescription || cat.description,
        startingPrice: cat.startingPrice,
        duration: cat.duration || '',
        icon: cat.icon || 'sparkles',
        features: cat.features || [],
        seoTitle: cat.seoTitle || '',
        seoDescription: cat.seoDescription || '',
      });
    });

    // 2. Home Page Document
    tx.createOrReplace({
      _id: 'home-main',
      _type: 'home',
      heroTitle: 'Architects of Sacred & Unforgettable Celebrations',
      heroSubtitle: 'Kakinada Premier Luxury Event Planners • Est. 2018',
      heroDescription: 'Designing bespoke Vedic marriage mandaps, sangeet galas, birthday celebrations & corporate events under the personal supervision of Ch. Kala Prasad.',
      ctaPrimaryText: 'Plan Your Event →',
      ctaPrimaryLink: '/wizard',
      ctaSecondaryText: 'Explore Services',
      ctaSecondaryLink: '/services',
      statistics: [
        { value: '500+', label: 'Weddings & Receptions' },
        { value: '8+ Yrs', label: 'Event Directorship' },
        { value: '100%', label: 'Bespoke Floral Decor' },
        { value: '24/7', label: 'Dedicated Support' },
      ],
      seoTitle: 'Hanvi Events — Luxury Event Planning & Mandap Architecture Kakinada',
      seoDescription: 'Est. 2018 in Kakinada. Bespoke luxury wedding planning, mandap architecture & milestone celebrations.',
    });

    // 3. Event Wizard Document
    tx.createOrReplace({
      _id: 'eventWizard-main',
      _type: 'eventWizard',
      title: 'Interactive Event Cost & Package Calculator',
      description: 'Select your event type, guest count, and desired services to get an instant customized quotation and WhatsApp consultation.',
      whatsappNumber: DEFAULT_WIZARD_CONFIG.whatsappNumber,
      steps: DEFAULT_WIZARD_CONFIG.celebrationTypes,
      ctaText: 'Get Instant WhatsApp Quote →',
    });

    // 4. Wedding Traditions Collection
    const traditions = [
      { slug: 'hindu', title: 'Hindu Vedic Marriage', region: 'Telugu & Vedic Heritage', desc: 'Sacred Muhurtham, Rajanigandha mandaps & traditional Agni Kunda rituals.' },
      { slug: 'christian', title: 'Christian Cathedral & Beach Unions', region: 'Coastal & Cathedral', desc: 'White floral archways, candlelit aisles & elegance.' },
      { slug: 'muslim', title: 'Muslim Nikah & Walima Galas', region: 'Nizami & Royal Heritage', desc: 'Royal floral screens, velvet seating & lavish Walima feasts.' },
    ];
    traditions.forEach((t) => {
      tx.createOrReplace({
        _id: `tradition-${t.slug}`,
        _type: 'weddingTradition',
        traditionTitle: t.title,
        slug: { _type: 'slug', current: t.slug },
        region: t.region,
        description: t.desc,
        rituals: ['Welcome Reception', 'Main Sacred Ceremony', 'Banquet Feast'],
      });
    });

    // 5. Stories Collection
    storyCaseStudies.forEach((story) => {
      tx.createOrReplace({
        _id: `story-${story.slug}`,
        _type: 'story',
        title: story.title,
        slug: { _type: 'slug', current: story.slug },
        coupleName: story.coupleNames,
        eventType: story.celebrationType,
        location: story.location,
        guestCount: story.guestCount,
        quote: story.quote,
        storyContent: story.narrative || [],
        featured: true,
      });
    });

    // 6. Gallery Collection
    defaultMediaItems.forEach((media) => {
      tx.createOrReplace({
        _id: `media-${media.id}`,
        _type: 'galleryMedia',
        albumTitle: media.title,
        category: 'All',
        type: media.type,
        eventName: media.subtitle,
        videoUrl: media.videoUrl,
        views: media.views,
        featured: true,
        displayOrder: 1,
      });
    });

    // 7. Packages Collection
    packageTiers.forEach((pkg, idx) => {
      const pkgSlug = slugify(pkg.title);
      tx.createOrReplace({
        _id: `package-${pkgSlug}`,
        _type: 'packageItem',
        packageName: pkg.title,
        slug: { _type: 'slug', current: pkgSlug },
        packageSubtitle: pkg.tagline,
        price: pkg.price,
        includedServices: pkg.features,
        features: pkg.features,
        featuredPackage: Boolean(pkg.isPopular),
        displayOrder: idx + 1,
      });
    });

    // 8. Journal Collection
    journalArticles.forEach((a) => {
      tx.createOrReplace({
        _id: `art-${a.slug}`,
        _type: 'article',
        title: a.title,
        slug: { _type: 'slug', current: a.slug },
        excerpt: a.excerpt,
        category: a.category,
        readTime: a.readTime,
        publishDate: a.publishedDate,
        author: { name: a.author.name, role: a.author.role },
        content: a.content || [],
        tags: ['Weddings', 'Events', 'Kakinada'],
      });
    });

    // 9. Testimonials Collection
    testimonials.forEach((t, idx) => {
      tx.createOrReplace({
        _id: `test-${t.id || idx}`,
        _type: 'testimonial',
        clientName: t.clientNames,
        coupleName: t.clientNames,
        eventType: t.celebrationType,
        location: t.location,
        rating: t.rating || 5,
        review: t.reviewText,
        featured: true,
        displayOrder: idx + 1,
      });
    });

    // 10. FAQs Collection
    const sampleFaqs = [
      { q: 'Where is Hanvi Events located in Kakinada?', a: 'Our studio is at 60-1-1/1, Jammichettu Center, Netajipark, KAKINADA, Andhra Pradesh.' },
      { q: 'Who supervises the event planning?', a: 'Every event is personally managed by Founder & Event Director Ch. Kala Prasad.' },
    ];
    sampleFaqs.forEach((f, idx) => {
      tx.createOrReplace({
        _id: `faq-${idx}`,
        _type: 'faq',
        question: f.q,
        answer: f.a,
        category: 'General',
      });
    });

    // 11. Team Collection
    tx.createOrReplace({
      _id: 'team-director',
      _type: 'teamMember',
      name: 'Ch. Kala Prasad',
      role: 'Founder & Event Director',
      category: 'Core Leadership',
      shortBio: 'Leading Hanvi Events since 2018 with 500+ successful celebrations.',
      experience: '8+ Years',
      featured: true,
      displayOrder: 1,
    });

    // 12. Studio Leadership Collection
    tx.createOrReplace({
      _id: 'leadership-director',
      _type: 'studioLeadership',
      name: 'Ch. Kala Prasad',
      position: 'Founder & Event Director',
      biography: 'Pioneered bespoke mandap design and luxury event orchestration across Andhra Pradesh.',
      visionStatement: 'To craft every celebration into a sacred, breathtaking heirloom experience.',
      experience: '8+ Years',
      featured: true,
      displayOrder: 1,
    });

    // 13. Venues Collection
    const sampleVenues = [
      { name: 'Kakinada Grand Convention Hall', loc: 'Kakinada', cap: '1,500 Guests' },
      { name: 'Beachside Palms Resort', loc: 'Uppada Beach Road', cap: '800 Guests' },
    ];
    sampleVenues.forEach((v, idx) => {
      tx.createOrReplace({
        _id: `venue-${idx}`,
        _type: 'venue',
        venueName: v.name,
        slug: { _type: 'slug', current: slugify(v.name) },
        location: v.loc,
        capacity: v.cap,
        indoorOutdoor: 'Indoor AC & Outdoor Lawn',
        featured: true,
      });
    });

    // 14. Contact Page Document
    tx.createOrReplace({
      _id: 'contactPage-main',
      _type: 'contactPage',
      officeAddress: siteConfig.address,
      phoneNumbers: [siteConfig.phone, '+91 97009 29650', '+91 83745 27954'],
      whatsappNumber: siteConfig.whatsapp,
      email: siteConfig.email,
      businessHours: 'Mon - Sun: 9:00 AM - 9:00 PM',
      formSettings: {
        formTitle: 'Request a Bespoke Consultation',
        formSubtitle: 'Fill out your event details below to connect directly with Event Manager Ch. Kala Prasad.',
        successMessage: 'Thank you! We will call you back within 2 hours.',
      },
    });

    // 15. Site Settings Document
    tx.createOrReplace({
      _id: 'siteSettings-main',
      _type: 'siteSettings',
      companyName: 'Hanvi Events',
      navigationMenu: [
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Event Wizard', href: '/wizard' },
        { label: 'Wedding Traditions', href: '/wedding-experiences' },
        { label: 'Stories', href: '/stories' },
        { label: 'Gallery', href: '/gallery' },
        { label: 'Packages', href: '/packages' },
        { label: 'Journal', href: '/journal' },
        { label: 'Contact', href: '/contact' },
      ],
      footerContent: "God's Gift • All Function Events. Managed by Ch. Kala Prasad (Event Manager). Designing bespoke marriages, sangeet, cradle ceremonies, birthdays & corporate galas since 2018.",
      copyright: '© 2026 Hanvi Events. All rights reserved. Managed by Ch. Kala Prasad.',
      contactInformation: {
        phone: siteConfig.phone,
        whatsapp: siteConfig.whatsapp,
        email: siteConfig.email,
        address: siteConfig.address,
      },
    });

    // 16. Portfolio Collection
    tx.createOrReplace({
      _id: 'portfolio-1',
      _type: 'portfolioItem',
      projectTitle: 'Royal Telugu Mandap & Sangeet Gala',
      slug: { _type: 'slug', current: 'royal-telugu-mandap' },
      eventType: 'Traditional Vedic Wedding',
      clientName: 'Swathi & Rajesh Varma',
      description: 'Handcrafted marigold lounge decor and royal Vedic mandap in Kakinada.',
      completionDate: 'January 2026',
      featured: true,
      displayOrder: 1,
    });

    await tx.commit();

    return NextResponse.json({
      success: true,
      message: 'Successfully seeded all 15 Sanity Collections with rich placeholder content!',
    });
  } catch (err: unknown) {
    console.error('Sanity Seed Error:', err);
    return NextResponse.json(
      { error: (err as Error)?.message || 'Failed to seed Sanity content' },
      { status: 500 }
    );
  }
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
