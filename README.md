# Ravi Repswal — Personal Developer Portfolio

A modern, production-ready personal developer portfolio built for **Ravi Repswal**: Full-Stack Developer, AI Builder, and Automation & Robotics Engineering undergraduate at Army Institute of Technology, Pune.

---

## 🚀 Live Features & Architectural Overview

- **Hero Section**: Personal branding, genuine high-resolution portrait, active collegiate status badge, core technology labels, and direct CTA buttons (*Explore Projects*, *Download CV*, *Let's Connect*).
- **About Section**: Engineering philosophy, academic background at Army Institute of Technology (AIT Pune, affiliated with Savitribai Phule Pune University), and 3 core engineering highlights (*Production Software*, *Intelligent Systems*, *Engineering Leadership*).
- **Technical Skills**: Domain-categorized competencies across Programming, Frontend, Backend & Data, Tools & Deployment, and Applied AI & Engineering. Features real-time category filtering and interactive search.
- **Featured Projects**:
  1. **Balajee Studio Production E-Commerce Platform**: Sole developer of a live client platform with React, Node.js, Supabase (PostgreSQL), Row-Level Security (RLS), UPI QR checkout, Cloudinary media pipeline, and Zustand state.
  2. **Spring-Loaded Pipe-Climbing Robot**: Team Leader for Escalade 14.0 at Techniche IIT Guwahati (National Finalist).
  3. **RC Rover with 6-DOF Robotic Arm**: AXIS'26 NIT Nagpur robotics competition, engineered under strict 2A power limit with Arduino Mega and staggered servo activation sequencing.
- **Technical Project Modals**: In-depth architectural case studies with full specifications, component lists, and challenges solved.
- **Experience & Leadership Timeline**: Clear career milestones including Balajee Studio client development, Joint Secretary at Centre for Excellence in AI & Robotics, Cursor Hackathon Kashmir 2026, PepsiCo Supply Chain Stars, Internshala Student Partner, and NSS Volunteer.
- **Certifications & Achievements Lightbox Gallery**:
  - Unstop Product Management (Prodman) Capsule
  - GUVI × HCL Google AI Studio & Multilingual Speech App (Google for Education Partner) with live verification link (`16U6099Y0KS3d7r1W7`)
  - QuizOff 2026 — India's Biggest AI Quiz (CampusCrew × Unstop)
  - HackWithHyderabad 3.0 Certificate of Participation (Microsoft Office, Hyderabad)
  - Hack2Skill Enterprise Credential Verification Gateway (`2026H2S05PWVCHL2-A00540`)
  - Full-screen high-resolution lightbox modal and direct download/preview links.
- **Resume & CV Suite**:
  - Interactive browser modal preview for curriculum vitae
  - Direct download links for original supplied files (`Ravi_Repswal_CV.pdf`, `Ravi_Repswal_Resume.pdf`, `Ravi_Repswal_Resume_Internshala.pdf`, `Ravi_Repswal_CV.docx`).
- **Verified GitHub Section**: Curated showcase of genuine repositories and codebases without fabricated contribution graphs or artificial statistics.
- **Interactive Contact**: Working contact form with mail client trigger and direct one-click copy buttons for email and phone.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Google Fonts (*Outfit*, *Inter*, *JetBrains Mono*)
- **Deployment**: Static build optimized for zero-cost deployment on Vercel or GitHub Pages.

---

## 💻 Local Setup & Development

### Prerequisites
- **Node.js**: v18.0.0 or later (Node v20+ recommended)
- **npm**: v9.0.0 or later

### Installation
Clone this repository to your machine, open the folder, and run:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Production Build
To create an optimized production bundle:

```bash
# Type check and build
npm run build

# Preview production build locally
npm run preview
```

The compiled static assets are located in the `dist/` directory.

---

## 🌐 100% Free Deployment Guide

### Option 1: Deploy to Vercel (Recommended)

1. Push your code to your GitHub account (`https://github.com/ravirepswal108/portfolio`).
2. Go to [Vercel](https://vercel.com/) and sign in with GitHub.
3. Click **Add New...** → **Project**.
4. Import your `portfolio` repository.
5. Vercel automatically detects **Vite**:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click **Deploy**. Your portfolio will be live on a free `*.vercel.app` domain (or custom domain) with free SSL and edge CDN.

### Option 2: Deploy to GitHub Pages

1. In `vite.config.ts`, add the repository base URL if deploying to `https://ravirepswal108.github.io/portfolio/`:
   ```ts
   export default defineConfig({
     base: '/portfolio/',
     // ...
   });
   ```
2. Build the project:
   ```bash
   npm run build
   ```
3. Deploy the `dist` folder to GitHub Pages using the `gh-pages` package or a GitHub Actions workflow.

---

## 📂 Project Structure

```text
├── public/
│   ├── certificates/          # High-resolution original certificates
│   ├── documents/             # Official Resume & CV downloads (PDF & DOCX)
│   ├── photos/                # Professional portrait photography
│   ├── projects/              # High-fidelity project engineering visuals
│   ├── favicon.svg            # Custom brand monogram icon
│   ├── robots.txt             # Search engine crawler permissions
│   └── sitemap.xml            # SEO indexing sitemap
├── src/
│   ├── components/            # Modular React components
│   │   ├── Navbar.tsx         # Sticky navigation with mobile drawer
│   │   ├── Hero.tsx           # Hero section with portrait & CTAs
│   │   ├── About.tsx          # Biography & engineering pillars
│   │   ├── Skills.tsx         # Filterable skill cards & search
│   │   ├── Projects.tsx       # Featured project showcase
│   │   ├── ProjectModal.tsx   # Detailed technical architecture modal
│   │   ├── Experience.tsx     # Career & leadership timeline
│   │   ├── Certifications.tsx # Certificate gallery with verify links
│   │   ├── CertificateModal.tsx # Full-screen certificate lightbox
│   │   ├── ResumeSection.tsx  # Dedicated resume & CV actions
│   │   ├── DocumentModal.tsx  # In-browser interactive CV viewer
│   │   ├── GitHubSection.tsx  # Verified developer repositories
│   │   ├── Contact.tsx        # Working contact form & quick-copy info
│   │   ├── Footer.tsx         # Copyright & quick navigation
│   │   └── Icons.tsx          # Pixel-perfect SVG brand marks
│   ├── data/
│   │   └── portfolio.ts       # Central single source of truth for all content
│   ├── App.tsx                # App root layout
│   ├── index.css              # Tailwind CSS 4 theme & glassmorphism
│   └── main.tsx               # React DOM entry point
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 📝 Updating Portfolio Content

All personal information, project descriptions, skills, experience milestones, and certificate metadata are managed in a single file:
👉 **`src/data/portfolio.ts`**

Whenever you update this file, the entire site updates reactively!

---

## 📄 License & Attribution

Designed and developed for **Ravi Repswal**.
Built with React, Vite, TypeScript, and Tailwind CSS.
Original content, photography, documents, and technical specifications are the property of Ravi Repswal.
# ravi-portfolio
