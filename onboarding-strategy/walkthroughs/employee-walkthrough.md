# Employee Interactive Walkthrough Specs

This document defines the step-by-step flow for the interactive product tour.

## Tour 1: Dashboard Orientation
**Trigger**: First login
**Goal**: Show them around the home base.

| Step | Target Element (Selector) | Tooltip Content | Action to Advance |
|------|---------------------------|-----------------|-------------------|
| 1 | `#dashboard-welcome-modal` | **Welcome to Kando!**<br>Let's get you set up in 2 minutes. | Click "Start Tour" |
| 2 | `.quick-actions-bar` | **Quick Actions**<br>Here are your most common tasks: Clocking In and Requesting Leave. | Click "Next" |
| 3 | `.status-widget` | **Your Status**<br>See at a glance if you're clocked in/out and how many hours you've worked today. | Click "Next" |
| 4 | `#main-nav` | **Navigation**<br>Access your Schedule, Payslips, and Profile from here. | Click "Next" |
| 5 | `.notifications-bell` | **Stay Updated**<br>Check here for shift changes or leave approvals. | Click "Done" |

## Tour 2: First Clock-In
**Trigger**: User clicks "Start Clock-In Tour" from checklist OR lands on dashboard during shift hours.
**Goal**: Get them to clock in.

| Step | Target Element (Selector) | Tooltip Content | Action to Advance |
|------|---------------------------|-----------------|-------------------|
| 1 | `#btn-clock-in` | **Start Your Shift**<br>Click this big button to clock in. | Click Button |
| 2 | `#confirmation-toast` | **Success!**<br>You are now clocked in. | System Event: Clock In Success |
| 3 | `.status-widget .timer` | **Timer Running**<br>See your time accumulating here. | Click "Next" |
| 4 | `#btn-clock-out` | **End of Day**<br>When you're done, come back and click Clock Out. | Click "Finish" |

## Tour 3: Request Leave
**Trigger**: User clicks "Request Leave" from checklist.
**Goal**: Show how to book time off.

| Step | Target Element (Selector) | Tooltip Content | Action to Advance |
|------|---------------------------|-----------------|-------------------|
| 1 | `#nav-leave` | **Leave Management**<br>Click here to manage your time off. | Click Menu Item |
| 2 | `.leave-balance-card` | **Check Balance**<br>Always check your available days before requesting. | Click "Next" |
| 3 | `#btn-new-request` | **New Request**<br>Click here to open the request form. | Click Button |
| 4 | `#leave-form-modal` | **Fill & Submit**<br>Select dates, type, and reason. We'll skip submitting for now! | Click "Close" / "Finish" |

## Tour 4: Schedule & Payslip
**Trigger**: Automatic after Tour 3 or user selection.
**Goal**: View schedule and money.

| Step | Target Element (Selector) | Tooltip Content | Action to Advance |
|------|---------------------------|-----------------|-------------------|
| 1 | `#nav-schedule` | **Your Schedule**<br>Check your upcoming shifts here. | Click Menu Item |
| 2 | `.calendar-view` | **Calendar View**<br>See your shifts for the week or month. | Click "Next" |
| 3 | `#nav-pay` | **Payslips**<br>Finally, this is where you view your pay history. | Click Menu Item |
| 4 | `#payslip-list` | **Pay History**<br>Download your latest payslip PDF from this list. | Click "Finish" |
