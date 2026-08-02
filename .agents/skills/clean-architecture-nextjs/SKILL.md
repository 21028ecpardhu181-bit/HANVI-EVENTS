---
name: clean-architecture-nextjs
description: Clean engineering architecture standards for Next.js 15+ App Router, React Server Components, TypeScript schemas, modular directory structure, error boundary isolation, and production readiness.
---

# Clean Architecture Next.js Skill

Use this skill when designing component hierarchies, structuring directory files, defining TypeScript types and data schemas, organizing state management, or handling error boundaries in Next.js applications.

---

## 🏛️ 1. Clean Directory Structure Standard

```text
src/
├── animations/         # Reusable Framer Motion variants & transitions
├── app/                # Next.js App Router (pages, layouts, dynamic routes, api)
│   ├── celebrations/   # Feature route group
│   ├── gallery/
│   ├── packages/
│   ├── stories/
│   ├── wedding-journey/
│   ├── global-error.tsx
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── components/         # Modular Component Hierarchy
│   ├── features/       # Feature-specific components (e.g. packages table)
│   ├── layout/         # Structural components (Navbar, Footer, MobileNav)
│   ├── modals/         # Interactive overlay modals & dialogs
│   ├── sections/       # Hero, Testimonials, Gallery, FAQ section modules
│   └── ui/             # Atomic design components (EditorialButton, Badge, ImageWithSkeleton)
├── lib/                # Core business logic, data models, helpers & SEO
│   ├── data/           # Centralized strongly-typed data fixtures
│   ├── types/          # Strict TypeScript interface definitions
│   ├── seo.ts          # Metadata generators & JSON-LD helpers
│   └── theme.ts        # Color palette & theme state manager
└── styles/             # Global CSS & Tailwind configuration
```

---

## 🛡️ 2. Strict Code Quality & TypeScript Rules

1. **Strict TypeScript (NO `any`)**:
   - Every prop, state variable, API payload, and mock fixture MUST have explicit interfaces or type definitions.
   - Use `Record<string, unknown>` or unknown generics instead of `any`.
2. **Zero Code Duplication**:
   - Extract repeated buttons, section headers, badges, image wrappers, and modal triggers into atomic reusable UI components (`src/components/ui/`).
3. **Resilient Loading & Error Fallbacks**:
   - Every feature route MUST have fallback loading UI (`loading.tsx` or Skeleton components).
   - Every asynchronous or dynamic component MUST handle empty data states gracefully without throwing uncaught exceptions.
4. **Clean API & State Contracts**:
   - Keep component props minimal and immutable.
   - Separate data fixtures (`src/lib/data/`) from view rendering logic (`src/components/sections/`).

---

## 🧪 3. Verification & Quality Assurance Protocol

Before submitting code:
1. **Typecheck & Lint Pass**: `npm run build` must compile with ZERO TypeScript errors or warnings.
2. **Clean Imports**: Remove all unused imports, dead variables, and legacy commented code.
3. **API Contract Verification**: Ensure all modified component prop signatures match across invocation sites.
