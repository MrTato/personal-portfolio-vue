<script setup>
import BlogListItem from '@/components/Blog/BlogListItem.vue'
import HeroSection from '@/components/Blog/HeroSection.vue'
import * as Sentry from '@sentry/vue'
</script>

<template>
  <div class="mb-20 flex w-full flex-col items-center">
    <HeroSection :slides="slides" v-if="slides.length > 0" />
    <div class="mt-10 flex w-5/6 flex-col space-y-6 md:w-3/4 lg:w-2/5">
      <h1 class="mb-8 pl-3 text-3xl font-semibold text-gray-100">Posts</h1>
      <BlogListItem
        v-for="post in posts"
        :key="post.slug"
        :title="post.title"
        :excerpt="post.description"
        :lastUpdated="post.updated_at.split('T')[0]"
        :image-url="post.preview_image"
        :to="`/blog/${post.slug}`"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [],
      posts: [],
    }
  },
  methods: {
    async getData() {
      try {
        const response = await this.$axios.get('/blog-posts/')
        this.slides = response.data.filter((post) => post.spotlight)
        this.posts = response.data
      } catch (error) {
        if (import.meta.env.MODE === 'development') {
          // eslint-disable-next-line no-console
          console.error(error)
        } else {
          Sentry.captureException(new Error(error))
        }
      }
    },
  },
  created() {
    this.getData()
  },
}
</script>
