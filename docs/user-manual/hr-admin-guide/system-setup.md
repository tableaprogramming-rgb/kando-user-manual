# System Setup - HR Admin Basics

*Complete guide for HR administrators to configure and maintain Kando system settings.*

## Overview

As an HR Administrator, you're responsible for configuring Kando's core features that enable the entire organization to use the system. This guide covers the fundamental setup tasks needed before employees can start tracking time, requesting leave, and processing payroll.

**Your Responsibilities**:
- Configure organization basics
- Set up leave policies and types
- Create and manage employees
- Configure payroll settings
- Manage holidays and schedules
- Maintain system settings

## System Setup Checklist

Before employees can work, verify all items are configured:

### Organization Setup
- [ ] Organization name and details configured
- [ ] Logo and branding set (optional)
- [ ] Business address and contact information
- [ ] Fiscal year and payroll period defined
- [ ] Company timezone set correctly
- [ ] Currency and tax settings configured

### User Management
- [ ] Admin accounts created
- [ ] Manager accounts created
- [ ] Employee records created
- [ ] Department/team assignments done
- [ ] Access groups configured
- [ ] Reporting hierarchy defined
- [ ] Module seats (Timekeeping, Payroll, etc.) assigned to all active employees

### Leave Configuration
- [ ] Leave types created (Vacation, Sick, Personal, etc.)
- [ ] Leave credit allocations set
- [ ] Leave policies configured
- [ ] Approval workflows defined
- [ ] Leave balance initialized

### Payroll Configuration
- [ ] Salary components configured (basic, allowances)
- [ ] Tax settings entered
- [ ] Deductions configured
- [ ] Pay cycle defined
- [ ] Payment methods configured
- [ ] Payroll rules established

### Scheduling
- [ ] Shift types created (Day, Night, Weekend)
- [ ] Schedule templates created
- [ ] Cost centers defined
- [ ] Holiday calendar set up
- [ ] Leave calendar published

### System Settings
- [ ] Email notifications configured
- [ ] Document settings
- [ ] Reports configured
- [ ] Data backup scheduled

## Key HR Admin Features

### 1. Leave Type Configuration

**What to Configure**:
```
For each leave type:
├─ Name: "Vacation Leave" or "Annual Leave"
├─ Code: "VAC" or "AL"
├─ Category: Paid / Unpaid
├─ Allocation Method: Annual / Monthly / Per Hire
├─ Credit Balance: 20 days/year
├─ Max Carryover: 5 days
├─ Expiration Date: Dec 31
└─ Approval Required: Yes/No
```

**Common Leave Types**:
```
1. Vacation/Annual Leave
   ├─ Allocation: 20 days/year
   ├─ Carryover: Max 5 days to next year
   └─ Policy: Advance notice 2 weeks

2. Sick Leave
   ├─ Allocation: 10 days/year
   ├─ Carryover: Usually doesn't carry over
   └─ Policy: Medical certificate if >2 days

3. Personal Leave
   ├─ Allocation: 3 days/year
   ├─ Carryover: None
   └─ Policy: Manager approval

4. Bereavement Leave
   ├─ Allocation: As needed per policy
   ├─ Carryover: N/A
   └─ Policy: With documentation

5. Unpaid Leave
   ├─ Allocation: Unlimited (but approval needed)
   ├─ Carryover: N/A
   └─ Policy: Special cases only
```

**Setting Up Leave Types**:
1. Go to **HR Admin** → **Leave Configuration**
2. Click **Add Leave Type**
3. Fill in details (name, allocation, carryover)
4. Set approval requirements
5. Define policy rules
6. Click **Save**

### 2. Holiday Calendar Setup

**What to Configure**:
```
For each holiday:
├─ Date: Feb 25 (EDSA Anniversary)
├─ Name: "EDSA Anniversary"
├─ Type: Regular Holiday / Special Holiday
├─ Applicable To: All / Specific departments
├─ Pay Type: Regular pay / Premium (if worked)
└─ Note: (optional)
```

**Common Philippine Holidays**:
```
Regular Holidays (Nationwide):
├─ January 1 - New Year's Day
├─ February 25 - EDSA Anniversary
├─ April 9 - Day of Valor
├─ June 12 - Independence Day
├─ August 21 - Ninoy Aquino Day
├─ November 1 - All Saints' Day
├─ November 30 - Bonifacio Day
├─ December 8 - Feast of the Immaculate Conception
├─ December 25 - Christmas Day
└─ December 30 - Rizal Day

Special Holidays (declared yearly):
├─ Maundy Thursday
├─ Good Friday
├─ Black Saturday
└─ Others as declared by government
```

**Setting Up Holidays**:
1. Go to **HR Admin** → **Holidays**
2. Click **Add Holiday**
3. Select date from calendar
4. Enter holiday name
5. Choose type (Regular or Special)
6. Set pay rules if worked
7. Click **Save**

### 3. Employee Record Setup

**What to Configure per Employee**:
```
Personal Information:
├─ Full Name
├─ Email Address
├─ Phone Number
├─ Date of Birth
├─ Gender
└─ Address

Employment Information:
├─ Employee ID
├─ Department
├─ Job Title
├─ Manager (reporting to)
├─ Start Date
├─ Employment Type (Full-time, Part-time, Contract)
└─ Cost Center

Compensation:
├─ Basic Salary
├─ Allowances
├─ Deductions
└─ Pay Type (Direct Deposit, Check)

System Access:
├─ Username/Email
├─ Role (Employee, Manager, HR Admin)
├─ Access Group
└─ System Activation Date
```

**Creating Employee Records**:
1. Go to **HR Admin** → **Employees**
2. Click **Add Employee**
3. Fill in personal information
4. Set employment details
5. Configure compensation
6. Assign role and access
7. Click **Save**

**Bulk Import** (Optional):
- Upload Excel file with multiple employees
- System validates and imports
- Faster for large organizations

### 4. Payroll Configuration

**What to Configure**:
```
Pay Cycle:
├─ Pay Period: Monthly / Biweekly / Weekly
├─ Cycle Dates: 1st-last OR 16th-15th
├─ Pay Date: Date salary deposited
└─ Cutoff Date: Date timesheet closes

Salary Components:
├─ Basic Salary: Base pay
├─ Housing Allowance
├─ Transportation Allowance
├─ Meal Allowance
├─ Other allowances (role-based)
└─ Overtime multiplier (1.25x, 1.5x, 2x)

Deductions:
├─ Income Tax (BIR)
├─ SSS Contribution
├─ PhilHealth Contribution
├─ PagIBIG Contribution
└─ Other deductions (loans, insurance, etc.)

Payment Method:
├─ Direct Deposit (bank account)
├─ Check
└─ Cash (if applicable)
```

**Setting Up Payroll**:
1. Go to **HR Admin** → **Payroll Settings**
2. Define pay cycle (monthly, biweekly, etc.)
3. Add salary components
4. Configure deductions
5. Set payment methods
6. Define overtime rates
7. Click **Save**

### 5. Shift and Schedule Configuration

**What to Configure**:
```
Shift Types:
├─ Day Shift: 6 AM - 6 PM (Regular rate)
├─ Night Shift: 6 PM - 6 AM (1.2x rate)
├─ Weekend Shift: Sat-Sun (1.3x rate)
└─ Holiday Shift: On holidays (2x rate)

Schedule Rules:
├─ Hours per day: 8 hours
├─ Days per week: 5 days
├─ Rest days: 2 days/week
├─ Break duration: 1 hour (unpaid)
└─ Flexibility: Yes/No
```

**Setting Up Shifts**:
1. Go to **HR Admin** → **Shifts**
2. Click **Add Shift Type**
3. Enter name (Day, Night, etc.)
4. Set time range
5. Define pay multiplier (if special)
6. Click **Save**

**Setting Up Schedule Templates**:
1. Go to **HR Admin** → **Schedules**
2. Click **Create Template**
3. Name the template (e.g., "Standard Day Shift")
4. Assign shift types
5. Define rotation pattern
6. Click **Save**
7. Apply template to employees/departments

### 6. Cost Centers and Departments

**What to Configure**:
```
Cost Centers:
├─ Name: "Sales Department"
├─ Code: "SALES-001"
├─ Manager: [Assigned manager]
├─ Budget: Monthly budget limit
├─ Cost Code: For accounting integration
└─ Status: Active / Inactive

Departments:
├─ Name: "Sales"
├─ Manager: [Department head]
├─ Employees: [List of assigned]
└─ Location: [Office location]
```

**Setting Up Cost Centers**:
1. Go to **HR Admin** → **Cost Centers**
2. Click **Add Cost Center**
3. Enter name and code
4. Assign manager
5. Set budget (if applicable)
6. Click **Save**

**Assigning Employees**:
1. Edit employee record
2. Set **Cost Center** field
3. Save changes

### 7. Employee Licensing & Seats

Kando features are sold per-employee as **module seats** (Timekeeping, Payroll, etc.). An employee needs a seat for a module before they can use it or be included in that module's processing.

**The "Unlicensed" tag**: If an employee doesn't have an active seat for a module, they show a red **Unlicensed** tag wherever their name appears — employee lists, the organizational chart, kiosk assignment, shift policies, schedules, and payroll/timekeeping period lists.

**Impact on processing**:
- A **Timesheet** can't be generated for a period that includes unlicensed employees (*"There are employees without Timekeeping Module seat..."*)
- A **Paysheet** can't be created for a pay group that includes unlicensed employees (*"There are employees without Payroll Module seat..."*)

**Solution**: Assign the missing seat via **Settings → Organization → Subscriptions**, or remove the employee from the period/pay group. See [Subscription Management](../owner-guide/subscription-management.md#the-unlicensed-tag) for the full seat-assignment steps.

**Tip**: Check **People → My Team**'s **Licensed / Unlicensed** filter tab regularly, especially after onboarding new hires, so seats get assigned before anyone hits a blocked period or payroll run.

## Common Configuration Scenarios

### Scenario 1: New Organization Setup

**Timeline**: Day 1-5

**Steps**:
1. **Day 1**: Configure organization basics
   - Company name, address, timezone
   - Fiscal year and pay period
   - Currency and tax settings

2. **Day 2**: Create admin users
   - Create HR admin account
   - Create finance user account
   - Set permissions

3. **Day 3**: Configure leave types
   - Add standard leave types
   - Set allocations
   - Define approval workflows

4. **Day 4**: Create employees
   - Bulk import or manual entry
   - Assign departments
   - Set compensation

5. **Day 5**: Configure payroll
   - Set pay cycle
   - Add salary components
   - Configure deductions
   - Test with trial payroll

**Verification**:
- [ ] 100+ employees created
- [ ] Leave types active
- [ ] Payroll tested
- [ ] Managers can access team data
- [ ] System ready for go-live

### Scenario 2: Adding New Leave Type

**Timeline**: 1-2 hours

**Steps**:
1. Go to **HR Admin** → **Leave Configuration**
2. Click **Add Leave Type**
3. Enter name: "Maternity Leave"
4. Set allocation: Special (as needed)
5. Carryover: Not applicable
6. Approval: HR Admin required
7. Save and test

**Verification**:
- [ ] Leave type appears in employee request form
- [ ] Correct allocation assigned
- [ ] Approval workflow works

### Scenario 3: Changing Pay Cycle

**Timeline**: 1-2 days (with planning)

**Steps**:
1. **Plan**: Decide new pay cycle
2. **Notify**: Inform all employees
3. **Finalize**: Last cycle with old schedule
4. **Configure**: Update payroll settings
5. **Test**: Run test payroll
6. **Deploy**: Start new cycle

**Important**: Changes mid-month can complicate payroll. Plan for period transitions.

## Best Practices

✅ **DO**:
- **Start with core setup** (organization, employees, leave types)
- **Test thoroughly** before go-live
- **Document configuration** for future reference
- **Maintain data accuracy** (especially compensation)
- **Review settings regularly** (quarterly)
- **Keep backup** of important configurations
- **Plan changes** (don't modify during payroll)
- **Train managers** on system basics
- **Establish policies** before configuring system
- **Validate employee data** before importing

❌ **DON'T**:
- Don't skip setup steps (complete all)
- Don't use test data in production
- Don't modify settings without testing
- Don't change configurations during payroll period
- Don't leave blank required fields
- Don't override system rules for exceptions (handle properly)
- Don't assume defaults are correct (verify)
- Don't forget to save changes
- Don't share admin passwords
- Don't delete historical data

## Troubleshooting

**Problem**: "Employees can't request leave"
**Cause**: Leave types not configured or not assigned
**Solution**:
1. Go to HR Admin → Leave Configuration
2. Verify leave types are created
3. Check if employees have access to request
4. Verify employee role is "Employee" not "Guest"

**Problem**: "Payroll calculation is wrong"
**Cause**: Incorrect salary components or deductions
**Solution**:
1. Verify basic salary amount
2. Check allowances added correctly
3. Verify deduction percentages
4. Test with trial payroll
5. Contact support if issue persists

**Problem**: "Manager can't see team"
**Cause**: Manager not assigned to employees or team
**Solution**:
1. Edit employee record
2. Set **Manager** field to correct manager
3. Verify manager role is "Manager"
4. Save and verify access

**Problem**: "Overtime not calculating"
**Cause**: Shift or overtime settings not configured
**Solution**:
1. Verify shift types are created
2. Check shift time ranges
3. Verify overtime multiplier is set
4. Test with sample timesheet

**Problem**: "Employee shows 'Unlicensed' tag / can't be included in a period or pay group"
**Cause**: The employee doesn't have an active seat for that module (Timekeeping or Payroll)
**Solution**:
1. Go to **Settings → Organization → Subscriptions**
2. Find an unassigned seat for the module they need
3. Assign it to the employee (or purchase more seats if none are available)
4. Alternatively, remove the employee from the period/pay group if they don't need that module

## Related Pages

- [Introduction](../getting-started/introduction.md#who-uses-kando) – HR Admin permissions
- [System Requirements](../getting-started/introduction.md#system-requirements) – Full setup checklist

---

**Last Updated**: 2026-09-29
**For Questions**: support@kando.com
