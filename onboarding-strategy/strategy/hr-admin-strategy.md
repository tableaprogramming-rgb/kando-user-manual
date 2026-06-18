# HR Admin Onboarding Strategy

**Status**: ✅ Updated based on source code audit (June 2026)

## 🔑 Prerequisites
**Organization Owner has already completed:**
- ✅ Organization profile (name, logo, billing contact)
- ✅ Organization settings (timezone, date/time format)
- ✅ Verified email
- ✅ Assigned at least one seat to you (HR Admin)
- ✅ Organization system is ready

**You (HR Admin) now unblock Managers and Employees.**

---

## 🎯 Goal
Get the HR Admin to **Add users, configure leave policies, set up organizational structure, and enable managers** within the first 30-40 minutes.

## 👤 User Mindset
- "I've been assigned as HR Admin. Now what?"
- "How do I get employees into the system so they can clock in?"
- "What policies do I need to set up first?"
- "How do I organize departments and reporting structures?"
- "When can people actually start using the system?"

---

## 🗺️ The Actual "Happy Path" (Implementation Based)

### Phase 1: First Login (Onboarding Recognition)
When HR Admin logs in for the first time:
- ⚠️ **No setup wizard appears** (not found in code)
- **Dashboard shows** navigation menu with all available sections
- HR Admin must navigate to different areas to complete setup

### Phase 2: Initial Configuration (Recommended Order)

#### **Step 1: Configure Organization Departments** (~3-5 min)
**Navigate to**: Settings → Cost Centers / Organization
- **What it does**: Defines organizational structure (department/team/cost center)
- **Available actions**:
  - Add new cost center (department)
  - Assign cost center manager/head
  - Delete cost centers
  - Assign employees to cost centers
- **Critical field**: Cost center name (required)
- **Optional fields**: Description, manager assignment
- **UI**: CostCenterList.vue + CostCenterModal.vue
- **Note**: Called "Cost Center" in system but used as departments

#### **Step 2: Configure Leave Policies** (~5-8 min)
**Navigate to**: Settings → Configure Leaves
- **What it does**: Define annual leave, sick leave, and other leave types
- **Available actions**:
  - Create leave types (Annual, Sick, Personal, etc.)
  - Define leave policies (accrual, flexible, manual)
  - Set accrual rules (monthly, quarterly, annual)
  - Configure approval workflows for leave
  - Set carryover rules
  - Manual leave balance granting
- **Critical first setup**: Create at least:
  - Annual/Vacation Leave
  - Sick Leave
- **UI**: ConfigureLeaveList.vue with multiple modal components
- **Note**: Policies can be complex; plan ~10 mins for first-time setup

#### **Step 3: Configure Pay Periods** (~3-5 min)
**Navigate to**: Settings → Pay Periods / Payroll
- **What it does**: Define when payroll is calculated and processed
- **Available actions**:
  - Create pay periods (monthly, bi-weekly, weekly)
  - Define period start/end dates
  - Lock/unlock periods
  - Assign employees to periods
  - View payroll status by period
- **Critical fields**: Period name, start date, end date
- **Common examples**:
  - "June 2026" (Monthly)
  - "Week 1 - June 1-7, 2026" (Weekly)
  - "June 1-15, 2026" (Semi-monthly)
- **UI**: PeriodList.vue + PeriodFormModal.vue
- **Important**: Period configuration critical for payroll processing

#### **Step 4: Add First Employees** (~10-15 min per 5 employees)
**Navigate to**: People → My Team → Invite Employee
- **What it does**: Add users to the system with roles and access
- **UI**: InviteEmployeeModal.vue (multi-step form)
- **4-Step Process**:

  **Step 4.1 - Basic Information** (2-3 min)
  - Employee code (ID/badge number)
  - Full name (first, middle, last, suffix)
  - Email (required, validated)
  - Username (for login, required)
  - Password (system-generated or custom)
  - **Critical**: Email must be valid (system sends invitation)

  **Step 4.2 - Seat/Plan Selection** (1-2 min)
  - Select seat type (module needed - e.g., Timekeeping, Payroll, Both)
  - Select subscription term (Monthly, Annual, etc.)
  - Auto-renew checkbox
  - **Why needed**: Organization must assign seat per employee
  - **Cost impact**: Billing increases based on seat selection

  **Step 4.3 - Access Group Assignment** (2-3 min)
  - Select access group (Employee, Manager, HR Admin, Owner)
  - **Critical**: Employee must have access group to see anything
  - **Default**: "Employee" selected by default
  - **Manager setup**:
    - Select "Manager" access group for supervisors
    - Can assign multiple access groups to one user

  **Step 4.4 - Review & Finish** (1 min)
  - Review all information
  - Send invitation email to employee
  - Employee receives email with temporary password and login link

- **Key points**:
  - Seat assignment is mandatory (can't add employee without seat)
  - Access group is mandatory (determines system access)
  - Email sent automatically with login credentials
  - **Can add multiple employees one at a time** (no bulk import found in code)

#### **Step 5: Configure Shift Policy (Optional but Recommended)** (~5-10 min)
**Navigate to**: Settings → Shift Policies
- **What it does**: Define late arrival and undertime policies
- **Available actions**:
  - Create shift policies for late arrivals
  - Create undertime policies
  - Define grace periods
  - Set penalty amounts
  - Define basis for calculation (time-in, time-out, total hours)
- **Example policy**:
  - "Late after 5 minutes → Deduct hourly rate"
  - "Undertime after 30 mins → Deduct hourly rate × hours"
- **UI**: PolicyForm.vue and related components
- **Note**: Can be deferred to later; not blocking

#### **Step 6: Configure Approval Workflows** (~5-10 min)
**Navigate to**: Settings → Configure Approvals
- **What it does**: Define who approves leave, overtime, and other requests
- **Available actions**:
  - Create approval chains (who must approve what)
  - Multi-step approvals (Manager → HR Admin → Owner)
  - Define approval conditions
  - Route different request types to different approvers
- **Example**:
  - Leave requests: Manager approves first, then HR Admin
  - Overtime: Manager approves
- **UI**: NewView.vue + EditView.vue in configure-approval folder
- **Critical**: Must set up before managers can approve requests

#### **Step 7: Configure Access Groups (Optional)** (~5-10 min)
**Navigate to**: Settings → Access Groups
- **What it does**: Define what each role can see and do
- **Available actions**:
  - View default access groups (Owner, Manager, HR Admin, Employee)
  - Assign users to access groups
  - Create custom access groups (if needed)
  - View/assign specific permissions per group
- **Pre-configured groups**: System comes with 4 default groups
  - Owner (full access)
  - Manager (team management access)
  - HR Admin (system configuration access)
  - Employee (self-service access)
- **Note**: For most orgs, default groups are sufficient

---

## ✅ Actual Onboarding Milestones

| # | Milestone | Status | UI Location | Time |
|---|-----------|--------|------------|------|
| 1 | **Add Departments** | ✅ | Cost Centers | 3-5 min |
| 2 | **Configure Leave Policies** | ✅ | Configure Leaves | 5-8 min |
| 3 | **Create Pay Periods** | ✅ | Pay Periods | 3-5 min |
| 4 | **Add First Employees** | ✅ | People → My Team → Invite | 10-15 min |
| 5 | **Configure Shift Policies** | ✅ | Shift Policies | 5-10 min |
| 6 | **Setup Approval Workflows** | ✅ | Configure Approvals | 5-10 min |
| 7 | **Configure Access Groups** | ⚠️ | Access Groups | 5-10 min (optional) |
| 8 | **Setup Checklist** | ❌ | Not found | — |
| 9 | **Setup Wizard** | ❌ | Not found | — |

---

## 🎯 Actual Implementation Details

### What HR Admin Gets Access To (Right After Owner Setup)

#### **Core Configuration** (Settings Menu)
- Organization (view/edit profile, settings, subscriptions)
- Cost Centers (manage departments)
- Shift Policies (define late/undertime rules)
- Holiday Management (set statutory holidays)
- Pay Periods (define payroll periods)
- Access Groups (manage permissions)
- Configure Leaves (set leave policies)
- Configure Approvals (set approval workflows)
- Pay Types (if needed for payroll)
- Pay Groups (if needed for payroll)
- Night Differential (if applicable)
- Compliance (if organization uses AMS)

#### **People Management** (People Menu)
- My Team (view/manage direct reports)
  - Employee list
  - Employee details/profile
  - Invite new employee (multi-step form)
  - View organization chart
  - Manage compensation
  - Assign managers/supervisors

#### **Operational Areas**
- Timekeeping (view timelogs, create manual entries)
- Scheduling (create and manage shifts/schedules)
- Leave Requests (view/approve leave requests)
- Payroll (create and process paychecks)
- Documents (manage employee documents)

### What's NOT a "Setup Wizard"

**Important Note**: Unlike the strategy description, there is NO linear setup wizard in the actual implementation. Instead:
- HR Admin must navigate different settings pages individually
- No guided sequence of setup steps
- No checklist tracking progress
- HR Admin can do setup in any order

**What this means for training**:
- Need to guide HR Admin through the recommended sequence
- Can't rely on system to prevent mistakes (e.g., adding employees before setting up leave policies)
- Training becomes more critical to cover best practices

---

## 🚨 Common Pitfalls for HR Admins

| Mistake | Impact | Prevention |
|---------|--------|-----------|
| **Add employee without seat** | Employee can't login; blocking error | Explain seat requirement; system enforces |
| **Add employee without access group** | Employee has no system access | Mark as required; defaults to "Employee" |
| **Don't configure leave policies first** | Employees confused about leave rules | Set up leaves BEFORE adding employees |
| **Don't set pay period** | Can't run payroll; paysheet creation fails | Explain payroll dependency |
| **Add Manager role but no approval workflow** | Manager can't approve requests | Explain approval setup importance |
| **Wrong department assignment** | Wrong reporting structure; approval routing breaks | Verify cost center assignments |
| **Don't enable auto-renew on employee seats** | Risk of seat expiration and access loss | Recommend during employee addition |

---

## 💡 Actual Implementation Gaps

| Feature | Original Plan | Actual | Impact |
|---------|---------------|--------|--------|
| **Setup Wizard** | Step-by-step wizard | Navigate menus manually | Need stronger training guidance |
| **Policy Templates** | One-click policy templates | Must configure manually | More setup time needed |
| **Bulk Import** | Import employees from CSV | Add one at a time via modal | Slower for large orgs |
| **Setup Checklist** | Dashboard checklist | No checklist found | HR Admin must track progress |
| **Guided Tour** | Tooltip-based walkthrough | Not found | Need trainer/documentation |
| **Default Leave Policies** | Pre-configured templates | Must create from scratch | Longer initial setup |

---

## 📋 Training Checklist for HR Admins

### Pre-Login
- [ ] Understand that Owner already set timezone & organization profile
- [ ] Understand that you must be assigned a seat to access system
- [ ] Understand your role: Create users and configure policies

### Recommended Setup Sequence

**Week 1 - Configuration** (30-40 minutes)
- [ ] Create company departments (Cost Centers)
  - [ ] Create Sales, Engineering, HR, etc.
  - [ ] Assign department managers (optional)

- [ ] Configure leave policies
  - [ ] Define Annual Leave (15 days/year typical)
  - [ ] Define Sick Leave (10 days/year typical)
  - [ ] Set accrual method (monthly recommended)
  - [ ] Test: Can employees see their balance?

- [ ] Create payroll periods
  - [ ] Define pay frequency (Monthly recommended for first setup)
  - [ ] Create first 2-3 periods
  - [ ] Understand period locking (when payroll is final)

- [ ] Configure shift/attendance policies
  - [ ] Define standard working hours (9 AM - 5 PM typical)
  - [ ] Define late policy (e.g., 5 min grace)
  - [ ] Define undertime policy (if applicable)

**Week 1 - Staff Setup** (15-30 minutes per 5 employees)
- [ ] Add first employee (complete full 4-step modal)
  - [ ] Enter all details carefully (email is critical)
  - [ ] Select correct seat type
  - [ ] Assign "Employee" access group
  - [ ] Employee receives invitation email

- [ ] Add managers (assign Manager access group)
  - [ ] Can be done after employees added
  - [ ] Managers need their own employee record

- [ ] Add more HR Admins (if needed)
  - [ ] Assign "HR Admin" access group
  - [ ] Can have multiple HR Admins

**Week 1-2 - Approval Setup** (5-10 minutes)
- [ ] Configure approval workflows
  - [ ] Define who approves leave requests
  - [ ] Define manager approval chain
  - [ ] Test with a sample request

### Key Points to Emphasize
- ⚠️ **Seat = User License**: One seat per employee per module
- ⚠️ **Access Group = Permissions**: Access group determines what user can see/do
- ⚠️ **Email Critical**: Employee gets login credentials via email
- ⚠️ **Approval Workflow**: Must be set up before managers can approve
- ⚠️ **Leave Policies First**: Set up before employees ask for time off
- ⚠️ **No Bulk Import**: Must add employees one at a time (design limitation)

---

## 🔄 Handoff to Employees/Managers

After HR Admin completes setup:

1. **Employees** can:
   - Clock in/out (timekeeping)
   - View schedule
   - Check leave balance
   - Request leave
   - View payslip

2. **Managers** can:
   - View team roster
   - View team timelogs
   - Approve/reject requests
   - Create team schedules
   - View reports

3. **Organization is "Go Live Ready"** when:
   - All users created
   - Leave policies configured
   - Pay periods created
   - Approval workflows set up
   - Shift policies defined

---

## 📊 Success Metrics for HR Admin Onboarding

| Metric | Target | How to Measure |
|--------|--------|-----------------|
| **Time to add first employee** | <15 min | Track from HR Admin login |
| **Employees successfully logging in** | >95% | Employees can access dashboard |
| **Leave policies configured** | 100% | All required policies exist |
| **Pay periods created** | Minimum 3 | Period list shows periods |
| **Managers assigned to employees** | >80% | Reporting structure complete |
| **Approval workflows working** | 100% | Test requests get routed correctly |
| **HR Admin confidence** | Self-reported | In post-training survey |

---

## 📝 Changes from Original Strategy

| Item | Original Plan | Actual Implementation | Training Impact |
|------|---------------|----------------------|-----------------|
| **Setup Wizard** | Linear guided wizard | Manual menu navigation | Need more guidance |
| **Bulk Import** | Import CSV of employees | Single add via modal | Takes longer for large teams |
| **Policy Templates** | Pre-built templates | Manual configuration | More setup time |
| **Setup Checklist** | Dashboard tracking | No checklist | HR Admin must track manually |
| **Guided Tour** | Tooltip walkthrough | Not found | Trainer must demonstrate |
| **Add Employees** | Simple form | Multi-step 4-page form | More complex but thorough |
| **Leave Setup** | Quick template selection | Full manual configuration | 5-8 min vs. 1-2 min expected |
| **Shift Policy** | Automated setup | Manual policy creation | 5-10 min additional setup |

---

## ⚠️ Important Notes for Trainers

1. **Don't assume setup wizard exists** - Guide HR Admin through manual navigation
2. **Bulk import missing** - Manage expectations for large employee additions
3. **Multi-step employee form** - More fields than strategy assumed (seat type, access group)
4. **Payroll period critical** - Don't skip; blocking for payroll
5. **Approval workflow not automatic** - Must be manually configured
6. **Email delivery matters** - Employee won't get credentials without email
7. **Cost Center naming** - System calls them "Cost Centers" not "Departments"
8. **No templates** - Leave policies must be created from scratch
9. **Access group assignment mandatory** - Can't add employee without this
10. **Seat assignment mandatory** - Can't add employee without selecting seat type
