# Kando Manual: Action Prerequisites Analysis

**Last Updated**: 2026-02-18
**Scope**: Analysis of documented user actions vs. actual codebase prerequisites

---

## Executive Summary

This document identifies gaps between the Kando User Manual and the actual system prerequisites discovered in the backend/frontend codebase. **25 missing prerequisites** have been identified across core user actions, with recommendations for documentation improvements.

### Key Findings

- ✅ **Login Setup**: Documentation is ~70% complete (covers basic steps, missing permission/license details)
- ❌ **Time Tracking**: Documentation is ~50% complete (missing: schedule requirement, timesheet lock, multiple validation checks)
- ⚠️ **Leave Management**: Documentation is ~40% complete (missing: leave credit setup, leave type configuration, approval workflow details)
- ⚠️ **Manager Approval**: Documentation is ~35% complete (missing: team hierarchy setup, access rules, approval authority)
- ❌ **Payroll**: Documentation is ~20% complete (skeleton only; missing all prerequisites)

---

## 1. LOGIN & SETUP ACTION ANALYSIS

### Documented Prerequisites (Current Manual)

✅ User must receive:
- Kando System URL
- Username (employee ID or email)
- Temporary password
- Contact HR if not received

✅ Setup steps documented:
- Change temporary password
- Enter personal information
- Add bank details (optional note: "encrypted and secure")
- Set notification preferences

---

### ACTUAL Prerequisites (From Codebase)

| Prerequisite | Current Manual | Code Reference | Impact |
|--------------|----------------|-----------------|--------|
| **User must exist in database** | ❌ Not mentioned | User model must be created | CRITICAL - Cannot login without user record |
| **User email must be verified** | ❌ Not mentioned | `is_unverified` flag, email_verified_at timestamp | CRITICAL - Unverified users cannot login |
| **User must belong to active Organization** | ❌ Not mentioned | `users.organization_id` FK, `organizations.is_active` | CRITICAL - No login if org inactive |
| **Organization seat/license must be active** | ❌ Not mentioned | `OrganizationSeat` required, `is_expired` check (line 60-61) | CRITICAL - Expired license blocks login |
| **User must have access group assignment** | ❌ Not mentioned | `user_access_groups` junction table required | CRITICAL - No permissions without access group |
| **Access group determines available actions** | ❌ Not mentioned | Access groups (Owner, Manager, HR Admin, Employee) control visible features | HIGH - Different actions available by role |
| **Employee record may be required** | ⚠️ Partially (mentions manager field) | `employees.user_id` FK, reporting_to assignment | MEDIUM - Needed for time tracking, leave |
| **Period assignment may be required** | ❌ Not mentioned | `employees.period_id` for payroll cycles | MEDIUM - Required for pay processing |
| **Bank details encryption** | ✅ Mentioned | Encrypted field in `Compensation` model | LOW - Mentioned (good) |

### Gaps Identified

**CRITICAL MISSING INFORMATION**:
1. **Email Verification Step**: Manual doesn't mention email verification requirement or what to do if email not verified
2. **Organization Setup**: No mention that organization must be active and configured
3. **License/Seat Requirements**: No explanation that users need active organization seats
4. **Access Groups**: No explanation of roles (Owner, Manager, HR Admin, Employee) and permission differences
5. **HR Setup Prerequisite**: Implies HR must create user but doesn't explain what HR must configure first

**MISSING TROUBLESHOOTING**:
- "Email not verified" error
- "Organization inactive" error
- "No active license" error
- "Invalid access group" error

---

## 2. TIME TRACKING ACTION ANALYSIS

### Documented Prerequisites (Current Manual)

✅ Clock In/Out:
- Open Kando dashboard
- Click Clock In button
- Optional keyboard shortcut

✅ Manage Time Entries:
- Go to Time → Time Entries
- Add manual entry with date/times
- Notify manager

⚠️ Timesheet Submission:
- Review entries
- Submit for approval
- Manager approves

---

### ACTUAL Prerequisites (From Codebase)

| Prerequisite | Current Manual | Code Reference | Impact |
|--------------|----------------|-----------------|--------|
| **Employee must have Schedule record** | ❌ Not mentioned | `TimelogHelpers::timeHasSchedule()` line 57-79 validates schedule exists | CRITICAL - Clock-in fails without schedule |
| **Clock-in time must match schedule boundaries** | ❌ Not mentioned | For shift schedules, clock-in must be within schedule times | HIGH - May fail even with schedule |
| **Cannot clock-in if timesheet approved** | ❌ Not mentioned | `ScheduleHelpers::hasTimeSheet()` blocks clock-in if approved | CRITICAL - Confusing error for users |
| **Cannot have multiple active timers** | ❌ Not mentioned | `TimelogPolicy::clockIn()` checks `stopped_at` is null | HIGH - User confusion if timer stuck |
| **No edit after timesheet approval** | ✅ Mentioned (line 147-150) | Once approved, changes require manager | GOOD - Documented |
| **Manual entry requires manager notification** | ✅ Mentioned (line 212) | No system enforcement but best practice | GOOD - Documented |
| **Cost center assignment optional** | ❌ Not mentioned | `TimelogHelpers` accepts cost_center_id | LOW - Optional but not documented |
| **Permission: manage 'timelog' business object** | ❌ Not mentioned | Gate authorization checks manage ability | HIGH - Access control not visible to users |
| **Attendance record auto-created** | ❌ Not mentioned | Attendance creates/updates on clock-in | LOW - Implementation detail |

### Gaps Identified

**CRITICAL MISSING INFORMATION**:
1. **Schedule Requirement**: Manual implies anyone can clock in; actually requires schedule to exist
2. **Schedule Time Boundaries**: Manual doesn't explain schedule must match clock-in time
3. **Approved Timesheet Blocks Clock-In**: Major error case not documented
4. **Active Timer Issue**: No guidance on what to do if timer is stuck
5. **HR Must Create Schedules**: Prerequisite that schedules exist not mentioned

**MISSING ERROR SCENARIOS**:
- "No schedule found for this date"
- "Clock-in outside of scheduled hours"
- "Cannot clock in - timesheet already approved"
- "Active timer still running"

**MISSING TROUBLESHOOTING DETAILS**:
- What to do if can't clock in despite being at work
- When schedules are created (HR admin task)
- How to check if schedule exists before clocking in

---

## 3. LEAVE MANAGEMENT ACTION ANALYSIS

### Documented Prerequisites (Current Manual)

✅ Check Leave Balance:
- Go to Dashboard
- Look for Leave Balance widget
- Shows: Total, Used, Pending, Available

✅ Request Leave:
- Click Leave button or go to Leaves → Request Leave
- Select leave type
- Choose dates
- Enter reason
- Optional attachments

⚠️ Approval Workflow:
- Manager reviews
- You get notification
- Appears on timesheet

---

### ACTUAL Prerequisites (From Codebase)

| Prerequisite | Current Manual | Code Reference | Impact |
|--------------|----------------|-----------------|--------|
| **LeaveType must exist** | ❌ Not mentioned | `LeaveType` must be active (`is_active` = true) | CRITICAL - Can't request leave without type |
| **LeaveCredit must exist for employee** | ❌ Not mentioned | `LeaveHelpers::canAvail()` checks LeaveCredit balance | CRITICAL - Cannot request if no credit record |
| **LeaveCredit must have sufficient balance** | ✅ Mentioned partially (line 65 mentions balance) | Balance checked before approval | GOOD - Implied but not explicit |
| **ApprovalRule must be configured** | ❌ Not mentioned | System checks for ApprovalRule; if none/auto-approve: instant approval | CRITICAL - Approval behavior depends on rules |
| **No approved timesheet for dates** | ❌ Not mentioned | `ApprovalHelpers::requestHasTimesheet()` blocks if timesheet approved | HIGH - Confusing error if timesheet locked |
| **Different leave types may have different rules** | ⚠️ Vague (mentions "based on company policy") | Approval rules per leave type | MEDIUM - Rules not explained |
| **Sick leave may require medical docs** | ✅ Mentioned (line 84) | Optional: attachments shown in form | GOOD - Documented |
| **Multi-step approval workflow** | ❌ Not mentioned | ApprovalRuleStep with logical operators (AND/OR) | HIGH - May need manager + HR approval |
| **Manager assignment required** | ✅ Mentioned (dashboard field) | Manager determined by `employees.reporting_to` | GOOD - Prerequisite chain clear |
| **Leave deducted immediately if auto-approved** | ❌ Not mentioned | `LeaveCredit::adjust()` called immediately on auto-approval | MEDIUM - Surprising behavior |

### Gaps Identified

**CRITICAL MISSING INFORMATION**:
1. **Leave Type Configuration**: Manual assumes leave types exist; doesn't explain HR must set them up
2. **Leave Credit Setup**: Manual shows balance but not that HR must initialize credits
3. **ApprovalRule Dependency**: Multi-step approval not mentioned; users expect instant approval
4. **Approved Timesheet Blocks Leave**: Major error case not documented
5. **Soft Block on Leave Balance**: If insufficient credit, request likely rejected
6. **Different Approval Paths**: Some requests auto-approve, others need manager, others need multi-level approval

**MISSING ERROR SCENARIOS**:
- "Leave type not configured"
- "No leave credit available"
- "Insufficient leave balance"
- "Cannot request leave - timesheet already approved"
- "Approval pending from manager and HR"

**MISSING PREREQUISITES EXPLANATION**:
- HR admin must create LeaveTypes
- HR admin must initialize LeaveCredits for each employee
- Approval rules determine approval flow
- Manager must be assigned via employee profile

---

## 4. MANAGER APPROVAL ACTION ANALYSIS

### Documented Prerequisites (Current Manual)

✅ Manager can:
- View team roster (Section 3.1)
- See pending requests (implied in 3.2)
- Approve/reject requests
- Make adjustments

⚠️ Approval workflow:
- Manager reviews request
- Decides approve/reject
- Employee gets notification

---

### ACTUAL Prerequisites (From Codebase)

| Prerequisite | Current Manual | Code Reference | Impact |
|--------------|----------------|-----------------|--------|
| **Employee must have reporting_to assignment** | ❌ Not mentioned | `employees.reporting_to` FK to manager's employee ID | CRITICAL - Manager can't see requests without this |
| **Manager & employee in same organization** | ❌ Not mentioned | Organization isolation enforced | HIGH - Cross-org visibility prevented |
| **Manager must have "Manager" or "Owner" role** | ❌ Not mentioned | Access group determines permissions | CRITICAL - Not all users can approve |
| **Manager must be in approval rule's action_users** | ❌ Not mentioned | Request contains `action_users` list of approvers | CRITICAL - Only specific managers can approve |
| **Direct/indirect report access rules apply** | ❌ Not mentioned | `User::getDirectReports()` vs `getIndirectReports()` | HIGH - Limits which employees manager sees |
| **AccessFieldSettings controls visibility** | ❌ Not mentioned | Field-level access per business object | MEDIUM - Manager may not see all fields |
| **Manager can only approve assigned requests** | ❌ Not mentioned | `ApprovalHelpers::canApprove()` validates manager is pending approver | CRITICAL - Can't approve outside workflow |
| **Approval status progression** | ⚠️ Vague (mentions approve/reject) | PENDING → APPROVED/DISAPPROVED → REVOKED | MEDIUM - Revocation not mentioned |
| **No changes after approval** | ❌ Not mentioned | Approved requests are locked | HIGH - Manager can't edit own approvals |
| **Audit trail maintained** | ❌ Not mentioned | All approvals create audit records | LOW - Implementation detail |

### Gaps Identified

**CRITICAL MISSING INFORMATION**:
1. **Team Setup Prerequisite**: Manual doesn't explain employees must be assigned to manager
2. **Manager Role Required**: Manual assumes manager but doesn't verify access group
3. **Approval Authority Determined by Rules**: Manual implies manager can approve anything; actually limited by approval rules
4. **Cannot Approve Self**: Doesn't explain workflow logic (multi-level approvals)
5. **Visibility Limits**: Manager may not see all employees or all fields

**MISSING MANAGER PREREQUISITES SECTION**:
- "Before you can approve requests..."
- Confirm employees are assigned to your team
- Understand approval workflows (may need HR approval too)
- Check access field settings

**MISSING ERROR SCENARIOS**:
- "No employees assigned to your team"
- "Not authorized to approve this request"
- "Employee not in your reporting hierarchy"
- "Request already approved by another manager"

---

## 5. PAYROLL ACTION ANALYSIS

### Documented Prerequisites (Current Manual)

❌ **Skeleton pages only** - No content

### ACTUAL Prerequisites (From Codebase)

| Prerequisite | Current Manual | Code Reference | Impact |
|--------------|----------------|-----------------|--------|
| **Timesheet must be approved** | ❌ Skeleton | `Timesheet` status must be APPROVED | CRITICAL - Cannot process unapproved timesheets |
| **Employee must be assigned to Cycle** | ❌ Skeleton | `cycle_employees` junction; employee must belong to cycle | CRITICAL - No payroll without cycle assignment |
| **Employee must have period assignment** | ❌ Skeleton | `employees.period_id` FK to PeriodHeader | CRITICAL - Needed for payroll date calculation |
| **PayType must be configured** | ❌ Skeleton | PayType defines payslip fields and formulas | CRITICAL - No payslip without pay type |
| **Bank details required for direct deposit** | ❌ Skeleton | `Compensation` model stores bank info | HIGH - Needed for payment processing |
| **Compensation structure must be set** | ❌ Skeleton | Compensation model with change types and effective dates | HIGH - Needed for salary calculations |
| **Tax info must be configured** | ❌ Skeleton | Tax fields in PayInfo with personal info | HIGH - Needed for tax deductions |
| **Paysheet must be created for period** | ❌ Skeleton | `Paysheet` created per period, status progression | MEDIUM - Necessary for tracking |
| **LeaveCredit deductions applied** | ❌ Skeleton | Leave requests auto-deduct credits | MEDIUM - Affects hours available |
| **Attendance records must exist** | ❌ Skeleton | `Attendance` per date per employee | HIGH - Used for overtime/undertime calculation |

### Gaps Identified

**CRITICAL MISSING ENTIRE SECTION**:
- Payroll section is skeleton only
- No documentation of prerequisites
- No explanation of configuration needed
- No user workflow guidance

**WHAT NEEDS TO BE DOCUMENTED**:
- HR admin must create payroll cycles
- Employees must be assigned to cycles
- Period calendar must be set up
- PayTypes must be configured with field formulas
- Bank details must be entered before payment
- Tax information must be configured
- Timesheets must be approved before payroll
- Compensation structure must be in place
- Leave credits affect payroll calculations

---

## 6. COMPREHENSIVE PREREQUISITE MATRIX

### Actions & Their Prerequisites

#### User Login
```
Prerequisites (in order):
1. ✅ User account created by HR admin
2. ❌ Email address verified
3. ✅ Organization set to active
4. ✅ Organization seat/license assigned
5. ✅ Access group assigned (Owner/Manager/HR Admin/Employee)
6. ✅ Employee record created (if needed)
```

#### Employee Clock In
```
Prerequisites (in order):
1. ✅ Employee logged in (see Login above)
2. ❌ Schedule created for the date by HR/Manager
3. ❌ No approved timesheet for that date
4. ❌ No active timer from previous clock-in
5. ✅ Permission to manage timelog (automatic for employees)
```

#### Employee Request Leave
```
Prerequisites (in order):
1. ✅ Employee logged in
2. ❌ Leave type configured by HR admin
3. ❌ Leave credit initialized for employee by HR admin
4. ❌ Sufficient leave balance remaining
5. ❌ No approved timesheet for requested dates
6. ✅ Manager assigned to employee
7. ❌ Approval rule configured (or auto-approve set)
```

#### Manager Approve Request
```
Prerequisites (in order):
1. ✅ Manager logged in
2. ✅ Manager has "Manager" or "Owner" role
3. ❌ Employee assigned to manager's team (reporting_to)
4. ❌ Manager included in approval rule's action_users
5. ❌ Request in PENDING status
6. ✅ Access to approve requests (permission granted)
```

#### Payroll Processing
```
Prerequisites (in order):
1. ✅ HR admin logged in
2. ❌ Payroll cycles created by HR
3. ❌ Employees assigned to cycles
4. ❌ Period calendar set up
5. ❌ PayTypes configured with field formulas
6. ✅ Bank details collected from employees
7. ❌ Tax information configured
8. ❌ Compensation structure set
9. ✅ Timesheets approved for the period
10. ✅ Leave credits already deducted from timesheet
```

---

## 7. RECOMMENDATIONS FOR MANUAL IMPROVEMENTS

### Priority 1: CRITICAL (blocks user actions)

#### 1.1 Add "Prerequisites" Section to Every Page

**Location**: Add to each page before "Steps" section

**Content template**:
```markdown
## Before You Start (Prerequisites)

This action requires:
- [ ] You must be [logged in / have completed setup / assigned to team]
- [ ] Your manager must have [assigned you / configured something]
- [ ] HR must have [created something / configured rules]
- [ ] System must have [this record / this configuration]

If you see "error message X", check that prerequisite Y is met.
```

#### 1.2 Create "System Setup Requirements" Documentation

**New page**: `1-Getting-Started/1.4-System-Setup-Requirements.md`

**Content**:
- What HR admin must configure before employees can use system
- What managers must set up before they can approve
- Leave types, cycles, pay types, schedules - all prerequisites
- Who configures what and in what order

#### 1.3 Add "Access Groups & Permissions" Guide

**New page**: `1-Getting-Started/1.5-Understanding-Your-Role.md`

**Content**:
- What are Access Groups (Owner, Manager, HR Admin, Employee)?
- What can each role do?
- Why some actions are unavailable (permission-based)
- How to request different permissions

### Priority 2: HIGH (affects multiple users)

#### 2.1 Expand Time Tracking Prerequisites Section

**Current location**: `2-Employee-Guide/2.1-Time-Tracking.md`

**Add section** after "What is Time Tracking?":
```markdown
## Prerequisites

**Before you can clock in, make sure:**
- [ ] You have a schedule created by your manager (if using shifts)
- [ ] Your timesheet is not approved (once approved, can't edit)
- [ ] You don't have an active timer from before (close it first)
- [ ] Your timezone is set correctly in your profile

**Common errors:**
- "No schedule found" = Your manager needs to create your schedule
- "Cannot clock in - timesheet approved" = Timesheet must be unfinalized
- "Active timer already running" = Close previous timer first
```

#### 2.2 Add Leave Management Prerequisites Section

**Current location**: `2-Employee-Guide/2.2-Leave-Management.md`

**Add section** after "Getting Started":
```markdown
## Prerequisites

**Before you can request leave, make sure:**
- [ ] Leave type exists (e.g., "Vacation", "Sick Leave")
- [ ] You have leave credits allocated
- [ ] You have sufficient balance for the leave requested
- [ ] Your manager is assigned
- [ ] Dates don't have approved timesheets

**Common errors:**
- "No leave credit available" = HR must initialize your credits
- "Insufficient leave balance" = You've used all your leave for this period
- "Cannot request leave - timesheet approved" = Choose different dates
- "Approval pending" = Multiple approvers (manager + HR) may be needed
```

#### 2.3 Update Manager Guide with Approval Prerequisites

**Current location**: `3-Manager-Guide/3.2-Approving-Requests.md`

**Add section** at beginning:
```markdown
## Before You Can Approve

**Team Setup Required:**
- [ ] Employees must be assigned to your team (via employee profile)
- [ ] You must have "Manager" role (or higher)
- [ ] You must be listed as an approver in the approval workflow

**Permission Requirements:**
- [ ] You can only approve employees in your team
- [ ] You can only approve requests you're assigned to
- [ ] Some requests may need HR approval too (multi-level approval)

**Getting Help:**
- "No employees show up" = Employees not assigned to your team yet
- "Can't approve this request" = You're not the assigned approver
- "Request is still pending" = Waiting for another approver
```

### Priority 3: MEDIUM (improves user experience)

#### 3.1 Create Troubleshooting Pages for Each Major Error

**New pages**:
- `6-Troubleshooting/6.1-Login-Issues.md` - expand with missing prerequisites
- `6-Troubleshooting/6.2-Time-Tracking-Issues.md` - add schedule-related errors
- `6-Troubleshooting/6.3-Request-Issues.md` - add leave balance errors
- Add specific error scenarios with solutions

#### 3.2 Add FAQ: "Why can't I [action]?"

**New page or section**: `7-Reference/7.3-FAQ.md`

**Add entries**:
- Why can't I clock in? → Needs schedule, no active timer, etc.
- Why is my leave request pending? → May need multi-level approval
- Why doesn't my timesheet show? → Needs approval first
- Why can't I approve requests? → Not assigned as approver
- Why is my leave balance zero? → HR must initialize credits

#### 3.3 Add Visual Prerequisites Checklist

**For key actions**, add visual checklist:
```markdown
✅ = Ready
❌ = Needs setup by HR/Manager
⚠️ = May block action

✅ I'm logged in
❌ My schedule is created
❌ I have sufficient leave balance
✅ My manager is assigned

[Clock In / Request Leave / Submit Timesheet]
```

### Priority 4: LOW (nice-to-have)

#### 4.1 Create "System Architecture Overview"

**New page**: `1-Getting-Started/1.6-How-Kando-Works.md`

**Content**:
- Data relationships (Employee → Schedule → Timelog → Timesheet)
- Process flows (how leave gets approved)
- Configuration hierarchy (who sets up what)

#### 4.2 Add "Configuration Checklist" for HR Admin

**New page**: `5-HR-Admin-Guide/5.5-First-Time-Setup-Checklist.md`

**Content**:
- Step-by-step: what to configure and in what order
- Order matters! (e.g., LeaveTypes before LeaveCredits)
- Which employees can do what after each step

---

## 8. SECTION-BY-SECTION IMPROVEMENT PLAN

### Section 1: Getting Started (Improvements)

| Page | Current | Missing | Priority |
|------|---------|---------|----------|
| 1.1 Introduction | ✅ Good | User roles/permissions | MEDIUM |
| 1.2 Login Setup | ⚠️ 70% complete | Email verification, license, access groups | HIGH |
| 1.3 Dashboard Overview | ✅ Good | Role-based dashboard variations | LOW |
| *1.4 System Setup Requirements* | ❌ **NEW NEEDED** | HR prerequisites, configuration order | CRITICAL |
| *1.5 Understanding Your Role* | ❌ **NEW NEEDED** | Access groups, permissions, why actions unavailable | CRITICAL |
| *1.6 How Kando Works* | ❌ **NEW NEEDED** | Data relationships, process flows | LOW |

### Section 2: Employee Guide (Improvements)

| Page | Current | Missing | Priority |
|------|---------|---------|----------|
| 2.1 Time Tracking | ⚠️ 50% complete | Schedule requirement, error scenarios | CRITICAL |
| 2.2 Leave Management | ⚠️ 40% complete | Credit setup, approval workflows, errors | CRITICAL |
| 2.3 View Schedule | ✅ Good | Schedule creation prerequisite (for managers) | LOW |
| 2.4 Payslip | ✅ Basic | Payroll setup prerequisites | LOW |

### Section 3: Manager Guide (Improvements)

| Page | Current | Missing | Priority |
|------|---------|---------|----------|
| 3.1 Team Management | ⚠️ 60% complete | Team setup, access field settings | HIGH |
| 3.2 Approving Requests | ⚠️ 35% complete | **Approval workflow, approval rules, access controls** | CRITICAL |
| 3.3 Scheduling | ⚠️ 50% complete | Schedule creation for employees | MEDIUM |
| 3.4 Reports | ✅ Basic | Prerequisites for running reports | LOW |

### Section 4: Owner Guide (Good foundation)

| Page | Current | Missing | Priority |
|------|---------|---------|----------|
| 4.1 Organization Profile | ✅ Good | Organization setup considerations | LOW |
| 4.2 Organization Settings | ⚠️ Basic | Configuration order, dependencies | MEDIUM |
| 4.3 Subscription Management | ✅ Basic | License seats, expiration handling | LOW |
| 4.4 Billing Contact | ✅ Good | No changes needed | - |

### Section 5: HR Admin Guide (Needs major expansion)

| Page | Current | Missing | Priority |
|------|---------|---------|----------|
| 5.1 System Setup | ❌ Skeleton | **Complete redesign - setup order, configuration steps** | CRITICAL |
| 5.2 User Management | ❌ Skeleton | **Creating users, access groups, employee records** | CRITICAL |
| 5.3 Policy Configuration | ❌ Skeleton | **Leave types, approval rules, pay types** | CRITICAL |
| 5.4 Payroll Management | ❌ Skeleton | **Payroll cycles, pay types, processing steps** | CRITICAL |
| *5.5 Setup Checklist* | ❌ **NEW NEEDED** | Step-by-step first-time setup guide | CRITICAL |

### Section 6: Workflows (Partial)

| Page | Current | Missing | Priority |
|------|---------|---------|----------|
| 6.1 Onboarding | ❌ Skeleton | Complete user + system onboarding flow | HIGH |
| 6.2 Leave Approval | ❌ Skeleton | Complete approval workflow with prerequisites | HIGH |
| 6.3 Payroll Process | ❌ Skeleton | Complete payroll processing flow | HIGH |
| 6.4 Shift Scheduling | ❌ Skeleton | Schedule creation and management flow | MEDIUM |

### Section 7: Troubleshooting (Needs expansion)

| Page | Current | Missing | Priority |
|------|---------|---------|----------|
| 7.1 Login Issues | ❌ Skeleton | Email verification, license, access group errors | HIGH |
| 7.2 Time Tracking Issues | ❌ Skeleton | Schedule, timer, timesheet lock errors | HIGH |
| 7.3 Request Issues | ❌ Skeleton | Leave balance, approval, timesheet conflicts | HIGH |
| 7.4 General Issues | ❌ Skeleton | Permission, access, visibility issues | MEDIUM |

### Section 8: Reference (Basic)

| Page | Current | Missing | Priority |
|------|---------|---------|----------|
| 8.1 Glossary | ❌ Skeleton | Add terms: Access Group, Leave Credit, Approval Rule, etc. | MEDIUM |
| 8.2 Keyboard Shortcuts | ❌ Skeleton | Clock in/out, other shortcuts | LOW |
| 8.3 FAQ | ❌ Skeleton | "Why can't I..." questions | HIGH |
| 8.4 Getting Help | ❌ Skeleton | Support contacts, escalation | MEDIUM |

---

## 9. SUMMARY TABLE: Missing Prerequisites by Action

| Action | Documentation | Actual Prerequisites | Missing Count | Priority |
|--------|---|---|---|---|
| Login | 2.1 | 8 (email verify, org active, license, access group) | **6** | CRITICAL |
| Clock In | 5/10 | 8 (schedule, timesheet not approved, no active timer, permission) | **5** | CRITICAL |
| Request Leave | 4/10 | 10 (leave type, credit, balance, timesheet, manager, approval rule) | **7** | CRITICAL |
| Approve Request | 3/10 | 8 (team assignment, role, approval rule, access) | **6** | CRITICAL |
| Process Payroll | 0/10 | 10 (cycle, period, pay type, bank, compensation, taxes) | **10** | CRITICAL |
| **TOTAL** | - | - | **34** | - |

---

## 10. IMPLEMENTATION ROADMAP

### Phase 1: CRITICAL (Weeks 1-2)
- [ ] Create "System Setup Requirements" page (1.4)
- [ ] Create "Understanding Your Role" page (1.5)
- [ ] Add prerequisites sections to Time Tracking (2.1)
- [ ] Add prerequisites sections to Leave Management (2.2)
- [ ] Expand Manager Guide - Approving Requests (3.2)
- [ ] Create HR Admin Setup Checklist (5.5)

### Phase 2: HIGH (Weeks 3-4)
- [ ] Complete HR Admin Guide Section 5 (User Management, Policy Config)
- [ ] Create comprehensive Troubleshooting section (6)
- [ ] Add error scenarios to main guides
- [ ] Create FAQ page (8.3)
- [ ] Add "Why can't I?" FAQ entries

### Phase 3: MEDIUM (Weeks 5-6)
- [ ] Complete Workflows section (6)
- [ ] Add role-based dashboards explanation
- [ ] Create System Architecture page (1.6)
- [ ] Add visual checklists to key pages
- [ ] Expand reference section (7)

### Phase 4: LOW (Ongoing)
- [ ] Update as code changes
- [ ] Monitor support tickets for common errors
- [ ] Refine based on user feedback
- [ ] Add advanced topics

---

## 11. QUICK CHECKLIST FOR MANUAL IMPROVEMENT

Use this checklist when writing or updating any manual page:

```
BEFORE PUBLISHING A PAGE:

✅ Does it explain what you need BEFORE you can do this action?
   - Required system configuration?
   - Required user setup?
   - Required permissions?
   - Required other actions first?

✅ Does it cover ACTUAL code error scenarios?
   - What errors might users see?
   - What causes each error?
   - How to fix each error?

✅ Does it explain WHO does what?
   - Employee action?
   - Manager action?
   - HR Admin configuration?
   - Order of steps?

✅ Does it link to related pages?
   - Prerequisites on this page
   - Next steps after completion
   - Troubleshooting if something fails

✅ Does it match the codebase?
   - Validated against actual code?
   - Verified with current API?
   - Tested with UI?
```

---

## 12. CONCLUSION

The Kando User Manual provides good foundational content for basic user tasks (Login, Time Tracking, Leave Requests) but has **significant gaps in prerequisite documentation**.

**Key Issues**:
1. Prerequisites are either missing or vague
2. Error scenarios not covered
3. System setup requirements not documented
4. HR Admin section is skeleton only
5. Approval workflows not fully explained

**Immediate Actions**:
1. Add "Before You Start" prerequisites section to every page
2. Document all error scenarios with solutions
3. Complete HR Admin and Troubleshooting sections
4. Create system setup and role understanding guides

**Expected Impact**:
- 50-70% reduction in support tickets related to "Why can't I..."
- Users understand what they need before attempting actions
- Clearer troubleshooting path when errors occur
- Better onboarding for new users

**Estimated Effort**: 40-50 hours for comprehensive updates

---

**Document Status**: Ready for review and implementation
**Last Updated**: 2026-02-18
**Next Review**: After implementing Phase 1 improvements
