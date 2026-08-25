# Kando Documentation Site (Docusaurus)

This folder contains the Docusaurus configuration and build setup for the Kando public documentation site.

## 🚀 Quick Start

### Prerequisites
- Node.js v18+ and npm
- Git

### Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm start
   ```
   The site will open at `http://localhost:3000`

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Serve the build locally**:
   ```bash
   npm run serve
   ```

## 📁 Project Structure

```
docusaurus/
├── docs/                    # Markdown content organized by section
│   ├── user-manual/        # Customer-facing user guides
│   ├── guides/             # Implementation and reference guides
│   └── reference/          # Technical reference and analysis
├── src/
│   ├── css/                # Custom styling
│   └── pages/              # Custom React pages (if needed)
├── static/                 # Static assets (images, logos, etc.)
├── docusaurus.config.js    # Main configuration file
├── sidebars.js             # Navigation structure
├── package.json            # Dependencies
└── vercel.json            # Vercel deployment configuration
```

## 📝 Content Organization

- **`docs/user-manual/`** - Customer-facing guides for different roles
  - `getting-started/` - Login, setup, dashboard
  - `employee-guide/` - Time tracking, leave, schedule, payslips
  - `manager-guide/` - Team management, approvals, scheduling
  - `owner-guide/` - Organization and subscription management
  - `hr-admin-guide/` - System setup and configuration
  - `troubleshooting/` - Problem solving and error reference
  - `reference/` - Glossary, FAQ, shortcuts

- **`docs/guides/`** - Internal guides and standards
  - `documentation-guide.md` - Standards for writing docs
  - `qa-branch-analysis.md` - Analysis of recent changes
  - `onboarding-strategy/` - Internal onboarding materials

- **`docs/reference/`** - Technical references
  - `qa-branch-analysis.md` - Detailed change analysis
  - `changelog.md` - Version history

## 🎨 Customization

### Colors
Modify Kando branding colors in `docusaurus.config.js`:
```javascript
--kando-primary: #2e5090
--kando-accent: #ff6b35
--kando-success: #06d6a0
```

### Logo & Branding
- Place logo image in `static/img/kando-logo.png`
- Update `docusaurus.config.js` navbar config

### Navigation (Sidebars)
Edit `sidebars.js` to add/remove/reorganize documentation sections

## 🌐 Deployment to Vercel

### Setup (One-time)
1. Push your code to a GitHub repository
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Select "Docusaurus" as the framework
6. Set:
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm ci`
7. Click "Deploy"

### Auto-Deployment
Once connected, Vercel will:
- Auto-build on every push to `main` branch
- Deploy to production automatically
- Show build status on GitHub

### Custom Domain
1. In Vercel project settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

## 🔍 Search

Docusaurus comes with built-in search. To enable Algolia search:
1. Sign up at [Algolia](https://www.algolia.com)
2. Update `docusaurus.config.js` with your Algolia credentials
3. Rebuild and deploy

## 📊 Analytics

To add Google Analytics:
1. Get your Google Analytics ID
2. Update `docusaurus.config.js`:
   ```javascript
   trackingID: 'UA-XXXXXXX-X'
   ```
3. Rebuild and deploy

## 🛠️ Adding New Pages

1. Create a `.md` file in the appropriate `docs/` subdirectory
2. Add metadata at the top (frontmatter):
   ```markdown
   ---
   title: My New Page
   description: What this page is about
   slug: /my-new-page
   ---
   ```
3. Update `sidebars.js` to include the new page
4. Commit and push to trigger auto-deploy

## 📚 Writing Content

### Frontmatter (Required)
```markdown
---
title: Page Title
description: Brief description for SEO
slug: /optional-slug
---
```

### Markdown Features
- Tables, lists, code blocks
- Alerts (:::info, :::warning, :::danger, :::success)
- Admonitions for callouts
- Code syntax highlighting (supports 50+ languages)
- Tabs for multi-language documentation

### Example Alert
```markdown
:::info
This is an informational callout
:::

:::warning
This is a warning callout
:::
```

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
npm run clear
npm run build
```

### Dependencies Issues
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Port Already in Use
```bash
# Use a different port
npm start -- --port 3001
```

## 📖 Resources

- [Docusaurus Docs](https://docusaurus.io)
- [Markdown Guide](https://docusaurus.io/docs/markdown-features)
- [Deployment Docs](https://docusaurus.io/docs/deployment)
- [Vercel Docs](https://vercel.com/docs)

## 📝 License

Documentation content is © Kando HCMS. Docusaurus framework is open source (MIT License).

## ✉️ Questions?

For documentation issues, open an issue on GitHub: https://github.com/kando-hcms/kando-user-manual/issues
