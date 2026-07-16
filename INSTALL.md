# Installation Instructions

## Prerequisites

Before you begin, ensure you have the following installed:

### 1. Node.js and npm

**Check if installed:**
```bash
node --version
npm --version
```

**If not installed:**
- Download from [nodejs.org](https://nodejs.org/)
- Choose the LTS (Long Term Support) version
- The installer includes npm

**Recommended versions:**
- Node.js: 18.x or higher
- npm: 9.x or higher

## Installation Steps

### Step 1: Navigate to Project Directory

```bash
cd portfolio
```

### Step 2: Install Dependencies

This will install all required packages including Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.

```bash
npm install
```

**If you encounter errors:**
```bash
# Clear npm cache
npm cache clean --force

# Try installing again
npm install
```

**Alternative package managers:**

Using Yarn:
```bash
yarn install
```

Using pnpm:
```bash
pnpm install
```

### Step 3: Start Development Server

```bash
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000)

## Available Scripts

### Development
```bash
npm run dev
```
Starts the development server with hot reload.

### Build
```bash
npm run build
```
Creates an optimized production build.

### Production Server
```bash
npm start
```
Runs the built app in production mode (run `npm run build` first).

### Linting
```bash
npm run lint
```
Checks code for potential errors and style issues.

## First Time Setup

After installation, customize the portfolio:

1. **Update Personal Information**
   - Edit `components/Hero.tsx` with your name and links
   - Edit `components/About.tsx` with your bio
   - Edit `components/Projects.tsx` with your projects

2. **Add Your Resume**
   - Place your resume PDF in `public/resume.pdf`

3. **Update Social Links**
   - Replace placeholder URLs in `components/Hero.tsx`
   - Replace placeholder URLs in `components/Contact.tsx`

4. **Test Locally**
   - Run `npm run dev`
   - Open [http://localhost:3000](http://localhost:3000)
   - Navigate through all sections

5. **Build for Production**
   - Run `npm run build`
   - Ensure no errors
   - Test with `npm start`

## Troubleshooting

### "npm is not recognized"
- Node.js is not installed or not in PATH
- Install/reinstall Node.js from nodejs.org

### "Port 3000 is already in use"
```bash
# Use a different port
npm run dev -- -p 3001
```

### Module not found errors
```bash
# Delete node_modules and reinstall
rmdir /s /q node_modules
del package-lock.json
npm install
```

### Build fails
- Check for TypeScript errors: `npm run lint`
- Ensure all files are saved
- Check console for specific error messages

### Framer Motion warnings
These are usually safe to ignore during development. They won't affect the production build.

## Windows-Specific Notes

If you're on Windows:

1. **Use PowerShell or Command Prompt**
   - Open as Administrator if permission errors occur

2. **Path Issues**
   - Use forward slashes `/` or escaped backslashes `\\` in paths

3. **Line Endings**
   - Git may convert line endings
   - Configure with: `git config --global core.autocrlf input`

## Next Steps

After successful installation:

1. Read `SETUP.md` for detailed customization
2. Read `CUSTOMIZATION.md` for styling and feature changes
3. Start customizing components with your information
4. Build and deploy (see `README.md`)

## Getting Help

If you encounter issues:

1. Check error messages carefully
2. Search the error on Google or Stack Overflow
3. Refer to official documentation:
   - [Next.js Docs](https://nextjs.org/docs)
   - [React Docs](https://react.dev)
   - [Tailwind CSS Docs](https://tailwindcss.com/docs)

## Version Information

This portfolio is built with:
- Next.js 15.x
- React 18.x
- TypeScript 5.x
- Tailwind CSS 3.x
- Framer Motion 11.x

Check `package.json` for specific versions.
