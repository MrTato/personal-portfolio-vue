<script setup>
import ThemeToggleSwitch from '@/components/Blog/ThemeToggleSwitch.vue'
import { marked } from 'marked'
import Prism from 'prismjs'
</script>

<template>
  <!-- <BlogDetail /> -->
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
        'relative rounded-lg px-8 py-15 text-justify transition-all md:p-20',
        contentTheme === 'dark' ? 'bg-[#1e1e1e] text-gray-200' : 'bg-[#F5F5DB] text-gray-800',
      ]"
    >
      <ThemeToggleSwitch :contentTheme="contentTheme" @toggle-theme="toggleContentTheme" />
      <div class="max-w-full overflow-x-hidden">
        <div class="bjls-content" v-html="markedContent"></div>
      </div>
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
      coverImage: 'https://placehold.co/1200x500',
      content: ``,
      contentTheme: 'dark',
      nextPost: {
        title: 'Why Composition API Matters',
        excerpt: 'Learn why Vue’s Composition API is a game changer...',
        slug: 'composition-api-matters',
      },
    }
  },
  methods: {
    async getData() {
      try {
        const response = await this.$axios.get(`/blog-posts/${this.slug}/`)
        this.title = response.data.title
        this.date = response.data.updated_at.split('T')[0]
        this.content = response.data.content
        console.log(response.data.content)
      } catch (error) {
        console.log(error)
      }
    },
    toggleContentTheme() {
      this.contentTheme = this.contentTheme === 'dark' ? 'light' : 'dark'
    },
  },
  computed: {
    markedContent() {
      const sanitized = this.$sanitize(marked.parse(this.content))

      return sanitized.replace(/src="\/media\//g, `src="${import.meta.env.VITE_API_URL}/media/`)
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
