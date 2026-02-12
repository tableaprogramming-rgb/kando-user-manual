# Owner Interactive Walkthrough Specs

## Tour 1: Organization Profile Setup
**Trigger**: First login as Owner (or clicking "Skip" on any previous tour).
**Goal**: Get organization information entered and logo uploaded.

| Step | Target Element (Selector) | Tooltip Content | Action to Advance |
|------|---------------------------|-----------------|-------------------|
| 1 | `#settings-nav` | **Settings Hub**<br>Manage your organization here. | Click "Settings" Menu |
| 2 | `#org-profile-tab` | **Organization Profile**<br>Your company's official information. | Click Tab |
| 3 | `#org-name-input` | **Organization Name**<br>Enter your company name. This appears on invoices and reports. | Focus on Input / Type |
| 4 | `#logo-upload-area` | **Upload Logo**<br>Add your company logo (appears in sidebar and on documents). | Click Upload Area |
| 5 | `#billing-contact-name` | **Billing Contact Name**<br>Who approves payments? This person receives all invoices. | Focus on Input |
| 6 | `#billing-contact-email` | **Billing Email**<br>Critical: Invoices are sent here. Verify this email soon! | Focus on Input |
| 7 | `#save-profile-btn` | **Save Profile**<br>Click to save your changes. | Click Button |

## Tour 2: Organization Settings Configuration
**Trigger**: After profile saved OR "Configure Settings" checklist item.
**Goal**: Set timezone, date format, and organizational preferences.

| Step | Target Element (Selector) | Tooltip Content | Action to Advance |
|------|---------------------------|-----------------|-------------------|
| 1 | `#org-settings-tab` | **Organization Settings**<br>System-wide preferences for all employees. | Click Tab |
| 2 | `#timezone-select` | **Timezone**<br>Select where your organization operates. This affects payroll cutoff times and timesheet day boundaries. | Click Select |
| 3 | `#timezone-search` | **Search Timezones**<br>Type your city or timezone. | Type City / Select |
| 4 | `#date-format-select` | **Date Format**<br>Choose how dates appear on reports and documents. | Click Select / Choose Option |
| 5 | `#time-format-toggle` | **Time Format**<br>12-hour (2:30 PM) or 24-hour (14:30) format? | Toggle / Select |
| 6 | `#employee-name-format` | **Employee Name Display**<br>How should employee names appear? (First Last vs Last, First) | Click Select / Choose Format |
| 7 | `#save-settings-btn` | **Save Settings**<br>Changes apply system-wide immediately. | Click Button |

## Tour 3: Email Verification
**Trigger**: After profile saved OR "Verify Billing Email" checklist item.
**Goal**: Confirm billing email is accessible and verified.

| Step | Target Element (Selector) | Tooltip Content | Action to Advance |
|------|---------------------------|-----------------|-------------------|
| 1 | `#billing-email-status` | **Email Verification Status**<br>Check here to see if your billing email is verified. | View Status |
| 2 | `#verification-banner` | **Verify Now**<br>A confirmation email should arrive in ~2 minutes. Check spam folder! | Dismiss / Wait |
| 3 | `.verification-help-link` | **Need Help?**<br>Click here if you didn't receive the verification email. | Click Link / Request Resend |

## Tour 4: Subscription Overview & Seat Assignment
**Trigger**: After settings saved OR "Review Subscriptions" checklist item.
**Goal**: Show seat usage and assign first seat(s).

| Step | Target Element (Selector) | Tooltip Content | Action to Advance |
|------|---------------------------|-----------------|-------------------|
| 1 | `#subscriptions-tab` | **Subscription Management**<br>View and manage your subscription seats. | Click Tab |
| 2 | `#seat-stats-widget` | **Your Seat Summary**<br>You have X total seats. Y are assigned. Z are unassigned. | View Widget / Click "Next" |
| 3 | `.seat-table` | **Subscription Table**<br>Each row is one seat license. Green = Active. Red = Expired. | Scroll Table / Click "Next" |
| 4 | `.unassigned-seat-row:first-child` | **Unassigned Seat**<br>This seat is available! Click the action menu (⋮) to assign it. | Click Menu |
| 5 | `#action-assign-user` | **Assign to Employee**<br>Choose who gets this license. | Click "Assign" |
| 6 | `#user-select-dropdown` | **Select User**<br>Pick an employee (usually your HR Admin or first Manager). | Select User |
| 7 | `#confirm-assign-btn` | **Confirm Assignment**<br>This person can now access this module. | Click Button |
| 8 | `.auto-renew-toggle:first` | **Enable Auto-Renewal**<br>Seats auto-renew before expiring. Prevents access interruptions. | Click Toggle / Confirm |

## Tour 5: Quick Win - First Team Member Access
**Trigger**: After first seat assigned.
**Goal**: Celebrate progress and invite HR Admin or Manager.

| Step | Target Element (Selector) | Tooltip Content | Action to Advance |
|------|---------------------------|-----------------|-------------------|
| 1 | `#success-modal` | **🎉 Great Job!**<br>Your first seat is assigned. Your HR Admin/Manager can now access Kando. | Read Message / Click "Continue" |
| 2 | `#invite-user-prompt` | **Next Step**<br>Want to add more users? Go to **Settings → User Management** (HR Admin will help). | Read Prompt / Done |

## Tour 6: Billing & Renewals (Optional - Advanced)
**Trigger**: "Review Renewal Dates" checklist item OR user requests to see billing details.
**Goal**: Show billing period and help owner understand renewal implications.

| Step | Target Element (Selector) | Tooltip Content | Action to Advance |
|------|---------------------------|-----------------|-------------------|
| 1 | `#subscriptions-expiry-filter` | **Filter by Expiry Date**<br>See which seats expire soon so you can plan renewals. | Click Filter |
| 2 | `.seat-row.expiring-soon` | **Expiring Soon**<br>These seats expire in <30 days. Consider enabling auto-renew! | Hover / Click "Next" |
| 3 | `#bulk-auto-renew-btn` | **Bulk Enable Auto-Renewal**<br>One click to auto-renew all seats (or select specific ones). | Click Button / Confirm |

## Implementation Notes
- **Mobile Responsiveness**: Tours should work on desktop and tablet. Mobile may show simplified versions.
- **Skip Anytime**: User can skip any tour at any time. Progress saved.
- **Restart Anytime**: Tours can be restarted from Settings → Help → "Restart Onboarding".
- **Conditional Tours**: Don't show verification tour if email already verified.
- **Highlight States**: Use color highlights and icons (✓, ⚠️) to show status at each step.
- **Keyboard Navigation**: Support keyboard (Tab, Enter, Esc) for accessibility.
