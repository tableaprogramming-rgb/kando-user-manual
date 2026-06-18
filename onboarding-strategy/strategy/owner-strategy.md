# Owner Onboarding Strategy

**Status**: ✅ Updated based on source code audit (June 2026)

## 🎯 Goal
Get the Organization Owner to **Set up organization, configure settings, verify email, and assign initial seats** within the first 20 minutes.

## 👤 User Mindset
- "I need to set up my company quickly and start using the system."
- "How do I manage my subscription and avoid running out of seats?"
- "Who is the billing contact and will they get invoices?"
- "How many users can I add and what does this cost?"
- "When do my seats expire and what happens then?"

---

## 🗺️ The Actual "Happy Path" (Implementation Based)

### Phase 1: Signup Flow (Initial Account Creation)

The owner goes through a guided signup process with THREE sequential screens:

**Screen 1: Organization Setup** (`/sign-up/org-setup`)
- Company name (required)
- Subdomain (required, alphanumeric with hyphens only)
- Timezone (pre-filled with browser timezone)
- Free trial checkbox (optional)
- **Time**: ~2-3 minutes

**Screen 2: Account Setup** (`/sign-up/account-setup`)
- Owner's full name (first, middle, last, suffix)
- Username (required)
- Password & confirmation (required)
- Seat Type selection (radio buttons, required) - e.g., "Timekeeping", "Payroll", "Both"
- Subscription Term selection (radio buttons, required) - e.g., "Monthly", "Annual"
- Auto-renew checkbox (optional)
- Invitation code verification (required)
- **Time**: ~3-4 minutes

**Screen 3: Email Verification** (`/sign-up/verify`)
- Click email verification link in inbox
- Confirms email and completes signup
- **Time**: ~1-2 minutes (depends on email delivery)

### Phase 2: Post-Signup Owner Dashboard (After Email Verified)

After completing signup, owner has access to:

#### **Organization Profile** (`/organization/profile`)
- Display company logo (with upload capability)
- Display company name
- Display company address
- Display billing contact info (name, email, phone)
- Edit button to update logo, address, billing contact
- **Key fields to capture**:
  - Organization name (pre-filled from signup)
  - Address
  - Billing contact name (required)
  - Billing contact email (required, validated)
  - Billing contact phone
  - Account type (Free Trial or Standard)

#### **Organization Settings** (`/organization/settings`)
- **Timezone** (dropdown, required) - Pre-filled from signup
- **Date Format** (dropdown, required) - e.g., "MM/DD/YYYY", "DD/MM/YYYY"
- **Time Format** (dropdown, required) - e.g., "12-hour", "24-hour"
- **Name Format** (dropdown, required) - e.g., "{First} {Last}", "{Last}, {First}"
- **Subdomain** (text, required, from signup)
- **Departments** (optional, for later)
- **Week Start Day** (dropdown, optional)
- **Time**: ~2-3 minutes for first-time setup

#### **Subscriptions/Seats** (`/organization/subscriptions`)
- List of active seats with:
  - Seat Type (Module name)
  - Term (subscription period)
  - Expiry date
  - Active/Inactive status
  - Auto-renew status
- Actions available:
  - Enable/Disable auto-renew
  - Assign seat to a user
  - Unassign seat
  - Delete seat (if unassigned)
  - Manual renew
- Filters by:
  - Validity date range
  - Module/Seat Type
  - Term length
  - Status (Active/Inactive)
- **Key metrics displayed**:
  - Total seats (from `getSeatStats()`)
  - Seats in use (from `getSeatActivationCount()`)
- **Time**: ~3-5 minutes for seat assignment

#### **Billing/Invoices** (`/billing`)
- **Invoices Tab**: View and download invoices
- **Payment Methods Tab**: Manage payment methods (if applicable)
- Shows billing history and status

---

## ✅ Actual Onboarding Milestones (Reality Check)

✅ = Implemented & functional
⚠️ = Partially implemented or unclear
❌ = Not found in code

| Milestone | Status | Details |
|-----------|--------|---------|
| **1. Signup: Org Details** | ✅ | Name, subdomain, timezone in OrgSetup.vue |
| **2. Signup: Account Details** | ✅ | Owner name, password, username in AccountSetup.vue |
| **3. Signup: Seat Selection** | ✅ | Seat type & term selection in AccountSetup.vue |
| **4. Email Verification** | ✅ | Verification flow in VerifyView.vue |
| **5. Profile Setup** | ✅ | Logo, address, billing contact in ProfileView.vue |
| **6. Settings Config** | ✅ | Timezone, date format, time format, name format in OrganizationView.vue |
| **7. Seat Assignment** | ✅ | Assign seats to users in SubscriptionList.vue |
| **8. Auto-Renew Setup** | ✅ | Enable/disable auto-renew in SubscriptionList.vue |
| **9. Subscription Review** | ✅ | View seats & expiry dates in SubscriptionList.vue |
| **10. Onboarding Checklist** | ⚠️ | Not found; may not be implemented |
| **11. Welcome Modal** | ⚠️ | OnboardingText.vue exists but unclear when shown |
| **12. Guided Tour** | ❌ | No tooltip/tour system found |

---

## 💡 Actual Implementation Details

### Pre-Signup Information
- Owner receives invitation link with unique signature
- Link contains `id` (user ID) and `signature` (verification token)
- Link format: `/sign-up/{id}?signature={signature}`

### What's Pre-Filled
- Organization name (if set during invitation)
- Organization subdomain (if set during invitation)
- Timezone (browser default or from invitation)
- Account type (if pre-determined)

### What Requires Input
- Owner's full name (first, middle, last, suffix)
- Username (for login)
- Password
- Seat type (module selection)
- Subscription term (duration)
- Logo (optional, uploaded after signup)
- Address (optional, entered after signup)
- Billing contact details (required for invoices)

### Auto-Renewal
- Can be enabled during signup (checkbox in AccountSetup)
- Can be toggled later in Subscriptions page
- Prevents service interruption if enabled

---

## 🎯 Critical Implementation Notes

### Email Verification
- **Current**: Email verification happens during signup flow
- **Gate**: User cannot fully access system until `email_verified_at` is set
- **Communication**: Owner receives verification email and must click link
- **Fallback**: ⚠️ No resend mechanism documented; may need clarification

### Timezone Impact
- **Where used**:
  - Date/time formatting throughout system
  - Payroll cutoff times
  - Timesheet day boundaries
  - Report date ranges
- **Must explain to owner** during setup

### Subscription Model
- **1 Seat = 1 user license for 1 module**
- **Example**:
  - 5 employees × 1 Timekeeping module = 5 seats
  - 3 managers × 1 Payroll module = 3 separate seats
  - Module-specific pricing
- **Cost**: Calculated by seat type × term length

### Auto-Renewal Benefits
- Prevents accidental service interruption
- Automatically renews subscription before expiry
- Can be managed in Subscriptions page

---

## 🚨 Known Gaps & Clarifications Needed

| Issue | Impact | Solution |
|-------|--------|----------|
| **No checklist widget** | Owner doesn't see progress | Consider adding dashboard checklist |
| **No welcome modal** | Owner doesn't get intro | Verify OnboardingText.vue implementation |
| **No guided tour** | No in-app guidance | Consider adding tooltip library (Shepherd.js, Driver.js) |
| **Email resend unclear** | Owner may lose verification email | Document email resend flow |
| **Auto-renewal not obvious** | Owner may forget to enable | Add prominent prompt in Subscriptions page |
| **Seat cost not shown** | Owner doesn't see financial impact | Show estimated cost before assigning seats |
| **No billing dashboard** | Owner can't see upcoming invoices | Expand Billing page with summary widget |

---

## 🎓 Learning Outcomes
By end of owner onboarding, user should:
- ✅ Have organization configured (name, timezone, date/time formats)
- ✅ Have logo uploaded and company address entered
- ✅ Have billing contact info set up correctly
- ✅ Understand seat model (1 seat = 1 user license per module)
- ✅ Have initial seats assigned to team members
- ✅ Have auto-renew enabled to prevent service interruption
- ✅ Know where to find subscription status and billing info

---

## 🔗 Handoff to HR Admin

After owner completes setup:

1. **Owner invites HR Admin** via seat assignment
2. **HR Admin receives email** with organization subdomain
3. **HR Admin logs in** and sees HR-specific onboarding
4. **HR Admin can then**:
   - Create user accounts
   - Assign roles and access groups
   - Configure leave policies
   - Set up departments
   - Configure payroll

---

## 📊 Actual Success Metrics

| Metric | Target | How to Measure |
|--------|--------|-----------------|
| **Signup completion rate** | >90% | Count completed signups vs. started |
| **Time to complete signup** | <10 min | Track signup flow timing |
| **Email verification rate** | >95% | Count email_verified_at timestamps |
| **Time to assign first seat** | <30 min after signup | Track seat assignment timestamps |
| **Auto-renew enabled** | >50% within 7 days | Check OrganizationSeat auto_renew flag |
| **Profile completion** | >80% | Check if logo, address, billing contact filled |
| **Timezone configured** | >99% | Verify timezone is set (pre-filled helps) |

---

## 📋 Training Checklist for Trainers

Use this when training new Owners:

### During Signup
- [ ] Explain organization subdomain (unique URL identifier)
- [ ] Clarify timezone impact on payroll/timesheets
- [ ] Explain seat type selection (which module they need)
- [ ] Explain term selection (Monthly vs. Annual pricing)
- [ ] Encourage auto-renew setup (prevent service loss)

### After Signup (Dashboard Access)
- [ ] Upload organization logo
- [ ] Enter company address
- [ ] Set billing contact (critical for invoices)
- [ ] Verify organization settings (timezone, date format, etc.)
- [ ] Assign first seat to HR Admin
- [ ] Enable auto-renew
- [ ] Show Subscriptions page (where to manage seats)
- [ ] Show Billing page (where to see invoices)

### Key Points to Emphasize
- ⚠️ **Billing email is critical** - Owner will miss invoices if not set
- ⚠️ **Timezone affects payroll** - Wrong timezone = wrong cutoff times
- ⚠️ **Auto-renew prevents outages** - Strongly recommend enabling
- ⚠️ **Seats are per-module** - Not total user count

---

## 🔄 Changes from Original Strategy

| Item | Original Plan | Actual Implementation | Note |
|------|---------------|----------------------|------|
| **Welcome Modal** | Role-specific intro | OnboardingText.vue (unclear) | Needs verification |
| **Settings Wizard** | Step-by-step wizard | Multi-page form in signup + settings page | Works but distributed |
| **Checklist** | Dashboard checklist | Not found | Gap identified |
| **Guided Tour** | Tooltip-based | Not found | Gap identified |
| **Email Verification** | Part of owner flow | Implemented in signup | ✅ Works |
| **Billing Verification** | Separate step | Billing contact in profile | ✅ Works |
| **Seat Assignment** | Quick flow | Full subscription page | ✅ Comprehensive |
| **Auto-Renewal UI** | Prominent prompt | Checkbox + toggle in subscriptions | ✅ Works |
