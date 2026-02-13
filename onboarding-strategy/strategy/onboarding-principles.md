# Onboarding Principles

Our onboarding strategy is built on four core principles designed to reduce friction and accelerate time-to-value for every user.

## 1. Productive First Session
**Goal**: Every user should complete at least one meaningful task within their first 15 minutes.
- **For Owners**: This means setting up organization profile and verifying billing contact.
- **For Employees**: This means clocking in or checking their schedule.
- **For Managers**: This means approving a request or viewing their team status.
- **For HR Admins**: This means configuring a basic policy or adding a user.

We do *not* force users to sit through verified tutorials before they can touch the product. We guide them *while* they work.

## 2. Progressive Disclosure
**Philosophy**: Show only what is necessary for the current task.
- **Don't** overwhelm new users with every feature at once.
- **Do** hide advanced settings (like Payroll configurations or complex Reporting) until the user specifically navigates to them.
- **Do** unlock advanced walkthroughs only after core steps are completed.

## 3. Convenience First
**Approach**: Respect the user's time.
- **Pre-fill Data**: Whenever possible, pre-fill forms with sensible defaults (e.g., standard work hours, default leave policies).
- **Defer Non-Essentials**: Don't ask for a profile photo or emergency contact immediately if it blocks them from clocking in. Move these to a "Complete Profile" checklist item for later.
- **Smart Defaults**: Dashboards should be pre-configured with the most common widgets for that role.

## 4. Interactive Guidance
**Method**: Show, don't just tell.
- **Contextual Tooltips**: Use tooltips pointing to actual UI elements (e.g., "Click here to Clock In") rather than separate text manuals.
- **Action-Triggered**: The guide advances only when the user performs the action.
- **Celebrate Wins**: Use micro-interactions (confetti, checkmarks, success toasts) when a milestone is reached to provide positive reinforcement.

## 5. Owner-First Architecture
**Foundation**: The Owner role is the cornerstone of all other onboarding experiences.
- **Owner must complete setup FIRST**: Organization profile, billing, settings configured before any other users can be added.
- **Owner unblocks HR Admin**: Only after Owner assigns seats can HR Admin access the system.
- **HR Admin unblocks Teams**: Only after HR Admin creates users can Managers and Employees login.
- **Implication**: Prioritize Owner onboarding above all else. If Owner doesn't complete their checklist, the entire organization is blocked.

## Success Metrics
How we measure if onboarding is working:
- **Time to First Value**: How many minutes from login to first key action?
- **Completion Rate**: Percentage of users who complete the "Getting Started" checklist.
- **Support Ticket Volume**: Reduction in "How do I...?" tickets from new users.
- **Owner Completion Rate** (Critical): % of Owners completing setup within first session (should be >95%).
- **Unblock Rate**: % of HR Admins gaining access within 24 hours of Owner completion.
