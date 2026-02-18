# Cost Centers, Departments & Scheduling

*Guide for HR administrators to manage organizational structure, cost centers, and team scheduling.*

## Overview

Proper organizational structure setup enables:
- Clear reporting hierarchy
- Accurate cost allocation
- Efficient scheduling
- Proper access control
- Department budgeting
- Performance tracking by team

This guide covers cost centers, departments, team structure, and basic scheduling management.

## Cost Centers

### What Are Cost Centers?

**Cost Centers** = Divisions of your organization used for budget tracking and cost allocation

**Purpose**:
- Track labor costs by department
- Monitor budget vs. actual spending
- Allocate expenses to correct department
- Enable departmental profitability analysis
- Support accounting integrations

**Examples**:
```
Cost Centers:
├─ SALES-001 - Sales Department
├─ OPS-001 - Operations
├─ HR-001 - Human Resources
├─ IT-001 - Information Technology
├─ MGT-001 - Management
└─ ADMIN-001 - Administrative
```

### Setting Up Cost Centers

**Required Information**:
```
Cost Center Details:
├─ Name: "Sales Department"
├─ Code: "SALES-001"
├─ Manager: [Assigned department head]
├─ Status: Active / Inactive
├─ Budget: PHP 500,000 (monthly labor budget)
├─ Cost Code: For accounting system
└─ Location: [Office location if applicable]
```

**Configuration Steps**:
1. Go to **HR Admin** → **Organization** → **Cost Centers**
2. Click **Create Cost Center**
3. Fill in details:
   - Name: "Sales Department"
   - Code: "SALES-001" (must be unique)
   - Description: "Sales team and personnel"
   - Manager: [Select manager from dropdown]
   - Status: Active
4. Optional: Set budget limit (if tracking)
5. Click **Save**

**Assigning Employees to Cost Centers**:
1. Go to **HR Admin** → **Employees**
2. Select employee record
3. Set **Cost Center** field to "SALES-001"
4. Save changes
5. Employee's payroll costs attributed to this center

### Cost Center Budget Tracking

**Setting Monthly Budgets**:
1. Open Cost Center
2. Set **Monthly Budget**: PHP 500,000
3. System tracks:
   - Total salaries
   - Overtime costs
   - Allowances
   - Benefits
4. Dashboard shows:
   - Budget: PHP 500,000
   - Used: PHP 485,000
   - Remaining: PHP 15,000
   - Variance: -3%

**Viewing Cost Center Reports**:
1. Go to **Reports** → **Cost Center Reports**
2. Select month and cost center
3. View breakdown by:
   - Employee (salary by person)
   - Component (basic, OT, allowances)
   - Headcount (employee count)
4. Compare budget vs. actual
5. Export to Excel for analysis

### Organizing Cost Centers Hierarchically

**Multi-Level Structure** (Optional):
```
ORGANIZATION
├─ SALES (parent)
│  ├─ SALES-FIELD (regional)
│  ├─ SALES-SUPPORT (back-office)
│  └─ SALES-MGMT (management)
├─ OPERATIONS (parent)
│  ├─ OPS-WAREHOUSE
│  ├─ OPS-LOGISTICS
│  └─ OPS-QC
└─ ADMIN (parent)
   ├─ HR
   ├─ IT
   └─ FINANCE
```

**Benefits**:
- Easier budget rollup (parent = sum of children)
- Better reporting granularity
- Clearer organization structure
- Easier cost allocation

## Departments and Teams

### Setting Up Departments

**Department** = Organizational unit with:
- Manager (department head)
- Employees (members)
- Cost center assignment
- Location/office
- Reporting structure

**Creating a Department**:
1. Go to **HR Admin** → **Organization** → **Departments**
2. Click **Add Department**
3. Enter:
   - Name: "Sales"
   - Manager: [Select department head]
   - Cost Center: "SALES-001"
   - Location: "Singapore Office"
   - Description: "Revenue-generating sales team"
4. Click **Save**

**Assigning Employees to Department**:
1. Edit employee record
2. Set **Department** field
3. System auto-assigns to associated cost center
4. Save changes

### Team Structure and Reporting Hierarchy

**Reporting Relationships**:
```
Organization Chart Example:

Chief Executive Officer
├─ VP Sales
│  ├─ Manager - Singapore
│  │  ├─ Sales Rep 1
│  │  ├─ Sales Rep 2
│  │  └─ Sales Rep 3
│  └─ Manager - Manila
│     ├─ Sales Rep 4
│     └─ Sales Rep 5
├─ VP Operations
│  ├─ Operations Manager
│  │  ├─ Warehouse Lead
│  │  └─ Logistics Lead
│  └─ Quality Manager
└─ Chief Financial Officer
   └─ Finance Manager
```

**Setting Up Reporting Hierarchy**:
1. Edit each employee record
2. Set **Manager** field (direct supervisor)
3. Set **Department** field
4. Save
5. System builds hierarchy automatically

**Impact**:
- Defines who approves requests
- Controls data visibility
- Establishes team boundaries
- Enables team reports

### Managing Departments

**View All Departments**:
1. Go to **HR Admin** → **Departments**
2. See list of all departments
3. View manager and employee count
4. Click to edit or manage

**Department Changes**:
- **Add employee**: Edit employee, set department
- **Remove employee**: Edit employee, clear department
- **Change manager**: Edit department, update manager
- **Modify details**: Edit department information

## Scheduling Management

### Creating Shift Types

**What Are Shift Types?**
```
Shift Type = Defined time block with specific rules

Examples:
├─ Day Shift: 8 AM - 5 PM (Regular hours)
├─ Evening Shift: 5 PM - 2 AM (Evening pay premium)
├─ Night Shift: 10 PM - 7 AM (Night differential pay)
├─ Weekend: Saturday/Sunday (Weekend premium)
└─ Holiday: Public holidays (Holiday premium)
```

**Creating Shift Types**:
1. Go to **HR Admin** → **Shifts**
2. Click **Add Shift**
3. Fill in:
   - Name: "Night Shift"
   - Start Time: 10 PM
   - End Time: 7 AM
   - Hours: 8 hours
   - Pay Multiplier: 1.3 (30% premium)
   - Applicable To: Night shift employees
4. Click **Save**

### Creating Schedule Templates

**Purpose**: Reusable schedules for consistency

**Example Template**:
```
"Standard 5-Day Week"
├─ Monday-Friday: 8 AM - 5 PM (Day Shift)
├─ Saturday: Off
└─ Sunday: Off

"Rotating Shift"
├─ Week 1: 8 AM - 5 PM
├─ Week 2: 5 PM - 2 AM
├─ Week 3: 10 PM - 7 AM
└─ Then repeat
```

**Creating a Template**:
1. Go to **HR Admin** → **Schedule Templates**
2. Click **Add Template**
3. Name: "Standard 5-Day"
4. Define daily schedule:
   - Each day: Shift type (Day Shift, Off, etc.)
   - Each day: Hours and times
5. Click **Save**
6. Assign to employees or departments

### Publishing Schedules

**Creating a Schedule**:
1. Go to **Scheduling** → **Create Schedule**
2. Select:
   - Department: "Sales"
   - Period: "February 2026"
   - Template: "Standard 5-Day"
3. System applies template to all employees
4. Adjust if needed:
   - Click individual employee
   - Change shift for specific dates
   - Add notes (if training, meeting, etc.)
5. Click **Publish**
6. Employees notified of schedule

**Timeline**:
- Publish at least 2 weeks in advance
- Earlier = better for employee planning
- Avoid last-minute changes
- Announce in meetings if major changes

### Schedule Best Practices

✅ **DO**:
- **Plan ahead** (publish at least 2 weeks early)
- **Respect preferences** (gather employee input)
- **Ensure coverage** (verify staffing levels)
- **Balance workload** (fair distribution of OT/shifts)
- **Allow flexibility** (accommodate requests when possible)
- **Communicate changes** (notify immediately of changes)
- **Use templates** (consistency builds trust)

❌ **DON'T**:
- Don't change schedule last-minute (employees need notice)
- Don't over-schedule OT (risks burnout)
- Don't schedule without considering skills (match to role)
- Don't ignore employee requests (listen to concerns)
- Don't under-schedule coverage (risks quality/safety)
- Don't use inconsistent shift definitions (confuses people)
- Don't fail to publish (employees can't plan)

## Organizational Structure Best Practices

✅ **DO**:
- **Define clear hierarchy** (know who reports to whom)
- **Assign managers clearly** (everyone has a manager)
- **Use cost centers** (track budgets properly)
- **Group related roles** (make sense in departments)
- **Document structure** (maintain org chart)
- **Review regularly** (update as organization changes)
- **Align with accounting** (cost codes match GL)
- **Train managers** (on their responsibility)

❌ **DON'T**:
- Don't leave employees without a manager
- Don't create too many cost centers (difficult to track)
- Don't have unclear reporting lines (causes confusion)
- Don't forget to add new employees to structure
- Don't misalign departments and cost centers
- Don't change structure without planning
- Don't use inconsistent naming (confuses system)
- Don't override manager assignments randomly

## Troubleshooting

**Problem**: "Manager can't see team members' data"
**Cause**: Team assignment not configured
**Solution**:
1. Edit each employee record
2. Verify **Manager** field set to this manager
3. Verify **Department** field populated
4. Save changes
5. Manager should see team in 5-15 minutes

**Problem**: "Cost center budget shows incorrect balance"
**Cause**: Employees not assigned or payroll not updated
**Solution**:
1. Verify all employees assigned to cost center
2. Check payroll processed
3. Verify no leavers still assigned
4. Run cost center report to see breakdown
5. Contact finance if still incorrect

**Problem**: "Schedule template not applying to all employees"
**Cause**: Employees not in same department or template incomplete
**Solution**:
1. Verify all employees have same department
2. Check template has all dates defined
3. Manually assign if different schedules needed
4. Re-run template application if needed

**Problem**: "Employee appears in wrong cost center"
**Cause**: Assignment error or recent change
**Solution**:
1. Edit employee record
2. Verify cost center assignment
3. Check if recent department change
4. Update if incorrect
5. Changes apply to future payroll

## Related Pages

- [System Setup](4.1-System-Setup.md) – Cost center configuration
- [Understanding Your Role](../1-Getting-Started/1.5-Understanding-Your-Role.md) – Hierarchy and access
- [Team Management](../3-Manager-Guide/3.1-Team-Management.md) – Manager view of team
- [Scheduling Guide](../3-Manager-Guide/3.3-Scheduling.md) – Advanced scheduling

---

**Last Updated**: 2026-02-18
**For Questions**: support@kando.com
