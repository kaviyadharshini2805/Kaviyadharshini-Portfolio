# Setup Guide

## Quick Start

1. **Install Node.js** (if not already installed)
   - Download from [nodejs.org](https://nodejs.org/)
   - Recommended: Node.js 18 or higher

2. **Install Dependencies**
   ```bash
   cd portfolio
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

4. **Customize Your Portfolio**
   - Update personal information in component files
   - Replace placeholder links with your actual profiles
   - Add your projects, experience, and education
   - Update color scheme if desired

## Customization Checklist

### Hero Section (`components/Hero.tsx`)
- [ ] Update name
- [ ] Update headline and description
- [ ] Add GitHub profile link
- [ ] Add LinkedIn profile link
- [ ] Add LeetCode profile link
- [ ] Add email address

### About Section (`components/About.tsx`)
- [ ] Update bio text
- [ ] Customize stat cards

### Skills Section (`components/Skills.tsx`)
- [ ] Add/remove programming languages
- [ ] Update frontend technologies
- [ ] Update backend technologies
- [ ] Add/remove tools

### Projects Section (`components/Projects.tsx`)
- [ ] Replace with your actual projects
- [ ] Add project descriptions
- [ ] Add GitHub repository links
- [ ] Add live demo links
- [ ] Update technology tags

### Experience Section (`components/Experience.tsx`)
- [ ] Add your work experience
- [ ] Add internships
- [ ] Update dates and descriptions

### Education Section (`components/Education.tsx`)
- [ ] Update university name
- [ ] Update degree details
- [ ] Update graduation year

### Contact Section (`components/Contact.tsx`)
- [ ] Update location
- [ ] Update email address
- [ ] Update social links

### Navbar (`components/Navbar.tsx`)
- [ ] Customize logo/initials

## Build & Deploy

### Build for Production
```bash
npm run build
```

### Test Production Build Locally
```bash
npm start
```

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

### Deploy to Netlify
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site"
4. Connect to GitHub
5. Select your repository
6. Click "Deploy site"

## Tips

- Use high-quality project screenshots
- Keep descriptions concise and factual
- Update social links regularly
- Add your actual resume PDF to `/public/resume.pdf`
- Test on different devices and browsers
- Optimize images before adding them

## Troubleshooting

### Port 3000 already in use
```bash
# Use a different port
npm run dev -- -p 3001
```

### Dependencies not installing
```bash
# Clear npm cache
npm cache clean --force
# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json
# Reinstall
npm install
```

## Support

For issues or questions, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
