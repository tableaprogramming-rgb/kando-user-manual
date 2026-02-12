# Contributing to Kando User Manual

Thank you for helping improve the Kando User Manual! This document provides guidelines for contributing to the documentation.

## Before You Start

- Read the [README.md](README.md) to understand the project structure
- Check existing pages to understand the writing style and format
- Review the [Style Guide](#style-guide) section below

## How to Contribute

### 1. Fork or Branch

```bash
# Clone the repository
git clone https://dev.azure.com/kando-hcms/Kando%20Web%20Application/_git/kando-user-manual
cd kando-user-manual

# Create a feature branch
git checkout -b docs/your-change-description
```

### 2. Make Your Changes

- Edit markdown files in the `docs/` directory
- Follow the [Style Guide](#style-guide)
- Use [File Naming Conventions](#file-naming)

### 3. Test Locally

```bash
# Install dependencies
pip install -r requirements.txt

# Build and preview locally
mkdocs serve

# Visit http://localhost:8000 in your browser
```

### 4. Commit Your Changes

```bash
git add .
git commit -m "docs: description of your changes"
```

Follow [Commit Message Guidelines](#commit-messages).

### 5. Push and Create PR

```bash
git push origin docs/your-change-description
```

Create a Pull Request in Azure DevOps with a clear description of your changes.

## Style Guide

### Writing Standards

**Use Clear, Simple Language**:
- Write for business users, not technical audiences
- Avoid jargon; if you must use it, define it
- Use short sentences and paragraphs
- Active voice preferred

**Good Example**:
```
Click the "Submit" button in the top-right corner to submit your timesheet.
```

**Poor Example**:
```
The submission of timesheets is facilitated through the engagement of the UI element denominated as "Submit".
```

### Structure

Every page should follow this structure:

```markdown
# Page Title

Brief introduction (1-2 sentences) explaining what this page covers.

## Table of Contents (Auto-generated, don't add manually)

## What You'll Learn

- Bullet point 1
- Bullet point 2

## Step-by-Step Instructions

### Task 1: Something Specific

1. **Step 1**: Do this
2. **Step 2**: Then do this
3. **Step 3**: Finally do this

**Result**: What should happen after these steps

### Task 2: Another Task

[Follow same pattern]

## Tips & Tricks

- **Tip 1**: Helpful hint
- **Tip 2**: Another helpful tip

## Troubleshooting

**Problem**: What might go wrong
**Solution**: How to fix it

## Related Topics

- [Other relevant page](link)
- [Another related page](link)

---

**Last Updated**: YYYY-MM-DD
**Written By**: Your Name
**Reviewed By**: [If applicable]
```

### Formatting

**Bold** for UI elements and important terms:
```markdown
Click the **Submit** button
```

**Code blocks** for system values:
```markdown
Status: `Approved`
Error code: `ERR-001`
```

**Lists** for sequences and options:
```markdown
1. First step
2. Second step
3. Third step

OR

- Option 1
- Option 2
- Option 3
```

**Info boxes** for important information:
```markdown
!!! note
    This is important information

!!! warning
    This is a warning

!!! success
    This is a positive outcome
```

### Capitalization

- **Title Case** for headings
- **Sentence case** for bullets and paragraphs
- Capitalize UI element names: "Submit Button", "Employee Profile"

### Punctuation

- Use periods at the end of complete sentences
- Use colons to introduce lists or explanations
- No period at the end of bullet points (unless they're complete sentences)

## File Naming

Use this naming convention:

```
docs/[Section-Number]-[Section-Name]/[Section-Number].[Page-Number]-[Page-Name].md
```

**Examples**:
- `docs/1-Getting-Started/1.1-Introduction.md`
- `docs/2-Employee-Guide/2.1-Time-Tracking.md`
- `docs/3-Manager-Guide/3.2-Approving-Requests.md`

**Rules**:
- Use hyphens (not spaces) in filenames
- Use consistent numbering
- Keep names short but descriptive

## Commit Messages

Follow this format:

```
docs: Brief description of changes

- Specific change 1
- Specific change 2
- Specific change 3
```

**Examples**:
```
docs: Add time tracking guide for employees

- Create 2.1-Time-Tracking.md with step-by-step clock-in instructions
- Add troubleshooting section for common issues
- Include FAQ about timesheet submissions

docs: Update glossary with new terms

- Add definitions for "approval workflow"
- Clarify "shift swap" vs "shift exchange"
```

## Content Guidelines

### What to Include

✅ **DO Include**:
- Step-by-step instructions with numbered steps
- Clear descriptions of expected outcomes
- Common issues and solutions
- Tips and tricks from experienced users
- Links to related topics
- Date last updated

### What to Avoid

❌ **DON'T Include**:
- Technical implementation details (use wiki for that)
- Unnecessary jargon or acronyms
- Personal opinions or recommendations not backed by policy
- Outdated information or deprecated features
- Broken links
- Vague references ("see above" - provide link instead)

### Screenshots & Images

**For screenshot descriptions**:
```markdown
*[Screenshot description: The Employee Dashboard showing the
"Clock In" button in the top-left corner, with current time
displayed as 09:00 AM]*
```

**File naming** for images:
```
assets/screenshots/2.1-[descriptive-name].png
assets/diagrams/3.2-[workflow-name].png
```

## Review Process

1. **Automated Checks**:
   - Markdown syntax validation
   - Link checking
   - Build verification

2. **Manual Review**:
   - Content accuracy
   - Writing quality
   - Consistency with style guide
   - Completeness

3. **Approval**:
   - Requires 1 approval from documentation team
   - Updates will be published within 24 hours

## Common Mistakes to Avoid

| Mistake | Why It's a Problem | Fix |
|---------|-------------------|-----|
| Using "you will" | Condescending tone | Use "Click to...", "You can..." |
| Too many nested steps | Hard to follow | Max 5-6 steps per task |
| No section headers | Confusing structure | Add clear headers |
| Broken links | Bad user experience | Test all links |
| Inconsistent formatting | Looks unprofessional | Follow style guide |
| Missing last updated date | Users doubt freshness | Always add date |

## Questions?

- Review the [README.md](README.md) for project overview
- Check existing pages for examples
- Ask the documentation team
- Submit an issue in Azure DevOps

## Code of Conduct

- Be respectful and professional
- Give constructive feedback
- Welcome diverse perspectives
- Focus on improving the documentation

---

**Thank you for contributing!** Your improvements help thousands of Kando users. 🙏
