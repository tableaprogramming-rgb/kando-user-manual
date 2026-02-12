# HR Admin Interactive Walkthrough Specs

## Tour 1: System Setup Wizard
**Trigger**: First login (Admin).
**Goal**: Configure the basics.

| Step | Target Element (Selector) | Tooltip Content | Action to Advance |
|------|---------------------------|-----------------|-------------------|
| 1 | `#wizard-step-1` | **Welcome Admin!**<br>Let's set up your organization details. | Click "Next" |
| 2 | `#org-logo-upload` | **Branding**<br>Upload your logo to make Kando feel like home. | Click "Next" |
| 3 | `#step-departments` | **Structure**<br>Define your main departments (e.g., Sales, Eng). | Click "Next" |
| 4 | `#step-work-hours` | **Work Hours**<br>Set the standard work week (e.g., Mon-Fri, 9-5). | Click "Finish" |

## Tour 2: User Management
**Trigger**: "Add User" checklist item.
**Goal**: Add people.

| Step | Target Element (Selector) | Tooltip Content | Action to Advance |
|------|---------------------------|-----------------|-------------------|
| 1 | `#nav-people` | **People Directory**<br>Manage all employees here. | Click Menu Item |
| 2 | `#btn-add-user` | **Add Person**<br>Click to add a single user. | Click Button |
| 3 | `#btn-import-csv` | **Bulk Import**<br>Or upload a CSV to add everyone at once! | Click "Next" |
| 4 | `.role-selector` | **Roles**<br>Don't forget to assign the correct Role (Employee vs Manager). | Click "Done" |

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
