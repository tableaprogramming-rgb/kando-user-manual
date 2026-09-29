# Payroll Management - Complete Overview

*Comprehensive guide for HR and payroll administrators to process payroll, manage compensation, and ensure compliance.*

## Overview

Payroll is the complete process of calculating employee compensation, deducting taxes and benefits, and depositing salaries. As an HR/Payroll administrator, you're responsible for:

- Processing payroll each pay cycle
- Ensuring accuracy of hours and compensation
- Calculating taxes and contributions
- Managing deductions
- Distributing payslips
- Handling payroll adjustments and corrections
- Maintaining compliance records
- Archiving payroll data

## Payroll Processing Cycle

### Complete Monthly Payroll Timeline

```
WEEK 1-3: ACTIVE PERIOD
├─ Employees work and clock in/out
├─ Managers approve timesheets
├─ Leave requests processed
└─ Adjustments made as needed

DAY 28-30: CLOSING PHASE
├─ Day 28: Final timesheet cutoff
├─ Day 29: Payroll team reviews all timesheets
├─ Day 30: Lock period, finalize all data

DAY 1-2 NEXT MONTH: PROCESSING PHASE
├─ Run payroll calculation
├─ Review for accuracy
├─ Generate preliminary payslips
├─ Verify deductions

DAY 3-4: REVIEW & APPROVAL
├─ Finance reviews payroll
├─ Director approves if required
├─ Address any discrepancies
└─ Finalize amounts

DAY 5: PERIOD LOCK
├─ Payroll finalized
├─ Payments authorized
├─ Data becomes read-only
└─ Salaries processed for payment

DAY 8: SALARY DEPOSIT
├─ Payments hit employee accounts
├─ Payslips become available
├─ Employees can view details
└─ Tax certificates generated
```

## Payroll Components

### Understanding Earnings

**Basic Salary**
- Base monthly compensation
- Fixed amount per employment contract
- Same each month (unless changed)
- Used for tax and benefit calculations

**Allowances**
- Housing/Residential Allowance
- Transportation Allowance
- Meal Allowance
- Communication Allowance
- Other role-specific allowances

**Overtime Pay**
- Hours beyond 40/week worked
- Calculated at premium rate (1.25x-2.5x)
- Varies by shift type and policy
- Must be pre-approved (usually)

**Leave Pay**
- Approved leave converted to salary
- Calculated at daily rate
- Included in gross earnings
- Deducted from annual allocation

**Holiday Pay**
- When employee works on holiday
- Calculated at premium rate (2x typical)
- Or paid even if not worked (if paid holiday)

**Example Monthly Earnings**:
```
Earnings Breakdown:
├─ Basic Salary:           PHP 20,000
├─ Housing Allowance:      PHP 5,000
├─ Transportation:         PHP 2,000
├─ Leave Paid (2 days):    PHP 1,000
├─ Overtime (10 hrs):      PHP 1,875
├─ Holiday Pay (worked):   PHP 2,000
└─ GROSS EARNINGS:         PHP 31,875
```

### Understanding Deductions

**Mandatory Government Contributions**
- Income Tax (BIR): Government tax
- SSS: Social Security System
- PhilHealth: Health insurance
- PagIBIG: Provident fund

**Voluntary Deductions**
- Loans (SSS, PagIBIG, company)
- Insurance premiums
- Savings programs
- Union dues
- Charitable contributions

**Legal Deductions**
- Child support
- Wage garnishment
- Court judgments
- Fines or penalties

**Example Monthly Deductions**:
```
Mandatory:
├─ Income Tax (BIR):       PHP 2,700
├─ SSS Contribution:       PHP 1,125
├─ PhilHealth:             PHP 400
├─ PagIBIG:                PHP 100

Voluntary:
├─ SSS Loan:               PHP 500
├─ Health Insurance:       PHP 300
└─ Savings:                PHP 500

TOTAL DEDUCTIONS:          PHP 5,625
```

### Net Pay Calculation

```
Gross Earnings:            PHP 31,875
Less: Total Deductions:   -PHP 5,625
                          ___________
NET PAY:                   PHP 26,250 ← Amount deposited
```

## Processing Monthly Payroll

### Step-by-Step Payroll Process

**STEP 1: Timesheet Review (Day 28-29)**

1. Check all timesheets are submitted
2. Review for discrepancies
3. Verify manager approvals
4. Identify outstanding issues:
   - Missing timesheets
   - Unapproved leave
   - Unusual overtime
5. Follow up with managers if needed
6. Ensure all timesheets locked/finalized

**Checklist**:
- [ ] All employees have submitted timesheet
- [ ] All leaves are approved
- [ ] Managers approved all timesheets
- [ ] No salary adjustments pending
- [ ] Timesheet discrepancies resolved

**STEP 2: Generate Payroll (Day 1-2)**

**⚠️ Before you begin**: Every employee in the pay group needs an active **Payroll** module seat. If anyone is missing one, they'll show a red **Unlicensed** tag and Kando blocks paysheet creation with: *"There are employees without Payroll Module seat. Remove them from the Pay Group or assign a seat."* Assign missing seats from **Settings → Organization → Subscriptions** (see [Subscription Management](../owner-guide/subscription-management.md#the-unlicensed-tag)) before continuing, or remove the employee from the pay group.

1. Go to **Payroll** → **Process Payroll**
2. Select pay period:
   - Date range: [Feb 1-29, 2026]
3. Verify parameters:
   - Pay date: Feb 8, 2026
   - Processing date: Feb 1, 2026
4. Click **Calculate Payroll**
5. System processes:
   - Basic salary × hours worked
   - Overtime calculations
   - Leave conversions
   - Allowances added
   - Deductions calculated
   - Tax computed
6. Review summary:
   - Number of employees: 150
   - Total gross: PHP 3,287,500
   - Total deductions: PHP 542,300
   - Total net: PHP 2,745,200

**Expected Processing Time**: 5-15 minutes for 100+ employees

**STEP 3: Review Payroll Details (Day 2-3)**

1. Go to **Payroll** → **Payroll Review**
2. Review by employee:
   - Click employee name
   - Verify earnings
   - Verify deductions
   - Check net pay
3. Look for:
   - Unusual amounts
   - Missing components
   - Calculation errors
4. Review summary totals:
   - Average salary: Should be consistent
   - Total deductions: Should be reasonable %
   - Tax amounts: Should be within range

**Verification Checklist**:
- [ ] All employees included
- [ ] Earnings amounts reasonable
- [ ] Deductions calculated correctly
- [ ] Tax percentages appropriate
- [ ] Net pay reflects gross minus deductions
- [ ] Any one-time items accounted for
- [ ] Leave balances updated correctly
- [ ] No negative/zero net pays (unexpected)

**Common Issues to Check**:
- Employee with 0 earnings (check timesheet)
- Excessive overtime (verify approval)
- Missing deductions (check configuration)
- Tax seems too high (verify gross calculation)
- Deduction duplicated (check setup)

**STEP 4: Corrections and Adjustments (Day 3)**

If issues found:

1. **For timesheet errors**:
   - Return to manager for correction
   - Manager updates timesheet
   - Re-run payroll calculation

2. **For compensation errors**:
   - Check salary configuration
   - Verify employee record
   - Create manual adjustment if needed

3. **For deduction errors**:
   - Verify deduction setup
   - Check if employee is eligible
   - Create adjustment to correct

4. **Re-run payroll**:
   - After corrections made
   - Verify amounts fixed
   - Document changes

**Do NOT proceed** if issues unresolved.

**STEP 5: Approval (Day 4)**

**If required by policy**:
1. Submit payroll to finance/director
2. They review summary
3. Approve or request changes
4. Once approved, proceed

**Director's Review Checklist**:
- [ ] Payroll summary makes sense
- [ ] Total expenses reasonable
- [ ] Tax provisions appropriate
- [ ] No unusual variances from prior month
- [ ] Employee count matches
- [ ] Approve to proceed

**STEP 6: Finalize and Lock (Day 5)**

1. Go to **Payroll** → **Finalize Payroll**
2. Verify all corrections completed
3. Click **LOCK PAYROLL**
4. System:
   - Prevents further changes
   - Marks period as finalized
   - Generates payslips
   - Creates audit trail
5. Confirm lock complete

**After Lock, You Cannot**:
- ❌ Edit employee compensation
- ❌ Modify timesheets
- ❌ Change deductions
- ❌ Adjust earnings
- **CAN do**: Create formal payroll adjustments

**STEP 7: Payment Processing (Day 5-6)**

1. Verify payment details:
   - Bank account routing numbers
   - Amount per employee
   - Total payment amount
2. Authorize payment
3. Submit to bank/payment processor
4. Confirm transmission

**STEP 8: Payslip Distribution (Day 7-8)**

1. System generates payslips
2. Employees receive notification
3. Payslips available in:
   - Employee dashboard
   - Email (if configured)
   - Portal
4. Verify employees received
5. Address questions

## Key Payroll Dates to Remember

**Monthly Cycle** (Example Feb 2026):

| Date | Event | Action |
|------|-------|--------|
| Feb 1-29 | Pay Period | Employees work |
| Feb 28 | Timesheet Cutoff | Final timesheet due |
| Mar 1-2 | Processing | Payroll calculated |
| Mar 3-4 | Review | Finance approves |
| Mar 5 | Lock | Payroll finalized |
| Mar 8 | Payment | Salaries deposited |

**Important**:
- Date changes affect entire cycle
- Publish calendar to employees
- Communicate cutoff dates clearly
- No changes allowed after lock

## Payroll Adjustments and Corrections

### When to Create Adjustments

**Adjustments used for**:
- Retroactive pay increases
- Correction of locked period errors
- Make-up payments
- Allowance corrections
- Deduction corrections

**Adjustments NOT for**:
- Current period changes (re-run payroll)
- Policy exceptions (request approval first)
- Discretionary bonuses (separate process)

### Creating a Payroll Adjustment

**Scenario**: Discovered timesheet error in February (already finalized)

**Process**:
1. Go to **Payroll** → **Adjustments**
2. Click **Create Adjustment**
3. Select **Period**: February 2026
4. Select **Employee**: Maria Santos
5. Adjustment Type: **Time Correction**
6. Detail:
   - Missing hours: 8 hours
   - Pay rate: PHP 125/hr
   - Amount: PHP 1,000
7. Reason: "Missed clock-in Feb 15, verified with manager"
8. Click **Submit for Approval**
9. Finance approves
10. Adjustment processed in next payroll or separate check

**Adjustment Appears As**:
- Separate line on payslip
- Note: "Feb 2026 Adjustment"
- Included in current month net pay
- Or separate check if requested

### Bonus and Incentive Payments

**Processing Bonuses**:
1. Determine eligibility and amounts
2. Create adjustments or separate payroll
3. Add to payment
4. Process same as regular payroll
5. Issue separate payslips if desired

**Example**:
```
Performance Bonus - Feb 2026
├─ Employee: John Reyes
├─ Amount: PHP 2,500
├─ Reason: "Quarterly performance bonus"
├─ Tax: PHP 350 (14% bracket)
└─ Net: PHP 2,150
```

## Tax Compliance and Reporting

### Tax Calculation and Filing

**Monthly Tax Withholding**:
- BIR calculates based on gross salary
- Withheld from employee paycheck
- Paid to government monthly

**Year-End Tax Filing** (BIR Form 1601-CF):
1. Employer files (not employee)
2. Summarizes all annual withholdings
3. Verifies payments made
4. Issues tax certificate (Form 2307)

**Employee Tax Certificate** (BIR Form 2307):
- Provided to every employee
- Shows total earnings year-to-date
- Shows total tax withheld
- Employee uses for personal tax filing
- Issued by February following tax year

**Your Responsibility**:
- Calculate correct monthly tax
- Remit to BIR on time
- Maintain records
- Generate year-end reports
- Provide certificates to employees

### Government Contributions

**SSS Contributions**:
- Employee pays: ~3.63%
- Employer matches: ~7.27%
- Monthly remittance required
- Annual statement provided

**PhilHealth**:
- Employee pays: 1.5% (half of premium)
- Employer matches: 1.5%
- Quarterly billing
- Proof of coverage important

**PagIBIG**:
- Employee pays: PHP 100-600 (based on salary)
- Employer matches: PHP 100-600 or 2%
- Monthly remittance
- Account tracking available

**Your Responsibility**:
- Accurate deductions from payroll
- Timely government remittances
- Maintain contribution records
- Monitor employee accounts
- Address contribution issues

## Payroll Reports and Insights

### Key Payroll Reports

**Monthly Payroll Summary**:
- Total employees paid
- Total gross salary
- Total deductions
- Total net payments
- Budget vs. actual
- Variance analysis

**Employee Payroll Details**:
- Individual payslips
- Earnings breakdown
- Deduction details
- Year-to-date totals
- Tax information

**Deduction Reports**:
- SSS contributions due
- PhilHealth amounts
- PagIBIG remittance
- Loan deductions
- Other deductions

**Tax Report**:
- Gross salary by employee
- Tax withheld by employee
- Year-to-date tax totals
- Comparison to prior periods

**Analytical Reports**:
- Average salary trends
- Overtime analysis
- Leave cost analysis
- Headcount changes
- Compensation variance

### Using Payroll Data

**For Management**:
- Budget planning and forecasting
- Cost analysis by department
- Overtime trend identification
- Compensation benchmarking

**For Finance**:
- Expense tracking
- Accrual adjustments
- Cash flow planning
- Audit preparation

**For HR**:
- Compensation reviews
- Equity analysis
- Retention metrics
- Training impact on OT

## Best Practices

✅ **DO**:
- **Process on schedule** (communicate dates clearly)
- **Review thoroughly** (catch errors before lock)
- **Lock promptly** (prevents accidental changes)
- **Archive securely** (keep 7+ years)
- **Maintain records** (audit trail important)
- **Test changes** (update in test environment first)
- **Document decisions** (why adjustments made)
- **Communicate delays** (if unexpected issues)
- **Verify accuracy** (spot-check calculations)
- **Train staff** (keep everyone updated)

❌ **DON'T**:
- Don't process outside pay period (keeps timing consistent)
- Don't skip review step (errors compound)
- Don't change after lock (use adjustments)
- Don't delete payroll records (legal requirement)
- Don't ignore discrepancies (address immediately)
- Don't share payroll data (confidentiality)
- Don't process without approval (if required)
- Don't rush payroll (accuracy over speed)
- Don't guess on tax rates (verify with government)
- Don't process partial payroll (all employees together)

## Troubleshooting

**Problem**: "Payroll calculation seems too low"
**Cause**: Possible missing earnings or deduction error
**Solution**:
1. Check timesheet hours submitted
2. Verify allowances configured
3. Check overtime is included
4. Verify no excessive deductions
5. Run calculation test with single employee
6. Contact support with example

**Problem**: "Tax amount doesn't match government table"
**Cause**: Calculation difference or configuration
**Solution**:
1. Verify gross salary amount
2. Check tax table settings
3. Confirm no deductions subtracted before tax (wrong)
4. Calculate manually using BIR tables
5. Adjust if systematic error found

**Problem**: "Employee reports incorrect net pay"
**Cause**: Multiple possibilities
**Solution**:
1. Pull employee's payslip
2. Review earnings (match timesheet)
3. Verify deductions (match configuration)
4. Calculate: Gross - Deductions = Net
5. Identify discrepancy
6. Create adjustment if error confirmed

**Problem**: "Can't process payroll, system error"
**Cause**: Technical issue or data problem
**Solution**:
1. Verify all timesheets submitted
2. Check for locked employee records
3. Verify compensation data complete
4. Try again after brief wait
5. Contact support with error message

**Problem**: "There are employees without Payroll Module seat" (can't create paysheet)
**Cause**: One or more employees in the pay group show a red **Unlicensed** tag — they don't have an active Payroll seat
**Solution**:
1. Note which employees show the **Unlicensed** tag in the pay group list
2. Go to **Settings → Organization → Subscriptions**
3. Assign each unlicensed employee an available Payroll seat (or purchase more if none are unassigned)
4. Alternatively, remove the unlicensed employee from the pay group if they shouldn't be paid through it
5. Retry paysheet creation

## Advanced Payroll Topics

### Multi-Currency Payroll

**When Applicable**:
- International employees (different countries)
- Regional operations (different currencies)
- Expatriate compensation

**Configuration**:
```
Employee Currency Settings:
├─ Default Currency: PHP (default)
├─ Alternative: USD, SGD, HKD, etc.
├─ Conversion Rate: Daily/monthly rate
├─ Pay Method: USD to account, PHP converted, etc.
└─ Tax Implications: Varies by country
```

**Challenges**:
- Exchange rate fluctuations
- Tax treaties between countries
- Reporting in multiple currencies
- Government remittance requirements

### Retroactive Payroll Adjustments

**Scenarios Requiring Retroactive Changes**:
```
1. Salary Increase Applied Retroactively
   └─ "Increase approved retroactive to Jan 1"
      ├─ Calculate difference Jan-current
      ├─ Create adjustment for difference
      └─ Pay via next payroll + principal

2. Allowance Correction
   └─ "Housing allowance was wrong, correct from Feb"
      ├─ Calculate overpay/underpay
      ├─ Adjust employee balance
      └─ Pay difference

3. Compensation Error
   └─ "Basic salary was entered wrong for new hires"
      ├─ Identify affected periods
      ├─ Calculate correct vs. paid
      └─ Create adjustment
```

**Process**:
1. Identify the period affected
2. Calculate correct compensation
3. Compare to what was paid
4. Determine difference (over/under)
5. Create adjustment or recovery plan
6. Process in next payroll
7. Document reason and approval

### Year-End Tax Adjustments

**Year-End Tax Filing** (March following tax year):
```
1. Compile all monthly tax records
2. Calculate total annual tax withheld
3. Compare to government table
4. Adjust if discrepancy:
   ├─ Too much withheld → Refund to employee
   ├─ Too little withheld → Collect from employee
   └─ Correct amount → No adjustment needed
5. Issue tax certificate (BIR Form 2307)
6. Employee files personal tax return (if needed)
```

**Common Issues**:
- Tax withheld exceeds required (employee owed refund)
- Tax withheld less than required (employee owes difference)
- Gross salary changed during year (affects tax bands)
- New employee (partial year tax)
- Employee departure (final tax settlement)

### Multi-Payroll Schedules

**For Hybrid Organizations**:
```
Example: Company with 3 pay groups

Group A (Majority):
├─ Monthly payroll
├─ Pay date: 8th of month
└─ 150 employees

Group B (Management):
├─ Semi-monthly
├─ Pay dates: 15th & last day
└─ 20 employees

Group C (Contractors):
├─ Weekly or as-needed
├─ Pay dates: Fridays
└─ 10-15 employees
```

**Configuration**:
1. Create payroll schedule for each group
2. Define days/dates for each
3. Assign employees to group
4. Process separately at scheduled times
5. Track separately in reports

### Payroll Accruals and Provisions

**Accrual** = Expense recognized but not yet paid

**Common Accruals**:
```
1. 13th Month Pay (Mandatory in Philippines)
   ├─ Accrued monthly: 1/12 of annual compensation
   ├─ Paid: December (or split May + Dec)
   └─ Accounting: Liability on balance sheet

2. Bonus Accrual
   ├─ Estimated: Known bonus amount
   ├─ Accrued monthly: Bonus ÷ 12
   ├─ Paid: At specified time
   └─ Adjust if actual differs

3. Leave Accrual
   ├─ Daily accrual: Days per year ÷ 365
   ├─ Tracked: Unused balance
   ├─ Liability: Amount owed if employment ends
   └─ Accounting: Shown on balance sheet
```

**Recording Accruals**:
1. Calculate monthly accrual amount
2. Create accounting entry monthly
3. When paid: Reverse accrual, pay actual
4. At year-end: Review for accuracy

### Payroll Reconciliation

**Monthly Reconciliation** (Critical control):

```
Payroll Reconciliation Steps:

1. Verify Headcount
   ├─ Expected: From HR records
   ├─ Actual: Who got paid
   └─ Difference: Investigate anomalies

2. Verify Gross Salary
   ├─ Expected: Sum of all salaries
   ├─ Actual: Total paid
   └─ Variance: Should be <1%

3. Verify Deductions
   ├─ Tax amounts reasonable?
   ├─ SSS/benefits correct?
   └─ Any missing deductions?

4. Verify Net Pay
   ├─ Gross - Deductions = Net (formula check)
   ├─ Reasonable range (typically 70-85% of gross)
   └─ No negative or zero net pays (unexpected)

5. Verify Payment
   ├─ All employees received payment?
   ├─ Amounts match payslips?
   ├─ Bank confirmation received?
   └─ Any reversals/rejections?
```

**Reconciliation Report**:
```
Payroll Reconciliation - February 2026

Headcount:
├─ Previous month: 150 employees
├─ Current month: 149 employees (-1 termination)
├─ Payroll records: 149 ✅
└─ Variance: 0%

Gross Salary:
├─ Expected (from HR): PHP 3,287,500
├─ Actual paid: PHP 3,287,200
├─ Variance: -PHP 300 (-0.01%)
└─ Reason: 1 employee half-month pay

Deductions:
├─ Tax: PHP 452,300 (13.75% of gross) ✅
├─ SSS: PHP 115,200 (3.5% of gross) ✅
├─ PhilHealth: PHP 49,300 (1.5% of gross) ✅
└─ Other: PHP 125,500 (manual verified) ✅

Net Pay:
├─ Total: PHP 2,745,200
├─ Average: PHP 18,425 per employee
└─ Range: PHP 10,000 - PHP 85,000 ✅

Payment Confirmation:
├─ Bank deposited: PHP 2,745,200
├─ Status: All successful ✅
└─ Date: Feb 8, 2026 ✅

Status: RECONCILED ✅
```

### Payroll Analytics and Reporting

**Key Payroll Metrics**:
```
Monthly Analysis:
├─ Gross payroll trending (month over month)
├─ Headcount movement (joiners/leavers)
├─ Overtime analysis (hours, cost, patterns)
├─ Leave cost (number of days, cost)
├─ Tax and benefit percentages
└─ Deduction trends

By Cost Center:
├─ Labor cost per department
├─ Overtime by department
├─ Headcount by department
├─ Budget vs. actual
└─ Variance analysis

By Employee:
├─ Comp trends (increasing/stable)
├─ Allowance changes
├─ Deduction changes
├─ OT frequency
└─ Leave usage
```

**Using Insights**:
```
If OT increasing:
└─ Investigate: Understaffed? Inefficient? Deadline-driven?

If comp variance high:
└─ Investigate: New hires? Increases? Terminations?

If tax % different:
└─ Investigate: Salary changes? New rates? Errors?

If leave cost increasing:
└─ Investigate: More usage? Rate changes? Policy?
```

### Special Payroll Situations

**New Employee Mid-Month**:
```
Start Date: Feb 15
├─ Salary: PHP 20,000/month
├─ Pro-rata calculation: 20,000 × (16/28) = PHP 11,429
├─ Pay in next payroll
└─ Document pro-rata in payslip
```

**Employee Departure**:
```
Termination Date: Feb 25
├─ Calculate pro-rata: Jan 1-25
├─ Add unpaid leave (if entitled)
├─ Deduct final deductions
├─ Prepare final payslip
├─ Pay final amount
└─ Update tax records
```

**Long Service Award**:
```
10 years service:
├─ Award amount: Based on company policy
├─ Tax treatment: Varies (may be tax-exempt if structured correctly)
├─ Add to final paycheck
├─ Document separately on payslip
└─ Advise employee on tax implication
```

### Payroll Controls and Audit

**Internal Controls**:
```
1. Segregation of Duties:
   ├─ Timesheet submitted by manager
   ├─ Payroll processed by HR/Finance
   ├─ Payment approved by finance
   └─ No single person does all steps

2. Authorization Levels:
   ├─ Routine: Finance approves
   ├─ Over budget: Director approval
   ├─ Exception: CFO approval
   └─ Large variance: Audit review

3. Approval Trails:
   ├─ All approvals logged
   ├─ Dates/times recorded
   ├─ Reasons documented
   └─ Exception handling tracked

4. Regular Audits:
   ├─ Random paycheck verification
   ├─ Employee self-reporting
   ├─ Annual external audit
   └─ Compliance review
```

**What Auditors Check**:
- Payroll math accuracy
- Policy compliance
- Tax remittance timelines
- Government contribution accuracy
- Supporting documentation
- Authorization for payments
- Year-over-year comparisons

---

## Related Pages

- [System Setup](system-setup.md) – Payroll configuration
- [Payslip & Compensation](../employee-guide/payslip-compensation.md) – Employee view

---

**Last Updated**: 2026-09-29
**For Questions**: support@kando.com or payroll@kando.com
