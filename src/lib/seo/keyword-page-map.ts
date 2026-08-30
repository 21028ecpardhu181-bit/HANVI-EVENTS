/**
 * Hanvi Events — Keyword-to-Page Map
 *
 * Derived from the master keyword universe in keywords.ts.
 * This file provides the SEO blueprint for each page: title tag, H1,
 * meta description, internal links, and content guidance.
 *
 * RULES:
 * 1. Each page has exactly ONE primary keyword.
 * 2. Title tags include the primary keyword and brand name.
 * 3. H1 = primary keyword or a natural variant.
 * 4. Meta descriptions are compelling + include primary keyword naturally.
 * 5. Content guidance describes what the page SHOULD contain, not word counts.
 * 6. Evidence Register is above this map. Claims require documentation.
 */

import { getKeywordsForPage, KEYWORD_UNIVERSE, type SEOKeyword } from './keywords';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type PageStatus = 'live' | 'planned' | 'conditional';

export interface PageSEOBlueprint {
  /** URL path (e.g. '/wedding-planner-kakinada') */
  readonly path: string;
  /** Current implementation status */
  readonly status: PageStatus;
  /** The exact primary keyword this page targets */
  readonly primaryKeyword: string;
  /** Recommended <title> tag */
  readonly titleTag: string;
  /** Recommended H1 heading */
  readonly h1: string;
  /** Recommended meta description */
  readonly metaDescription: string;
  /** Pages this page should link to */
  readonly internalLinksTo: readonly string[];
  /** What content the page must contain to satisfy search intent */
  readonly contentGuidance: string;
  /** Optional notes for the content team */
  readonly notes?: string;
}

// ---------------------------------------------------------------------------
// Master Page Blueprint Registry
// ---------------------------------------------------------------------------

export const PAGE_BLUEPRINTS: readonly PageSEOBlueprint[] = [
  // =========================================================================
  // HOMEPAGE
  // =========================================================================
  {
    path: '/',
    status: 'live',
    primaryKeyword: 'Hanvi Events',
    titleTag: 'Hanvi Events — Event Management & Wedding Planning in Kakinada',
    h1: '(Hero section — brand-first emotional headline)',
    metaDescription:
      'Hanvi Events is an event management and wedding planning studio in Kakinada, Andhra Pradesh. Contact Event Director Ch. Kala Prasad to discuss weddings, celebrations, and corporate events.',
    internalLinksTo: [
      '/event-management-company-kakinada',
      '/wedding-planner-kakinada',
      '/birthday-party-organisers-kakinada',
      '/corporate-event-management-kakinada',
      '/about',
      '/projects',
      '/contact',
    ],
    contentGuidance:
      'Brand cinema hero, trust indicators, service discovery grid, celebration planner, wedding tradition showcase, team showcase, FAQ section, and studio consultation CTA. The homepage establishes the Hanvi Events brand entity and links to all commercial service pages.',
  },

  // =========================================================================
  // PRIMARY COMMERCIAL: EVENT MANAGEMENT
  // =========================================================================
  {
    path: '/event-management-company-kakinada',
    status: 'live',
    primaryKeyword: 'event management company in Kakinada',
    titleTag: 'Event Management Company in Kakinada — Hanvi Events',
    h1: 'Event Management Company in Kakinada',
    metaDescription:
      'Hanvi Events is a Kakinada-based event management company offering wedding planning, mandap design, milestone celebrations, and corporate event coordination across East Godavari.',
    internalLinksTo: [
      '/wedding-planner-kakinada',
      '/mandap-decorators-kakinada',
      '/birthday-party-organisers-kakinada',
      '/corporate-event-management-kakinada',
      '/about',
      '/projects',
      '/contact',
      '/event-management-rajahmundry',
      '/event-management-east-godavari',
    ],
    contentGuidance:
      'This is the primary commercial entity page. Must contain: (1) Clear statement of what Hanvi Events does, (2) Service categories with links to dedicated pages, (3) Service areas served (Kakinada, Rajahmundry, East Godavari), (4) Why clients work with Hanvi — factual differentiators, (5) FAQ section: what event management includes, how pricing works, how early to book, (6) WhatsApp/Call CTAs. Content should comprehensively answer "What is an event management company in Kakinada and why should I contact Hanvi Events?"',
  },

  // =========================================================================
  // WEDDINGS
  // =========================================================================
  {
    path: '/wedding-planner-kakinada',
    status: 'live',
    primaryKeyword: 'wedding planner Kakinada',
    titleTag: 'Wedding Planner in Kakinada — Telugu Wedding Management | Hanvi Events',
    h1: 'Wedding Planner in Kakinada',
    metaDescription:
      'Hanvi Events provides wedding planning, mandap design, guest coordination, and vendor management for Telugu weddings in Kakinada and East Godavari. Contact the studio to discuss your wedding.',
    internalLinksTo: [
      '/mandap-decorators-kakinada',
      '/event-management-company-kakinada',
      '/about',
      '/projects',
      '/contact',
      '/guides/telugu-wedding-planning-checklist',
      '/guides/wedding-planning-cost-kakinada',
    ],
    contentGuidance:
      'Must contain: (1) Complete wedding services handled (mandap, catering, media, logistics), (2) H2 sections for each ceremony type: Engagement/Nischithardham, Haldi/Pellikuthuru, Mehendi, Sangeet, Sacred Muhurtham, Reception — each with what Hanvi coordinates, (3) Telugu wedding expertise specifics, (4) Venue coordination for Kakinada function halls, (5) FAQ using <details> elements: how to plan a Telugu wedding, what is included, how early to book, how pricing works, (6) Internal links to mandap page and guides. Content should comprehensively answer "Who can plan my Telugu wedding in Kakinada?"',
    notes: 'Wedding ceremony keywords (engagement, haldi, mehendi, sangeet, reception) are absorbed here as H2/H3 sections, NOT separate pages.',
  },

  // =========================================================================
  // MANDAP / DECORATION
  // =========================================================================
  {
    path: '/mandap-decorators-kakinada',
    status: 'live',
    primaryKeyword: 'mandap decorators Kakinada',
    titleTag: 'Mandap Decorators in Kakinada — Traditional & Floral Mandap Design | Hanvi Events',
    h1: 'Mandap Decorators in Kakinada',
    metaDescription:
      'Hanvi Events designs traditional Telugu wedding mandaps, fresh floral canopies, temple bell structures, and contemporary acrylic stages for Muhurtham ceremonies in Kakinada.',
    internalLinksTo: [
      '/wedding-planner-kakinada',
      '/event-management-company-kakinada',
      '/projects',
      '/contact',
      '/guides/wedding-decoration-cost-kakinada',
    ],
    contentGuidance:
      'Must contain: (1) Mandap style options with material details — Temple Bell, Floral Dome, Contemporary Acrylic, (2) Floral sourcing specifics (Rajanigandha, Jasmine, Marigold, imported roses), (3) Setup logistics — timeline, structural requirements, venue coordination, (4) Reception stage and entrance decoration capabilities, (5) Design consultation process, (6) FAQ using <details> elements: how much does mandap decoration cost, what flowers are used, how early to book, (7) Links to wedding planning page and decoration cost guide. Content should comprehensively answer "Who can build my wedding mandap in Kakinada?"',
  },

  // =========================================================================
  // BIRTHDAYS & SOCIAL EVENTS
  // =========================================================================
  {
    path: '/birthday-party-organisers-kakinada',
    status: 'live',
    primaryKeyword: 'birthday party organisers Kakinada',
    titleTag: 'Birthday Party Organisers in Kakinada — Celebrations & Milestones | Hanvi Events',
    h1: 'Birthday Party Organisers in Kakinada',
    metaDescription:
      'Hanvi Events organises birthday parties, cradle ceremonies, baby showers, half saree functions, and milestone celebrations in Kakinada. Contact the studio to discuss your celebration.',
    internalLinksTo: [
      '/event-management-company-kakinada',
      '/projects',
      '/contact',
      '/guides/birthday-party-planning-kakinada',
    ],
    contentGuidance:
      'Must contain H2 sections for each celebration type: (1) First Birthday Decoration — themes, cradle setup, cake staging, (2) Kids Birthday Party — themed decor, games, entertainment, (3) Adult Milestone Birthdays — elegant setups, (4) Baby Shower (Seemantham) — traditional and modern, (5) Cradle Ceremony / Barasala — naming ceremony setup, (6) Half Saree (Langa Voni) Function — traditional coming-of-age celebration, (7) Dhoti Ceremony — for boys, (8) Anniversary Celebrations, (9) Housewarming (Griha Pravesham), (10) Planning process steps, (11) FAQ using <details> elements. Content should comprehensively answer "Who organises birthday parties and milestone celebrations in Kakinada?"',
    notes: 'All social event keywords (baby shower, naming ceremony, half saree, dhoti, housewarming, anniversary) are absorbed here as H2 sections.',
  },

  // =========================================================================
  // CORPORATE EVENTS
  // =========================================================================
  {
    path: '/corporate-event-management-kakinada',
    status: 'live',
    primaryKeyword: 'corporate event management Kakinada',
    titleTag: 'Corporate Event Management in Kakinada — Hanvi Events',
    h1: 'Corporate Event Management in Kakinada',
    metaDescription:
      'Hanvi Events provides corporate event planning, staging, AV production, and day-of coordination for conferences, annual days, product launches, and brand events in Kakinada.',
    internalLinksTo: [
      '/event-management-company-kakinada',
      '/projects',
      '/contact',
    ],
    contentGuidance:
      'Must contain H2 sections for each corporate event type: (1) Annual Day & Employee Celebrations — stage design, awards, entertainment, (2) Product Launch Events — brand staging, media coordination, (3) Conferences & Seminars — AV setup, speaker podiums, registration, (4) Brand Activation & Exhibitions — booth design, promotional setups, (5) Corporate Award Ceremonies — formal staging, lighting, (6) AV & Staging Capabilities — sound, lighting, projection, truss, (7) Planning and coordination process, (8) FAQ using <details> elements. Content should answer "Who handles corporate events in Kakinada?"',
  },

  // =========================================================================
  // LOCATION: RAJAHMUNDRY
  // =========================================================================
  {
    path: '/event-management-rajahmundry',
    status: 'planned',
    primaryKeyword: 'event management Rajahmundry',
    titleTag: 'Event Management in Rajahmundry — Hanvi Events',
    h1: 'Event Management in Rajahmundry',
    metaDescription:
      'Hanvi Events provides event management, wedding planning, and celebration coordination in Rajahmundry (Rajamahendravaram). Contact the Kakinada studio to discuss your Rajahmundry event.',
    internalLinksTo: [
      '/wedding-planner-rajahmundry',
      '/event-management-company-kakinada',
      '/about',
      '/projects',
      '/contact',
    ],
    contentGuidance:
      'Must contain Rajahmundry-specific content: (1) How Hanvi serves Rajahmundry from the Kakinada studio, (2) Rajahmundry venue knowledge — specific function halls, convention centers, (3) Service coverage: weddings, birthdays, corporate events, (4) Logistics between Kakinada and Rajahmundry, (5) Local cultural considerations, (6) FAQ specific to Rajahmundry events. Do NOT copy-paste the Kakinada page with city name substituted.',
    notes: 'Use both "Rajahmundry" and "Rajamahendravaram" naturally in content.',
  },

  // =========================================================================
  // LOCATION: RAJAHMUNDRY WEDDINGS
  // =========================================================================
  {
    path: '/wedding-planner-rajahmundry',
    status: 'planned',
    primaryKeyword: 'wedding planner Rajahmundry',
    titleTag: 'Wedding Planner in Rajahmundry — Hanvi Events',
    h1: 'Wedding Planner in Rajahmundry',
    metaDescription:
      'Hanvi Events provides Telugu wedding planning, mandap design, and celebration coordination in Rajahmundry. Contact the studio to discuss your Rajahmundry wedding.',
    internalLinksTo: [
      '/event-management-rajahmundry',
      '/wedding-planner-kakinada',
      '/mandap-decorators-kakinada',
      '/projects',
      '/contact',
    ],
    contentGuidance:
      'Rajahmundry-specific wedding planning: (1) Rajahmundry wedding venues and function halls, (2) Traditional Godavari wedding customs, (3) Mandap and decoration services for Rajahmundry events, (4) Guest management and logistics coordination, (5) FAQ. Must contain genuinely unique Rajahmundry content.',
  },

  // =========================================================================
  // LOCATION: EAST GODAVARI DISTRICT
  // =========================================================================
  {
    path: '/event-management-east-godavari',
    status: 'planned',
    primaryKeyword: 'event management East Godavari',
    titleTag: 'Event Management in East Godavari District — Hanvi Events',
    h1: 'Event Management in East Godavari',
    metaDescription:
      'Hanvi Events provides event management and wedding planning across East Godavari district — including Kakinada, Rajahmundry, Samalkota, Pithapuram, Amalapuram, and surrounding towns.',
    internalLinksTo: [
      '/event-management-company-kakinada',
      '/event-management-rajahmundry',
      '/wedding-planner-kakinada',
      '/about',
      '/projects',
      '/contact',
    ],
    contentGuidance:
      'District-level service page: (1) Towns and areas served within East Godavari — Samalkota, Pithapuram, Peddapuram, Tuni, Amalapuram, Mandapeta, (2) Service categories available across the district, (3) Logistics and coordination from the Kakinada studio, (4) Links to city-specific pages (Kakinada, Rajahmundry), (5) FAQ. This page establishes district-level authority without duplicating city pages.',
  },

  // =========================================================================
  // ENTITY: ABOUT
  // =========================================================================
  {
    path: '/about',
    status: 'live',
    primaryKeyword: 'Hanvi Events',
    titleTag: 'About Hanvi Events — Kakinada Event Planning Studio',
    h1: 'About Hanvi Events Kakinada',
    metaDescription:
      'Learn about Hanvi Events, a Kakinada event planning studio led by Ch. Kala Prasad. Contact the team to discuss weddings, celebrations, and event coordination.',
    internalLinksTo: [
      '/event-management-company-kakinada',
      '/wedding-planner-kakinada',
      '/projects',
      '/contact',
      '/team/ch-kala-prasad',
    ],
    contentGuidance:
      'Entity canonical source page answering: Who is Hanvi Events? Where is the studio? Who leads it? What services are offered? What areas are served? How to contact? Links to proof (projects) and services.',
  },

  // =========================================================================
  // ENTITY: FOUNDER
  // =========================================================================
  {
    path: '/team/ch-kala-prasad',
    status: 'live',
    primaryKeyword: 'Ch Kala Prasad',
    titleTag: 'Ch. Kala Prasad — Founder & Event Director | Hanvi Events',
    h1: 'Ch. Kala Prasad',
    metaDescription:
      'Ch. Kala Prasad is the founder and event director of Hanvi Events in Kakinada, Andhra Pradesh. Contact the studio to discuss event planning and coordination.',
    internalLinksTo: [
      '/about',
      '/event-management-company-kakinada',
      '/wedding-planner-kakinada',
      '/projects',
      '/contact',
    ],
    contentGuidance:
      'Founder entity page with Person schema. Only evidence-backed biographical details. Connect founder to business entity via worksFor. Include knowsAbout topics. Link to Instagram, YouTube. Do NOT publish unverified experience claims.',
    notes: 'Evidence Register must confirm all biographical facts before publishing.',
  },

  // =========================================================================
  // GUIDES (PLANNED)
  // =========================================================================
  {
    path: '/guides/wedding-planning-cost-kakinada',
    status: 'planned',
    primaryKeyword: 'how much does wedding planning cost in Kakinada',
    titleTag: 'Wedding Planning Cost in Kakinada — Price Guide | Hanvi Events',
    h1: 'How Much Does Wedding Planning Cost in Kakinada?',
    metaDescription:
      'A practical guide to wedding planning costs in Kakinada — covering mandap decoration, catering, photography, and coordination. Prices depend on your event scope.',
    internalLinksTo: [
      '/wedding-planner-kakinada',
      '/mandap-decorators-kakinada',
      '/projects',
      '/contact',
    ],
    contentGuidance:
      'Honest cost guidance: (1) What factors determine wedding costs (venue, guest count, decor scope, vendors, season), (2) Component costs — mandap, catering, photography, entertainment, (3) How to get an accurate estimate, (4) What to ask your event planner, (5) CTA to contact Hanvi for a tailored estimate. Prices depend on events — state this clearly. Do NOT publish fake price ranges.',
  },
  {
    path: '/guides/wedding-decoration-cost-kakinada',
    status: 'planned',
    primaryKeyword: 'how much does wedding decoration cost in Kakinada',
    titleTag: 'Wedding Decoration Cost in Kakinada — Price Guide | Hanvi Events',
    h1: 'How Much Does Wedding Decoration Cost in Kakinada?',
    metaDescription:
      'A practical guide to wedding decoration and mandap costs in Kakinada — covering floral mandaps, stage setups, entrance decor, and lighting.',
    internalLinksTo: [
      '/mandap-decorators-kakinada',
      '/wedding-planner-kakinada',
      '/projects',
      '/contact',
    ],
    contentGuidance:
      'Decoration cost factors: (1) Types of mandap decoration and their cost drivers, (2) Floral vs artificial — pricing differences, (3) Stage and entrance decoration, (4) Lighting and AV additions, (5) How venue size affects costs, (6) How to get an estimate from Hanvi. Honest and practical.',
  },
  {
    path: '/guides/telugu-wedding-planning-checklist',
    status: 'planned',
    primaryKeyword: 'how to plan a Telugu wedding',
    titleTag: 'Telugu Wedding Planning Checklist — Complete Guide | Hanvi Events',
    h1: 'How to Plan a Telugu Wedding',
    metaDescription:
      'A complete Telugu wedding planning checklist covering ceremony sequence, Muhurtham timing, mandap requirements, vendor coordination, and guest management.',
    internalLinksTo: [
      '/wedding-planner-kakinada',
      '/mandap-decorators-kakinada',
      '/projects',
      '/contact',
    ],
    contentGuidance:
      'Cultural authority piece: (1) Telugu wedding ceremony sequence — Nischithardham, Pellikuthuru, Snathakam, Muhurtham, Talambralu, (2) Timeline planning — months before, weeks before, day-of, (3) Mandap and venue requirements, (4) Vendor checklist, (5) Guest management, (6) Traditional customs to discuss with your planner. Must reflect genuine Telugu wedding knowledge.',
  },
  {
    path: '/guides/how-to-choose-wedding-planner-kakinada',
    status: 'planned',
    primaryKeyword: 'how to choose a wedding planner in Kakinada',
    titleTag: 'How to Choose a Wedding Planner in Kakinada | Hanvi Events',
    h1: 'How to Choose a Wedding Planner in Kakinada',
    metaDescription:
      'A practical guide to selecting the right wedding planner in Kakinada — what to ask, what to verify, and how to evaluate proposals.',
    internalLinksTo: [
      '/wedding-planner-kakinada',
      '/about',
      '/projects',
      '/contact',
    ],
    contentGuidance:
      'Buyer guidance: (1) Questions to ask a potential wedding planner, (2) What to verify — portfolio, references, pricing transparency, (3) Red flags, (4) How to evaluate proposals, (5) When to book, (6) What a planner should provide vs what you manage. Genuinely helpful, not self-promotional.',
  },
  {
    path: '/guides/birthday-party-planning-kakinada',
    status: 'planned',
    primaryKeyword: 'how to plan a birthday party',
    titleTag: 'Birthday Party Planning Guide in Kakinada | Hanvi Events',
    h1: 'How to Plan a Birthday Party in Kakinada',
    metaDescription:
      'A practical guide to planning birthday parties in Kakinada — covering themes, venues, decoration, catering, and entertainment options for all age groups.',
    internalLinksTo: [
      '/birthday-party-organisers-kakinada',
      '/projects',
      '/contact',
    ],
    contentGuidance:
      'Birthday planning guide: (1) Choosing a theme by age group, (2) Venue options in Kakinada, (3) Decoration and setup, (4) Food and entertainment, (5) Planning timeline, (6) How to work with an event planner. Practical and locally relevant.',
  },

  // =========================================================================
  // SUPPORTING PAGES
  // =========================================================================
  {
    path: '/projects',
    status: 'live',
    primaryKeyword: 'Hanvi Events projects',
    titleTag: 'Real Event Projects & Case Studies | Hanvi Events',
    h1: 'Our Event Projects',
    metaDescription:
      'Browse documented event projects by Hanvi Events — real celebrations with original photographs, client permissions, and detailed execution notes.',
    internalLinksTo: [
      '/about',
      '/event-management-company-kakinada',
      '/wedding-planner-kakinada',
      '/contact',
    ],
    contentGuidance:
      'Case study portfolio. Only shows projects that pass the publication rule (published, consentStatus, sourceAsset, photos, testimonialPermission). Empty state is honest until real projects are added.',
  },
  {
    path: '/contact',
    status: 'live',
    primaryKeyword: 'Hanvi Events contact',
    titleTag: 'Contact Hanvi Events — Phone, WhatsApp & Studio Address',
    h1: 'Contact Hanvi Events',
    metaDescription:
      'Contact Hanvi Events in Kakinada. Call +91 97009 29650 or message +91 63054 57612 on WhatsApp. Studio: 1st Floor, Subhamasthu Showroom, Suryanarayana Puram.',
    internalLinksTo: [
      '/about',
      '/event-management-company-kakinada',
    ],
    contentGuidance:
      'Contact page with phone, WhatsApp, email, studio address, and Google Maps embed. All NAP matches siteConfig exactly.',
  },
  {
    path: '/services',
    status: 'live',
    primaryKeyword: 'Hanvi Events services',
    titleTag: 'Event Services — Wedding, Birthday, Corporate & More | Hanvi Events',
    h1: 'Our Event Services',
    metaDescription:
      'Explore event services by Hanvi Events — weddings, mandap decoration, birthdays, corporate events, catering, bridal makeup, and entertainment.',
    internalLinksTo: [
      '/event-management-company-kakinada',
      '/wedding-planner-kakinada',
      '/mandap-decorators-kakinada',
      '/birthday-party-organisers-kakinada',
      '/corporate-event-management-kakinada',
    ],
    contentGuidance:
      'Service catalogue page linking to individual service detail pages and commercial landing pages.',
  },
  {
    path: '/packages',
    status: 'live',
    primaryKeyword: 'event management packages Kakinada',
    titleTag: 'Event Packages & Pricing — Hanvi Events Kakinada',
    h1: 'Event Packages',
    metaDescription:
      'Explore event packages by Hanvi Events in Kakinada — wedding, birthday, and corporate event packages. Contact the studio for a tailored estimate.',
    internalLinksTo: [
      '/event-management-company-kakinada',
      '/contact',
    ],
    contentGuidance:
      'Package overview page. Pricing depends on events — direct visitors to contact for a tailored estimate. Do not publish fixed price ranges without evidence.',
  },
] as const;

// ---------------------------------------------------------------------------
// Utility functions
// ---------------------------------------------------------------------------

/** Get the SEO blueprint for a specific page */
export function getPageBlueprint(path: string): PageSEOBlueprint | undefined {
  return PAGE_BLUEPRINTS.find((bp) => bp.path === path);
}

/** Get all live page blueprints */
export function getLivePages(): readonly PageSEOBlueprint[] {
  return PAGE_BLUEPRINTS.filter((bp) => bp.status === 'live');
}

/** Get all planned page blueprints */
export function getPlannedPages(): readonly PageSEOBlueprint[] {
  return PAGE_BLUEPRINTS.filter((bp) => bp.status === 'planned');
}

/** Get the complete keyword assignment for a page (keywords + blueprint) */
export function getPageSEOProfile(path: string): {
  blueprint: PageSEOBlueprint | undefined;
  keywords: readonly SEOKeyword[];
  primaryKeyword: SEOKeyword | undefined;
  secondaryKeywords: readonly SEOKeyword[];
  supportingKeywords: readonly SEOKeyword[];
} {
  const blueprint = getPageBlueprint(path);
  const keywords = getKeywordsForPage(path);
  return {
    blueprint,
    keywords,
    primaryKeyword: keywords.find((kw) => kw.role === 'primary'),
    secondaryKeywords: keywords.filter((kw) => kw.role === 'secondary'),
    supportingKeywords: keywords.filter((kw) => kw.role === 'supporting'),
  };
}

/** Detect keyword cannibalization: same keyword assigned to multiple pages */
export function detectCannibalization(): Array<{
  keyword: string;
  pages: string[];
}> {
  const keywordPages = new Map<string, Set<string>>();

  for (const kw of KEYWORD_UNIVERSE) {
    if (kw.role === 'primary' || kw.role === 'secondary') {
      const existing = keywordPages.get(kw.keyword) ?? new Set<string>();
      existing.add(kw.assignedPage);
      keywordPages.set(kw.keyword, existing);
    }
  }

  const conflicts: Array<{ keyword: string; pages: string[] }> = [];
  for (const [keyword, pages] of keywordPages) {
    if (pages.size > 1) {
      conflicts.push({ keyword, pages: [...pages] });
    }
  }
  return conflicts;
}

