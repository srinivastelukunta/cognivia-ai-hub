# Cognivia Website - Requirements Document

## Project Overview

**Project Name:** Cognivia Website  
**Target Audience:** CXO-level executives (Chief Digital & AI Officers)  
**Quality Standard:** Enterprise-grade, premium presentation  
**Phase:** Homepage only (other pages linked but not built)

---

## Design System

### Color Palette (HSL Format)
- **Primary Background:** `#0B2A42` (Deep Blue) → HSL: 205, 67%, 16%
- **Secondary Background:** `#102C4A` (Slightly lighter blue) → HSL: 205, 65%, 18%
- **Accent Color:** Cyan (`#00D9FF` / `cyan-300`, `cyan-400`)
- **Text Primary:** White
- **Text Secondary:** White with 80% opacity
- **Borders:** White with 10-20% opacity

### Typography
- **Font Family:** Modern sans-serif (system font stack)
- **Headings:** Bold/Extrabold, tight leading
- **Body:** Regular weight, comfortable line height
- **Navigation:** Semibold, wide tracking

### Visual Effects
- Gradients for depth
- Backdrop blur for sticky header
- Smooth transitions on hover states
- Subtle borders for card elements
- Rounded corners (md to xl)

---

## Page Structure

### 1. Header (Sticky)
**Components:**
- Logo (PNG uploaded by user) - height: 40px
- Brand name "Cognivia" - 2xl, extrabold
- Navigation menu (desktop only):
  - Home (active)
  - Summit (hyperlink only)
  - Awards (hyperlink only)
  - Podcasts (hyperlink only)
  - Startups (hyperlink only)
  - Press (hyperlink only)
- CTAs:
  - "Get Tickets" (primary button - white bg, dark text)
  - "Join Newsletter" (outline button)

**Behavior:**
- Sticky positioning with backdrop blur
- Semi-transparent background (#0B2A42/90)
- Border bottom with white/10 opacity
- z-index: 50

---

### 2. Hero Section
**Content:**
- Main headline: "Where human vision becomes living intelligence."
- Subheadline: Platform description (max-width: 3xl)
- Two CTAs: "Get Tickets" (primary cyan), "Explore the Summit" (outline)

**Design:**
- Gradient background (from #0B2A42 to #102C4A)
- Centered alignment
- Generous padding (py-28)
- Large, bold typography (5xl)

---

### 3. Why Cognivia Section
**Content:**
- Section title: "From Insight to Intelligence — Together."
- Three value propositions:
  1. Executive Intelligence
  2. Connected Community
  3. Proof over Promise

**Design:**
- Three-column grid (responsive)
- Centered text
- Title with description per column
- Background: #0B2A42

---

### 4. Ecosystem Section
**Content:**
- Section title: "One Platform. Six Portals of Possibility."
- Six cards:
  1. Summit
  2. Awards
  3. Podcasts
  4. Startups
  5. Press
  6. Newsletter

**Each Card Contains:**
- Title
- Short description
- CTA link (text + arrow)

**Design:**
- Three-column grid (responsive)
- Cards with border (white/20)
- Hover effect: border color changes to cyan
- Rounded corners (xl)
- Background: #102C4A

---

### 5. Spotlight Section
**Content:**
- Section title: "This Month at Cognivia"
- Four feature cards:
  1. Summit Spotlight
  2. Leader Insight
  3. Startup Feature
  4. Award Timeline

**Design:**
- Four-column grid (responsive: 2 cols on tablet, 1 col on mobile)
- Bordered cards (white/20)
- CTA links with arrow
- Background: #0B2A42

---

### 6. Newsletter Section
**Content:**
- Headline: "Stay ahead of the curve."
- Description of newsletter value
- Email signup form (input + button)

**Design:**
- Centered layout
- Email input + submit button (inline)
- Primary cyan button
- Background: #102C4A

---

### 7. Footer
**Content:**
- Logo + brand name
- Navigation links (same as header)
- Copyright + legal links

**Design:**
- Three-section layout (logo, nav, legal)
- Flex layout (responsive)
- Border top (white/10)
- Small text for legal
- Background: #0B2A42

---

## Interactive Elements

### Buttons
**Primary (Get Tickets):**
- White background
- Dark blue text
- Hover: cyan-300 background

**Secondary (Outline):**
- Transparent background
- White border
- Hover: white/10 background

**CTA Links:**
- Cyan-300 text
- Arrow icon (→)
- Hover: underline

### Navigation
- Hover: cyan-300 color
- Active state indication

### Cards
- Hover: border color change to cyan-300
- Smooth transition

---

## Responsive Breakpoints

- **Mobile:** < 768px
  - Single column layout
  - Hamburger menu (future enhancement)
  - Stacked elements
  
- **Tablet:** 768px - 1024px
  - Two-column grids
  - Visible navigation
  
- **Desktop:** > 1024px
  - Full three/four-column grids
  - All features visible

---

## Performance & Quality Standards

### CXO-Level Quality Requirements
1. **Visual Polish:**
   - Pixel-perfect alignment
   - Consistent spacing
   - Professional color harmony
   - Smooth animations

2. **Performance:**
   - Fast load times
   - Optimized images
   - Efficient CSS

3. **Accessibility:**
   - Semantic HTML
   - Proper heading hierarchy
   - Alt text for images
   - Keyboard navigation support

4. **SEO:**
   - Meta tags (title, description)
   - Semantic structure
   - Proper heading levels

---

## Content Guidelines

### Tone of Voice
- Professional yet approachable
- Confident and authoritative
- Innovation-focused
- Action-oriented

### Key Messages
- Human-centered AI
- Executive intelligence network
- Proof over hype
- Connected ecosystem
- Responsible innovation

---

## Assets Required

### Images
- ✅ Cognivia Logo (PNG - provided by user)
- Future: Background images/patterns (optional)
- Future: Speaker photos (for spotlight section)

### Icons
- Arrow icons (→) for CTAs
- Future: Social media icons for footer

---

## Implementation Plan

### Phase 1: Homepage (Current)
1. Set up design system (index.css, tailwind.config.ts)
2. Implement header with logo and navigation
3. Build hero section
4. Create Why Cognivia section
5. Develop Ecosystem cards
6. Add Spotlight section
7. Implement Newsletter signup
8. Build footer
9. Responsive optimization
10. Quality assurance

### Phase 2: Additional Pages (Future)
- Summit page
- Awards page
- Podcasts page
- Startups page
- Press page

### Phase 3: Enhancements (Future)
- Mobile hamburger menu
- Newsletter integration
- Analytics
- Performance optimization

---

## Future Considerations

- Backend integration for newsletter signup
- CMS integration for content management
- Multi-language support
- Dark/light mode toggle (currently dark only)
- Animation enhancements
- Video backgrounds
- Interactive data visualizations

---

**Document Version:** 1.0  
**Last Updated:** 2025-10-30  
**Status:** Approved for Implementation