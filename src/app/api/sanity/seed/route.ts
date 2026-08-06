import { NextResponse } from 'next/server';
import { sanityClient } from '@/lib/sanity/client';
import { servicesData } from '@/lib/data/services';
import { defaultMediaItems } from '@/lib/data/reelsStore';
import { storyCaseStudies, weddingJourneysByReligion } from '@/lib/data/stories';
import { staticTeamMembers } from '@/lib/data/team';

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

    // 1. Services Collection
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

    // 2. Wedding Traditions Collection
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

    // 3. Stories Collection
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

    // 4. Gallery Collection
    const sampleCategories = ['Mandap', 'Florals', 'Lighting', 'Stage', 'Entrance'];
    defaultMediaItems.forEach((media, idx) => {
      tx.createOrReplace({
        _id: `media-${media.id}`,
        _type: 'galleryMedia',
        albumTitle: media.title,
        category: media.category || sampleCategories[idx % sampleCategories.length],
        type: media.type,
        eventName: media.subtitle,
        videoUrl: media.videoUrl,
        views: media.views,
        featured: true,
        displayOrder: idx + 1,
      });
    });

    // 5. Team Collection (Complete Team Members Seed)
    staticTeamMembers.forEach((member) => {
      tx.createOrReplace({
        _id: `team-${member.slug}`,
        _type: 'teamMember',
        name: member.name,
        slug: { _type: 'slug', current: member.slug },
        role: member.role,
        category: member.category || 'Core Leadership',
        shortBio: member.shortBio,
        detailedBio: member.detailedBio,
        experience: member.experience,
        skills: member.skills || [],
        socialLinks: member.socialLinks || [],
        contactInfo: member.contactInfo || {},
        featured: member.featured,
        displayOrder: member.displayOrder,
        seoTitle: member.seoTitle || '',
        seoDescription: member.seoDescription || '',
      });
    });

    // 6. Sacred Journey Collection
    weddingJourneysByReligion.forEach((religion) => {
      religion.steps.forEach((step, idx) => {
        tx.createOrReplace({
          _id: `sacred-journey-${religion.religionId}-${step.slug || idx}`,
          _type: 'sacredJourney',
          journeyTitle: step.title,
          slug: { _type: 'slug', current: step.slug || `step-${idx + 1}` },
          weddingTradition: {
            _type: 'reference',
            _ref: `tradition-${religion.religionId}`,
          },
          stepNumber: parseInt(step.stepNumber, 10) || idx + 1,
          displayOrder: idx + 1,
          journeyLabel: step.tagline || `Step ${step.stepNumber} of 06`,
          timeline: step.timing || '',
          ceremonyName: step.teluguName || '',
          shortDescription: step.description || '',
          detailedDescription: step.description || '',
          highlights: step.highlights || [],
          decorIdeas: step.decorIdeas || [],
        });
      });
    });

    await tx.commit();

    return NextResponse.json({
      success: true,
      message: 'Successfully seeded all 5 required Sanity Collections including full Team members!',
    });
  } catch (err: unknown) {
    console.error('Sanity Seed Error:', err);
    return NextResponse.json(
      { error: (err as Error)?.message || 'Failed to seed Sanity content' },
      { status: 500 }
    );
  }
}
