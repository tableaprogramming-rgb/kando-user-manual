# Kando Onboarding Strategy

This folder contains the complete onboarding strategy for Kando, designed to get new users productive within their first session.

## 📂 Folder Structure

- **[`strategy/`](strategy/)** – Internal documents explaining the *why* and *how* of our onboarding approach.
- **[`guides/`](guides/)** – User-facing step-by-step guides that users see during their onboarding.
- **[`walkthroughs/`](walkthroughs/)** – specific steps for interactive product tours (tooltips & highlights).

## 🎯 Role-Based Onboarding Paths

We have tailored onboarding experiences for three key roles:

| Role | Onboarding Goal | Key Actions | Est. Time |
|------|----------------|-------------|-----------|
| **👤 Employee** | Clock in & View Schedule | Complete Profile, Clock In, View Schedule, check Leave Balance | ~15 min |
| **👨‍💼 Manager** | Manage Team & Requests | Review Team, Approve Requests, Create Schedule, View Reports | ~20 min |
| **👨‍💻 HR Admin** | Configure System | System Setup, Add Users, Configure Policies, Payroll Setup | ~30 min |

## 🗺️ High-Level Onboarding Flow

```mermaid
graph TD
    A[User Logins First Time] --> B{Check Role}
    
    B -->|Employee| C[Employee Onboarding]
    C --> C1[Welcome Modal]
    C1 --> C2[Interactive Walkthrough]
    C2 --> C3[User Guide & Checklist]
    C3 --> C4[Goal: First Clock-In]
    
    B -->|Manager| D[Manager Onboarding]
    D --> D1[Welcome Modal]
    D1 --> D2[Interactive Walkthrough]
    D2 --> D3[User Guide & Checklist]
    D3 --> D4[Goal: Approve First Request]
    
    B -->|HR Admin| E[HR Admin Onboarding]
    E --> E1[Welcome Modal]
    E1 --> E2[Setup Wizard]
    E2 --> E3[User Guide & Checklist]
    E3 --> E4[Goal: Add First User]
```

## 📚 Quick Links

**Strategy & Principles**
- [Onboarding Principles](strategy/onboarding-principles.md)
- [Employee Strategy](strategy/employee-strategy.md)
- [Manager Strategy](strategy/manager-strategy.md)
- [HR Admin Strategy](strategy/hr-admin-strategy.md)

**User Guides (External)**
- [Employee Onboarding Guide](guides/employee-onboarding-guide.md)
- [Manager Onboarding Guide](guides/manager-onboarding-guide.md)
- [HR Admin Onboarding Guide](guides/hr-admin-onboarding-guide.md)

**Walkthrough Specs (Dev)**
- [Employee Walkthrough Specs](walkthroughs/employee-walkthrough.md)
- [Manager Walkthrough Specs](walkthroughs/manager-walkthrough.md)
- [HR Admin Walkthrough Specs](walkthroughs/hr-admin-walkthrough.md)
