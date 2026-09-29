# Payslip & Compensation

*Understand your salary, benefits, deductions, and payslips in Kando.*

## Overview

Payslip & Compensation allows you to:
- View monthly payslips with detailed breakdown
- Understand your salary composition and deductions
- Download payslips for banking, loans, or documentation
- Track year-to-date earnings and deductions
- View tax information
- Check bonus and incentive payments
- Manage direct deposit information
- Request pay advances (if policy allows)
- View tax forms and year-end statements

Your payslip is the official record of your compensation. It includes gross salary, allowances, deductions (tax, benefits, loans), and net pay. Payslips are typically available a few days after the pay period ends.

**Note**: Payslips are only available on the web version of Kando — the mobile app doesn't support viewing payslips yet.

## Understanding Pay Components

### Earnings

**Basic Salary**
- Your base monthly salary
- Fixed amount agreed in employment contract
- Same each month (unless changed)
- Tax-deductible portion

**Allowances**
- Housing Allowance: Additional housing-related pay
- Transportation Allowance: Commute or vehicle support
- Meal Allowance: Food and beverage support
- Communication Allowance: Phone/internet support
- Other allowances: Specific to role or company

**Leave Pay**
- Paid leave (vacation, sick) converted to salary
- Calculated based on daily rate
- Shown separately on payslip
- Included in gross earnings

**Overtime & Incentives**
- Overtime: Extra pay for hours beyond standard (if applicable)
- Bonus: Performance or annual bonus (if applicable)
- Incentives: Commission or results-based pay (if applicable)

**Example Monthly Breakdown**:
```
EARNINGS:
├── Basic Salary: PHP 20,000
├── Housing Allowance: PHP 5,000
├── Transportation Allowance: PHP 2,000
├── Leave Pay (2 days): PHP 1,000
└── Overtime: PHP 500
TOTAL GROSS: PHP 28,500
```

### Deductions

**Mandatory Deductions**
- **Income Tax (BIR)**: Government income tax
- **SSS**: Social Security System contribution
- **PhilHealth**: Healthcare insurance contribution
- **PagIBIG**: Provident fund contribution

**Voluntary Deductions**
- **Loans**: SSS, PagIBIG, or company loans
- **Savings Programs**: Voluntary savings
- **Benefits**: Health insurance premiums
- **Union Dues**: If applicable
- **Charitable Contributions**: Voluntary donations

**Court Orders/Legal**
- Child support
- Wage garnishment
- Legal judgments

**Example Deductions**:
```
DEDUCTIONS:
├── Income Tax: PHP 2,500
├── SSS: PHP 1,125
├── PhilHealth: PHP 400
├── PagIBIG: PHP 100
├── Loan: PHP 500
└── Benefits: PHP 300
TOTAL DEDUCTIONS: PHP 4,925
```

### Net Pay

**Net Pay = Gross Earnings - Total Deductions**

**Example**:
```
Gross Earnings: PHP 28,500
Total Deductions: PHP 4,925
NET PAY: PHP 23,575 ← This is what you receive
```

## How Timesheet Data Affects Your Payslip

### Understanding Timesheet Fields

Your payslip is calculated based on your timesheet data. Understanding what each field means helps you verify payslip accuracy.

**Key Timesheet Fields**:

| Field | Meaning | Impact on Pay |
|-------|---------|---------------|
| **Regular Hours** | Standard 40 hours/week worked | Base pay calculated here |
| **Overtime Hours** | Hours beyond 40/week worked | OT pay premium (usually 1.25x-2x) |
| **Leave Hours** | Approved leave taken | Calculated as leave pay (full day rate) |
| **Holiday Hours** | Public holiday worked | Special holiday rate (if worked) |
| **Break Hours** | Unpaid breaks deducted | Reduces total hours |
| **Shift Type** | Day/Night/Weekend shift | Different rates apply per shift |
| **Worked Days** | Actual days physically worked | Used for daily rate calculations |
| **Absent Days** | Unpaid absence (no approval) | No pay for these days |

### Timesheet to Payslip Calculation Flow

**How Your Hours Become Pay**:

```
1. TIMESHEET SUBMITTED
   ├─ Regular hours: 160 hours
   ├─ Overtime: 10 hours
   ├─ Leave (approved): 8 hours
   └─ Absent: 0 hours

2. PAYROLL PROCESSES
   ├─ Regular: 160 hrs × PHP 125/hr = PHP 20,000
   ├─ Overtime: 10 hrs × PHP 187.50/hr (1.5x) = PHP 1,875
   ├─ Leave: 8 hrs × PHP 125/hr = PHP 1,000
   └─ Subtotal: PHP 22,875

3. ADD ALLOWANCES
   ├─ Housing: PHP 5,000
   ├─ Transportation: PHP 2,000
   └─ Subtotal: PHP 29,875

4. APPLY DEDUCTIONS
   ├─ Tax: PHP 2,500
   ├─ SSS/PhilHealth: PHP 1,525
   ├─ Loans: PHP 500
   └─ Subtotal: PHP 4,525

5. NET PAY
   └─ PHP 29,875 - PHP 4,525 = PHP 25,350 ✅
```

### Common Timesheet Field Meanings

#### Regular Hours
**What It Means**: Hours worked during standard business hours
**Calculation**: Usually 8 hours × 5 days/week = 40 hours
**Pay Rate**: Your standard hourly rate
**Example**: 8 AM - 5 PM with 1-hour lunch = 8 hours

#### Overtime (OT)
**What It Means**: Hours worked BEYOND the standard 40/week
**Pay Rate**: Premium rate (varies by policy)
  - 1.25x (25% extra) - Most common
  - 1.5x (50% extra) - For night shifts
  - 2x (100% extra) - For holidays
**Example**:
```
Monday-Thursday: 8 hrs each = 32 hrs
Friday: 10 hrs (2 hours over)
OT Rate: 2 hrs × PHP 187.50 (1.5x of PHP 125) = PHP 375
```

#### Leave Pay
**What It Means**: Pay for approved leave days taken
**Calculation**: Daily rate × number of leave days
**How Daily Rate is Calculated**:
```
Monthly Salary ÷ Working Days in Month = Daily Rate
PHP 20,000 ÷ 20 days = PHP 1,000/day

Leave taken: 2 days = PHP 2,000
```

**Important**: Only APPROVED leave gets paid. Unapproved absence = no pay.

#### Holiday Pay
**What It Means**: Special compensation for working on public holiday
**Pay Rate**: Usually 2x regular rate (100% premium)
**Example**:
```
Regular rate: PHP 125/hr
Holiday rate: PHP 250/hr (2x)
If worked 8 hours on holiday: 8 × PHP 250 = PHP 2,000
```

**Note**: If you don't work holiday, you still get paid (if it's a paid holiday). This shows as "Holiday Pay" not hours.

#### Break/Break Deduction
**What It Means**: Unpaid break time deducted from total
**Calculation**: Actual break time subtracted from clocked time
**Example**:
```
Clocked in: 8:00 AM - 5:00 PM = 9 hours
Less break: 1-hour lunch = -1 hour
Actual worked: 8 hours ✅
```

**Important**: Breaks are unpaid. If you work through break, notify manager to adjust.

#### Shift Type
**What It Means**: Category of shift worked (affects pay rate)
**Common Types**:
- **Day Shift** (6 AM - 6 PM): Regular rate
- **Night Shift** (6 PM - 6 AM): Night differential (usually +15-25%)
- **Weekend Shift** (Sat-Sun): Weekend rate (usually +10-30%)
- **Holiday Shift**: Holiday rate (usually 2x)

**Example**:
```
Day Shift: 8 hrs × PHP 125/hr = PHP 1,000
Night Shift: 8 hrs × PHP 150/hr (1.2x) = PHP 1,200
Difference: PHP 200 for working nights
```

#### Absent Days
**What It Means**: Days you didn't work and had no approved leave
**Pay**: No pay for absent days (unless excused)
**Example**:
```
5 working days in week
Attended: 4 days
Absent: 1 day (no notice, no leave)
Pay: 4 days × PHP 1,000/day = PHP 4,000
(No pay for the 1 absent day)
```

### Verifying Timesheet in Your Payslip

**How to Check Your Timesheet Numbers**:

1. **Get Payslip**:
   - Navigate to **Pay** → **Payslips**
   - Open current month

2. **Find Earnings Breakdown**:
   - Look for "Earnings Details" section
   - Shows how gross pay was calculated
   - Example:
     ```
     Basic: 160 hrs × PHP 125 = PHP 20,000
     OT:    10 hrs × PHP 187.50 = PHP 1,875
     Leave: 8 hrs × PHP 125 = PHP 1,000
     ```

3. **Cross-Check Hours**:
   - Verify 160 regular hours is correct (8 hrs/day × 20 days)
   - Verify OT hours match what you worked beyond 40/week
   - Verify leave hours match approved leave taken

4. **If Discrepancy Found**:
   - Check if payslip has "corrections" note
   - Review timesheet for approved adjustments
   - Contact manager if appears wrong

### Why Timesheet Fields Matter

**Accuracy is Critical Because**:

1. **Pay Depends On It**: Wrong hours = wrong pay
2. **Taxes Calculated From It**: More hours = more tax
3. **Benefits Based On It**: OT eligibility, leave accrual
4. **Legal/Compliance**: Payroll audits verify hours
5. **Year-End**: Annual tax filing based on annual hours

**Real Example - Impact of 1 Error**:
```
ERROR: Clock-in recorded as 9:00 AM instead of 8:00 AM

Per Payslip:
- Shows: 7 hours worked (9 AM - 5 PM)
- Should be: 8 hours worked (8 AM - 5 PM)
- Missing: 1 hour

Pay Impact:
- Lost: 1 hr × PHP 125 = PHP 125 SHORT
- Tax Impact: If error not fixed, annual tax wrong
- Your Action: Report to manager immediately
```

### Common Timesheet Issues and Payslip Impact

#### Issue 1: Clock-in Time Wrong

**Scenario**: System recorded 9:15 AM instead of 9:00 AM
**Impact**: 15 minutes missing from pay
**Resolution**: Manager creates adjustment entry

**Payslip Shows**:
- Original: 7:45 hours
- Adjustment: +0.25 hours
- Corrected Total: 8 hours ✅

#### Issue 2: Forgot to Clock Out

**Scenario**: Forgot to clock out, timesheet shows incomplete
**Impact**: Hours not counted (0 hours for that day)
**Resolution**: Manager adds manual end time

**Payslip Shows**:
- Clock-in: 9:00 AM
- Manual clock-out: 5:30 PM
- Hours: 8.5 hours (including adjusted break)

#### Issue 3: Unapproved Absence

**Scenario**: Absent 1 day without leave request
**Impact**: No pay for that day
**Payslip Shows**:
```
Expected: 20 working days × PHP 1,000/day = PHP 20,000
Actual: 19 working days × PHP 1,000/day = PHP 19,000
Difference: -PHP 1,000 (absent day)
```

#### Issue 4: Leave Not Deducted Correctly

**Scenario**: Took 2 days leave but payslip shows only 1
**Impact**: Overpaid
**Resolution**: HR creates correction in next period

**Payslip Shows**:
- Current: 8 hrs leave (should be 16)
- Note: "Correction pending for next period"
- Next payslip will adjust downward

### FAQ about Timesheet and Payslip

**Q: My timesheet says 160 hours but payslip shows 158. Why?**
A: Likely 2 unpaid breaks or adjustment. Check payslip "Earnings Details" section for breakdown.

**Q: When do timesheet corrections show on payslip?**
A: If corrected before payroll closes (usually 2-3 days before payday), same payslip. If after, next period's payslip.

**Q: Why is my OT pay rate different than I expected?**
A: OT rate varies by shift type and policy. Night OT might be 1.5x, regular OT 1.25x. Check policy or ask manager.

**Q: My absence wasn't approved but I worked that day. Why no pay?**
A: System shows absence, not work hours. Manager needs to create manual entry to add the hours back.

**Q: Can I request timesheet correction after period locks?**
A: No, but manager can request payroll adjustment. It creates correction in current or next period.

---

## Getting Started

### Step 1: Access Your Payslip

**From Dashboard**:
1. Navigate to Dashboard
2. Look for **Recent Payslips** widget
3. Click latest payslip to view
4. Or click **View All Payslips**

**From Main Menu**:
1. Navigate to **Pay** in left sidebar
2. Or use keyboard shortcut: `Ctrl+Shift+P`
3. Choose **Payslips** from submenu
4. Latest payslip displayed by default

### Step 2: View Your Latest Payslip

Default view shows:
- Pay period (dates covered)
- Pay date (when salary deposited)
- Gross earnings
- Total deductions
- Net pay
- Quick summary

**Typical Timeline**:
- Pay period: Feb 1-15
- Pay date: Feb 20 (5 days after period ends)
- Payslip available: Feb 19 (day before payment)

### Step 3: Understand Key Numbers

Look for these on your payslip:

| Item | What It Means |
|------|---------------|
| **Gross Pay** | Total earnings before deductions |
| **Total Deductions** | All taxes and contributions combined |
| **Net Pay** | Amount actually deposited to your account |
| **YTD Gross** | Total earnings from Jan 1 to this month |
| **YTD Deductions** | Total taxes/contributions paid so far this year |
| **YTD Net** | Total net pay received so far this year |

## Common Tasks

### View Current Month Payslip

1. Navigate to **Pay** → **Payslips**
2. Latest payslip shown first (usually current month)
3. Review:
   - Earnings breakdown
   - Deduction details
   - Net pay amount
   - Payment method (direct deposit, check, etc.)
4. Verify accuracy (compare to expected salary)

**Keyboard Shortcut**: `Ctrl+Shift+P` then click current month

### Download Payslip as PDF

**For Banking/Loan Purposes**:
1. Open payslip (latest or select date)
2. Click **Download** button
3. Choose format:
   - **PDF**: For printing or email
   - **Excel**: For personal records
4. File downloads to your computer
5. Save in organized folder for reference

**Naming Convention**: `Payslip_Feb2026.pdf` or `Payslip_2026-02.pdf`

**Common Use Cases**:
- Submit with loan application
- Rent or housing application
- Bank account verification
- Visa/travel documentation

### Search for Past Payslips

**Scenario**: You need a payslip from 6 months ago

1. Navigate to **Pay** → **Payslips**
2. Click **Filter** or **Search**
3. Select date range:
   - **From**: August 2025
   - **To**: August 2025
   - Or select "August" from calendar
4. Results show all Aug 2025 payslips
5. Click to view or download

**Available Range**: Usually 3 years (configurable by HR)

### Check Year-to-Date (YTD) Earnings

1. Open any payslip (usually latest shows YTD)
2. Look for **Year-to-Date** section
3. Shows:
   - YTD Gross (cumulative earnings)
   - YTD Deductions (cumulative taxes/contributions)
   - YTD Net (cumulative take-home)

**Example YTD (as of Feb 2026)**:
```
YTD Gross: PHP 57,000 (2 months × PHP 28,500)
YTD Deductions: PHP 9,850
YTD Net: PHP 47,150
```

**Use**: Verify totals, tax planning, financial forecasting

### Understand Tax Deductions

**On Your Payslip**:
1. Find **Income Tax (BIR)** line
2. Shows amount deducted this month
3. Monthly tax varies based on:
   - Gross salary
   - Allowances and overtime
   - Tax brackets
   - Personal exemptions

**YTD Tax Summary**:
- Shows total tax paid year-to-date
- Used for annual tax filing (BIR Form 1601-CF)
- Your employer files on your behalf (PEP: Payroll Employer Procedure)
- You receive **Tax Certificate (BIR Form 2307)** for filing

**Tax Calculation Example**:
```
Gross: PHP 28,500
Less: BIR Deduction: PHP 2,500 (approximately 8.8%)
Tax Rate: Varies by salary level and exemptions
```

### Verify Contributions (SSS, PhilHealth, PagIBIG)

**On Your Payslip**:
- **SSS**: Usually 1/3 of contribution (employer pays 2/3)
- **PhilHealth**: Usually around 1.5% of gross salary
- **PagIBIG**: PHP 100-600 depending on salary level

**Your Contributions**:
```
SSS: PHP 1,125 (you pay) + PHP 2,250 (employer pays)
PhilHealth: PHP 412.50 (you pay) + PHP 412.50 (employer pays)
PagIBIG: PHP 100 (you pay) + PHP 100-600 (employer pays)
```

**Important**: These are mandatory contributions for your benefits

### Check Loan Deductions

**If you have company/SSS/PagIBIG loans**:
1. Open payslip
2. Find **Loan** section
3. Shows:
   - Loan type
   - Monthly payment
   - Remaining balance
   - Interest (if applicable)

**Example**:
```
LOANS:
├── PagIBIG Loan: PHP 500 (Balance: PHP 15,000)
└── Company Loan: PHP 200 (Balance: PHP 8,000)
```

**Track**: When loan will be fully paid off

### Request Pay Advance (If Allowed)

**Company Policy Dependent** (Not all companies allow):

1. Navigate to **Pay** → **Advance Request**
2. Check if your organization allows advances
3. Fill advance request form:
   - **Amount**: How much you need
   - **Purpose**: Reason for advance (optional but helpful)
   - **Repayment Term**: Usually 1-3 months
4. Submit for manager/HR approval
5. Approved advances deducted from future payslips

**Important Requirements**:
- Usually limited to 50% of monthly salary
- Requires manager approval
- May have interest charges
- Repaid over following months

**Not Available If**:
- Still in probation period
- Recent employee (less than 3 months)
- Already have pending advance
- Against company policy

### View Tax Certificate (Form 2307)

**Annual Form for Tax Filing**:
1. Navigate to **Pay** → **Tax Certificates**
2. Available after January each year
3. Shows:
   - Total income earned in year
   - Total tax withheld
   - Employer information
   - Used for personal income tax filing

**When Available**: Typically March-April after tax year ends

**Use**:
- File personal income tax return (1040 form)
- Claim as independent contractor elsewhere
- Retirement account contributions

## Compensation Information

### Understanding Your Contract Salary

**What's Included**:
- Basic salary (fixed base pay)
- Allowances (housing, transportation, meal, etc.)
- Benefits (if applicable)

**What's NOT Included**:
- Bonuses (performance-based)
- Overtime (variable)
- Leave pay (depends on leave taken)
- Incentives (commission-based)

### Salary Reviews & Adjustments

**Annual Reviews**:
- Most companies review compensation yearly
- Usually happens:
  - During annual evaluation season
  - After performance review
  - Timeline communicated in advance

**Effective Date**: Changes usually take effect
- Next month after approval
- Or on specified date (e.g., anniversary date)

**Change Notification**:
- Manager notifies of salary increase
- HR updates in system
- New salary appears on next payslip
- YTD calculations adjust automatically

### Bonus & Incentive Payments

**Types of Additional Pay**:

**Annual Bonus**:
- Paid once per year
- Usually after calendar year ends
- Shown on December or January payslip
- Example: 13th month pay (Philippines)

**Performance Bonus**:
- Based on goals achieved
- Timing varies by company
- Appears on specific month's payslip

**Commission/Incentives**:
- For sales or performance roles
- Paid monthly or quarterly
- Shown separately on payslip
- Varies month-to-month

**Holiday Bonus/Gifts**:
- Special bonuses during holidays
- Year-end bonuses
- Shown on designated payslip

## Tips & Tricks

✅ **DO**:
- **Review payslip monthly** to catch errors early
- **Save copies** for your records and documentation
- **Verify direct deposit** within first few months
- **Track year-to-date amounts** for financial planning
- **Keep payslips for 3 years** (tax and legal purposes)
- **Monitor deductions** to ensure they're correct
- **Compare month-to-month** to notice changes
- **Understand your tax bracket** for financial planning
- **Report errors immediately** to HR/Finance
- **Save tax certificate** for annual tax filing

❌ **DON'T**:
- Ignore discrepancies on your payslip
- Assume deductions are always correct (verify)
- Lose or delete payslips (keep for 3 years minimum)
- Share your payslip unnecessarily (sensitive document)
- Forget to track loan payments
- Assume bonus is guaranteed (verify in contract)
- Miss tax filing deadlines (usually April 15 in Philippines)
- Request advance during peak financial periods
- Change banking info without notifying HR
- Delay reporting missing payslips

## Frequently Asked Questions

**Q: Why does my payslip show net pay different from what I calculated?**
A: Net pay calculation includes all mandatory deductions (SSS, PhilHealth, PagIBIG, income tax) plus any voluntary deductions. Use the formula: Gross - All Deductions = Net.

**Q: When will my payslip be available?**
A: Typically 1-2 days before payment date. Pay period ends (e.g., Feb 15), payslip available (Feb 19), salary deposited (Feb 20).

**Q: Can I change my tax withholding?**
A: No, tax withholding is calculated by government tables based on your salary. Special cases (additional income, dependents) file with BIR for adjustment.

**Q: What does "YTD" mean on my payslip?**
A: Year-to-Date. Cumulative totals from January 1 through the current month. Useful for financial planning and annual statements.

**Q: How do I know if my tax deduction is correct?**
A: It's calculated automatically based on your salary, allowances, and tax tables. If concerned, request HR to verify. Keep tax certificate for annual tax filing.

**Q: Are SSS, PhilHealth, PagIBIG mandatory?**
A: Yes, these are mandatory contributions. The employee portion (your share) appears as deductions. Employer also contributes (your benefit).

**Q: What if I don't agree with a deduction?**
A: Report immediately to HR/Payroll department with payslip. They'll investigate and correct if error found. Process takes 1-2 weeks.

**Q: Can I request my salary in cash instead of direct deposit?**
A: Usually no, most companies use direct deposit for security and tracking. Discuss exceptions with HR if special circumstances exist.

**Q: Will I get a year-end bonus?**
A: Depends on company policy. Check your employment contract or ask HR. Not guaranteed unless specified in contract.

**Q: How do I file my annual income tax return?**
A: Use BIR Form 1040. Attach your Tax Certificate (Form 2307) from your employer. Most employees file between March-May. Consider hiring accountant if complex situation.

## Troubleshooting

**Problem**: "My payslip shows incorrect gross salary"
**Cause**: System error, missed updates, or recent changes not processed
**Solution**:
1. Verify amount with employment contract
2. Check if you took leave (reduce amount)
3. Check if overtime/bonus included this month
4. Notify HR with expected vs. shown amount
5. HR corrects and reprocesses if error confirmed
6. Correction appears on next payslip

**Problem**: "I don't see my payslip in the system"
**Cause**: Payroll processing delayed, data not yet available
**Solution**:
1. Check pay date (usually 2-5 days after period ends)
2. Verify you've received salary in bank account
3. Check if you're looking for correct time period
4. Contact HR if salary was deposited but payslip missing
5. Request HR to generate payslip manually

**Problem**: "Deduction is higher than expected"
**Cause**: Additional earnings (overtime, bonus), additional loans, or calculation error
**Solution**:
1. Review breakdown to identify source
2. Check if overtime/leave pay included
3. Verify all deductions are correct
4. If new loans appeared, confirm enrollment
5. Contact HR if discrepancy found
6. Request recalculation if error suspected

**Problem**: "I can't download my payslip as PDF"
**Cause**: Browser compatibility, permission issue, or system error
**Solution**:
1. Try different browser (Chrome, Firefox, Safari)
2. Clear browser cache (Ctrl+Shift+Delete)
3. Verify you have permission to access payslips
4. Refresh page and try again
5. Contact support if still unable to download
6. Request HR to email payslip copy as alternative

**Problem**: "Direct deposit didn't arrive on pay date"
**Cause**: Bank processing delay, account change, or payroll issue
**Solution**:
1. Wait 24 hours (some banks delay deposits)
2. Check with your bank about processing time
3. Verify correct account in Kando (**Settings** → **Payment Method**)
4. If account was changed recently, old account might have payment
5. Contact HR/Payroll if significant delay
6. Ask for manual check if deposit remains missing

**Problem**: "Bonus didn't appear on my payslip"
**Cause**: Bonus not yet processed, different pay period, or eligibility issue
**Solution**:
1. Confirm bonus eligibility (probation, performance criteria)
2. Check if bonus is paid in separate pay period
3. Verify bonus date with HR
4. Some bonuses paid months later than earned
5. Request HR confirmation of bonus processing
6. Ask for status update if unclear

**Problem**: "My tax deduction seems too high"
**Cause**: Correct calculation, additional income, or withheld too much
**Solution**:
1. Compare to previous months (normal variation)
2. Check if overtime/bonus increased tax this month
3. Higher tax bracket for higher earnings is normal
4. For adjustment next year, provide dependents info to HR
5. You can file for refund during tax season if overpaid
6. Consult accountant for complex tax situations

## Common Scenarios

### Scenario 1: First Payslip
**Your First Pay Period**: Jan 15-31, 2026
**Your Payslip Shows**:
- Pro-rated salary (if started mid-month)
- All mandatory deductions
- No YTD yet (or only Jan figures)

**What to Check**:
- Gross matches contract salary
- All deductions explained
- Bank account received deposit
- Save copy for records

### Scenario 2: Promotion With Raise
**Before Promotion**: Basic PHP 20,000
**After Promotion** (effective Feb): Basic PHP 25,000
**Payslip Change**:
- Feb payslip shows new higher salary
- More tax withheld (higher bracket)
- YTD recalculates
- Take-home increases (despite higher tax)

**Example**:
```
Jan Payslip:
├── Gross: PHP 28,500
├── Tax: PHP 2,500
└── Net: PHP 26,000

Feb Payslip (After Raise):
├── Gross: PHP 33,500 (includes PHP 5,000 raise)
├── Tax: PHP 2,950 (higher bracket)
└── Net: PHP 30,550
```

### Scenario 3: Year-End Tax Filing
**Timeline**:
- Year ends: Dec 31, 2025
- Payslip received: Dec 2025 with YTD totals
- Tax Certificate (Form 2307) generated: Jan 2026
- Tax filing deadline: April 15, 2026

**What You Need**:
1. Tax Certificate from Kando
2. Employment income totals
3. All deductions summary
4. File BIR Form 1040 or hire accountant

### Scenario 4: Loan Repayment
**You Took PagIBIG Loan**: PHP 20,000
**Monthly Repayment**: PHP 500
**Timeline**:
- Month 1: Balance PHP 19,500
- Month 2: Balance PHP 19,000
- ...continuing...
- Month 40: Loan fully paid

**On Payslip**: Shows current month deduction and remaining balance

## Related Pages

- [Time Tracking Guide](time-tracking.md) – Understand how time affects compensation
- [Leave Management](leave-management.md) – How leave affects pay
- [Dashboard Overview](../getting-started/dashboard-overview.md) – View recent payslips on dashboard
- [Troubleshooting - General Issues](../troubleshooting/general-issues.md) – Other system issues

---

**Last Updated**: 2026-09-29
**Maintainer**: Payroll & Compensation
**For Questions**: support@kando.com or payroll@kando.com
