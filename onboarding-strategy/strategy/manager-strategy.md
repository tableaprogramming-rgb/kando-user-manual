# Manager Onboarding Strategy

**Status**: ✅ Updated based on source code audit (June 2026)

## 🔑 Prerequisites
**Before Manager's First Login**:
- ✅ HR Admin has created manager user account
- ✅ Manager record created with basic info
- ✅ Access group assigned as "Manager"
- ✅ Seat assigned (module license)
- ✅ Direct reports assigned (employees reporting to this manager)
- ✅ Invitation email sent with login credentials

**Manager's first login provides access to**:
- Dashboard (analytics for their team)
- My Team (team roster and details)
- Requests (approval workflows)
- Schedules (team scheduling)
- Timekeeping reports (attendance data)

---

## 🎯 Goal
Get the manager to **Review their team, approve a leave request, and view the team schedule** within the first 25 minutes.

## 👤 User Mindset
- "Who is on my team and what's their status?"
- "Do I have pending approvals?"
- "Is my team showing up to work?"
- "How do I manage my team's schedule?"
- "How do I see who is late or absent?"
- "What reports are available?"

---

## 🗺️ The Actual "Happy Path" (Implementation Based)

### Phase 1: First Login (Immediate)

Manager receives invitation email with:
- Organization subdomain
- Temporary password
- Manager role assignment

**Manager logs in and lands on Dashboard**:
- ⚠️ **No welcome modal appears** (not found in code)
- ⚠️ **No onboarding checklist appears** (not found in code)
- Dashboard shows customizable widgets (analytics, team metrics)

### Phase 2: Key Manager Features

#### **1. My Team** (Route: /my-team)
- **Purpose**: Manage and monitor team members
- **Two Views**:

  **A) Team List View**
  - Shows all direct reports in table format
  - Employee list with:
    - Employee name and ID
    - Current clock-in status (clocked in/out)
    - Current location (if available)
    - Employment status (active/inactive)
    - License status (licensed/unlicensed)
  - **Filters available**:
    - Search by employee name
    - Filter by licensed/unlicensed
    - Show "currently clocked in" only
  - **Pagination**: 50 employees per page
  - **Actions**: Click employee to view full profile

  **B) Organization Chart View**
  - Visual hierarchy of team structure
  - Shows reporting relationships
  - Can expand/collapse departments
  - Shows who reports to whom

- **Employee Profile Tabs** (Click on individual employee):
  - **Personal** - Name, contact info, photo, personal details
  - **Job** - Job title, department, manager, job info, start date
  - **Timelog** - View employee's clock in/out records
    - Can create manual timelogs (if permitted)
    - See attendance history
  - **Timesheet** - View/approve employee timesheets
    - Shows daily/weekly hours
    - Requires manager approval
  - **Leave** - View leave balance and history
    - Available days by type
    - Leave taken
    - Leave requests and status
  - **Pay Info** - View compensation information
    - Salary/wages
    - Compensation history
    - Deductions
  - **Documents** - View employee documents
    - Employment agreements, tax forms, etc.

- **Manager Capabilities**:
  - ✅ View all team member information
  - ✅ Edit employee information (if permitted)
  - ✅ Assign seats (licenses) to employees
  - ✅ Reset employee password
  - ✅ Adjust employee compensation (if permitted)
  - ✅ Manage employee access groups (if permitted)

#### **2. Requests** (Route: /requests)
- **Purpose**: Process leave, overtime, and schedule requests from team

- **Three Tabs**:

  **A) My Requests** (Employee's own requests)
  - Manager can view their own requests
  - Request types: Leave, Overtime, Manual Timelog
  - Status: Pending, Approved, Rejected
  - Can create new request for themselves

  **B) Employee Approvals** (Direct reports' requests) ✅ PRIMARY
  - Shows all requests from manager's direct reports
  - **Request types**:
    - Leave requests (annual, sick, personal, etc.)
    - Overtime requests
    - Manual timelog entries
    - Holiday swaps
    - Schedule change requests
  - **For each request**:
    - Employee name and request details
    - Date/duration of request
    - Reason/comments
    - Current status
  - **Manager actions**:
    - ✅ Approve request
    - ✅ Reject request with reason
    - ✅ Add comments
    - ✅ View request details
  - **No bulk approve** (one at a time or tab-by-tab)

  **C) All Requests** (Organization-wide)
  - View all requests from organization
  - Only visible if manager has approval authority
  - Same functionality as Employee Approvals but for all employees

- **Request Workflow**:
  1. Employee submits request (Leave, Overtime, etc.)
  2. Manager sees in "Employee Approvals" tab
  3. Manager reviews request details
  4. Manager approves or rejects
  5. Employee notified of approval status
  6. Approved requests affect payroll, timesheets, etc.

#### **3. Schedules** (Route: /schedules)
- **Purpose**: Create and manage team work schedules

- **Two Views**:

  **A) Schedules (Calendar View)**
  - Visual calendar showing team shifts
  - **Create new schedule**:
    - Define shift name (e.g., "Morning Shift")
    - Set shift time (e.g., 6 AM - 2 PM)
    - Assign employees to shift
    - Set duration (one-time or recurring)
  - **View schedule details**:
    - See which employees assigned to which shifts
    - See shift times and requirements
    - Edit or delete schedules
  - **Import schedules**:
    - Can upload schedule from file
    - Batch assign multiple shifts
  - **Shift coverage**:
    - See at a glance who's working when
    - Identify coverage gaps

  **B) Cycles (Recurring Schedules)**
  - Pre-defined shift patterns that repeat
  - Examples: "Week 1-2-3 rotation", "Standard 5-day week"
  - Can create custom cycles
  - Assign cycles to employees for automatic scheduling
  - Easier for rotating shifts

- **Manager Capabilities**:
  - ✅ Create individual schedules/shifts
  - ✅ Assign employees to shifts
  - ✅ Create recurring shift cycles
  - ✅ Import schedules from file
  - ✅ View team coverage
  - ✅ Modify or delete schedules

#### **4. Dashboard** (Route: /dashboard)
- **Purpose**: View team analytics and metrics
- **Customizable widgets** showing:
  - Team attendance metrics
  - Leave balance overview
  - Overtime trends
  - Timekeeping data
  - Custom reports (org-dependent)
- **Key metrics for managers**:
  - Who's present today
  - Pending approvals count
  - Team leave balance
  - Absence/late trends

#### **5. Time Keeping Reports** (Route: /timekeeping)
- **Sub-options available**:
  - **Holidays** - View statutory holidays
  - **Leaves** - View leave configuration and usage
  - **Timelog** - View team timelog data
  - **Timesheet** - Submit/manage team timesheets

---

## ✅ Key Manager Features (Actual Implementation)

| Feature | Status | Location | Time |
|---------|--------|----------|------|
| **View Team List** | ✅ | My Team | 2-3 min |
| **View Employee Profile** | ✅ | My Team → Click Employee | 5-10 min |
| **View Team Org Chart** | ✅ | My Team → Org Chart Tab | 2-3 min |
| **Approve Leave Request** | ✅ | Requests → Employee Approvals | 1-2 min per request |
| **View Team Schedule** | ✅ | Schedules → Calendar | 3-5 min |
| **Create Schedule/Shift** | ✅ | Schedules → Create Shift | 5-10 min |
| **View Timelogs** | ✅ | My Team → Employee → Timelog | 3-5 min |
| **View Timesheet** | ✅ | My Team → Employee → Timesheet | 3-5 min |
| **View Leave Balance** | ✅ | My Team → Employee → Leave | 2-3 min |
| **View Dashboard** | ✅ | Dashboard | 2-3 min |
| **Welcome Modal** | ❌ | — | — |
| **Setup Checklist** | ❌ | — | — |
| **Bulk Approval** | ❌ | — | — |

---

## 🎯 Manager First Day Workflow (25-30 minutes)

### Step 1: Dashboard Review (2-3 min)
- Land on Dashboard
- See customizable widgets
- Understand key metrics visible
- **Takeaway**: Know where to find team data

### Step 2: Review Team Roster (5-10 min)
- Navigate to: **People → My Team**
- See team list with names and status
- Click on 1-2 employees to view profiles
- Check who's licensed vs unlicensed
- **Takeaway**: Know how many people on team and their details

### Step 3: Approve a Request (3-5 min)
- Navigate to: **Requests**
- Click **"Employee Approvals"** tab
- Find pending request (leave, overtime, schedule change)
- Click "Approve" or "Reject"
- Add comment if needed
- Submit approval
- **Takeaway**: Know how to process approvals

### Step 4: View Team Schedule (5-10 min)
- Navigate to: **Schedules**
- View **Calendar** tab (or **Cycles** for recurring)
- See which employees assigned to which shifts
- Optionally create sample shift
- **Takeaway**: Know where schedule lives and how to create shifts

### Step 5: Check Team Timekeeping (3-5 min)
- Go back to **My Team**
- Click employee → **Timelog** tab
- See recent clock in/outs
- View attendance history
- **Takeaway**: Know how to check attendance

### Step 6: View Leave Info (3-5 min)
- Click employee → **Leave** tab
- See leave balance by type
- See leave taken and available days
- **Takeaway**: Know how to check leave status

---

## 🚨 Known Gaps from Original Strategy

| Feature | Original Plan | Actual | Impact |
|---------|---------------|--------|--------|
| **Welcome Modal** | Intro to duties | Not found | No guided intro |
| **Setup Checklist** | Dashboard tracking | Not found | No progress widget |
| **Notifications** | Setup alerts | Not found | May miss requests |
| **Sample Request** | System test request | Manual setup | Need real request for demo |
| **Bulk Approval** | Approve all at once | One at a time | More clicks needed |
| **Automated Reports** | Pre-built templates | Dashboard only | Limited reporting |

---

## 💡 Manager Experience Notes

### What Works Well ✅
- **Team List is clear** - Shows all direct reports with status
- **Employee profiles comprehensive** - All relevant tabs in one place
- **Approval workflow is simple** - Approve/Reject with one click
- **Schedule calendar is visual** - Easy to see coverage
- **Can view timelogs** - Monitor attendance easily
- **Dashboard customizable** - Show relevant metrics

### What Could Be Better ⚠️
- **No welcome or guided tour** - Manager must explore system
- **No setup checklist** - Doesn't know what to do first
- **No bulk approval** - Must approve requests one at a time
- **Notifications unclear** - Doesn't know how to set alerts
- **Reports limited** - Dashboard only, no pre-built reports
- **No sample data** - Need real requests to test approval

---

## 📋 Training Checklist for Managers

### First Week: Core Functions (25-30 min training)

**Trainer shows**:
- [ ] Dashboard overview (metrics and customization)
- [ ] **My Team** page (team list and filters)
- [ ] Employee profile tabs (Personal, Job, Timelog, Timesheet, Leave, Pay)
- [ ] **Requests** page - Employee Approvals tab
  - How to find pending requests
  - How to approve/reject
  - How to add comments
- [ ] **Schedules** - Calendar view
  - How to view shifts
  - How to create new shift
  - How to assign employees
- [ ] **Timelog review** (attendance monitoring)
- [ ] **Leave balance** visibility

**Key Points to Emphasize**:
- ⚠️ **Check Requests regularly** - Employees waiting for approval
- ⚠️ **Schedule in advance** - Creates clarity for team
- ⚠️ **Monitor timelogs** - Catch attendance issues early
- ⚠️ **Approve timely** - Don't leave requests hanging
- ✅ **Use Dashboard** - Quick overview of team status
- ✅ **Employee profiles have all info** - One place for all details

### First Month: Advanced Capabilities

**Manager learns**:
- Creating shift cycles for rotating shifts
- Importing schedules in bulk
- Adjusting employee compensation (if permitted)
- Creating manual timelogs for employees
- Generating reports from dashboard
- Understanding leave accrual and carryover

---

## 🔄 Handoff from Trainer to Manager

After initial training, manager should be able to:
- ✅ View their team and individual profiles
- ✅ Approve/reject leave and overtime requests
- ✅ Create and manage team schedules
- ✅ Monitor team attendance via timelogs
- ✅ Check leave balances
- ✅ Use dashboard for team metrics
- ✅ Create and assign shifts
- ✅ Find all employee information in profiles

**Support Points to Provide**:
- Where to find trainer/HR if they need help
- How to handle special request situations
- What to do if schedule conflicts occur
- How to escalate issues to HR
- How to use dashboard filters

---

## 📊 Success Metrics for Manager Onboarding

| Metric | Target | How to Measure |
|--------|--------|-----------------|
| **Access My Team page** | 100% | Track page views |
| **Process first approval** | >90% | Watch for submitted approvals |
| **Create first schedule** | >80% | Check schedule records |
| **View employee timelog** | >90% | Track profile page visits |
| **Manager confidence** | Self-reported | Post-training survey |
| **Response time to approvals** | <24 hours | Monitor request timestamps |
| **Support tickets** | Minimize | Track help desk requests |

---

## ⚠️ Important Notes for Trainers

### What NOT to Expect
- ❌ No welcome modal (go straight to dashboard)
- ❌ No guided tour (need to show features manually)
- ❌ No setup checklist (provide printed guide)
- ❌ No bulk approval button (approve one at a time)
- ❌ No automatic notifications setup (manager must check manually)

### What to Emphasize
- ✅ **My Team is the main hub** - All employee info in one place
- ✅ **Requests tab is critical** - Where approvals live
- ✅ **Schedule management prevents conflicts** - Plan ahead
- ✅ **Timelogs show attendance** - Monitor regularly
- ✅ **Dashboard shows quick metrics** - Use for overview

### Common First-Week Issues

| Issue | Solution |
|-------|----------|
| "Where is my team?" | Go to My Team, should see all direct reports |
| "How do I approve leave?" | Go to Requests → Employee Approvals tab |
| "Can I create a schedule?" | Go to Schedules → Click "Create Schedule" |
| "How do I see who's late?" | Go to My Team → Employee → Timelog |
| "What about timesheet?" | Go to My Team → Employee → Timesheet tab |
| "How do I check leave balance?" | Go to My Team → Employee → Leave tab |
| "No pending requests showing" | Check if anyone on team requested time off |
| "Schedule not showing shifts" | Must create shifts first before assigning |

---

## 📝 Changes from Original Strategy

| Item | Original Plan | Actual | Training Impact |
|------|---------------|--------|-----------------|
| **Welcome Modal** | Guided intro | Not found | Trainer must provide intro |
| **Setup Checklist** | Progress tracking | Not found | Provide printed checklist |
| **Notifications** | Setup alerts | Manual check | Explain where to check |
| **Sample Request** | System test request | Manual setup | Need real data for demo |
| **Bulk Approval** | Approve all at once | One at a time | Explain workflow clearly |
| **Reports** | Pre-built templates | Dashboard only | Show dashboard features |
| **Team View** | Widget on dashboard | Separate page | Clear navigation needed |

---

## 🔑 Critical Manager Functions

**Primary (Daily/Weekly)**:
1. ✅ Check pending approvals (Requests page)
2. ✅ Monitor team attendance (My Team timelogs)
3. ✅ Review team status (Dashboard)

**Secondary (Weekly/Monthly)**:
1. ✅ Create/update team schedule (Schedules)
2. ✅ Review leave status (Leave tab)
3. ✅ Check timesheet submissions (Timesheet tab)

**Occasional**:
1. ✅ Update employee information (Profile tabs)
2. ✅ Adjust compensation (If permitted)
3. ✅ Generate reports (Dashboard)
4. ✅ Create manual timelogs (If permitted)
