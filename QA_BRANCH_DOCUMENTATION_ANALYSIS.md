# Kando QA Branch — Documentation Impact Analysis

**Analysis Date**: 2026-08-25
**Source**: Comprehensive Opus analysis of kando-backend, kando-frontend, kando_mobile_frontend QA branches
**Version**: v2.20.0 / v2.21.0 release cycle
**Status**: Ready for documentation implementation

---

## 📋 Table of Contents

1. [Executive Summary](#executive-summary)
2. [Critical Changes (Must Update)](#critical-changes-must-update)
3. [High-Impact Changes (Should Update)](#high-impact-changes-should-update)
4. [Medium/Low Changes (Nice to Update)](#mediumlow-changes-nice-to-update)
5. [New Content Opportunities](#new-content-opportunities)
6. [Mobile-Specific Updates Matrix](#mobile-specific-updates-matrix)
7. [Security & Compliance Framing](#security--compliance-framing)
8. [Update Priority & Sequence](#update-priority--sequence)
9. [Verification Checklist](#verification-checklist)
10. [CHANGELOG.md Draft Entry](#changelogmd-draft-entry)
11. [Source Code References](#source-code-references)

---

## Executive Summary

### Change Overview

The QA branch delivers significant user-facing changes across three major areas:

| Category | Count | Severity | Effort |
|----------|-------|----------|--------|
| Critical changes | 2 | Must update | 13–18 hrs |
| High-impact changes | 3 | Should update | 6–9 hrs |
| Medium changes | ~5 | Nice to update | 3–4 hrs |
| Low changes | ~3 | Reference only | Minimal |

### Key Deliverables

1. **Forgot/Reset Password** — Brand-new self-service authentication flow (web-only, replaces placeholder in manual)
2. **Mobile Feature Parity** — Mobile app now has full Requests, Leaves, Approvals capabilities (previously web-only)
3. **Real-Time Timelog Sync** — Clock in/out on mobile instantly reflects on web and vice versa
4. **Cross-Org Access Tightening** — Compensation & Compliance records now properly scoped to organization
5. **Unlicensed Employee Tag** — Visible across employee lists; blocks period/payroll finalization
6. **UI Polish** — Sidebar auto-collapse, new dropdown component, misc improvements

### Documentation Effort Estimate

**Total: 24–32 hours**

- C1 Forgot/Reset Password: 3–4 hrs
- C2 Mobile features (Requests/Leaves/Approvals): 10–14 hrs
- H1 Timelog sync: 2–3 hrs
- H2 Cross-org access: 2–3 hrs
- H3 Unlicensed tag: 2–3 hrs
- M: UI & misc: 2–3 hrs
- Onboarding-strategy internal notes: 1–2 hrs

---

## Critical Changes (Must Update)

### C1: Forgot Password / Reset Password Flow

#### What Changed

**Login Page Updates:**
- Login view now displays a **"Forgot password?"** link
- Link points to new `/forgot-password` route

**New Forgot Password Page:**
- User enters: **Email Address**
- Button: **Reset Password**
- Success message: *"Kindly check your email. We have sent you a reset password link on your registered email address."*
- Email contains reset link with expiry (default: configured in backend)
- Rate-limited to prevent abuse
- Only works with verified email addresses

**New Reset Password Page (`/reset`):**
- User enters: **New Password** + **Confirm New Password**
- Button: **Reset Password**
- Success message: *"Your password has been successfully updated. You can now login with your new password."*

**Error States (exact copy):**
1. Invalid/expired link: *"We could not validate your password reset request. Kindly contact your administrator if this is an error."*
2. Expired link: *"Your password reset link has expired. You can request another link by clicking the button below."*
   - Button: **Request Another Reset**
3. Email not found: Field validation error (email must exist and be verified)

#### Where to Update

**`manual/1-Getting-Started/1.2-Login-Setup.md`** (CRITICAL)
- Current state: Has placeholder section (~lines 164–168) saying "Click Forgot Password to reset"
- Action: **REPLACE** placeholder with complete flow documentation
- Structure:
  1. "Forgot Your Password?" section header
  2. Step-by-step: request link → receive email → open link in email → set new password → login
  3. Include exact button labels and confirmation messages
  4. Note: link expires after X minutes (VERIFY timeout value from backend)
  5. Include: "Email must be verified and registered with Kando"
  6. Troubleshooting: common errors (see below)

**`manual/7-Troubleshooting/6.1-Login-Issues.md`** (ADD NEW SCENARIOS)
- Scenario 1: "I didn't receive the reset email"
  - Cause: Spam folder, unverified email, rate limit (too many requests)
  - Solution: Check spam, verify email address, wait before requesting again
- Scenario 2: "My reset link expired"
  - Cause: Links expire after X minutes
  - Solution: Click **Request Another Reset** to get a new link
- Scenario 3: "Invalid request error when resetting password"
  - Cause: Tampered/invalid link, multiple resets requested
  - Solution: Contact administrator

**`manual/7-Troubleshooting/ERROR_REFERENCE.md`** (ADD ROWS)
| Error Message | Meaning | Cause | Solution |
|---|---|---|---|
| "We could not validate your password reset request..." | Reset link is invalid or tampered | Link was tampered, copied incorrectly | Contact administrator |
| "Your password reset link has expired" | Reset link is no longer valid | You waited too long (link expires after X minutes) | Click "Request Another Reset" to get a new link |
| Email validation error on forgot-password page | Email doesn't exist or isn't verified | Email not registered or verification pending | Use correct registered email; check verification email |

#### Implementation Notes

- **Exact copy**: Use the literal strings from backend for confirmation and error messages (see "Source Code References" for file paths)
- **Link expiry**: Verify the actual timeout value from backend config before documenting (check `sanctum`/`auth.php` or `.env` setting)
- **Screenshot/diagram**: Consider ASCII diagram showing the flow: User → Forgot Password page → Email received → Reset page → Success
- **Mobile**: The password reset flow is web-only (no mobile-specific flow noted in code). Mention if users access from mobile, they should use web.

#### Effort

**3–4 hours** (self-contained, highest priority)

---

### C2: Mobile App — Full Feature Parity (Requests, Leaves, Approvals)

#### What Changed

The mobile app has evolved from a clock-in/out tool to a nearly complete self-service + manager-approval platform. Multiple new request types, approvals workflow, and leave management now work on mobile.

#### New Mobile Capabilities

**Employee-Side (New on Mobile):**

| Feature | Availability | Details |
|---------|--------------|---------|
| **Submit Leave Request** | Mobile app | Request types: Annual Leave, Sick Leave, etc. (all configured leave types). View balance history. Attach supporting documents. |
| **Submit Overtime Request** | Mobile app | Request overtime hours. Attach supporting documents. |
| **Submit Manual Timelog** | Mobile app | For missed clock in/out entries. Date, start time, end time, notes. Attach receipts/evidence. |
| **Submit Schedule Request** | Mobile app | Request schedule changes, swaps. |
| **Submit Holiday Swap Request** | Mobile app | New request type. Swap holidays. |
| **View Leave Balance History** | Mobile app | Historical leave balance per leave type. Filter by leave type. |
| **Attach Files to Requests** | Mobile app | File picker widget. Supports common document formats. Attach to any request type. |
| **Real-Time Timelog Sync** | Mobile ↔ Web | Clock in/out on mobile instantly appears on web timelog. Delete on mobile removes from web. Bidirectional. |

**Manager-Side (New on Mobile):**

| Feature | Availability | Details |
|---------|--------------|---------|
| **My Approvals** | Mobile app | Review requests requiring approval. Tabs: My Requests / My Approvals / All Requests. |
| **Approve/Reject Requests** | Mobile app | Request types: Leave, Overtime, Manual Timelog, Schedule, Holiday Swap. Take action directly from phone. |
| **Filter Approvals** | Mobile app | Filter by Date Submitted, Requested Date, Request Type. |
| **Approver Display** | Mobile app | Show who has approved a request (Approved by section). |
| **Request Status Tracking** | Mobile app | See request status updates in real-time. |

**Common (New on Mobile):**

| Feature | Details |
|---------|---------|
| **Real-Time Sync** | Changes on mobile appear on web instantly; vice versa. No refresh needed. |
| **Notifications** | Push notifications for request status updates (approved/rejected). |
| **Offline Support** | Limited offline capability; syncs when connection restored. |

#### Where to Update

**Employee Guide Pages:**

1. **`manual/2-Employee-Guide/2.1-Time-Tracking.md`**
   - Add "On Mobile" section for clock in/out on mobile
   - Add: Submitting Manual Timelog requests (with attachment support)
   - Add: Real-time sync behavior (timer shows on both devices)
   - Add: Mobile troubleshooting (app crash, sync delay, offline behavior)

2. **`manual/2-Employee-Guide/2.2-Leave-Management.md`**
   - Add "On Mobile" section for submitting leave requests
   - Include: Leave types, balance history, attaching documents
   - Add: View leave balance history on mobile
   - Add: Real-time status updates (approvals/rejections push notifications)

3. **`manual/2-Employee-Guide/2.3-View-Schedule.md`**
   - Add "On Mobile" section for submitting schedule requests
   - Add: Holiday Swap requests (if applicable)
   - Include: Attaching shift-change documentation

4. **`manual/2-Employee-Guide/2.4-Payslip-Compensation.md`** (VERIFY)
   - Check if mobile has payslip access; if yes, add subsection

**Manager Guide Pages:**

5. **`manual/3-Manager-Guide/3.2-Approving-Requests.md`** (PAIRED UPDATE)
   - Add "Approving on Mobile" section
   - Include: Accessing My Approvals tab
   - Workflows: Review request → approve/reject from phone
   - Filters: Date Submitted, Requested Date
   - Note: Approver history visible

**New Page (Recommended):**

6. **`manual/2-Employee-Guide/2.5-Mobile-App.md`** (CONSIDER)
   - **Option A (Recommended)**: Create a dedicated mobile hub page
     - Mobile app installation & first login
     - Overview of mobile features (clock in/out, requests, leaves, approvals)
     - Links to feature-specific sections (2.1, 2.2, 2.3)
     - Mobile-specific troubleshooting (app updates, offline sync, push notifications)
     - File attachment support
   - **Option B**: Add "On Mobile" subsections to existing pages (2.1, 2.2, 2.3, 3.2)
   - **Decision**: Page (A) is cleaner if mobile sections are extensive; subsections (B) if concise

**Onboarding Strategy:**

7. **`onboarding-strategy/walkthroughs/employee-walkthrough.md`**
   - Update to note mobile now covers full request/leave workflow

8. **`onboarding-strategy/walkthroughs/manager-walkthrough.md`**
   - Update to note managers can approve requests from mobile

#### Platform-Specific Callouts

**Audit existing pages for web-only assumptions** (per DOCUMENTATION_GUIDE Pitfall 1):

| Web Assumption | Mobile Equivalent | Status |
|---|---|---|
| "Click the left sidebar" | "Tap the menu icon (☰)" | Needs callout if sidebar mentioned |
| "Press Ctrl+I to clock in" | "Tap the Clock In button" | Needs platform note |
| "Click the Time menu" | "Tap the Time tab/section" | Needs clarification |
| "Refresh the page to see updates" | "Pull down to refresh / changes appear automatically" | Needs platform note |
| "Browser timezone setting" | "Phone's timezone setting" | Needs platform note |

#### Implementation Notes

**Examples & Concrete Details:**
- Use recurring named cast (Maria, John, Ana)
- Show step-by-step mobile flows with tap actions
- Include: exact button labels, confirmation messages
- Mobile screenshots/diagrams recommended (if available)

**Testing/Verification:**
- Test actual request submission flow on mobile QA build
- Verify all request types work as documented
- Confirm push notifications appear correctly
- Test real-time sync between devices

**Effort:**
**10–14 hours** (largest piece; includes employee + manager + new page decision)

---

## High-Impact Changes (Should Update)

### H1: Real-Time Timelog Sync (Web ↔ Mobile) + Active-Timer Tab Indicator

#### What Changed

**Real-Time Sync:**
- New `timelog-event` and `timelog-deleted` broadcast events
- Clock in/out on mobile instantly updates the web **My Records** / **DTR list**
- Conversely, if clocked in on web, clock out on mobile instantly updates web
- Deleted timelog entries disappear from the other device automatically
- No refresh needed; Pusher/WebSocket handles updates

**Browser Tab Indicator:**
- Browser **tab title** shows timer status while clocked in
- Browser **favicon** displays a colored badge/dot while active timer runs
- Provides at-a-glance awareness without opening the app
- Stops when clocked out

#### Where to Update

**`manual/2-Employee-Guide/2.1-Time-Tracking.md`** (ADD SECTIONS)

1. **New "Multi-Device Sync" section:**
   - Explain: You can clock in on mobile and see it on web, or vice versa
   - Confirmation: Changes appear instantly on both devices
   - Note: Don't refresh — the system updates automatically
   - Example scenario: Clock in on mobile in the morning; check DTR on web and it's already updated

2. **New "Browser Timer Indicator" subsection:**
   - Explain: While your timer is running, the browser tab shows a colored dot/badge
   - Purpose: Helps you remember you're clocked in without opening Kando
   - Behavior: Disappears when you clock out
   - Note: Works on both web and mobile browsers

3. **Mobile note in Clock In section:**
   - "If you clock in on mobile, you'll see the update on web instantly. No refresh needed."

**`manual/7-Troubleshooting/6.2-Time-Tracking-Issues.md`** (ADD SCENARIO)

**Scenario: "My timer shows differently on phone vs. web"**
- Cause: Timers are synced in real-time, but there might be a brief network delay
- Solution: Wait a moment for sync to complete. Check your internet connection. Refresh if needed.
- Note: This is normal behavior; the system keeps both devices in sync automatically

#### Implementation Notes

- **Framing**: This is a convenience feature, not a technical detail
- **Platform note**: Tab indicator appears on web; mobile doesn't show it (mobile app shows timer in UI)
- **Testing**: Test actual sync between devices on QA; verify tab indicator works in different browsers

#### Effort

**2–3 hours** (pairs with C2's Time Tracking updates; do together)

---

### H2: Cross-Organization Access Tightening (Compensation & Compliance)

#### What Changed

**Backend Policy Changes:**
- `CompensationPolicy` now enforces: `employee.organization_id == user.organization_id` for manage actions
- New `viewCurrent` permission added (scoped to current org)
- `ComplianceRecordHeaderPolicy` added: gates view/post on `payroll.compliance` permission AND same-org ownership
- Compliance endpoints now validate: user's org must match record's org

**User-Visible Effect:**
- Attempting to view compensation/compliance records from another organization returns:
  - **401 Unauthorized** (Access denied) if no permission
  - **404 Not Found** (record doesn't exist) if outside org
- Managers see only their own organization's data
- HR Admins see only their own organization's data
- Cross-org visibility is blocked

#### Where to Update

**`manual/5-HR-Admin-Guide/4.4-Payroll-Management.md`** (ADD CLARIFICATION)

Add a new "Data Privacy & Organization Scope" subsection:
- You can view and manage compensation records only within your own organization
- This protects payroll privacy across separate organizations
- If you need to access another organization's payroll, contact that organization's HR Admin

**`manual/3-Manager-Guide/3.4-Reports.md`** (ADD CLARIFICATION)

Add note: You can view reports only for your organization and team members

**`manual/7-Troubleshooting/ERROR_REFERENCE.md`** (ADD/UPDATE ROWS)

| Error Message | Meaning | Cause | Solution |
|---|---|---|---|
| "Access Denied" (401) when opening compensation record | You don't have permission to view this record | Missing `payroll.compensation` permission OR record is in another organization | Contact HR Admin to grant permission or confirm you're accessing your org's records |
| "Not Found" (404) when opening compensation record | Record doesn't exist or you can't access it | Record is in another organization or has been deleted | Verify record ID; ask HR if record belongs to your organization |
| "Access Denied" (401) when viewing compliance record | You don't have permission to view this record | Missing `payroll.compliance` permission OR record is in another organization | Contact HR Admin to grant permission |
| "Not Found" (404) when viewing compliance record | Compliance record doesn't exist or you can't access it | Record is in another organization or has been deleted | Verify the record; confirm it belongs to your organization |

#### Implementation Notes

- **Framing**: Frame as correct behavior—protection of organizational data privacy, not as a "fix" or "vulnerability resolution"
- **Keep out of customer docs**: Keep the phrase "cross-org IDOR" and exploit details in `onboarding-strategy/` only
- **Paired pages**: Both HR and Manager guides should mention this for consistency

#### Effort

**2–3 hours** (mostly Troubleshooting additions)

---

### H3: Employee "Unlicensed" Tag Now Shown Broadly

#### What Changed

**Visual Indicator:**
- An **Unlicensed** tag (`values.unlicensed`) now appears on employees across:
  - Employee list view
  - Organizational chart
  - Kiosk assignees panel
  - Shift policy employee assignment
  - Period/pay-group employee lists
  - Timesheet & paysheet details
  - Any place showing employee names

**Blocking Behavior:**
- Two new validation toasts (exact messages):
  - *"There are employees without Timekeeping Module seat. Remove them from the Period Policy or assign a seat"*
  - *"There are employees without Payroll Module seat. Remove them from the Pay Group or assign a seat"*
- Period/payroll finalization blocked if unlicensed employees exist in the policy/pay-group

**User Experience:**
- HR Admins and Owners see the tag and get blocked finalization messages
- Solution: Either assign a seat to the employee or remove them from the period/pay-group

#### Where to Update

**`manual/5-HR-Admin-Guide/4.1-System-Setup.md`** (ADD SECTION)

Add new "Understanding Employee Licensing & Seats" section:
- Explain: Each employee needs a module seat (Timekeeping, Payroll, etc.) to use features
- Unlicensed tag means: This employee doesn't have a seat assigned
- Where you see it: Employee lists, organizational chart, kiosk assignment, policies, timesheets
- Impact on finalization: Can't finalize a period/payroll if unlicensed employees exist
- Solution: Assign a seat (via Subscription management) or remove the employee from the policy

**`manual/5-HR-Admin-Guide/4.4-Payroll-Management.md`** (ADD SECTION)

Add new "Seating Requirements for Payroll" subsection:
- Same explanation as above, focused on payroll operations
- Include exact error toasts (copy from backend)
- How to resolve: Assign seat or remove from pay-group

**`manual/4-Owner-Guide/4.3-Subscription-Management.md`** (ADD SECTION)

Add "Module Seats & Unlicensed Employees" section:
- Overview: What module seats are (Timekeeping, Payroll add-ons)
- Unlicensed employees: Can't access features they don't have seats for
- How to assign seats: Subscription page, select employee, assign module
- Cost implications: Each seat is a separate line item

**`manual/7-Troubleshooting/ERROR_REFERENCE.md`** (ADD ROWS)

| Error Message | Meaning | Cause | Solution |
|---|---|---|---|
| "There are employees without Timekeeping Module seat..." | Can't finalize period | Employees in the period don't have Timekeeping seats | Go to Subscription, assign Timekeeping seats to all employees in period, then try finalization again OR remove employees from period |
| "There are employees without Payroll Module seat..." | Can't finalize payroll | Employees in pay-group don't have Payroll seats | Go to Subscription, assign Payroll seats to all employees, then try again OR remove from pay-group |
| Employee shows "Unlicensed" tag | Employee lacks a module seat | Subscription for that module expired or seat unassigned | Assign a seat via Subscription management |

**`manual/7-Troubleshooting/6.4-General-Issues.md`** (ADD SCENARIO - optional if not covered above)

**Scenario: "I see an Unlicensed tag on an employee"**
- Cause: The employee doesn't have a module seat assigned
- Solution: Go to Subscription, select the employee, assign the required module seat (Timekeeping, Payroll, etc.)
- Cost: Additional seats may have a cost depending on your plan

#### Implementation Notes

- **Exact error messages**: Use the literal toast strings from the code (see Source Code References)
- **Pairing**: Owner guide (what seats are) should be read before HR guide (how to assign)
- **Cross-reference**: Link from Subscription page to HR admin guide

#### Effort

**2–3 hours** (mostly tabular additions + error reference updates)

---

## Medium/Low Changes (Nice to Update)

### M1: Sidebar Auto-Collapse on Narrow Screens

**What changed**: The left menu (`AppMenu.vue`) now auto-collapses below 720px width, converting to a hamburger menu icon.

**Where to update**: 
- `manual/1-Getting-Started/1.3-Dashboard-Overview.md` → Navigation section
- Add: "On narrow screens or mobile browsers, the left menu collapses automatically. Tap/click the menu icon (☰) to expand it."

**Effort**: 15 minutes

---

### M2: New KSelect Dropdown Component

**What changed**: Frontend added a new dropdown (`KSelect.vue`) with improved width/position calculation and caret positioning.

**Impact**: Mostly visual improvements; no workflow change.

**Where to update**: Screenshots/diagrams only (if you have them); otherwise, no doc change needed.

**Effort**: Minimal

---

### M3: Kiosk PIN Encryption & PIN Strength

**What changed**: 
- Existing kiosk PINs are encrypted (migration in `EncryptExistingKioskPins`)
- PIN type migrations handle legacy data
- "Kiosk pin weakness" fixes suggest stricter PIN rules

**Verification needed**: 
- Did minimum PIN **length** or **complexity** change?
- Is there a new validation message when setting a PIN?

**Where to update** (only if policy changed):
- `manual/5-HR-Admin-Guide/4.1-System-Setup.md` → Kiosk Setup section
- Add note: "PINs must be at least [N] digits" or "PINs must include numbers and letters" (if changed)

**Effort**: 1–2 hours (only if policy is user-visible)

---

### M4: Refresh Token Moved to Secure Cookie

**What changed**: Authentication tokens moved from localStorage to secure httpOnly cookie (improved security).

**User-facing impact**: **NONE** — this is entirely backend

**Where to update**: **Nowhere in `manual/`** — this is internal

**Document in**: `onboarding-strategy/` internal security notes only

**Effort**: Internal note only (1–2 hrs in onboarding-strategy)

---

### M5: Security Headers & CSP

**What changed**: Added security headers (CSP, X-Frame-Options, HSTS, etc.) to frontend.

**User-facing impact**: **NONE** — security infrastructure only

**Where to update**: **Nowhere in `manual/`** — internal only

**Document in**: `onboarding-strategy/` security posture notes

**Effort**: Internal note only

---

### M6: Attendance Data Removed from Pusher Payload

**What changed**: `RequestAnalytics.php` and `RequestLog` removed attendance data from real-time event payloads.

**User-facing impact**: **NONE** — backend infrastructure optimization

**Where to update**: **Nowhere in `manual/`**

**Document in**: Internal architecture notes (optional)

**Effort**: N/A

---

### M7: Paysheet Fixes & Bug Fixes

**What changed**: 
- Paysheet criteria overflow fixes
- Remarks input fixes
- Active-toggle fixes
- Minor validation adjustments

**User-facing impact**: Bug fixes; no new workflow

**Where to update**: CHANGELOG only (mention in "Bug Fixes" section)

**Effort**: Minimal (changelog entry only)

---

## New Content Opportunities

### O1: Mobile App Hub Page (Recommended)

**Page**: `manual/2-Employee-Guide/2.5-Mobile-App.md`

**Content**:
- Mobile app overview (install, first login, platforms)
- Link hub to mobile sections in other pages (2.1, 2.2, 2.3)
- Mobile-specific features (offline support, push notifications, attachments)
- Mobile troubleshooting (app crashes, sync delays, offline behavior)
- Screenshots/diagrams of mobile interface

**Justification**: Mobile now has extensive feature coverage; a hub centralizes navigation and mobile-specific guidance.

**Estimated size**: 2–3 pages of content

**Effort**: 3–4 hours

---

### O2: Mobile Approvals Subsection (Alternative to O1)

If you decide against a full `2.5-Mobile-App.md` page, add a focused "Approving on Mobile" subsection to `3.2-Approving-Requests.md`:
- Access My Approvals tab on mobile
- Review and filter requests
- Approve/reject directly from phone
- Receive real-time push notifications

**Effort**: 1–2 hours

---

### O3: Internal Security Posture Notes

**Document in**: `onboarding-strategy/guides/v2-20-0-security-hardening.md` (new internal guide)

**Content**:
- Security improvements in v2.20–2.21
- Refresh token moved to secure httpOnly cookie
- CSP and security headers added
- Kiosk PIN encryption
- Cross-org policy tightening
- Rate limiting on password reset
- Implications for deployment, testing, and onboarding

**Audience**: Development team, security team

**Effort**: 2–3 hours

---

## Mobile-Specific Updates Matrix

**Comprehensive reference of all mobile updates needed:**

| Feature | Page | Section | Type | Details |
|---------|------|---------|------|---------|
| **Clock In** | 2.1-Time-Tracking | Clock In steps | Mobile callout | "On mobile, tap the Clock In button on the home screen" |
| **Clock Out** | 2.1 | Clock Out steps | Mobile callout | "On mobile, tap the Clock Out button" |
| **Timelog Sync** | 2.1 | New section | Explanation | Real-time sync between devices; no refresh needed |
| **Tab Indicator** | 2.1 | New section | Explanation | Browser tab shows timer status while clocked in |
| **Manual Timelog** | 2.1 | Common Scenarios | Mobile subsection | Submit manual timelog requests from mobile with attachments |
| **Request Attachments** | 2.1, 2.2, 2.3 | Request sections | Callout | "Attach supporting documents from your phone" |
| **Submit Leave** | 2.2-Leave | Leave request steps | Mobile subsection | Request leave types from mobile; view balance history |
| **Leave Balance** | 2.2 | Balance view | Mobile subsection | "On mobile, tap Leave Balance to see historical data" |
| **Overtime Request** | 2.2 | Overtime section | Mobile subsection | Submit overtime requests from mobile |
| **View Schedule** | 2.3-View-Schedule | Schedule viewing | Mobile callout | View shifts on mobile |
| **Schedule Request** | 2.3 | Request section | Mobile subsection | Submit schedule changes from mobile |
| **Holiday Swap** | 2.3 | New feature | Mobile subsection | Submit holiday swap requests from mobile |
| **My Approvals** | 3.2-Approving | New section | Manager feature | Access approval queue on mobile; filter, approve/reject |
| **Approval Notifications** | 3.2 | Approvals section | Callout | "Receive push notifications for approval requests" |
| **Offline Behavior** | 7-Troubleshooting | Mobile section | Troubleshooting | Limited offline support; syncs when connection restored |
| **App Updates** | 7-Troubleshooting | Mobile section | Troubleshooting | How to update app; troubleshooting crashes |
| **Push Notifications** | 7-Troubleshooting | Mobile section | Troubleshooting | Enable notifications, troubleshoot missing alerts |
| **File Attachments** | Request pages | Attachments | Callout | "Supported file types: PDF, Word, Excel, images" |

---

## Security & Compliance Framing

### Critical: How to Frame Security Fixes in Customer Docs

**Rule**: Describe current *correct behavior*, never the vulnerability that prompted the change.

**DO NOT say:**
- ❌ "We fixed a cross-tenant IDOR vulnerability"
- ❌ "We patched access control issues"
- ❌ "We encrypted tokens to prevent session hijacking"

**DO say:**
- ✅ "Compensation records are visible only within your organization"
- ✅ "You can view only your organization's payroll data"
- ✅ "Authentication tokens are encrypted and secure"

### Specific to QA Branch Changes

#### Password Reset (C1)
- **Framing**: Standard auth feature — document as a normal capability
- **Security**: Rate-limiting and link expiry are built-in; don't discuss the exploit
- **Customer docs**: Show the user-facing flow (request → email → set password)

#### Cross-Org Access Tightening (H2)
- **Framing**: "Your organization's data is private. You can only access compensation and compliance records for your own organization."
- **Avoid**: "We fixed IDOR vulnerabilities in compensation records"
- **Customer docs**: Document as a privacy/access control feature, not as a fix

#### Security Hardening (M4, M5, M6)
- **Framing**: Keep out of customer docs entirely
- **Where to document**: `onboarding-strategy/` internal guides only
- **Content**: Implementation details, architectural decisions, testing requirements

#### Kiosk PIN Encryption (M3)
- **If PIN policy changed**: Document the new policy as a current requirement
- **If only internal encryption changed**: No customer-facing docs needed
- **Avoid**: "We encrypted PINs to prevent brute-force attacks"

### Keep These Out of `manual/` Folder

- ❌ Vulnerability CVE references
- ❌ Exploit details or attack vectors
- ❌ Implementation security mechanisms (hashing, encryption algorithms, CSP directives, etc.)
- ❌ Infrastructure security (server hardening, WAF rules, certificate pinning, etc.)

### Put These in `onboarding-strategy/` Only

- ✅ Security architecture decisions
- ✅ Threat models and mitigation strategies
- ✅ Implementation details of security measures
- ✅ Security testing and validation procedures
- ✅ Deployment security considerations

---

## Update Priority & Sequence

### Recommended Order (Minimize Conflicts & Dependencies)

| Step | Change | Pages | Effort | Dependencies |
|------|--------|-------|--------|--------------|
| **1** | C1: Forgot/Reset Password | 1.2-Login-Setup + 6.1-Login-Issues + ERROR_REFERENCE | 3–4 hrs | None |
| **2** | H3: Unlicensed Tag | 4.1-System-Setup + 4.4-Payroll + 4.3-Subscription + ERROR_REFERENCE | 2–3 hrs | None |
| **3a** | C2: Mobile Features (Employee Side) | 2.1 + 2.2 + 2.3 + decide on 2.5 | 8–10 hrs | Prepare mobile strategy first |
| **3b** | H1: Timelog Sync | 2.1-Time-Tracking + 6.2-Time-Tracking-Issues | 1–2 hrs | Do with Step 3a (both edit 2.1) |
| **4** | C2: Mobile Features (Manager Side) | 3.2-Approving-Requests | 2–3 hrs | After Step 3a (paired update) |
| **5** | H2: Cross-Org Access | 4.4-Payroll + 3.4-Reports + ERROR_REFERENCE | 2–3 hrs | After H3 (don't overwhelm ERROR_REFERENCE) |
| **6** | M1–M3: UI & Polish | 1.3-Dashboard + M3 kiosk docs (if needed) | 1–2 hrs | Independent |
| **7** | Onboarding-strategy notes | Internal security guide | 1–2 hrs | Independent |

### Key Sequencing Rules

- **C1 first**: Self-contained, fastest win, highest visibility
- **H3 second**: Independent, quick
- **3a + 3b together**: Both edit `2.1-Time-Tracking.md`; do in one session to avoid conflicts
- **3b → 4**: Manager approvals (4) depend on employee requests (3a) being documented first
- **H2 last**: Touches ERROR_REFERENCE, which will have entries from C1 and H3

---

## Verification Checklist

### Before You Start Writing

- [ ] **Password reset link expiry time**: Confirm the actual timeout from backend config (default in `sanctum`/`auth.php` or `.env`). Will document as "links expire after X minutes"
  - *Verification*: `kando-backend/.env.example` or `config/sanctum.php`

- [ ] **Kiosk PIN policy changes**: Verify if minimum PIN length or complexity changed (e.g., now requires min 4 digits)
  - *Verification*: Review kiosk PIN validation in `kando-frontend` and `kando-backend`; check any error messages for new requirements

- [ ] **Mobile features shipping status**: Confirm mobile app features are in the v2.20/2.21 release build, not just QA
  - *Verification*: Check release notes / QA build status

- [ ] **Mobile unlock scope**: Confirm which mobile features are available to which roles (e.g., all employees can submit leave, only managers can approve)
  - *Verification*: Check mobile code for role/permission gates (`lib/enum/request_keys.dart`, `lib/views/approvals/`)

- [ ] **Exact error/confirmation messages**: Capture literal strings for all new errors and success messages
  - *Verification*: Backend messages in `resources/lang/en/messages.php`, frontend in `src/i18n/en/`

- [ ] **Forgot password email content**: Review actual email template for exact copy
  - *Verification*: `kando-backend/resources/views/mail/forgot-password.blade.php`

- [ ] **"Unlicensed" tag exact display**: Verify the literal text and when it appears
  - *Verification*: `src/i18n/en/values.ts`, grep `unlicensed` in component files

- [ ] **Toast message exact copy** (Unlicensed): Capture the exact text for both Timekeeping and Payroll toasts
  - *Verification*: Search backend for toast trigger, confirm wording

- [ ] **Mobile page strategy decision**: Decide: new `2.5-Mobile-App.md` page or subsections in existing pages?
  - *Recommendation*: Page if mobile sections are extensive (10+ subsections); subsections if concise (2–3 per page)

### While Writing

- [ ] Reread each page against DOCUMENTATION_GUIDE standards (template, formatting, emojis, tone)
- [ ] Test all relative markdown links (no broken references)
- [ ] Verify cross-references are bidirectional (employee page → manager page and vice versa)
- [ ] Ensure paired pages (employee ↔ manager) stay in sync
- [ ] Use recurring named cast (Maria, John, Ana, etc.) consistently
- [ ] Use concrete times/dates (09:00 AM, Feb 15), not placeholders

### Before Committing

- [ ] **CHANGELOG.md updated** (mandatory per project memory)
- [ ] **Last Updated date** set on all modified pages (YYYY-MM-DD)
- [ ] **All links tested** — click 3–5 cross-references to verify they work
- [ ] **Quality checklist passed** (from DOCUMENTATION_GUIDE)
  - Every task has Goal + Steps + Confirmation
  - Edge cases covered in Common Scenarios
  - DO/DON'T section present
  - Troubleshooting included
  - Metadata footer present

### After Pushing

- [ ] **Wait 1–2 minutes** for Azure DevOps Wiki to auto-publish
- [ ] **Verify in wiki** — pages render correctly, no broken links
- [ ] **Test cross-references** in wiki (click links)
- [ ] **Check that latest commit** appears in repo history

---

## CHANGELOG.md Draft Entry

Use this as a template for the CHANGELOG entry when you push the documentation updates:

```markdown
## v2.20.0 / v2.21.0 Documentation Updates — [Date]

### Features
- Documented self-service Forgot Password / Reset Password flow with email verification and link expiry
- Added comprehensive mobile app documentation: Requests (Leave, Overtime, Manual Timelog, Schedule, Holiday Swap), Leaves, Approvals
- Documented real-time timelog sync between web and mobile devices
- Documented active-timer browser tab indicator for desktop users

### Docs
- **Updated `manual/1-Getting-Started/1.2-Login-Setup.md`**: Replaced placeholder with complete password reset flow (request → email → set new password)
- **Updated `manual/6.1-Login-Issues.md`**: Added scenarios for reset-link expiry, invalid links, email not found
- **Updated `manual/7-Troubleshooting/ERROR_REFERENCE.md`**: Added reset link and cross-org access error rows
- **Updated `manual/2-Employee-Guide/2.1-Time-Tracking.md`**: Added mobile clock in/out, manual timelog requests, real-time sync behavior, tab indicator
- **Updated `manual/2-Employee-Guide/2.2-Leave-Management.md`**: Added mobile leave request submission, balance history, push notifications
- **Updated `manual/2-Employee-Guide/2.3-View-Schedule.md`**: Added mobile schedule requests and holiday swap requests
- **Updated `manual/3-Manager-Guide/3.2-Approving-Requests.md`**: Added mobile approvals workflow, My Approvals tab, real-time status
- **Updated `manual/5-HR-Admin-Guide/4.1-System-Setup.md`**: Added employee licensing & unlicensed tag guidance
- **Updated `manual/5-HR-Admin-Guide/4.4-Payroll-Management.md`**: Added payroll seating requirements and unlicensed employee blocking
- **Updated `manual/4-Owner-Guide/4.3-Subscription-Management.md`**: Added module seats & licensing explanation
- **Updated `manual/1-Getting-Started/1.3-Dashboard-Overview.md`**: Added sidebar auto-collapse behavior for narrow screens
- **New reference**: `QA_BRANCH_DOCUMENTATION_ANALYSIS.md` — Complete analysis of changes (internal reference)

### Security (Framed as Privacy)
- Documented cross-organizational data isolation: compensation and compliance records are scoped to organization
- Documented permission-gated payroll and compliance access

### Technical Improvements (onboarding-strategy/ internal)
- Added security posture documentation for v2.20–2.21 (internal-facing, not published to manual/)
  - Refresh token security (httpOnly cookie)
  - Content Security Policy & security headers
  - Kiosk PIN encryption
  - Cross-organization policy enforcement
  - Password reset rate-limiting

**Commits**: [Include commit hashes when you push]

**Effort**: ~24 hours of documentation updates
```

---

## Source Code References

### Backend Files

**Password Reset:**
- `/Users/ericmagto/Projects/kando/source-code/kando-backend/app/Http/Controllers/Api/AuthController.php` — Reset logic
- `app/Services/PasswordResetService.php` — Service layer
- `resources/views/mail/forgot-password.blade.php` — Email template
- `resources/lang/en/messages.php` — Error/success messages
- `lang/en/reset.php` — Reset-specific strings
- `routes/v1/auth.php` — Routes

**Policies & Access:**
- `app/Policies/CompensationPolicy.php` — Cross-org access control
- `app/Policies/ComplianceRecordHeaderPolicy.php` — Compliance scoping

**Error Messages & Validation:**
- `lang/en/messages.php` — All system messages

### Frontend Files

**Password Reset (Web):**
- `/Users/ericmagto/Projects/kando/source-code/kando-frontend/src/views/auth/LoginView.vue` — Login page with reset link
- `src/views/auth/ForgotPassword.vue` — Forgot password page
- `src/views/auth/ResetView.vue` — Reset password page
- `src/views/auth/partials/InvalidResetLink.vue` — Invalid/expired link UI
- `src/i18n/en/forgot-password.ts` — Reset-related strings
- `src/router/index.ts` — Route definitions
- `src/api/auth.ts` — API calls

**Timelog Sync & Tab Indicator:**
- `src/views/my-records/partials/DtrList.vue` — DTR list (receives timelog events)
- `src/App.vue` — App-wide timer and Pusher listeners
- `src/utils/favicon-badge.ts` — Favicon badge implementation

**Unlicensed Tag & UI:**
- `src/i18n/en/values.ts` — "Unlicensed" label
- `src/views/**/EmployeeList.vue` (multiple) — Employee list components showing tag
- `src/components/OrganizationalChart.vue` — Org chart with tag
- `src/components/AppMenu.vue` — Sidebar (collapse behavior at 720px)

**Sidebar Collapse:**
- `src/components/AppMenu.vue` — Media query, collapse logic

### Mobile Files

**Request Types & Submission:**
- `/Users/ericmagto/Projects/kando/source-code/kando_mobile_frontend/lib/views/requests/` — Request submission screens
- `lib/views/leaves/` — Leave request & balance
- `lib/views/approvals/` — Manager approvals
- `lib/enum/request_keys.dart` — Request type enumeration
- `lib/views/requests/*_request_fields.dart` — Field definitions per request type
- `lib/l10n/en/leaves.arb` — Leave strings
- `lib/l10n/en/approvals.arb` — Approval strings
- `lib/l10n/en/requests.arb` — Request strings
- `lib/components/k_attachment_preview.dart` — File attachment widget
- `lib/api/timelogs.dart` — Timelog sync API

**Mobile Notifications & Sync:**
- `lib/main.dart` / `lib/services/push_notification_service.dart` — Push notifications
- `lib/services/timelog_service.dart` — Timelog sync logic

---

## Implementation Workflow

### Phase 1: Preparation (1–2 hours)
1. Verify all items in the Verification Checklist
2. Decide: Mobile page strategy (new `2.5-Mobile-App.md` or subsections)
3. Prepare a local branch or ensure you're on main
4. Review DOCUMENTATION_GUIDE.md patterns

### Phase 2: Execute Updates (24–32 hours)
- Follow the Priority & Sequence order
- Use this checklist to verify each update
- Test links after each section
- Commit frequently (one page or logical grouping per commit)

### Phase 3: Review & Publish (2–3 hours)
- Final link verification in Azure DevOps Wiki
- Confirm CHANGELOG.md is complete
- All Last Updated dates are current
- Paired pages (employee ↔ manager) are synchronized

---

## Notes & Observations

### Ambiguities That Require Verification

1. **Password reset link expiry**: The exact timeout value is configured in backend. Verify before documenting a specific duration.
2. **Kiosk PIN policy**: Confirm if minimum length/complexity changed; this determines if docs need updating.
3. **Mobile release timing**: Ensure mobile features are in the shipped build, not just QA.
4. **Mobile role-gating**: Verify which roles can access mobile approval features.
5. **Unlicensed tag display**: Confirm all locations where the tag appears and under what conditions.

### Key Insights

- **Mobile is now feature-complete**: No longer a clock-in-only tool. Comprehensive documentation needed.
- **Security is framed correctly**: No need to disclose vulnerabilities; document correct behavior.
- **Cross-org isolation is now enforced**: Users will see access-denied messages; Troubleshooting must cover this.
- **Unlicensed tag is blocking**: Finalization won't proceed without assigned seats; HR/Owners need clear guidance.
- **Web + Mobile must stay in sync**: Whenever you update a web feature, check if mobile needs equivalent documentation.

### Risk Mitigation

- **Broken links**: Test every cross-reference after writing
- **Inconsistent messaging**: Use copy-paste for literal strings (error messages, button labels)
- **Paired page drift**: Update employee + manager pages in the same session
- **Missing mobile coverage**: Audit every existing page for web-only assumptions
- **Incomplete CHANGELOG**: Update CHANGELOG before pushing (non-negotiable)

---

## Document History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-08-25 | Initial comprehensive analysis from Opus agent. Ready for implementation. |

---

**Last Updated**: 2026-08-25  
**Maintained By**: Training & Documentation Team  
**Status**: ✅ Ready for Implementation  
**Next Step**: Verify checklist items, then begin Phase 2 updates following the Priority & Sequence order
