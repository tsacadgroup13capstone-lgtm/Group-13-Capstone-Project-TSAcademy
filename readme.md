# Frontend Capstone Project- Phoenix Cohort (Group 13)

## 📝Project Summary

This application recreates the Phoenix Cohort space - themed mockup as a fully functional React web application. It fetches real planetary data from an external API, displaying it in a responsive grid, and includes a validated contact form.

This capstone demonstrates our proficiency in HTML, CSS, JavaScript fundamentals, React component-based architecture, the fetch API, mobile-first responsive design, and collaborative Git workflows - showcasing the culmination of the TS Academy Frontend Development Course.

## 🚀 Live Demo

**Deployment Link:** [https://group13capstoneprojecttsacademy.vercel.app/]

## 👨🏽‍🤝‍👨🏻 Team members

- **Bashir Saka** (Team Lead) - [https://github.com/BashirSaka/RESPONSIVE-PROJECT-FLEXBOX.git]
- **Emmanuel Ezulumike .N.** (Ass Team Lead) - [https://github.com/Emi98nat/]
- **Mesole Dare Temitope** (Collaborator) - [https://github.com/temmytorpe312-pixel]
- **Idowu Opemipo soliu** (Collaborator) - [https://github.com/idowuoriyomi808-ai]
- **Akinmolayan Olumide Taiwo** (Collaborator) - [https://github.com/mideakinmolayan]
- **Sasere Okikiola Rebecca** (Collaborator) - [https://github.com/Rebecca0-12]
- **Otaru Simon** (Collaborator) - [https://github.com/Orenyi]
- **Oriowo Omobolanle** (Collaborator) - [https://github.com/Omobolanle27]
- **Serah akojenu** (Collaborator) - [https://github.com/akojenuserah]
- **Adebola Adetunbi** (Collaborator) - [https://github.com/Adebola09]
- **Asuquo Raphael Israel** (Collaborator) - [https://github.com/Battleaxe-R]
- **Ogba Emeka** (Collaborator) - [https://github.com/ogba07]
- **Modester Ihedigbo** (Collaborator) - [https://github.com/moddyoge-cloud]
- **Ajunwa Favour .C.** (Collaborator) - [https://github.com/Favourh]


## 🧩 Component Architecture & Task Distribution

_(Highlight any project that were a collaborative group effort)_

- <Navbar /> & <Hero /> (Includes scroll-to-data logic) - _[Team Member Name]_
- <VideoSection /> (Autoplay, muted, loop logic) - _[Team Member Name]_
- <PlanetGrid /> & <PlanetCard /> (Fetch API implementation & <figure> rendering) - _[Team Member Name]_
- <DataTable /> (Mobile-responsive data layout) - _[Team Member Name]_
- <ContactForm /> (Client-side validation & submission) - _[Team Member Name]_
- <Footer /> (Team bios & external routing) - *[Team Member Name]*
- Global CSS Variables & Mobile-First Architecture - _[Team Member Name]_

## 💻 Local Setup (PC & Termux/Android)

To run this project locally, follow these steps:

1. Clone the repository:
   git clone [your-github-repo-link]
2. Navigate into the project directory:
   cd [project-folder-name]
3. Install dependencies:
   npm install
4. Start the development server:
   npm run dev

## ⚙️ Strict Technical Requirements

All team members must ensure their components meet the following academy criteria:

- _Background Video:_ Must autoplay, be muted, loop, and _cannot_ be embedded using an iframe.
- _Scroll Navigation:_ The "Explore the Data" button must smooth-scroll to the planet images. The "Contact Us" CTA must smooth-scroll to the form.
- _Planet API:_ Images must be rendered using the HTML5 <figure> element.
- _Form Submission:_ Retain all client-side validation and display a clear success message upon submission to the provided endpoint.
- _Footer Links:_ Must include correct routing to Amaka's site, Ifeoma's LinkedIn, TSacademy, and this repository.
- _Meta Tag:_ The index.html must contain <meta name="author" content="[Your Group Name]">.

## 🤝 Collaborative Git Workflow & Rules

To maintain a clean codebase and avoid merge conflicts, we strictly adhere to the following rules:

1. _Never Push to Main:_ The main branch is locked. All work must be done on separate feature branches (e.g., feature/navbar).
2. _Pull Requests (PRs):_ All contributions must be submitted via a Pull Request.
3. _No Self-Merging:_ The creator of a PR is strictly forbidden from reviewing and merging their own code.
4. _Mandatory Reviews:_ Every PR must be reviewed by the Team Lead or Assistant Team Lead before being merged.
5. _Clean Commits:_ Ensure a task is completely\*\* finished and tested locally before opening a PR.
6. _Task Board:_ All progress is tracked using the GitHub Projects feature attached to this repository.

## 🚀 How to Set Up the Project on Your Computer

Because we are using React, you cannot simply double-click the `index.html` file to view the website. You must run a local server.

When you first clone or pull this repository to your computer, the `node_modules` folder will be missing. This is intentional to save space! Here is exactly how to get your workspace ready:

### Step 1: Open the Project

Open this exact repository folder (`Group-13-Capstone-Project-TSAcademy`) inside VS Code.

### Step 2: Install Dependencies

Open your VS Code terminal and run this command:

`npm install`

Wait for the loading bar to finish. This command reads our `package.json` file and safely downloads all the necessary React files into a new `node_modules` folder on your computer.

**🛑 CRITICAL WARNING:** Do **NOT** run `npm create vite@latest`. The Team Lead has already built the architecture. You only need to run `npm install`.

### Step 3: Start the Local Server

Once the installation is complete, start your local development server by running:

`npm run dev`

Hover over the local link it provides (usually `http://localhost:5173/`), hold `Ctrl` (or `Cmd`), and click it to view our single-page application in your browser! The page will automatically update every time you save a `.jsx` or `.css` file.

## 🔄 Daily Git Routine (Stay Synced)

To avoid errors and ensure your changes don't conflict with your teammates', please follow this exact loop every single time you sit down to work:

### 1. Before You Start (Get the Latest Updates)

Always make sure you are working on top of the most recent version of the project.

- Switch to the main branch:
  `git checkout main`
- Download the latest changes from GitHub:
  `git pull origin main`
- Create your specific work branch (e.g., `feature/navbar`):
  `git checkout -b feature/your-task-name`

### 2. While You Work

- Save your work often:
  `git add .`
- Commit your progress with a clear message:
  `git commit -m "Add specific changes to [Component Name]"`

### 3. When You Are Finished

- Push your branch to GitHub:
  `git push origin feature/your-task-name`
- Open GitHub in your browser, go to your repository, and create a **Pull Request (PR)** so the Team Lead can review and merge your work into `main`.

---

_If you ever see a "Merge Conflict" error, do not panic! Stop immediately and message the Team Lead for help—we will fix it together._
