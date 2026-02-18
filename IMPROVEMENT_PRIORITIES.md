# Kando Manual Improvement: Quick Prioritization Guide

**Last Updated**: 2026-02-18
**Purpose**: Quick reference for what to fix first

---

## 🚨 CRITICAL (Do First - Blocks User Actions)

### 1. **Add Prerequisites to Time Tracking (2.1)**
   - **Why**: Users can't clock in without schedule, but manual doesn't mention this
   - **What to add**: "Must-haves" section with schedule requirement, timesheet lock, active timer
   - **Effort**: 2 hours
   - **Impact**: HIGH - Fixes "noSchedule" error confusion
   - **File**: `/Users/ericmagto/Projects/kando-user-manual/manual/2-Employee-Guide/2.1-Time-Tracking.md`

### 2. **Add Prerequisites to Leave Management (2.2)**
   - **Why**: Leave requests fail silently if credit not initialized, approval rules complex
   - **What to add**: Leave credit requirement, approval workflow explanation, common errors
   - **Effort**: 2 hours
   - **Impact**: HIGH - Fixes "no_leave_credit" and approval confusion
   - **File**: `/Users/ericmagto/Projects/kando-user-manual/manual/2-Employee-Guide/2.2-Leave-Management.md`

### 3. **Expand Manager Approval Guide (3.2)**
   - **Why**: Manual implies managers can approve anything; actually need team assignment + approval rules
   - **What to add**: Team setup requirement, approval rule explanation, who can approve what
   - **Effort**: 2.5 hours
   - **Impact**: CRITICAL - Fixes permission errors for managers
   - **File**: `/Users/ericmagto/Projects/kando-user-manual/manual/3-Manager-Guide/3.2-Approving-Requests.md`

### 4. **Create: System Setup Requirements (NEW - 1.4)**
   - **Why**: HR admin needs checklist of what to configure before anything works
   - **What to add**: Prerequisites checklist, configuration order, what each employee needs
   - **Effort**: 3 hours
   - **Impact**: CRITICAL - Blocks entire system setup
   - **File**: `/Users/ericmagto/Projects/kando-user-manual/manual/1-Getting-Started/1.4-System-Setup-Requirements.md`
   - **Template**:
   ```markdown
   # System Setup Requirements

   Before employees can use Kando, HR admin must configure:

   ## Step 1: Organization Setup
   - [ ] Create organization
   - [ ] Set timezone
   - [ ] Create access groups (Owner, Manager, HR Admin, Employee)

   ## Step 2: User & Employee Setup
   - [ ] Create user accounts
   - [ ] Assign access groups
   - [ ] Create employee records
   - [ ] Assign managers (reporting_to)

   ## Step 3: Leave Setup
   - [ ] Create LeaveTypes (Vacation, Sick, etc.)
   - [ ] Initialize LeaveCredits per employee
   - [ ] Configure ApprovalRules for leave

   ## Step 4: Scheduling Setup
   - [ ] Create shift types/schedules
   - [ ] Assign schedules to employees

   ## Step 5: Payroll Setup
   - [ ] Create PayTypes
   - [ ] Create Payroll Cycles
   - [ ] Assign employees to cycles
   - [ ] Set up compensation structure

   [More detailed sections...]
   ```

### 5. **Create: Understanding Your Role (NEW - 1.5)**
   - **Why**: Users don't understand why some actions are unavailable (access groups)
   - **What to add**: Role definitions, what each role can do, permission model
   - **Effort**: 2.5 hours
   - **Impact**: HIGH - Explains permissions throughout system
   - **File**: `/Users/ericmagto/Projects/kando-user-manual/manual/1-Getting-Started/1.5-Understanding-Your-Role.md`
   - **Template**:
   ```markdown
   # Understanding Your Role

   Your role (Access Group) determines what you can do in Kando:

   ## Employee
   - Clock in/out
   - Request leave
   - View own payslip
   - View own schedule

   ## Manager
   - [All Employee actions]
   - View team timesheets
   - Approve/reject requests
   - Create schedules

   ## HR Admin
   - [All Manager actions]
   - Configure leave types
   - Set approval rules
   - Create payroll cycles

   ## Owner
   - [All actions]
   - Manage subscription
   - Configure organization
   - Manage users

   [Detailed permissions table...]
   ```

---

## ⚠️ HIGH PRIORITY (Week 1)

### 6. **Enhance Login Guide - Add Missing Errors (1.2)**
   - **What to add**:
     - Email verification requirement
     - License/organization checks
     - Access group assignment
     - Missing error scenarios
   - **Effort**: 2 hours
   - **Impact**: HIGH - Fixes "unverified", "license_expired", etc.
   - **File**: `/Users/ericmagto/Projects/kando-user-manual/manual/1-Getting-Started/1.2-Login-Setup.md`

### 7. **Create HR Admin Setup Checklist (NEW - 5.5)**
   - **What to add**: Step-by-step setup wizard for new implementation
   - **Effort**: 3 hours
   - **Impact**: HIGH - Makes first-time setup clear
   - **File**: `/Users/ericmagto/Projects/kando-user-manual/manual/5-HR-Admin-Guide/5.5-First-Time-Setup-Checklist.md`

### 8. **Expand Troubleshooting Section (6.1-6.4)**
   - **What to add**:
     - Login errors (email not verified, license expired, no access group)
     - Clock-in errors (no schedule, timesheet locked, active timer)
     - Leave errors (no credit, insufficient balance, approval pending)
     - Permission errors
   - **Effort**: 3 hours
   - **Impact**: HIGH - Direct support ticket reduction
   - **Files**: All `/Users/ericmagto/Projects/kando-user-manual/manual/6-Troubleshooting/`

---

## 📋 MEDIUM PRIORITY (Week 2)

### 9. **Complete HR Admin User Management (5.2)**
   - **What to add**: Creating users, assigning access groups, creating employee records
   - **Effort**: 3 hours
   - **Impact**: MEDIUM
   - **File**: `/Users/ericmagto/Projects/kando-user-manual/manual/5-HR-Admin-Guide/4.2-User-Management.md`

### 10. **Complete HR Admin Policy Configuration (5.3)**
   - **What to add**: Leave types, approval rules, shift policies, pay types
   - **Effort**: 4 hours
   - **Impact**: MEDIUM - Needed for system configuration
   - **File**: `/Users/ericmagto/Projects/kando-user-manual/manual/5-HR-Admin-Guide/4.3-Policy-Configuration.md`

### 11. **Create Manager Schedule Setup Guide (3.3 enhancement)**
   - **What to add**: How managers create schedules, why schedules are required
   - **Effort**: 2 hours
   - **Impact**: MEDIUM
   - **File**: `/Users/ericmagto/Projects/kando-user-manual/manual/3-Manager-Guide/3.3-Scheduling.md`

### 12. **Create FAQ Section (7.3)**
   - **What to add**: "Why can't I..." questions
   - **Effort**: 2 hours
   - **Impact**: MEDIUM - Self-service support
   - **File**: `/Users/ericmagto/Projects/kando-user-manual/manual/8-Reference/7.3-FAQ.md`
   - **Questions to cover**:
     - Why can't I clock in?
     - Why can't I request leave?
     - Why is my leave balance zero?
     - Why can't I approve this request?
     - Why does my timesheet show errors?

---

## 💡 NICE-TO-HAVE (Week 3+)

### 13. **Create System Architecture Page (1.6)**
   - Data relationships, process flows
   - Effort: 3 hours

### 14. **Add Visual Prerequisites Checklists**
   - For Clock In, Request Leave, Approve
   - Effort: 2 hours

### 15. **Complete Payroll Documentation (Section 5.4)**
   - Full payroll processing workflow
   - Effort: 4 hours

---

## 📊 PRIORITY MATRIX

```
EFFORT vs IMPACT

HIGH IMPACT + LOW EFFORT (DO FIRST):
├── 1.4 System Setup Requirements ⭐
├── 1.5 Understanding Your Role ⭐
├── 2.1 Time Tracking Prerequisites ⭐
├── 2.2 Leave Management Prerequisites ⭐
├── 3.2 Manager Approval Guide ⭐
└── 6.1-6.4 Troubleshooting Expansion ⭐

HIGH IMPACT + MEDIUM EFFORT (DO SECOND):
├── 5.5 HR Admin Setup Checklist
├── 5.2 User Management
├── 5.3 Policy Configuration
└── 1.2 Login Guide Enhancement

MEDIUM IMPACT + LOW EFFORT (DO THIRD):
├── 7.3 FAQ Section
├── 3.3 Scheduling Guide
└── Glossary expansion (7.1)

LOW IMPACT + HIGH EFFORT (DO LAST):
└── Advanced topics, nice-to-have pages
```

---

## 🎯 COMPLETION CHECKLIST

Use this to track progress:

### CRITICAL (Week 1-2)
- [ ] 1.2 - Login guide: Add email verification, license, access group sections
- [ ] 1.4 - **NEW** System Setup Requirements page
- [ ] 1.5 - **NEW** Understanding Your Role page
- [ ] 2.1 - Time Tracking: Add prerequisites section
- [ ] 2.2 - Leave Management: Add prerequisites section
- [ ] 3.2 - Manager Approvals: Add prerequisites section
- [ ] 5.5 - **NEW** HR Admin Setup Checklist
- [ ] 6.1-6.4 - Troubleshooting: Add error scenarios

### HIGH PRIORITY (Week 2-3)
- [ ] 5.2 - Complete User Management section
- [ ] 5.3 - Complete Policy Configuration section
- [ ] 5.4 - Complete Payroll section (currently skeleton)
- [ ] 7.3 - Create FAQ page
- [ ] 6.1-6.4 - Add error reference tables

### MEDIUM PRIORITY (Week 3-4)
- [ ] 3.3 - Enhance Scheduling guide
- [ ] 7.1 - Expand Glossary (add: access group, leave credit, etc.)
- [ ] 1.6 - **NEW** System Architecture page
- [ ] 6.1-6.4 - Troubleshooting: Add visual decision trees

### NICE-TO-HAVE (Week 4+)
- [ ] Add visual checklists
- [ ] Add role-based dashboard variations
- [ ] Create advanced topics section
- [ ] Update as features change

---

## 📝 CONTENT TEMPLATES

### Template: Prerequisites Section
```markdown
## Before You Start

This action requires:
- **User Setup**: [What the user must have done]
- **Manager Setup**: [What manager must do]
- **HR Setup**: [What HR admin must configure]
- **System**: [What must exist in system]

⚠️ **Common Issues**:
- Error "X" means: [Explanation] → [Solution]
- Error "Y" means: [Explanation] → [Solution]
```

### Template: Error Scenario
```markdown
## Troubleshooting

### Error: "[Error Message]"

**Cause**: [What causes this error]

**Solution**:
1. [Step 1]
2. [Step 2]
3. [Step 3]

**Alternative**: [If solution doesn't work, try...]
```

### Template: Prerequisites Checklist
```markdown
## Checklist Before [Action]

✅ = Ready | ❌ = Needs setup | ⚠️ = May block action

✅ I'm logged in
❌ [Prerequisite from HR]
❌ [Prerequisite from Manager]
✅ [Prerequisite from me]

[Action Button]
```

---

## 🚀 QUICK START: Fix These 5 Pages First

**Total Effort**: ~10 hours | **Expected Impact**: 50% reduction in support tickets

1. **1.4 System Setup Requirements** (NEW) - 3 hours
   - HR admin checklist, configuration order

2. **1.5 Understanding Your Role** (NEW) - 2.5 hours
   - Role definitions, what each can do

3. **2.1 Time Tracking** - Add prerequisites - 2 hours
   - Schedule requirement, timesheet lock, error scenarios

4. **3.2 Manager Approvals** - Add prerequisites - 2.5 hours
   - Team setup, approval rules, access controls

5. **6.1-6.4 Troubleshooting** - Add error scenarios - 3 hours
   - Common errors with solutions

---

## 📞 QUICK REFERENCE: Which Page to Update

**User says**: "I can't clock in"
→ Update: `2.1-Time-Tracking.md` + `6.2-Time-Tracking-Issues.md`
→ Add: Schedule requirement, error codes, solutions

**User says**: "Why can't I approve this request?"
→ Update: `3.2-Approving-Requests.md` + `6.3-Request-Issues.md`
→ Add: Team assignment requirement, approval rule explanation

**User says**: "I have no leave balance"
→ Update: `2.2-Leave-Management.md` + `6.3-Request-Issues.md`
→ Add: HR must initialize credits, common errors

**New HR admin says**: "What do I do first?"
→ Create: `1.4-System-Setup-Requirements.md` + `5.5-Setup-Checklist.md`
→ Content: Step-by-step setup wizard

---

## 📌 KEY INSIGHTS FROM CODE ANALYSIS

**Things users don't know but need to:**

1. **Schedule is REQUIRED for clock-in** (not mentioned in current manual)
2. **Leave credit must be initialized by HR** (not mentioned)
3. **Approved timesheet blocks all actions** (not mentioned)
4. **Manager must be in approval rule's action_users** (not mentioned)
5. **Access groups control everything** (vaguely mentioned)
6. **Email must be verified** (not mentioned)
7. **Organization seat must be active** (not mentioned)
8. **Multiple approvers may be needed** (not mentioned)
9. **Some errors are system misconfigurations** (not mentioned)
10. **Permission model is complex** (not explained)

---

## ✅ SUCCESS METRICS

After implementing these improvements:

- **Support ticket reduction**: 50-70% fewer "Why can't I...?" questions
- **User satisfaction**: Higher NPS from "I understand what's required"
- **Onboarding time**: Faster for new users understanding prerequisites
- **Error resolution**: Users can self-serve troubleshooting
- **HR admin efficiency**: Clear checklist for setup process

---

**Status**: Ready to implement
**Review Date**: 2026-02-25
**Assigned To**: [Training & Documentation Team]
