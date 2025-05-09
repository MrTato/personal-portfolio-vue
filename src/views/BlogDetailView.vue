<script setup>
import ThemeToggleSwitch from '@/components/Blog/ThemeToggleSwitch.vue'
import { marked } from 'marked'
import Prism from 'prismjs'
import * as Sentry from '@sentry/vue'
</script>

<template>
  <!-- BlogDetailView -->
  <section class="mx-auto mb-20 max-w-4xl md:my-8">
    <!-- Cover Image -->
    <img
      v-if="coverImage"
      :src="coverImage"
      alt="Cover Image"
      class="mb-6 h-auto w-full md:rounded-xl"
    />

    <!-- Title and Metadata -->
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

    <!-- Next Post (optional) -->
    <!-- TODO: Implement Up Next component -->
    <!-- <div v-if="nextPost" class="mt-12">
    <h2 class="mb-2 text-xl font-semibold text-white">Up Next</h2>
    <RouterLink
      :to="`/blog/${nextPost.slug}`"
      class="block rounded border-l-4 border-orange-500 bg-[#111] p-4 transition hover:bg-[#1a1a1a]"
    >
      <h3 class="font-bold text-orange-400">{{ nextPost.title }}</h3>
      <p class="mt-1 text-sm text-gray-400">{{ nextPost.excerpt }}</p>
    </RouterLink>
  </div> -->
  </section>
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
      // nextPost: {
      //   title: 'Why Composition API Matters',
      //   excerpt: 'Learn why Vue’s Composition API is a game changer...',
      //   slug: 'composition-api-matters',
      // },
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
