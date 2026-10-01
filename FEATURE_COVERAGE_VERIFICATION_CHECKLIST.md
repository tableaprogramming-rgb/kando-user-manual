# Feature Coverage Verification Checklist

**Purpose**: A full-coverage audit (2026-10-01) compared the actual Kando product — `kando-frontend`, `kando_mobile_frontend`, `kando-backend` — against every page in `docs/user-manual/`. This checklist is the punch list from that audit, for manual verification against the live product / your own product knowledge.

**How this was built**: Three parallel research passes — (1) inventory of every menu/page/action in the web app from `AppMenu.vue`, the router, and `src/views/`, (2) inventory of every screen in the mobile app, (3) a read of all 27 manual pages listing exactly what each one documents. This checklist is the diff between those three.

**How to use it**: Check each item against the real product (or your own knowledge of it). Tick the box once verified, and jot the verdict inline (✅ accurate as documented / ⚠️ needs correction / ❌ doesn't exist, remove from docs / 📝 real but undocumented, needs writing).

---

## Priority 1 — Suspected Fabricated or Embellished Content

These read as invented or significantly embellished. No corresponding feature was found anywhere in the web app's menu, router, or views during the audit. If any of these are real, note where in the product they live so we can verify against source before trusting the doc text.

- [ ] `manager-guide/reports.md` → **"Predictive Analytics"** section — OT trend forecasting, absence pattern prediction, leave clustering, **attrition risk scoring**, **burnout risk scoring** (30/90/180-day windows). No ML/forecasting feature found anywhere in the product.
- [ ] `manager-guide/reports.md` → **"Custom Report Builder"** section — drag-and-drop column picker, aggregate functions, calculated fields, conditional formatting, saved custom reports. A real ad-hoc report feature exists (`/query` page) but may not match this description — confirm whether this section describes `/query` accurately or invents capabilities beyond it.
- [ ] `manager-guide/reports.md` → **"Benchmarking"** section — team vs. org average, team vs. similar teams, year-over-year comparisons.
- [ ] `manager-guide/reports.md` → **"Real-Time Dashboards"** section — customizable pinned metrics, color-coded alert thresholds, today/this-week/this-month views.
- [ ] `manager-guide/reports.md` → **"Advanced Approval Analytics"** — approval rate/turnaround/bias-detection analytics.
- [ ] `manager-guide/team-management.md` → performance metrics dashboard, specifically **"idle time"** tracking — the other metrics listed (attendance rate, OT trend) are plausible, idle time tracking is not obviously supported by anything found.
- [ ] `manager-guide/approving-requests.md` → **"AND vs. OR Logic"** / sequential-vs-parallel multi-step approval terminology — a real `/approval` settings page with multi-step/auto-approve logic exists, but confirm the specific AND/OR framing and "Director-level" escalation match the real configuration options rather than being invented detail.

---

## Priority 2 — Real Features With Zero Documentation

Confirmed to exist in the product (web and/or mobile) via direct source inspection, but not covered anywhere in `docs/user-manual/`.

- [ ] **Document management** (web `/documents` — folders, upload/download, rename, delete, share/unshare) — no doc page anywhere.
- [ ] **Compliance module** (web `/compliance` — Generate Record, fill per-employee values, Save/Post, Download PDF) — we documented its *access-control* behavior (org-scoping, H2) but never the feature itself.
- [ ] **Kiosk admin setup** (web `/kiosks` — add/edit a kiosk device, PIN/photo requirements, Launch, Share via URL/QR, Export Assignees) — zero docs.
- [ ] **Kiosk employee usage** (physical kiosk clock-in flow — PIN entry, face/photo capture, login) — zero docs; this is a distinct clock-in method from the individual-login flow in `time-tracking.md`.
- [ ] **Access Groups / permissions management** (web `/access-groups` — assigning roles, building custom permission sets, field/action permission matrix) — only ever mentioned as a checklist bullet in `system-setup.md`, never explained.
- [ ] **HR posting/reversing timesheets** (web `/timesheets` — Post new timesheet, Reverse timesheet) — `time-tracking.md` assumes timesheets get "finalized" by HR, but no HR Admin page explains how HR actually performs that action.
- [ ] **Resetting another employee's password** (manager/HR action from an employee's profile) — not documented anywhere.
- [ ] **Adjusting an employee's compensation/salary** (giving a raise via their Pay Info tab) — `payroll-management.md`'s "Adjustments" section covers post-hoc period corrections, not proactive compensation changes.
- [ ] **Organization Bank Accounts** (web `/organization-bank-accounts` — CRUD org bank accounts used for payroll disbursement) — zero docs.
- [ ] **Billing: viewing invoices / managing payment methods** — `owner-guide/billing-contact.md` only covers the billing *contact person*, not invoice access or payment method management.
- [ ] **Dashboard widget customization** (add/edit layout, add/delete widgets — LineGraph, BarGraph, NumberTile, DonutGraph, AvailabilityList — share dashboard with access groups) — `dashboard-overview.md` describes a fixed dashboard, not a configurable one.
- [ ] **"All Approvals" system-wide queue** (HR Admin/Owner — distinct from a manager's own-team "My Approvals") — `approving-requests.md` is written entirely from the manager's own-team perspective.
- [ ] **Employee-side Overtime request submission on web** — covered extensively from the *manager approval* side in `approving-requests.md`, but no employee-guide page documents how to actually submit one via web.
- [ ] **Bank File generation** (web `/paysheet` — generating a bank transfer file for payroll disbursement) — not mentioned in `payroll-management.md`'s process walkthrough.
- [ ] **"My Records" as a unified self-service page** (web `/my-records/my-profile` — Personal/Job/Timelog/Timesheet/Leave/Pay Info/Documents tabs for your own record) — pieces of this are scattered across other pages but there's no page documenting it as the feature it is.
- [ ] **Org Chart viewing** (web `/team/org-chart`) — mentioned only as a glossary term in `introduction.md`, never as a "here's how to view it" feature.
- [ ] **"Split Time" and "Continue" timer actions** (web My Time — split a running timer into two segments; resume a past entry) — `time-tracking.md` covers Clock In/Out/manual entries but not these.
- [ ] **New-organization sign-up wizard** (4-step: email → verify → org setup → account setup) — low priority, this is a sales/onboarding flow rather than something existing customers' employees need, but flagging for completeness.

---

## Priority 3 — Already-Known Gaps (no new verification needed, listed for completeness)

- [ ] `troubleshooting/login-issues.md` — skeleton/placeholder, unwritten
- [ ] `troubleshooting/time-tracking-issues.md` — skeleton/placeholder, unwritten
- [ ] `troubleshooting/request-issues.md` — skeleton/placeholder, unwritten
- [ ] `troubleshooting/general-issues.md` — skeleton/placeholder, unwritten
- [ ] `reference/faq.md` — skeleton/placeholder, unwritten (linked from 5+ other pages)
- [ ] `reference/getting-help.md` — skeleton/placeholder, unwritten (linked from `mobile-app.md` and others)
- [ ] `reference/glossary.md` — skeleton/placeholder, unwritten (glossary terms currently live informally in `introduction.md` instead)
- [ ] `reference/keyboard-shortcuts.md` — skeleton/placeholder, unwritten (multiple pages reference specific shortcuts like `Ctrl+I`, `Ctrl+Shift+A` that are never centrally compiled here)

---

## Priority 4 — Inconsistencies Between Existing Pages

Same feature described two different, possibly contradictory, ways.

- [ ] **"Manual Timelog"** — `employee-guide/time-tracking.md` describes it as an instant, direct entry ("Time → Time Entries → Add Manual Entry", no approval mentioned). `manager-guide/approving-requests.md` describes a "Time Adjustment" request type that requires manager approval. Confirm whether these are the same underlying feature (and the direct-entry description needs correcting), or genuinely two different things that should both be documented distinctly.
- [ ] **"Shift Swap" vs. "Holiday Swap Request"** — `employee-guide/view-schedule.md`'s "Request a Shift Swap" may be conflating two distinct request types that exist separately in the product (`schedule`/shift-swap vs. `holiday_swap`). Confirm whether `view-schedule.md` needs a separate Holiday Swap section, or whether the two are correctly treated as one.

---

**Also flagged (not a documentation item, already fixed separately)**: an incorrect claim that mobile supports the same "Forgot password?" flow as web — this has already been corrected in `login-setup.md` and `mobile-app.md` as of 2026-10-01.
