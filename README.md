# Personal CV Website

A calm, minimal personal CV and portfolio website for **Xyze G. Mantalaba**, an Information Technology student from Davao City, Philippines. Built for the IT415 System Integration and Architecture course.

## Live Website

**ADD AFTER DEPLOYMENT** (paste your public Vercel URL here)

> Note: `https://vercel.com/xy-m` is the Vercel dashboard, not the deployed site.

## GitHub Repository

https://github.com/xyzemph/IT415-Tasks (app is in the `personal-cv/` folder)

If you move this project to its own repository, update this link.

## Author

- Name: Xyze G. Mantalaba
- Course: BSIT, 4th Year, Davao del Norte State College
- Email: xyzemph@gmail.com

## Tech Stack

- React 18 + TypeScript
- Vite 5
- Plain CSS (no UI framework)
- Deployed on Vercel

No backend, no paid API, and no secret keys are needed.

## Features

- Personal profile, basic information, education, skills, projects, achievements and experience
- Links to GitHub, LinkedIn, YouTube and BandLab, plus a working `mailto:` email link
- Sticky navigation with active-section highlight and a mobile menu
- Responsive layout for desktop, tablet and mobile
- Keyboard accessible, skip link, semantic HTML, readable contrast
- Subtle scroll animations that turn off for visitors who prefer reduced motion

## Local Setup

Prerequisite: [Node.js](https://nodejs.org/) 18 or newer.

```bash
cd personal-cv
npm install
npm run dev      # opens a local dev server (usually http://localhost:5173)
npm run build    # type-checks and creates the production build in dist/
npm run preview  # optional: preview the production build locally
```

## Project Structure

```
personal-cv/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── public/
│   └── favicon.svg
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── styles.css
    ├── data/content.ts
    ├── hooks/
    └── components/
```

## Deployment (Vercel)

1. Push the project to GitHub.
2. In Vercel, choose **Add New → Project** and import the repository.
3. If the app is inside `personal-cv/` of IT415-Tasks, set **Root Directory** to `personal-cv`.
4. Framework preset: **Vite** (build command `npm run build`, output `dist`).
5. Deploy, then paste the live URL into the "Live Website" section above.
