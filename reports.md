# Group 13 Capstone Project Report - TS Academy (Phoenix Cohort)

## 1. Project Overview

This document serves as the official project report for the Group 13 Capstone Project. We developed a highly responsive, modern React application featuring planetary data presentation. The project encompasses several dynamic components, including a Data Table, an interactive Form, a Planet Grid, and responsive Hero/Video sections. The application is successfully deployed live on Vercel.

## 2. Working Strategies & Methodologies

To ensure a professional and conflict-free development cycle, our team adopted several strict industry-standard strategies:

### A. The "Golden" Git Workflow

We implemented strict version control practices to protect our codebase:

- **Protected Main Branch:** Direct pushes to the `main` branch were strictly prohibited.
- **Feature Branching:** Every new component or fix required a dedicated feature branch (e.g., `feature/data-table`, `feature/hero`).
- **Pull Request (PR) Reviews:** All code was merged via PRs. As a final safety measure before deployment, we implemented a `staging-final-fixes` branch to review and compile all late-stage work before pushing to production.

### B. Desktop-First CSS Architecture

To maintain a clean and consistent UI, we adopted a **Desktop-First** approach:

- Components were initially built and styled for large desktop screens.
- Responsiveness was achieved using `max-width` media queries placed at the bottom of the component-specific CSS files (e.g., handling tablet and mobile views at `768px` and `480px`).

### C. Hybrid Development Environments

Our team demonstrated extreme adaptability by working across different hardware:

- **PC Environments:** Standard VS Code and local Node.js environments.
- **Mobile Development Environments:** Active members successfully built complex React components entirely from mobile devices using **Termux** (for the terminal/Node server), **Acode** (for code editing and responsive design tester plugin for responsiveness testing across devices), and **Kiwi Browser** (using Desktop Mode for responsive testing).

## 3. Deployment & Optimization

- **Hosting:** Successfully deployed on Vercel.
- **SEO & Social Media:** Implemented Open Graph (`og:`) tags for rich social media sharing.
- **Privacy Controls:** Implemented `<meta name="robots" content="noindex, nofollow">` to prevent web crawlers from indexing our student project.

## 4. Project Journey, Challenges & Limitations

Building this application within a strict timeframe required our team to navigate several significant technical and logistical hurdles. Rather than letting these limitations slow us down, we used them as opportunities to adapt our development strategies.

### A. Team Dynamics and Adaptability

Our group was initially assigned 16 members. Throughout the development cycle, 14 members actively participated, communicated, and drove the project to completion, while two members were completely absent from all activities. To ensure the project's success and meet our deadlines, the 14 active members swiftly reorganized, absorbed the remaining workload, and maintained a seamless workflow. _(Note: Specific component contributions are detailed in the Team Contributions section in the readme.md)._

### B. The Mobile Development Challenge

One of the most unique hurdles we faced was hardware limitations. Several active collaborators did not have access to standard PC environments and had to contribute entirely via mobile devices:

- **Android Users:** Successfully set up local Node.js environments using Termux, edited code via Acode, and utilized Kiwi Browser in "Desktop Mode" to test responsive designs.
- **iPhone Users:** Navigated GitHub's web interface and overcame complex SSH authentication and URL routing challenges to successfully push code and manage branches directly from iOS.
- This hybrid PC/Mobile workflow required extreme discipline regarding file structures and CSS naming conventions to prevent layout breaks.

### C. Overcoming the Learning Curve

At the start of this project, many team members were still building their foundational knowledge of JavaScript, React, and version control.

- **Mastering Git:** We strictly enforced a "Golden Workflow." Pushing directly to `main` was locked. The team had to quickly master branching (`git checkout -b`), pulling upstream changes, and navigating Pull Requests and merge conflicts.
- **React & Modern Tooling:** We successfully transitioned from basic HTML/CSS to understanding React component architecture, utilizing Vite for fast local rendering, and deploying a live continuous integration pipeline via Netlify and eventually Vercel.

## 5. Final Reflections & Team Growth

Completing this Capstone Project before the final deadline stands as a massive milestone for Group 13. By forcing ourselves to build a complex, responsive React application under pressure, we accelerated our understanding of JavaScript fundamentals and professional web architecture.

More importantly, this project drastically improved our collaborative skills. We learned how to communicate technical blockers effectively, conduct peer code reviews, and operate within a professional Git environment. Overcoming the initial intimidation of React and Git has profoundly bolstered our confidence. We emerge from this project not just as students, but as capable front-end developers ready for real-world team environments.

---

_This project represents Group 13's commitment to clean code, professional workflows, and overcoming technical and logistical hurdles._
