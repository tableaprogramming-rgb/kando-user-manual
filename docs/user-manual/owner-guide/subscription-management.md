# Subscription Management

*Manage your subscription seats, assign licenses to employees, and control auto-renewal settings.*

## Overview

Kando operates on a **subscription seat model**. You purchase a certain number of seats (licenses) per module (Timekeeping, Payroll, etc.), and assign them to employees. Each seat has validity dates and can be renewed or auto-renewed. This page explains how to manage your subscription.

## Understanding Subscriptions

### What is a Subscription Seat?

A **subscription seat** is a license that gives one employee access to a specific module in Kando.

**Key Concepts:**

| Term | Meaning | Example |
|------|---------|---------|
| **Seat** | One user license for one module | John Smith gets 1 Timekeeping seat |
| **Module** | A feature set in Kando | Timekeeping (time clock, timesheets) |
| **Term** | Subscription duration | Monthly, Quarterly, Annual |
| **Validity** | How long the seat is active | Feb 1 - Feb 28, 2026 |
| **Auto-Renewal** | Automatically renew when expiring | Enabled (seat renews on expiry) |

**Example:**
```
Your organization purchases:
- 50 x Timekeeping (1 month term)
- 10 x Payroll (1 month term)

You assign:
- 50 employees get 1 Timekeeping seat each
- 10 managers get 1 Payroll seat each

When seats expire, they must be renewed (manually or auto-renewed)
```

### Subscription Status

Each seat has a status:

- **Active** - Employee can use the module
- **Inactive** - Employee cannot use the module (expired seat)

## Accessing Subscription Management

1. Click **Settings** in the main menu
2. Select **Organization** from the sidebar
3. Click the **Subscriptions** tab
4. You'll see a table of all your subscription seats

## Subscription Table

The subscription table shows all your seats in a convenient view:

### Columns Explained

| Column | Information | Notes |
|--------|-------------|-------|
| **Seat Code** | Unique identifier for the seat | e.g., "SEA001-2026" |
| **Module** | Type of subscription | Timekeeping, Payroll, etc. |
| **Term** | Subscription duration | Monthly, Quarterly, Annual |
| **Valid From** | When seat becomes active | 2026-02-01 |
| **Valid Until** | When seat expires | 2026-02-28 |
| **Assigned User** | Which employee has this seat | John Smith |
| **Status** | Active or Inactive | Green = Active, Red = Inactive |
| **Auto-Renew** | Whether seat auto-renews | Icon indicates yes/no |

### Filtering Subscriptions

You can filter the table to find specific seats:

**Search:**
- Search by seat code
- Search by employee name
- Search by module type

**Filter Options:**

1. **Date Range Filter**
   - Today
   - Last 30 days
   - Last 60 days
   - Last 90 days
   - Last year
   - Custom date range

2. **Seat Type Filter**
   - Select which modules to view
   - Multi-select to view multiple modules
   - Clear all to show all modules

3. **Term Filter**
   - Monthly seats only
   - Quarterly seats only
   - Annual seats only
   - Or select multiple

4. **Status Filter**
   - Active seats only
   - Inactive seats only
   - All seats

**To filter:**
1. Select filter criteria from dropdown menus
2. Table updates automatically
3. Click **Clear Filters** to reset

## Managing Individual Seats

### Assigning a Seat to an Employee

**Prerequisites:**
- The employee must be added to your organization
- You must have an unassigned seat available

**Steps:**

1. Find an **unassigned seat** in the subscription table
2. Click the **⋮** (menu) button for that seat
3. Select **Assign to Employee**
4. Choose employee from dropdown
5. Confirm assignment
6. Seat is now assigned to the employee

**Tips:**
✅ Assign seats before employee starts work
✅ Keep unassigned seats for new hires
✅ If running low on seats, contact support to purchase more

### Unassigning a Seat from an Employee

When an employee leaves or no longer needs a module:

1. Find the seat assigned to that employee
2. Click the **⋮** (menu) button
3. Select **Unassign Employee**
4. Confirm unassignment
5. Seat becomes unassigned and can be reassigned

**What happens:**
- Employee loses access to the module
- Seat can be assigned to another employee
- Employee's historical data is preserved
- Billing continues until seat expires

### Renewing an Expired Seat (Manual)

When a seat expires and is inactive:

1. Find the **inactive seat** in the table
2. Click the **⋮** (menu) button
3. Select **Renew Seat**
4. Choose new renewal period (1 month, 3 months, 1 year)
5. Confirm renewal
6. Seat is now active again

**After renewal:**
- New validity dates appear in table
- Employee regains access immediately
- Billing applies for renewal period

**Prevention:**
- Enable auto-renewal for critical seats
- Monitor expiration dates
- Set renewal reminders (optional)

### Enabling Auto-Renewal

Auto-renewal automatically renews a seat when it expires, preventing access interruption:

1. Find the seat in the table
2. Look for the **Auto-Renew** icon
   - Enabled: Checkmark or green icon
   - Disabled: Empty or gray icon
3. Click the **⋮** (menu) button
4. Select **Enable Auto-Renewal**
5. Confirm setting
6. Icon updates to show auto-renew is enabled

**Auto-Renewal Benefits:**
✅ Never worry about access interruption
✅ Employees keep continuous access
✅ Reduces admin burden
✅ Billing automatically continues

**Set auto-renewal for:**
- Core team members (sales, operations)
- Critical roles (managers, payroll)
- Long-term employees

### Disabling Auto-Renewal

If you want to pause a seat and review before renewing:

1. Find the seat with auto-renewal enabled
2. Click the **⋮** (menu) button
3. Select **Disable Auto-Renewal**
4. Confirm
5. Seat will NOT auto-renew when expired
6. You'll need to manually renew

**Use when:**
- Reviewing which seats are still needed
- Employee may be leaving soon
- Need to pause billing temporarily
- Want to re-evaluate team structure

### Deleting an Inactive Seat

You can delete seats that are no longer needed:

1. Find an **inactive/unassigned seat**
2. Click the **⋮** (menu) button
3. Select **Delete Seat**
4. Confirm deletion
5. Seat is permanently removed

**Important:**
⚠️ Cannot delete active seats (must expire or unassign first)
⚠️ Deletion is permanent
⚠️ Historical data is preserved
✅ Only delete truly unused seats

## Subscription Statistics

The subscription management page includes useful statistics:

**View Your Stats:**
- **Total Seats** - How many seats you have
- **Active Seats** - Currently being used
- **Inactive Seats** - Expired or unassigned
- **Activation Count** - How many employees are using seats
- **Expiring Soon** - Seats expiring in next 7-30 days

**Use this data to:**
- Plan for renewals
- Identify unused seats
- Optimize cost
- Ensure all employees have access

## Common Scenarios

### A new employee started, they need access

1. Go to Settings > Organization > Subscriptions
2. Find an unassigned Timekeeping seat
3. Click menu (⋮) > **Assign to Employee**
4. Select the new employee
5. Confirm assignment
6. Employee can now clock in and track time

### An employee is leaving, how do I remove their access?

1. Find their assigned seat
2. Click menu (⋮) > **Unassign Employee**
3. Confirm unassignment
4. Employee loses access immediately
5. Seat can be reassigned to next employee

### A seat is expiring tomorrow, and I forgot to renew it

1. Find the expiring seat
2. Click menu (⋮) > **Renew Seat**
3. Select 1-month renewal
4. Confirm immediately
5. Seat is renewed and access is maintained

**Prevention:**
- Enable auto-renewal for all core seats
- Check "Expiring Soon" section monthly
- Set calendar reminder for review dates

### I want to enable auto-renewal for all our team leads

1. Filter subscriptions to show only team leads
2. For each team lead seat:
   - Click menu (⋮) > **Enable Auto-Renewal**
3. Confirm for each seat
4. All team lead seats now auto-renew on expiry

### We're downsizing and want to cancel some seats

1. Review "Inactive Seats" list
2. For each unused seat:
   - Click menu (⋮) > **Delete Seat**
   - Confirm deletion
3. Billing stops for deleted seats

### Need to know how many seats we're actively using?

1. View subscription statistics at top of page
2. Check **Activation Count** - this shows active users
3. Compare to **Active Seats** - shows available licenses
4. Plan for future growth or cost optimization

## Best Practices

### Seat Assignment Strategy

✅ **DO**:
- Assign seats before employee's first day
- Review and clean up unassigned seats monthly
- Enable auto-renewal for permanent employees
- Keep 5-10% unassigned seats for new hires
- Document which roles need which modules

❌ **DON'T**:
- Leave many unassigned seats (wasted budget)
- Over-assign seats (check before second assignment)
- Ignore expiration dates
- Delete active seats directly (unassign first)
- Assign multiple seats to same employee (if not needed)

### Cost Optimization

- Identify employees who only need specific modules
- Review monthly who actually uses their seats
- Delete truly unused seats
- Consider term options (annual is usually cheaper than monthly)
- Plan hiring/departures to optimize seat usage

### Renewal Planning

- Enable auto-renewal for critical staff
- Review expiring seats quarterly
- Track renewal dates for budgeting
- Plan for seasonal hires/departures
- Build in buffer (don't let access lapse)

## Related Pages

- [Organization Profile](organization-profile.md) - Manage organization details
- [Organization Settings](organization-settings.md) - Configure settings
- [Billing Contact](billing-contact.md) - Update billing information
- [Getting Help](../reference/getting-help.md) - Contact support

---

**Last Updated**: 2026-02-12
**For Questions**: support@kando.com
