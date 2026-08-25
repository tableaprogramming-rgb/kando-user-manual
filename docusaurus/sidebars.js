/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a docs page layout without the /<doc> path segment
 - show previous/next navigation
 - categorize other docs under the sidebar
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Manual sidebar - Customer facing user guides
  manualSidebar: [
    {
      label: '🚀 Getting Started',
      type: 'category',
      collapsible: true,
      collapsed: false,
      items: [
        'user-manual/getting-started/introduction',
        'user-manual/getting-started/login-setup',
        'user-manual/getting-started/dashboard-overview',
      ],
    },
    {
      label: '👤 Employee Guide',
      type: 'category',
      collapsible: true,
      collapsed: false,
      items: [
        'user-manual/employee-guide/time-tracking',
        'user-manual/employee-guide/leave-management',
        'user-manual/employee-guide/view-schedule',
        'user-manual/employee-guide/payslip-compensation',
      ],
    },
    {
      label: '👨‍💼 Manager Guide',
      type: 'category',
      collapsible: true,
      collapsed: false,
      items: [
        'user-manual/manager-guide/team-management',
        'user-manual/manager-guide/approving-requests',
        'user-manual/manager-guide/scheduling',
        'user-manual/manager-guide/reports',
      ],
    },
    {
      label: '💳 Owner Guide',
      type: 'category',
      collapsible: true,
      collapsed: false,
      items: [
        'user-manual/owner-guide/organization-profile',
        'user-manual/owner-guide/organization-settings',
        'user-manual/owner-guide/subscription-management',
        'user-manual/owner-guide/billing-contact',
      ],
    },
    {
      label: '👨‍💻 HR Admin Guide',
      type: 'category',
      collapsible: true,
      collapsed: true,
      items: [
        'user-manual/hr-admin-guide/system-setup',
        'user-manual/hr-admin-guide/user-management',
        'user-manual/hr-admin-guide/policy-configuration',
        'user-manual/hr-admin-guide/payroll-management',
      ],
    },
    {
      label: '🔧 Troubleshooting',
      type: 'category',
      collapsible: true,
      collapsed: true,
      items: [
        'user-manual/troubleshooting/login-issues',
        'user-manual/troubleshooting/time-tracking-issues',
        'user-manual/troubleshooting/request-issues',
        'user-manual/troubleshooting/general-issues',
      ],
    },
    {
      label: '📚 Reference',
      type: 'category',
      collapsible: true,
      collapsed: true,
      items: [
        'user-manual/reference/glossary',
        'user-manual/reference/keyboard-shortcuts',
        'user-manual/reference/faq',
        'user-manual/reference/getting-help',
      ],
    },
  ],

  // Guides sidebar - Implementation and strategy guides
  guidesSidebar: [
    {
      label: '📖 Documentation Standards',
      type: 'category',
      collapsible: true,
      collapsed: false,
      items: [
        'guides/documentation-guide',
      ],
    },
    {
      label: '🎯 Implementation Guides',
      type: 'category',
      collapsible: true,
      collapsed: false,
      items: [
        'guides/qa-branch-analysis',
      ],
    },
    {
      label: '🛠️ Onboarding Strategy',
      type: 'category',
      collapsible: true,
      collapsed: true,
      items: [
        'guides/employee-onboarding',
        'guides/manager-onboarding',
      ],
    },
  ],

  // Reference sidebar - Analysis and technical reference
  referenceSidebar: [
    {
      label: '📊 Analysis & Research',
      type: 'category',
      collapsible: true,
      collapsed: false,
      items: [
        'reference/qa-branch-analysis',
      ],
    },
    {
      label: '📋 Technical Reference',
      type: 'category',
      collapsible: true,
      collapsed: true,
      items: [
        'reference/changelog',
        'reference/source-code-references',
      ],
    },
  ],
};

module.exports = sidebars;
