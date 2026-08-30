/**
 * Hanvi Events — Master SEO Keyword Universe
 *
 * This is the canonical keyword planning database. It is NOT injected into pages.
 * It exists so that every keyword has exactly one assigned page, preventing
 * cannibalization and providing a single source of truth for content planning.
 *
 * RULES:
 * 1. Evidence Register is above the keyword database. Keywords tell you what
 *    people search. Evidence determines what Hanvi is allowed to claim.
 * 2. A keyword with `assignedPage` means the content for that keyword should
 *    live on that page — either as the primary topic, a section, or natural
 *    body text. It does NOT mean creating a separate page per keyword.
 * 3. Priority 1 = highest commercial value. Priority 5 = lowest / long-tail.
 * 4. Location pages are only published if Hanvi genuinely serves that location.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type SearchIntent =
  | 'commercial'
  | 'informational'
  | 'navigational'
  | 'transactional';

/** 1 = highest value, 5 = long-tail / low volume */
export type KeywordPriority = 1 | 2 | 3 | 4 | 5;

export type KeywordCluster =
  | 'coreKakinada'
  | 'weddings'
  | 'weddingDecor'
  | 'weddingCeremonies'
  | 'birthdaysSocial'
  | 'corporate'
  | 'rajahmundry'
  | 'eastGodavari'
  | 'commercialModifiers'
  | 'informational'
  | 'entityBrand'
  | 'founderEntity'
  | 'aiPrompts';

export type KeywordRole = 'primary' | 'secondary' | 'supporting';

export interface SEOKeyword {
  /** The exact search phrase */
  readonly keyword: string;
  /** Topical cluster this keyword belongs to */
  readonly cluster: KeywordCluster;
  /** Dominant search intent */
  readonly intent: SearchIntent;
  /** Value priority: 1 = highest, 5 = lowest */
  readonly priority: KeywordPriority;
  /** The page URL path this keyword is assigned to */
  readonly assignedPage: string;
  /** Whether this is the primary, secondary, or supporting keyword for assignedPage */
  readonly role: KeywordRole;
  /** Optional planning note */
  readonly notes?: string;
}

// ---------------------------------------------------------------------------
// Master Keyword Universe
// ---------------------------------------------------------------------------

export const KEYWORD_UNIVERSE: readonly SEOKeyword[] = [
  // =========================================================================
  // CLUSTER: Core Kakinada — Commercial
  // These are the highest-priority generic event management keywords
  // =========================================================================
  { keyword: 'event management company in Kakinada', cluster: 'coreKakinada', intent: 'commercial', priority: 1, assignedPage: '/event-management-company-kakinada', role: 'primary' },
  { keyword: 'event management companies in Kakinada', cluster: 'coreKakinada', intent: 'commercial', priority: 1, assignedPage: '/event-management-company-kakinada', role: 'secondary' },
  { keyword: 'event management Kakinada', cluster: 'coreKakinada', intent: 'commercial', priority: 1, assignedPage: '/event-management-company-kakinada', role: 'secondary' },
  { keyword: 'event planners in Kakinada', cluster: 'coreKakinada', intent: 'commercial', priority: 1, assignedPage: '/event-management-company-kakinada', role: 'secondary' },
  { keyword: 'event planner Kakinada', cluster: 'coreKakinada', intent: 'commercial', priority: 1, assignedPage: '/event-management-company-kakinada', role: 'secondary' },
  { keyword: 'event organisers in Kakinada', cluster: 'coreKakinada', intent: 'commercial', priority: 2, assignedPage: '/event-management-company-kakinada', role: 'supporting' },
  { keyword: 'event organizers in Kakinada', cluster: 'coreKakinada', intent: 'commercial', priority: 2, assignedPage: '/event-management-company-kakinada', role: 'supporting' },
  { keyword: 'best event management company in Kakinada', cluster: 'coreKakinada', intent: 'commercial', priority: 2, assignedPage: '/event-management-company-kakinada', role: 'supporting', notes: 'Do not claim "best" — let evidence earn it' },
  { keyword: 'best event planners in Kakinada', cluster: 'coreKakinada', intent: 'commercial', priority: 2, assignedPage: '/event-management-company-kakinada', role: 'supporting' },
  { keyword: 'best event organisers in Kakinada', cluster: 'coreKakinada', intent: 'commercial', priority: 2, assignedPage: '/event-management-company-kakinada', role: 'supporting' },
  { keyword: 'event management services Kakinada', cluster: 'coreKakinada', intent: 'commercial', priority: 2, assignedPage: '/event-management-company-kakinada', role: 'supporting' },
  { keyword: 'professional event management Kakinada', cluster: 'coreKakinada', intent: 'commercial', priority: 3, assignedPage: '/event-management-company-kakinada', role: 'supporting' },
  { keyword: 'event planning services Kakinada', cluster: 'coreKakinada', intent: 'commercial', priority: 2, assignedPage: '/event-management-company-kakinada', role: 'supporting' },
  { keyword: 'party planners in Kakinada', cluster: 'coreKakinada', intent: 'commercial', priority: 3, assignedPage: '/', role: 'supporting' },
  { keyword: 'party organisers in Kakinada', cluster: 'coreKakinada', intent: 'commercial', priority: 3, assignedPage: '/', role: 'supporting' },
  { keyword: 'event decoration Kakinada', cluster: 'coreKakinada', intent: 'commercial', priority: 2, assignedPage: '/event-management-company-kakinada', role: 'supporting' },
  { keyword: 'event decorators in Kakinada', cluster: 'coreKakinada', intent: 'commercial', priority: 2, assignedPage: '/event-management-company-kakinada', role: 'supporting' },
  { keyword: 'event management near Kakinada', cluster: 'coreKakinada', intent: 'commercial', priority: 3, assignedPage: '/event-management-company-kakinada', role: 'supporting' },
  { keyword: 'event planner near Kakinada', cluster: 'coreKakinada', intent: 'commercial', priority: 3, assignedPage: '/event-management-company-kakinada', role: 'supporting' },
  { keyword: 'event organisers near me Kakinada', cluster: 'coreKakinada', intent: 'commercial', priority: 3, assignedPage: '/event-management-company-kakinada', role: 'supporting' },

  // =========================================================================
  // CLUSTER: Weddings — Commercial
  // Assigned to /wedding-planner-kakinada
  // =========================================================================
  { keyword: 'wedding planner Kakinada', cluster: 'weddings', intent: 'commercial', priority: 1, assignedPage: '/wedding-planner-kakinada', role: 'primary' },
  { keyword: 'wedding planners in Kakinada', cluster: 'weddings', intent: 'commercial', priority: 1, assignedPage: '/wedding-planner-kakinada', role: 'secondary' },
  { keyword: 'wedding planning Kakinada', cluster: 'weddings', intent: 'commercial', priority: 1, assignedPage: '/wedding-planner-kakinada', role: 'secondary' },
  { keyword: 'wedding event management Kakinada', cluster: 'weddings', intent: 'commercial', priority: 1, assignedPage: '/wedding-planner-kakinada', role: 'secondary' },
  { keyword: 'marriage event management Kakinada', cluster: 'weddings', intent: 'commercial', priority: 1, assignedPage: '/wedding-planner-kakinada', role: 'secondary' },
  { keyword: 'marriage planners Kakinada', cluster: 'weddings', intent: 'commercial', priority: 2, assignedPage: '/wedding-planner-kakinada', role: 'secondary' },
  { keyword: 'marriage event organisers Kakinada', cluster: 'weddings', intent: 'commercial', priority: 2, assignedPage: '/wedding-planner-kakinada', role: 'supporting' },
  { keyword: 'wedding organisers Kakinada', cluster: 'weddings', intent: 'commercial', priority: 2, assignedPage: '/wedding-planner-kakinada', role: 'supporting' },
  { keyword: 'wedding organizer Kakinada', cluster: 'weddings', intent: 'commercial', priority: 2, assignedPage: '/wedding-planner-kakinada', role: 'supporting' },
  { keyword: 'best wedding planner Kakinada', cluster: 'weddings', intent: 'commercial', priority: 2, assignedPage: '/wedding-planner-kakinada', role: 'supporting', notes: 'Do not claim "best"' },
  { keyword: 'best wedding planners in Kakinada', cluster: 'weddings', intent: 'commercial', priority: 2, assignedPage: '/wedding-planner-kakinada', role: 'supporting' },
  { keyword: 'wedding management company Kakinada', cluster: 'weddings', intent: 'commercial', priority: 2, assignedPage: '/wedding-planner-kakinada', role: 'supporting' },
  { keyword: 'wedding management services Kakinada', cluster: 'weddings', intent: 'commercial', priority: 3, assignedPage: '/wedding-planner-kakinada', role: 'supporting' },
  { keyword: 'complete wedding planning Kakinada', cluster: 'weddings', intent: 'commercial', priority: 2, assignedPage: '/wedding-planner-kakinada', role: 'supporting' },
  { keyword: 'full wedding planning Kakinada', cluster: 'weddings', intent: 'commercial', priority: 3, assignedPage: '/wedding-planner-kakinada', role: 'supporting' },
  { keyword: 'wedding coordination Kakinada', cluster: 'weddings', intent: 'commercial', priority: 3, assignedPage: '/wedding-planner-kakinada', role: 'supporting' },
  { keyword: 'wedding coordinator Kakinada', cluster: 'weddings', intent: 'commercial', priority: 3, assignedPage: '/wedding-planner-kakinada', role: 'supporting' },
  { keyword: 'Telugu wedding planner Kakinada', cluster: 'weddings', intent: 'commercial', priority: 1, assignedPage: '/wedding-planner-kakinada', role: 'secondary' },
  { keyword: 'Telugu wedding planning Kakinada', cluster: 'weddings', intent: 'commercial', priority: 2, assignedPage: '/wedding-planner-kakinada', role: 'supporting' },
  { keyword: 'traditional wedding planner Kakinada', cluster: 'weddings', intent: 'commercial', priority: 2, assignedPage: '/wedding-planner-kakinada', role: 'supporting' },
  { keyword: 'South Indian wedding planner Kakinada', cluster: 'weddings', intent: 'commercial', priority: 2, assignedPage: '/wedding-planner-kakinada', role: 'supporting' },
  { keyword: 'luxury wedding planner Kakinada', cluster: 'weddings', intent: 'commercial', priority: 3, assignedPage: '/wedding-planner-kakinada', role: 'supporting' },
  { keyword: 'wedding planner East Godavari', cluster: 'weddings', intent: 'commercial', priority: 2, assignedPage: '/event-management-east-godavari', role: 'secondary' },
  { keyword: 'wedding planners East Godavari', cluster: 'weddings', intent: 'commercial', priority: 2, assignedPage: '/event-management-east-godavari', role: 'supporting' },
  { keyword: 'marriage planners East Godavari', cluster: 'weddings', intent: 'commercial', priority: 3, assignedPage: '/event-management-east-godavari', role: 'supporting' },

  // =========================================================================
  // CLUSTER: Wedding Decoration / Mandap — Commercial
  // Assigned to /mandap-decorators-kakinada
  // =========================================================================
  { keyword: 'wedding decorators Kakinada', cluster: 'weddingDecor', intent: 'commercial', priority: 1, assignedPage: '/mandap-decorators-kakinada', role: 'secondary' },
  { keyword: 'wedding decoration Kakinada', cluster: 'weddingDecor', intent: 'commercial', priority: 1, assignedPage: '/mandap-decorators-kakinada', role: 'secondary' },
  { keyword: 'wedding decoration services Kakinada', cluster: 'weddingDecor', intent: 'commercial', priority: 2, assignedPage: '/mandap-decorators-kakinada', role: 'supporting' },
  { keyword: 'wedding stage decoration Kakinada', cluster: 'weddingDecor', intent: 'commercial', priority: 1, assignedPage: '/mandap-decorators-kakinada', role: 'secondary' },
  { keyword: 'wedding stage decorators Kakinada', cluster: 'weddingDecor', intent: 'commercial', priority: 2, assignedPage: '/mandap-decorators-kakinada', role: 'supporting' },
  { keyword: 'marriage decoration Kakinada', cluster: 'weddingDecor', intent: 'commercial', priority: 2, assignedPage: '/mandap-decorators-kakinada', role: 'supporting' },
  { keyword: 'marriage decorators Kakinada', cluster: 'weddingDecor', intent: 'commercial', priority: 2, assignedPage: '/mandap-decorators-kakinada', role: 'supporting' },
  { keyword: 'mandap decoration Kakinada', cluster: 'weddingDecor', intent: 'commercial', priority: 1, assignedPage: '/mandap-decorators-kakinada', role: 'secondary' },
  { keyword: 'mandap decorators Kakinada', cluster: 'weddingDecor', intent: 'commercial', priority: 1, assignedPage: '/mandap-decorators-kakinada', role: 'primary' },
  { keyword: 'wedding mandap Kakinada', cluster: 'weddingDecor', intent: 'commercial', priority: 1, assignedPage: '/mandap-decorators-kakinada', role: 'secondary' },
  { keyword: 'Telugu mandap decoration Kakinada', cluster: 'weddingDecor', intent: 'commercial', priority: 2, assignedPage: '/mandap-decorators-kakinada', role: 'supporting' },
  { keyword: 'traditional mandap decoration Kakinada', cluster: 'weddingDecor', intent: 'commercial', priority: 2, assignedPage: '/mandap-decorators-kakinada', role: 'supporting' },
  { keyword: 'floral mandap Kakinada', cluster: 'weddingDecor', intent: 'commercial', priority: 2, assignedPage: '/mandap-decorators-kakinada', role: 'supporting' },
  { keyword: 'wedding floral decoration Kakinada', cluster: 'weddingDecor', intent: 'commercial', priority: 2, assignedPage: '/mandap-decorators-kakinada', role: 'supporting' },
  { keyword: 'reception decoration Kakinada', cluster: 'weddingDecor', intent: 'commercial', priority: 2, assignedPage: '/mandap-decorators-kakinada', role: 'supporting' },
  { keyword: 'reception stage decoration Kakinada', cluster: 'weddingDecor', intent: 'commercial', priority: 2, assignedPage: '/mandap-decorators-kakinada', role: 'supporting' },
  { keyword: 'wedding backdrop decoration Kakinada', cluster: 'weddingDecor', intent: 'commercial', priority: 3, assignedPage: '/mandap-decorators-kakinada', role: 'supporting' },
  { keyword: 'wedding entrance decoration Kakinada', cluster: 'weddingDecor', intent: 'commercial', priority: 3, assignedPage: '/mandap-decorators-kakinada', role: 'supporting' },
  { keyword: 'wedding venue decoration Kakinada', cluster: 'weddingDecor', intent: 'commercial', priority: 3, assignedPage: '/mandap-decorators-kakinada', role: 'supporting' },
  { keyword: 'stage decorators Kakinada', cluster: 'weddingDecor', intent: 'commercial', priority: 2, assignedPage: '/mandap-decorators-kakinada', role: 'supporting' },

  // =========================================================================
  // CLUSTER: Wedding Ceremonies — Commercial
  // Absorbed as H2/H3 sections inside /wedding-planner-kakinada
  // =========================================================================
  { keyword: 'engagement event planner Kakinada', cluster: 'weddingCeremonies', intent: 'commercial', priority: 2, assignedPage: '/wedding-planner-kakinada', role: 'supporting', notes: 'H2 section within wedding page' },
  { keyword: 'engagement decoration Kakinada', cluster: 'weddingCeremonies', intent: 'commercial', priority: 2, assignedPage: '/wedding-planner-kakinada', role: 'supporting' },
  { keyword: 'engagement ceremony planner Kakinada', cluster: 'weddingCeremonies', intent: 'commercial', priority: 3, assignedPage: '/wedding-planner-kakinada', role: 'supporting' },
  { keyword: 'haldi decoration Kakinada', cluster: 'weddingCeremonies', intent: 'commercial', priority: 3, assignedPage: '/wedding-planner-kakinada', role: 'supporting' },
  { keyword: 'haldi event planner Kakinada', cluster: 'weddingCeremonies', intent: 'commercial', priority: 3, assignedPage: '/wedding-planner-kakinada', role: 'supporting' },
  { keyword: 'mehendi event planner Kakinada', cluster: 'weddingCeremonies', intent: 'commercial', priority: 3, assignedPage: '/wedding-planner-kakinada', role: 'supporting' },
  { keyword: 'mehendi decoration Kakinada', cluster: 'weddingCeremonies', intent: 'commercial', priority: 3, assignedPage: '/wedding-planner-kakinada', role: 'supporting' },
  { keyword: 'sangeet event planner Kakinada', cluster: 'weddingCeremonies', intent: 'commercial', priority: 3, assignedPage: '/wedding-planner-kakinada', role: 'supporting' },
  { keyword: 'sangeet decoration Kakinada', cluster: 'weddingCeremonies', intent: 'commercial', priority: 3, assignedPage: '/wedding-planner-kakinada', role: 'supporting' },
  { keyword: 'reception event planner Kakinada', cluster: 'weddingCeremonies', intent: 'commercial', priority: 2, assignedPage: '/wedding-planner-kakinada', role: 'supporting' },
  { keyword: 'wedding reception planner Kakinada', cluster: 'weddingCeremonies', intent: 'commercial', priority: 2, assignedPage: '/wedding-planner-kakinada', role: 'supporting' },
  { keyword: 'bride entry decoration Kakinada', cluster: 'weddingCeremonies', intent: 'commercial', priority: 4, assignedPage: '/wedding-planner-kakinada', role: 'supporting' },
  { keyword: 'groom entry Kakinada', cluster: 'weddingCeremonies', intent: 'commercial', priority: 4, assignedPage: '/wedding-planner-kakinada', role: 'supporting' },
  { keyword: 'wedding welcome decoration Kakinada', cluster: 'weddingCeremonies', intent: 'commercial', priority: 3, assignedPage: '/mandap-decorators-kakinada', role: 'supporting' },
  { keyword: 'wedding hospitality management Kakinada', cluster: 'weddingCeremonies', intent: 'commercial', priority: 3, assignedPage: '/wedding-planner-kakinada', role: 'supporting' },

  // =========================================================================
  // CLUSTER: Birthday & Social Events — Commercial
  // Assigned to /birthday-party-organisers-kakinada
  // =========================================================================
  { keyword: 'birthday event planner Kakinada', cluster: 'birthdaysSocial', intent: 'commercial', priority: 1, assignedPage: '/birthday-party-organisers-kakinada', role: 'secondary' },
  { keyword: 'birthday party planner Kakinada', cluster: 'birthdaysSocial', intent: 'commercial', priority: 1, assignedPage: '/birthday-party-organisers-kakinada', role: 'secondary' },
  { keyword: 'birthday party organisers Kakinada', cluster: 'birthdaysSocial', intent: 'commercial', priority: 1, assignedPage: '/birthday-party-organisers-kakinada', role: 'primary' },
  { keyword: 'birthday party organizers Kakinada', cluster: 'birthdaysSocial', intent: 'commercial', priority: 1, assignedPage: '/birthday-party-organisers-kakinada', role: 'secondary' },
  { keyword: 'birthday decoration Kakinada', cluster: 'birthdaysSocial', intent: 'commercial', priority: 1, assignedPage: '/birthday-party-organisers-kakinada', role: 'secondary' },
  { keyword: 'birthday decorators Kakinada', cluster: 'birthdaysSocial', intent: 'commercial', priority: 2, assignedPage: '/birthday-party-organisers-kakinada', role: 'supporting' },
  { keyword: 'birthday event management Kakinada', cluster: 'birthdaysSocial', intent: 'commercial', priority: 2, assignedPage: '/birthday-party-organisers-kakinada', role: 'supporting' },
  { keyword: 'kids birthday party planner Kakinada', cluster: 'birthdaysSocial', intent: 'commercial', priority: 2, assignedPage: '/birthday-party-organisers-kakinada', role: 'supporting', notes: 'H2 section' },
  { keyword: 'kids birthday decoration Kakinada', cluster: 'birthdaysSocial', intent: 'commercial', priority: 2, assignedPage: '/birthday-party-organisers-kakinada', role: 'supporting' },
  { keyword: 'first birthday decoration Kakinada', cluster: 'birthdaysSocial', intent: 'commercial', priority: 2, assignedPage: '/birthday-party-organisers-kakinada', role: 'supporting' },
  { keyword: 'first birthday party planner Kakinada', cluster: 'birthdaysSocial', intent: 'commercial', priority: 2, assignedPage: '/birthday-party-organisers-kakinada', role: 'supporting' },
  { keyword: 'themed birthday party Kakinada', cluster: 'birthdaysSocial', intent: 'commercial', priority: 3, assignedPage: '/birthday-party-organisers-kakinada', role: 'supporting' },
  { keyword: 'birthday event organiser Kakinada', cluster: 'birthdaysSocial', intent: 'commercial', priority: 2, assignedPage: '/birthday-party-organisers-kakinada', role: 'supporting' },
  { keyword: 'birthday celebration planner Kakinada', cluster: 'birthdaysSocial', intent: 'commercial', priority: 3, assignedPage: '/birthday-party-organisers-kakinada', role: 'supporting' },
  { keyword: 'anniversary event planner Kakinada', cluster: 'birthdaysSocial', intent: 'commercial', priority: 2, assignedPage: '/birthday-party-organisers-kakinada', role: 'supporting', notes: 'H2 section' },
  { keyword: 'anniversary decoration Kakinada', cluster: 'birthdaysSocial', intent: 'commercial', priority: 3, assignedPage: '/birthday-party-organisers-kakinada', role: 'supporting' },
  { keyword: 'baby shower planner Kakinada', cluster: 'birthdaysSocial', intent: 'commercial', priority: 2, assignedPage: '/birthday-party-organisers-kakinada', role: 'supporting', notes: 'H2 section' },
  { keyword: 'baby shower decoration Kakinada', cluster: 'birthdaysSocial', intent: 'commercial', priority: 3, assignedPage: '/birthday-party-organisers-kakinada', role: 'supporting' },
  { keyword: 'naming ceremony planner Kakinada', cluster: 'birthdaysSocial', intent: 'commercial', priority: 2, assignedPage: '/birthday-party-organisers-kakinada', role: 'supporting', notes: 'H2 section: Barasala' },
  { keyword: 'cradle ceremony planner Kakinada', cluster: 'birthdaysSocial', intent: 'commercial', priority: 2, assignedPage: '/birthday-party-organisers-kakinada', role: 'supporting' },
  { keyword: 'barasala event planner Kakinada', cluster: 'birthdaysSocial', intent: 'commercial', priority: 2, assignedPage: '/birthday-party-organisers-kakinada', role: 'supporting' },
  { keyword: 'half saree function planner Kakinada', cluster: 'birthdaysSocial', intent: 'commercial', priority: 2, assignedPage: '/birthday-party-organisers-kakinada', role: 'supporting', notes: 'H2 section' },
  { keyword: 'half saree decoration Kakinada', cluster: 'birthdaysSocial', intent: 'commercial', priority: 3, assignedPage: '/birthday-party-organisers-kakinada', role: 'supporting' },
  { keyword: 'dhoti ceremony planner Kakinada', cluster: 'birthdaysSocial', intent: 'commercial', priority: 3, assignedPage: '/birthday-party-organisers-kakinada', role: 'supporting', notes: 'H2 section' },
  { keyword: 'housewarming event planner Kakinada', cluster: 'birthdaysSocial', intent: 'commercial', priority: 3, assignedPage: '/birthday-party-organisers-kakinada', role: 'supporting', notes: 'H2 section' },

  // =========================================================================
  // CLUSTER: Corporate Events — Commercial
  // Assigned to /corporate-event-management-kakinada
  // =========================================================================
  { keyword: 'corporate event management Kakinada', cluster: 'corporate', intent: 'commercial', priority: 1, assignedPage: '/corporate-event-management-kakinada', role: 'primary' },
  { keyword: 'corporate event planners Kakinada', cluster: 'corporate', intent: 'commercial', priority: 1, assignedPage: '/corporate-event-management-kakinada', role: 'secondary' },
  { keyword: 'corporate event organisers Kakinada', cluster: 'corporate', intent: 'commercial', priority: 2, assignedPage: '/corporate-event-management-kakinada', role: 'secondary' },
  { keyword: 'corporate event organizers Kakinada', cluster: 'corporate', intent: 'commercial', priority: 2, assignedPage: '/corporate-event-management-kakinada', role: 'supporting' },
  { keyword: 'corporate events Kakinada', cluster: 'corporate', intent: 'commercial', priority: 2, assignedPage: '/corporate-event-management-kakinada', role: 'secondary' },
  { keyword: 'corporate event planning Kakinada', cluster: 'corporate', intent: 'commercial', priority: 2, assignedPage: '/corporate-event-management-kakinada', role: 'supporting' },
  { keyword: 'corporate event management company Kakinada', cluster: 'corporate', intent: 'commercial', priority: 2, assignedPage: '/corporate-event-management-kakinada', role: 'supporting' },
  { keyword: 'annual day event management Kakinada', cluster: 'corporate', intent: 'commercial', priority: 2, assignedPage: '/corporate-event-management-kakinada', role: 'supporting', notes: 'H2 section' },
  { keyword: 'annual day organisers Kakinada', cluster: 'corporate', intent: 'commercial', priority: 3, assignedPage: '/corporate-event-management-kakinada', role: 'supporting' },
  { keyword: 'corporate party planner Kakinada', cluster: 'corporate', intent: 'commercial', priority: 3, assignedPage: '/corporate-event-management-kakinada', role: 'supporting' },
  { keyword: 'product launch event Kakinada', cluster: 'corporate', intent: 'commercial', priority: 2, assignedPage: '/corporate-event-management-kakinada', role: 'supporting', notes: 'H2 section' },
  { keyword: 'product launch organisers Kakinada', cluster: 'corporate', intent: 'commercial', priority: 3, assignedPage: '/corporate-event-management-kakinada', role: 'supporting' },
  { keyword: 'conference event management Kakinada', cluster: 'corporate', intent: 'commercial', priority: 2, assignedPage: '/corporate-event-management-kakinada', role: 'supporting', notes: 'H2 section' },
  { keyword: 'corporate conference planner Kakinada', cluster: 'corporate', intent: 'commercial', priority: 3, assignedPage: '/corporate-event-management-kakinada', role: 'supporting' },
  { keyword: 'business event management Kakinada', cluster: 'corporate', intent: 'commercial', priority: 3, assignedPage: '/corporate-event-management-kakinada', role: 'supporting' },
  { keyword: 'brand activation Kakinada', cluster: 'corporate', intent: 'commercial', priority: 3, assignedPage: '/corporate-event-management-kakinada', role: 'supporting', notes: 'H2 section' },
  { keyword: 'corporate stage decoration Kakinada', cluster: 'corporate', intent: 'commercial', priority: 3, assignedPage: '/corporate-event-management-kakinada', role: 'supporting' },
  { keyword: 'corporate award ceremony Kakinada', cluster: 'corporate', intent: 'commercial', priority: 3, assignedPage: '/corporate-event-management-kakinada', role: 'supporting', notes: 'H2 section' },
  { keyword: 'employee event management Kakinada', cluster: 'corporate', intent: 'commercial', priority: 4, assignedPage: '/corporate-event-management-kakinada', role: 'supporting' },
  { keyword: 'corporate celebration planner Kakinada', cluster: 'corporate', intent: 'commercial', priority: 4, assignedPage: '/corporate-event-management-kakinada', role: 'supporting' },

  // =========================================================================
  // CLUSTER: Rajahmundry / Rajamahendravaram — Commercial
  // =========================================================================
  { keyword: 'event management Rajahmundry', cluster: 'rajahmundry', intent: 'commercial', priority: 1, assignedPage: '/event-management-rajahmundry', role: 'primary' },
  { keyword: 'event management Rajamahendravaram', cluster: 'rajahmundry', intent: 'commercial', priority: 2, assignedPage: '/event-management-rajahmundry', role: 'secondary' },
  { keyword: 'event management company Rajahmundry', cluster: 'rajahmundry', intent: 'commercial', priority: 1, assignedPage: '/event-management-rajahmundry', role: 'secondary' },
  { keyword: 'event management companies Rajahmundry', cluster: 'rajahmundry', intent: 'commercial', priority: 2, assignedPage: '/event-management-rajahmundry', role: 'supporting' },
  { keyword: 'event planners Rajahmundry', cluster: 'rajahmundry', intent: 'commercial', priority: 1, assignedPage: '/event-management-rajahmundry', role: 'secondary' },
  { keyword: 'event planners Rajamahendravaram', cluster: 'rajahmundry', intent: 'commercial', priority: 3, assignedPage: '/event-management-rajahmundry', role: 'supporting' },
  { keyword: 'event organisers Rajahmundry', cluster: 'rajahmundry', intent: 'commercial', priority: 2, assignedPage: '/event-management-rajahmundry', role: 'supporting' },
  { keyword: 'wedding planner Rajahmundry', cluster: 'rajahmundry', intent: 'commercial', priority: 1, assignedPage: '/wedding-planner-rajahmundry', role: 'primary' },
  { keyword: 'wedding planners Rajahmundry', cluster: 'rajahmundry', intent: 'commercial', priority: 1, assignedPage: '/wedding-planner-rajahmundry', role: 'secondary' },
  { keyword: 'wedding planner Rajamahendravaram', cluster: 'rajahmundry', intent: 'commercial', priority: 3, assignedPage: '/wedding-planner-rajahmundry', role: 'supporting' },
  { keyword: 'wedding event management Rajahmundry', cluster: 'rajahmundry', intent: 'commercial', priority: 2, assignedPage: '/wedding-planner-rajahmundry', role: 'secondary' },
  { keyword: 'marriage event management Rajahmundry', cluster: 'rajahmundry', intent: 'commercial', priority: 2, assignedPage: '/wedding-planner-rajahmundry', role: 'supporting' },
  { keyword: 'wedding decorators Rajahmundry', cluster: 'rajahmundry', intent: 'commercial', priority: 2, assignedPage: '/wedding-planner-rajahmundry', role: 'supporting' },
  { keyword: 'wedding decoration Rajahmundry', cluster: 'rajahmundry', intent: 'commercial', priority: 2, assignedPage: '/wedding-planner-rajahmundry', role: 'supporting' },
  { keyword: 'mandap decorators Rajahmundry', cluster: 'rajahmundry', intent: 'commercial', priority: 2, assignedPage: '/wedding-planner-rajahmundry', role: 'supporting' },
  { keyword: 'birthday event planner Rajahmundry', cluster: 'rajahmundry', intent: 'commercial', priority: 2, assignedPage: '/event-management-rajahmundry', role: 'supporting' },
  { keyword: 'birthday party organisers Rajahmundry', cluster: 'rajahmundry', intent: 'commercial', priority: 3, assignedPage: '/event-management-rajahmundry', role: 'supporting' },
  { keyword: 'birthday decoration Rajahmundry', cluster: 'rajahmundry', intent: 'commercial', priority: 3, assignedPage: '/event-management-rajahmundry', role: 'supporting' },
  { keyword: 'corporate event management Rajahmundry', cluster: 'rajahmundry', intent: 'commercial', priority: 2, assignedPage: '/event-management-rajahmundry', role: 'supporting' },
  { keyword: 'corporate event planners Rajahmundry', cluster: 'rajahmundry', intent: 'commercial', priority: 3, assignedPage: '/event-management-rajahmundry', role: 'supporting' },

  // =========================================================================
  // CLUSTER: East Godavari — Commercial
  // =========================================================================
  { keyword: 'event management East Godavari', cluster: 'eastGodavari', intent: 'commercial', priority: 1, assignedPage: '/event-management-east-godavari', role: 'primary' },
  { keyword: 'event management company East Godavari', cluster: 'eastGodavari', intent: 'commercial', priority: 2, assignedPage: '/event-management-east-godavari', role: 'secondary' },
  { keyword: 'event planners East Godavari', cluster: 'eastGodavari', intent: 'commercial', priority: 2, assignedPage: '/event-management-east-godavari', role: 'secondary' },
  { keyword: 'event organisers East Godavari', cluster: 'eastGodavari', intent: 'commercial', priority: 2, assignedPage: '/event-management-east-godavari', role: 'supporting' },
  { keyword: 'wedding planning East Godavari', cluster: 'eastGodavari', intent: 'commercial', priority: 2, assignedPage: '/event-management-east-godavari', role: 'supporting' },
  { keyword: 'wedding decoration East Godavari', cluster: 'eastGodavari', intent: 'commercial', priority: 2, assignedPage: '/event-management-east-godavari', role: 'supporting' },
  { keyword: 'wedding decorators East Godavari', cluster: 'eastGodavari', intent: 'commercial', priority: 3, assignedPage: '/event-management-east-godavari', role: 'supporting' },
  { keyword: 'marriage event management East Godavari', cluster: 'eastGodavari', intent: 'commercial', priority: 3, assignedPage: '/event-management-east-godavari', role: 'supporting' },
  { keyword: 'birthday event management East Godavari', cluster: 'eastGodavari', intent: 'commercial', priority: 3, assignedPage: '/event-management-east-godavari', role: 'supporting' },
  { keyword: 'corporate event management East Godavari', cluster: 'eastGodavari', intent: 'commercial', priority: 3, assignedPage: '/event-management-east-godavari', role: 'supporting' },
  { keyword: 'event decoration East Godavari', cluster: 'eastGodavari', intent: 'commercial', priority: 3, assignedPage: '/event-management-east-godavari', role: 'supporting' },
  { keyword: 'mandap decorators East Godavari', cluster: 'eastGodavari', intent: 'commercial', priority: 2, assignedPage: '/event-management-east-godavari', role: 'supporting' },
  { keyword: 'party planners East Godavari', cluster: 'eastGodavari', intent: 'commercial', priority: 3, assignedPage: '/event-management-east-godavari', role: 'supporting' },
  { keyword: 'event management services East Godavari', cluster: 'eastGodavari', intent: 'commercial', priority: 3, assignedPage: '/event-management-east-godavari', role: 'supporting' },

  // =========================================================================
  // CLUSTER: Commercial Modifiers — Woven into existing pages
  // These are NOT separate pages. They are natural body-text targets.
  // =========================================================================
  { keyword: 'affordable event management Kakinada', cluster: 'commercialModifiers', intent: 'commercial', priority: 3, assignedPage: '/event-management-company-kakinada', role: 'supporting', notes: 'Body copy context only' },
  { keyword: 'premium event management Kakinada', cluster: 'commercialModifiers', intent: 'commercial', priority: 3, assignedPage: '/event-management-company-kakinada', role: 'supporting' },
  { keyword: 'luxury event management Kakinada', cluster: 'commercialModifiers', intent: 'commercial', priority: 3, assignedPage: '/event-management-company-kakinada', role: 'supporting' },
  { keyword: 'professional event planners Kakinada', cluster: 'commercialModifiers', intent: 'commercial', priority: 3, assignedPage: '/event-management-company-kakinada', role: 'supporting' },
  { keyword: 'full service event management Kakinada', cluster: 'commercialModifiers', intent: 'commercial', priority: 3, assignedPage: '/event-management-company-kakinada', role: 'supporting' },
  { keyword: 'complete event management Kakinada', cluster: 'commercialModifiers', intent: 'commercial', priority: 3, assignedPage: '/event-management-company-kakinada', role: 'supporting' },
  { keyword: 'event management packages Kakinada', cluster: 'commercialModifiers', intent: 'transactional', priority: 2, assignedPage: '/packages', role: 'supporting' },
  { keyword: 'wedding packages Kakinada', cluster: 'commercialModifiers', intent: 'transactional', priority: 2, assignedPage: '/packages', role: 'supporting' },
  { keyword: 'wedding planning packages Kakinada', cluster: 'commercialModifiers', intent: 'transactional', priority: 3, assignedPage: '/packages', role: 'supporting' },
  { keyword: 'birthday packages Kakinada', cluster: 'commercialModifiers', intent: 'transactional', priority: 3, assignedPage: '/packages', role: 'supporting' },
  { keyword: 'event decoration packages Kakinada', cluster: 'commercialModifiers', intent: 'transactional', priority: 3, assignedPage: '/packages', role: 'supporting' },
  { keyword: 'wedding decoration packages Kakinada', cluster: 'commercialModifiers', intent: 'transactional', priority: 3, assignedPage: '/packages', role: 'supporting' },
  { keyword: 'event management quotation Kakinada', cluster: 'commercialModifiers', intent: 'transactional', priority: 3, assignedPage: '/contact', role: 'supporting' },
  { keyword: 'wedding planner quotation Kakinada', cluster: 'commercialModifiers', intent: 'transactional', priority: 3, assignedPage: '/contact', role: 'supporting' },
  { keyword: 'event management cost Kakinada', cluster: 'commercialModifiers', intent: 'informational', priority: 2, assignedPage: '/guides/wedding-planning-cost-kakinada', role: 'supporting' },

  // =========================================================================
  // CLUSTER: Informational / AEO — Guides
  // =========================================================================
  { keyword: 'how much does wedding planning cost in Kakinada', cluster: 'informational', intent: 'informational', priority: 1, assignedPage: '/guides/wedding-planning-cost-kakinada', role: 'primary' },
  { keyword: 'how much does wedding decoration cost in Kakinada', cluster: 'informational', intent: 'informational', priority: 1, assignedPage: '/guides/wedding-decoration-cost-kakinada', role: 'primary' },
  { keyword: 'how much does an event planner cost in Kakinada', cluster: 'informational', intent: 'informational', priority: 2, assignedPage: '/guides/wedding-planning-cost-kakinada', role: 'secondary' },
  { keyword: 'how much does birthday decoration cost in Kakinada', cluster: 'informational', intent: 'informational', priority: 2, assignedPage: '/guides/birthday-party-planning-kakinada', role: 'supporting' },
  { keyword: 'how much does mandap decoration cost in Kakinada', cluster: 'informational', intent: 'informational', priority: 2, assignedPage: '/guides/wedding-decoration-cost-kakinada', role: 'secondary' },
  { keyword: 'how early should I book a wedding planner', cluster: 'informational', intent: 'informational', priority: 2, assignedPage: '/guides/how-to-choose-wedding-planner-kakinada', role: 'supporting' },
  { keyword: 'how early should I book wedding decorators', cluster: 'informational', intent: 'informational', priority: 3, assignedPage: '/guides/how-to-choose-wedding-planner-kakinada', role: 'supporting' },
  { keyword: 'what does a wedding planner do', cluster: 'informational', intent: 'informational', priority: 2, assignedPage: '/guides/how-to-choose-wedding-planner-kakinada', role: 'secondary' },
  { keyword: 'what is included in wedding event management', cluster: 'informational', intent: 'informational', priority: 3, assignedPage: '/wedding-planner-kakinada', role: 'supporting' },
  { keyword: 'what is included in complete wedding planning', cluster: 'informational', intent: 'informational', priority: 3, assignedPage: '/wedding-planner-kakinada', role: 'supporting' },
  { keyword: 'how to plan a Telugu wedding', cluster: 'informational', intent: 'informational', priority: 1, assignedPage: '/guides/telugu-wedding-planning-checklist', role: 'primary' },
  { keyword: 'Telugu wedding planning checklist', cluster: 'informational', intent: 'informational', priority: 1, assignedPage: '/guides/telugu-wedding-planning-checklist', role: 'secondary' },
  { keyword: 'Telugu wedding ceremony checklist', cluster: 'informational', intent: 'informational', priority: 2, assignedPage: '/guides/telugu-wedding-planning-checklist', role: 'secondary' },
  { keyword: 'wedding decoration ideas Kakinada', cluster: 'informational', intent: 'informational', priority: 2, assignedPage: '/mandap-decorators-kakinada', role: 'supporting' },
  { keyword: 'wedding mandap decoration ideas', cluster: 'informational', intent: 'informational', priority: 2, assignedPage: '/mandap-decorators-kakinada', role: 'supporting' },
  { keyword: 'birthday decoration ideas Kakinada', cluster: 'informational', intent: 'informational', priority: 3, assignedPage: '/birthday-party-organisers-kakinada', role: 'supporting' },
  { keyword: 'corporate event planning checklist', cluster: 'informational', intent: 'informational', priority: 3, assignedPage: '/corporate-event-management-kakinada', role: 'supporting' },
  { keyword: 'how to organize a corporate event', cluster: 'informational', intent: 'informational', priority: 3, assignedPage: '/corporate-event-management-kakinada', role: 'supporting' },
  { keyword: 'how to plan a birthday party', cluster: 'informational', intent: 'informational', priority: 2, assignedPage: '/guides/birthday-party-planning-kakinada', role: 'primary' },
  { keyword: 'how to choose a wedding planner in Kakinada', cluster: 'informational', intent: 'informational', priority: 1, assignedPage: '/guides/how-to-choose-wedding-planner-kakinada', role: 'primary' },

  // =========================================================================
  // CLUSTER: Entity / Brand Searches — Navigational
  // =========================================================================
  { keyword: 'Hanvi Events', cluster: 'entityBrand', intent: 'navigational', priority: 1, assignedPage: '/', role: 'primary' },
  { keyword: 'Hanvi Events Kakinada', cluster: 'entityBrand', intent: 'navigational', priority: 1, assignedPage: '/', role: 'secondary' },
  { keyword: 'Hanvi Events event management', cluster: 'entityBrand', intent: 'navigational', priority: 2, assignedPage: '/', role: 'supporting' },
  { keyword: 'Hanvi Events wedding planner', cluster: 'entityBrand', intent: 'navigational', priority: 2, assignedPage: '/wedding-planner-kakinada', role: 'supporting' },
  { keyword: 'Hanvi Events reviews', cluster: 'entityBrand', intent: 'navigational', priority: 2, assignedPage: '/about', role: 'supporting', notes: 'No fake reviews — link to GBP' },
  { keyword: 'Hanvi Events contact', cluster: 'entityBrand', intent: 'navigational', priority: 2, assignedPage: '/contact', role: 'supporting' },
  { keyword: 'Hanvi Events phone number', cluster: 'entityBrand', intent: 'navigational', priority: 2, assignedPage: '/contact', role: 'supporting' },
  { keyword: 'Hanvi Events address', cluster: 'entityBrand', intent: 'navigational', priority: 2, assignedPage: '/about', role: 'supporting' },
  { keyword: 'Hanvi Events services', cluster: 'entityBrand', intent: 'navigational', priority: 2, assignedPage: '/services', role: 'supporting' },
  { keyword: 'Hanvi Events packages', cluster: 'entityBrand', intent: 'navigational', priority: 2, assignedPage: '/packages', role: 'supporting' },

  // =========================================================================
  // CLUSTER: Founder Entity — Navigational
  // =========================================================================
  { keyword: 'Ch Kala Prasad', cluster: 'founderEntity', intent: 'navigational', priority: 1, assignedPage: '/team/ch-kala-prasad', role: 'primary', notes: 'Only approved evidence-backed facts' },
  { keyword: 'Ch Kala Prasad Hanvi Events', cluster: 'founderEntity', intent: 'navigational', priority: 1, assignedPage: '/team/ch-kala-prasad', role: 'secondary' },
  { keyword: 'Ch Kala Prasad event director', cluster: 'founderEntity', intent: 'navigational', priority: 2, assignedPage: '/team/ch-kala-prasad', role: 'supporting' },
  { keyword: 'Ch Kala Prasad Kakinada', cluster: 'founderEntity', intent: 'navigational', priority: 2, assignedPage: '/team/ch-kala-prasad', role: 'supporting' },
  { keyword: 'founder of Hanvi Events', cluster: 'founderEntity', intent: 'navigational', priority: 2, assignedPage: '/about', role: 'supporting' },

  // =========================================================================
  // CLUSTER: AI Prompt Universe — Informational / Navigational
  // These are the queries AI systems receive. They are NOT page keywords.
  // They exist to track which pages should answer these prompts.
  // =========================================================================
  { keyword: 'What are the best event management companies in Kakinada', cluster: 'aiPrompts', intent: 'informational', priority: 1, assignedPage: '/event-management-company-kakinada', role: 'supporting', notes: 'AI discovery prompt' },
  { keyword: 'Who are the top event planners in Kakinada', cluster: 'aiPrompts', intent: 'informational', priority: 1, assignedPage: '/event-management-company-kakinada', role: 'supporting' },
  { keyword: 'Can you recommend event management companies in Kakinada', cluster: 'aiPrompts', intent: 'informational', priority: 2, assignedPage: '/event-management-company-kakinada', role: 'supporting' },
  { keyword: 'Which event planners handle weddings in Kakinada', cluster: 'aiPrompts', intent: 'informational', priority: 1, assignedPage: '/wedding-planner-kakinada', role: 'supporting' },
  { keyword: 'Who are the best wedding planners in East Godavari', cluster: 'aiPrompts', intent: 'informational', priority: 2, assignedPage: '/event-management-east-godavari', role: 'supporting' },
  { keyword: 'Compare event management companies in Kakinada', cluster: 'aiPrompts', intent: 'informational', priority: 2, assignedPage: '/event-management-company-kakinada', role: 'supporting' },
  { keyword: 'Who provides mandap decoration in Kakinada', cluster: 'aiPrompts', intent: 'informational', priority: 1, assignedPage: '/mandap-decorators-kakinada', role: 'supporting' },
  { keyword: 'Who can organize a 1st birthday party in Kakinada', cluster: 'aiPrompts', intent: 'informational', priority: 2, assignedPage: '/birthday-party-organisers-kakinada', role: 'supporting' },
  { keyword: 'Who handles corporate events in Kakinada', cluster: 'aiPrompts', intent: 'informational', priority: 2, assignedPage: '/corporate-event-management-kakinada', role: 'supporting' },
  { keyword: 'Who provides wedding stage decoration in Kakinada', cluster: 'aiPrompts', intent: 'informational', priority: 2, assignedPage: '/mandap-decorators-kakinada', role: 'supporting' },
  { keyword: 'What services does Hanvi Events offer', cluster: 'aiPrompts', intent: 'navigational', priority: 1, assignedPage: '/about', role: 'supporting' },
  { keyword: 'Where is Hanvi Events located', cluster: 'aiPrompts', intent: 'navigational', priority: 1, assignedPage: '/about', role: 'supporting' },
  { keyword: 'Who is the founder of Hanvi Events', cluster: 'aiPrompts', intent: 'navigational', priority: 1, assignedPage: '/about', role: 'supporting' },
  { keyword: 'Does Hanvi Events provide wedding planning in Kakinada', cluster: 'aiPrompts', intent: 'navigational', priority: 1, assignedPage: '/wedding-planner-kakinada', role: 'supporting' },
  { keyword: 'Does Hanvi Events serve Rajahmundry', cluster: 'aiPrompts', intent: 'navigational', priority: 2, assignedPage: '/event-management-rajahmundry', role: 'supporting' },
  { keyword: 'I need a wedding planner in Kakinada for 500 guests', cluster: 'aiPrompts', intent: 'transactional', priority: 1, assignedPage: '/wedding-planner-kakinada', role: 'supporting', notes: 'Decision prompt' },
  { keyword: 'I need a traditional Telugu wedding mandap in Kakinada', cluster: 'aiPrompts', intent: 'transactional', priority: 1, assignedPage: '/mandap-decorators-kakinada', role: 'supporting' },
  { keyword: 'I need a birthday event organizer in Kakinada', cluster: 'aiPrompts', intent: 'transactional', priority: 2, assignedPage: '/birthday-party-organisers-kakinada', role: 'supporting' },
  { keyword: 'I need corporate event management in Kakinada', cluster: 'aiPrompts', intent: 'transactional', priority: 2, assignedPage: '/corporate-event-management-kakinada', role: 'supporting' },
] as const;

// ---------------------------------------------------------------------------
// Utility functions
// ---------------------------------------------------------------------------

/** Get all keywords assigned to a specific page */
export function getKeywordsForPage(pagePath: string): readonly SEOKeyword[] {
  return KEYWORD_UNIVERSE.filter((kw) => kw.assignedPage === pagePath);
}

/** Get primary keyword for a page (there should be exactly one) */
export function getPrimaryKeyword(pagePath: string): SEOKeyword | undefined {
  return KEYWORD_UNIVERSE.find(
    (kw) => kw.assignedPage === pagePath && kw.role === 'primary'
  );
}

/** Get all keywords for a cluster */
export function getClusterKeywords(cluster: KeywordCluster): readonly SEOKeyword[] {
  return KEYWORD_UNIVERSE.filter((kw) => kw.cluster === cluster);
}

/** Get high-priority keywords (priority 1 or 2) */
export function getHighPriorityKeywords(): readonly SEOKeyword[] {
  return KEYWORD_UNIVERSE.filter((kw) => kw.priority <= 2);
}

/** Get all unique assigned pages */
export function getAllAssignedPages(): string[] {
  return [...new Set(KEYWORD_UNIVERSE.map((kw) => kw.assignedPage))];
}

/** Summary statistics for the keyword universe */
export function getKeywordStats(): {
  total: number;
  byCluster: Record<string, number>;
  byPriority: Record<string, number>;
  byIntent: Record<string, number>;
  pagesWithKeywords: number;
} {
  const byCluster: Record<string, number> = {};
  const byPriority: Record<string, number> = {};
  const byIntent: Record<string, number> = {};

  for (const kw of KEYWORD_UNIVERSE) {
    byCluster[kw.cluster] = (byCluster[kw.cluster] ?? 0) + 1;
    byPriority[String(kw.priority)] = (byPriority[String(kw.priority)] ?? 0) + 1;
    byIntent[kw.intent] = (byIntent[kw.intent] ?? 0) + 1;
  }

  return {
    total: KEYWORD_UNIVERSE.length,
    byCluster,
    byPriority,
    byIntent,
    pagesWithKeywords: getAllAssignedPages().length,
  };
}
