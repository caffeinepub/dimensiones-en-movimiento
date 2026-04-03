# nexgenxfigures — Product Detail Page

## Current State
The portfolio has a landing page with HeroSection, bento-box gallery (ProjectsSection), ServicesSection, AboutSection, ContactSection, Footer and ParticleBackground. All components use inline styles consistent with the dark anthracite theme (#0f1113 background, #2fc3ff cyan accent, Inter font).

No product detail page exists yet.

## Requested Changes (Diff)

### Add
- `ProductDetailPage` component: full-page product view accessible via a new `/product/:id` route or as an overlay/modal from the bento gallery cards
- High-resolution image carousel with:
  - Large main image viewer
  - Thumbnail strip below for navigation
  - Prev/Next arrow controls
  - Smooth slide/fade transitions
  - Keyboard navigation support
- Sidebar panel (right column on desktop, below on mobile) containing:
  - Product title and subtitle
  - Technical description (materials, dimensions, software, polygon count, etc.)
  - Style tags / badges (e.g. "Sci-Fi", "Hard Surface", "Character")
  - Social media buttons: Instagram, ArtStation, Behance — white icon on dark grey background
- A "back to gallery" button to return to the main page
- Route wiring in App.tsx so clicking a bento card opens the detail view

### Modify
- `App.tsx`: add state for selected product and conditionally render ProductDetailPage vs the normal layout
- `ProjectsSection.tsx`: make bento cards clickable, pass project id/data to the detail page
- `index.css`: add carousel and product-detail specific utility classes if needed

### Remove
- Nothing removed

## Implementation Plan
1. Create `src/frontend/src/components/ProductDetailPage.tsx` with carousel + sidebar layout
2. Use existing project data (extended with more fields: description, tags, dimensions, polygon count) as mock data
3. Implement carousel state (currentIndex) with prev/next handlers and thumbnail click
4. Build social buttons section with inline SVG icons for Instagram, ArtStation, Behance
5. Update App.tsx to hold `selectedProject` state, pass setter to ProjectsSection
6. Update ProjectsSection bento cards to call `onSelectProject` on click
7. Add responsive CSS (desktop: 2-column grid; mobile: stacked)
