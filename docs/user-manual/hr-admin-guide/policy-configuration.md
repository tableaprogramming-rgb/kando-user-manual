# Policy Configuration - HR Admin Guide

*Comprehensive guide for HR administrators to configure organizational policies, approval workflows, and system rules.*

## Overview

**Policies** = Rules that govern how your organization operates

As an HR Admin, you configure:
- Leave policies (allocation, carryover, approval)
- Approval workflows (who approves what)
- Overtime policies (limits, rates, rules)
- Scheduling policies (working hours, shifts)
- Absence policies (notification requirements)
- Compensation policies (allowances, deductions)

Policies ensure consistency, compliance, and fairness across your organization.

## Leave Policies

### Configuring Leave Policies

**What to Define for Each Leave Type**:
```
Vacation Leave Policy:
├─ Allocation: 20 days per year
├─ Accrual: Monthly (20/12 = ~1.67/month)
├─ Minimum Notice: 2 weeks
├─ Approval Level: Manager
├─ Carryover: Max 5 days to next year
├─ Carryover Expiry: December 31
├─ Max Per Request: 15 days
└─ Blackout Dates: None (flexible)

Sick Leave Policy:
├─ Allocation: 10 days per year
├─ Accrual: None (per government)
├─ Minimum Notice: Same day OK
├─ Approval Level: Manager (auto-approve if &lt;1 day)
├─ Documentation: Medical cert if >2 days
├─ Carryover: None
└─ Max Per Request: 15 days
```

**Configuration Steps**:
1. Go to **HR Admin** → **Policies** → **Leave Policies**
2. Select leave type (Vacation, Sick, Personal, etc.)
3. Set allocation method:
   - **Fixed Annual**: Same amount every year (e.g., 20 days)
   - **Monthly**: Accrued monthly (20 days ÷ 12 months)
   - **Pro-Rated**: Based on hire date (for mid-year starts)
4. Set notice requirement:
   - **Minimum Days Notice**: e.g., 14 days for vacation
   - **Same-Day OK**: For sick leave
5. Set approval workflow:
   - **Auto-Approve**: For sick leave &lt;1 day
   - **Manager Approval**: For most requests
   - **HR Approval**: For exceptions
6. Set carryover rules:
   - **Allow Carryover**: Yes/No
   - **Max Carryover Days**: e.g., 5 days
   - **Carryover Expiry Date**: e.g., Dec 31
7. Click **Save**

### Approval Workflows

**Configuring Who Approves What**:
```
Leave Request Workflow:
├─ <3 days: Manager can approve
├─ 3-15 days: Manager can approve
├─ >15 days: Manager + Director approval
└─ Exception: HR Admin final say

Overtime Request Workflow:
├─ <5 hours: Manager approval
├─ 5-20 hours: Manager + Finance approval
└─ >20 hours: Director approval required

Shift Swap Workflow:
├─ Same team: Manager approval
└─ Different team: Both managers' approval
```

**Configuration**:
1. Go to **Approval Workflows**
2. Define conditions (IF...THEN...)
3. Set parallel vs. sequential
4. Set SLAs (response times)
5. Click **Save**

## Overtime Policies

### Overtime Limits and Rules

**Define Limits**:
```
Daily Limit: Max 3 hours/day
Weekly Limit: Max 15 hours/week
Monthly Limit: Max 60 hours/month
Rolling 3-Month: Max 180 hours

Rest Requirements:
├─ After 5 consecutive OT days: 1 day off
├─ After 10 consecutive OT days: 2 days off
└─ After 20 hours cumulative: Mandatory rest
```

**Configuration**:
1. Go to **Overtime Policies**
2. Set daily limit
3. Set weekly limit
4. Set monthly limit
5. Set rest requirements
6. Set rates (regular 1.25x, night 1.5x, holiday 2x)
7. Click **Save**

## Scheduling Policies

### Working Hours and Shifts

**Define Standard Hours**:
```
Full-Time: 40 hours/week (8/day × 5 days)
Part-Time: 20-30 hours/week
Flexible: Core hours + flex time windows
```

**Break Rules**:
- Unpaid break duration: 1 hour
- Timing: Flexible OR fixed
- Frequency: Once per day

**Rest Days**:
- Minimum 2 days/week
- Fixed (Sat-Sun) OR rotating
- Premium pay if worked

## Absence Policies

### Notification Requirements

**Same-Day Absence**:
- Must notify by 9 AM
- To: Direct manager
- Via: Phone, email, or system

**Unauthorized Absence**:
- 1st: Verbal warning + no pay
- 2nd: Written warning + no pay
- 3rd: Suspension + potential termination

## Compensation Policies

### Allowances and Deductions

**Standard Allowances**:
- Housing: PHP 5,000/month
- Transportation: PHP 2,000/month
- Meal: PHP 500/month

**Mandatory Deductions**:
- Income Tax (BIR)
- SSS: 3.63% of gross
- PhilHealth: 1.5% of gross
- PagIBIG: PHP 100-600

**Voluntary Deductions**:
- SSS Loan
- Insurance Premium
- Savings Program

## Policy Best Practices

✅ **DO**:
- Define policies clearly and in writing
- Apply consistently to all employees
- Communicate policies broadly
- Train managers on enforcement
- Monitor compliance regularly
- Review annually for legal changes
- Document all exceptions
- Allow flexibility where appropriate

❌ **DON'T**:
- Create overly restrictive policies
- Apply policies inconsistently
- Have unwritten policies
- Ignore violations
- Change policies mid-year
- Exceed legal limits
- Allow too many exceptions

## Troubleshooting

**Problem**: "Approval workflow not working as configured"
**Cause**: Workflow rules not applied correctly
**Solution**:
1. Review workflow configuration
2. Check IF/THEN conditions
3. Verify sequential vs. parallel setting
4. Check employee's approval chain
5. Contact support if still incorrect

**Problem**: "OT not calculating at correct rate"
**Cause**: Overtime policy or shift configuration
**Solution**:
1. Check OT rate multiplier in policy
2. Verify shift type OT rate
3. Check if employee in correct shift
4. Verify date type (regular/holiday)
5. Recalculate if incorrect

**Problem**: "Employee exceeding policy limits"
**Cause**: Policy not enforced or limits not set
**Solution**:
1. Verify policy limits are configured
2. Check if enforcement is active
3. Review employee's recent requests
4. Adjust policy if limits are wrong
5. Document exceptions if approved

## Related Pages

- [System Setup](system-setup.md) – Initial configuration
- [Leave Management](../employee-guide/leave-management.md) – Employee perspective
- [Approving Requests](../manager-guide/approving-requests.md) – Manager workflows
- [Payroll Management](payroll-management.md) – Payroll policies

---

**Last Updated**: 2026-02-18
**For Questions**: support@kando.com
