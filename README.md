# 🚀 Developer Portfolio & Systems Showcase

<p align="center">
  <img src="https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" alt="Laravel" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Inertia.js-9553E9?style=for-the-badge&logo=inertia&logoColor=white" alt="Inertia" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
</p>

An interactive, responsive portfolio web application built with a modern full-stack architecture to showcase software systems, utilities, and interactive project workflows.

<p align="center">
  <img src="https://github.com/user-attachments/assets/81112d7a-c4fa-41f6-8f2b-23ff11bb3e14" alt="Portfolio Walkthrough Demo" width="850px" />
</p>

---

## 🛠️ Tech Stack & Architecture

- **Backend Framework:** Laravel (RESTful routing, controller design, asset serving)
- **Frontend / UI:** React, Inertia.js, Tailwind CSS
- **Bundler & Build Tool:** Vite with HMR
- **Database & Persistence:** MySQL
- **Tooling & Workflow:** Git, Composer, NPM

---

## ✨ Featured Projects Highlighted

1. **COURANT** — Collaborative software architecture and data processing system.
2. **Learner Records & Management Utility** — Automated student data encoding, verification, and database synchronization.
3. **Financial General Ledger Tool** — Institutional transaction recording, audit balancing, and ledger reporting.
4. **3D Asset Pipeline & Spatial Environment** — Visual simulation with optimized asset modeling and responsive UI overlays.
5. **Hardware Diagnostics Interface** — System telemetry and component state tracking utility.

---

## 💻 Local Setup & Installation

To run this application locally on your machine:

```bash
# 1. Clone repository
git clone [https://github.com/jianrossdr/portfolio-app.git](https://github.com/jianrossdr/portfolio-app.git)
cd portfolio-app

# 2. Install backend & frontend dependencies
composer install
npm install

# 3. Environment configuration
cp .env.example .env
php artisan key:generate

# 4. Run migrations & storage link
php artisan migrate
php artisan storage:link

# 5. Start development servers
php artisan serve
npm run dev
