# Onboarding Dependencies & Sequencing

## Overview

Kando has a **strict sequential onboarding flow** where each role's completion unlocks the next role's access. This document explains the dependencies, blocking conditions, and handoff points between roles.

---

## 🔄 Critical Onboarding Path

```
START (Organization Signup)
    ↓
╔═══════════════════════════════════════════════╗
║  PHASE 1: OWNER ONBOARDING (Required)         ║
║  ├─ Setup Organization Profile               ║
║  ├─ Configure Organization Settings           ║
║  ├─ Verify Billing Contact Email              ║
║  └─ Assign First Seat to HR Admin             ║
╚═══════════════════════════════════════════════╝
    ↓ (Owner completes & assigns seat)
    ↓
╔═══════════════════════════════════════════════╗
║  PHASE 2: HR ADMIN ONBOARDING (Unblocked)     ║
║  ├─ System Initialization Wizard              ║
║  ├─ Add First User(s)                         ║
║  ├─ Configure Base Policies                   ║
║  └─ Assign Roles to New Users                 ║
╚═══════════════════════════════════════════════╝
    ↓ (HR Admin creates users)
    ↓
    ├─────────────────────────────────────┐
    ↓                                     ↓
╔═══════════════════════╗    ╔═══════════════════════╗
║ MANAGER ONBOARDING    ║    ║ EMPLOYEE ONBOARDING   ║
║ (Parallel)            ║    ║ (Parallel)            ║
║ ├─ Review Team        ║    ║ ├─ Clock In           ║
║ ├─ Approve Request    ║    ║ ├─ View Schedule      ║
║ ├─ Create Schedule    ║    ║ ├─ Check Leave Bal    ║
║ └─ View Reports       ║    ║ └─ View Payslip       ║
╚═══════════════════════╝    ╚═══════════════════════╝
    ↓                              ↓
    └─────────────────┬────────────┘
                      ↓
            Organization Ready
```

---

## 📋 Role-Specific Blocking Conditions

### PHASE 1: Owner (Blocking Everyone)

**Owner MUST complete before anything else can happen:**

| Blocking Condition | Impact | Resolution |
|-------------------|--------|-----------|
| **No organization profile** | Navigation shows incomplete setup banner | Owner: Fill in org name, address |
| **Billing email unverified** | No invoice delivery path | Owner: Click verification email link |
| **No seats assigned** | HR Admin cannot access system | Owner: Assign 1+ seat to HR Admin |
| **Settings not configured** | Timezone undefined (payroll implications) | Owner: Select timezone & preferences |

**Success Condition**: Owner completes all 4 checklist items ✅

### PHASE 2: HR Admin (Blocked by Owner)

**HR Admin can only onboard if:**
- Owner has assigned a seat to them ✅
- HR Admin's seat is marked "Active" ✅
- Billing email verified ✅

**HR Admin THEN blocks Managers/Employees:**

| Blocking Condition | Impact | Resolution |
|-------------------|--------|-----------|
| **No users created** | Managers/Employees cannot login | HR Admin: Create user accounts |
| **No roles assigned** | New users cannot see any system content | HR Admin: Assign role (Manager/Employee) |
| **Access groups not assigned** | Users cannot access business objects | HR Admin: Assign access group (Owner/Manager/HR/Employee) |

**Success Condition**: HR Admin creates ≥1 Manager or ≥1 Employee user ✅

### PHASE 3: Manager & Employee (Blocked by HR Admin)

**Manager/Employee can only onboard if:**
- Their user account was created by HR Admin ✅
- Role is assigned (Manager or Employee) ✅
- Access group is assigned ✅

**Their onboarding is independent** (can happen in parallel):
- **Manager**: Needs team members assigned to them
- **Employee**: Only needs their own profile

---

## 🔀 Dependency Matrix

### Who Can Do What?

| Action | Owner | HR Admin | Manager | Employee |
|--------|-------|---------|---------|----------|
| **Create Organization** | ✅ Only | ❌ | ❌ | ❌ |
| **Assign Seats** | ✅ Only | ❌ | ❌ | ❌ |
| **Create Users** | ❌ | ✅ Only | ❌ | ❌ |
| **Assign Roles** | ❌ | ✅ Only | ❌ | ❌ |
| **Create Departments** | ✅ | ✅ | ❌ | ❌ |
| **Set Policies** | ❌ | ✅ Mainly | Can suggest | ❌ |
| **Approve Requests** | ❌ | ❌ | ✅ Only | ❌ |
| **Clock In/Out** | ❌ | ❌ | ❌ | ✅ Only |

---

## 🚨 Common Blocking Scenarios

### Scenario 1: Owner Doesn't Verify Billing Email
**What happens:**
- ⚠️ Owner sees warning banner
- ❌ HR Admin cannot access (seat marked "Unverified")
- 🔴 Organization is stuck

**Resolution:**
- Owner checks spam folder for verification email
- Owner requests resend if needed
- Owner clicks verification link

### Scenario 2: Owner Forgets to Assign HR Admin Seat
**What happens:**
- ✅ Owner setup looks complete
- ❌ HR Admin cannot login
- 🔴 No one can create employee accounts

**Solution:**
- Make this step highly visible in walkthrough
- Send reminder email to Owner: "Assign HR Admin seat now"
- Add prominent "Next Step" button in checklist

### Scenario 3: HR Admin Creates Employees but Doesn't Assign Roles
**What happens:**
- ✅ Employees can login
- ❌ Employees see blank dashboard (no permissions)
- 😞 Employees are confused

**Prevention:**
- Make role assignment **required** during user creation
- Show warning if role not selected: "User won't be able to access system"
- In HR Admin walkthrough, emphasize role assignment step

---

## 🔗 Handoff Points

### Owner → HR Admin Handoff
**What Owner must do:**
1. Assign seat to HR Admin email
2. Send HR Admin their login credentials (or have system auto-email)

**What HR Admin sees:**
1. Welcome modal explaining their role
2. Onboarding checklist (create users, assign roles, set policies)
3. Dashboard ready to use

### HR Admin → Manager/Employee Handoff
**What HR Admin must do:**
1. Create user account with role selected
2. Send credentials to new user (or have system auto-email)
3. Optional: Assign to department/team

**What Manager/Employee sees:**
1. Login screen (credentials from email)
2. Welcome modal with role-specific onboarding
3. Role-specific checklist

---

## 📊 Blocking Analysis

### Top Reasons Organizations Get Stuck

| Reason | Frequency | Prevention |
|--------|-----------|-----------|
| Owner doesn't verify email | 🔴 HIGH | Auto-send reminder emails, show prominent warning |
| Owner forgets to assign HR Admin | 🔴 HIGH | Make step prominent, send reminder email |
| HR Admin doesn't assign roles | 🟡 MEDIUM | Make role required during user creation |
| Billing info incomplete | 🟡 MEDIUM | Require before organization is "complete" |
| No departments created | 🟢 LOW | Auto-create default department |

---

## ✅ Success Metrics

### Onboarding Completion Rates (by phase)

| Phase | Target | Measurement |
|-------|--------|-------------|
| **Owner (Phase 1)** | >95% | % completing all 4 checklist items within 1 day |
| **HR Admin (Phase 2)** | >80% | % creating ≥1 user within 2 days of access |
| **Manager (Phase 3)** | >75% | % completing approvals task within 1 day of access |
| **Employee (Phase 3)** | >90% | % completing clock-in within 1 day of access |

### Blocking Indicators

- **Org stuck at Phase 1**: % of organizations without HR Admin seat after 7 days
- **Org stuck at Phase 2**: % of organizations without any employees created after 14 days
- **User can't access**: % of created users unable to login due to role/access issues

---

## 🛠️ Implementation Checklist for Developers

### Phase 1: Owner
- [ ] Organization profile form is complete and required
- [ ] Billing email verification flow works
- [ ] Seat assignment UI is intuitive
- [ ] Owner receives reminder emails if steps incomplete
- [ ] HR Admin seat status shows as "Blocked" until assigned

### Phase 2: HR Admin Access Control
- [ ] HR Admin can only access if seat is assigned AND verified
- [ ] Clear error message if access denied: "Your organization owner must assign you a seat"
- [ ] HR Admin sees onboarding checklist on first login

### Phase 3: User Creation & Role Assignment
- [ ] User creation requires role selection
- [ ] Role assignment is mandatory (not optional)
- [ ] New users cannot login until role assigned
- [ ] Role change triggers new onboarding flow for user

### General
- [ ] Blocking conditions are clearly tested in QA
- [ ] Error messages explain WHY user is blocked
- [ ] Support team has documentation on common blocking scenarios
- [ ] Analytics track completion rates for each phase

---

## 📞 Support Guidance

**Common Support Questions:**

Q: "My HR Admin can't login"
A: Owner needs to assign them a seat in Subscriptions. Go to Settings > Organization > Subscriptions, find an unassigned seat, and assign it to the HR Admin's email.

Q: "I created an employee but they can't login"
A: Did you assign them a role (Manager or Employee)? Roles are required. Go back and edit the user to select their role.

Q: "Why can't I add users?"
A: Only HR Admin can add users. If you're the Owner, you need to assign a seat to your HR Admin first, then they can add users.

---

**Last Updated**: 2026-02-13 | **For Questions**: support@kando.com
