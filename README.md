# Personal Portfolio Website

A modern, premium portfolio website built with Next.js 15, React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Clean, minimal, and elegant design
- 🌙 Dark theme with custom color palette
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive
- ⚡ Built with Next.js 15 and React
- 🎯 TypeScript for type safety
- 💨 Tailwind CSS for styling
- 🎭 Animated background with particles
- 📊 Scroll progress indicator
- 🔝 Back to top button
- 📧 Contact form

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Edit the following files to customize with your information:

- `components/Hero.tsx` - Name, headline, and social links
- `components/About.tsx` - About section content
- `components/Skills.tsx` - Skills and technologies
- `components/Projects.tsx` - Project details
- `components/Experience.tsx` - Work experience
- `components/Education.tsx` - Education details
- `components/Contact.tsx` - Contact information

### Colors

Update colors in `tailwind.config.ts`:

```typescript
colors: {
  background: "#09090B",
  primary: "#FFFFFF",
  accent: "#3B82F6",
  secondary: "#8B5CF6",
}
```

### Social Links

Update social links in `components/Hero.tsx`:

```typescript
const socialLinks = [
  { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
  // ... add more links
];
```

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills section
│   ├── Projects.tsx    # Projects section
│   ├── Experience.tsx  # Experience section
│   ├── Education.tsx   # Education section
│   ├── Coding.tsx      # Coding stats section
│   ├── Contact.tsx     # Contact section
│   ├── Footer.tsx      # Footer
│   ├── Navbar.tsx      # Navigation bar
│   ├── ScrollProgress.tsx    # Scroll progress bar
│   ├── BackToTop.tsx   # Back to top button
│   └── AnimatedBackground.tsx # Animated background
├── public/            # Static assets
├── tailwind.config.ts # Tailwind configuration
├── tsconfig.json      # TypeScript configuration
└── package.json       # Dependencies
```

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This project can be easily deployed to:

- [Vercel](https://vercel.com) (Recommended)
- [Netlify](https://netlify.com)
- [GitHub Pages](https://pages.github.com)
- Any static hosting service

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and deploy

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Kaviyadharshini M**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourusername)
- Email: contact@example.com
