# 🔍 Onboarding Strategy Audit Report

**Date**: June 18, 2026
**Purpose**: Validate onboarding strategy documentation against actual source code implementation
**Status**: ⚠️ **REVIEW NEEDED** - See findings below

---

## Executive Summary

The onboarding strategy is **well-conceptualized** but needs **validation against actual implementation** in the code. We found:

✅ **Infrastructure exists**: Organization management, seat/subscription system, billing components
⚠️ **Implementation gaps**: Some features in strategy may not be fully coded or functioning
❓ **Unknown status**: Several role-specific onboarding features need verification

---

## 📋 SECTION 1: OWNER ONBOARDING STRATEGY

### What the Strategy Says Should Happen:
1. Welcome modal explaining owner responsibilities
2. Organization profile setup (logo upload, company details)
3. Settings wizard (timezone, date format, name format)
4. Billing email verification with retry flow
5. Subscription overview dashboard showing seat usage
6. Quick seat assignment flow

### What We Found in the Code:

#### ✅ IMPLEMENTED
- **Organization Profile Management** (`/views/organization/ProfileView.vue`)
  - Company name display
  - Logo upload capability (`OrgLogo.vue` component)
  - Address display
  - Billing contact info display
  - Organization edit button

- **Subscription/Seat Management** (`/views/organization/subscriptions/SubscriptionList.vue`)
  - Seat list display with filters
  - Seat type selection (modules)
  - Term selection (subscription periods)
  - Active/inactive status
  - Auto-renew enable/disable
  - Delete seats
  - Unassign seats

- **Backend APIs**
  - `OrganizationController::getProfile()` - Get org profile
  - `OrganizationController::putProfile()` - Update org profile
  - `OrganizationController::getSeats()` - List seats with pagination/filtering
  - `OrganizationController::assignSeats()` - Assign seats to users
  - `OrganizationController::unAssignSeat()` - Remove seat assignment
  - `LicenseController::getTypes()` - Get seat types
  - `LicenseController::getTerms()` - Get subscription terms

#### ❓ NEEDS VERIFICATION
- **Settings Configuration Screen**
  - ⚠️ Found `getNameFormats()` endpoint in OrganizationController
  - Need to verify: Is there a timezone setter? Date format setter?
  - Need to check: Is there a Settings UI for these?

- **Email Verification Flow**
  - ❓ No evidence of email verification logic in organization setup
  - ❓ No verification email sending/confirmation UI found
  - Need to check: SignUpController for verification logic

- **Welcome Modal**
  - Found `OnboardingText.vue` component in dashboard
  - ❓ Is this shown to Owners? What does it contain?
  - ❓ Is there a role-specific welcome for different roles?

- **Subscription Overview Widget**
  - Found `getSeatStats()` and `getSeatActivationCount()` endpoints
  - ❓ Are these displayed on Owner dashboard?
  - ❓ Is there a "seats expiring soon" warning?

- **Auto-Renewal Setup**
  - Found `enableAutoRenew()` and `disableAutoRenew()` APIs
  - ❓ Is there an onboarding prompt to enable auto-renew?
  - ❓ Is the cost/impact explanation clear?

#### ❌ NOT FOUND / UNCLEAR
- **Billing Email Verification**
  - No clear evidence of verification flow in organization setup
  - May be handled in SignUp, not Owner onboarding

- **Owner-Specific Onboarding Checklist**
  - No dedicated "Owner Onboarding Checklist" UI found
  - ❓ Is this implemented as a dashboard widget?

---

## 👤 SECTION 2: EMPLOYEE ONBOARDING STRATEGY

### What the Strategy Says Should Happen:
1. Welcome modal
2. Profile confirmation (pre-filled by HR)
3. Choice to take tour or explore
4. Interactive tour highlighting: Clock In, Schedule, Leave Balance
5. "Getting Started" checklist on dashboard

### What We Found in the Code:

#### ✅ LIKELY IMPLEMENTED
- **Core Employee Features Exist**
  - Clock in/out functionality (Timekeeping module)
  - Schedule viewing
  - Leave balance checking
  - These are all in the source code

#### ❓ NEEDS VERIFICATION
- **Welcome Modal for New Employees**
  - ❓ Is there an employee-specific welcome modal?
  - ❓ Does it appear on first login?

- **Profile Confirmation Screen**
  - ❓ Is employee profile pre-filled by HR?
  - ❓ Does a confirmation screen appear on first login?

- **Interactive Tour/Onboarding Guide**
  - ❓ Are there tooltips that highlight Clock In button?
  - ❓ Are there step-by-step guidance overlays?

- **Getting Started Checklist on Dashboard**
  - ❓ Is there a persistent checklist widget?
  - ❓ Does it track progress?

---

## 👨‍💼 SECTION 3: MANAGER ONBOARDING STRATEGY

### What the Strategy Says Should Happen:
1. Welcome modal about manager responsibilities
2. Team overview showing direct reports
3. Pending requests indicator
4. Schedule overview
5. Getting Started checklist

### What We Found in the Code:

#### ✅ LIKELY IMPLEMENTED
- **Team Management**
  - Team listing exists (`/views/people/my-team/`)
  - Employee cards with details
  - Employee list view

- **Request Management**
  - Approvals functionality exists
  - Leave request approval workflow

#### ❓ NEEDS VERIFICATION
- **Welcome Modal for Managers**
  - ❓ Is there a manager-specific welcome?

- **Dashboard Widgets**
  - ❓ Are there pending request indicators?
  - ❓ Is team overview prominent?

---

## 👨‍💻 SECTION 4: HR ADMIN ONBOARDING STRATEGY

### What the Strategy Says Should Happen:
1. System initialization wizard
2. Define leave policies
3. Create departments
4. Add first users
5. Assign managers
6. Configure work schedules
7. Payroll basics setup

### What We Found in the Code:

#### ✅ IMPLEMENTED
- **Leave Policy Management**
  - Leave policies, types, accruals exist in code
  - Leave policy configuration endpoints available

- **Department Management**
  - Department model and CRUD operations exist

- **User Management**
  - User creation, role assignment, access group assignment

- **Schedule Management**
  - Shift/schedule configuration exists

- **Payroll Configuration**
  - Payroll settings and period management

#### ❓ NEEDS VERIFICATION
- **System Initialization Wizard**
  - ❓ Is there a step-by-step wizard for HR Admin first login?
  - ❓ Does it guide through all required setup?

- **Setup Checklist**
  - ❓ Is there a checklist tracking setup progress?

---

## 🔐 SECTION 5: ROLE-BASED ACCESS & PERMISSIONS

### What the Strategy Assumes:
- Owner can manage organization and billing
- HR Admin can manage all settings
- Manager can manage own team
- Employee can only view own data

### What We Found in the Code:

✅ **Gate/Policy system exists**
- `Gate::authorize('view', $organization)`
- `Gate::authorize('manage', BizObjectsSlug)`
- Permissions are checked via BizObjects and Actions

✅ **Access Groups implemented**
- Access group seeder shows: Owner, Manager, HR Admin, Employee
- BizObject permissions assigned to each group

---

## 📊 FINDINGS MATRIX

| Feature | Strategy Description | Code Status | Verification Needed |
|---------|----------------------|-------------|---------------------|
| **Owner: Org Profile Setup** | Upload logo, enter company details | ✅ Implemented | Verify UI/UX |
| **Owner: Billing Email Verify** | Email verification with retry | ❓ Unknown | Find verification logic |
| **Owner: Settings (Timezone, Date)** | Settings wizard | ⚠️ Partial | Verify UI exists |
| **Owner: Welcome Modal** | Role-specific intro | ❓ Unknown | Check OnboardingText.vue |
| **Owner: Seat Assignment** | Quick assign seats to team | ✅ Implemented | Verify UI/flow |
| **Owner: Seat Stats Dashboard** | Show usage, expiry dates | ✅ APIs exist | Verify dashboard display |
| **Owner: Auto-Renew Prompt** | Encourage auto-renewal setup | ❓ Unknown | Check for UI prompt |
| **Employee: Welcome Modal** | Brief greeting + setup button | ❓ Unknown | Verify implementation |
| **Employee: Profile Confirm** | Pre-filled profile verification | ❓ Unknown | Check implementation |
| **Employee: Interactive Tour** | Tooltip-based walkthrough | ❓ Unknown | Check for tour system |
| **Employee: Clock In Prompt** | "Clock in now?" when in shift time | ❓ Unknown | Verify logic |
| **Employee: Getting Started Checklist** | Persistent dashboard widget | ❓ Unknown | Check dashboard |
| **Manager: Welcome Modal** | Manager-specific intro | ❓ Unknown | Verify implementation |
| **Manager: Team Overview** | Direct reports list | ✅ Implemented | Check dashboard prominence |
| **Manager: Pending Requests** | Visual indicator of pending approvals | ❓ Unknown | Check dashboard |
| **HR Admin: Setup Wizard** | Step-by-step initialization | ⚠️ Partial | Find wizard implementation |
| **HR Admin: Checklist** | Progress tracking for setup | ❓ Unknown | Check implementation |

---

## 🎯 KEY QUESTIONS FOR DEVELOPMENT TEAM

### High Priority
1. **Email Verification**: Where is the email verification flow for owner billing contact?
2. **Onboarding Modals**: Which modals are shown on first login? Are they role-specific?
3. **Onboarding Checklists**: Where are the "Getting Started" checklists implemented?
4. **Guided Tours**: Is there a tooltip/tour system showing new users how to use features?

### Medium Priority
5. **Settings Wizard**: Is there a UI for configuring timezone and date format?
6. **Dashboard Widgets**: What widgets appear on each role's dashboard?
7. **Welcome Content**: What does the OnboardingText.vue component display?
8. **Role-Specific Flows**: Are there different onboarding experiences per role?

### Low Priority
9. **Auto-Renew UI**: How is auto-renewal setup presented to owners?
10. **Seat Cost Calculation**: Is estimated cost shown before assigning seats?

---

## ⚠️ POTENTIAL GAPS IN STRATEGY

### Gap 1: Email Verification Not Clear
**Issue**: Owner onboarding strategy mentions "verify billing email" but no verification logic found
**Impact**: Owner may not understand billing email importance
**Recommendation**: Check if verification is handled in SignUp or Organization setup

### Gap 2: Welcome Modals May Not Be Implemented
**Issue**: Strategy assumes role-specific welcome modals; `OnboardingText.vue` found but unclear what it does
**Impact**: New users may not get proper orientation
**Recommendation**: Verify if modals are implemented and if they're role-specific

### Gap 3: Interactive Tours Not Found
**Issue**: Strategy describes tooltips and interactive tours; no tour system found in code
**Impact**: Users don't get in-context guidance
**Recommendation**: Check if there's a tour/onboarding library (e.g., Shepherd.js, Driver.js)

### Gap 4: Settings Configuration Unclear
**Issue**: Strategy mentions "Settings wizard" for timezone/date format; only `getNameFormats()` found
**Impact**: Unclear if owner can actually change timezone during onboarding
**Recommendation**: Verify OrganizationView.vue has timezone selector

### Gap 5: Onboarding Checklists Not Found
**Issue**: Strategy describes persistent checklists on dashboards; not found in code
**Impact**: Users don't have clear next steps
**Recommendation**: Check if checklists are implemented as dashboard widgets

---

## ✅ VALIDATION CHECKLIST

Use this checklist to systematically verify the onboarding strategy:

### Owner Onboarding
- [ ] **Company Profile Setup** - Is there a form to edit org name/logo/address?
- [ ] **Settings Configuration** - Can owner change timezone, date format, name format?
- [ ] **Billing Verification** - Is there an email verification flow?
- [ ] **Seat Assignment** - Can owner assign first seat easily?
- [ ] **Auto-Renewal** - Is there a prompt to enable auto-renew?
- [ ] **Welcome Modal** - Does owner see an intro modal on first login?
- [ ] **Checklist/Progress** - Is there a checklist tracking setup progress?

### Employee Onboarding
- [ ] **Welcome Modal** - Does employee see role-specific welcome?
- [ ] **Profile Confirmation** - Is profile pre-filled and asking for confirmation?
- [ ] **Tour/Interactive Guide** - Can employee take a guided tour?
- [ ] **Clock In Prompt** - Does system suggest "Clock in now" during shift time?
- [ ] **Getting Started Checklist** - Is there a persistent checklist on dashboard?

### Manager Onboarding
- [ ] **Welcome Modal** - Does manager see role-specific welcome?
- [ ] **Team Overview** - Is team list displayed prominently?
- [ ] **Pending Requests** - Is there a visual indicator of pending approvals?
- [ ] **Getting Started Checklist** - Is there a manager checklist?

### HR Admin Onboarding
- [ ] **Setup Wizard** - Is there step-by-step initialization wizard?
- [ ] **Policy Setup Guidance** - Is there help for configuring leave policies?
- [ ] **User Creation Guide** - Is there a form for adding first users?
- [ ] **Getting Started Checklist** - Is there a checklist?

---

## 📝 NEXT STEPS

1. **Run Verification Checks** (1-2 hours)
   - Open each UI mentioned in strategy
   - Verify features work as described
   - Document any discrepancies

2. **Check for Missing Implementations** (2-3 hours)
   - Search codebase for "onboarding" related components
   - Check if libraries like Shepherd.js are included
   - Look for dashboard widget implementations

3. **Update Strategy Documentation** (2-3 hours)
   - Update sections that don't match implementation
   - Add implementation details from actual code
   - Remove or revise features that aren't coded

4. **Identify Implementation Gaps** (1-2 hours)
   - Create list of features in strategy not in code
   - Prioritize by impact (Owner > HR Admin > Manager > Employee)
   - Create implementation backlog if needed

5. **Create Updated Walkthroughs** (3-4 hours)
   - Update walkthrough specs based on actual UI
   - Add screenshots/recordings of actual flows
   - Test walkthroughs with real users

---

## 🎓 Recommendation

**Before using onboarding strategy for client training:**
1. Verify all features actually exist in the product
2. Update documentation with actual UI paths and flows
3. Add implementation notes for developers
4. Test onboarding experience as a real new user

**Don't assume** features in the strategy are implemented. Verify each one.

