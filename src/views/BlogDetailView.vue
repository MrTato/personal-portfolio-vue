<script setup>
import BlogDetail from '@/components/Blog/BlogDetail.vue'
</script>

<template>
  <BlogDetail />
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
      post: {},
    }
  },
  methods: {
    async getData() {
      try {
        const response = await this.$axios.get(`/blog-posts/${this.slug}`)
        this.post = response.data
      } catch (error) {
        console.log(error)
      }
    },
  },
  created() {
    this.getData()
  },
}
</script>
