# Hanvi Events: Evidence-Safe SEO Deployment Walkthrough

## What was corrected

This release changes the site from claim-led SEO to evidence-led SEO. It removes stock-photo case studies, unsupported rankings and ratings, and commercial FAQ rich-result markup. It also adds safe project-publishing rules, missing commercial routes, optional GA4 conversion tracking, and a stable sitemap policy.

## 1. Entity information

Business contact information remains centralized in `src/lib/data/site.ts`. The address, phones, founder name, and service statements must be checked against the internal evidence register before every significant update. The website displays these details; it cannot itself prove they are true.

The `/about` page is now a client-facing studio page. It no longer labels its own facts as "verified" or uses stock imagery as if it were Hanvi work.

## 2. Project portfolio and privacy

`src/lib/data/projects.ts` is deliberately empty. The old records used stock images and unverified names, venues, counts, quotes, and permissions, so they were removed rather than presented as real events.

A project can publish only when all of these are true:

1. `published` is true.
2. `consentStatus` is true.
3. `sourceAsset` identifies a rights-managed first-party asset record.
4. At least one original photo exists.
5. Any testimonial has `testimonialPermission: true`.

The portfolio shows an honest preparation state until genuine projects are added. Never use stock photos, invented family names, estimated guest counts, or sample testimonials as client proof.

### Adding a real project

For every project, collect the event date, original photos/video, client permission, testimonial permission, approved public title, venue permission (if named), services delivered, and date last reviewed. Add an ISO `updatedAt` date. Have the business owner approve the record before setting `published: true`.

## 3. Claims, FAQs, and machine-readable pages

The following have been removed from `llms.txt`, `llms-full.txt`, the homepage FAQ, team data, and public statistics unless independently documented:

- rankings such as "#1", "best", and "top-rated"
- review ratings and counts
- event, city, and years-of-experience counts
- generic price ranges and asserted client proof

Visible FAQs are now semantic HTML `<details>` elements, so all answers exist in the initial HTML without JavaScript. `FAQPage` markup was removed from the site because Google does not provide commercial FAQ rich results for this business type.

`llms.txt` and `llms-full.txt` are now informational summaries only. They are not ranking mechanisms and must always match the approved visible site information.

## 4. Commercial pages and site structure

The root-level commercial routes are intentionally distinct:

- `/event-management-company-kakinada`
- `/wedding-planner-kakinada`
- `/mandap-decorators-kakinada`
- `/birthday-party-organisers-kakinada`
- `/corporate-event-management-kakinada`

Each page asks the visitor to discuss a real event brief and does not make unverified outcome promises. The birthday and corporate routes were added because the primary commercial page already linked to them.

## 5. Sitemap and structured data

The sitemap contains public routes and only includes projects that pass the publication rule. Static pages no longer receive a false "modified today" date on every sitemap generation. Public project pages use the project’s reviewed `updatedAt` value.

The site retains appropriate `LocalBusiness`/`ProfessionalService`, `Service`, `WebSite`, `Person`, and `BreadcrumbList` JSON-LD. Validate output after deployment using Schema.org Validator and Google Rich Results Test.

## 6. GA4 conversion tracking

`src/components/analytics/GoogleAnalytics.tsx` tracks sitewide phone and WhatsApp link clicks only when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is configured in the hosting environment.

1. Create a GA4 web data stream for `https://www.hanvievents.com`.
2. Add its Measurement ID to production as `NEXT_PUBLIC_GA_MEASUREMENT_ID`.
3. Redeploy.
4. In GA4 DebugView, click a phone link and WhatsApp link.
5. Confirm `phone_click` and `whatsapp_click` events, then mark qualified conversion events as key events if appropriate.

Without the environment variable, no third-party analytics script loads and click events are not stored.

## 7. Required external actions before making authority claims

1. Verify the address, founder title, phones, hours, business start date, services, and service areas against business records.
2. Update Google Business Profile, Justdial, Sulekha, WedMeGood, WeddingWire, social profiles, Apple Maps, and Bing Places from that verified record.
3. Confirm Sanity Studio user roles and authentication for `/admin`; removing the navigation link is not access control.
4. Supply original client-approved project material before publishing a case study.
5. Configure Search Console, GA4, and GBP measurement; capture a baseline before setting targets.
6. Run PageSpeed Insights on mobile and desktop after deployment. Do not claim Core Web Vitals pass status until measured data is available.

## 8. Release checklist

- [ ] `npx tsc --noEmit` passes.
- [ ] `npm run build` reaches its final successful exit status.
- [ ] New URLs return `200`; unpublished project URLs return `404`.
- [ ] Rendered HTML has correct canonical URLs and no `FAQPage` JSON-LD.
- [ ] Sitemap includes all live commercial pages and no unpublished projects.
- [ ] Phone, WhatsApp, contact, Maps, and review links work on mobile.
- [ ] GA4 events are verified if the measurement ID is enabled.
- [ ] No numerical, review, ranking, case-study, or founder-experience claim is published without evidence.
