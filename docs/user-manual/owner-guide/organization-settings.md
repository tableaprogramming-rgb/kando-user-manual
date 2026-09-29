# Organization Settings

*Configure organization-wide settings that affect all users in your system.*

## Overview

Organization settings control how your employees experience Kando - from the timezone used for time tracking to how dates and names appear on screen. These settings apply to your entire organization. Only owners can change organization settings.

## Accessing Organization Settings

1. Click **Settings** in the main menu
2. Select **Organization** from the sidebar
3. Click the **Settings** tab (if not already selected)
4. You'll see all organization configuration options

## Core Settings

### Timezone

**What it does**: Sets the official timezone for your organization. All time entries, schedules, and time calculations use this timezone.

**Why it matters**:
- Determines when a day starts/ends in timesheets
- Affects schedule shift times
- Impacts payroll period calculations
- Used for time display across the system

**To change timezone:**

1. Find the **Timezone** dropdown
2. Select your timezone from 400+ available options
   - Common formats: `Asia/Manila`, `Europe/London`, `America/New_York`
3. Type to search: Start typing your city or timezone name
4. Click to select
5. Click **Save** (changes take effect immediately)

**Timezone Selection Tips:**
- Choose the timezone where your headquarters is located
- If multiple locations: Choose timezone for payroll processing
- Affects: Time entry, schedule start/end, period end times
- Test with one employee to verify before full rollout

**Examples:**
- Philippines: `Asia/Manila`
- India: `Asia/Kolkata`
- UK: `Europe/London`
- US Eastern: `America/New_York`
- Australia: `Australia/Sydney`

### Date Format

**What it does**: Determines how dates appear throughout Kando (e.g., reports, timesheets, payslips).

**Options:**
- `DD/MM/YYYY` - 15/02/2026
- `MM/DD/YYYY` - 02/15/2026
- `YYYY-MM-DD` - 2026-02-15
- `DD-MMM-YYYY` - 15-Feb-2026

**To change date format:**

1. Find the **Date Format** dropdown
2. Select your preferred format
3. The preview shows how dates will appear
4. Click **Save**

**Date Format Selection Tips:**
✅ Choose format your employees are familiar with
✅ Align with your country's standard
✅ Ensure HR team can read dates clearly
❌ Don't mix formats in different areas

### Time Format

**What it does**: Controls whether times appear in 12-hour (with AM/PM) or 24-hour format.

**Options:**
- **12-Hour Format** - 2:30 PM, 9:15 AM (used in US, Philippines, India)
- **24-Hour Format** - 14:30, 09:15 (used in Europe, Australia, most of Asia)

**To change time format:**

1. Find the **Time Format** setting
2. Select 12-hour or 24-hour
3. Preview shows updated time display
4. Click **Save**

**Impact on:**
- Time clock displays
- Schedule shift times
- Timesheet entries
- Payroll reports

### Employee Name Format

**What it does**: Controls how employee names appear throughout Kando (reports, timesheets, directories, etc.).

**Available Formats:**

| Format | Example | Use Case |
|--------|---------|----------|
| First Name Last Name | John Smith | Western order (English-speaking) |
| Last Name, First Name | Smith, John | Professional documents |
| Last Name First Name | Smith John | Asian format (Philippines, China) |
| First Name + Last Initial | John S. | Casual/internal use |
| Full Name (Last, First, Middle) | Smith, John Michael | Legal documents |

**To change employee name format:**

1. Find the **Employee Name Format** dropdown
2. Select preferred format
3. Preview shows how names will display
4. Click **Save**

**Name Format Selection Tips:**
✅ Choose format familiar to your culture/country
✅ Verify with sample employee names
✅ Affects all documents and reports
❌ Don't change frequently (confuses staff)

### Week Start Day

**What it does**: Determines which day is considered the start of the week (affects schedules, timesheets, and reports).

**Options:**
- **Monday** (Most common worldwide)
- **Sunday** (Common in US, Canada)
- **Saturday** (Used in some regions)

**To change week start day:**

1. Find the **Week Start Day** setting
2. Select Monday, Sunday, or Saturday
3. Click **Save**

**Impact on:**
- Weekly schedules display
- Timesheet week boundaries
- Payroll week calculations (if weekly payroll)
- Calendar views

**Week Start Selection Tips:**
✅ Align with payroll cycle if weekly
✅ Match employee expectations
✅ Affects: timesheets, schedules, reports
❌ Only change when necessary (may confuse staff)

## Department Management

**What it does**: Organizations are divided into departments for easier management and reporting. Manage your organizational structure here.

### Viewing Departments

Your current departments display in a list showing:
- Department name
- Number of employees in department
- Status (Active/Inactive)
- Action buttons

### Adding a New Department

1. Click **Add Department** button
2. Enter department details in the form:
   - **Department Name** - Official name (e.g., "Sales", "Engineering")
   - **Description** - Optional details about the department
   - **Manager** - Department head (optional)
3. Click **Save**
4. Department appears in the list immediately

### Editing a Department

1. Find the department in the list
2. Click **Edit** button
3. Update name, description, or manager
4. Click **Save Changes**
5. Changes apply immediately

### Deactivating a Department

1. Find the department in the list
2. Click **Deactivate** button
3. Confirm deactivation
4. Department appears as inactive but data is preserved
5. Re-activate anytime by clicking **Activate**

**Why deactivate instead of delete?**
- Preserves historical data
- Allows re-activation without data loss
- Maintains payroll records
- Better for compliance/audit trails

### Common Department Structure Examples

**By Function:**
- Sales
- Marketing
- Engineering
- Finance
- HR

**By Location:**
- Manila Office
- Cebu Branch
- Remote Team

**By Level:**
- Management
- Staff
- Contractors

**By Business Unit:**
- Product Development
- Customer Success
- Operations

## Saving Your Settings

**How changes are saved:**

1. Edit any setting from the form
2. Settings update automatically when you leave the field OR
3. Click **Save** button to save all changes at once
4. Confirmation message appears
5. Changes take effect immediately system-wide

**Important Notes:**
- Settings apply to ALL employees
- Changes are effective immediately
- Previous time entries keep their original timezone
- No waiting period or approval needed
- Cannot undo changes automatically (make note of old settings first)

## Common Scenarios

### We're expanding to a new timezone

1. Go to Settings > Organization > Settings
2. Click **Timezone** dropdown
3. Search for new timezone (e.g., "Singapore" for `Asia/Singapore`)
4. Click **Save**
5. All new schedules and time entries use new timezone
6. Existing entries keep their original timestamp

### A new department was created

1. Go to Settings > Organization > Settings
2. Scroll to **Department Management**
3. Click **Add Department**
4. Enter department name
5. Click **Save**
6. Department is available for assigning employees

### Need to change date format for compliance

1. Go to Settings > Organization > Settings
2. Find **Date Format**
3. Select format required by compliance (e.g., `YYYY-MM-DD` for audits)
4. Click **Save**
5. All reports now display in new format

### Our company uses last names first in our culture

1. Go to Settings > Organization > Settings
2. Find **Employee Name Format**
3. Select "Last Name, First Name" option
4. Click **Save**
5. All employee names now display as "LastName, FirstName" system-wide

## Related Pages

- [Organization Profile](organization-profile.md) - Manage organization name, logo, billing
- [Subscription Management](subscription-management.md) - Manage user seats
- [Billing Contact](billing-contact.md) - Update billing information

---

**Last Updated**: 2026-02-12
**For Questions**: support@kando.com
