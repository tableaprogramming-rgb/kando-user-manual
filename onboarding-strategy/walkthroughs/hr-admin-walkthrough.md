# HR Admin Interactive Walkthrough Specs

**Note**: Organization setup (logo, timezone, format) was completed by the Owner. HR Admin walkthroughs focus on people management, policies, and operations.

---

## Tour 1: Policy & Department Setup Wizard
**Trigger**: First login (Admin).
**Goal**: Configure policies and structure (org details pre-configured).

| Step | Target Element (Selector) | Tooltip Content | Action to Advance |
|------|---------------------------|-----------------|-------------------|
| 1 | `#wizard-step-1` | **Welcome HR Admin!**<br>Your organization is set up. Now let's configure policies and structure. | Click "Next" |
| 2 | `#step-policies` | **Define Policies**<br>Set leave accrual rules (Annual Vacation, Sick Leave, etc.). | Click "Next" |
| 3 | `#step-departments` | **Structure**<br>Define your main departments (e.g., Sales, Engineering, Support). | Click "Next" |
| 4 | `#step-work-hours` | **Work Hours**<br>Set the standard work week (e.g., Mon-Fri, 9-5). | Click "Finish" |

## Tour 2: User Management
**Trigger**: "Add User" checklist item.
**Goal**: Add people and assign roles (CRITICAL - users cannot access system without roles).

| Step | Target Element (Selector) | Tooltip Content | Action to Advance |
|------|---------------------------|-----------------|-------------------|
| 1 | `#nav-people` | **People Directory**<br>Manage all employees here. | Click Menu Item |
| 2 | `#btn-add-user` | **Add Person**<br>Click to add a single user. | Click Button |
| 3 | `#btn-import-csv` | **Bulk Import**<br>Or upload a CSV to add everyone at once! | Click "Next" |
| 4 | `.role-selector` | **⚠️ IMPORTANT: Assign Role**<br>User cannot access Kando without a role. Select Employee or Manager. | Select Role |
| 5 | `#confirm-create-user` | **Create User**<br>Click to create. New user will receive login credentials. | Click "Create" |

## Tour 3: Policy Configuration
**Trigger**: "Configure Policies" checklist item.
**Goal**: Set rules.

| Step | Target Element (Selector) | Tooltip Content | Action to Advance |
|------|---------------------------|-----------------|-------------------|
| 1 | `#nav-settings` | **Settings**<br>Deep configuration happens here. | Click Menu Item |
| 2 | `#tab-policies` | **Policies**<br>Manage Leave and Attendance rules. | Click Tab |
| 3 | `.policy-card:first` | **Edit Policy**<br>Click to change accrual rates or approval rules. | Click "Done" |

## Tour 4: Payroll
**Trigger**: "Payroll Setup" checklist item.
**Goal**: Money matters.

| Step | Target Element (Selector) | Tooltip Content | Action to Advance |
|------|---------------------------|-----------------|-------------------|
| 1 | `#nav-payroll` | **Payroll**<br>Process pay runs here. | Click Menu Item |
| 2 | `#tab-pay-structure` | **Components**<br>Define base salary, allowances, and deductions. | Click Tab |
| 3 | `#btn-run-payroll` | **Run Payroll**<br>Start a new pay period calculation. | Click "Done" |

---

## What Happens Next

Once HR Admin completes these tours:

1. **Managers receive their onboarding** (if assigned role: Manager)
   - Review Team Roster
   - Set Approval Notifications
   - Practice Approvals
   - Create Schedules
   - Generate Reports

2. **Employees receive their onboarding** (if assigned role: Employee)
   - Complete Profile
   - Set Notification Preferences
   - Clock In for first time
   - View Schedule
   - Check Leave Balance

3. **Your team is now fully productive** ✅

---

## Implementation Notes

- **Role Assignment is MANDATORY**: No Tour 2 completion without role selection
- **Pre-filled from Owner Setup**: Timezone, date format, organization name already configured
- **New User Activation**: Users receive email with login credentials automatically
- **Blocking Condition**: Without users created, Managers and Employees cannot login
- **Critical Path**: HR Admin completion directly unblocks Managers/Employees
