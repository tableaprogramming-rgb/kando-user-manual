# Scheduling

*Create, manage, and optimize team schedules in Kando.*

## Overview

The Scheduling feature allows you to:
- Create team schedules for weeks and months
- Assign shifts to team members
- Handle shift types (standard, flexible, on-call, rotating)
- Plan coverage and optimize staffing
- Manage shift swaps and changes
- View schedule conflicts and gaps
- Communicate schedule changes to team
- Export schedules for various uses
- Analyze scheduling patterns and costs
- Ensure compliance with labor laws

Effective scheduling balances business needs, employee preferences, cost optimization, and labor compliance. Kando helps you plan, communicate, and manage schedules efficiently.

## Your Manager Scheduling Responsibilities

### Daily Responsibilities

**Monitor Schedule Execution**:
- Verify team members are working scheduled shifts
- Identify no-shows or unexpected absences
- Coordinate ad-hoc coverage if needed
- Document schedule exceptions

**Handle Same-Day Changes**:
- Approve urgent swap requests
- Address call-outs or no-shows
- Find coverage for unexpected absences

### Weekly Responsibilities

**Plan Next Week**:
- Review requests for time off
- Create or adjust next week's schedule
- Balance workload and coverage
- Account for approved leave
- Consider employee preferences

**Publish Schedule**:
- Finalize schedule once approved
- Publish to team (at least 3-7 days in advance)
- Communicate major changes
- Address employee concerns

**Monitor This Week**:
- Track schedule adherence
- Identify patterns or issues
- Prepare adjustments for next week

### Monthly Responsibilities

**Plan Monthly Schedule**:
- Forecast business needs
- Predict staffing requirements
- Account for seasonal patterns
- Plan for anticipated absences
- Review employee preferences

**Optimize Scheduling**:
- Minimize overtime costs
- Maximize coverage efficiency
- Balance team member preferences
- Comply with labor regulations
- Identify scheduling bottlenecks

**Analyze Past Month**:
- Review schedule adherence
- Calculate staffing costs
- Identify improvement opportunities
- Plan for next month

## Getting Started

### Step 1: Access Scheduling

**From Dashboard**:
1. Go to **Dashboard**
2. Look for **Scheduling** widget
3. See current week schedule
4. Click **Create/Edit Schedule**

**From Main Menu**:
1. Navigate to **Schedule** in left sidebar
2. Or use keyboard shortcut: `Ctrl+Shift+S`
3. Default shows this week

### Step 2: Choose Scheduling Mode

**Scheduling Options**:

**Option A: Quick Schedule**
- Rapid assignment using pre-set templates
- Best for: Fixed, predictable schedules
- Speed: 2-3 minutes per week
- Example: Same shift every Monday-Friday

**Option B: Advanced Schedule**
- Detailed shift configuration
- Best for: Complex, rotating schedules
- Speed: 10-15 minutes per week
- Example: Shifts rotating daily, multiple shift types

**Option C: Copy Previous**
- Copy last week's schedule and modify
- Best for: Consistent patterns
- Speed: 1-2 minutes
- Example: Same schedule each week (adjust for changes)

### Step 3: Select Date Range

1. Click **Date Range** selector
2. Choose start date (Monday typical)
3. Choose end date (Sunday typical)
4. Or select preset:
   - This Week
   - Next Week
   - Next 2 Weeks
   - Next Month
5. Click **Load**

**Example**:
- Select: Mon, Feb 16 - Sun, Feb 22, 2026
- View opens with empty shifts

## Schedule Creation Workflow

### Step 1: Account for Leave & Days Off

**Before Assigning Shifts**:
1. Review approved leave:
   - Navigate to **Approvals** → **View Leave**
   - See who's on leave during schedule period
   - Mark those days as unavailable
2. Mark company holidays:
   - Research holidays for period
   - Mark as "Holiday - No Schedule"
   - Example: Feb 25 (EDSA Revolution Day in Philippines)
3. Account for personal days:
   - Some employees have predetermined days off
   - Mark as "Day Off"

**Template Example**:
```
Week of Feb 16-22:
- Maria: ON LEAVE Feb 17-18 (Vacation)
- John: OFF FRI Feb 19 (personal day)
- Robert: HOLIDAY Feb 25 (company holiday)
- Ana: NORMAL WEEK
- Rest of team: Check individual approved leave
```

### Step 2: Determine Coverage Needs

**Analyze Business Requirements**:
1. **Daily Coverage**: How many people needed each day?
2. **Shift Coverage**: How many per shift?
3. **Skill Requirements**: Specific roles or skills needed?
4. **Peak Hours**: High-traffic hours needing more staff?

**Example Coverage Plan**:
```
Monday-Friday:
├─ Morning Shift (6-2): Need 3 people
├─ Afternoon Shift (2-10): Need 2 people
└─ Night Shift (10-6): Need 1 person

Weekend (if applicable):
├─ Saturday: 2 people (casual coverage)
└─ Sunday: 1 person (emergency only)
```

### Step 3: Assign Shifts

**Manual Assignment**:
1. For each day/shift:
   - Click on shift cell
   - Select team member
   - Confirm shift type and hours
2. Assign people, checking:
   - Employee has capacity (not overworked)
   - Respecting employee preferences
   - Balancing workload fairly
   - Required skills present

**Example Assignment**:
```
Monday Feb 16:
├─ Morning (6-2): Maria, John, Robert
├─ Afternoon (2-10): Ana, Jessica
└─ Night (10-6): Diego

Tuesday Feb 17:
├─ Morning: John, Robert, Diego
├─ Afternoon: Jessica, Paolo
└─ Night: (minimal)
[Maria ON LEAVE - skip]
```

### Step 4: Review & Optimize

**Verify Schedule**:
```
Checklist:
☐ All required shifts covered?
☐ No employee over 40 hours/week?
☐ No excessive consecutive days?
☐ Employee preferences respected?
☐ Required skills present each shift?
☐ Certified/trained people on specialized tasks?
☐ Fair distribution of good/bad shifts?
☐ No scheduling conflicts detected?
```

**Optimization Questions**:
- Can anyone work additional hours (if beneficial)?
- Are there scheduling inefficiencies?
- Can we reduce overtime costs?
- Is there a pattern of under/overstaffing?

### Step 5: Publish Schedule

1. Click **Publish** button
2. Review summary:
   - Number of shifts
   - People per shift
   - Total hours
   - Estimated costs
3. Confirm publication date:
   - When will team see it?
   - "Publish immediately" or "Publish at 5 PM today"?
4. Send notification:
   - Email notification to team
   - Include any important notes
   - Example: "New schedule reflects Q1 peak season"
5. Click **Confirm**
6. Team receives schedule notification
7. Employees can view in their personal schedules

**Timeline**: Publish at least 3-7 days before schedule starts

## Schedule Types & Configurations

### Fixed Schedule

**Setup**:
1. Select **Fixed Schedule** template
2. Assign same shifts each week:
   - Example: Mon-Fri 9-5, Sat-Sun off
3. Set break times
4. Configure holidays (auto-exclude)
5. Apply to multiple employees at once

**Use Case**:
- Office-based employees
- Consistent business hours
- Predictable staffing

**Efficiency**: 2 minutes to set up entire team

### Rotating Shifts

**Setup**:
1. Select **Rotating Schedule** template
2. Define rotation pattern:
   - Pattern: Morning (Week 1) → Afternoon (Week 2) → Night (Week 3)
   - Cycle length: 3 weeks
3. Assign employees to rotation
4. Kando auto-rotates based on pattern
5. Override individual rotations if needed

**Rotation Plan Example**:
```
TEAM ROTATION (3-week cycle):
├─ Group A: Morning (6-2) on Week 1
│  └─ Afternoon (2-10) on Week 2
│  └─ Night (10-6) on Week 3
│
├─ Group B: Afternoon (2-10) on Week 1
│  └─ Night (10-6) on Week 2
│  └─ Morning (6-2) on Week 3
│
└─ Group C: Night (10-6) on Week 1
   └─ Morning (6-2) on Week 2
   └─ Afternoon (2-10) on Week 3
```

**Use Case**:
- 24/7 operations
- Shift work industries (hospital, manufacturing)
- Requires multiple skilled groups

### Flexible Schedule

**Setup**:
1. Select **Flexible Schedule** template
2. Define core hours (when everyone must be present)
3. Set flexible windows (employees choose)
4. Communicate expectations:
   - Must be present during core hours
   - Can start before/leave after
   - Total hours required same
5. Apply to team

**Example Configuration**:
```
FLEXIBLE SCHEDULE:
Core Hours: 10:00 AM - 3:00 PM (must be present)
Arrival Window: 7:00-10:00 AM (flexible)
Departure Window: 3:00-6:00 PM (flexible)
Daily Requirement: 8 hours total
```

**Use Case**:
- Knowledge workers
- Commuting flexibility
- Work-life balance
- Performance-based (results matter, not hours)

## Advanced Scheduling Features

### Coverage Analysis

**View Coverage Dashboard**:
1. After assigning shifts, click **Coverage Analysis**
2. See metrics:
   - Staff count per shift
   - Coverage percentage (vs. requirement)
   - Understaffed periods (in red)
   - Overstaffed periods (in green)
3. Adjust shifts based on findings:
   - Add staff to understaffed periods
   - Optimize overstaffed periods

**Example Report**:
```
COVERAGE ANALYSIS - Week of Feb 16:
Monday:
├─ Morning (need 3): 3 assigned ✅ 100%
├─ Afternoon (need 2): 2 assigned ✅ 100%
└─ Night (need 1): 1 assigned ✅ 100%

Tuesday:
├─ Morning (need 3): 3 assigned ✅ 100%
├─ Afternoon (need 2): 1 assigned ❌ 50% (UNDERSTAFFED)
└─ Night (need 1): 1 assigned ✅ 100%

Action: Add 1 person to Tuesday Afternoon
```

### Conflict Detection

**Automatic Conflict Checking**:
1. System detects issues:
   - Employee scheduled on approved leave day
   - More than 40 hours/week assigned
   - Consecutive days without break
   - Missing required certifications
   - Time between shifts too short
2. Conflicts highlighted in red
3. Fix before publishing

**Common Conflicts**:
```
❌ CONFLICTS DETECTED:
1. Maria scheduled Thu 2-10 but ON LEAVE Thu-Fri
   → Fix: Remove Thu shift
2. John: 42 hours assigned (limit: 40)
   → Fix: Move 2 hours to another day
3. Diego assigned night shift but not certified
   → Fix: Assign certified employee or reschedule
```

### Shift Swap Requests

**Handling Employee-Initiated Swaps**:
1. Employee requests to swap shifts
2. Manager reviews (see Approving Requests guide)
3. If approved, Kando updates schedule
4. No need to re-create schedule

### Copy & Modify

**Fastest Scheduling for Recurring Patterns**:
1. Click **Copy Previous** option
2. Select week to copy (usually last week)
3. Kando creates identical schedule
4. Modify only changes:
   - Remove people on new leave
   - Adjust hours if different
   - Fix conflicts detected
5. Publish updated schedule

**Time Savings**: 80% faster than creating from scratch

## Communication & Publishing

### Pre-Publication Communication

**Before Publishing**:
1. Draft schedule
2. Share with team leads/key people
3. Get feedback: "Any concerns with this schedule?"
4. Make adjustments based on feedback
5. Then publish

**Communication Channel**:
- Team meeting: Discuss major changes
- Email: Send draft for review
- One-on-one: Discuss individual concerns

### Publication & Notification

**Publishing Process**:
1. Finalize schedule in Kando
2. Click **Publish**
3. Choose notification type:
   - Immediate: Send now
   - Scheduled: Send at specific time
   - Quiet: No notification
4. Add optional message:
   - "New schedule published for Feb 16-22"
   - "Note: Peak season, extra shifts available"
   - "Any conflicts? Please reach out today"
5. Team receives:
   - Email notification
   - In-app notification
   - Can view personal schedule

### Handle Feedback & Changes

**After Publication**:
1. Employee brings concern: "I have appointment Tuesday"
2. Options:
   - **Shift Swap**: "Can anyone trade?"
   - **Request Change**: Employee submits formal request
   - **Manager Override**: You reassign shift
3. Manage changes:
   - Use swap workflow
   - Or manually edit and re-publish
   - Note why change made

## Best Practices

✅ **DO**:
- **Publish schedules early** (at least 1 week in advance)
- **Follow policies** for hours, breaks, consecutive days
- **Account for leave** before assigning shifts
- **Consider employee preferences** (respect reasonable requests)
- **Balance fairness**: Don't assign all "good" shifts to favorites
- **Verify coverage** before publishing
- **Communicate changes immediately** (don't surprise employees)
- **Check for conflicts** automatically (use Kando's detection)
- **Document special reasons** (why certain shifts assigned)
- **Review patterns** (monthly or quarterly analysis)
- **Plan ahead** for known absences or events

❌ **DON'T**:
- Publish last-minute (causes stress and logistical issues)
- Ignore employee preferences (low morale, high turnover)
- Schedule employees beyond legal hour limits
- Fail to account for approved leave
- Create inefficient coverage (gaps or excess)
- Make favoritism obvious (ruins team morale)
- Forget to publish updated schedules
- Allow excessive consecutive days (labor law compliance)
- Schedule without considering skill requirements
- Ignore employee concerns about scheduling
- Overwork key people (burnout risk)

## Common Scheduling Scenarios

### Scenario 1: Peak Season Scheduling

**Situation**: Your organization has peak season (holiday shopping, tax season, etc.)

**Planning**:
1. Identify peak weeks: Nov-Dec or Jan-Mar (example)
2. Increase staffing: Need 20% more people
3. Schedule options:
   - Overtime for regular staff
   - Temporary staff additions
   - Extended hours (9-6 instead of 9-5)
4. Communication:
   - Announce extra shifts 4-6 weeks early
   - Ask for volunteers first
   - Make mandatory if needed (with notice)
   - Offer incentives (bonus, extra day off)

**Example**:
```
REGULAR SEASON (Jan-Oct):
└─ 10 people, 8 hours each = 80 hours/day

PEAK SEASON (Nov-Dec):
└─ 12 people, 9 hours each = 108 hours/day (35% increase!)

Staffing Plan:
├─ 8 regular staff × 9 hours (extra 1 hr each)
├─ 2 temporary staff × 9 hours (new hires)
└─ Plus voluntary overtime for volunteers
```

### Scenario 2: Vacation Coverage

**Situation**: Multiple people want same week off (e.g., summer vacation)

**Challenge**: Maintain coverage while honoring requests

**Solution**:
1. Set vacation approval window: "Vacation sign-up June 1-15"
2. Communicate limit: "Maximum 2 people per week"
3. First-come-first-served: Approve requests in order received
4. Escalate: If more requests than limit, discuss alternatives
5. After approved: Schedule others to cover

**Example**:
```
Team wants July 16-22 off (all 7 people):
├─ Limit: Max 2 people that week
├─ First 2 approved: Maria (requested first), John (requested 2nd)
├─ Others get: Alternative weeks (July 2-8, July 23-29)
└─ Schedule: Schedule rest of team to cover week of July 16-22
```

### Scenario 3: Rotating Schedules

**Situation**: 24/7 operation requiring shift rotations

**Setup**:
1. Divide team into 3 groups (for 3-week rotation)
2. Assign each group to shift:
   - Week 1: Group A (Morning), Group B (Afternoon), Group C (Night)
   - Week 2: Rotate each group one position
   - Week 3: Continue rotation
3. Repeat cycle every 3 weeks
4. Use Kando's rotation template for automation

**Rotation Impact**:
```
Impact on Employee:
├─ Works all 3 shift types (fair rotation)
├─ Adjustment period: ~3 days per shift change
├─ Sleep impact: Night shift hardest
└─ Social impact: Rotating shifts affects social life

Mitigation**:
├─ Provide sleep adjustment time
├─ Consider seniority (newer staff may get fixed shifts)
└─ Allow swap requests
```

## Scheduling Compliance & Regulations

### Legal Requirements (Philippines Example)

**Labor Laws Considerations**:
- **Daily Hours**: Max 8 hours/day (or per local law)
- **Weekly Hours**: Max 40 hours/week (or per local law)
- **Rest Days**: Minimum 1 day rest per week (usually Sunday)
- **Night Shift**: Special regulations (typically 10 PM - 6 AM)
- **Meal Breaks**: Required duration (typically 1 hour)
- **Overtime**: Extra pay (usually 1.5-2x rate)
- **Holidays**: Premium pay on company holidays

**Kando Compliance Checking**:
1. Set legal limits in **Settings** → **Scheduling Rules**
2. Kando warns if:
   - Over daily hour limit
   - Over weekly hour limit
   - No rest day scheduled
   - Break not provided
3. Fix before publishing

### Tracking Compliance

**Compliance Report**:
1. Navigate to **Reports** → **Compliance**
2. Monthly compliance summary:
   - Hours per employee per law
   - Overtime hours per person
   - Rest day compliance
   - Break compliance
3. Export for audit purposes

## Scheduling Reports

### Generate Scheduling Reports

**Available Reports**:
- **Coverage Report**: Staffing levels per shift
- **Utilization Report**: Hours per employee (vs. target)
- **Overtime Report**: Extra hours per person
- **Compliance Report**: Legal compliance verification
- **Cost Report**: Labor costs per week/month
- **Absence Report**: Unplanned absences/call-outs

**Generate Report**:
1. Navigate to **Reports** → **Scheduling**
2. Select report type
3. Choose date range
4. Click **Generate**
5. Export as PDF or Excel

## Troubleshooting

**Problem**: "Can't assign team member to shift - error message"
**Cause**: Permission issue, over-hour limit, or conflict
**Solution**:
1. Check error message for specific reason
2. If over hours: Reduce hours elsewhere or different person
3. If conflict: Resolve conflict (remove other shift, etc.)
4. If permission: Verify you're authorised to schedule
5. Try again after fixing issue

**Problem**: "Schedule shows incomplete after publishing"
**Cause**: System didn't save all shifts, or network issue
**Solution**:
1. Refresh page to reload
2. Verify all shifts are still assigned
3. If missing: Re-assign and save
4. Contact support if data lost

**Problem**: "Team says they didn't receive schedule notification"
**Cause**: Notification settings disabled or email issue
**Solution**:
1. Check employee notification settings (they may have disabled)
2. Verify they have valid email address
3. Resend notification manually
4. Post schedule in common area/system announcement

**Problem**: "Shift swap approved but schedule not updated"
**Cause**: System processing delay
**Solution**:
1. Wait 5-10 minutes for system to update
2. Refresh page to reload
3. Verify swap was actually approved (check history)
4. Contact support if not updated after 15 min

## Related Pages

- [Team Management](team-management.md) – Manage your team roster
- [Approving Requests](approving-requests.md) – Handle shift swap approvals
- [Reports](reports.md) – Generate scheduling and team reports
- [Employee Schedule View](../employee-guide/view-schedule.md) – Understand employee perspective

---

**Last Updated**: 2026-02-12
**Maintainer**: Scheduling Operations
**For Questions**: support@kando.com
