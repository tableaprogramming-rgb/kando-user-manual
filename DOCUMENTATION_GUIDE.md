# Kando User Manual & Onboarding Strategy — Documentation Guide

**Purpose**: Comprehensive reference guide for maintaining consistency when updating the Kando User Manual and Onboarding Strategy documentation.

**Last Updated**: 2026-08-25
**Version**: 1.0
**Maintained By**: Training & Documentation Team

---

## 📑 Table of Contents

1. [Quick Reference](#quick-reference)
2. [Documentation Standards](#documentation-standards)
3. [Page Templates & Structures](#page-templates--structures)
4. [Writing Patterns by Page Type](#writing-patterns-by-page-type)
5. [Formatting & Style Guide](#formatting--style-guide)
6. [Content Organization](#content-organization)
7. [Update Procedures](#update-procedures)
8. [Handling Source Code Changes](#handling-source-code-changes)
9. [Quality Checklist](#quality-checklist)
10. [Common Pitfalls & Solutions](#common-pitfalls--solutions)

---

## Quick Reference

### One-Line Rules

| Rule | Why |
|------|-----|
| **Action-first**: Start with what to do, not what something is | Users need instructions, not definitions |
| **Confirmation feedback**: Always show what users see after acting | Builds trust and prevents confusion |
| **Non-technical translation**: No jargon; frame features as user-visible effects | Audience is business users, not developers |
| **Update CHANGELOG.md on every push** | Maintains audit trail of all changes |
| **Keep manual/ and onboarding-strategy/ strictly separate** | Different audiences (customers vs. internal dev) |
| **Reuse the recurring named cast** (Maria Santos, John Reyes, Ana Cruz) | Consistency and familiarity across docs |
| **Update paired role pages** when workflows change (employee ↔ manager) | Keeps both perspectives in sync |

### File Naming Quick Lookup

```
Sections:    [Number]-[Section Name]
             Examples: 1-Getting-Started, 3-Manager-Guide, 5-HR-Admin-Guide

Pages:       [Number].[Level]-[Descriptive Title].md
             Examples: 2.1-Time-Tracking.md, 3.2-Approving-Requests.md

Note: File prefixes may not match folder numbers due to past reorganizations.
      Always match the existing prefix pattern in the folder, not the folder number.
```

### Production-Ready Checklist (Quick Version)

- [ ] Task has **Goal** + **Steps** + expected confirmation
- [ ] 3-5 edge cases covered in "Common Scenarios" or scenario section
- [ ] `✅ DO` / `❌ DON'T` best practices included
- [ ] Troubleshooting and/or FAQ section present
- [ ] Cross-references to related pages
- [ ] Metadata footer: Last Updated + For Questions
- [ ] Concrete examples with named cast + real dates/times
- [ ] Web-only assumptions marked (if mobile equivalent exists)

---

## Documentation Standards

### Target Audience & Tone

**Primary Audiences:**

| Folder | Audience | Language | Publishing |
|--------|----------|----------|-----------|
| **manual/** | Business users (Employees, Managers, Owners, HR Admins) | Non-technical, action-oriented | ✅ Azure DevOps Wiki (auto-publish) |
| **onboarding-strategy/** | Development team, architects, system designers | Technical, strategic, design-focused | ❌ Internal only (not customer-facing) |

**Voice & Tone:**

- **Instructional**: Focus on "how to do X," not "what is X"
- **Second person**: "Click the button," "You'll see..." — reader is always "you"
- **Action-oriented**: Numbered steps, clear goals, expected outcomes
- **Encouraging**: Errors are safety mechanisms; restrictions protect the user
- **Confirmation-driven**: Always tell users what they'll see after acting
- **Non-technical**: No API references, database mechanics, or IT jargon
  - ❌ "Boolean flag locks the record"
  - ✅ "The timesheet becomes read-only and you can't modify it"

### Writing Principles

#### 1. **Action-First Principle**
- Lead with the outcome, then the clicks
- ❌ "A timesheet summarizes your work hours. To create one, go to..."
- ✅ "Create your timesheet to summarize weekly work. Steps: 1. Go to **Time** → **Timesheets**..."

#### 2. **Confirmation Feedback**
- Always state what users will see after they act
- Example: "Click **Submit**. You'll see 'Timesheet submitted successfully' and the status changes to Pending."
- This builds trust and prevents users from repeating the same action

#### 3. **Non-Technical Translation**
- Every system mechanic → user-visible effect + why it protects the user
- ❌ "The finalization gate prevents concurrent modifications via the PostgreSQL row lock"
- ✅ "Once a timesheet is finalized, it becomes read-only. This protects your payroll data from accidental changes."

#### 4. **Scenario-Based Edge Cases**
- Use **Situation → Solution** format for common problems
- Include the context (why this happens), the recovery path, and what to do next
- Real examples with named cast (Maria, John, Ana, etc.) make it concrete

#### 5. **Role-Appropriate Framing**
- **Employee pages**: Self-service, "what you can do," "what to do if something goes wrong"
- **Manager pages**: Decision-making, ethics, compliance, "what your team sees," "what's your responsibility"
- **Owner/HR pages**: Configuration, policy, permissions, "how to set this up"

---

## Page Templates & Structures

### Standard Page Structure (All Roles)

```markdown
# [Page Title]

*[One-line description: what this page covers and why it matters]*

## Overview
[Explain what this feature is and why users care. 2-3 sentences.]

## [Main Content Section 1]
[Numbered steps, task blocks, or structured content]

## [Main Content Section 2]
[Additional tasks or concepts]

## Tips & Best Practices
✅ **DO**: [Best practice 1]
✅ **DO**: [Best practice 2]
❌ **DON'T**: [Mistake to avoid 1]
❌ **DON'T**: [Mistake to avoid 2]

## Troubleshooting
[Common problems with solutions]

## Related Pages
- [Link to related page 1](../path/to/page.md)
- [Link to related page 2](../path/to/page.md)

---
**Last Updated**: YYYY-MM-DD
**For Questions**: support@kando.com
```

### Employee Page Template (Task-Based)

```markdown
# [Feature Name] Guide

*[One-line summary of what this feature does and when you use it]*

## What is [Feature]?
[Explain the feature and why it matters. 2-3 sentences.]

## [Task 1: Main Action]

### Goal
[What you're trying to achieve]

### Steps
1. [First action with UI element in bold]
2. [Second action]
3. [Third action]

**Result**: [What you'll see after completing these steps]

**Keyboard Shortcut**: `Ctrl+X` (if applicable)

## [Task 2: Secondary Action]
[Same structure as Task 1]

## Common Scenarios

### Scenario 1: [Common Problem Description]

**Situation**: [Context - what happened]

**Solution**:
1. [Recovery step 1]
2. [Recovery step 2]
3. [Recovery step 3]

**Next**: [What to do or who to contact]

### Scenario 2: [Another Common Problem]
[Same format]

## Tips & Best Practices
✅ **DO**: [Best practice]
❌ **DON'T**: [Mistake to avoid]

## FAQ
**Q: [Common question]**
A: [Clear, concise answer]

## Related Pages
[Cross-references]

---
**Last Updated**: YYYY-MM-DD
**For Questions**: support@kando.com
```

### Manager Page Template (Role-Based)

```markdown
# [Feature/Area] — Manager Guide

*[One-line summary of manager responsibilities and scope]*

## Overview
[What this feature/area covers and why it matters for management]

## Your Manager Responsibilities

### Daily Responsibilities
- [Daily task 1 with context]
- [Daily task 2 with context]

### Weekly Responsibilities
- [Weekly task 1 with context]
- [Weekly task 2 with context]

### Monthly Responsibilities
- [Monthly task 1 with context]
- [Monthly task 2 with context]

## Getting Started

### Step 1: [First onboarding step]
[Instructions]

### Step 2: [Second onboarding step]
[Instructions]

### Step 3: [Third onboarding step]
[Instructions]

## Common Tasks

### Task 1: [Common manager action]
**When**: [When you'd do this]
**Steps**:
1. [Action 1]
2. [Action 2]
3. [Action 3]

**Important**: [Compliance, ethics, or decision framework note]

**Impact**: 
- [Effect on team member]
- [Effect on system]

### Task 2: [Another common action]
[Same structure]

## Managing Common Scenarios

### Scenario 1: [Common situation requiring manager judgment]
**Situation**: [Description of what happened]

**Investigation**:
1. [Check step 1]
2. [Check step 2]

**Decision Framework**:
- ✅ Approve if: [Conditions]
- ❌ Reject if: [Conditions]

**Action**:
1. [Manager action 1]
2. [Manager action 2]

**Follow-up**: [After action consequences]

### Scenario 2: [Another common situation]
[Same structure]

## Tips & Best Practices
✅ **DO**: [Best practice]
❌ **DON'T**: [Mistake to avoid]

## Related Pages
[Cross-references to employee and other manager pages]

---
**Last Updated**: YYYY-MM-DD
**For Questions**: support@kando.com
**Maintainer**: [Role/Team, e.g., "People Operations"]
```

---

## Writing Patterns by Page Type

### Employee Pages (Task-Based)

**Characteristics:**
- Focus on self-service, "how to do X"
- Structured around tasks and edge cases
- Personal, first-person ("You can...", "Click...")
- No compliance framing (manager handles that)

**Essential Sections:**
1. **Micro-task blocks** with Goal + Steps + Confirmation
   ```
   ### Clocking In
   
   **Goal**: Start tracking your work time for the day
   
   **Steps**:
   1. Open Kando dashboard
   2. Click the **Clock In** button (large button at top)
   3. You'll see confirmation: "You clocked in at 09:00 AM"
   
   **Keyboard Shortcut**: `Ctrl+I`
   ```

2. **Common Scenarios** with Situation → Solution
   ```
   ### Scenario: Forgot to Clock In
   
   **Situation**: You worked all day but forgot to clock in.
   
   **Solution**:
   1. Go to **Time** → **Time Entries**
   2. Click **Add Manual Entry**
   3. [Steps...]
   
   **Next**: Notify your manager
   ```

3. **FAQ** in Q/A format (short answers)

**DO's:**
- ✅ Use numbered steps
- ✅ Show what users see after acting
- ✅ Anticipate edge cases
- ✅ Use the recurring named cast (Maria, John, Ana)
- ✅ Include keyboard shortcuts where applicable

**DON'Ts:**
- ❌ Explain system mechanics (manager handles compliance)
- ❌ Use abstract prose — stick to numbered steps
- ❌ Assume web-only (note mobile equivalents)
- ❌ Mention restricted features without recovery path

### Manager Pages (Role-Based)

**Characteristics:**
- Focus on decision-making, "what's your responsibility"
- Structured around cadence (Daily/Weekly/Monthly) and judgment
- Business/ethical framing (compliance, ethics, impact on team)
- Assumes manager has decision authority

**Essential Sections:**
1. **Responsibilities by cadence**
   ```
   ### Daily Responsibilities
   - Monitor attendance (who's present, absent, on leave)
   - Review team requests (approvals/rejections within 24-48 hours)
   - Communicate with team
   ```

2. **Getting Started** with numbered onboarding
   ```
   ### Step 1: Access Team Management
   [Instructions to get to the feature]
   
   ### Step 2: View Your Team Roster
   [What you'll see]
   
   ### Step 3: Access Team Member Details
   [How to dive deeper]
   ```

3. **Common Tasks** with decision logic
   ```
   ### Approve a Leave Request
   **When**: Team member submits leave request
   
   **Decision Framework**:
   - ✅ Approve if: [Conditions]
   - ❌ Reject if: [Conditions]
   
   **Steps**:
   1. [Action 1]
   2. [Action 2]
   
   **Impact**:
   - Team member gets approval/rejection
   - Payroll sees approved leave time
   ```

4. **Named scenarios** with investigation → decision → follow-up
   ```
   ### Scenario: Team Member Absent Without Notice
   
   **Investigation**:
   1. Check recent timesheets
   2. Review leave balance
   3. Contact team member
   
   **Decision Framework**:
   - If approved leave: Mark in system
   - If no leave: Apply unauthorized absence policy
   
   **Action**:
   1. Update status in system
   2. Document in notes
   3. Follow up in next 1-on-1
   ```

**DO's:**
- ✅ Frame decisions with ethics/compliance context
- ✅ Use realistic scenarios with named cast
- ✅ Show business impact (team, payroll, compliance)
- ✅ Provide decision frameworks (✅ Approve if... ❌ Reject if...)
- ✅ Include SLAs ("Complete approvals within 24-48 hours")

**DON'Ts:**
- ❌ Assume manager will figure out edge cases without guidance
- ❌ Leave compliance/ethics ambiguous
- ❌ Use abstract language — be specific with scenarios
- ❌ Forget to update when employee workflow changes

---

## Formatting & Style Guide

### Text Formatting

| Element | Usage | Example |
|---------|-------|---------|
| **Bold** | UI elements, menu paths, button names | `**Time** → **Timesheets**`, `**Clock In** button` |
| *Italic* | One-line page descriptions | *Learn how to track your work time* |
| `Backticks` | Keyboard shortcuts, error messages, literal values | `Ctrl+I`, `"Schedule date already has posted timesheet"` |
| [Links](path) | Cross-references to other pages | `[Time Tracking Guide](../2-Employee-Guide/2.1-Time-Tracking.md)` |

### Emoji Usage (Semantic)

**Status Indicators:**
- 🟢 Present / On time / Success
- 🟡 Late / Warning / In progress
- 🔴 Absent / Error / Blocked
- ⚪ On leave / Neutral status

**Advice & Decision Markers:**
- ✅ **DO** / Best practice / Approved
- ❌ **DON'T** / Mistake to avoid / Blocked
- ⚠️ Warning / Important note
- 💡 Tip / Helpful hint

**Topic Navigation:**
- 📅 Calendar/dates/scheduling
- 📊 Reports/analytics/metrics
- 💰 Pay/compensation/billing
- 🔧 Setup/configuration
- ❓ FAQ/help

**DO NOT use emoji for decoration.** Every emoji carries semantic meaning.

### Diagrams & Examples

**ASCII Diagrams** (render as code blocks, preserve in wiki):
```markdown
```
┌─ Your Team (12 members)
├─ Maria Santos [On Time] | Supervisor
├─ John Reyes [On Shift] | Admin
├─ Ana Cruz [On Leave] | Coordinator (back Feb 20)
└─ ... 8 more team members
```
```

**Timeline Diagrams**:
```markdown
```
Mon        Tue        Wed        Thu        Fri
[8h]  -->  [8h]  -->  [8h]  -->  [8h]  -->  [4h]
                                              ↓
                                          OVERTIME
```
```

**Tables for Matrices**:
```markdown
| Feature | Employee | Manager | HR Admin |
|---------|----------|---------|----------|
| View own timesheet | ✅ | ✅ | ✅ |
| Edit own timesheet | ✅ | ❌ | ✅ |
| View team timesheet | ❌ | ✅ | ✅ |
| Approve timesheet | ❌ | ✅ | ✅ |
```

**Concrete Examples:**
- ✅ Use realistic names (Maria Santos, John Reyes, Ana Cruz, Diego, Jessica)
- ✅ Use concrete times/dates (09:00 AM, Feb 15, 2026)
- ✅ Reuse the same cast across pages for continuity
- ❌ Don't use placeholders ("UserName", "2026-XX-XX")

---

## Content Organization

### Repository Folder Structure

```
manual/                              # Customer-facing (published to Azure DevOps Wiki)
├── 1-Getting-Started/               # Login, dashboard, onboarding
├── 2-Employee-Guide/                # Time tracking, leave, schedule, payslips
├── 3-Manager-Guide/                 # Team management, approvals, scheduling, reports
├── 4-Owner-Guide/                   # Organization, billing, subscriptions
├── 5-HR-Admin-Guide/                # System setup, user management, policies, payroll
├── 6-Workflows/                     # Common business processes (workflows)
├── 7-Troubleshooting/               # Error solutions, problem-solving
└── 8-Reference/                     # Glossary, FAQ, keyboard shortcuts, help

onboarding-strategy/                 # Internal development documentation (NOT customer-facing)
├── guides/                          # Implementation guides for features
├── strategy/                        # Strategic design & blueprints
└── walkthroughs/                    # User scenarios & flows for developers
```

### Folder Purpose

| Folder | Purpose | Audience | Published |
|--------|---------|----------|-----------|
| `manual/` | User-facing business documentation | Business users (Employees, Managers, Owners, HR) | ✅ Azure DevOps Wiki |
| `onboarding-strategy/` | Internal dev planning & architecture | Development team & architects | ❌ Internal only |

**Critical Rule**: Never mix folders. Customer-facing content goes in `manual/`. Internal planning goes in `onboarding-strategy/`.

### Naming Conventions

**File Prefixes Don't Always Match Folder Numbers** (Due to past reorganizations)

❌ Don't assume: Folder = `8-Reference/` → File prefix = `8.X`
✅ Do this: Match the existing prefix pattern in the folder

Example:
- Folder: `8-Reference/`
- Existing files: `7.1-Glossary.md`, `7.2-Keyboard-Shortcuts.md`, `7.3-FAQ.md`, `7.4-Getting-Help.md`
- Next file should be: `7.5-New-Page.md` (not `8.1`)

**To find the correct prefix**:
1. `cd` into the target folder
2. `ls -la` to see existing files
3. Look at the highest prefix number (e.g., `7.4`)
4. Increment for your new file (e.g., `7.5`)

---

## Update Procedures

### When to Update vs. Rewrite

**Update in place** when:
- A button label or menu path changed → Change the text, bump Last Updated
- A new field was added → Add to step instructions
- A validation message wording changed → Update error text in Troubleshooting
- A new edge case emerged → Add to Common Scenarios
- A workflow step order changed → Reorder steps, update screenshots if needed

**Rewrite/restructure** only when:
- The underlying workflow fundamentally changed (e.g., clock-in moved from web to mobile-first)
- The page has grown incoherent and needs reorganization
- A major feature was replaced or removed

**Even in a rewrite**, preserve the template structure.

### Updating a Page: Step-by-Step

1. **Edit the page** with new information
2. **Update "Last Updated" date** at the bottom (YYYY-MM-DD format)
3. **Verify all cross-references** are still correct
4. **Test links** in Azure DevOps Wiki after pushing
5. **Update CHANGELOG.md** (root level) with change summary
6. **Stage and commit**:
   ```bash
   git add manual/[section]/[filename].md CHANGELOG.md
   git commit -m "docs: Update [page title] with [specific change]"
   git push origin main
   ```

### Adding a New Page

1. **Determine the section** (Employee, Manager, HR Admin, Troubleshooting, etc.)
2. **Find the correct prefix** by listing existing files in that folder
3. **Create file**: `manual/[Section]/[prefix]-[Title].md`
4. **Use the appropriate template** (Employee, Manager, Role-Based)
5. **Add to Related Pages** of sibling pages
6. **Update README.md** if it's a top-level concept
7. **Update CHANGELOG.md** with new page description
8. **Commit**:
   ```bash
   git add manual/[section]/[new-file].md CHANGELOG.md README.md
   git commit -m "feat: Add [page title] to [section name]"
   git push origin main
   ```

### Creating New Section

1. **Create directory**: `manual/[Number]-[Section Name]/`
2. **Create `index.md`**: Navigation page for the section
3. **Create skeleton files**: One `.md` file per subsection
4. **Update README.md**: Add section link and description
5. **Update CHANGELOG.md**: Document new section
6. **Commit**:
   ```bash
   git add manual/[new-section]/ README.md CHANGELOG.md
   git commit -m "feat: Add [section name] documentation section"
   git push origin main
   ```

### CHANGELOG.md Updates (Critical!)

Every push must update `CHANGELOG.md`. Format:

```markdown
## [Version] — [Date] (YYYY-MM-DD)

### Features
- [New page or major feature]
- [Another new feature]

### Docs
- [Updated page with change summary]
- [Another update]

### Technical Improvements
- [Refactoring, reorganization, etc.]

### Housekeeping
- [Cleanup, link fixes, etc.]

**Commits**: [git commit hashes or PR numbers]
```

---

## Handling Source Code Changes

### Key Things to Watch For

**UI Label / Menu Path Changes** (Critical Priority)
- **Risk**: Manual hard-codes menu paths like `**Time** → **Timesheets**` and button names
- **Action**: When a component is renamed, grep the manual for the old label
- **Example**:
  - Code change: Button renamed "Submit Timesheet" → "Submit for Approval"
  - Manual update: Find all occurrences, change to new label, update confirmation text

**New Validation Messages / Error Strings** (Critical Priority)
- **Risk**: Manual documents literal errors verbatim in Troubleshooting sections
- **Action**: When new guard clauses or validation logic is added, document the error message
- **Example**:
  - New error: "Schedule date already has posted timesheet"
  - Manual update: Add to Error Reference or Troubleshooting with cause + solution

**New Blocked Actions** (High Priority)
- **Risk**: Finalization "Blocked Actions" table must stay current
- **Action**: When a new action is gated behind posted/locked periods, add a row
- **Example**:
  - New restriction: Can't edit approved leave during finalization
  - Manual update: Add to "What you can't do during finalization" section

**Keyboard Shortcut Changes** (Medium Priority)
- **Risk**: Documented shortcuts become invalid or new ones are added
- **Action**: Verify shortcuts still exist when reviewing
- **Example**:
  - Changed: `Ctrl+I` removed; `Cmd+Click` added on Mac
  - Manual update: Update or remove keyboard shortcut sections

**Permission / Role Scope Changes** (High Priority)
- **Risk**: Manager pages assume "direct reports only"; any change breaks accuracy
- **Action**: When who-sees-whom changes, update scope sections
- **Example**:
  - Change: Managers can now see all employees in the org (not just direct reports)
  - Manual update: Change "your team" to "any employee" in Team Management guide

### Translation Rules: Technical → User Language

**Rule 1: State the user-visible effect, never the mechanism**
- ❌ "A boolean flag locks the record"
- ✅ "The timesheet becomes read-only and you can't modify it"

**Rule 2: Wrap every restriction in WHY it protects the user**
- ❌ "You can't clock in after finalization"
- ✅ "You can't clock in for dates with a finalized timesheet. This protects your payroll accuracy from accidental changes."

**Rule 3: Give the recovery path**
- ❌ "You can't edit this"
- ✅ "You can't edit this. To make changes, contact your manager or request HR reversal."

**Rule 4: Use concrete scenarios**
- ❌ "The system validates something"
- ✅ "Maria tried to edit Friday's timesheet but saw an error: 'This week's timesheet is finalized.' She asked her manager, who submitted a reversal request to HR."

### Documenting Security Fixes (Important!)

**General Rule**: Describe *what the system now does* and *how to work within it*, never the vulnerability.

**For IDOR / Access Scope Tightening:**
- Don't mention "vulnerability was fixed"
- Document only correct current behavior
- Frame as expected role boundaries
- Example: "You can view records for your direct reports only" (not "IDOR was tightened")
- If a previously-allowed action now returns "access denied," add to Troubleshooting:
  - *Problem*: "Access denied when opening a record"
  - *Cause*: "You can only access records within your team/role"
  - *Solution*: "Ask HR or the record owner"

**For Auth Changes (Session Timeout, MFA, Password Reset):**
- These ARE user-visible and belong in `1-Getting-Started/1.2-Login-Setup.md`
- Document the new prompt, why it appears ("for your account's security"), and what to do
- Example: "Every 30 minutes of inactivity, you'll be logged out for security. Click **Log In** to resume."

**For General Auth Improvements:**
- Update "Getting Help" section if new troubleshooting is needed
- Add to `7-Troubleshooting/Login-Issues.md` if users encounter new flows

**Keep exploit/root-cause details OUT of customer docs** — save for `onboarding-strategy/` or internal security docs only.

### Mobile App Updates

**Watch for mobile-specific changes:**
- New offline clock-in (different from web)
- Push notifications for approvals
- Biometric login (fingerprint, Face ID)
- Mobile-only screens or navigation
- Different error messages on mobile

**Documentation approach** (in order of preference):

**Option 1: Side-by-side web + mobile** (for similar flows)
```markdown
### Clock In

**On Web:**
1. Open Kando dashboard
2. Click the **Clock In** button
3. You'll see "You clocked in at 09:00 AM"

**On Mobile:**
1. Open the Kando app
2. Tap the **Clock In** card on home screen
3. You'll see "You clocked in at 09:00 AM"

**Keyboard Shortcut** (Web only): `Ctrl+I`
```

**Option 2: Dedicated "On Mobile" subsection** (for complex flows)
```markdown
### Submitting Your Timesheet

[Web steps here]

#### On Mobile
1. Tap **My Timesheets**
2. Swipe left to find the week
3. Tap **Submit**
4. [Different confirmation]
```

**Option 3: Separate mobile-specific page** (for divergent workflows)
- Create `[prefix]-[Title]-Mobile.md` in the same folder
- Link from the web version: "📱 [View mobile version](./X.X-Title-Mobile.md)"

**Audit for web-only assumptions:**
- ❌ "Click the left sidebar" → ✅ "Tap the menu icon (☰)"
- ❌ "Press Ctrl+S to save" → ✅ "Changes save automatically" (or platform-specific)
- ❌ "Refresh the page" → ✅ "Pull down to refresh" (mobile terminology)
- ❌ "Use your browser's timezone" → ✅ "Uses your phone's timezone"

**Add mobile-specific troubleshooting:**
- App installation / first login
- App updates and crashes
- Offline sync behavior
- Push notification permissions
- Biometric login issues
- Network connectivity issues

**Keep the same template, tone, named cast, and DO/DON'T** across mobile content so it reads as one voice with the rest of the manual.

---

## Quality Checklist

### Pre-Commit Checklist

Before you commit and push, verify:

**Content Quality:**
- [ ] Every task has a clear **Goal** (what you're trying to achieve)
- [ ] Steps are numbered and actionable
- [ ] Confirmation feedback shown ("You'll see...")
- [ ] 3-5 edge cases covered in Common Scenarios
- [ ] `✅ DO` / `❌ DON'T` section present
- [ ] Troubleshooting or FAQ included
- [ ] Concrete examples use the recurring named cast
- [ ] Examples use specific dates/times (not placeholders)

**Writing Quality:**
- [ ] No IT jargon (API, database, boolean, flag, endpoint, etc.)
- [ ] Audience-appropriate (business users, not developers)
- [ ] Second person voice ("You can...", "Click...")
- [ ] Action-oriented (how to do, not what is)
- [ ] Non-web assumptions marked (e.g., "web only", "mobile: tap...")

**Organization:**
- [ ] Page follows the correct template structure
- [ ] Headings are descriptive and scan-friendly
- [ ] Code blocks/diagrams render correctly
- [ ] Tables are properly formatted
- [ ] Links are relative paths and correct

**Metadata & Cross-References:**
- [ ] "Last Updated" date is current (YYYY-MM-DD)
- [ ] "For Questions: support@kando.com" is present
- [ ] Related Pages section links to 2-4 relevant pages
- [ ] All links are tested and correct
- [ ] Paired role pages updated (if workflow changed)

**Repository Maintenance:**
- [ ] CHANGELOG.md updated with change summary
- [ ] File naming follows convention (prefix matches folder pattern)
- [ ] No files left in wrong folder (manual/ vs. onboarding-strategy/)
- [ ] README.md updated if adding a new top-level page

### Post-Push Verification

After pushing, verify in Azure DevOps Wiki:

- [ ] Page renders correctly in wiki
- [ ] All links work (click 2-3 cross-references)
- [ ] Code blocks and ASCII diagrams display properly
- [ ] Emoji render correctly (no weird symbols)
- [ ] Latest commit appears in repo (may take 1-2 min)

---

## Common Pitfalls & Solutions

### ⚠️ Pitfall 1: Web-Only Assumptions

**Problem**: Document assumes web browser (keyboard shortcuts, "left sidebar," "refresh page")

**Solution**:
- ✅ Add platform callouts: "On mobile, tap the **⋮** menu instead"
- ✅ Use platform-neutral language: "Open the Timesheets section" (not "Click left sidebar")
- ✅ Test instructions on both web and mobile mentally
- ✅ When mobile flow differs significantly, create separate section

**Example Fix**:
```markdown
# Time Tracking Guide

### Clock In
**Steps:**
1. Open the Kando app/website
2. Look for the **Clock In** button
   - On web: Large button at top of dashboard
   - On mobile: Card on home screen
3. Tap/click **Clock In**
4. You'll see confirmation: "You clocked in at 09:00 AM"

**Keyboard Shortcut** (Web only): `Ctrl+I`
```

### ⚠️ Pitfall 2: Jargon Sneaks In

**Problem**: Wrote "This endpoint returns a 403 Forbidden" or "The microservice validates authorization"

**Solution**:
- ✅ Grep for: `endpoint`, `API`, `database`, `boolean`, `flag`, `parameter`, `query`, `field value`
- ✅ Replace with: "The system won't let you...", "You'll see an error...", "You can..."
- ✅ Test: Would a non-technical HR person understand every sentence?

**Example Fix**:
- ❌ "API rate limiting prevents concurrent updates"
- ✅ "If you and your manager edit the timesheet at the same time, the last change wins. Save often to avoid losing your work."

### ⚠️ Pitfall 3: Broken Cross-References

**Problem**: After reorganizing files, links still point to old paths

**Solution**:
- ✅ Use relative paths: `../2-Employee-Guide/2.1-Time-Tracking.md` (not absolute)
- ✅ After reorganizing, test all links: Click 3-5 random cross-references
- ✅ Before committing, run: `grep -r "../" manual/ | grep -v "\.git"` to check for hardcoded paths
- ✅ Update README.md links when moving pages

**Example**:
```markdown
❌ [Link](/kando-user-manual/manual/2-Employee-Guide/2.1-Time-Tracking.md)
✅ [Link](../2-Employee-Guide/2.1-Time-Tracking.md)
```

### ⚠️ Pitfall 4: Duplicate or Conflicting Information

**Problem**: Same information exists in two places; they diverge over time

**Solution**:
- ✅ Avoid repeating content across pages
- ✅ Use cross-references instead: "See [Time Tracking Guide](../2-Employee-Guide/2.1-Time-Tracking.md) for details"
- ✅ Each page has a specific purpose — don't duplicate
- ✅ If both Employee and Manager pages touch a workflow, keep Employee version as "what to do" and Manager version as "how to manage"

**Example**:
- ❌ Time Tracking page explains timesheet finalization; Manager guide explains it again differently
- ✅ Time Tracking explains what happens; Manager guide says "When timesheet finalizes, team members can't edit it"

### ⚠️ Pitfall 5: Forgot to Update CHANGELOG.md

**Problem**: Repository changes but CHANGELOG.md is not updated; audit trail is incomplete

**Solution**:
- ✅ **ALWAYS update CHANGELOG.md before pushing** (project memory rule)
- ✅ Use the format in CHANGELOG.md (Features, Docs, Technical Improvements, Housekeeping)
- ✅ Include commit hashes or PR numbers for traceability
- ✅ Add date (YYYY-MM-DD format)

**Example Entry**:
```markdown
## 1.2 — 2026-08-25

### Docs
- Updated Time Tracking guide with new overtime validation message
- Added mobile clock-in instructions to Employee Guide

**Commits**: a1b2c3d, e4f5g6h
```

### ⚠️ Pitfall 6: Security Details in Customer Docs

**Problem**: Wrote "We fixed IDOR vulnerability in cross-tenant data access"

**Solution**:
- ✅ Frame as current correct behavior: "You can only view data from your organization"
- ✅ Keep exploit/root-cause in `onboarding-strategy/` internal docs only
- ✅ User-facing docs describe what the system does, not what vulnerabilities were fixed
- ✅ Compliance/ethics are fine (e.g., "audit logs track all access"); exploits are not

**Example Fix**:
- ❌ "We fixed the IDOR vulnerability that let managers see other teams' data"
- ✅ "Managers can view their direct reports' records only, protecting privacy across teams"

### ⚠️ Pitfall 7: File Prefix Numbering

**Problem**: Added `8.1-New-Page.md` to folder `8-Reference/`, but existing files use prefix `7`

**Solution**:
- ✅ Always check existing files in the folder first
- ✅ Match the existing pattern, don't assume folder number = file prefix
- ✅ Run `ls -la manual/[section]/` before creating a new file
- ✅ If confused, look at the highest numbered file: `ls -la manual/8-Reference/ | grep "^-" | sort`

**Example**:
```bash
# Check before creating
ls -la manual/8-Reference/

# Output shows:
# 7.1-Glossary.md
# 7.2-Keyboard-Shortcuts.md
# 7.3-FAQ.md

# So next file should be:
touch manual/8-Reference/7.4-New-Page.md  # NOT 8.1-New-Page.md
```

### ⚠️ Pitfall 8: Mixing manual/ and onboarding-strategy/

**Problem**: Wrote a customer-facing guide in `onboarding-strategy/` or internal planning in `manual/`

**Solution**:
- ✅ Before committing, ask: "Is this for business users or developers?"
  - Business users? → `manual/`
  - Internal dev team? → `onboarding-strategy/`
- ✅ Audience check: Would a non-technical HR person read this?
- ✅ If unsure, put it in `onboarding-strategy/` (safer to be internal)
- ✅ Never publish internal planning to Azure DevOps Wiki

**Example**:
- ❌ Implementation guide for building new leave approval UI in `manual/`
- ✅ Implementation guide for building new leave approval UI in `onboarding-strategy/guides/`
- ✅ User guide for approving leave in `manual/3-Manager-Guide/`

---

## Additional Resources

### Related Files in Repository

- **CLAUDE.md** — Project instructions and guidelines
- **README.md** — Repository overview and role-based navigation
- **CHANGELOG.md** — Complete release history (update on every push)
- **Contributing Guidelines** (in project) — Development and submission standards

### Git Workflow (Quick Reference)

```bash
# Check status before editing
git status

# View recent changes
git log --oneline -10

# After editing, stage files
git add manual/[section]/[filename].md CHANGELOG.md

# Preview changes
git diff --staged

# Commit with clear message
git commit -m "docs: Update [page title] with [specific change]"

# Push to remote
git push origin main

# Verify on Azure DevOps Wiki (wait 1-2 minutes for auto-publish)
```

### Quick Git Message Format

```
docs: Update [page title] with [specific change]
feat: Add [new page title] to [section name]
chore: Move [page] for better organization
fix: Correct [error/outdated info] in [page name]
```

---

## Change History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-08-25 | Initial comprehensive guide created from Opus analysis |

---

**Last Updated**: 2026-08-25
**Maintained By**: Training & Documentation Team
**For Questions**: documentation@kando.com
