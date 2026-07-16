# How to Run Your Portfolio

## ⚠️ Node.js Not Detected

Node.js is required to run this portfolio but it's not currently installed on your system.

---

## 📦 Step 1: Install Node.js

### Download & Install

1. **Visit:** [https://nodejs.org/](https://nodejs.org/)
2. **Download:** Click the big green button that says "LTS" (Long Term Support)
   - This will download the recommended version for Windows
3. **Run the installer:**
   - Double-click the downloaded `.msi` file
   - Click "Next" through the installation wizard
   - ✅ Keep all default options
   - ✅ Make sure "Automatically install necessary tools" is checked
   - Click "Install"
4. **Wait:** Installation takes 2-3 minutes
5. **Restart:** Close and reopen any Command Prompt or PowerShell windows

### Verify Installation

After installation, open a **new** Command Prompt or PowerShell window and type:

```bash
node --version
npm --version
```

You should see version numbers like:
```
v20.11.0
10.2.4
```

---

## 🚀 Step 2: Install Portfolio Dependencies

Once Node.js is installed:

1. **Open PowerShell or Command Prompt**
2. **Navigate to the portfolio folder:**
   ```bash
   cd "E:\Projects\Kaviyadharshini - Portfolio\portfolio"
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
   This will take 2-5 minutes and install all required packages.

---

## ▶️ Step 3: Run the Development Server

After dependencies are installed:

```bash
npm run dev
```

You should see:
```
▲ Next.js 15.0.0
- Local:        http://localhost:3000
- Network:      http://192.168.x.x:3000

✓ Ready in 2.5s
```

---

## 🌐 Step 4: View Your Portfolio

1. **Open your web browser** (Chrome, Edge, Firefox, etc.)
2. **Go to:** [http://localhost:3000](http://localhost:3000)
3. **You should see your portfolio!** 🎉

---

## 📝 Step 5: Customize Your Portfolio

Now that it's running, customize it with your information:

### Quick Edits (5 minutes)

1. **Open the project in a code editor:**
   - **VSCode** (recommended): [https://code.visualstudio.com/](https://code.visualstudio.com/)
   - Or any text editor (Notepad++, Sublime Text, etc.)

2. **Edit these files:**
   - `components/Hero.tsx` - Your name and social links
   - `components/About.tsx` - Your bio
   - `components/Projects.tsx` - Your projects
   - `components/Contact.tsx` - Your email

3. **Save the file** - The browser will automatically refresh!

### See the changes instantly

Every time you save a file, the browser automatically updates. No need to restart the server!

---

## 🛑 Stop the Server

When you're done:

1. Go to the PowerShell/Command Prompt window
2. Press `Ctrl + C`
3. Type `Y` when asked to terminate

---

## 🔄 Run Again Later

Next time you want to work on your portfolio:

1. Open PowerShell/Command Prompt
2. Navigate to portfolio folder:
   ```bash
   cd "E:\Projects\Kaviyadharshini - Portfolio\portfolio"
   ```
3. Start the server:
   ```bash
   npm run dev
   ```

That's it!

---

## 🆘 Troubleshooting

### "Port 3000 is already in use"

**Solution:** Use a different port:
```bash
npm run dev -- -p 3001
```
Then visit: http://localhost:3001

### "Cannot find module"

**Solution:** Reinstall dependencies:
```bash
npm install
```

### Changes not showing

**Solution:** Hard refresh your browser:
- Windows: `Ctrl + Shift + R`
- Or clear cache and reload

---

## 📚 Next Steps

1. ✅ Install Node.js
2. ✅ Run `npm install`
3. ✅ Run `npm run dev`
4. ✅ Open http://localhost:3000
5. ⏭️ Customize your content
6. ⏭️ Deploy to Vercel (when ready)

---

## 🎯 Current Status

**Your Location:**
```
E:\Projects\Kaviyadharshini - Portfolio\portfolio
```

**What you need to do:**
1. Install Node.js from nodejs.org
2. Restart PowerShell/Command Prompt
3. Run the commands above

---

## 💡 Quick Reference

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run production build
npm start

# Check for errors
npm run lint
```

---

**Need help?** See [WINDOWS_SETUP.md](WINDOWS_SETUP.md) for detailed instructions!
