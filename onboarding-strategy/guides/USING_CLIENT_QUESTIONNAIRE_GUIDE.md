# 📖 Training Team Guide: Using the Client Questionnaire

**Purpose**: This guide helps trainers interpret client questionnaire responses and prepare customized training sessions.

**Audience**: Kando training consultants and implementation specialists

---

## 🎯 Overview: Why the Questionnaire Matters

The Client Onboarding Questionnaire serves three purposes:

1. **Pre-Session Preparation**: Understand the client's unique setup before meeting them
2. **Customization**: Tailor training examples to match their specific environment
3. **Risk Identification**: Spot potential issues early (e.g., complex approval workflows, unusual pay structures)

**Typical Use Flow**:
```
Client completes questionnaire (3 days before training)
        ↓
Trainer reviews & prepares (2 days before training)
        ↓
Trainer creates demo scenarios (1 day before training)
        ↓
Training session with customized examples
        ↓
Trainer provides post-training action items
```

---

## 📋 SECTION-BY-SECTION INTERPRETATION GUIDE

### SECTION 1: Organization Basics

**What to look for:**
- Multi-location organizations → May need location-based scheduling/reporting
- Employee count > 500 → Plan for bulk import vs. manual user creation
- International locations → Check timezone, language, regulatory complexity

**Preparation Checklist:**
- [ ] Confirm regional compliance requirements apply
- [ ] Identify if multi-location support is enabled in their license
- [ ] Plan demo using their actual org structure in examples

**Sample Trainer Notes Template:**
```
Client: [Name]
Size: [Employee count]
Locations: [List]
Compliance Notes: [Any special requirements]
Multi-location complexity: [Low/Medium/High]
```

---

### SECTION 2: Time Tracking Setup

**Key Questions to Interpret:**

| Response | Training Implication | Demo Adjustment |
|----------|-------------------|-----------------|
| **Web/mobile only** | Simple setup; focus on features | Use web demo as-is |
| **Kiosk/biometric** | Hardware integration needed; manual entry is backup | Show kiosk mode + fallback flows |
| **Migrating from old system** | Data import required; plan for historical data | Discuss data mapping in advance |
| **Multiple clock types** | Complex; different employee groups use different methods | Create separate demo scenarios per type |

**Questions to Ask if Unclear:**
- "Are all employees using the same clocking method?"
- "For biometric users, do they also need web/app access?"
- "Do you have existing timelog data we should import?"

**Preparation Tasks:**
- [ ] If migrating: Request sample export from old system for field mapping
- [ ] If kiosk: Confirm device model & ensure Kando supports it
- [ ] If mobile: Test app on actual phones employees will use
- [ ] If multiple methods: Prepare separate demo walkthrough per type

---

### SECTION 3: Work Schedule Types

**Key Patterns:**

**Pattern 1: Fixed Shifts (Standard 9-5)**
- *Complexity*: Low
- *Trainer focus*: Standard timekeeping, simple schedule creation
- *Example*: "Let's create a 9-5 shift and assign it to Jane's team"

**Pattern 2: Rotating Shifts**
- *Complexity*: High
- *Trainer focus*: Shift rotation patterns, multi-shift scheduling
- *Example*: "Here's how to set up your morning/afternoon/night rotation"
- *Preparation*: Ask for exact rotation schedule (e.g., "Mon-Fri morning, Sat-Sun afternoon")

**Pattern 3: Flexible Hours**
- *Complexity*: Medium
- *Trainer focus*: Core hours, grace periods, undertime handling
- *Example*: "Core hours 10-3, flexible 7-10am and 3-6pm"
- *Preparation*: Clarify if "undertime" is tracked or ignored

**Pattern 4: Remote/WFH**
- *Complexity*: Medium
- *Trainer focus*: Time zone handling, absence of location data
- *Example*: "Employees in SF and NY can clock in from anywhere"
- *Preparation*: Discuss if GPS or location-based features are needed

**Pattern 5: Project-Based**
- *Complexity*: High
- *Trainer focus*: Custom fields or project codes
- *Example*: "Engineers track hours per project for billing"
- *Preparation*: May need custom field setup; escalate to implementation team if needed

---

### SECTION 4: Leave & Absence Management

**Critical Interpretation Points:**

**1. Accrual vs. Flexible vs. Manual:**

```
Accrual Model
├─ Monthly: Fixed days given each month
├─ Quarterly: Fixed days per quarter
└─ Annually: All days given Jan 1 (typical)
   ⚠️ Trainer: Be clear about prorated amounts for mid-year joins

Flexible Model
├─ "Unlimited" or discretionary leave
├─ May have thresholds (max X days/year)
└─ ⚠️ Trainer: Clarify approval process, documentation requirements

Manual Model
├─ HR manually sets balance for each employee
├─ Useful for unusual policies
└─ ⚠️ Trainer: Requires HR discipline for tracking
```

**2. Carryover & Expiry Rules:**

| Rule | Impact | Trainer Note |
|------|--------|--------------|
| "No carryover" | Days lost; incentivizes use | Demo: Show balance reset each year |
| "Max 5 days carryover" | Complex; track expiry dates | Demo: Show carryover tracking + expiry |
| "Unlimited carryover" | Simple; track total liability | Demo: Show running balance |

**3. Approval Workflows:**

- Single approver (Manager) → Simple; demo standard flow
- Multiple approvers (Manager + HR) → Complex; explain sequential vs. parallel approval
- Auto-approval rules (sick with cert) → Requires custom rules; may need implementation support

**Preparation Checklist:**
- [ ] Document all leave types and accrual formulas
- [ ] Create a leave balance calculation spreadsheet to verify system matches
- [ ] Map approval workflows (who approves what)
- [ ] Clarify carryover and expiry rules in writing

**Red Flags:**
- ⚠️ Overly complex custom rules → May require feature development
- ⚠️ No documented policy → Ask for written leave policy before training
- ⚠️ Negative leave balances allowed → Warn about potential liability

---

### SECTION 5: Payroll & Compensation

**Most Critical Section** - Get this wrong and salaries are wrong!

**1. Pay Frequency & Period Definition:**

| Frequency | Complexity | Trainer Note |
|-----------|-----------|--------------|
| Weekly | Low | Simple; 52 periods/year |
| Bi-weekly | Low | Simple; 26 periods/year |
| Semi-monthly | Medium | 24 periods/year; prorations needed for varying month lengths |
| Monthly | Low | 12 periods/year |

**Action**: Verify period dates match actual pay dates. Example:
```
Client says "semi-monthly on 1st and 15th"
Trainer confirms: Jan pays 1-15 + 16-31 (not same dates each month)
```

**2. Compensation Components - Critical Understanding:**

For EACH component, you need:
- **What**: Name & description
- **How**: Calculation method
- **When**: Frequency
- **Tax**: Taxable or not?
- **Deductible**: On separation?

**Example Mapping:**

```
CLIENT SAYS:              TRAINER UNDERSTANDS:
"Base Salary"          →  Monthly fixed amount (taxable)
"HRA"                  →  House Rent Allowance, fixed/percentage (taxable)
"Overtime 1.5x"        →  1.5 × hourly rate (taxable)
"Meal allowance"       →  Fixed daily/monthly (may be non-taxable)
"Bonus - annual"       →  Lump sum once/year (taxable)
```

**Kando Modeling:**
- Simple components → Use base compensation fields
- Complex components → May need custom pay type fields
- Tiered components → May need rules/calculations

**3. Leave Deduction During Absence:**

⚠️ **CRITICAL**: How does leave affect salary?

```
Scenario: Employee takes 1 day annual leave
OPTION A: "No deduction" → Paid leave (salary unchanged)
OPTION B: "Deduct daily rate" → Unpaid leave (salary reduced)
OPTION C: "Deduct hourly rate × hours" → Prorated for short-term (salary reduced)

Each has different implementation!
```

**Preparation Checklist:**
- [ ] Request pay slips (anonymized) to verify components
- [ ] Create pay calculation example end-to-end
- [ ] Verify deduction calculation method in writing
- [ ] Clarify separation payouts (paid-up leave, etc.)
- [ ] Get written approval of proposed configuration

**Red Flags:**
- ⚠️ More than 10 compensation components → May be overcomplicated; suggest simplification
- ⚠️ Complex tiered calculations → May need custom coding; escalate early
- ⚠️ Tax calculation differences → Consult with Finance/Payroll lead
- ⚠️ Vague descriptions ("incentive", "bonus") → Ask for specific calculation rules

---

### SECTION 6: Shift Policies & Rules

**Purpose**: Understand how lateness and undertime are handled.

**Key Interpretations:**

**Late Arrival Policy:**
```
Client says: "Grace period 5 minutes"
Trainer understands:
  - Clock in anytime within first 5 mins = no penalty
  - After 5 mins = late policy triggers
```

**Undertime Policy:**
```
Client says: "Deduct hourly rate × missing hours"
Trainer calculates:
  - Scheduled 8 hours, worked 7.5 hours = 0.5 hours × hourly rate = deduction
```

**Basis for Calculation:**
- **Time-in**: Only late arrivals matter (can stay late to make up)
- **Total hours**: Total worked vs. total scheduled
- **Time-out**: Early departures matter

**Preparation:**
- [ ] Create worked examples with client's actual thresholds
- [ ] Verify deduction calculations match client expectations
- [ ] Test system calculations against manual calculations
- [ ] Document edge cases (e.g., approved overtime = not undertime)

---

### SECTION 7: Leave & Attendance Policies

**Interpretation Focus:**

1. **Accrual Rates**: Document in formula form
   ```
   Example: "Annual leave: 1.25 days/month"
   = 15 days/year total
   = Accrues 1.25 on 1st of each month
   ```

2. **Policy Types**:
   - Accrual: System auto-credits on schedule
   - Flexible: HR manually sets or system tracks discretionary
   - Manual: HR sets for each employee manually

3. **Carryover & Expiry**:
   - No expiry: Simple
   - Expiry rule: Complex; must track dates
   - Pro-rata at year-end: Very complex

---

### SECTION 8: Organizational Structure

**What to Look For:**

| Factor | Training Implication |
|--------|-------------------:|
| Flat (all report to 1 person) | Simple; quick hierarchy setup |
| Multi-level (3+ levels) | Complex; show approval chains carefully |
| Matrix reporting (multi-manager) | Very complex; may need escalation |
| Departments vs. Teams | Plan organization structure carefully |

**Preparation:**
- [ ] Request org chart (even simple text version)
- [ ] Identify reporting lines for approval workflows
- [ ] Create demo using actual client structure
- [ ] Plan user roles (who is manager, HR admin, etc.)

---

### SECTION 9: Special Requirements & Integrations

**Red Flags Requiring Escalation:**

| Requirement | Action |
|-------------|--------|
| Custom approval workflows | Involve implementation team early |
| ERP integration (SAP, Oracle) | May need API work; schedule separately |
| Biometric hardware integration | Requires tech setup; coordinate with IT |
| Compliance rules (industry-specific) | Verify if Kando supports; escalate if not |
| Legacy data import (100K+ records) | Plan migration separately |
| Multi-country payroll/compliance | Complex; may need regional expertise |

**Preparation:**
- [ ] Flag any "yes" answers that aren't in scope
- [ ] Create escalation plan for complex requirements
- [ ] Identify integrations that need separate setup
- [ ] Schedule technical calls before training if needed

---

## 🛠️ PRE-TRAINING PREPARATION WORKFLOW

### 1. Review (Day 3 before training - 45 mins)

```
Read questionnaire carefully and note:
├─ ✅ Straightforward answers (low complexity)
├─ ⚠️ Unusual policies (medium complexity)
├─ 🚨 Unclear/complex items (high complexity)
└─ ❓ Missing information (needs clarification)
```

### 2. Clarify (Day 2 before training - 15-30 mins)

**Send email if needed:**
```
Hi [Client Contact],

Thank you for completing the questionnaire! I have a few clarification
questions before our training:

1. Section 5 (Payroll): You mention "meal allowance" - is this
   taxable or non-taxable? [IMPORTANT FOR DEDUCTION CALC]

2. Section 3 (Leave): You show accrual monthly - should employees
   hired mid-month get pro-rata amounts? [AFFECTS BALANCE TRACKING]

3. Section 6 (Shift Policy): When calculating undertime, do you use
   total hours or time-in basis? [DIFFERENT CALCULATION]

Please clarify so we can configure accurately. Looking forward to
our training!
```

### 3. Prepare (Day 1 before training - 1-2 hours)

**Create a Trainer Preparation Document:**

```
┌─────────────────────────────────────────────────┐
│ TRAINING PREP: [Client Name]                    │
├─────────────────────────────────────────────────┤
│ COMPLEXITY LEVEL: Low / Medium / High           │
│ ESTIMATED TIME NEEDED: ____ minutes extra       │
├─────────────────────────────────────────────────┤
│ KEY CONFIGURATION ITEMS:                        │
│ 1. Time tracking: [Web + Kiosk]                 │
│ 2. Shifts: [Fixed 9-5 + Rotating]               │
│ 3. Leave: [Annual accrual 1.25/month]           │
│ 4. Pay: [Monthly + 4 components]                │
│ 5. Approval: [Manager → HR]                     │
├─────────────────────────────────────────────────┤
│ CUSTOM DEMO EXAMPLES NEEDED:                    │
│ □ Jane (9-5 employee, takes annual leave)       │
│ □ Mike (rotating shift, kiosk user)             │
│ □ Sarah (manager, approves requests)            │
├─────────────────────────────────────────────────┤
│ POTENTIAL ISSUES TO WATCH:                      │
│ ⚠️ Complex approval chain (May need escalation) │
│ ⚠️ Multi-location (Timezone handling)           │
│ 🚨 Custom fields (May need coding)              │
├─────────────────────────────────────────────────┤
│ BACKUP SOLUTIONS IF NOT AVAILABLE:              │
│ - If [issue X], propose [solution Y]            │
│ - Timeline: [when they can be addressed]        │
└─────────────────────────────────────────────────┘
```

### 4. Demo Setup (Day 1 evening or morning-of)

**Create Test Data:**
- [ ] Create demo users matching their org structure
- [ ] Set up leave types matching their policies
- [ ] Configure pay components as they described
- [ ] Create shifts and schedules using their timings

**Example Setup Script:**
```
# Test Data for [Client] Demo

## Users to Create:
- Manager: Alice (can approve leave)
- Employee: Bob (daily clocking)
- Employee: Carol (remote worker)

## Leave Setup:
- Annual Leave: 15 days/year, monthly accrual
- Sick Leave: 10 days/year, manual
- Carry-over: max 5 days, expires Dec 31

## Shifts:
- Standard: 9 AM - 5 PM (8 hours)
- Shift A: 6 AM - 2 PM (8 hours)
- Shift B: 2 PM - 10 PM (8 hours)

## Pay:
- Base Salary: $X
- HRA: $Y
- Overtime: 1.5x hourly
```

---

## 📝 DURING TRAINING: Questionnaire Reference

**Use questionnaire as training roadmap:**

```
Opening:
  "Based on your questionnaire, I see you have [X situation].
   Let me walk through how Kando handles this..."

During features:
  "Let's set up your [specific] leave type as you described..."

When client asks:
  "I see in your questionnaire you mentioned [detail].
   That's because [explanation]. Here's how we'll configure it..."

Closing:
  "I've created demo data matching your setup. After training,
   we'll migrate your real data and customize based on what
   we learned today."
```

---

## ✅ POST-TRAINING FOLLOW-UP

**Send within 24 hours:**

```
Subject: [Client] Kando Training - Next Steps

Hi [Client],

Thank you for your participation in today's training!

COMPLETED TODAY:
✓ System overview and navigation
✓ Time tracking setup for [your setup]
✓ Leave management configuration
✓ Payroll components review

NEXT STEPS (Timeline):
1. [Your team]: Provide final employee data list (XLSX format)
   → Due: [DATE]

2. [Our team]: Create test environment with your data
   → Delivery: [DATE]

3. [Your team]: UAT (user acceptance testing) on test system
   → Duration: 1 week

4. [Both]: Go-live preparation and cutover plan
   → Go-live date: [DATE]

OPEN ITEMS FROM QUESTIONNAIRE:
- Item 1: [action + owner + due date]
- Item 2: [action + owner + due date]

Any questions? Reply to this email or schedule a call.

Best regards,
[Trainer Name]
```

---

## 🚨 ESCALATION CRITERIA

**Escalate to implementation team if:**

- [ ] Client has more than 10 compensation components
- [ ] Complex tiered leave policies (e.g., accrual changes by tenure)
- [ ] Multi-country payroll with different compliance rules
- [ ] Custom integrations with other systems
- [ ] Unusual approval workflows (more than 2 approval levels)
- [ ] Very large employee count (>5,000) requiring special data handling
- [ ] Client has existing data that needs custom migration mapping

---

## 📊 Questionnaire Completion Quality Checklist

After reviewing client questionnaire, ensure:

- [ ] All mandatory sections completed (not left blank)
- [ ] Specific numbers provided (not just "yes/no")
- [ ] Leave accrual formulas documented clearly
- [ ] Pay components listed with calculation methods
- [ ] Reporting structure/hierarchy described
- [ ] Shift patterns clearly defined
- [ ] Compliance requirements identified
- [ ] Any special requirements flagged

**If incomplete:**
→ Send back to client for completion before training
→ Don't start training with incomplete information

---

## 📚 Related Documents

- `CLIENT_ONBOARDING_QUESTIONNAIRE.md` - The questionnaire itself
- `HR_ADMIN_ONBOARDING_GUIDE.md` - Training participant reference
- `/manual/5-HR-Admin-Guide/` - System setup documentation
- `/manual/4-Owner-Guide/` - Financial/organizational setup

