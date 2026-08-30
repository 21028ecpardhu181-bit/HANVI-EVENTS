# Hanvi Events: Entity, Proof & Local Authority Plan

## Purpose

Build a credible, conversion-focused local presence for Hanvi Events in Kakinada. The goal is not to claim that the business is "#1". It is to make the business easy for people, search engines, Maps, and AI systems to verify: one real business, one verified identity, clear services, real projects, and measurable lead growth.

## Guiding rules

1. **Truth before consistency.** Do not standardize a date, address, rating, count, founder title, service, or venue until it is supported by a business record or first-party evidence.
2. **Proof before promotion.** A real project, client-approved testimonial, original media, and venue/location provide more authority than superlatives or keyword repetition.
3. **One intent per commercial page.** A wedding-planning page and a mandap-decoration page must solve different client problems and use different proof.
4. **Controlled properties first.** Correct the website, Google Business Profile, social profiles, and directories before pursuing new mentions or backlinks.
5. **Measure leads, not vanity rankings.** The primary success measures are qualified organic calls, WhatsApp enquiries, form enquiries, Maps actions, and booked consultations.

## Current controlled-content risks to resolve

These are confirmed in the repository and should be handled before publishing further SEO pages.

| Risk | Evidence | Required decision |
|---|---|---|
| Review claim is inconsistent | The footer displays `4.9 (150+)`; `llms-full.txt` says `4.9 / 5.0` from `1,000+` recommendations; `site.ts` also says `1,000+` | Identify the exact source, review count, and capture date, or remove the number from global copy. |
| Milestones are unproven in the site source | `500+ celebrations`, `15+ cities`, and `8+ years` are published in `site.ts` and AI text files | Match each value to an evidence record or replace it with carefully qualified copy. |
| Superlatives are unsupported | The public FAQ and AI text call Hanvi "best", "leading", "top-rated", or `#1` | Remove these unless an independently verifiable award/source can be cited. |
| FAQ rendering and markup are conflated | The FAQ is a client component and injects `FAQPage` JSON-LD | Keep useful FAQ content visible in initial HTML, but remove commercial `FAQPage` rich-result markup; it is not appropriate for this business type. |
| Founder identity is partly wired but needs proof | The founder page and Person schema already exist | Retain only an accurate title, experience history, biography, image, and official social links. |

## Phase 0 — Truth verification and evidence register

**Owner:** business owner + one appointed content/operations owner  
**Exit condition:** all public claims have an evidence status; no uncertain claim is marked canonical.

Create a private evidence register (spreadsheet, Notion database, or Sanity content type) with the following fields:

| Field | Example evidence | Rule |
|---|---|---|
| Legal/commercial name | registration, GST/invoice, GBP ownership | Decide one display name and approved variants. |
| Current public address | current lease, Google Maps pin, business signage, GBP verification | Use only the address customers can visit. If the business is service-area only, do not expose a home/private address. |
| Phone and WhatsApp | active business SIMs, contact test | Choose one primary booking number and label the other accurately. |
| Founder and title | founder approval, official profile | Use one name spelling and one title everywhere. |
| Established date | registration, archived social profile, invoice/portfolio history | Publish one proven date; only use a brand-history distinction if documented. |
| Event and city counts | project register | Use a count only when the underlying list supports it. |
| Rating and reviews | direct Google/verified-platform URL plus date captured | Always state the platform and count; do not merge ratings from different sources. |
| Services and prices | current service catalogue and approved quotes | Publish only services actually delivered; use starting prices/ranges only if maintained. |
| Client, venue, images, testimonials | written consent and original asset record | Do not publish names, guest counts, or testimonials without permission. |

**Claim-status vocabulary:** `Verified`, `Approved qualitative wording`, `Needs evidence`, `Retired`.  
No engineering or marketing change can promote a `Needs evidence` field into schema, structured copy, `llms.txt`, footer statistics, or a directory.

## Phase 1 — Canonical entity foundation

**Priority:** P0  
**Exit condition:** controlled channels use the same verified entity record.

1. Define an approved entity sheet containing business name, address/service-area model, two contact methods, hours, founder name/title, services, social URLs, and approved claims.
2. Update the website from a single source of truth (`src/lib/data/site.ts`) and make schema consume that data rather than duplicating address/name literals in `src/lib/seo.ts`.
3. Publish a substantive `/about` page as the site’s entity source. It should cover who Hanvi Events is, the verified timeline, founder/event director, core services, service area, real working approach, and contact options.
4. Improve the existing founder profile (`/team/ch-kala-prasad`) only with approved biography, original portrait/video, authentic experience, specialisms, and links to relevant projects. Keep the `Person` schema connected to the business entity.
5. Replace unsupported claims across homepage, FAQ, footer, schema descriptions, `llms.txt`, and `llms-full.txt` with evidence-based copy. Do not use these files as a source of truth; they merely summarize the verified website.
6. Remove any public admin navigation. Continue blocking `/admin` from indexing and require authentication at the application layer.
7. Use `LocalBusiness`/`ProfessionalService` plus `EventPlanner` as appropriate, `WebSite`, `Organization`/founder `Person`, `Service`, and `BreadcrumbList` JSON-LD. Validate against Schema.org and Google’s rich-result tools after deployment.

**Important:** do not add `AggregateRating` unless it reflects an eligible, current, first-party source and complies with Google’s guidelines. Do not use `FAQPage` markup for this commercial site; visible FAQs can still support users and AI retrieval.

## Phase 2 — Proof infrastructure and project library

**Priority:** P0/P1  
**Exit condition:** at least three publishable, consented projects are live and each commercial page can show relevant proof.

Create a structured project model in Sanity or the existing content layer:

```text
Project
  title / slug
  event type and related service
  city and venue (with consent)
  event date or month/year
  guest range (only if approved)
  services delivered
  design brief and execution notes
  original photos / video / image alt text
  client-approved testimonial and attribution level
  related service pages and social assets
  publication / consent status
```

Publish a `/projects` hub and individual project pages such as `/projects/traditional-telugu-wedding-kakinada-venue-name`. Each should explain the brief, solution, scope, local context, original visuals, and a booking CTA. Avoid inventing client names, guest counts, venues, or review quotes.

Repurpose every approved project into a GBP post, Instagram reel/carousel, YouTube short or behind-the-scenes video, Pinterest pins where appropriate, and an email/WhatsApp portfolio asset. All posts should link back to the relevant project page when possible.

## Phase 3 — Commercial information architecture

**Priority:** P1  
**Exit condition:** each page has distinct intent, unique proof, a conversion CTA, and internal links to its parent, related projects, and contact flow.

Start with the following hierarchy. Build pages in this order only when the service is real and project evidence exists.

```text
/
├── /about
├── /services
│   ├── /event-management-company-kakinada       ← primary commercial hub
│   ├── /wedding-planner-kakinada
│   ├── /mandap-decorators-kakinada
│   ├── /birthday-party-organisers-kakinada
│   └── /corporate-event-management-kakinada
├── /projects
│   └── /projects/[project-slug]
├── /reviews                                     ← only verified, permissioned feedback
├── /contact
└── /guides                                      ← advice only after commercial pages/proof
```

| Page | Search / user intent | Unique mandatory sections |
|---|---|---|
| Event Management Company Kakinada | Evaluate an end-to-end local event partner | Process, event categories, operational scope, real projects, consultation CTA. |
| Wedding Planner Kakinada | Plan and coordinate a wedding | Planning timeline, coordination inclusions, Telugu ceremony expertise where true, venue/project examples, FAQs. |
| Mandap Decorators Kakinada | Choose a decor and mandap style | Styles/materials, design process, setup constraints, original portfolio, transparent starting range if maintained. |
| Birthday Party Organisers Kakinada | Plan a children’s or milestone celebration | Themes, age/event formats, safety/logistics, relevant projects, booking timeline. |
| Corporate Event Management Kakinada | Run a professional company event | Production/run-of-show, AV/vendor coordination, risk/logistics, relevant corporate proof. |

Do not create city variants merely to target keywords. Add a new city/service page only after you have meaningful, distinct evidence: local project examples, operational coverage, a venue partner, local testimonials, and unique client intent. Stop at quality, not page count.

## Phase 4 — Local authority, reviews, and partnerships

**Priority:** P1  
**Exit condition:** major profiles are verified and synchronized; review acquisition and partnership workflows run every month.

1. Verify and optimize Google Business Profile using the Phase 0 entity record. Select categories based on actual services, complete hours/services/photos, and keep the website link and UTM tracking current.
2. Audit the current GBP, Justdial, Sulekha, WedMeGood, WeddingWire, Facebook, Instagram, YouTube, Apple Maps, and Bing Places listings. Record URL, current data, owner/access, correction submitted, approval date, and next review date.
3. Run a post-event review process: request feedback only from real clients, make it optional, never gate feedback, never offer incentives, and respond constructively to every review.
4. Build actual local partnerships with venues, photographers, caterers, florists, makeup artists, bridal boutiques, and invitation designers. Exchange useful partner/profile pages and project collaboration credit—not paid or artificial links.
5. Pitch locally newsworthy work, event trends, and founder commentary to legitimate regional media. Keep a press kit with verified company bio, founder photo, project imagery, and approved facts.

## Phase 5 — Helpful content and AI/search readiness

**Priority:** P2  
**Exit condition:** content answers real planning questions and every answer is supported by lived business knowledge or clear source attribution.

Publish guides only after the proof and commercial pages are in place. Initial topics:

- Wedding-planning timeline for Kakinada couples
- What affects a Telugu wedding mandap decoration budget
- Questions to ask an event planner before booking
- Practical venue and guest-management checklist for a Kakinada wedding
- Corporate-event production checklist

Each guide links to the relevant service page and one or more real projects; service/project pages link back to the useful guide. Make direct answers visible in server-rendered HTML. Use clear headings, honest price/range caveats, original images, author/reviewer attribution where meaningful, and a last-reviewed date.

Treat `llms.txt` as optional documentation, not an AI-ranking lever. It must contain only the approved entity record and live URLs. The durable AI-visibility inputs are accurate third-party profiles, reviews, original projects, clear on-site copy, links/mentions, and crawlable pages.

## Phase 6 — Measurement and continuous improvement

**Priority:** ongoing  
**Exit condition:** a monthly review changes the next month’s content and local-authority work.

Set up and review Google Search Console, GA4, GBP performance, call tracking or call-event measurement, WhatsApp click events, and form submission events. Use UTM parameters for GBP and campaign links.

Monthly dashboard:

| Area | Core measures |
|---|---|
| Organic search | impressions, clicks, CTR, indexed pages, query/page movement |
| Local | GBP calls, website clicks, direction requests, photo views, review count/quality |
| Conversion | qualified forms, WhatsApp clicks that become enquiries, calls, consultation-to-booking rate |
| Content | project-page visits, service-page conversion rate, assisted conversions |
| Entity health | verified controlled listings / audited listings, unresolved conflicts, claim-evidence coverage |
| AI visibility | monthly answers to a fixed local-intent query set, whether Hanvi is mentioned accurately, cited sources, and corrections needed |

Use the data to improve pages already earning impressions before creating more pages. Report rankings by location/device context and prioritize profitable leads over a universal "#1" target.

## 90-day delivery sequence

| Timing | Deliverables | Decision gate |
|---|---|---|
| Days 1–14 | Evidence register, claim cleanup, canonical entity sheet, GBP/directory audit, baseline analytics | Do not publish new SEO claims until verification is complete. |
| Days 15–30 | `/about`, improved founder profile, centralized schema data, visible FAQ cleanup, admin-link check, review workflow | Entity is consistent across website and GBP. |
| Days 31–60 | Project content model, `/projects` hub, three approved case studies, primary event-management hub, first service page | Each page has original proof and a tracked CTA. |
| Days 61–90 | Remaining qualified service pages, partner pages/outreach, directory updates, first two planning guides, monthly dashboard | Leads and local interactions guide the next quarter. |

## Acceptance checklist

- [ ] Every public quantitative or comparative claim has evidence, a source, an owner, and review date.
- [ ] Website, schema, GBP, owned social profiles, and major directories match the verified entity sheet.
- [ ] All business names, address/model, telephone numbers, hours, and founder details are deliberate and current.
- [ ] No unsupported "best", "#1", "top-rated", review, city-count, or event-count language remains.
- [ ] Three or more original, consented project case studies support service-page claims.
- [ ] Commercial pages have distinct intent, unique copy, relevant projects, and tracked phone/WhatsApp/form CTAs.
- [ ] Structured data validates and does not use ineligible commercial FAQ markup or unsupported aggregate ratings.
- [ ] `robots.txt`, sitemap, canonical tags, redirects, and mobile rendering are verified after deployment.
- [ ] Monthly reporting informs the next month’s work.

## Verification after each release

1. Run TypeScript and production build checks.
2. Inspect rendered HTML for title, canonical, visible text, links, and JSON-LD.
3. Validate structured data and confirm pages are included in the sitemap where appropriate.
4. Test the main call, WhatsApp, form, Maps, and review links on mobile.
5. Submit important new/updated URLs in Search Console and recheck index status later; do not assume immediate ranking changes.
