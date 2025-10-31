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
- Email verification flow with verification codes

**Design:**
- Centered layout
- Email input + submit button (inline)
- Primary cyan button
- Background: #102C4A

**Functionality:**
- Email validation (client-side with zod)
- Media professional checkbox option
- Verification code sent via email (Resend API)
- Dedicated verification page at `/verify`
- Real-time updates using Supabase realtime
- Toast notifications for success/error states

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

## Backend Architecture (Lovable Cloud)

### Database Tables

**1. newsletter_subscribers**
- `id` (uuid, primary key)
- `email` (text, unique, required)
- `is_verified` (boolean, default: false)
- `is_media_professional` (boolean, default: false)
- `subscribed_at` (timestamp with time zone)
- `verified_at` (timestamp with time zone, nullable)
- `created_at` (timestamp with time zone)

**RLS Policies:**
- Anonymous users can insert (signup)
- Only admins can view all subscribers
- Service role can update verification status
- Admins can delete subscribers

**2. verification_codes**
- `id` (uuid, primary key)
- `email` (text, required)
- `code` (text, required)
- `subscriber_type` (text: 'general' or 'media_professional')
- `is_used` (boolean, default: false)
- `expires_at` (timestamp with time zone)
- `created_at` (timestamp with time zone)

**RLS Policies:**
- Anonymous users can insert and update (for verification)
- Service role can read (for edge functions)
- Secure verification process

**3. user_roles**
- `id` (uuid, primary key)
- `user_id` (uuid, references auth.users)
- `role` (enum: 'admin', 'moderator', 'user')
- `created_at` (timestamp with time zone)
- Unique constraint on (user_id, role)

**RLS Policies:**
- Only admins can view and manage roles
- Uses `has_role()` security definer function

### Database Functions

**has_role(user_id uuid, role app_role)**
- Security definer function to check user roles
- Prevents recursive RLS issues
- Used in all admin-level RLS policies

### Edge Functions

**1. submit-newsletter-signup**
- Handles newsletter signup submissions
- Generates 6-digit verification code
- Sends verification email via Resend API
- Creates verification_codes record
- Creates newsletter_subscribers record (unverified)

**2. verify-newsletter-email**
- Validates verification codes
- Checks code expiration (10 minutes)
- Marks subscriber as verified
- Updates verification_codes as used
- Returns success/error status

### Authentication System

**Features:**
- Email/password authentication via Supabase Auth
- Role-based access control (admin, moderator, user)
- Auto-confirm email signups enabled (for development)
- Protected routes with role verification
- Real-time auth state management
- Secure session persistence

**Pages:**
- `/auth` - Combined login/signup page
- Protected admin routes with ProtectedRoute wrapper

---

## Admin Dashboard

### Access & Security
- Route: `/admin`
- Protected by authentication + admin role verification
- Uses ProtectedRoute wrapper component
- Real-time session monitoring
- Automatic redirects for unauthorized access

### Dashboard Features

**Statistics Overview:**
- Total subscribers count
- Verified subscribers count
- Unverified subscribers count
- New subscribers this week

**Subscriber Management:**
- Searchable and sortable data table
- Columns: Email, Verification Status, Media Professional, Subscription Date
- Delete functionality with confirmation dialog
- Real-time updates via Supabase realtime
- Pagination and filtering
- Empty states and loading indicators

**Admin Controls:**
- Sign out functionality
- User email display
- Admin navigation in header (conditional)

### Admin Components
- `ProtectedRoute.tsx` - Auth guard wrapper
- `StatsCard.tsx` - Dashboard statistics display
- `SubscribersTable.tsx` - Data table with actions
- `DeleteConfirmDialog.tsx` - Confirmation modal

---

## Security Implementation

### Authentication Security
- **Input Validation:** Zod schemas for email/password
- **Password Requirements:** Minimum 6 characters, max 72
- **Email Validation:** RFC-compliant email validation
- **Error Handling:** User-friendly error messages without exposing system details
- **No Console Logging:** Sensitive auth details never logged in production

### Database Security
- **Row Level Security (RLS):** Enabled on all tables
- **Role-Based Access:** Admin privileges required for sensitive operations
- **Security Definer Functions:** Prevent recursive RLS issues
- **Foreign Key Constraints:** Cascade deletes for data integrity
- **Service Role Protection:** Service role only used in edge functions

### API Security
- **Edge Function Authentication:** Validates requests properly
- **Rate Limiting Considerations:** Prepared for future implementation
- **Input Sanitization:** All inputs validated before processing
- **CORS Configuration:** Properly configured for frontend access

---

## Implementation Status

### ✅ Completed (Phase 1)
1. Design system setup (index.css, tailwind.config.ts)
2. Header with logo and navigation
3. Hero section
4. Why Cognivia section
5. Ecosystem cards
6. Spotlight section
7. Newsletter signup with email verification
8. Footer
9. Responsive optimization
10. Newsletter verification page (`/verify`)
11. Database schema with RLS policies
12. Edge functions for email verification
13. Authentication system (login/signup)
14. Admin dashboard with subscriber management
15. Protected routes with role-based access
16. Real-time data updates

### Phase 2: Additional Pages (Future)
- Summit page
- Awards page
- Podcasts page
- Startups page
- Press page
- About page (placeholder exists)

### Phase 3: Enhancements (Future)
- Mobile hamburger menu
- Admin user management interface
- Newsletter analytics and insights
- Export subscribers to CSV
- Bulk subscriber actions
- Email campaign management
- Advanced filtering and search
- Performance optimization
- Analytics integration

---

## Environment Variables

**Required Secrets:**
- `RESEND_API_KEY` - For email verification
- `SUPABASE_URL` - Auto-configured by Lovable Cloud
- `SUPABASE_ANON_KEY` - Auto-configured by Lovable Cloud
- `SUPABASE_SERVICE_ROLE_KEY` - For edge functions
- `LOVABLE_API_KEY` - For Lovable integrations

---

## Future Considerations

- CMS integration for content management
- Multi-language support
- Dark/light mode toggle (currently dark only)
- Animation enhancements
- Video backgrounds
- Interactive data visualizations
- Advanced newsletter segmentation
- A/B testing for email campaigns
- Subscriber engagement tracking
- Admin activity audit logs

---

**Document Version:** 2.0  
**Last Updated:** 2025-10-31  
**Status:** Admin Dashboard Complete - Ready for Phase 2