# Windows Setup Guide

Complete guide for setting up the portfolio on Windows.

## Prerequisites Installation

### Step 1: Install Node.js

1. **Download Node.js**
   - Go to [https://nodejs.org/](https://nodejs.org/)
   - Download the **LTS version** (recommended for most users)
   - Current LTS: 20.x or higher

2. **Run the Installer**
   - Double-click the downloaded `.msi` file
   - Follow the installation wizard
   - ✅ Check "Automatically install necessary tools"
   - Click "Next" → "Next" → "Install"

3. **Verify Installation**
   - Open **Command Prompt** or **PowerShell**
   - Run these commands:
   ```cmd
   node --version
   npm --version
   ```
   - You should see version numbers like `v20.x.x` and `9.x.x`

### Step 2: Install Git (Optional but Recommended)

1. **Download Git**
   - Go to [https://git-scm.com/download/win](https://git-scm.com/download/win)
   - Download and run the installer

2. **Install with Default Settings**
   - Keep all default options
   - Git Bash will be included

3. **Verify Installation**
   ```cmd
   git --version
   ```

## Project Setup

### Step 1: Navigate to Project

Open **Command Prompt** or **PowerShell**:

```cmd
cd path\to\portfolio
```

Or use File Explorer:
1. Navigate to the `portfolio` folder
2. Type `cmd` in the address bar
3. Press Enter

### Step 2: Install Dependencies

In the command prompt:

```cmd
npm install
```

This will take 2-5 minutes. You'll see:
- Downloading packages
- Building dependencies
- Progress bars

**Expected output at the end:**
```
added 500+ packages in 2m
```

### Step 3: Start Development Server

```cmd
npm run dev
```

You should see:
```
▲ Next.js 15.0.0
- Local:        http://localhost:3000
- Network:      http://192.168.x.x:3000

✓ Ready in 2.5s
```

### Step 4: View Your Portfolio

1. Open your web browser
2. Go to: [http://localhost:3000](http://localhost:3000)
3. You should see your portfolio website!

## Troubleshooting Windows Issues

### Issue: "npm is not recognized"

**Solution:**
1. Node.js not installed or not in PATH
2. Reinstall Node.js from nodejs.org
3. Restart Command Prompt after installation

### Issue: "Port 3000 is already in use"

**Solution 1: Use Different Port**
```cmd
npm run dev -- -p 3001
```

**Solution 2: Kill Process on Port 3000**
```cmd
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F
```

### Issue: Permission Errors

**Solution:**
1. Run Command Prompt as Administrator
   - Right-click Command Prompt
   - Select "Run as administrator"

### Issue: "Cannot find module"

**Solution:**
```cmd
rmdir /s /q node_modules
del package-lock.json
npm install
```

### Issue: Slow Installation

**Possible causes:**
- Slow internet connection
- Antivirus scanning files
- Running on HDD instead of SSD

**Solutions:**
- Temporarily disable antivirus
- Use a wired connection
- Be patient (first install is slowest)

### Issue: Git Line Ending Warnings

**Solution:**
```cmd
git config --global core.autocrlf true
```

## Windows-Specific Tips

### 1. Use Windows Terminal (Recommended)

Modern terminal with better features:
- Install from Microsoft Store: "Windows Terminal"
- Supports tabs and split panes
- Better colors and fonts

### 2. Use VSCode

Best code editor for this project:
1. Download from [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Install with default settings
3. Open project: `File → Open Folder → Select portfolio folder`

**Recommended Extensions:**
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Prettier - Code formatter
- TypeScript and JavaScript Language Features

### 3. Path Separators

Windows uses backslashes `\` but code uses forward slashes `/`:
- File paths in code: Use `/` (works on all platforms)
- Command line paths: Can use either `\` or `/`

### 4. Environment Variables (If Needed)

Create `.env.local` in project root:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Development Workflow on Windows

### Daily Development

1. **Open Project**
   ```cmd
   cd path\to\portfolio
   ```

2. **Start Dev Server**
   ```cmd
   npm run dev
   ```

3. **Edit Files**
   - Use VSCode or your preferred editor
   - Save changes
   - Browser auto-refreshes

4. **Stop Server**
   - Press `Ctrl + C` in terminal
   - Type `Y` when asked

### Before Deployment

1. **Build Project**
   ```cmd
   npm run build
   ```

2. **Test Production Build**
   ```cmd
   npm start
   ```

3. **Check for Errors**
   ```cmd
   npm run lint
   ```

## Keyboard Shortcuts (Windows)

**In Browser:**
- `Ctrl + Shift + R` - Hard refresh
- `F12` - Open developer tools

**In VSCode:**
- `Ctrl + P` - Quick file open
- `Ctrl + Shift + F` - Find in all files
- `Alt + Shift + F` - Format document
- `Ctrl + \`` - Open terminal

**In Terminal:**
- `Ctrl + C` - Stop current process
- `Ctrl + L` - Clear screen
- `Tab` - Autocomplete
- `↑/↓` - Previous/next command

## Updating the Project

### Update Dependencies
```cmd
npm update
```

### Update Next.js
```cmd
npm install next@latest react@latest react-dom@latest
```

### Clear Cache
```cmd
npm cache clean --force
```

## Folder Locations

**Common Windows Paths:**
```
C:\Users\YourName\Desktop\portfolio
C:\Users\YourName\Documents\portfolio
C:\Users\YourName\Projects\portfolio
```

**Node Modules Location:**
```
portfolio\node_modules\
```
(Don't edit files here - auto-generated)

## Performance Tips for Windows

1. **Exclude from Windows Defender**
   - Add `portfolio\node_modules` to exclusions
   - Speeds up npm install significantly

2. **Use SSD**
   - Store project on SSD if available
   - Much faster builds

3. **Close Unnecessary Apps**
   - Free up RAM during development

4. **Use Production Build for Testing**
   - Faster than dev mode
   - More accurate performance

## Command Reference

```cmd
# Navigation
cd folder_name          # Enter folder
cd ..                   # Go up one level
dir                     # List files

# npm Commands
npm install             # Install dependencies
npm run dev             # Development server
npm run build           # Production build
npm start               # Run production
npm run lint            # Check for errors

# Clear Terminal
cls                     # Clear screen

# File Operations
type filename.txt       # View file contents
copy file1 file2        # Copy file
del filename            # Delete file
```

## Next Steps

1. ✅ Node.js installed
2. ✅ Project dependencies installed
3. ✅ Dev server running
4. ✅ Portfolio visible in browser

**Now:**
1. Read `QUICK_START.md` for customization basics
2. Edit `components/Hero.tsx` with your name
3. Update social links
4. Add your projects

**Later:**
1. Read `CUSTOMIZATION.md` for advanced changes
2. Read `PROJECT_STRUCTURE.md` to understand codebase
3. Deploy to Vercel or Netlify

## Getting Help

**If something doesn't work:**

1. Read error message carefully
2. Google the exact error message
3. Check this guide's troubleshooting section
4. Check Next.js documentation
5. Ask on Stack Overflow

**Useful Resources:**
- Next.js Docs: [https://nextjs.org/docs](https://nextjs.org/docs)
- React Docs: [https://react.dev](https://react.dev)
- npm Docs: [https://docs.npmjs.com](https://docs.npmjs.com)
- Tailwind Docs: [https://tailwindcss.com](https://tailwindcss.com)

---

**You're all set! Happy coding! 🚀**
