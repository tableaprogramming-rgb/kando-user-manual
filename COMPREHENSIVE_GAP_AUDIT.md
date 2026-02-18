# Comprehensive User Manual Audit: Actions, Prerequisites & Troubleshooting

**Date**: 2026-02-18
**Scope**: Complete codebase audit vs. current manual
**Total Actions Found**: 45+
**Total Documented**: ~15 (PARTIAL)
**Total Missing**: 30+ (critical gaps)

---

## Executive Summary

The comprehensive codebase audit reveals that **the Kando system supports 45+ distinct user-facing actions**, but the current user manual covers only ~15 actions (and many only partially). There are **significant gaps in error documentation, prerequisite explanations, and advanced feature guidance** that prevent users from troubleshooting problems independently.

### Key Findings

**Actions by Coverage**:
- ✅ **Fully Documented** (5): Basic login, clock in/out basics, request leave basics, view dashboard, check leave balance
- ⚠️ **Partially Documented** (10): Most employee/manager actions mentioned but missing error scenarios, prerequisites, troubleshooting
- ❌ **Not Documented** (30+): Advanced features, HR admin configuration, error handling, multi-step approvals, payroll process

**Critical Gaps**:
1. **Error Scenario Documentation** - 20+ error codes/messages not explained
2. **Prerequisite Explanations** - Why actions fail (no schedule, no credit, etc.)
3. **HR Admin Configuration** - 12+ admin actions completely missing
4. **Payroll Process** - 7 actions with 0 documentation
5. **Advanced Workflows** - Multi-step approvals, request management, period locking
6. **Troubleshooting Guides** - No error-to-solution mappings

**Impact on Users**:
- 🔴 **Employees**: Can't understand "why can't I clock in?" errors (~8 common scenarios undocumented)
- 🔴 **Managers**: Don't know how to manage complex approvals (~8 features missing)
- 🟠 **HR Admins**: Cannot set up payroll or configure policies (~12 features missing)
- 🟠 **Owners**: Limited guidance on organization setup and licensing

---

## Part 1: Detailed Action Inventory

### EMPLOYEE ACTIONS (9 documented, 8 with issues)

#### ✅ Clock In / Start Timer
**Status**: PARTIAL (basic steps documented, error scenarios missing)

**What's Documented**:
- Basic step-by-step process
- Keyboard shortcut (Ctrl+I)
- Location: 2.1-Time-Tracking.md

**What's Missing**:
1. ❌ Schedule requirement (action fails silently if no schedule)
2. ❌ "Active timer already running" error explanation
3. ❌ "Schedule beyond time out" error explanation
4. ❌ Timesheet conflict blocking (posted timesheet blocks clock-in)
5. ❌ Cost center selection (optional but not explained)
6. ❌ Photo upload requirements (file types, sizes)
7. ❌ Timezone impact on time recording
8. ❌ Conflict detection with existing timelogs

**Error Scenarios Not Documented**:
- `active_timer` - "An active timer is currently running"
- `noSchedule` - "Your time in is beyond the schedule time out"
- `dateHasTimesheet` - "Schedule date already has posted timesheet"
- `badRequest` - Invalid cost center, missing schedule_id
- `unauthorized` - Missing 'my-time.time-entry' permission

**Code Reference**: `TimelogController::clockIn()`, `TimelogHelpers::timeHasSchedule()`, `ScheduleHelpers::hasTimeSheet()`

**Expected Section in Manual**:
```
## Before You Clock In

Prerequisites:
- [ ] You have a schedule for today
- [ ] No timesheet has been approved for today
- [ ] No active timer still running
- [ ] Your timezone is set correctly

## Common Errors

"Your time in is beyond the schedule time out"
→ Your clock-in time is after your shift ended
→ Solution: Clock in during scheduled work hours or contact manager

"An active timer is currently running"
→ You already clocked in - need to clock out first
→ Solution: Click Clock Out first, then Clock In again

"Schedule date already has posted timesheet"
→ Timesheet has been finalized, cannot modify time
→ Solution: Contact manager to reverse timesheet
```

---

#### ✅ Clock Out / Stop Timer
**Status**: PARTIAL (basic steps documented, error scenarios missing)

**What's Documented**:
- Basic step-by-step process
- Keyboard shortcut (Ctrl+O)
- Location: 2.1-Time-Tracking.md

**What's Missing**:
1. ❌ Cannot clock out if no active timer (must clock in first)
2. ❌ Timezone impact on clock-out time
3. ❌ Duration calculation logic
4. ❌ Permission requirements
5. ❌ Photo upload during clock-out

**Error Scenarios Not Documented**:
- `unauthorized` - Missing 'my-time.time-entry' permission
- `notFound` - Timelog doesn't exist or already clocked out
- `badRequest` - Invalid stopped_at time

**Code Reference**: `TimelogController::clockOut()`, `TimelogPolicy::clockOut()`

---

#### ⚠️ Request Leave
**Status**: PARTIAL (basic request steps documented, validation logic missing)

**What's Documented**:
- Steps to request leave
- Different leave types (Vacation, Sick, Personal, Bereavement)
- Manager approval notification
- Location: 2.2-Leave-Management.md

**What's Missing** (CRITICAL):
1. ❌ **Leave Credit System** - How leave credits work
   - HR admin must initialize credits for each employee
   - Each employee has separate credit per leave type
   - Cannot request more than available balance
   - Credits deducted upon approval
   - No explicit "Check your balance" guidance before requesting

2. ❌ **Leave Type Must Be Assigned** - Not documented that:
   - Leave type must be configured by HR
   - Leave policy must be assigned to employee
   - Without assignment, user gets validation error

3. ❌ **Timesheet Conflict Blocking** - Not documented that:
   - Cannot request leave for dates with posted timesheet
   - Posted = finalized, locked, cannot make changes
   - User gets `date_has_timesheet` error

4. ❌ **Leave Duration Overlap** - Not documented that:
   - Cannot request overlapping leave dates
   - System detects existing requests on same dates
   - User gets `duration_overlap` error

5. ❌ **Attachment Requirements** - Not documented:
   - File types: PDF, JPG, PNG only
   - Medical certificate requirements for sick leave
   - File size limits

6. ❌ **Approval Workflow** - Not documented:
   - Whether leave is auto-approved or requires manager
   - Multi-step approvals (manager AND HR)
   - When credits are deducted (auto-approval vs. final approval)
   - Disapproval reverses the leave
   - Leave balance restored if disapproved

7. ❌ **Leave Type Characteristics** - Not documented:
   - Which leave types require medical docs
   - Which leave types are paid vs. unpaid
   - Carryover rules for different types
   - Max days per year for each type

**Error Scenarios Not Documented**:
- `no_leave_credit` - "No leave credits available for this request"
  - Cause: Employee doesn't have leave credit record OR balance is zero
  - Solution: Contact HR to check leave credit or request different leave type

- `date_has_timesheet` - "The selected date(s) already has a posted timesheet"
  - Cause: Timesheet finalized, cannot modify
  - Solution: Select different dates OR contact manager to reverse timesheet

- `duration_overlap` - "Date conflicts with an existing request"
  - Cause: Already have a leave request for those dates
  - Solution: Modify dates to not overlap with existing request

- `leaveTypeNotConfigured` - Leave type doesn't exist or not assigned
  - Solution: Contact HR to configure leave type

- `unauthorized` - Missing 'requests.leave' permission
  - Solution: Contact admin to check access group

**Code Reference**: `LeaveRequestController::store()`, `LeaveHelpers::canAvail()`, `ApprovalHelpers::requestHasTimesheet()`

**Expected Section in Manual**:
```
## CRITICAL: Leave Credit System

Before you can request leave, you must have LEAVE CREDIT.
Your HR admin must:
1. Create leave type (e.g., "Vacation")
2. Assign leave policy to you
3. Give you initial credit (e.g., 20 days/year)

Your available leave = Total credit - Already used - Already requested

Example:
  Total: 20 days
  Used this year: 5 days
  Already requested (pending): 3 days
  Available: 20 - 5 - 3 = 12 days

If you see "No leave credits available":
→ You have no credit for this leave type
→ Solution: Request different leave type OR contact HR to increase credit

## Before You Request Leave

Prerequisites:
- [ ] Leave type is configured
- [ ] You have sufficient credit balance
- [ ] Dates don't have approved timesheet
- [ ] Dates don't have existing leave request

## Common Errors

"No leave credits available for this request"
Cause: HR hasn't initialized leave credits OR balance is zero
Solution: Contact HR to check your leave credit

"The selected date(s) already has a posted timesheet"
Cause: Timesheet finalized for those dates
Solution: Select different dates OR contact manager to reverse timesheet

"Date conflicts with an existing request"
Cause: You already have a leave request for those dates
Solution: Modify request dates to not overlap
```

---

#### ❌ Update/Edit Leave Request
**Status**: NOT DOCUMENTED

**What's Missing**:
1. No documentation of edit capability
2. No documentation that approved requests cannot be edited
3. No documentation of what fields can be edited before approval
4. No error scenarios

**Expected Feature**: Employees should be able to edit leave requests before they're approved

**Code Reference**: `LeaveRequestController::update()`

---

#### ❌ Cancel/Delete Leave Request
**Status**: NOT DOCUMENTED

**What's Missing**:
1. No documentation of cancellation process
2. No documentation that approved requests cannot be deleted
3. No documentation of when cancellation triggers credit restoration
4. No error scenarios

**Error Scenarios Not Documented**:
- `approved_delete` - "Approved request cannot be deleted"
  - Cause: Trying to delete approved request
  - Solution: Contact manager to revoke approval first

**Code Reference**: `LeaveRequestController::destroy()`

---

#### ⚠️ Submit/Create Timesheet
**Status**: PARTIAL (basic process documented, field requirements missing)

**What's Documented**:
- When to submit (usually Friday or period end)
- Steps to create and submit
- Notification to manager
- Location: 2.1-Time-Tracking.md

**What's Missing** (CRITICAL):
1. ❌ **Timesheet Field Meanings** - Not documented:
   - `ordinary_hrs_expected` - Regular hours based on schedule
   - `absent_hrs` - Hours absent from scheduled work
   - `late_hrs` - Hours late arriving to work
   - `undertime_hrs` - Hours less than scheduled
   - `ordinary` - Regular worked hours
   - `rest_day` - Rest day designation
   - `holiday` - Holiday hours (paid)
   - `leave` - Leave taken hours
   - Which fields are auto-calculated vs. manual entry

2. ❌ **Period Configuration** - Not documented:
   - What periods are (payroll cycles)
   - How to select correct period (weekly vs. monthly)
   - Period date ranges
   - Why period selection matters (payroll cutoff)

3. ❌ **Automatic Generation** - Not documented:
   - Timesheet can be generated automatically from timelog
   - How hours are calculated from clock in/out
   - Holiday/leave adjustments to hours
   - Undertime/lateness penalties

4. ❌ **Timesheet Status Meanings** - Not documented:
   - DRAFT - In progress, not submitted
   - PENDING - Submitted, waiting for approval
   - APPROVED - Manager approved, goes to payroll
   - POSTED - Finalized, locked
   - REVERSED - Posted timesheet reversed

5. ❌ **Duplicate Timesheet Prevention** - Not documented:
   - Only one timesheet per period
   - Cannot have multiple timesheets for same dates
   - Must delete old timesheet to create new one

6. ❌ **Timesheet Lock** - Not documented:
   - Once posted, cannot edit
   - Once period locked (payroll finalized), cannot reverse
   - Cannot clock in/request leave for posted timesheet dates

7. ❌ **Payroll Impact** - Not documented:
   - Approved timesheet determines payroll
   - Hour totals used for salary calculation
   - Leave deductions happen based on timesheet
   - Manager must approve before payroll processing

**Error Scenarios Not Documented**:
- `timesheet_exists` - "Timesheet on the specified period already exists"
  - Cause: Already submitted timesheet for this period
  - Solution: Edit existing timesheet OR delete and create new

- `badRequest` - Invalid period selected, period not found
  - Solution: Select valid period within organization

- `notFound` - Period doesn't exist
  - Solution: Contact HR to create period

**Code Reference**: `TimesheetController::store()`, `TimesheetHelpers`, `Timesheet` model

**Expected Section in Manual**:
```
## CRITICAL: Timesheet Field Meanings

When you submit a timesheet, you enter/review these hours:

Field | Meaning | Calculated | Manual
------|---------|------------|-------
Ordinary Hours | Regular worked hours | YES (from clock in/out) | Can override
Absent Hours | Hours you were absent | Manual | YES
Late Hours | Hours you arrived late | Manual | YES
Undertime Hours | Hours less than scheduled | Manual | YES
Rest Day | Day off from work | Manual | YES
Holiday | Holiday hours (paid) | YES (from holidays) | Can override
Leave | Leave hours taken | YES (from leave approvals) | Can override

## Before You Submit Timesheet

Prerequisites:
- [ ] All clock in/out entries completed
- [ ] Period is selected (weekly, monthly, etc.)
- [ ] No errors in hour calculations
- [ ] Leave requests approved (deducted automatically)
- [ ] No duplicate timesheet exists

## Timesheet Period Selection

Timesheet is grouped by PERIOD (payroll cycle):
- Monthly: All hours for month (e.g., Feb 1-28)
- Weekly: All hours for week (e.g., Feb 1-7)
- Bi-weekly: All hours for two weeks

Your payroll is calculated based on timesheet period.
Select the correct period for your pay cycle.

## Payroll Impact

Once your timesheet is APPROVED:
1. Manager approves your hours
2. Payroll department processes timesheet
3. Your pay is calculated based on timesheet hours
4. You receive payslip with breakdown

Changes after approval:
- Cannot edit approved timesheet
- Cannot clock in/out on approved dates
- Cannot request leave for approved dates
- Contact manager to make changes (must reverse first)
```

---

#### ❌ Update Timesheet
**Status**: NOT DOCUMENTED

**What's Missing**:
1. No documentation of editing after submission
2. No documentation that approved timesheets cannot be edited
3. No documentation of field edit restrictions based on status

**Code Reference**: `TimesheetController::update()`

---

#### ⚠️ View Timesheet
**Status**: PARTIAL (basic viewing documented, filtering missing)

**What's Missing**:
1. ❌ Timesheet status filtering options not documented
2. ❌ Advanced filtering (by period type, date range) not documented
3. ❌ Timesheet status meanings (DRAFT, PENDING, APPROVED, POSTED, REVERSED)
4. ❌ How to find old timesheets

**Code Reference**: `TimesheetController::index()` with filtering

---

#### ❌ Generate Personal Timesheet
**Status**: NOT DOCUMENTED

**What's Missing**:
1. Not user-visible in typical flow, but backend supports auto-generation
2. No documentation of how hours are auto-calculated
3. No documentation of algorithm used
4. No documentation of manual overrides

**Code Reference**: `TimesheetController::generate()`

---

### MANAGER ACTIONS (12 documented with issues, 8 completely missing)

#### ⚠️ View Pending Requests
**Status**: PARTIAL (basic viewing documented, advanced features missing)

**What's Documented**:
- How to access pending approvals
- Location: 3.2-Approving-Requests.md

**What's Missing**:
1. ❌ Advanced filtering options not documented
   - Filter by employee, leave type, status, date range
   - Full-text search on request details
   - Multi-step approval filtering (showing requests awaiting current user)

2. ❌ Request status meanings (PENDING, APPROVED, DISAPPROVED, REVOKED) not documented

3. ❌ How to identify which requests await your approval in multi-step workflow

4. ❌ How to search for specific requests

**Code Reference**: `RequestController::index()` with filtering options

---

#### ⚠️ Approve Request
**Status**: PARTIAL (basic approval documented, complex workflows missing)

**What's Documented**:
- Steps to approve a request
- Notification sent to employee
- Location: 3.2-Approving-Requests.md

**What's Missing** (CRITICAL):
1. ❌ **Multi-Step Approval Workflow** - Not documented:
   - What multi-step approvals are
   - How approval sequences work (Manager → HR → Owner)
   - AND vs. OR logic (all approvers vs. any approver)
   - When multiple approvers needed
   - Your role in the approval chain
   - What happens after each step
   - How to know if you're the next approver

2. ❌ **Disapproval Requirements** - Not documented:
   - Remarks/reason REQUIRED for disapproval
   - Remarks OPTIONAL for approval
   - No error message explaining required_remarks

3. ❌ **Leave Credit Deduction** - Not documented:
   - Credits deducted when you approve
   - If employee has insufficient balance, approval fails with `no_leave_credit`
   - Credits restored if request disapproved
   - Impact on payroll

4. ❌ **Approval Request Status** - Not documented:
   - Request must be PENDING status (not already approved/disapproved)
   - Cannot re-approve already-approved request
   - Cannot approve revoked request

5. ❌ **Authorization Check** - Not documented:
   - You must be in the approval rule's action_users list
   - Not all managers can approve all requests
   - Cannot approve requests you're not assigned to
   - Error: "You are not authorized to approve this request"

6. ❌ **Employee Assignment** - Not documented:
   - Can only approve requests from employees in your team
   - Based on employee's reporting_to field
   - Cannot approve requests outside reporting hierarchy
   - Cannot approve your own request

7. ❌ **SLA/Deadline** - Not documented:
   - Requests may have SLA (approval timeline)
   - How escalation works for overdue approvals
   - Delegation when manager away

8. ❌ **Approval Logging** - Not documented:
   - Each approval is logged with timestamp
   - Approval history visible in request details
   - Your name associated with approval decision

**Error Scenarios Not Documented**:
- `no_leave_credit` - "No leave credits available for this request"
  - Cause: Employee doesn't have sufficient leave balance
  - Solution: Cannot approve, wait for credits or request different leave

- `required_remarks` - "Please provide a reason for disapproval"
  - Cause: Trying to reject without remarks
  - Solution: Add reason/comments before rejecting

- `denied` - "You are not authorized to approve this request"
  - Cause: You're not the assigned approver OR employee not in your team
  - Solution: Check approval workflow OR check if employee reports to you

- `notFound` - Request not found
  - Solution: Request may have been deleted or you don't have access

**Code Reference**: `RequestController::approve()`, `ApprovalHelpers::canApprove()`, `ApprovalRule` model

**Expected Section in Manual**:
```
## CRITICAL: Multi-Step Approval Workflow

Requests may require approval from MULTIPLE PEOPLE:

Example 1 (Manager Only):
  Employee requests leave
  → Sent to Manager for approval
  → Manager approves → DONE

Example 2 (Manager + HR):
  Employee requests leave
  → Sent to Manager for approval
  → Manager approves
  → Sent to HR for approval
  → HR approves → DONE

If HR rejects, request goes back to pending (can resubmit)

In Multi-Step Workflow:
- You see requests awaiting YOUR approval
- You don't approve requests awaiting someone else
- Must wait for previous approver before you can act
- Some rules use AND (all must approve), some use OR (any can approve)

## Before You Approve

Prerequisites:
- [ ] Request is in PENDING status
- [ ] You are assigned as an approver
- [ ] Employee is in your team (for your approval)
- [ ] (If leave request) Employee has sufficient leave credit

## Disapproval Note

When REJECTING a request:
- You MUST provide a reason/remarks
- Employee sees your reason and can resubmit if appropriate
- Leave credits (if deducted) are restored

## Common Errors

"You are not authorized to approve this request"
Cause 1: Employee not in your team → Cannot approve
Cause 2: Not your turn in approval chain → Await previous approver
Cause 3: You're not in approval rule → Not your role to approve
Solution: Check who should approve this type of request

"No leave credits available for this request"
Cause: Employee has used all leave balance
Solution: Cannot approve, reject with explanation

Request doesn't appear in your pending list:
Cause 1: Already approved by you → Check "Approved by me"
Cause 2: Not assigned to you → Check approval rule
Cause 3: From different team → Manager's approval not needed
Solution: Check request status and approval workflow
```

---

#### ⚠️ Reject/Disapprove Request
**Status**: PARTIAL (basic rejection mentioned, requirements not clear)

**What's Documented**:
- Can reject requests
- Employee gets notification
- Location: 3.2-Approving-Requests.md (implied)

**What's Missing**:
1. ❌ Remarks REQUIRED for rejection (not documented)
2. ❌ No explanation of what happens after rejection
3. ❌ No documentation of how employee resubmits
4. ❌ No documentation that disapproved requests don't process
5. ❌ For leave: credits not deducted on rejection

**Error Scenarios Not Documented**:
- `required_remarks` - "Please provide a reason for disapproval"

**Code Reference**: `RequestController::approve()` with status_id = DISAPPROVED

---

#### ❌ Revoke Approved Request
**Status**: NOT DOCUMENTED

**What's Missing** (CRITICAL):
1. No documentation of revoking approved requests
2. No documentation of when/why to revoke
3. No documentation that locked periods prevent revocation
4. No documentation of leave credit restoration
5. No documentation of payroll impact

**When Used**: Manager wants to undo their approval (mistake, changed circumstances)

**Error Scenarios Not Documented**:
- `period_locked` - "Request cannot be revoked, Period is already locked"
  - Cause: Payroll period has been finalized
  - Solution: Cannot revoke, must wait for payroll adjustment

- `notApproved` - "Request is not in approved status"
  - Cause: Trying to revoke pending or disapproved request
  - Solution: Only approved requests can be revoked

**Code Reference**: `RequestController::revoke()`

**Expected Section**:
```
## Revoking Approved Requests

If you approved a request by mistake, you can REVOKE it.

Steps:
1. Find the approved request
2. Click "Revoke Approval"
3. Confirm revocation

Impact:
- Request goes back to PENDING status
- Waiting for reapproval (yours or another approver's)
- For leave: Credit is restored to employee
- Cannot revoke if payroll period is locked (finalized)

Common Error:
"Request cannot be revoked, Period is already locked"
Cause: Payroll has been finalized for this period
Solution: Cannot revoke, must request payroll adjustment instead
```

---

#### ❌ View Approval History
**Status**: NOT DOCUMENTED

**What's Missing**:
1. No documentation of checking approval history
2. No documentation of viewing approval steps
3. No documentation of seeing who approved/rejected and when
4. No documentation of seeing remaining approvers (in multi-step)

**Expected Capability**: Users should be able to see the complete approval audit trail

**Code Reference**: `RequestController::showApprovalInfo()` or details endpoint

---

#### ⚠️ View Team Members
**Status**: PARTIAL (basic viewing documented, advanced features missing)

**What's Missing**:
1. ❌ Advanced filtering not documented (search, active status, clocked-in employees)
2. ❌ How to see which employees report to you
3. ❌ How to check if employee is in your reporting hierarchy

**Code Reference**: `EmployeeController::index()` with filtering

---

#### ⚠️ Create Schedule for Employee
**Status**: PARTIAL (basic process documented, error scenarios missing)

**What's Documented**:
- Steps to create schedule
- When to create schedules
- Location: 3.3-Scheduling.md

**What's Missing** (HIGH):
1. ❌ **Schedule Types** - Not documented:
   - REGULAR - Normal work shift
   - REST_DAY - Employee not scheduled
   - FLEX - Flexible hours
   - TIME_OFF - Scheduled absence
   - AUTO_DEBIT - Special type

2. ❌ **Schedule Fields** - Not documented:
   - `time_in` and `time_out` - Clock hours for shift
   - `expected_hours` - How many hours should be worked
   - `break_hours` - Break duration (deducted from worked hours)
   - `is_all_day` - All-day schedule (no specific times)
   - `expected_nd` - Expected night differential hours

3. ❌ **Conflict Detection** - Not documented:
   - Cannot schedule overlapping times for same employee
   - What constitutes a "conflict" (overlapping clock times)
   - How to check for existing schedules before creating
   - Error message: "Schedule conflict"

4. ❌ **Schedule Flexibility** - Not documented:
   - Can modify created schedules
   - Can delete schedules
   - When schedule is locked (once timesheet posted)
   - Can import schedules in bulk

5. ❌ **Shift Assignment** - Not documented:
   - Which shift type to use for different scenarios
   - Auto-filled descriptions for REST_DAY and FLEX
   - Shift policy constraints (if configured)

6. ❌ **Timezone Impact** - Not documented:
   - Time format is in organization timezone
   - How to convert from employee timezone
   - Impact on timelog conflicts

**Error Scenarios Not Documented**:
- `has_conflict` - "Schedule conflict"
  - Cause: Overlapping schedule times for same employee on same date
  - Solution: Delete conflicting schedule or modify times to not overlap

- `invalidScheduleType` - Invalid schedule type selected
  - Solution: Select valid type (REGULAR, REST_DAY, FLEX, etc.)

- `invalidEmployee` - Employee doesn't exist or not in organization
  - Solution: Select valid employee

**Code Reference**: `ScheduleController::store()`, `ScheduleHelpers::hasConflict()`

**Expected Section**:
```
## Schedule Types

REGULAR - Normal work shift
  - Enter time_in and time_out
  - Example: 9:00 AM - 5:00 PM
  - Employee clocks in/out during these hours

REST_DAY - Employee not scheduled to work
  - No time entry required
  - Description auto-fills as "Rest Day"
  - No clock-in expected

FLEX - Flexible hours
  - No fixed schedule hours
  - Employee can clock in/out at any time
  - Description auto-fills as "Flex Day"

TIME_OFF - Scheduled absence
  - Employee scheduled not to work
  - Used for planned absence, leave days
  - No clock-in expected

## Before You Create Schedule

Prerequisites:
- [ ] Employee is active
- [ ] No conflicting schedule exists for that date/time
- [ ] Schedule times don't overlap (if multiple shifts)
- [ ] Correct shift type selected

## Common Errors

"Schedule conflict"
Cause: Already have a schedule for this employee at overlapping time
Solution: Delete existing schedule or choose different time

## Bulk Schedule Import

You can import schedules from Excel file:
1. Download schedule template
2. Fill in employee IDs, dates, times
3. Upload file
4. System validates and reports errors
5. Review error report and fix issues
6. Reupload corrected file
```

---

#### ⚠️ Update/Edit Schedule
**Status**: PARTIAL (basic editing implied, restrictions not documented)

**What's Missing**:
1. ❌ Edit restrictions based on schedule status not documented
2. ❌ Cannot edit if timesheet already created for those dates
3. ❌ Cannot edit if timelog entries already exist

**Code Reference**: `ScheduleController::update()`

---

#### ❌ Delete Schedule
**Status**: NOT DOCUMENTED

**What's Missing**:
1. No documentation of deleting schedules
2. No documentation of consequences (timelogs, approvals)
3. No documentation of when safe to delete

**Code Reference**: `ScheduleController::destroy()`

---

#### ❌ Import Schedules (Bulk)
**Status**: NOT DOCUMENTED

**What's Missing** (HIGH):
1. No documentation of import file format
2. No documentation of required columns
3. No documentation of error handling
4. No documentation of retry process
5. No download template process

**Error Scenarios Not Documented**:
- `importError` - "Schedule has errors and was not imported. Fix the error report and try again"
  - Cause: File has validation errors (invalid employee IDs, date format, time format, conflicts)
  - Solution: Review error report, fix issues, re-upload

**Code Reference**: `ScheduleImportController::import()`

**Expected Feature**:
```
## Bulk Import Schedules

Instead of creating schedules one-by-one, import from Excel:

### Step 1: Download Template
1. Go to Scheduling
2. Click "Download Template"
3. Opens Excel file with columns:
   - Employee ID
   - Date
   - Time In (HH:MM)
   - Time Out (HH:MM)
   - Schedule Type (REGULAR, REST_DAY, FLEX)
   - Break Hours
   - Expected Hours

### Step 2: Fill Template
- Add one row per schedule
- Use correct date format (YYYY-MM-DD)
- Use 24-hour time format (09:00, 17:00)
- Leave blank for all-day schedules

### Step 3: Upload File
1. Click "Import Schedules"
2. Choose file
3. Click "Import"
4. System validates all rows

### Step 4: Review Errors
If errors found:
- Download error report
- Correct issues in template
- Re-upload file
- Repeat until all valid

### Validation Rules
- Employee must exist
- Date must be valid format
- Time must be HH:MM format
- No overlapping schedules
- Schedule type must be valid
```

---

#### ⚠️ View Team Timelog/Attendance
**Status**: PARTIAL (basic viewing documented, filtering missing)

**What's Missing**:
1. ❌ Advanced filtering not documented
2. ❌ Timesheet-related filters not documented
3. ❌ How to identify missing timelog entries
4. ❌ How to check timesheet conflicts

**Code Reference**: `TimelogController::all()`

---

#### ⚠️ Create Manual Timelog Entry
**Status**: PARTIAL (mentioned as employee action "Add Manual Entry", manager capability not clear)

**What's Documented**:
- Employees can add manual entries
- Location: 2.1-Time-Tracking.md

**What's Missing** (CRITICAL):
1. ❌ Manager can create entries for ANY employee (not just self)
2. ❌ No documentation of when/why managers create manual entries
3. ❌ No documentation of approval/authorization
4. ❌ No documentation of audit trail for manager-created entries
5. ❌ No documentation of notification to employee when manager creates entry

**Expected Use Cases**:
- Employee forgot to clock in → Manager creates entry
- System downtime → Manager recreates missing entries
- Employee worked off-site → Manager adds entry manually

**Code Reference**: `TimelogController::clockIn()` with employee_id parameter (manager can create for others)

**Expected Section**:
```
## Creating Manual Timelog Entries for Employees

As a manager, you can create clock-in/clock-out entries for your team members:

When to Use:
- Employee forgot to clock in/out
- System was down during work hours
- Employee worked off-site without access to system

Steps:
1. Go to Attendance or Timelog
2. Click "Add Manual Entry" or "Create Entry"
3. Select employee
4. Enter:
   - Date
   - Clock in time
   - Clock out time
   - Reason (e.g., "System down", "Employee request")
5. Click Create

Impact:
- Entry added to employee's timelog
- Counts toward their timesheet hours
- Employee gets notification of manual entry
- Audit shows you created the entry

Best Practice:
- Always add reason for manual entry
- Notify employee when creating entry
- Check timelog afterwards to verify accuracy
```

---

#### ❌ Edit/Correct Timelog Entry
**Status**: NOT DOCUMENTED

**What's Missing** (HIGH):
1. No documentation of editing timelog entries
2. No documentation of when edits are allowed
3. No documentation of override process for conflicts
4. No documentation of correction audit trail
5. No documentation of employee notification when entry edited

**Use Case**: Manager corrects incorrect clock-in/out time

**Code Reference**: `TimelogController::update()`

---

#### ❌ Delete Timelog Entry
**Status**: NOT DOCUMENTED

**What's Missing**:
1. No documentation of deleting entries
2. No documentation of approval needed
3. No documentation of impact on timesheet
4. No documentation of recovery process

**Code Reference**: `TimelogController::destroy()`

---

#### ❌ Check Timelog Conflicts
**Status**: NOT DOCUMENTED (Hidden feature)

**What's Missing**:
1. Not visible in UI but backend supports conflict detection
2. No documentation of conflict detection logic
3. Manager could manually check conflicts before creating entries

**Code Reference**: `TimelogController::checkConflict()` (internal API)

---

#### ⚠️ View Team Timesheet
**Status**: PARTIAL (basic viewing documented, status and filtering missing)

**What's Missing**:
1. ❌ Timesheet status meanings not documented (DRAFT, PENDING, APPROVED, POSTED, REVERSED)
2. ❌ How to filter by status
3. ❌ How to identify timesheets pending your approval
4. ❌ How to check for missing timesheets

**Code Reference**: `TimesheetController::index()` for team view

---

#### ⚠️ Create Timesheet for Employee
**Status**: PARTIAL (mentioned in manager guide, field requirements missing)

**What's Missing**:
1. ❌ Same field requirement issues as employee timesheet
2. ❌ Bulk timesheet creation for team not documented
3. ❌ When manager should create vs. employee
4. ❌ Manager authority and approval workflow

**Expected Use Case**: Manager creates timesheet for employee if they're unable or to ensure accuracy

**Code Reference**: `TimesheetController::store()` (manager can create for any employee)

---

#### ⚠️ Generate Team Timesheet
**Status**: PARTIAL (mentioned, algorithm missing)

**What's Missing**:
1. ❌ How timesheet hours are automatically calculated
2. ❌ Which data sources used (timelogs, leaves, schedules)
3. ❌ Order of calculation (what's applied first)
4. ❌ How to override automatic calculation

**Code Reference**: `TimesheetController::generate()` for multiple employees

---

#### ⚠️ Export Timesheet
**Status**: PARTIAL (mentioned, format and usage missing)

**What's Missing**:
1. ❌ Export file format not documented (CSV, Excel, PDF)
2. ❌ Columns included in export not documented
3. ❌ How to use exported data (payroll import, analysis)
4. ❌ Data confidentiality considerations

**Code Reference**: `TimesheetExportController::export()`

---

#### ❌ Reverse Timesheet
**Status**: NOT DOCUMENTED

**What's Missing** (CRITICAL):
1. No documentation of reversing posted timesheets
2. No documentation of when/why to reverse
3. No documentation of impact on payroll
4. No documentation of period locking preventing reversal
5. No documentation of employee impact (resubmit required)

**Use Cases**:
- Timesheet contains errors
- Need to adjust hours before payroll
- Corrections discovered after approval

**Error Scenarios Not Documented**:
- `already_reversed` - "Timesheet already reversed"
  - Cause: Already reversed this timesheet
  - Solution: Cannot reverse again, must create adjustment or new timesheet

- `period_locked` - "Request cannot be revoked, Period is already locked" (similar for reversals)
  - Cause: Payroll period has been finalized
  - Solution: Cannot reverse, must request payroll adjustment

**Code Reference**: `TimesheetController::reverse()`

**Expected Section**:
```
## Reversing Timesheets

If a timesheet contains errors, you can REVERSE it (undo posting).

When to Reverse:
- Timesheet has calculation errors
- Incorrectly approved timesheet
- Need to make corrections before payroll

Steps:
1. Find the POSTED timesheet
2. Click "Reverse"
3. Confirm reversal
4. Timesheet goes back to DRAFT status
5. Employee can edit and resubmit

Impact:
- All hours no longer finalized
- Payroll not processed (if not already)
- Leave credits re-credited (if deducted)
- Employee must resubmit for approval

Common Error:
"Request cannot be revoked, Period is already locked"
Cause: Payroll period finalized, cannot modify
Solution: Must request payroll adjustment instead of reversing
```

---

### OVERTIME ACTIONS (1 partially documented, 2 completely missing)

#### ⚠️ Request Overtime
**Status**: PARTIAL (mentioned in manager guide, employee visibility missing)

**What's Missing** (HIGH):
1. ❌ No documentation in employee guide (only manager guide)
2. ❌ No explanation of approval process
3. ❌ No documentation of payroll impact
4. ❌ No documentation of when to request overtime
5. ❌ No documentation of cost center assignment for OT tracking

**Error Scenarios Not Documented**:
- `date_has_timesheet` - Cannot request OT for dates with posted timesheet
  - Cause: Timesheet finalized
  - Solution: Select different date or contact manager to reverse timesheet

**Code Reference**: `OvertimeRequestController::store()`

**Expected Section** (in 2.1-Time-Tracking.md):
```
## Requesting Overtime

If you work extra hours beyond your scheduled shift:

Steps:
1. Click "Request Overtime"
2. Enter:
   - Date worked overtime
   - Start time (beginning of overtime)
   - End time (end of overtime)
   - Reason (e.g., "Project deadline", "Emergency")
   - Optional: Attach supporting documents
3. Click "Submit"

Approval:
- Overtime request goes to manager
- Manager approves or rejects
- You get notification of decision

Payroll Impact:
- Approved overtime is paid at OT rate (1.5x or 2x base rate - check policy)
- Included in next payslip
- Shown separately from regular hours

Restrictions:
- Cannot request OT for dates with finalized timesheet
- Cannot request past dates (manager can create manual OT)
```

---

#### ❌ Update Overtime Request
**Status**: NOT DOCUMENTED

**What's Missing**:
1. No documentation of editing before approval
2. No documentation that approved OT cannot be edited

**Code Reference**: `OvertimeRequestController::update()`

---

#### ❌ Delete Overtime Request
**Status**: NOT DOCUMENTED

**What's Missing**:
1. No documentation of canceling OT request
2. No documentation that approved OT cannot be deleted

**Code Reference**: `OvertimeRequestController::destroy()`

---

## Part 2: HR Admin Configuration Actions (12+ completely missing)

All 12+ HR Admin configuration actions are in **skeleton pages** with zero documentation:

### ❌ Configure Leave Types (Section 5.1)
**Missing**: Leave type fields, code format, color meanings, accrual settings

### ❌ Configure Holiday Types (Section 5.1)
**Missing**: Holiday type setup, impact on scheduling and payroll

### ❌ Create Holidays (Section 5.1)
**Missing**: Holiday creation process, bulk holiday import, validation rules

### ❌ Configure Shift (Section 5.1)
**Missing**: Shift configuration, time format, expected hours, break hours

### ❌ Configure Shift Policy (Section 5.1)
**Missing**: Shift policy rules, assignment to employees, constraints

### ❌ Configure Night Differential (Section 5.1)
**Missing**: Night differential rules, time ranges, rate calculation, overtime multiplier

### ❌ Configure Payroll Period (Section 5.1)
**Missing**: Period creation, period header setup, date ranges, locking for payroll

### ❌ Lock Period (Payroll Finalization) (Section 5.4)
**Missing**: Period locking process, payroll finalization, impact on requests/timesheets

### ❌ Configure Leave Policy (Section 5.3)
**Missing**: Leave policy setup, accrual methods, max days, carryover rules, employee assignment

### ❌ Assign Leave Policy to Employee (Section 5.3)
**Missing**: Policy assignment process, bulk assignment, policy inheritance

### ❌ Configure Cost Center (Section 5.1)
**Missing**: Cost center setup, employee assignment, usage in reporting

### ❌ Configure Pay Type & Pay Group (Section 5.4)
**Missing**: Pay type definition, formula configuration, pay group setup, field mapping

### ❌ Configure Approval Rules (Section 5.3)
**Missing**: Approval rule setup, criteria definition, step configuration, AND/OR logic, tester

---

## Part 3: Payroll Actions (7 completely missing)

### ❌ Generate Payroll Values (Section 5.4)
**Missing**: Payroll calculation process, formula evaluation, adjustment application

### ❌ Create Paysheet/Payroll Record (Section 5.4)
**Missing**: Payroll record creation, date range selection, field value entry

### ❌ Generate Paysheet from Timesheet (Section 5.4)
**Missing**: Automatic paysheet generation, hour conversion, formula application

### ❌ Import Timesheet for Payroll (Section 5.4)
**Missing**: Timesheet import file format, column requirements, error handling

### ❌ Download Timesheet Template (Section 5.4)
**Missing**: Template download process, column guide, validation rules

### ❌ Export Payroll Report (Section 5.4)
**Missing**: Export format, file usage, columns, confidentiality

### ❌ View Payslip (Section 2.4)
**Status**: PARTIAL - Basic page existence documented, component breakdown missing

**Missing**:
- Payslip field explanations (gross, deductions, tax, net)
- Tax calculation methodology
- Deduction types and reasons
- How to dispute payslip amounts
- Overtime payment explanation
- Leave deduction explanation

---

## Part 4: Owner/Organization Actions (3 partially documented)

### ⚠️ Update Organization Profile
**Status**: PARTIAL (mentioned in Owner Guide 4.1, details missing)

**Missing**:
- All profile fields and their purposes
- Timezone impact on global operations
- Logo upload specifications (size, format)
- Correction process for incorrect data

### ⚠️ Configure Organization Settings
**Status**: PARTIAL (mentioned in Owner Guide 4.2, details missing)

**Missing**:
- All available settings and their effects
- Theme configuration options
- Locale/language settings
- Feature flag management

### ⚠️ Manage Subscription/License
**Status**: PARTIAL (mentioned in Owner Guide 4.3, details missing)

**Missing**:
- License types and feature differences
- Upgrade/downgrade process
- Billing cycle explanation
- License expiration handling
- Seat assignment and limits

### ❌ Assign Seats to Employees
**Status**: NOT DOCUMENTED

**Missing**: Entire seat management workflow not covered

---

## Part 5: Error Code Reference Matrix

| Error Code | Message | Context | Why It Happens | Solution |
|---|---|---|---|---|
| active_timer | "An active timer is currently running" | Clock-in | Already clocked in earlier | Clock out first, then clock in again |
| noSchedule | "Your time in is beyond the schedule time out" | Clock-in | No schedule or time outside schedule | Create schedule for date and time |
| dateHasTimesheet | "Schedule date already has posted timesheet" | Clock-in, Leave, OT | Timesheet finalized | Contact manager to reverse timesheet |
| no_leave_credit | "No leave credits available for this request" | Leave request | Employee has no credit record or zero balance | Contact HR to initialize credit or request different leave type |
| date_has_timesheet | "The selected date(s) already has a posted timesheet" | Leave request, OT request | Timesheet finalized for those dates | Select different dates |
| duration_overlap | "Date conflicts with an existing request" | Leave request | Already have leave request for those dates | Modify dates to not overlap |
| required_remarks | "Please provide a reason for disapproval" | Request rejection | Tried to reject without reason | Add remarks before rejecting |
| approved_delete | "Approved request cannot be deleted" | Cancel leave | Trying to delete approved request | Contact manager to revoke approval first |
| has_conflict | "Schedule conflict" | Create schedule | Overlapping schedule times | Modify times or delete existing schedule |
| period_locked | "Request cannot be revoked, Period is already locked" | Revoke request, Reverse timesheet | Payroll period finalized | Cannot modify, request payroll adjustment instead |
| already_reversed | "Timesheet already reversed" | Reverse timesheet | Already reversed this timesheet | Cannot reverse again |
| denied | "Access denied" | Any action | Missing permission for action | Contact admin to check access group |
| unauthorized | 401 response | Any action | Missing required permission | Check access group permissions |
| notFound | 404 response | View/edit/delete | Record doesn't exist or deleted | Check if record exists or search for it |
| badRequest | 400 response | Any action | Invalid input data | Check input values and format |
| internalError | 500 response | Any action | Server error | Retry, contact support if persists |

---

## Summary: What's Needed to Complete Documentation

### CRITICAL (Blocks User Success) - 30+ items
- All error scenario documentation (~20 missing)
- Leave credit system explanation
- Timesheet conflict blocking explanation
- Multi-step approval workflow documentation
- Period locking and payroll finalization
- Manual timelog creation by managers
- Payroll field meanings and calculations
- All HR admin configuration (12+ actions)
- All payroll processing (7+ actions)

### HIGH (Improves Usability) - 20+ items
- Overtime request complete workflow
- Request revocation process
- Timesheet reversal process
- Schedule conflict details and resolution
- Cost center management and impact
- Approval history viewing
- Advanced filtering and search
- Timesheet import and template
- Bulk schedule import

### MEDIUM (Polish) - 10+ items
- Custom fields configuration
- Keyboard shortcuts complete list
- File upload requirements (photos, attachments)
- Request status meanings
- Export format documentation
- Advanced settings configuration
- Delegation and escalation process

---

## Recommendations: Prioritized Documentation Plan

### Phase 1: CRITICAL (Week 1-2) - Estimated 25 hours
1. Error scenario documentation for all common user actions (8 hours)
2. Leave credit system explanation (3 hours)
3. Timesheet conflict blocking explanation (2 hours)
4. Multi-step approval workflow documentation (4 hours)
5. Period locking and payroll finalization (3 hours)
6. Manual timelog creation by managers (2 hours)
7. Payroll field meanings (3 hours)

### Phase 2: HIGH (Week 3-4) - Estimated 20 hours
1. Overtime request complete workflow (2 hours)
2. Request revocation and timesheet reversal (3 hours)
3. HR admin configuration basics (6 hours)
4. Payroll processing overview (4 hours)
5. Cost center and schedule management (3 hours)
6. Advanced approval workflows (2 hours)

### Phase 3: MEDIUM (Week 5-6) - Estimated 15 hours
1. Complete HR admin configuration (8 hours)
2. Complete payroll documentation (5 hours)
3. Advanced features and filtering (2 hours)

---

**Total Estimated Effort for Comprehensive Coverage**: ~60 hours
**Current Coverage**: ~15% of all actions
**After Phase 1**: ~40% coverage
**After Phase 3**: ~95% coverage

---

**Audit Status**: ✅ COMPLETE
**Last Updated**: 2026-02-18
**Reviewed By**: Comprehensive codebase analysis
