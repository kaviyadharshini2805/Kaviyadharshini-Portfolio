# Quick Start Guide

## 🚀 Get Running in 5 Minutes

### 1. Install Dependencies (2 minutes)
```bash
cd portfolio
npm install
```

### 2. Start Development Server (30 seconds)
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Customize Your Info (2 minutes)

**Update Your Name & Bio**
Open `components/Hero.tsx` and change:
```typescript
<h1>Kaviyadharshini M</h1>  // → Your Name
```

**Update Social Links**
In the same file:
```typescript
const socialLinks = [
  { icon: Github, href: "YOUR_GITHUB_URL", label: "GitHub" },
  { icon: Linkedin, href: "YOUR_LINKEDIN_URL", label: "LinkedIn" },
  // ...
];
```

**Update Email**
In `components/Contact.tsx`:
```typescript
{ icon: Mail, value: "your.email@example.com", link: "mailto:your.email@example.com" },
```

That's it! You have a working portfolio. 🎉

---

## 📝 Essential Customizations

### Update Projects (5 minutes)

Edit `components/Projects.tsx`:

```typescript
const projects = [
  {
    title: "Your Project",
    description: "What it does",
    tech: ["React", "Node.js"],
    github: "github.com/you/project",
    demo: "yourproject.com",
    gradient: "from-accent to-blue-600",
  },
  // Add more projects...
];
```

### Update Skills (3 minutes)

Edit `components/Skills.tsx`:

```typescript
const skillCategories = [
  {
    title: "Languages",
    skills: ["Your", "Languages"],
  },
  // More categories...
];
```

### Add Your Experience (3 minutes)

Edit `components/Experience.tsx`:

```typescript
const experiences = [
  {
    role: "Your Role",
    company: "Company Name",
    period: "Jan 2024 - Present",
    description: "What you did",
    gradient: "from-accent to-blue-600",
  },
];
```

---

## 🎨 Quick Style Changes

### Change Colors (1 minute)

Edit `tailwind.config.ts`:

```typescript
colors: {
  accent: "#3B82F6",      // Your primary color
  secondary: "#8B5CF6",   // Your secondary color
}
```

### Change Font (1 minute)

Edit `app/layout.tsx`:

```typescript
import { Poppins } from "next/font/google";  // Change font

const poppins = Poppins({ 
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"] 
});
```

---

## 🚢 Deploy (5 minutes)

### Option 1: Vercel (Easiest)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Click "Deploy"

Done! Your site is live.

### Option 2: Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site"
4. Connect GitHub and select repo
5. Click "Deploy"

---

## 📋 Checklist Before Launch

- [ ] Updated name in `Hero.tsx`
- [ ] Updated all social links
- [ ] Updated email address
- [ ] Added your projects
- [ ] Updated skills
- [ ] Added experience/internships
- [ ] Updated education details
- [ ] Added resume PDF to `/public/resume.pdf`
- [ ] Tested on mobile and desktop
- [ ] Ran `npm run build` successfully
- [ ] Updated README with your info

---

## 🛠️ Common Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm start            # Run production build

# Maintenance
npm run lint         # Check for errors
npm install          # Install dependencies
```

---

## 🐛 Quick Fixes

**Port already in use?**
```bash
npm run dev -- -p 3001
```

**Something not working?**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build failing?**
```bash
# Check for errors
npm run lint
```

---

## 📚 Next Steps

After getting it running:

1. **Read SETUP.md** - Detailed customization guide
2. **Read CUSTOMIZATION.md** - Advanced styling options
3. **Read PROJECT_STRUCTURE.md** - Understand the codebase
4. **Add your content** - Make it yours!
5. **Deploy** - Share with the world

---

## 💡 Pro Tips

1. **Use VSCode** - Best development experience
2. **Install Extensions**:
   - Tailwind CSS IntelliSense
   - ES7+ React Snippets
   - Prettier
   
3. **Make frequent commits** - Easy to revert if needed
4. **Test before deploying** - Run `npm run build` first
5. **Optimize images** - Keep them under 500KB

---

## 🆘 Need Help?

- **Documentation Issues**: Check README.md
- **Code Issues**: Read error messages carefully
- **Styling Issues**: Refer to Tailwind docs
- **Build Issues**: Check Next.js documentation

---

## 🎯 What's Included

✅ Modern, clean design  
✅ Fully responsive  
✅ Smooth animations  
✅ Dark theme  
✅ Contact form  
✅ Project showcase  
✅ Skills section  
✅ Experience timeline  
✅ SEO optimized  
✅ Fast loading  
✅ Easy to customize  
✅ Production ready  

---

**Ready to customize?** Open the project in your code editor and start editing! 🚀
