# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**kando-user-manual** is a comprehensive business user documentation repository for the Kando HCMS (Human Capital Management System). It provides non-technical, role-based guidance for end-users: Employees, Managers, and HR Administrators.

- **Type**: Business User Manual / Help Documentation
- **Format**: Markdown-only, git-based documentation
- **Target Audience**: Non-technical business users (Employees, Managers, HR Staff)
- **Remote**: Azure DevOps Git - `https://dev.azure.com/kando-hcms/Kando%20Web%20Application/_git/kando-user-manual`
- **Maintained By**: Training & Documentation Team
- **Status**: Phase 1 Complete (Core guides ready) | Phase 2 Planned (Admin/Reference sections)

## Repository Structure

```
manual/                         # User-facing documentation
├── index.md                    # Welcome page with 3-step quickstart
├── 1-Getting-Started/          # Login, setup, dashboard (3 pages - COMPLETE)
├── 2-Employee-Guide/           # Time tracking, leave, schedule, payroll (4 pages - COMPLETE)
├── 3-Manager-Guide/            # Team management, approvals, scheduling, reports (4 pages - COMPLETE)
├── 4-Owner-Guide/              # Organization, billing, subscriptions (4 pages - COMPLETE)
├── 5-HR-Admin-Guide/           # System setup, user management, policies (4 skeleton files)
├── 6-Workflows/                # Process workflows (4 skeleton files)
├── 7-Troubleshooting/          # Problem solutions (4 skeleton files)
└── 8-Reference/                # Glossary, FAQ, help, shortcuts (4 skeleton files)

onboarding-strategy/            # Dev team planning & system improvement (NOT user docs)
├── guides/                     # Implementation guides for onboarding features
├── strategy/                   # Strategic design & blueprints for onboarding UX
└── walkthroughs/               # User scenarios & experience flows for developers

README.md                        # Repository entry point with role-based navigation
```

## Page Organization Standards

### Naming Convention
- **Sections**: `[Number]-[Section Name]` (e.g., `0-Onboarding`, `1-Getting-Started`)
- **Pages**: `[Number].[Level]-[Descriptive Title].md` (e.g., `1.1-Introduction.md`, `3.2-Approving-Requests.md`)
- **Index Files**: Each section has `index.md` for navigation

### Page Template Structure
All pages follow this consistent format:

```markdown
# [Page Title]

*[One-line description of what this page covers]*

## Overview / Main Content
[What this covers and why it matters]

## [Main Sections]
[Numbered steps, scenarios, or structured content]

## Tips & Common Issues
✅ **DO**: [Best practices]
❌ **DON'T**: [Mistakes to avoid]

## Related Pages
[Cross-references to related documentation]

---
**Last Updated**: 2026-02-12
**For Questions**: support@kando.com
```

### Content Characteristics

**Fully Detailed Pages** (11 pages, production-ready):
- Sections 0-3 (Onboarding, Getting Started, Employee Guide, Manager Guide)
- Complete step-by-step instructions with real-world scenarios
- Tips, troubleshooting, and best practices embedded

**Skeleton Template Pages** (12 pages):
- Sections 4-7 (HR Admin, Workflows, Troubleshooting, Reference)
- Pre-formatted with structure and placeholders
- Ready for content population

## Writing Guidelines

### Audience & Tone
- **Audience**: Non-technical business users (no IT jargon)
- **Voice**: Friendly, instructional, action-oriented
- **Tone**: Helpful and encouraging with clear next steps
- **Emojis**: Used in headers and bullet points for visual clarity

### Content Patterns by Page Type

**Task-Based Pages** (Employee Guide):
- What is [Feature]?
- Step-by-step numbered instructions
- Common scenarios with solutions
- Tips and troubleshooting
- Keyboard shortcuts (where applicable)
- FAQ section

**Role-Based Pages** (Manager Guide):
- Overview of key responsibilities
- Daily/Weekly/Monthly task breakdown
- Workflows and decision trees
- Best practices and compliance notes
- Related processes and cross-references

**Reference Pages** (Skeleton templates):
- Clear, organized reference content
- Quick lookup sections
- Support and help links

### Time Estimates
Include estimated completion times for common tasks to help users find relevant information:
- Simple tasks: 1-5 minutes
- Standard processes: 5-15 minutes
- Complex workflows: 15-30 minutes

## Common Development Tasks

### Adding a New Page

1. **Create file** in appropriate section directory with naming convention: `[Number].[Level]-[Title].md`
2. **Use template structure** from existing pages in the same section
3. **Add to section index** if not auto-discovered by Azure DevOps Wiki
4. **Cross-reference** from README.md if new main section
5. **Include metadata footer** with Last Updated date and support contact
6. **Commit with clear message**: `feat: Add [page title] to [section name]`

Example:
```bash
# Create new employee guide page
touch manual/2-Employee-Guide/2.5-New-Feature.md
# Edit with template structure and content
git add manual/2-Employee-Guide/2.5-New-Feature.md
git commit -m "feat: Add New Feature guide to Employee Guide section"
```

### Updating Existing Content

1. **Update page** with new information
2. **Update "Last Updated" date** at bottom of page
3. **Commit with focused message**: `docs: Update [page title] with [specific change]`

Example:
```bash
git add manual/2-Employee-Guide/2.1-Time-Tracking.md
git commit -m "docs: Update Time Tracking with new clock-in UI changes"
```

### Completing Skeleton Pages

1. **Open skeleton file** in section (e.g., `manual/5-HR-Admin-Guide/4.1-System-Setup.md`)
2. **Replace placeholders** with actual content
3. **Follow content patterns** from completed pages in same section
4. **Update Last Updated date**
5. **Commit**: `feat: Complete [page title] documentation`

### Creating New Section

1. **Create directory**: `manual/[Number]-[Section Name]/`
2. **Create index.md**: Navigation page for section
3. **Create skeleton files**: One for each subsection
4. **Update README.md**: Add section link and description
5. **Commit**: `feat: Add [section name] documentation section`

## Commonly Used Git Commands

```bash
# Check status before committing
git status

# View recent commits and structure
git log --oneline -10

# Preview changes before committing
git diff manual/

# Stage specific files
git add manual/[section]/[page].md

# Commit with clear message following pattern
git commit -m "feat: Add [feature]" or "docs: Update [page]"

# Push to Azure DevOps
git push origin main

# View unpushed commits
git status  # Shows "Your branch is ahead of 'origin/main' by X commits"
```

## Documentation Statistics

| Metric | Value |
|--------|-------|
| Total Markdown Pages | 29 |
| Total Content Lines | 5,588+ |
| Fully Detailed Sections | 3 (Sections 0-2) + 1 partial (Section 3) |
| Complete Pages | 11 |
| Template/Skeleton Pages | 12 |
| Documentation Sections | 9 |
| Production-Ready Pages | 11 (Onboarding, Getting Started, Employee, Manager) |

## Key Navigation Principles

- **Role-First**: Users select their role (Employee, Manager, HR Admin) before choosing tasks
- **Task-Based**: Each role has guides for their most common activities
- **Time-Aware**: Quick links show estimated completion time
- **Cross-Referenced**: Related pages linked throughout for discovery

## Folder Purposes

### `manual/` Folder
- **User-facing documentation** for Kando system end-users
- Step-by-step guides for Employees, Managers, Owners, and HR Admins
- Published to Azure DevOps Wiki for customer access
- Organized by role and task

### `onboarding-strategy/` Folder
- **Development team internal documentation**
- Strategic planning and blueprints for improving the onboarding experience
- Implementation guides for building/improving onboarding features
- User flow scenarios and experience walkthroughs from a developer perspective
- NOT customer-facing documentation
- Used to plan how to enhance the system's onboarding capabilities

## Important Notes

### Git Permissions
Only the following git operations are pre-approved:
- `git add` - Stage documentation changes
- `git commit -m "..."` - Commit with clear messages (no force push, no destructive operations)
- `git clone`, `rm`, `mkdir` - Repository setup operations

### Azure DevOps Wiki Compatibility
- Repository is optimized for Azure DevOps Wiki auto-publishing
- All files are markdown (.md) with no build artifacts
- Directory structure matches wiki navigation hierarchy
- No MkDocs or other static site generation (removed in housekeeping)

### Metadata Requirements
Every documentation page must include at the bottom:
```markdown
---
**Last Updated**: YYYY-MM-DD
**For Questions**: support@kando.com
```

### No Duplicate Information
- Avoid repeating content across pages
- Use cross-references instead of duplicating sections
- Each page has a specific purpose within the role/workflow hierarchy

## Historical Context

**Completed Phases**:
1. **Initial Setup** - Repository structure and README
2. **Phase 1** - Core user guides (Getting Started, Employee Guide, Manager Guide)
3. **Housekeeping** - Removed MkDocs, CI/CD config, dev guidelines (focus on markdown-only documentation)
4. **Owner Guide** - Added comprehensive Owner/Billing section (4 pages)
5. **Folder Reorganization** - Renamed `docs/` → `manual/`, `onboarding/` → `onboarding-strategy/`
6. **Section Renumbering** - Shifted HR Admin and subsequent sections to accommodate Owner Guide

**Pending Phases**:
- Phase 2: Complete HR Admin, Workflows, Troubleshooting, Reference sections
- Phase 3: User testing and refinement based on feedback

**Folder Naming Convention**:
- `manual/` - User-facing documentation for different roles (published to Azure DevOps Wiki)
- `onboarding-strategy/` - Internal dev team documentation for planning & improving the onboarding system

## Support and Contacts

- **Documentation Contact**: support@kando.com
- **Maintained By**: Training & Documentation Team
- **Repository**: Azure DevOps (kando-hcms organization)
