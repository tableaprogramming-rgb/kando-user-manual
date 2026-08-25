# Docusaurus Setup Guide

## 📋 Overview

This guide walks you through setting up and deploying your Kando documentation site using Docusaurus and Vercel.

---

## 📁 Step 1: Populate Documentation Files

The folder structure is ready, but you need to add your markdown files.

### Option A: Copy from Existing Manual Folder

If you have existing markdown files in the root `manual/` folder, copy them into the Docusaurus structure:

```bash
# From repository root
cp -r ../manual/1-Getting-Started/* docusaurus/docs/user-manual/getting-started/
cp -r ../manual/2-Employee-Guide/* docusaurus/docs/user-manual/employee-guide/
cp -r ../manual/3-Manager-Guide/* docusaurus/docs/user-manual/manager-guide/
cp -r ../manual/4-Owner-Guide/* docusaurus/docs/user-manual/owner-guide/
cp -r ../manual/5-HR-Admin-Guide/* docusaurus/docs/user-manual/hr-admin-guide/
cp -r ../manual/7-Troubleshooting/* docusaurus/docs/user-manual/troubleshooting/
cp -r ../manual/8-Reference/* docusaurus/docs/user-manual/reference/

# Copy guides and analysis
cp ../DOCUMENTATION_GUIDE.md docusaurus/docs/guides/
cp ../QA_BRANCH_DOCUMENTATION_ANALYSIS.md docusaurus/docs/guides/
```

### Option B: Create Placeholder Files

For testing, create simple placeholder files:

```bash
cd docusaurus/docs/user-manual/getting-started/
cat > introduction.md << 'EOF'
---
title: Introduction to Kando
description: Learn what Kando is and how it helps your organization
---

# Introduction to Kando

Kando is a comprehensive Human Capital Management System...

[Content will be added here]
EOF
```

### File Naming Convention

When copying files, ensure proper naming:
- Remove leading numbers: `1.1-Introduction.md` → `introduction.md`
- Use lowercase with hyphens: `Time-Tracking.md` → `time-tracking.md`

---

## 🚀 Step 2: Local Testing

### Install Dependencies
```bash
cd docusaurus
npm install
```

### Start Development Server
```bash
npm start
```

The site opens at `http://localhost:3000`

### Build for Production
```bash
npm run build
```

Output is in the `build/` folder.

---

## 🌐 Step 3: Deploy to GitHub

Push your code to a public GitHub repository:

```bash
# From repository root
git add docusaurus/
git commit -m "feat: Add Docusaurus documentation site"
git push origin main
```

Make sure your GitHub repo is **public** if you want the docs to be publicly accessible.

---

## 🎯 Step 4: Deploy to Vercel

### Option A: Manual Setup

1. Go to [Vercel.com](https://vercel.com)
2. Click "New Project"
3. Select "Import Git Repository"
4. Connect your GitHub account
5. Select your `kando-user-manual` repository
6. Configure:
   - **Framework**: Docusaurus
   - **Root Directory**: `docusaurus`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm ci`
7. Click "Deploy"

### Option B: Deploy Button (Fastest)

If you're already on Vercel:
1. Dashboard → Add New → Project
2. Import Git Repository
3. Select the repo and `docusaurus` folder
4. Auto-detected settings should work
5. Click Deploy

### Auto-Deployment
Once connected, every push to `main` will:
- Trigger an automatic build on Vercel
- Deploy the new version if build succeeds
- Provide build status on GitHub

---

## 🔧 Step 5: Configure Custom Domain (Optional)

### Connect a Custom Domain

1. In Vercel project settings → **Domains**
2. Add your domain (e.g., `docs.kando.com`)
3. Vercel shows DNS instructions
4. Update your domain registrar's DNS settings
5. Wait for DNS propagation (typically 24-48 hours)

### Use Vercel Subdomain

Default: `kando-documentation.vercel.app` (automatically provided)

---

## 📝 Step 6: Update Documentation

### Adding New Pages

1. Create a `.md` file in the appropriate folder:
   ```bash
   docusaurus/docs/user-manual/employee-guide/new-feature.md
   ```

2. Add frontmatter (metadata):
   ```markdown
   ---
   title: New Feature Name
   description: Brief description for SEO
   slug: /new-feature
   ---

   # New Feature Name

   Content goes here...
   ```

3. Update `sidebars.js` to include the new page:
   ```javascript
   items: [
     'user-manual/employee-guide/time-tracking',
     'user-manual/employee-guide/new-feature',  // Add here
   ]
   ```

4. Commit and push:
   ```bash
   git add docusaurus/docs/
   git add docusaurus/sidebars.js
   git commit -m "docs: Add new feature documentation"
   git push origin main
   ```

5. Vercel auto-deploys within 2-5 minutes ✨

### Editing Existing Pages

1. Edit the `.md` file
2. Commit and push
3. Vercel auto-deploys

---

## 🎨 Customization

### Change Colors

Edit `docusaurus.config.js`:

```javascript
:root {
  --ifm-color-primary: #your-color;
  --ifm-color-primary-dark: #darker-shade;
}
```

Then rebuild and deploy.

### Add Logo

1. Place your logo in `static/img/kando-logo.png`
2. Update `docusaurus.config.js`:
   ```javascript
   logo: {
     alt: 'Kando Logo',
     src: 'img/kando-logo.png',
   }
   ```

### Change Navigation

Edit `docusaurus.config.js` navbar config:

```javascript
navbar: {
  items: [
    {
      type: 'docSidebar',
      sidebarId: 'manualSidebar',
      label: 'User Manual',
    },
    // Add more items here
  ]
}
```

---

## 🔍 Enable Search (Optional)

### Using Algolia (Recommended)

1. Sign up at [Algolia.com](https://www.algolia.com)
2. Create an index
3. Update `docusaurus.config.js`:
   ```javascript
   algolia: {
     appId: 'YOUR_APP_ID',
     apiKey: 'YOUR_API_KEY',
     indexName: 'kando_docs',
   }
   ```
4. Rebuild and deploy

### Using Built-in Search

Docusaurus includes basic search that works offline. No setup needed!

---

## 📊 Monitor Build Status

### View Build Logs

1. Go to [Vercel Dashboard](https://vercel.com)
2. Click your project
3. Go to "Deployments"
4. Click on any deployment to see logs
5. View build output and any errors

### Fix Build Failures

Common issues:

**Issue**: "Module not found"
- Solution: Make sure all file paths in `sidebars.js` match actual files

**Issue**: "Invalid markdown frontmatter"
- Solution: Check frontmatter syntax (must be valid YAML)

**Issue**: "Broken links"
- Solution: Update links to use correct relative paths

---

## 📈 Analytics (Optional)

### Add Google Analytics

1. Get your Google Analytics ID
2. Update `docusaurus.config.js`:
   ```javascript
   plugins: [
     [
       '@docusaurus/plugin-google-analytics',
       {
         trackingID: 'UA-XXXXXXX-X',
         anonymizeIP: true,
       },
     ],
   ]
   ```
3. Rebuild and deploy

---

## 🚀 Deployment Checklist

Before pushing to production, verify:

- [ ] All documentation files are in correct folders
- [ ] `sidebars.js` includes all pages
- [ ] Frontmatter (metadata) is valid on all pages
- [ ] All internal links work (`npm run build` checks this)
- [ ] Branding/colors are correct
- [ ] Navigation structure is logical
- [ ] Search works (if enabled)
- [ ] Mobile view looks good
- [ ] Dark mode works (if needed)

---

## 📞 Troubleshooting

### Local Build Issues

```bash
# Clear cache
npm run clear

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build
```

### Vercel Deployment Issues

1. Check build logs in Vercel dashboard
2. Look for specific error messages
3. Common fixes:
   - Ensure all file paths in sidebars.js exist
   - Check frontmatter syntax on all markdown files
   - Verify no broken links (Docusaurus lists them in build output)

### Local Server Won't Start

```bash
# Port 3000 might be in use
npm start -- --port 3001

# Or kill the process using port 3000
lsof -i :3000
kill -9 <PID>
```

---

## 📖 Next Steps

1. ✅ **Populate documentation files** (copy from `manual/` folder)
2. ✅ **Test locally** (`npm start`)
3. ✅ **Push to GitHub** (public repo)
4. ✅ **Deploy to Vercel** (one-click setup)
5. ✅ **Configure custom domain** (optional)
6. ✅ **Share the link** 🎉

---

## 📚 Resources

- [Docusaurus Docs](https://docusaurus.io)
- [Vercel Docs](https://vercel.com/docs)
- [Markdown Guide](https://docusaurus.io/docs/markdown-features)

---

**Questions?** Check the Docusaurus docs or Vercel support.

**Last Updated**: 2026-08-25
