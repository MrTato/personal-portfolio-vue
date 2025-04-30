<template>
  <section class="mx-auto max-w-4xl px-4 py-8">
    <!-- Cover Image -->
    <img
      v-if="coverImage"
      :src="coverImage"
      alt="Cover Image"
      class="mb-6 h-auto w-full rounded-xl"
    />

    <!-- Title and Metadata -->
    <div class="mb-6">
      <h1
        class="mb-2 flex h-16 content-center items-center justify-between bg-orange-500 pr-8 pl-3 text-4xl font-bold text-white"
      >
        <span>{{ title }}</span
        ><span><font-awesome-icon :icon="['fab', 'vuejs']" /></span>
      </h1>
      <p class="text-sm text-gray-400">
        By <span class="font-medium text-white">{{ author }}</span> • {{ date }}
      </p>
    </div>

    <!-- Blog Content -->
    <div
      :class="[
        'prose relative rounded-lg p-20 text-justify transition-all',
        contentTheme === 'dark' ? 'bg-[#1e1e1e] text-gray-200' : 'bg-[#F5F5DB] text-gray-800',
      ]"
    >
      <ThemeToggleSwitch :contentTheme="contentTheme" @toggle-theme="toggleContentTheme" />
      <p>{{ content }}</p>
    </div>

    <!-- Next Post -->
    <div v-if="nextPost" class="mt-12">
      <h2 class="mb-2 text-xl font-semibold text-white">Up Next</h2>
      <RouterLink
        :to="`/blog/${nextPost.slug}`"
        class="block rounded border-l-4 border-orange-500 bg-[#111] p-4 transition hover:bg-[#1a1a1a]"
      >
        <h3 class="font-bold text-orange-400">{{ nextPost.title }}</h3>
        <p class="mt-1 text-sm text-gray-400">{{ nextPost.excerpt }}</p>
      </RouterLink>
    </div>
  </section>
</template>

<script>
import ThemeToggleSwitch from '@/components/Blog/ThemeToggleSwitch.vue'

export default {
  name: 'BlogDetail',
  components: { ThemeToggleSwitch },
  data() {
    return {
      title: 'The Future of Vue in 2025',
      author: 'Bayardo López',
      date: 'April 26, 2025',
      coverImage: 'https://placehold.co/1200x500',
      content: `
# 🌐 Personal Portfolio Website

This is a personal portfolio website built with **Vue 3** and **Django**. It showcases my blog posts and personal projects with a clean, dark-themed, responsive design. I’m using this project to hone my full-stack development skills while creating something personally meaningful.

---

## ✨ Features

### 📝 Blog Section
- Posts written and managed via Django Admin
- Rendered in Vue using Markdown ([Marked.js](https://marked.js.org/))
- Public comments with spam and self-promotion filtering

### 💼 Project Showcase
- Gallery of project cards with screenshots, tech stack, and links
- Dedicated detail pages for each project
- Content managed through Django Admin

### 📬 Contact Form
- Sends emails directly to my inbox
- Client-side validation

### 🌍 Multilingual Support
- Toggle between English and Spanish using [Vue I18n](https://vue-i18n.intlify.dev/)

### 🌑 Dark Theme
- Responsive layout for mobile and desktop
- Based on a free dark [Figma](https://www.figma.com/) template

---

## 🛠 Tech Stack

### 🔹 Frontend
- [Vue 3](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Axios](https://axios-http.com/)
- [Marked.js](https://marked.js.org/)
- [Vue I18n](https://vue-i18n.intlify.dev/)

### 🔹 Backend
- [Python 3](https://www.python.org/)
- [Django](https://www.djangoproject.com/)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [django-markdownx](https://neutronx.github.io/django-markdownx/)
- [django-cors-headers](https://pypi.org/project/django-cors-headers/)

### 🔹 Hosting
- [DigitalOcean](https://www.digitalocean.com/) VPS
- [Gunicorn](https://gunicorn.org/) + [Nginx](https://www.nginx.com/)
- Manual deployment (for now)

## 🚀 Getting Started

### 🔧 Prerequisites
- Python 3.13.2
- PostgreSQL
- Virtualenv
      `,
      contentTheme: 'dark',
      nextPost: {
        title: 'Why Composition API Matters',
        excerpt: 'Learn why Vue’s Composition API is a game changer...',
        slug: 'composition-api-matters',
      },
      recentPosts: [
        { title: 'Understanding Reactivity in Vue', slug: 'vue-reactivity' },
        { title: 'TailwindCSS Tips & Tricks', slug: 'tailwind-tips' },
      ],
    }
  },
  methods: {
    toggleContentTheme() {
      this.contentTheme = this.contentTheme === 'dark' ? 'light' : 'dark'
    },
  },
}
</script>

<style scoped>
.prose {
  line-height: 1.75;
  font-size: 1rem;
}
</style>
