# Project Structure

## Directory Overview

```
portfolio/
├── app/                        # Next.js 15 App Directory
│   ├── layout.tsx             # Root layout with metadata
│   ├── page.tsx               # Home page (all sections)
│   └── globals.css            # Global styles & utilities
│
├── components/                 # React Components
│   ├── Hero.tsx               # Landing section with name & intro
│   ├── About.tsx              # About me & statistics
│   ├── Skills.tsx             # Technical skills grid
│   ├── Projects.tsx           # Project showcase cards
│   ├── Experience.tsx         # Work experience timeline
│   ├── Education.tsx          # Education details
│   ├── Coding.tsx             # Coding profiles & stats
│   ├── Contact.tsx            # Contact form & info
│   ├── Footer.tsx             # Footer section
│   ├── Navbar.tsx             # Navigation bar
│   ├── ScrollProgress.tsx     # Scroll indicator
│   ├── BackToTop.tsx          # Back to top button
│   └── AnimatedBackground.tsx # Particle animation
│
├── public/                     # Static assets
│   ├── robots.txt             # SEO crawler instructions
│   └── resume.pdf             # Your resume (add this)
│
├── .env.example               # Environment variables template
├── .eslintrc.json             # ESLint configuration
├── .gitignore                 # Git ignore rules
├── next.config.js             # Next.js configuration
├── package.json               # Dependencies & scripts
├── postcss.config.mjs         # PostCSS configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
│
└── Documentation
    ├── README.md              # Main documentation
    ├── INSTALL.md             # Installation guide
    ├── SETUP.md               # Setup guide
    ├── CUSTOMIZATION.md       # Customization guide
    └── PROJECT_STRUCTURE.md   # This file
```

## Component Architecture

### Page Flow
```
app/page.tsx
    ├── <AnimatedBackground />  ─ Particle animation layer
    ├── <ScrollProgress />      ─ Progress bar at top
    ├── <Navbar />              ─ Fixed navigation
    ├── <Hero />                ─ Landing section
    ├── <About />               ─ About section
    ├── <Skills />              ─ Skills grid
    ├── <Projects />            ─ Projects showcase
    ├── <Experience />          ─ Work timeline
    ├── <Education />           ─ Education details
    ├── <Coding />              ─ Coding stats
    ├── <Contact />             ─ Contact form
    ├── <Footer />              ─ Footer
    └── <BackToTop />           ─ Scroll to top button
```

## Key Files Explained

### Configuration Files

**`package.json`**
- Lists all dependencies (Next.js, React, Framer Motion, etc.)
- Defines npm scripts (dev, build, start, lint)

**`tsconfig.json`**
- TypeScript compiler configuration
- Path aliases (@/* maps to root directory)

**`tailwind.config.ts`**
- Custom color palette
- Animation definitions
- Theme extensions

**`next.config.js`**
- Next.js framework settings
- Build optimizations

### Application Files

**`app/layout.tsx`**
- Root layout wrapper
- Metadata for SEO (title, description)
- Global font configuration
- HTML structure

**`app/page.tsx`**
- Main page component
- Imports and renders all sections
- Single-page application structure

**`app/globals.css`**
- Tailwind directives
- Custom utility classes
- Scrollbar styling
- Selection styling

### Component Details

**Structural Components:**
- `Navbar.tsx` - Fixed navigation with scroll effect
- `Footer.tsx` - Site footer with credits
- `ScrollProgress.tsx` - Animated progress bar
- `BackToTop.tsx` - Scroll to top functionality
- `AnimatedBackground.tsx` - Canvas-based particle system

**Content Components:**
- `Hero.tsx` - Name, tagline, CTA buttons, social links
- `About.tsx` - Bio text and stat cards
- `Skills.tsx` - Categorized skill badges
- `Projects.tsx` - Project cards with links
- `Experience.tsx` - Timeline of work experience
- `Education.tsx` - Educational background
- `Coding.tsx` - Coding platform statistics
- `Contact.tsx` - Contact form and info cards

## Data Flow

### Static Content
All content is defined within components as constants:

```typescript
// Example from Projects.tsx
const projects = [
  {
    title: "Project Name",
    description: "Description",
    tech: ["React", "Node.js"],
    // ...
  },
];
```

### No Database Required
- Portfolio is entirely static
- Content updates require code changes
- Can be extended with CMS if needed

## Styling Architecture

### Tailwind CSS Approach
- Utility-first classes
- Custom colors in config
- Responsive breakpoints (sm, md, lg, xl)
- Dark theme by default

### Custom Utilities
```css
.text-gradient     - Blue to purple gradient text
.card-gradient     - Card background gradient
.glow-accent       - Blue glow shadow
.glow-secondary    - Purple glow shadow
```

### Animation System
- Framer Motion for React animations
- Tailwind keyframes for CSS animations
- Scroll-triggered animations with useInView

## Responsive Design

### Breakpoints
```
sm:  640px  - Small tablets
md:  768px  - Tablets
lg:  1024px - Small laptops
xl:  1280px - Desktops
```

### Mobile-First Approach
- Base styles for mobile
- Use md:, lg: prefixes for larger screens
- Flexbox and Grid for layouts

## Performance Optimizations

### Built-in Next.js Features
- Automatic code splitting
- Image optimization
- Font optimization
- Static generation

### Best Practices Used
- Lazy loading with useInView
- Minimal JavaScript
- Optimized animations
- Efficient re-renders

## Deployment Structure

### Production Build
```
npm run build → Creates .next/ folder
    ├── static/      - Static assets
    ├── server/      - Server code
    └── cache/       - Build cache
```

### Deployment Options
1. **Vercel** (Recommended) - Zero config
2. **Netlify** - Simple static hosting
3. **GitHub Pages** - Free hosting
4. **Custom Server** - VPS or cloud

## Customization Points

### Easy Customizations (No code structure changes)
- Update text content in components
- Change colors in tailwind.config.ts
- Add/remove social links
- Update project data

### Medium Customizations (Modify components)
- Add new sections
- Change layouts
- Modify animations
- Add new features

### Advanced Customizations (Architecture changes)
- Add backend/API
- Integrate CMS
- Add authentication
- Multi-page structure

## Technology Stack Rationale

**Next.js 15**
- Latest features and optimizations
- Server components support
- Built-in routing and SEO

**TypeScript**
- Type safety
- Better IDE support
- Catch errors early

**Tailwind CSS**
- Rapid development
- Consistent styling
- Small bundle size

**Framer Motion**
- Smooth animations
- React-first API
- Performance optimized

**Lucide Icons**
- Modern icon set
- Tree-shakeable
- Consistent design

## Development Workflow

1. **Start dev server**: `npm run dev`
2. **Edit components**: Make changes
3. **Hot reload**: See changes instantly
4. **Build**: `npm run build`
5. **Test production**: `npm start`
6. **Deploy**: Push to Vercel/Netlify

## File Naming Conventions

- **Components**: PascalCase (e.g., `Hero.tsx`)
- **Utilities**: camelCase (e.g., `utils.ts`)
- **Config**: kebab-case (e.g., `next.config.js`)
- **Documentation**: UPPERCASE (e.g., `README.md`)

## Version Control

### Recommended .gitignore
Already configured to exclude:
- `node_modules/` - Dependencies
- `.next/` - Build output
- `.env*.local` - Local environment variables
- `*.log` - Log files

### Git Workflow
1. Initial commit with base structure
2. Commit after each major customization
3. Use branches for experimental features
4. Tag releases (v1.0, v1.1, etc.)
