# 🌐 Personal Portfolio Website

This is a personal portfolio website built with **Vue 3** and **Django**. It showcases my blog posts (currently live) and will soon feature personal projects, an about section, services, and more — all with a clean, dark-themed, responsive design. I'm building this as both a portfolio and a full-stack learning project.

---

## ✨ Features

### 📝 Blog Section

- Posts written and managed via Django Admin
- Rendered in Vue using Markdown ([Marked.js](https://marked.js.org/))
- Syntax highlighting with [Prism.js](https://prismjs.com/)
- HTML sanitization using [DOMPurify](https://github.com/cure53/DOMPurify)
- Light/dark theme toggle for reading experience
- Public comments with spam and self-promotion filtering (planned)

### 💼 Project Showcase (Coming Soon)

- Gallery of project cards with screenshots, tech stack, and links
- Dedicated detail pages for each project
- Content managed through Django Admin

### 🧑‍💼 About & Services (Coming Soon)

- Overview of background and skills
- List of services provided

### 📬 Contact Form (Planned)

- Will send emails directly to my inbox
- Client-side validation

### 🌍 Multilingual Support (Planned)

- Toggle between English and Spanish using [Vue I18n](https://vue-i18n.intlify.dev/)

### 🌑 Theming & Design

- Entire website is dark-themed
- Blog posts can be toggled between dark and light mode
- Responsive layout for mobile and desktop
- Based on a free dark [Figma](https://www.figma.com/) template

---

## 🛠 Tech Stack

### 🔹 Frontend

- [Vue 3](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Axios](https://axios-http.com/)
- [Marked.js](https://marked.js.org/)
- [Prism.js](https://prismjs.com/)
- [DOMPurify](https://github.com/cure53/DOMPurify)
- [Vue I18n](https://vue-i18n.intlify.dev/) _(planned)_

### 🔹 Backend

- [Python 3](https://www.python.org/)
- [Django](https://www.djangoproject.com/)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [django-markdownx](https://neutronx.github.io/django-markdownx/)
- [django-cors-headers](https://pypi.org/project/django-cors-headers/)

### 🔹 Hosting

- **Frontend:** [Netlify](https://www.netlify.com/)
- **Backend & DB:** [Render](https://render.com/)
- Backend uses Gunicorn (inside Render) — no Nginx currently
- Manual deployment (for now)

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node v22.14.0

### Project Setup

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

```bash
npm run lint
```

## 🧰 Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) _(Disable Vetur if enabled)_

---

## ⚙️ Customize Configuration

See [Vite Configuration Reference](https://vite.dev/config/)

---

## 📌 Roadmap

- [x] Blog with Markdown, Prism.js, and DOMPurify
- [ ] Project showcase
- [ ] About & services pages
- [ ] Contact form with email integration
- [ ] Internationalization (EN/ES) using Vue I18n
- [ ] CI/CD pipeline for frontend/backend

---

## 📄 License

This project is for personal use and learning. Feel free to explore and learn from it.
