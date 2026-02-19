# Kando User Manual & Documentation Repository

Welcome to the **Kando User Manual & Documentation** repository - home to both **business user guides** and **internal development planning documentation** for the Kando workforce management system.

## 📁 Repository Structure

This repository contains **two distinct documentation folders** with different purposes:

### 👥 **`manual/`** - User-Facing Business Documentation
**For**: Employees, Managers, HR Administrators, Organization Owners
**Purpose**: Step-by-step guides for using Kando in your daily work
**Language**: Non-technical, action-oriented, business-focused
**Published To**: Azure DevOps Wiki (auto-publishes on each push)
**Location**: [/manual/](manual/)

### 🛠️ **`onboarding-strategy/`** - Internal Development Planning
**For**: Development team members and system architects
**Purpose**: Strategic planning, implementation guides, and system design documentation
**Language**: Technical, design-focused, internal team communication
**Published To**: Internal team resources (not customer-facing)
**Location**: [/onboarding-strategy/](onboarding-strategy/)

### 📋 **`CHANGELOG.md`** - Release History
**Purpose**: Complete audit trail of all changes to the repository
**Coverage**: Changes across both manual/ and onboarding-strategy/ folders
**Updated**: With every push to document new features, updates, and improvements
**Location**: [CHANGELOG.md](CHANGELOG.md)

---

## 🎯 What is Kando?

Kando is a comprehensive **workforce management system** that helps organizations manage:
- ⏱️ Time & Attendance tracking
- 📅 Leave and absence management
- 📊 Schedule creation and management
- 💰 Payroll and compensation
- ✅ Approval workflows
- 📈 Reporting and analytics

## 📚 User Guides (From `/manual/` Folder)

**📌 Business users**: Choose your role to get started:
*(These guides are published to Azure DevOps Wiki and available to all Kando users)*

### 👤 **For Employees**
Get your job done efficiently with Kando:
- [Quick Start Guide](manual/1-Getting-Started/1.3-Dashboard-Overview.md) - 5-minute overview
- [Time Tracking Guide](manual/2-Employee-Guide/2.1-Time-Tracking.md) - Clock in, log time, submit timesheets
- [Leave Management Guide](manual/2-Employee-Guide/2.2-Leave-Management.md) - Request leave, check balance
- [View Your Schedule](manual/2-Employee-Guide/2.3-View-Schedule.md) - See your shifts and schedule
- [Pay & Compensation](manual/2-Employee-Guide/2.4-Payslip-Compensation.md) - View payslips and deductions

### 👨‍💼 **For Managers**
Manage your team effectively:
- [Team Management](manual/3-Manager-Guide/3.1-Team-Management.md) - View team timesheets and attendance
- [Approving Requests](manual/3-Manager-Guide/3.2-Approving-Requests.md) - Process leave and time requests
- [Create Schedules](manual/3-Manager-Guide/3.3-Scheduling.md) - Plan shifts and manage schedules
- [Team Reports](manual/3-Manager-Guide/3.4-Reports.md) - Generate reports and analytics

### 💳 **For Organization Owners**
Manage your subscription and organization:
- [Organization Profile](manual/4-Owner-Guide/4.1-Organization-Profile.md) - Set up organization name, logo, billing contact
- [Organization Settings](manual/4-Owner-Guide/4.2-Organization-Settings.md) - Configure timezone, date formats, departments
- [Subscription Management](manual/4-Owner-Guide/4.3-Subscription-Management.md) - Manage subscription seats and licenses
- [Billing Contact](manual/4-Owner-Guide/4.4-Billing-Contact.md) - Update billing information

### 👨‍💻 **For HR Administrators**
Configure and manage the system:
- [System Setup](manual/5-HR-Admin-Guide/4.1-System-Setup.md) - Initialize Kando for your organization
- [User Management](manual/5-HR-Admin-Guide/4.2-User-Management.md) - Add users, set roles, manage access
- [Policy Configuration](manual/5-HR-Admin-Guide/4.3-Policy-Configuration.md) - Set leave policies, shift templates
- [Payroll Management](manual/5-HR-Admin-Guide/4.4-Payroll-Management.md) - Configure pay structures and process payroll

## 🚀 Quick Links

| Topic | Description | Time |
|-------|-------------|------|
| [Getting Started](manual/1-Getting-Started/1.1-Introduction.md) | Login, setup, dashboard overview | 5 min |
| [Common Workflows](manual/6-Workflows/5.1-Onboarding.md) | Step-by-step processes for typical tasks | 10-30 min |
| [Troubleshooting](manual/7-Troubleshooting/ERROR_REFERENCE.md) | Solutions to common problems | As needed |
| [Glossary](manual/8-Reference/7.1-Glossary.md) | Business terms and explanations | Reference |
| [FAQ](manual/8-Reference/7.3-FAQ.md) | Answers to common questions | Reference |
| [Getting Help](manual/8-Reference/7.4-Getting-Help.md) | Contact support and resources | Reference |

## 📖 Table of Contents

```
📘 Kando User Manual
├── 1. Getting Started
│   ├── Introduction
│   ├── Login & Setup
│   └── Dashboard Overview
├── 2. Employee Guide
│   ├── Time Tracking
│   ├── Leave Management
│   ├── View Schedule
│   └── Payslip & Compensation
├── 3. Manager Guide
│   ├── Team Management
│   ├── Approving Requests
│   ├── Create Schedules
│   └── Reports
├── 4. Owner Guide
│   ├── Organization Profile
│   ├── Organization Settings
│   ├── Subscription Management
│   └── Billing Contact
├── 5. HR Admin Guide
│   ├── System Setup
│   ├── User Management
│   ├── Policy Configuration
│   └── Payroll Management
├── 6. Common Workflows
│   ├── New Employee Onboarding
│   ├── Leave Approval Process
│   ├── Monthly Payroll
│   └── Shift Scheduling
├── 7. Troubleshooting
│   ├── Login Issues
│   ├── Time Tracking Issues
│   ├── Request Problems
│   └── General Issues
└── 8. Reference
    ├── Glossary
    ├── Keyboard Shortcuts
    ├── FAQ
    └── Getting Help
```

---

## 🎯 Which Documentation Should I Use?

### 👥 I'm an **End-User** (Employee, Manager, HR Admin, Organization Owner)
👉 **Use `/manual/` folder** → Available in [Azure DevOps Wiki](../wiki/Home.md)

**What you'll find:**
- Step-by-step guides for your daily tasks
- How to clock in, request leave, approve timesheets, etc.
- Tips, troubleshooting, and best practices
- Non-technical language you can understand
- Links: [Getting Started](manual/1-Getting-Started/1.1-Introduction.md) | [Employee Guide](manual/2-Employee-Guide/index.md) | [Manager Guide](manual/3-Manager-Guide/index.md)

### 🛠️ I'm a **Developer or Technical Architect**
👉 **Use `/onboarding-strategy/` folder** → Internal team documentation

**What you'll find:**
- System design and architecture planning
- Implementation guides for new features
- Integration strategies and technical decisions
- Code examples and system flows
- Internal team communication (not published to customers)

### 📋 I want to **See What Changed Recently**
👉 **Use [CHANGELOG.md](CHANGELOG.md)** → Complete release history

**What you'll find:**
- New features added to the manual
- Documentation updates and improvements
- Infrastructure changes
- Development improvements
- Complete git commit reference

---

## 🔍 How to Use This Manual

1. **Find Your Role** - Employee, Manager, Organization Owner, or HR Admin?
2. **Choose Your Task** - What do you need to do?
3. **Follow the Steps** - Clear, numbered instructions
4. **Check Examples** - Visual descriptions of screens and buttons
5. **Get Help** - Use troubleshooting or contact support

## 💡 Tips for Getting Started

✅ **DO**:
- Read the Getting Started section first
- Follow workflows step-by-step
- Use the search function to find topics
- Check FAQ for common questions
- Contact support if stuck

❌ **DON'T**:
- Skip login setup steps
- Assume features without checking
- Ignore warning messages
- Hesitate to ask for help

## 📞 Getting Help

**Can't find what you're looking for?**
- [FAQ Section](manual/8-Reference/7.3-FAQ.md) - Common questions answered
- [Troubleshooting Guide](manual/7-Troubleshooting/index.md) - Solutions to common problems
- [Getting Help](manual/8-Reference/7.4-Getting-Help.md) - Contact information and support

**Found an issue with this manual?**
- Use the feedback process in your organization
- Contact: `documentation@kando.com`
- Or report directly in your support system

## 📚 Document Information

- **Repository Type**: Business Documentation + Internal Development Planning
- **Version**: 1.0 (Phase 3 Complete)
- **Last Updated**: 2026-02-19
- **Maintained By**: Training & Documentation Team
- **For Questions**: documentation@kando.com
- **Change History**: See [CHANGELOG.md](CHANGELOG.md)

## 📂 Key Folders & Their Purposes

| Folder | Purpose | Audience | Published |
|--------|---------|----------|-----------|
| **`manual/`** | User guides for Kando system | Business users (Employees, Managers, HR, Owners) | ✅ Azure DevOps Wiki |
| **`onboarding-strategy/`** | Development planning & architecture | Development & technical teams | ❌ Internal only |
| **Root level** | Repository configuration & changelog | All stakeholders | ✅ Git repository |

## 🔗 Related Documentation

- **Release Changes**: [CHANGELOG.md](CHANGELOG.md) - See what's new in each release
- **Development Strategy**: [/onboarding-strategy/](onboarding-strategy/) - Internal team planning (not for end-users)
- **HR Admin Guide**: [Admin Documentation](manual/5-HR-Admin-Guide/index.md) - System configuration guides
- **All User Guides**: [/manual/](manual/) - Browse all business user documentation
- **Technical Documentation**: [Developer Wiki](../wiki/Home.md) - Backend & frontend technical docs

---

**Welcome to Kando! Let's get started.** 🚀
