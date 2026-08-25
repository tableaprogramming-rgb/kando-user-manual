# Quick Deploy to Vercel Guide

Deploy your Kando documentation site to Vercel in 5 minutes! 🚀

---

## Prerequisites

✅ Public GitHub repository with your `docusaurus/` folder  
✅ GitHub account connected to Vercel

---

## 🚀 Deployment Steps (5 minutes)

### Step 1: Go to Vercel
Visit [vercel.com](https://vercel.com) and sign in with GitHub

### Step 2: Create New Project
Click **"Add New Project"** → **"Import Git Repository"**

### Step 3: Select Your Repository
- Find and select: `kando-user-manual` (or your repo name)
- Click **"Import"**

### Step 4: Configure Project

Vercel auto-detects Docusaurus, but verify these settings:

| Setting | Value |
|---------|-------|
| **Framework** | Docusaurus |
| **Root Directory** | `docusaurus` |
| **Build Command** | `npm run build` |
| **Output Directory** | `build` |
| **Install Command** | `npm ci` |
| **Node Version** | 18.x or newer |

### Step 5: Deploy
Click **"Deploy"** and wait 2-3 minutes ✨

---

## ✅ After Deployment

### Your Site is Live!
Default URL: `kando-documentation.vercel.app`

You'll see:
- ✅ Deployment success message
- ✅ Public URL
- ✅ QR code to scan

### Test the Site
1. Click the URL or QR code
2. Verify pages load correctly
3. Test navigation
4. Test search

---

## 🔗 Auto-Updates

From now on, every time you:
1. **Push to GitHub** (`git push origin main`)
2. **Vercel auto-builds** (2-3 minutes)
3. **Site updates live** ✨

No manual deployment needed!

---

## 🌐 Custom Domain (Optional)

### Add Your Domain

1. Go to Vercel project → **Settings** → **Domains**
2. Enter your domain (e.g., `docs.kando.com`)
3. Copy DNS records shown by Vercel
4. Login to your domain registrar
5. Update DNS to point to Vercel
6. Wait 24-48 hours for propagation

### Verify Domain
Once DNS updates:
- Visit your custom domain
- Vercel auto-configures SSL/HTTPS

---

## 📊 Monitor Deployments

### View Build Status
1. Go to Vercel Dashboard
2. Click your project
3. Go to **Deployments** tab
4. View logs, status, and performance

### Enable GitHub Integration
- Every PR shows a preview deployment
- View changes before merging to main
- Automatic deployment on merge

---

## 🛠️ Troubleshooting

### Build Fails
1. Check build logs in Vercel
2. Fix errors (usually broken links or bad markdown)
3. Commit fix to GitHub
4. Vercel auto-retries

### Site Looks Wrong
- Clear browser cache (Ctrl+Shift+Del or Cmd+Shift+Delete)
- Wait for cache to clear (usually instant)
- Refresh page

### Domain Not Working
- Verify DNS records are correct
- Wait 24-48 hours for propagation
- Use tools like [DNS Checker](https://dnschecker.org) to verify

---

## 📝 Updating Documentation

### Push Updates = Auto-Deploy

```bash
# Edit documentation files
nano docusaurus/docs/user-manual/employee-guide/time-tracking.md

# Commit changes
git add docusaurus/docs/
git commit -m "docs: Update time tracking guide"

# Push to GitHub
git push origin main

# ✨ Vercel auto-deploys within 2-5 minutes
```

---

## 📈 Performance

Vercel provides:
- ✅ Global CDN (fast worldwide)
- ✅ Automatic caching
- ✅ Analytics & monitoring
- ✅ SSL/HTTPS included

---

## 💡 Pro Tips

### 1. Preview Deployments
Every push creates a preview URL before going live  
Great for testing before production

### 2. Rollback
Easy to rollback to previous version if needed

### 3. Environment Variables
Store secrets safely (API keys, etc.)

### 4. Analytics
View traffic, performance, and user data

---

## 🎯 Success Checklist

After deployment, verify:
- [ ] Site loads at public URL
- [ ] Navigation works
- [ ] Search functions (if enabled)
- [ ] Mobile view looks good
- [ ] Dark mode works (if available)
- [ ] Links aren't broken
- [ ] Images display correctly
- [ ] No console errors (check DevTools)

---

## 🚀 You're Done! 

Your documentation is now publicly available at:

**`https://kando-documentation.vercel.app`** (or your custom domain)

Share the link with your team and users! 📚

---

## 📞 Need Help?

- **Vercel Issues**: [Vercel Docs](https://vercel.com/docs)
- **Docusaurus Issues**: [Docusaurus Docs](https://docusaurus.io)
- **Markdown Help**: [Markdown Guide](https://docusaurus.io/docs/markdown-features)

---

**Deployment Time**: ~5 minutes  
**Auto-Updates**: Yes ✅  
**Cost**: Free tier available ✅

Happy documenting! 📖
