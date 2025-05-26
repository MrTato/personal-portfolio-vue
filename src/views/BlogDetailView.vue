<script setup>
import ThemeToggleSwitch from '@/components/Blog/ThemeToggleSwitch.vue'
import { marked } from 'marked'
import Prism from 'prismjs'
import * as Sentry from '@sentry/vue'
import BlogDetailLoadingSkeleton from '@/components/Blog/BlogDetailLoadingSkeleton.vue'
</script>

<template>
  <transition name="fade" mode="out-in">
    <BlogDetailLoadingSkeleton v-if="isLoading" />
    <section class="mx-auto max-w-4xl md:my-8 md:mb-20" v-else>
      <!-- Cover Image -->
      <img
        v-if="coverImage"
        :src="coverImage"
        alt="Cover Image"
        class="h-auto w-full md:mb-6 md:rounded-xl"
      />

      <!-- Blog Post metadata -->
      <div class="mb-6">
        <h1
          class="mb-2 flex min-h-fit content-center items-center justify-between bg-orange-500 py-2 pr-8 pl-3 text-2xl font-bold text-white md:text-4xl"
        >
          <span>{{ title }}</span>
        </h1>
        <p class="text-sm text-gray-400">
          By <strong class="font-medium text-white">{{ author }}</strong> • {{ date }}
        </p>
      </div>

      <!-- Blog Content -->
      <article
        :class="[
          'relative rounded-lg px-8 pt-5 pb-15 text-justify transition-all md:px-20',
          contentTheme === 'dark' ? 'bg-[#1e1e1e] text-gray-200' : 'bg-[#F5F5DB] text-gray-800',
        ]"
      >
        <ThemeToggleSwitch :contentTheme="contentTheme" @toggle-theme="toggleContentTheme" />
        <div class="max-w-fit overflow-x-clip">
          <div class="bjls-content" v-html="markedContent"></div>
        </div>
      </article>
    </section>
  </transition>
</template>

<script>
export default {
  props: {
    slug: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      title: '',
      author: 'Bayardo López',
      date: '',
      coverImage: '',
      content: ``,
      contentTheme: 'dark',
    }
  },
  methods: {
    async getData() {
      try {
        const response = await this.$axios.get(`/blog-posts/${this.slug}/`)
        this.title = response.data.title
        this.date = response.data.updated_at.split('T')[0]
        this.content = response.data.content
        this.coverImage = response.data.cover_image
      } catch (error) {
        if (import.meta.env.MODE === 'development') {
          // eslint-disable-next-line no-console
          console.error(error)
        } else {
          Sentry.captureException(new Error(error))
        }
      }
    },
    toggleContentTheme() {
      this.contentTheme = this.contentTheme === 'dark' ? 'light' : 'dark'
    },
  },
  computed: {
    isLoading() {
      return !this.title && !this.date && !this.content && !this.coverImage
    },
    markedContent() {
      const sanitized = this.$sanitize(marked.parse(this.content))

      // Wrap each <table> element with a div wrapper to avoid tables overflowing on mobile view
      let wrappedHtml = sanitized
        .replace(/<table(.*?)>/g, (match) => {
          return `<div class="overflow-auto w-66 md:w-full">${match}`
        })
        .replace(/<\/table>/g, '</table></div>')

      // Wrap each <pre> element with a div wrapper to avoid code blocks overflowing on mobile view
      wrappedHtml = wrappedHtml
        .replace(/<pre(.*?)>/g, (match) => {
          return `<div class="overflow-auto w-74 md:w-full">${match}`
        })
        .replace(/<\/pre>/g, '</pre></div>')

      // repairs image urls served from api
      return wrappedHtml.replace(/src="\/media\//g, `src="${import.meta.env.VITE_API_URL}/media/`)
    },
  },
  created() {
    this.getData()
  },
  mounted() {
    this.$nextTick(() => {
      Prism.highlightAll()
    })
  },
  updated() {
    this.$nextTick(() => {
      Prism.highlightAll()
    })
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
