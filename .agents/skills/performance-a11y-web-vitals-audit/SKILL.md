---
name: performance-a11y-web-vitals-audit
description: Performance optimization and WCAG 2.1 AA accessibility auditing standards. Covers Core Web Vitals (LCP, CLS, INP), Lighthouse 100 metrics, image/video optimization, skeleton loading, ARIA labels, and keyboard navigation.
---

# Performance & Accessibility (Web Vitals) Audit Skill

Use this skill to audit and optimize web application performance, Core Web Vitals, accessibility compliance (WCAG 2.1 AA), and page load speed.

---

## 🚀 1. Core Web Vitals Performance Standards

| Metric | Full Name | Target Threshold | Optimization Strategy |
| :--- | :--- | :--- | :--- |
| **LCP** | Largest Contentful Paint | `< 1.2 seconds` | Preload hero image/video, use WebP/AVIF, set `priority` attribute on `next/image`. |
| **CLS** | Cumulative Layout Shift | `0.00` | Explicit `width`/`height` or aspect-ratio containers; shimmer skeletons before asset load. |
| **INP** | Interaction to Next Paint | `< 100 ms` | Avoid heavy main-thread JS, use CSS transitions over heavy React re-renders. |
| **FID** | First Input Delay | `< 50 ms` | Code split non-critical components with `dynamic()` imports. |

---

## ♿ 2. WCAG 2.1 AA Accessibility Standards

1. **Keyboard Navigation & Focus Ring**:
   - All buttons, links, and form inputs must be navigable via `Tab` / `Shift+Tab`.
   - Custom interactive elements must have visible focus rings (`focus-visible:ring-2 focus-visible:ring-[#B88A44]`).
2. **Accessible Color Contrast**:
   - Normal text: Minimum contrast ratio `4.5:1` against background.
   - Large text (24px+ or 18px+ bold): Minimum contrast ratio `3:1`.
3. **ARIA & Screen Reader Attributes**:
   - Interactive icon-only buttons MUST have `aria-label` or `title`.
   - Modals and drawers MUST use `role="dialog"`, `aria-modal="true"`, and `aria-labelledby`.
4. **Media Alternatives**:
   - Video elements MUST have `muted`, `playsInline`, and alternative text descriptions.

---

## 🖼️ 3. Image & Asset Optimization Guidelines

```tsx
import Image from 'next/image';

export function OptimizedHeroImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#E8DDCD]/40">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-opacity duration-500"
      />
    </div>
  );
}
```

---

## 📊 4. Performance & Accessibility Audit Protocol

Execute this audit protocol when validating any web page:
1. **Lighthouse Audit Check**:
   - Performance: `>= 95`
   - Accessibility: `100`
   - Best Practices: `100`
   - SEO: `100`
2. **Layout Shift Audit**: Ensure zero image or video jumping during page load.
3. **Bundle Size Audit**: Ensure no unused heavy dependencies (e.g. lodash full import) are bundled.
4. **Contrast Ratio Audit**: Test high-contrast text against dark and light theme layers.
