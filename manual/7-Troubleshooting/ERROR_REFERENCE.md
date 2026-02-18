# Error Reference Guide

*Complete guide to understanding and resolving Kando error messages.*

## Overview

When something doesn't work in Kando, you'll see an error message. This guide explains what each error means, why it happens, and how to fix it.

### How to Use This Guide

1. **Find your error message** in the table below
2. **Read the explanation** of why it happened
3. **Follow the solution** to fix the problem
4. **Check prevention tips** to avoid it next time

---

## Quick Error Reference Table

| Error | Message | Why It Happens | Solution |
|-------|---------|----------------|----------|
| `active_timer` | "An active timer is currently running" | Already clocked in | Clock out first, then clock in again |
| `noSchedule` | "Your time in is beyond the schedule time out" | No schedule or outside scheduled hours | Create schedule for date, or clock in during scheduled times |
| `dateHasTimesheet` | "Schedule date already has posted timesheet" | Timesheet finalized | Contact manager to reverse timesheet first |
| `no_leave_credit` | "No leave credits available" | No credit initialized OR zero balance | Contact HR to initialize credit or request different leave type |
| `date_has_timesheet` | "The selected date(s) already has a posted timesheet" | Timesheet finalized for those dates | Select different dates OR contact manager to reverse |
| `duration_overlap` | "Date conflicts with an existing request" | Already requested leave for those dates | Change request dates to not overlap |
| `required_remarks` | "Please provide a reason for disapproval" | Rejecting request without comments | Add remarks/reason before rejecting |
| `approved_delete` | "Approved request cannot be deleted" | Trying to delete already-approved request | Contact manager to revoke approval first |
| `has_conflict` | "Schedule conflict" | Overlapping schedule times for same employee | Delete conflicting schedule or modify times |
| `period_locked` | "Period is already locked" | Payroll period finalized | Cannot modify; request payroll adjustment instead |
| `already_reversed` | "Timesheet already reversed" | Trying to reverse already-reversed timesheet | Cannot reverse again; create adjustment instead |
| `denied` | "Access denied" | Missing permission for action | Check access group or contact admin |
| `unauthorized` | 401 Unauthorized | No authorization to perform action | Check permissions or contact admin |
| `notFound` | 404 Not Found | Record doesn't exist or was deleted | Verify record exists or search for it |
| `badRequest` | 400 Bad Request | Invalid input data or state conflict | Check input format and prerequisites |
| `internalError` | 500 Internal Error | Server error | Retry; contact support if persists |

---

## Detailed Error Explanations

### CLOCK-IN/OUT ERRORS

---

#### ❌ `active_timer` - "An active timer is currently running"

**What This Means**:
You tried to clock in, but you're already clocked in from earlier.

**Why It Happens**:
- You clocked in earlier but forgot to clock out
- The timer is still running
- System doesn't allow two simultaneous timers

**How to Fix**:
1. Click **Clock Out** to stop the current timer
2. Then click **Clock In** to start a new one

**Example**:
```
9:00 AM - You clock in (Forgot to clock out!)
5:00 PM - You try to clock in again
ERROR: "An active timer is currently running"
SOLUTION: Clock out at 5:00 PM, then clock in again if needed
```

**Prevention**:
✅ Always click Clock Out at the end of your shift
✅ Check your status before clocking in (Dashboard shows "Clocked In" or "Clocked Out")
✅ Set a reminder on your phone to clock out

**Related Pages**: [Time Tracking Guide](../2-Employee-Guide/2.1-Time-Tracking.md)

---

#### ❌ `noSchedule` - "Your time in is beyond the schedule time out"

**What This Means**:
You tried to clock in, but there's no schedule for this date/time, or you're clocking in outside scheduled hours.

**Why It Happens**:
- **No Schedule**: Your manager hasn't created a schedule for today
- **Outside Hours**: You're trying to clock in before/after your scheduled shift
- **Wrong Date**: Trying to clock in on a day you're not scheduled
- **Wrong Time**: Clocking in 2 hours after your shift ended

**How to Fix**:

**If no schedule exists**:
1. Ask your manager to create a schedule for today
2. Once schedule is created, try clocking in again
3. Or contact HR if scheduling is not yet set up

**If outside scheduled hours**:
1. Check your schedule (Dashboard → View Schedule)
2. Clock in during your scheduled work hours
3. Or ask manager to adjust your schedule if incorrect

**Example Scenarios**:
```
Scenario 1: No Schedule
  Your scheduled clock-in: None (no schedule created)
  You try to clock in: 9:00 AM
  ERROR: "Your time in is beyond the schedule time out"
  SOLUTION: Ask manager to create your schedule

Scenario 2: Outside Hours
  Your scheduled hours: 9:00 AM - 5:00 PM
  You try to clock in: 7:00 AM (before shift)
  ERROR: "Your time in is beyond the schedule time out"
  SOLUTION: Wait until 9:00 AM or ask manager to adjust schedule

Scenario 3: Wrong Time
  Your scheduled hours: 9:00 AM - 5:00 PM
  You try to clock in: 7:00 PM (after shift)
  ERROR: "Your time in is beyond the schedule time out"
  SOLUTION: Ask manager to create manual entry or adjust schedule
```

**Prevention**:
✅ Check your schedule before your shift (Dashboard → View Schedule)
✅ Ask your manager to confirm your work hours
✅ Clock in during your scheduled shift times
✅ If working outside normal hours, ask manager to adjust schedule

**Notes**:
- Schedules are created by your manager or HR admin
- Schedule should match your actual work hours
- If you frequently work different hours, ask manager to update schedule

**Related Pages**: [Time Tracking Guide](../2-Employee-Guide/2.1-Time-Tracking.md), [View Schedule](../2-Employee-Guide/2.3-View-Schedule.md)

---

#### ❌ `dateHasTimesheet` - "Schedule date already has posted timesheet"

**What This Means**:
You tried to clock in or take another action on a date that has a finalized (posted) timesheet.

**Why It Happens**:
- Your manager already approved and posted your timesheet for this date
- Timesheet is locked and cannot be modified
- System prevents changes to finalized data
- Protects payroll data from accidental changes

**How to Fix**:
1. Contact your manager
2. Ask them to **reverse** the timesheet for that date
3. Once reversed, you can clock in/out again
4. Resubmit timesheet for approval

**Example**:
```
Friday, Feb 14: Manager approved your timesheet
Monday, Feb 17: You forgot to clock out Friday
You try to clock in Monday: ERROR
MESSAGE: "Schedule date already has posted timesheet"

SOLUTION:
1. Contact manager: "Can you reverse timesheet for Feb 14?"
2. Manager reverses it
3. You clock out on Feb 14
4. Resubmit timesheet
5. Manager approves again
```

**Prevention**:
✅ Clock out before timesheet is finalized
✅ Check your timesheet status (Dashboard → Timesheets)
✅ Clock out same day as clock-in (don't wait until next week)
✅ If you forget, ask manager immediately (before they approve)

**Important**:
- Once posted, timesheet is locked for payroll
- Only manager can reverse it
- Don't delay asking for reversal
- Reversals impact payroll processing

**Related Pages**: [Time Tracking Guide](../2-Employee-Guide/2.1-Time-Tracking.md)

---

### LEAVE REQUEST ERRORS

---

#### ❌ `no_leave_credit` - "No leave credits available for this request"

**What This Means**:
You tried to request leave, but you don't have any credit (balance) for that leave type.

**Why It Happens**:
- **HR hasn't initialized your credit**: When you start, HR must give you initial leave balance
- **You've used all your leave**: Already taken all available days this year
- **Leave type not assigned to you**: HR hasn't configured this leave type for your account
- **Credit expired**: Annual leave balance reset or carryover expired

**How to Fix**:

**If credit not initialized**:
1. Contact your HR department
2. Ask them to check if leave credit exists for you
3. Ask them to initialize credit for this year (e.g., 20 days vacation)
4. Once initialized, you can request leave

**If balance is zero**:
1. Check your leave balance (Dashboard → Leave Balance widget)
2. You've used all available days for this period
3. Options:
   - Request different leave type (if available)
   - Request leave for next period (if allowed)
   - Contact HR about carryover or additional allocation

**If leave type not assigned**:
1. Contact your HR department
2. Ask them to assign this leave type to your account
3. Once assigned with credit, you can request

**Example**:
```
You request 5 days Vacation
ERROR: "No leave credits available for this request"

DIAGNOSIS:
1. Check Dashboard → Leave Balance
2. If shows "Vacation: 0 days" - No credit initialized
3. Contact HR: "Can you set up my vacation leave credit?"

SOLUTION:
HR initializes credit (e.g., 20 days)
Now available: 20 days
You can request leave ✅
```

**Prevention**:
✅ Know your leave balance (check Dashboard regularly)
✅ Plan leave requests within available balance
✅ Ask HR about annual allocation at start of year
✅ Understand carryover policy for your organization
✅ Request leave early in the year to ensure approval time

**Understanding Leave Credit System**:

**Leave Credit = Your Available Leave Balance**

```
Total Allocated:    20 days/year
Already Taken:      5 days (approved & deducted)
Already Requested:  3 days (pending approval)
Available Balance:  20 - 5 - 3 = 12 days

If you request 15 days → ERROR (only 12 available)
If you request 12 days → OK (uses all available)
```

**Important**:
- HR admin controls initial allocation
- Balance is tracked per leave type (vacation, sick, personal, etc.)
- Each type has separate credit
- Requesting leave doesn't deduct immediately (deducts when approved)

**Related Pages**: [Leave Management Guide](../2-Employee-Guide/2.2-Leave-Management.md)

---

#### ❌ `date_has_timesheet` - "The selected date(s) already has a posted timesheet"

**What This Means**:
You tried to request leave for dates that have a finalized (posted) timesheet.

**Why It Happens**:
- Manager already approved and posted timesheet for those dates
- Payroll period is locked
- Cannot modify leave once payroll is finalized
- Protects payroll data integrity

**How to Fix**:
1. Select different dates for leave request
2. Or contact manager to reverse timesheet (if urgent)
3. Once reversed, you can request leave
4. Manager reapproves timesheet

**Example**:
```
You request leave: Feb 10-12
ERROR: "The selected date(s) already has a posted timesheet"

SOLUTION:
Option 1: Request different dates
  - Request Feb 13-15 instead
  - Check calendar for open dates

Option 2: Ask manager to reverse
  - Manager reverses timesheet for Feb 10-12
  - You request leave
  - Manager reapproves timesheet
```

**Prevention**:
✅ Request leave BEFORE timesheet is finalized
✅ Check timesheet status (Dashboard → Timesheets)
✅ Request leave early in week, before Friday approval
✅ Coordinate with manager if possible

**Related Pages**: [Leave Management Guide](../2-Employee-Guide/2.2-Leave-Management.md)

---

#### ❌ `duration_overlap` - "Date conflicts with an existing request"

**What This Means**:
You tried to request leave for dates that overlap with a request you already made.

**Why It Happens**:
- You already have a pending or approved request for those dates
- System doesn't allow overlapping leave requests
- Prevents double-booking yourself
- Can't take two types of leave same day

**How to Fix**:
1. Check existing leave requests (Dashboard or Leave section)
2. Choose different dates that don't overlap
3. Or modify the existing request instead

**Example**:
```
Existing Request: Vacation Feb 10-15 (Pending)
New Request: Personal Feb 12-14
ERROR: "Date conflicts with an existing request"

SOLUTIONS:
Option 1: Use different dates
  - Request Personal Feb 17-19 instead

Option 2: Modify existing request
  - Cancel Personal request
  - Change Vacation to Feb 10-19 instead

Option 3: Wait for approval
  - If pending, wait for manager approval/rejection
  - Then submit new request for different dates
```

**Prevention**:
✅ Check existing requests before requesting new leave
✅ Plan leave on calendar to avoid conflicts
✅ Request full vacation block together (not split requests)
✅ Modify request instead of creating overlapping requests

**Related Pages**: [Leave Management Guide](../2-Employee-Guide/2.2-Leave-Management.md)

---

### APPROVAL ERRORS

---

#### ❌ `required_remarks` - "Please provide a reason for disapproval"

**What This Means**:
You (as manager) tried to reject/disapprove a request without adding comments explaining why.

**Why It Happens**:
- Disapproving a request is a significant decision
- Employee needs to understand why their request was rejected
- Company requires audit trail of rejection reasons
- Prevents vague or unexplained denials

**How to Fix**:
1. Add **Remarks** or **Comments** field
2. Explain why you're rejecting the request
3. Click **Disapprove** again

**Example**:
```
You try to reject a leave request
ERROR: "Please provide a reason for disapproval"

You add remarks: "Coverage needed for customer visit this week.
Please resubmit for March dates."

Click Disapprove → SUCCESS ✅
Employee sees your reason and can plan accordingly
```

**What to Include in Remarks**:
✅ Why you're rejecting (coverage, budget, business need)
✅ When they can resubmit (specific dates if possible)
✅ Alternative solutions if available
✅ What they should do next

**Example Remarks**:
```
"We need your coverage for the client meeting Feb 14-15.
Please request different dates (Feb 17+). Approved then."

"Insufficient team coverage this week.
Resubmit for next month when [colleague] returns."

"This conflicts with project deadline.
Can you adjust to March?"
```

**Note**: **Approval doesn't require remarks** - only disapproval

**Related Pages**: [Approving Requests Guide](../3-Manager-Guide/3.2-Approving-Requests.md)

---

#### ❌ `approved_delete` - "Approved request cannot be deleted"

**What This Means**:
You tried to delete a request that has already been approved.

**Why It Happens**:
- Approved requests are locked (payroll impact)
- Deleting would lose audit trail
- May already be reflected in payroll/timesheets
- System prevents accidental deletion

**How to Fix**:
1. Contact your manager
2. Ask them to **revoke** the approval
3. Once revoked, request goes back to PENDING
4. Then you can delete it
5. Or manager will delete it for you

**Example**:
```
You approved a leave request on Friday
On Monday you realize it was a mistake
You try to delete it
ERROR: "Approved request cannot be deleted"

SOLUTION:
1. Tell the manager: "Can you revoke the leave approval?"
2. Manager revokes it
3. Request status → PENDING
4. Delete option appears
5. Delete request successfully
```

**Prevention**:
✅ Review requests carefully before approving
✅ Ask employee questions if unclear
✅ Approve only when you're certain
✅ Use revoke feature if you make a mistake

**Related Pages**: [Approving Requests Guide](../3-Manager-Guide/3.2-Approving-Requests.md)

---

### SCHEDULING ERRORS

---

#### ❌ `has_conflict` - "Schedule conflict"

**What This Means**:
You tried to create a schedule for an employee, but there's already another schedule at overlapping times on the same date.

**Why It Happens**:
- Employee already has a shift scheduled for overlapping hours
- System prevents double-booking
- Example: Can't schedule 9-5 AND 2-6 on same day
- Ensures schedule clarity

**How to Fix**:
1. Check existing schedules (View Schedule for employee)
2. Delete conflicting schedule, OR
3. Choose different time that doesn't overlap, OR
4. Change the existing schedule instead

**Example**:
```
Existing Schedule: 9:00 AM - 5:00 PM (Regular)
You try to add: 2:00 PM - 6:00 PM (Different shift)
ERROR: "Schedule conflict"

SOLUTIONS:
Option 1: Delete existing schedule
  - Remove 9-5 shift
  - Create new 2-6 shift instead

Option 2: Use different time
  - Create 6:00 PM - 10:00 PM (no overlap)
  - Keep existing 9-5 schedule

Option 3: Edit existing instead
  - Change 9-5 to 2-6
  - Don't create new schedule
```

**What Counts as Conflict**:
```
❌ Overlapping: 9 AM-5 PM + 2 PM-6 PM (overlap 2-5 PM)
❌ Overlapping: 9 AM-5 PM + 4:59 PM-6 PM (overlap at end)
✅ OK: 9 AM-5 PM + 5 PM-9 PM (back-to-back, no overlap)
✅ OK: 9 AM-5 PM (one day) + 9 AM-5 PM (next day)
```

**Prevention**:
✅ Check existing schedules before creating new ones
✅ View employee schedule calendar before adding
✅ Delete old schedule before creating new one
✅ Use edit feature to modify existing schedule instead

**Related Pages**: [Scheduling Guide](../3-Manager-Guide/3.3-Scheduling.md)

---

### PAYROLL/PERIOD ERRORS

---

#### ❌ `period_locked` - "Request cannot be revoked, Period is already locked"

**What This Means**:
You tried to revoke (undo) an approved request, but the payroll period is locked (finalized).

**Why It Happens**:
- HR admin locked the period for payroll processing
- Payroll has been calculated and finalized
- Cannot modify requests after payroll lock
- Protects payroll data integrity

**How to Fix**:
**Cannot revoke after lock. Options**:
1. Request payroll adjustment instead
   - Contact HR: "Need adjustment to payroll for [date]"
   - HR applies correction in next payroll run
2. Wait for next period
   - Lock is released after payroll is processed
   - Can revoke in future periods

**Example**:
```
Jan 31: Period locked for payroll
Feb 1: You try to revoke approved leave request
ERROR: "Request cannot be revoked, Period is already locked"

SOLUTION:
Contact HR: "Need payroll adjustment - revoke leave for Jan 15-17"
HR notes adjustment for next payroll cycle
Next payroll: Correction applied automatically
```

**What "Period Locked" Means**:
- Payroll is finalized for that month/week
- No more changes allowed to timesheets/requests
- Prevents accidental modifications to payroll
- Ensures data accuracy for payment processing

**Prevention**:
✅ Revoke requests BEFORE period is locked
✅ Check period status (ask HR when locking happens)
✅ Make corrections early in period
✅ Ask HR about lock dates for your pay cycle

**Timeline Example**:
```
Feb 1-28: Period is open
  ✅ Can create/revoke requests
  ✅ Can reverse timesheets
  ✅ Can make changes

Feb 28-Mar 1: HR locks period
  ❌ Cannot revoke requests
  ❌ Cannot reverse timesheets
  ❌ Must request adjustment instead

Mar 1: Payroll processed & paid
Mar 5: Period unlocks for next cycle
```

**Related Pages**: [Payroll Guide](../5-HR-Admin-Guide/4.4-Payroll-Management.md)

---

#### ❌ `already_reversed` - "Timesheet already reversed"

**What This Means**:
You tried to reverse a timesheet that has already been reversed once.

**Why It Happens**:
- Timesheet was reversed once already
- System doesn't allow multiple reversals
- Prevents confusion and audit trail issues
- Timesheet can only toggle POSTED ↔ DRAFT once

**How to Fix**:
Cannot reverse again. Options:
1. Create adjustment in payroll
   - Contact HR: "Need payroll adjustment for [timesheet]"
   - HR applies correction instead of reversing
2. Use next payroll period
   - Adjust hours in next period's timesheet

**Example**:
```
Week 1: Timesheet POSTED
Week 1: Manager reverses → Back to DRAFT
Week 1: Employee re-submits
Week 1: Manager re-approves → POSTED

Week 2: Manager realizes mistake and tries to reverse again
ERROR: "Timesheet already reversed"

SOLUTION:
Manager contacts HR: "Need payroll adjustment for Week 1"
HR applies correction in payroll system
OR create correcting entry in Week 2 timesheet
```

**Prevention**:
✅ Review timesheet carefully before reversing
✅ Discuss with employee before reversing
✅ Make one adjustment, don't reverse multiple times
✅ Use adjustments for corrections

**Related Pages**: [Time Tracking Guide](../2-Employee-Guide/2.1-Time-Tracking.md)

---

### AUTHORIZATION ERRORS

---

#### ❌ `denied` / `unauthorized` - "Access denied" or "401 Unauthorized"

**What This Means**:
You tried to perform an action that your role/access group doesn't allow.

**Why It Happens**:
- Your access group (role) doesn't have permission for this action
- Examples:
  - Employee trying to approve requests (only managers can)
  - Manager trying to configure leave types (only HR admin can)
  - User trying to view others' payslips (only own payslip visible)
- Permissions are set by organization/role

**How to Fix**:
1. Verify your role/access group (Settings → Profile)
2. Check if you need different permissions
3. Contact your HR admin or owner to:
   - Verify your correct role
   - Request different access group if needed
   - Check if feature is enabled for your organization

**Example**:
```
You (Employee) try to approve a leave request
ERROR: "Access denied"

REASON: Only managers and owners can approve

SOLUTION:
If you should be able to approve:
1. Check Settings → Profile → Role
2. If shows "Employee" but you're a manager:
   Contact HR: "My role should be Manager, not Employee"
3. HR updates your access group
4. You can now approve requests

If you're actually an employee:
Request manager or HR to handle the action
```

**Common Permission Scenarios**:

**❌ Cannot do (Missing Permission)**:
- Employee approving requests (need Manager role)
- Employee configuring leave types (need HR Admin role)
- Manager accessing payroll (need HR Admin role)
- Employee accessing settings (each role has limitations)

**✅ Can do (Have Permission)**:
- Clock in/out (all roles)
- Request own leave (all roles)
- View own payslip (all roles)
- Approve team requests (managers only)
- Create schedules (managers only)
- Configure settings (HR admin/owner only)

**Related Pages**: [Understanding Your Role](../1-Getting-Started/1.5-Understanding-Your-Role.md)

---

#### ❌ `notFound` - "404 Not Found"

**What This Means**:
The thing you're trying to access doesn't exist or has been deleted.

**Why It Happens**:
- Record was deleted
- URL or ID is incorrect
- Record belongs to different organization
- Permission prevents viewing (shows as "not found" for security)

**How to Fix**:
1. Verify the record exists
   - Search for it (if search feature available)
   - Check if it was deleted
   - Verify you have access to view it
2. If accessing via link:
   - Copy and paste URL correctly
   - Don't manually edit URLs
3. Contact support if you believe record should exist

**Example**:
```
You try to view timesheet ID: abc-123-def
ERROR: "404 Not Found"

REASONS:
- Timesheet was deleted
- Wrong ID entered
- Doesn't belong to your organization
- You don't have permission to view it

SOLUTION:
- Search for timesheet by date/employee name
- Verify timesheet exists and isn't deleted
- Check you're in correct organization
```

**Related Pages**: Relevant to specific action (timesheet, request, etc.)

---

#### ❌ `badRequest` - "400 Bad Request"

**What This Means**:
Your input was invalid or prerequisites aren't met. System couldn't process your request.

**Why It Happens**:
- Wrong data format (e.g., date format, time format)
- Missing required field
- Invalid selection (e.g., employee that doesn't exist)
- Business logic issue (prerequisites missing)

**How to Fix**:
Depends on specific error. Check:
1. **Date format**: Use YYYY-MM-DD (2026-02-18)
2. **Time format**: Use HH:MM in 24-hour (14:30 not 2:30 PM)
3. **Required fields**: All marked fields must be filled
4. **Valid selections**: Choose from available options
5. **Business prerequisites**: Check if prerequisites exist

**Examples**:
```
INVALID DATE FORMAT:
You enter: 02/18/2026
Error: "400 Bad Request" (wrong format)
Fix: Enter as 2026-02-18

MISSING FIELD:
You submit leave without reason
Error: "400 Bad Request" (reason required)
Fix: Add reason field

INVALID SELECTION:
You select employee that doesn't exist
Error: "400 Bad Request"
Fix: Choose from employee list

MISSING PREREQUISITE:
You submit timesheet but no period selected
Error: "400 Bad Request"
Fix: Select valid period first
```

**Related Pages**: Relevant to specific action

---

#### ❌ `internalError` - "500 Internal Server Error"

**What This Means**:
There's a problem with the Kando system itself, not your input.

**Why It Happens**:
- Server encountered an unexpected error
- Database connection issue
- System is temporarily unavailable
- Software bug

**How to Fix**:
1. **Wait and retry** (often temporary)
   - Wait 30 seconds
   - Try the action again
2. **Refresh the page**
   - F5 or refresh button
   - Try again
3. **Log out and back in**
   - Sometimes clears temporary issues
4. **Try different browser**
   - Some problems are browser-specific
5. **Contact support**
   - If problem persists, contact support team
   - Describe what you were doing when error occurred
   - Provide any error code or details

**Example**:
```
You try to submit timesheet
ERROR: "500 Internal Server Error"

TROUBLESHOOTING:
Step 1: Wait 30 seconds
  → Retry action

Step 2: Refresh browser (F5)
  → Try again

Step 3: Log out/back in
  → Try again

Step 4: Try different browser
  → Try again

Step 5: Contact support
  → Describe: "500 error when submitting timesheet on Feb 18"
  → They investigate and fix
```

**When Contacting Support, Provide**:
✅ What you were trying to do
✅ When the error occurred (date/time)
✅ Any error code or details
✅ Your browser type
✅ Which page/feature

**Related Pages**: [Getting Help](../8-Reference/7.4-Getting-Help.md)

---

## Error Categories Summary

### By Role

**EMPLOYEE ERRORS**:
- `active_timer` - Already clocked in
- `noSchedule` - No schedule for date
- `dateHasTimesheet` - Timesheet posted
- `no_leave_credit` - No leave balance
- `date_has_timesheet` - Leave date has timesheet
- `duration_overlap` - Overlapping leave request

**MANAGER ERRORS**:
- `required_remarks` - Disapproval needs reason
- `approved_delete` - Can't delete approved
- `has_conflict` - Schedule conflict
- `period_locked` - Payroll locked (can't revoke)
- `already_reversed` - Timesheet already reversed

**SYSTEM ERRORS**:
- `denied` / `unauthorized` - Permission denied
- `notFound` - Record doesn't exist
- `badRequest` - Invalid input
- `internalError` - Server error

---

## Prevention Checklist

### For Employees ✓
- [ ] Check status before clocking in (Dashboard)
- [ ] Verify your schedule before arriving
- [ ] Clock out before timesheet is finalized
- [ ] Check leave balance before requesting
- [ ] Review existing requests for conflicts
- [ ] Request leave during open period (before lock)

### For Managers ✓
- [ ] Review employee status before approving
- [ ] Check team schedules for conflicts
- [ ] Provide reason when disapproving
- [ ] Review carefully before approving
- [ ] Revoke requests before period locks
- [ ] Discuss with employee before reversing

### For HR Admin ✓
- [ ] Initialize leave credits for new employees
- [ ] Create schedules before clock-in opens
- [ ] Lock periods only when payroll ready
- [ ] Set up leave types and policies first
- [ ] Communicate lock dates to team

---

## Getting Help

**Can't find your error?**
- Check [Getting Help](../8-Reference/7.4-Getting-Help.md)
- Contact support: support@kando.com
- Describe what you were doing and full error message

**Related Guides**:
- [Time Tracking](../2-Employee-Guide/2.1-Time-Tracking.md)
- [Leave Management](../2-Employee-Guide/2.2-Leave-Management.md)
- [Approving Requests](../3-Manager-Guide/3.2-Approving-Requests.md)
- [Scheduling](../3-Manager-Guide/3.3-Scheduling.md)
- [Understanding Your Role](../1-Getting-Started/1.5-Understanding-Your-Role.md)

---

**Last Updated**: 2026-02-18
**For Questions**: support@kando.com
