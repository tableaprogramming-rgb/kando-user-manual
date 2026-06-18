# Employee Onboarding Strategy

**Status**: ✅ Updated based on source code audit (June 2026)

## 🔑 Prerequisites
**Before Employee's First Login**:
- ✅ HR Admin has created user account with email
- ✅ Employee record created with basic info
- ✅ Access group assigned (typically "Employee")
- ✅ Seat assigned (module license)
- ✅ Invitation email sent to employee with login credentials

**Employee receives email with**:
- Organization subdomain (login URL)
- Temporary password
- Login instructions

---

## 🎯 Goal
Get the employee to **Clock in/out, view their schedule, and request leave** within the first 15 minutes of login.

## 👤 User Mindset
- "I just received access to the system. How do I clock in?"
- "Where is my schedule?"
- "How much leave time do I have?"
- "How do I request time off?"
- "When do I get paid?"
- "I don't want to break anything or lose track of time."

---

## 🗺️ The Actual "Happy Path" (Implementation Based)

### Phase 1: First Login

**Employee receives invitation email with**:
- Organization subdomain
- Temporary password
- Organization name
- Login link

**Employee navigates to login URL** and enters:
- Email address
- Password (temporary, may be prompted to change)
- **First time login**: May need to complete profile or skip to dashboard

### Phase 2: Dashboard Welcome

**Dashboard is the landing page** when employee logs in:
- ⚠️ **No welcome modal appears** (not found in code)
- ⚠️ **No onboarding checklist appears** (not found in code)
- ⚠️ **No guided tour system** (no tooltip library found)
- **Employee sees**: Main navigation menu on left side

### Phase 3: Primary Navigation

Employee has access to these main menu items (based on access group):

#### **1. Dashboard** (Route: /dashboard)
- **Purpose**: View analytics and metrics relevant to employee
- **What shows**:
  - Customizable widgets (graphs, reports, statistics)
  - Attendance/timekeeping data
  - Leave balance summary
  - Performance metrics
- **Time to use**: 2-3 min (optional, for viewing reports)

#### **2. My Time** (Route: /my-records/my-time)
- **Purpose**: Clock in/out and view personal timelogs
- **Key features**:
  - ✅ **Timer/Clock In Button** - Prominent button to clock in
  - ✅ **Manual Time Entry** - Can enter time if needed
  - ✅ **View Timelogs** - List of all clock in/out entries
  - **Time format**: Shows date, time in, time out, hours worked
  - **Mobile friendly**: Optimized for phone use
- **Critical for employee**: This is the main daily action
- **Time to use**: 1-2 min per clock in/out action

#### **3. My Records** (Route: /my-records/my-profile)
- **Purpose**: View and manage personal information
- **Sub-sections**:
  - Personal Info (name, contact details, address, government ID)
  - Employment Info (job title, department, manager)
  - Education & Certifications
  - Contact Persons
- **Time to use**: 5-10 min (one-time during onboarding)

#### **4. Requests** (Route: /requests)
- **Purpose**: Make and view leave/other requests
- **Available actions**:
  - Create leave request (select type, dates, reason)
  - View pending requests
  - View approved/rejected requests
  - See request status and approver feedback
- **Request types available** (based on org setup):
  - Leave (annual, sick, personal, etc.)
  - Overtime (if configured)
  - Manual timelog (if allowed)
- **Time to use**: 3-5 min per request

#### **5. Time Keeping Menu** (Route: /timekeeping)
- **Sub-options**:

  **5a. Holidays** (/holidays)
  - View statutory holidays for the year
  - Company-defined holidays
  - Not applicable to most employees (informational)
  - Time: 2-3 min (view only)

  **5b. Leaves** (/leaves)
  - View leave balance by type
  - ✅ **See available days** (Annual: 15 days, Sick: 10 days, etc.)
  - ✅ **See used days** (tracked automatically)
  - ✅ **See accrual method** (monthly, quarterly, annual)
  - Create leave request (links to Requests)
  - **Critical for employee**: Know how much leave they have
  - Time: 2-3 min per check

  **5c. Schedules** (/schedules)
  - View assigned work schedule
  - See shift times (e.g., 9 AM - 5 PM)
  - See schedule for upcoming weeks/months
  - View shift details (location, shift type, manager notes)
  - **Critical for employee**: Know when to work
  - Time: 2-3 min per check

  **5d. Timelog** (/timelogs)
  - Alternative view of clocking in/out records
  - Similar to "My Time" but may show different details
  - Detailed timelog history
  - Time: 2-3 min per review

  **5e. Timesheet** (/timesheets)
  - Submit timesheet for approval
  - Consolidates timelogs into timesheet form
  - Shows daily hours, total hours, manager notes
  - Requires approval before finalization
  - **Important**: Some orgs require timesheet submission
  - Time: 5 min per submission

#### **6. People Menu** (Route: /people)
- **Sub-options**:

  **6a. My Team** (if Manager)
  - View list of direct reports
  - Not available to regular employees
  - For managers only

  **6b. Documents** (/documents)
  - View personal documents (employment agreement, tax forms, etc.)
  - Upload personal documents if allowed
  - Download documents for record
  - **Optional feature** (depends on org setup)
  - Time: 5-10 min (if used)

#### **7. Payroll Menu** (if configured)
- **Sub-option**:

  **7a. Paysheet** (/paysheet)
  - View payslip/salary breakdown
  - Shows gross pay, deductions, net pay
  - Download payslip as PDF
  - View pay history
  - **Important for employee**: See how much they earned
  - Time: 3-5 min per payslip review

---

## ✅ Key Employee Features (Actual Implementation)

| Feature | Status | Location | Time |
|---------|--------|----------|------|
| **Clock In/Out** | ✅ | My Time or Timekeeping | 1-2 min |
| **View Schedule** | ✅ | Timekeeping → Schedules | 2-3 min |
| **Check Leave Balance** | ✅ | Timekeeping → Leaves | 2-3 min |
| **Request Leave** | ✅ | Requests (or Leaves) | 3-5 min |
| **View Payslip** | ✅ | Payroll → Paysheet | 3-5 min |
| **View Timelogs** | ✅ | My Time or Timekeeping | 2-3 min |
| **Submit Timesheet** | ✅ | Timekeeping → Timesheet | 5 min |
| **View My Info** | ✅ | My Records | 5-10 min |
| **View Documents** | ✅ | People → Documents | 5-10 min |
| **View Reports/Dashboard** | ✅ | Dashboard | 2-3 min |
| **Welcome Modal** | ❌ | — | — |
| **Guided Tour** | ❌ | — | — |
| **Setup Checklist** | ❌ | — | — |
| **Auto-Suggest Clock In** | ❌ | — | — |

---

## 🎯 Actual Employee Onboarding Flow

### First Day: Getting Started (15-20 minutes)

**Step 1: Login** (2-3 min)
- Receive email from HR Admin
- Click login link or go to subdomain
- Enter email and password
- Land on Dashboard

**Step 2: First Clock In** (1-2 min)
- Navigate to: **My Time** (from menu)
- Click prominent **Clock In** button
- System records time
- Can see today's timelog entry
- **Success**: Employee has clocked in!

**Step 3: Check Schedule** (2-3 min)
- Navigate to: **Timekeeping → Schedules**
- View assigned shifts for upcoming days
- Understand work hours (e.g., 9 AM - 5 PM)
- **Success**: Employee knows when to work

**Step 4: View Leave Balance** (2-3 min)
- Navigate to: **Timekeeping → Leaves**
- See available leave days by type
- Example: "Annual Leave: 15 days available"
- **Success**: Employee knows how much leave they have

**Step 5: Request Leave (Optional)** (3-5 min)
- Navigate to: **Requests**
- Click "Create Leave Request"
- Select leave type, dates, reason
- Submit for manager approval
- **Success**: Employee knows how to request time off

**Step 6: View Pay** (3-5 min)
- Navigate to: **Payroll → Paysheet**
- View latest payslip
- See gross, deductions, net pay
- Download if needed
- **Success**: Employee can see their salary

**Step 7: Complete Profile** (5-10 min)
- Navigate to: **My Records**
- Verify personal information
- Complete missing fields if needed
- Add emergency contacts, address, etc.
- **Success**: HR has accurate employee data

### Daily Routine (2-3 minutes)
- Open system at start of shift
- Click **Clock In**
- Check **Schedule** for day's work
- At end of shift: **Clock Out**
- View **Leave Balance** as needed

### Weekly Routine (5-10 minutes)
- Submit **Timesheet** (if required)
- Check **Paysheet** (after payroll processed)
- Request **Leave** if planning time off

---

## 🚨 Known Gaps from Original Strategy

| Feature | Original Plan | Actual | Impact |
|---------|---------------|--------|--------|
| **Welcome Modal** | Greeting + setup button | Not found | No guided intro |
| **Guided Tour** | Interactive tour with tooltips | Not found | No in-context help |
| **Setup Checklist** | Dashboard checklist widget | Not found | No progress tracking |
| **Auto-Suggest Clock In** | Prompt to clock in during shift | Not found | Employee must remember |
| **Profile Confirmation** | First-login profile verification | Not found/unclear | May need to verify later |
| **Clock In Locations** | Different clocking options | Minimal in employee view | Main is "My Time" page |

---

## 💡 Employee Experience Notes

### What Works Well ✅
- **My Time is simple** - Big clock in button, easy to use
- **Leave balance visible** - Employee sees available days clearly
- **Schedule visibility** - Can plan work around assigned shifts
- **Request process is straightforward** - Few fields to fill
- **Payslip access** - Can view salary details anytime
- **Mobile friendly** - Clock in works on phones
- **Dashboard customizable** - Can see relevant metrics

### What Could Be Better ⚠️
- **No welcome or guided tour** - Employee must explore system
- **No setup checklist** - Employee doesn't know what to do first
- **Menu is hierarchical** - Some features buried in submenus
- **No prompt to clock in** - Employee must remember
- **Multiple places to clock in** - "My Time" vs "Timekeeping → Timelog"
- **Timesheet may be required** - Not obvious to employee
- **Leave request approval unclear** - Employee doesn't know timeline

---

## 📋 Recommended Training for Employees

### Day 1: Getting Started (15-20 min training)

**Trainer shows**:
- [ ] Login process and where to go for forgotten password
- [ ] Dashboard overview (explain key widgets)
- [ ] **My Time** - How to clock in/out with timer
- [ ] **Schedules** - Where to view assigned shifts
- [ ] **Leaves** - Where to see available leave days
- [ ] **Requests** - How to request leave
- [ ] **My Records** - Where to update personal info
- [ ] **Paysheet** - Where to view payslip

**Key Points to Emphasize**:
- ⚠️ **Clock in is critical** - Records attendance and hours
- ⚠️ **Always check schedule** - Know your shift times
- ⚠️ **Leave balance is tracked** - Don't go over available days
- ⚠️ **Requests need approval** - Manager must approve before leave
- ⚠️ **Timesheet may be required** - Submit on time (if configured)
- ✅ **Documents available** - Download copies for your records
- ✅ **Mobile access** - Can clock in from phone

### Week 1: Reinforcement
- Employee completes first full week of clocking in
- Submits first timesheet (if required)
- Trainer available for questions

### Month 1: Additional Tasks
- Employee requests first leave
- Learns payroll schedule
- Understands leave accrual

---

## 🔄 Handoff from Trainer to Employee

After initial training, employee should be able to:
- ✅ Clock in/out independently
- ✅ View and understand their schedule
- ✅ Check leave balance
- ✅ Request leave if needed
- ✅ Find and download payslip
- ✅ Locate help/support resources

**Support Points to Provide**:
- Where to find trainer/HR if they need help
- How to reset forgotten password
- What to do if timelog is wrong
- How to contact manager for schedule questions
- Who to contact for payroll questions

---

## 📊 Success Metrics for Employee Onboarding

| Metric | Target | How to Measure |
|--------|--------|-----------------|
| **First clock in completed** | 100% | Check timelog on first day |
| **Employee logged in** | >95% | Track login timestamps |
| **Time to first clock in** | <30 min after login | Monitor time difference |
| **Employee can view schedule** | >90% | Ask during follow-up |
| **Employee can request leave** | >80% | Track leave request submissions |
| **Training completion** | 100% | Trainer sign-off |
| **Employee confidence** | Self-reported | Post-training survey |
| **Support tickets from onboarding** | Minimize | Track HR help requests |

---

## ⚠️ Important Notes for Trainers

### What NOT to Expect
- ❌ No welcome modal (go straight to dashboard)
- ❌ No guided tour (need to show features manually)
- ❌ No automatic onboarding checklist (provide printed guide)
- ❌ No auto-prompt to clock in (employee must remember)

### What to Emphasize
- ✅ **My Time page is the daily hub** for clocking in/out
- ✅ **Schedules shows when to work** - Always check
- ✅ **Leaves shows available time** - Plan accordingly
- ✅ **Requests is for time off** - Submit promptly for approval
- ✅ **Paysheet is your salary record** - Download and keep

### Common First-Day Issues
| Issue | Solution |
|-------|----------|
| "Where do I clock in?" | Go to My Time, click Clock In button |
| "What time do I work?" | Go to Schedules, see assigned shift |
| "How much leave do I have?" | Go to Leaves, see balance by type |
| "How do I take time off?" | Go to Requests, create leave request |
| "Timelog entry is wrong" | Contact manager or HR; can't edit directly |
| "Forgot password" | Use "Forgot Password" link on login |
| "Can't see payslip" | Check Payroll → Paysheet (if configured) |

---

## 📝 Changes from Original Strategy

| Item | Original Plan | Actual | Training Impact |
|------|---------------|--------|-----------------|
| **Welcome Modal** | Role-specific greeting | Not found | Trainer must provide welcome |
| **Profile Verification** | First-login confirmation | Not obvious/found | May need to guide later |
| **Interactive Tour** | Step-by-step guidance | Not found | Trainer must demonstrate |
| **Clock In Suggestion** | Prompt during shift time | Not found | Employee must remember |
| **Setup Checklist** | Progress tracking widget | Not found | Provide printed checklist |
| **Clock In Location** | May be obvious button | In "My Time" menu | Clear instruction needed |
| **Leave Request** | Part of guided flow | In "Requests" menu | Show specific location |
| **Payslip Access** | Highlighted early | In Payroll submenu | May be buried for employee |
