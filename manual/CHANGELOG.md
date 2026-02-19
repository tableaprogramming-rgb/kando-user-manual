# Changelog

All notable changes to the Kando User Manual are documented in this file.

## [Latest Release] - 2026-02-19

### Summary
Pushed 44 commits (466f802...73d542f) containing comprehensive Phase 2 & 3 documentation completion, housekeeping improvements, and critical reference guides.

### 🎉 Features Added

#### Phase 3 - Advanced Topics (February 2026)
- **Advanced Reporting Features** - Comprehensive guide for advanced Manager Reports functionality
- **Advanced Payroll Topics** - Detailed documentation on complex payroll scenarios and edge cases
- **Policy Configuration Guide** - Complete HR admin guide for system policy setup and management
- **Advanced Approval Scenarios** - Complex multi-step approval workflows and decision trees

#### Phase 2 - Core HR Admin & Workflow Guides (January 2026)
- **Cost Centers, Departments & Scheduling** - Organizational structure and shift scheduling guide
- **Payroll Management Overview** - Comprehensive payroll system walkthrough
- **HR Admin System Setup** - Complete system configuration and user management guide
- **Request Management** - End-to-end request handling and approval workflows
- **Overtime Workflow** - Detailed overtime calculation and approval processes
- **Manual Timelog Creation** - Manager guide for manual time entry
- **Period Locking & Payroll Process** - Payroll cycle and period management
- **Multi-Step Approval Workflows** - Complex approval scenario documentation
- **Timesheet Finalization & Blocking** - Timesheet submission and lock processes
- **Leave Credit System** - Advanced leave accrual and credit explanation

#### Phase 1 - Critical Reference Materials (December 2025)
- **Error Reference Guide** - Comprehensive error messages and troubleshooting index
- **Payroll Field Meanings** - Detailed explanation of all payroll calculation fields
- **Understanding Your Role** (Page 1.5) - Comprehensive role and permission explanation
- **System Setup Requirements** (Page 1.4) - Critical setup checklist for new implementations

### 📚 Documentation Structure

#### Completed Sections
1. **Getting Started** - Login, setup, and dashboard overview
2. **Employee Guide** - Time tracking, leave, schedule, payslip
3. **Manager Guide** - Team management, approvals, scheduling, reports
4. **Owner Guide** - Organization setup, billing, subscriptions
5. **HR Admin Guide** - System setup, user management, policies, payroll
6. **Workflows** - Multi-step approval, leave, payroll, scheduling processes

#### Enhanced Documentation Coverage
- **Role-Based Guides**: Employees, Managers, HR Admins, Owners (4 roles)
- **Feature Guides**: 50+ features with step-by-step instructions
- **Reference Materials**: Error guide, field meanings, glossary
- **Process Workflows**: 6+ core business processes documented
- **Use Cases**: 30+ real-world scenarios with solutions

### 🔧 Technical Improvements

#### Folder Reorganization (February 2026)
- **docs/ → manual/** - User-facing documentation for Azure DevOps Wiki
- **onboarding/ → onboarding-strategy/** - Internal dev team planning documentation
- Updated all internal links and path references throughout documentation

#### Repository Cleanup
- Removed intermediate audit documents after comprehensive analysis
- Fixed broken path references (docs/ → manual/)
- Consolidated documentation structure
- Clarified folder purposes (user docs vs. dev strategy)

#### Standards & Guidelines
- Added comprehensive CLAUDE.md with project guidance and standards
- Established naming conventions for pages and sections
- Created contributor guidelines for documentation standards
- Documented writing style and audience guidelines

### 🏗️ Infrastructure Updates

#### Initial Setup (January 2026)
- Created onboarding section structure
- Removed MkDocs and static site generation artifacts
- Removed CI/CD pipeline configuration (Azure DevOps Wiki auto-publishes)
- Transitioned to markdown-only documentation approach
- Added dedicated Owner role and section

#### Git & Deployment
- Enabled Azure DevOps Wiki auto-publishing from `/manual/` folder
- Simplified deployment (no build step needed)
- Removed node_modules, venv, site/ build artifacts
- Updated .gitignore for clean repository

### 📊 Statistics

| Metric | Value |
|--------|-------|
| **Total Commits** | 44 |
| **Fully Detailed Pages** | 20+ |
| **Documentation Sections** | 6 main sections |
| **Features Documented** | 50+ |
| **Use Cases** | 30+ |
| **Processes Documented** | 6+ |
| **Total Lines of Content** | 15,000+ |
| **Code Examples** | 50+ |
| **FAQ Questions** | 80+ |

### 🎯 Key Highlights

**Phase 2 Completion**: Comprehensive HR Admin documentation including:
- System setup and configuration procedures
- User and permission management
- Payroll system walkthrough
- Complex workflow scenarios
- Advanced approval processes

**Phase 3 Completion**: Advanced topics and edge cases:
- Complex payroll calculations
- Policy configuration options
- Advanced reporting features
- Edge case scenarios and solutions

**Quality Improvements**:
- Professional error reference guide
- Detailed field-level documentation
- Comprehensive use case coverage
- Clear troubleshooting guides
- Cross-referenced pages for easy navigation

### 📂 Files Modified

- **manual/** - Complete user documentation (50+ pages)
- **onboarding-strategy/** - Developer-focused planning documentation
- **CLAUDE.md** - Project guidelines and standards
- **README.md** - Updated with new section references
- **.gitignore** - Cleaned up for markdown-only approach

### 🚀 Deployment Status

- ✅ **Azure DevOps Wiki**: Auto-publishes from `/manual/` folder
- ✅ **Updates Live**: Changes available within 1-2 minutes of push
- ✅ **No Build Required**: Pure markdown delivery
- ✅ **Mobile Friendly**: Responsive markdown formatting
- ✅ **Search Enabled**: All pages indexed and searchable

### 📝 Documentation Standards

All pages now follow consistent standards:
- Clear role-based organization
- Step-by-step instructions with examples
- Embedded tips and troubleshooting
- Cross-references for easy navigation
- Metadata (Last Updated, Support Contact)
- Time estimates for common tasks
- Real-world scenario examples

### 🔄 Previous Releases

For historical information about earlier documentation work, see git history:
```bash
git log --oneline | grep -E "(feat|docs|chore):" | head -20
```

### 📞 Support & Contribution

- **Contact**: support@kando.com
- **Maintained By**: Training & Documentation Team
- **Repository**: Azure DevOps - kando-user-manual
- **Contribution Guide**: See CLAUDE.md for guidelines

---

**Git Reference**: Commit 73d542f (latest)
**Push Date**: 2026-02-19
**Total Changes**: 44 commits, comprehensive documentation coverage across all user roles
