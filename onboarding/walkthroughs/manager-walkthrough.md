# Manager Interactive Walkthrough Specs

## Tour 1: Team Overview
**Trigger**: First login as Manager.
**Goal**: Show where the team lives.

| Step | Target Element (Selector) | Tooltip Content | Action to Advance |
|------|---------------------------|-----------------|-------------------|
| 1 | `#dashboard-team-widget` | **Your Team**<br>See who is working, late, or absent right now. | Click "Next" |
| 2 | `#nav-team` | **Team Roster**<br>Click here to see everyone's details. | Click Menu Item |
| 3 | `.team-list-item:first-child` | **Employee Profile**<br>Click on any name to see their full history and balance. | Click "Next" |
| 4 | `.attendance-filter` | **Filters**<br>Quickly filter by "Absent" or "Late" to spot issues. | Click "Done" |

## Tour 2: Approvals
**Trigger**: New request arrives OR "Review Requests" checklist item.
**Goal**: Teach approval workflow.

| Step | Target Element (Selector) | Tooltip Content | Action to Advance |
|------|---------------------------|-----------------|-------------------|
| 1 | `#nav-approvals` | **Approvals Hub**<br>All your pending tasks live here. | Click Menu Item |
| 2 | `.request-card.pending` | **Pending Request**<br>Here's a request from Maria. Click to review. | Click Request |
| 3 | `#btn-approve` | **Approve**<br>Click to grant the request. Notifications are sent automatically. | Hover Button |
| 4 | `#btn-reject` | **Reject**<br>Or click Reject. You'll be asked to provide a reason. | Click "Next" |

## Tour 3: Scheduling
**Trigger**: "Create Schedule" checklist item.
**Goal**: Build a schedule.

| Step | Target Element (Selector) | Tooltip Content | Action to Advance |
|------|---------------------------|-----------------|-------------------|
| 1 | `#nav-schedule` | **Scheduling**<br>Manage your team's calendar. | Click Menu Item |
| 2 | `#view-team-schedule` | **Team View**<br>See everyone's shifts in one grid. | Click Tab |
| 3 | `.empty-shift-slot` | **Assign Shift**<br>Click any empty slot to add a shift. | Click Slot |
| 4 | `#btn-publish` | **Publish**<br>Changes are drafts until you click Publish. | Click "Done" |

## Tour 4: Reports
**Trigger**: "Generate Report" checklist item.
**Goal**: Data insights.

| Step | Target Element (Selector) | Tooltip Content | Action to Advance |
|------|---------------------------|-----------------|-------------------|
| 1 | `#nav-reports` | **Reports**<br>Analyze your team's performance. | Click Menu Item |
| 2 | `#report-type-select` | **Report Type**<br>Select "Attendance" or "Leave Usage". | Click Select |
| 3 | `#btn-generate` | **Generate**<br>Create the report. | Click Button |
| 4 | `#btn-export-pdf` | **Export**<br>Download as PDF or Excel for meetings. | Click "Done" |
