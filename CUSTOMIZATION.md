# Customization Guide

## Color Scheme

### Change Primary Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  background: "#09090B",  // Main background
  primary: "#FFFFFF",     // Text color
  accent: "#3B82F6",      // Primary accent (blue)
  secondary: "#8B5CF6",   // Secondary accent (purple)
}
```

### Popular Color Schemes

**Green/Teal Theme:**
```typescript
accent: "#10B981",      // Green
secondary: "#14B8A6",   // Teal
```

**Orange/Red Theme:**
```typescript
accent: "#F97316",      // Orange
secondary: "#EF4444",   // Red
```

**Pink/Purple Theme:**
```typescript
accent: "#EC4899",      // Pink
secondary: "#A855F7",   // Purple
```

## Typography

### Change Font

1. **Using Google Fonts** (Current: Inter)

Edit `app/layout.tsx`:
```typescript
import { Inter, Poppins, Roboto } from "next/font/google";

const font = Poppins({ 
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"] 
});
```

2. **Using Geist Font**

Already configured in the project. To activate:
```typescript
import { GeistSans } from "geist/font/sans";

// In layout
<body className={GeistSans.className}>
```

## Animations

### Adjust Animation Speed

Edit `tailwind.config.ts`:

```typescript
animation: {
  "fade-up": "fadeUp 0.6s ease-out forwards",  // Change duration
  "float": "float 6s ease-in-out infinite",    // Change speed
}
```

### Disable Animations

Remove Framer Motion components or set `initial` and `animate` to the same values.

## Sections

### Reorder Sections

Edit `app/page.tsx`:

```typescript
<main>
  <Hero />
  <About />
  <Projects />    // Moved up
  <Skills />      // Moved down
  <Experience />
  // ... rest
</main>
```

### Remove Sections

Simply comment out or delete the component import and usage in `app/page.tsx`.

## Projects

### Add New Project

Edit `components/Projects.tsx`:

```typescript
const projects = [
  // ... existing projects
  {
    title: "Your Project Name",
    description: "Brief description",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/username/repo",
    demo: "https://demo-url.com",
    gradient: "from-blue-500 to-cyan-500",
  },
];
```

### Add Project Images

1. Add image to `public/projects/`:
```
public/
  projects/
    project1.png
    project2.png
```

2. Update project object:
```typescript
{
  title: "Project Name",
  image: "/projects/project1.png",
  // ... rest
}
```

3. Update component to display image:
```typescript
{project.image && (
  <img 
    src={project.image} 
    alt={project.title}
    className="w-full h-48 object-cover rounded-lg mb-4"
  />
)}
```

## Skills

### Update Skill Categories

Edit `components/Skills.tsx`:

```typescript
const skillCategories = [
  {
    title: "Your Category",
    skills: ["Skill 1", "Skill 2", "Skill 3"],
  },
  // ... more categories
];
```

### Change Skill Layout

Current: Grid layout
Alternative: List or badge layout

## Social Links

### Add New Social Platform

1. Import icon from lucide-react:
```typescript
import { Twitter, Instagram, Youtube } from "lucide-react";
```

2. Add to socialLinks array in `components/Hero.tsx`:
```typescript
{ icon: Twitter, href: "https://twitter.com/username", label: "Twitter" },
```

## Contact Form

### Integrate with Form Service

**Option 1: FormSpree**

Update `components/Contact.tsx`:
```typescript
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option 2: EmailJS**

1. Install EmailJS:
```bash
npm install @emailjs/browser
```

2. Update handleSubmit in `components/Contact.tsx`:
```typescript
import emailjs from '@emailjs/browser';

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData,
    'YOUR_PUBLIC_KEY'
  ).then(/* handle success */);
};
```

## Navbar

### Add/Remove Menu Items

Edit `components/Navbar.tsx`:

```typescript
const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  // Add new item:
  { name: "Blog", href: "#blog" },
  // ... rest
];
```

### Make Navbar Always Solid

```typescript
// Remove conditional styling
className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-gray-800"
```

## Background

### Change Particle Count

Edit `components/AnimatedBackground.tsx`:

```typescript
for (let i = 0; i < 100; i++) {  // Change from 50 to 100
  particles.push({
    // ... particle config
  });
}
```

### Change Particle Color

```typescript
ctx.fillStyle = "rgba(139, 92, 246, 0.5)";  // Purple particles
```

### Disable Animated Background

Remove or comment out in `app/page.tsx`:
```typescript
// <AnimatedBackground />
```

## Metadata (SEO)

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name | Your Title",
  description: "Your description",
  keywords: ["keyword1", "keyword2"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name",
    description: "Your description",
    images: ["/og-image.png"],
  },
};
```

## Performance

### Optimize Images

Use Next.js Image component:

```typescript
import Image from "next/image";

<Image 
  src="/image.jpg" 
  alt="Description"
  width={500}
  height={300}
  priority // for above-fold images
/>
```

### Lazy Load Sections

```typescript
import dynamic from 'next/dynamic';

const Projects = dynamic(() => import('@/components/Projects'));
```

## Additional Features

### Add Blog Section

1. Create `components/Blog.tsx`
2. Create blog posts in `content/blog/`
3. Add to main page
4. Use MDX for blog content

### Add Resume Download

1. Add resume PDF to `public/resume.pdf`
2. Link is already in Hero component

### Add Dark/Light Mode Toggle

Use next-themes:
```bash
npm install next-themes
```

See [next-themes documentation](https://github.com/pacocoursey/next-themes) for setup.
