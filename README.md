# 🌐 Personal Portfolio Website

This is my personal portfolio website built with **Vue 3** and a custom **Django REST Framework** backend. It features a clean, responsive dark-themed design and serves as both a professional showcase and a full-stack learning project. The site includes a blog, an about section, and a contact form — all powered by a secure, modern stack.

🌐 Live at: [https://bayardolopez.com](https://bayardolopez.com)

---

## ✨ Features

### 📝 Blog

- Posts managed via a Django Admin panel
- Rendered in Vue using **Markdown**
- Advanced Markdown features: syntax highlighting, tables, blockquotes, task lists, collapsible sections
- Syntax highlighting via [Prism.js](https://prismjs.com/)
- HTML sanitization via [DOMPurify](https://github.com/cure53/DOMPurify)
- Fully responsive layout
- Light/Dark mode toggle for enhanced readability
- Backend API serves author and post metadata

### 👤 About Page

- Personal introduction with styled hero section
- **"How I Work"** section describing work ethic and process
- **Quick Personal Bits** component with fun, responsive cards (e.g. languages spoken, hobbies)
- Final **Call-to-Action Banner** encouraging collaboration or contact

### 📬 Contact Form

- Integrated form that submits to a DRF backend
- Features **Google reCAPTCHA v3** for spam prevention
- Success and error modals provide instant feedback
- Sends a confirmation email to the user upon successful submission

### 💼 Project Showcase (Planned)

- Grid of project cards with descriptions and tech stack
- Detail pages per project
- Content managed via backend

### 🌍 Multilingual Support (Planned)

- Toggle between English and Spanish using [Vue I18n](https://vue-i18n.intlify.dev/)

### 🌐 SEO & Social Sharing

- Optimized `<meta>` tags in `index.html` for better visibility on social media
- Dynamic titles and improved semantics for accessibility and search indexing

### 🛡️ Monitoring

- Integrated [Sentry](https://sentry.io/) for real-time error tracking in production

---

## 🛠 Tech Stack

### 🔹 Frontend

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Vue Router](https://router.vuejs.org/)
- [Axios](https://axios-http.com/)
- [Marked.js](https://marked.js.org/)
- [Prism.js](https://prismjs.com/)
- [DOMPurify](https://github.com/cure53/DOMPurify)
- [Vue I18n](https://vue-i18n.intlify.dev/) _(planned)_
- [Sentry SDK](https://docs.sentry.io/platforms/python/guides/django/)

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
- Gunicorn on Render

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node v22.14.0

### Project Setup

```bash
npm install
npm run dev
npm run build
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
- [x] About page with personal info and CTA
- [x] Contact form with backend + reCAPTCHA
- [ ] Project showcase
- [ ] Internationalization (EN/ES) using Vue I18n

---

## 🏷️ Versioning

This project follows **semver-style tags** (`v1.x.x`).  
Latest: **`v1.5.0`**
