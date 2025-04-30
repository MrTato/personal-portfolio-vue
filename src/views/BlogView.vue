<script setup>
import BlogListItem from '@/components/Blog/BlogListItem.vue'
import HeroSection from '@/components/Blog/HeroSection.vue'
</script>

<template>
  <div class="flex w-full flex-col items-center">
    <HeroSection
      backgroundImage="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
      date="APR 27, 2025"
      title="Exploring the Future of Web Design"
      excerpt="Discover the trends and technologies shaping the web in the next decade. A journey into creativity and innovation."
    />
    <div class="mt-10 flex w-5/6 flex-col space-y-9 md:w-3/4 lg:w-2/5">
      <h1 class="mb-8 pl-3 text-3xl font-semibold text-gray-100">Recent Posts</h1>
      <BlogListItem
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        :excerpt="getExcerpt(post.content)"
        :lastUpdated="post.updated_at.split('T')[0]"
        :to="`/blog/${post.slug}`"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    }
  },
  methods: {
    async getData() {
      try {
        const response = await this.$axios.get('/blog-posts/')
        this.posts = response.data
      } catch (error) {
        console.log(error)
      }
    },
    getExcerpt(content) {
      if (window.innerWidth <= 640) {
        return `${content.slice(0, 29)}...`
      }
      if (window.innerWidth <= 768) {
        return `${content.slice(0, 69)}...`
      }
      return `${content.slice(0, 180)}...`
    },
  },
  created() {
    this.getData()
  },
}
</script>
