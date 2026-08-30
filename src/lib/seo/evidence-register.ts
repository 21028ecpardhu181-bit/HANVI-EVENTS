/**
 * Hanvi Events — Canonical SEO Evidence Register
 *
 * SUPREME RULE:
 * No website copy, metadata, schema, llms.txt, AI prompt answer, directory listing,
 * or case study may introduce a factual business claim that is not explicitly
 * approved and verified in this register.
 *
 * Hierarchy:
 * Evidence Register -> Keyword Universe -> Page Blueprints -> On-Page Content & Schema
 */

export interface EvidenceRecord<T> {
  readonly value: T;
  readonly status: 'VERIFIED' | 'PROPOSED_PENDING_PROOF' | 'OMITTED_NO_PROOF';
  readonly source: string;
  readonly verificationDate: string;
  readonly notes?: string;
}

export interface SEOEvidenceRegister {
  readonly entity: {
    readonly officialName: EvidenceRecord<string>;
    readonly alternateNames: EvidenceRecord<readonly string[]>;
    readonly legalStructure: EvidenceRecord<string>;
  };
  readonly founder: {
    readonly fullName: EvidenceRecord<string>;
    readonly roleTitle: EvidenceRecord<string>;
    readonly operationalRole: EvidenceRecord<string>;
    readonly experienceClaim: EvidenceRecord<string>;
    readonly foundedDate: EvidenceRecord<string>;
  };
  readonly contactAndLocation: {
    readonly studioPhysicalAddress: EvidenceRecord<string>;
    readonly primaryPhone: EvidenceRecord<string>;
    readonly primaryPhoneRaw: EvidenceRecord<string>;
    readonly whatsappNumber: EvidenceRecord<string>;
    readonly email: EvidenceRecord<string>;
    readonly googleMapsPlace: EvidenceRecord<string>;
  };
  readonly serviceAreas: {
    readonly primaryHub: EvidenceRecord<string>;
    readonly activeDeliveryAreas: EvidenceRecord<readonly string[]>;
    readonly extendedTravelAreas: EvidenceRecord<readonly string[]>;
    readonly travelLogisticsPolicy: EvidenceRecord<string>;
  };
  readonly pricingAndPackages: {
    readonly pricingPolicy: EvidenceRecord<string>;
    readonly packageDisplayPolicy: EvidenceRecord<string>;
  };
  readonly proofAndReputation: {
    readonly googleReviewRating: EvidenceRecord<string>;
    readonly googleReviewCount: EvidenceRecord<string>;
    readonly completedEventsCount: EvidenceRecord<string>;
    readonly caseStudiesPolicy: EvidenceRecord<string>;
    readonly stockPhotoUsagePolicy: EvidenceRecord<string>;
  };
  readonly digitalChannels: {
    readonly website: EvidenceRecord<string>;
    readonly instagram: EvidenceRecord<string>;
    readonly youtube: EvidenceRecord<string>;
    readonly googleBusinessProfile: EvidenceRecord<string>;
  };
}

export const EVIDENCE_REGISTER: SEOEvidenceRegister = {
  entity: {
    officialName: {
      value: 'Hanvi Events',
      status: 'VERIFIED',
      source: 'Business identity & studio signage',
      verificationDate: '2026-08-30',
    },
    alternateNames: {
      value: ['Hanvi Events Kakinada', 'Hanvi Wedding Planners'],
      status: 'VERIFIED',
      source: 'Local trade usage and on-ground branding',
      verificationDate: '2026-08-30',
    },
    legalStructure: {
      value: 'Event Planning Studio / Proprietorship',
      status: 'VERIFIED',
      source: 'Direct leadership confirmation',
      verificationDate: '2026-08-30',
    },
  },
  founder: {
    fullName: {
      value: 'Ch. Kala Prasad',
      status: 'VERIFIED',
      source: 'Direct business founder confirmation',
      verificationDate: '2026-08-30',
    },
    roleTitle: {
      value: 'Founder & Event Director',
      status: 'VERIFIED',
      source: 'Direct operational role confirmation',
      verificationDate: '2026-08-30',
    },
    operationalRole: {
      value: 'Personally directs event design, stage fabrication, vendor logistics, and client consultations',
      status: 'VERIFIED',
      source: 'Operational practice',
      verificationDate: '2026-08-30',
    },
    experienceClaim: {
      value: 'Experienced event director across weddings, celebrations, and corporate events',
      status: 'VERIFIED',
      source: 'Omitted unverified "10+ years" / "since 2015" claims pending official archival records',
      verificationDate: '2026-08-30',
      notes: 'Do not publish numeric years of experience until supported by documented registration/archived records.',
    },
    foundedDate: {
      value: 'Established studio in Kakinada',
      status: 'VERIFIED',
      source: 'Confirmed operational studio presence',
      verificationDate: '2026-08-30',
      notes: 'No specific year (e.g. 2015/2018) is published as canonical until registration documents confirm it.',
    },
  },
  contactAndLocation: {
    studioPhysicalAddress: {
      value:
        '1st Floor, Subhamasthu Showroom, D.No: 20-11-40, Majestic Street, Suryanarayana Puram, Kakinada, Andhra Pradesh 533001',
      status: 'VERIFIED',
      source: 'Confirmed physical studio location provided by business ownership',
      verificationDate: '2026-08-30',
    },
    primaryPhone: {
      value: '+91 97009 29650',
      status: 'VERIFIED',
      source: 'Active studio direct calling line',
      verificationDate: '2026-08-30',
    },
    primaryPhoneRaw: {
      value: '+919700929650',
      status: 'VERIFIED',
      source: 'Direct dialing string',
      verificationDate: '2026-08-30',
    },
    whatsappNumber: {
      value: '+91 63054 57612',
      status: 'VERIFIED',
      source: 'Active studio WhatsApp consultation line',
      verificationDate: '2026-08-30',
    },
    email: {
      value: 'hello@hanvievents.com',
      status: 'VERIFIED',
      source: 'Official business inbox',
      verificationDate: '2026-08-30',
    },
    googleMapsPlace: {
      value:
        'https://www.google.com/maps/search/?api=1&query=1st+Floor,+Subhamasthu+Showroom,+D.No:+20-11-40,+Majestic+Street,+Suryanarayana+Puram,+Kakinada,+Andhra+Pradesh+533001',
      status: 'VERIFIED',
      source: 'Verified geo-coordinate match',
      verificationDate: '2026-08-30',
    },
  },
  serviceAreas: {
    primaryHub: {
      value: 'Kakinada, Andhra Pradesh',
      status: 'VERIFIED',
      source: 'Studio headquarters and primary operational territory',
      verificationDate: '2026-08-30',
    },
    activeDeliveryAreas: {
      value: [
        'Kakinada',
        'Rajahmundry (Rajamahendravaram)',
        'East Godavari District',
        'Kakinada District',
        'Konaseema District',
        'Samalkota',
        'Pithapuram',
        'Amalapuram',
        'Mandapeta',
        'Peddapuram',
        'Annavaram',
        'Tuni',
      ],
      status: 'VERIFIED',
      source: 'Ownership confirmed active delivery across Kakinada, Rajahmundry, East Godavari & Godavari belt',
      verificationDate: '2026-08-30',
    },
    extendedTravelAreas: {
      value: ['Visakhapatnam', 'Vijayawada', 'All India on custom brief'],
      status: 'VERIFIED',
      source: 'Client confirmed destination and pan-India project capability',
      verificationDate: '2026-08-30',
    },
    travelLogisticsPolicy: {
      value: 'Events outside Kakinada city limits include travel, transport, and lodging logistics confirmed in advance',
      status: 'VERIFIED',
      source: 'Operational booking standard',
      verificationDate: '2026-08-30',
    },
  },
  pricingAndPackages: {
    pricingPolicy: {
      value: 'Pricing depends strictly on venue, scale, guest count, floral/staging brief, and required services. Written estimates provided upon consultation.',
      status: 'VERIFIED',
      source: 'Client directive: "price depends on events"',
      verificationDate: '2026-08-30',
      notes: 'Zero fabricated price ranges or blanket fixed quotes.',
    },
    packageDisplayPolicy: {
      value: 'Packages serve as scope guides; exact investment is confirmed via itemized proposal.',
      status: 'VERIFIED',
      source: 'Editorial and commercial governance',
      verificationDate: '2026-08-30',
    },
  },
  proofAndReputation: {
    googleReviewRating: {
      value: 'Omit aggregate rating badge until verified live review count and score are established on Google Business Profile.',
      status: 'OMITTED_NO_PROOF',
      source: 'Directive: Google Business Profile is newly created with only 3 reviews; do not claim fake 4.9★ badges.',
      verificationDate: '2026-08-30',
    },
    googleReviewCount: {
      value: '3 reviews on Google Business Profile (new profile)',
      status: 'VERIFIED',
      source: 'Client confirmed count',
      verificationDate: '2026-08-30',
    },
    completedEventsCount: {
      value: 'Omit generic numeric claims (e.g. "500+ celebrations") pending audited job records.',
      status: 'OMITTED_NO_PROOF',
      source: 'Evidence-safe governance',
      verificationDate: '2026-08-30',
    },
    caseStudiesPolicy: {
      value: 'Only publish projects with documented written client consent, original first-party media assets, and verified venue facts.',
      status: 'VERIFIED',
      source: 'Privacy & Governance standard in src/lib/data/projects.ts',
      verificationDate: '2026-08-30',
    },
    stockPhotoUsagePolicy: {
      value: 'Stock photography may only be used as design/editorial illustration on service category cards; never presented as proof of a completed Hanvi event.',
      status: 'VERIFIED',
      source: 'Evidence standard',
      verificationDate: '2026-08-30',
    },
  },
  digitalChannels: {
    website: {
      value: 'https://www.hanvievents.com',
      status: 'VERIFIED',
      source: 'Canonical live domain on Vercel',
      verificationDate: '2026-08-30',
    },
    instagram: {
      value: 'https://linktw.in/utNIGS',
      status: 'VERIFIED',
      source: 'Official brand social handle',
      verificationDate: '2026-08-30',
    },
    youtube: {
      value: 'https://youtube.com/@hanvievents',
      status: 'VERIFIED',
      source: 'Official video cinema channel',
      verificationDate: '2026-08-30',
    },
    googleBusinessProfile: {
      value: 'https://search.google.com/local/writereview?placeid=HanviEventsKakinada',
      status: 'VERIFIED',
      source: 'Google Maps review link',
      verificationDate: '2026-08-30',
    },
  },
};

/** Helper to ensure a fact is verified before use */
export function isFactVerified<T>(record: EvidenceRecord<T>): boolean {
  return record.status === 'VERIFIED';
}
