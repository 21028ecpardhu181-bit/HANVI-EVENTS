---
name: handcrafted-creative-web-design
description: Guidelines, design tokens, typography rules, motion patterns, and anti-AI layout principles for building ultra-premium, bespoke, non-generic websites. Use whenever creating UI components, pages, design systems, or styling web applications.
---

# Handcrafted Creative Web Design Skill

Use this skill whenever designing or modifying website interfaces, component libraries, typography stacks, color palettes, micro-interactions, or page layouts. The goal is to produce bespoke, boutique designs that feel handcrafted by top design studios (Apple, Stripe, Linear, Vercel, Notion, Aesop) while strictly avoiding generic "AI-slop" layouts.

---

## 🚫 1. Anti-AI Design Manifesto (Rules to NEVER Break)

1. **NO Generic SaaS Grids**: Avoid identical 3-column feature cards with uniform centered icons inside grey rounded rectangles. Use asymmetric layouts, staggered masonry, horizontal scroll carousels, or multi-span editorial grids.
2. **NO Default Tailwind Gradients**: Avoid flashy neon blue-to-purple or pink-to-orange gradients (`bg-gradient-to-r from-blue-500 to-purple-600`). Use subtle HSL ambient lighting, soft noise overlays, glassmorphism, or monochromatic depth.
3. **NO Boring Font Default Stacks**: Never rely solely on system fonts or generic browser defaults. Combine a high-contrast serif/editorial header font with an ultra-clean geometric sans body and optional script/italic accents.
4. **NO Pure Flat Black or Plain White**: Use rich curated HSL tones (e.g. Ivory `#FCF9F5`, Linen `#F5ECDD`, Deep Espresso `#34281F`, Obsidian `#121212`, Champagne `#E8E2D5`).
5. **NO Unanimated Static Elements**: Every interactive element (buttons, cards, links, tabs) must have subtle micro-interactions, hover states, or Framer Motion transitions.

---

## 🎨 2. Design System & Token Standards

### A. Typography Hierarchy
- **Display / Editorial Headings**: `Cormorant Garamond`, `Playfair Display`, `Syne`, or `Clash Display`
- **Body / Narrative Text**: `Manrope`, `Plus Jakarta Sans`, or `Geist`
- **UI / Data / Buttons**: `Inter`, `SF Pro`, or `JetBrains Mono`
- **Script / Decorative Accents**: `Allura`, `Great Vibes`, or `Caveat`

```css
/* Typography Token Mapping */
.font-serif-editorial { font-family: var(--font-cormorant), Georgia, serif; }
.font-sans-narrative { font-family: var(--font-manrope), sans-serif; }
.font-sans-ui { font-family: var(--font-inter), sans-serif; }
.font-script-accent { font-family: var(--font-allura), cursive; }
```

### B. Color Palette Architecture (Bespoke HSL Palettes)
- **Primary Background**: Warm Ivory `#FCF9F5` or Dark Obsidian `#0F0F10`
- **Surface Elevation**: Linen `#F5ECDD` or Charcoal Slate `#1A1A1E`
- **Primary Text**: Deep Espresso `#34281F` or Soft Porcelain `#F5F5F7`
- **Luxury Accent**: Warm Royal Gold `#B88A44` or Champagne `#C5A059`
- **Botanical / Secondary Accent**: Olive `#59624C` or Dusty Rose `#C68F87`

---

## ⚡ 3. Motion & Micro-Interactions (Framer Motion)

### Staggered Entrance Variant
```typescript
export const containerReveal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const itemFadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 1, 0.5, 1], // Custom cubic-bezier
    },
  },
};
```

---

## 💎 4. Visual Polish & Texture Techniques

1. **Noise Texture Overlays**: Add SVG/PNG paper or grain noise (`opacity-30` or SVG filter) to eliminate flat digital digital look.
2. **Glassmorphism**: Combine `backdrop-blur-md`, `bg-white/10` or `bg-black/30`, and a `border border-white/20` for floating cards.
3. **Progressive Skeleton Loading**: Every image or video asset MUST have a shimmer skeleton placeholder before full load to prevent layout shift (CLS).
4. **Interactive Hover Lift**: Buttons and cards should feature smooth scale elevation (`whileHover={{ y: -4, scale: 1.01 }}`).

---

## 📋 5. Creative Design Quality Checklist

Before finalizing any UI implementation, verify:
- [ ] Is the design distinct, elevated, and free of generic AI template feel?
- [ ] Are headings formatted with proper editorial typography and line-height (`1.05` to `1.15`)?
- [ ] Do all interactive elements respond smoothly to hover/touch states?
- [ ] Is there sufficient color contrast between text and background (WCAG AA)?
- [ ] Does the mobile layout adapt fluidly without horizontal scroll glitches?
