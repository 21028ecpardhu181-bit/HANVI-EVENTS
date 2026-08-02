---
name: technical-seo-structured-data
description: Comprehensive framework for technical SEO audits, JSON-LD Schema.org generation, Open Graph & Twitter meta tags, semantic HTML5, canonical URLs, sitemaps, and search engine optimization. Use when building pages, auditing SEO, or configuring metadata.
---

# Technical SEO & Structured Data Skill

Use this skill to implement and audit search engine optimization (SEO), Schema.org structured data, metadata, Open Graph preview tags, canonical URLs, and semantic HTML5 markup for web applications.

---

## 🎯 1. Technical SEO Requirements

Every production web application MUST include the following SEO primitives:

1. **Descriptive Title Tags**: Dynamic, template-driven titles (`<title>` and `metadata.title.template`).
2. **Actionable Meta Descriptions**: 150-160 character summaries packed with relevant keywords.
3. **Canonical URLs**: Explicit `<link rel="canonical" href="...">` on all routes to prevent duplicate content penalties.
4. **Open Graph & Twitter Cards**: Full `og:title`, `og:description`, `og:image` (1200x630px), `og:url`, `og:type`, `twitter:card`.
5. **Semantic HTML5 Hierarchy**: Strictly one `<h1>` per page, logical `<h2>` -> `<h3>` nesting, wrapped in `<main>`, `<header>`, `<nav>`, `<article>`, `<footer>`, and `<section>`.
6. **Robots.txt & Sitemap.xml**: Dynamic generation of `sitemap.xml` and `robots.txt` with explicit crawl rules.

---

## 🏷️ 2. JSON-LD Schema.org Standard Patterns

### A. LocalBusiness & Event Planner Schema
```json
{
  "@context": "https://schema.org",
  "@type": "EventPlanner",
  "@id": "https://hanvievents.com/#organization",
  "name": "Hanvi Events Studio",
  "url": "https://hanvievents.com",
  "logo": "https://hanvievents.com/images/logo.png",
  "image": "https://hanvievents.com/images/hero.jpg",
  "telephone": "+919700929650",
  "priceRange": "₹₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "D No: 60-1-1/1, Jammichettu Center, Jagannaickpur",
    "addressLocality": "Kakinada",
    "addressRegion": "Andhra Pradesh",
    "postalCode": "533002",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "16.9405",
    "longitude": "82.2381"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "128"
  }
}
```

### B. BreadcrumbList Schema
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://hanvievents.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Wedding Journey",
      "item": "https://hanvievents.com/wedding-journey"
    }
  ]
}
```

---

## 🗺️ 3. Dynamic Sitemap & Robots Configuration (Next.js)

### `src/app/sitemap.ts`
```typescript
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://hanvievents.com';
  
  const routes = ['', '/gallery', '/packages', '/wedding-journey', '/stories', '/contact'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1.0 : 0.8,
    })
  );

  return routes;
}
```

### `src/app/robots.ts`
```typescript
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/private/'],
    },
    sitemap: 'https://hanvievents.com/sitemap.xml',
  };
}
```

---

## 🔍 4. Technical SEO Audit Checklist

When auditing a website route for SEO:
- [ ] Is there exactly ONE `<h1>` element on the page?
- [ ] Are all image `<img>` elements equipped with meaningful `alt` text?
- [ ] Are meta titles under 60 characters and meta descriptions under 160 characters?
- [ ] Is valid JSON-LD Schema rendered in the `<head>` or body?
- [ ] Are canonical tags correctly linking to the absolute canonical URL?
- [ ] Is Open Graph preview image verified and accessible?
