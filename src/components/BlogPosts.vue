<template>
  <div class="posts_container">
    <div class="posts_content">
      <h1>BlogPosts</h1>
      <ul class="posts_list">
        <li v-for="post in posts" :key="post.slug">
          <h2>{{ post.title }}</h2>
          <p>{{ post.content }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // posts
      posts: [],
    }
  },
  methods: {
    async getData() {
      try {
        // fetch posts
        const response = await this.$axios.get('/blog-posts/')
        // set the data returned as posts
        console.log(response)
        this.posts = response.data
      } catch (error) {
        // log the error
        console.log(error)
      }
    },
  },
  created() {
    // Fetch tasks on page load
    this.getData()
    console.log('hello world')
  },
}
</script>
