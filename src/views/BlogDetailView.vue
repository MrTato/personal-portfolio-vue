<script setup>
import BlogDetail from '@/components/Blog/BlogDetail.vue'
</script>

<template>
  <!-- <div class="mt-10 flex w-5/6 flex-col space-y-9 md:w-3/4 lg:w-2/5"> -->

  <!-- </div> -->
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
