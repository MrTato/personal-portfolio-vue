<script setup>
import BlogListItem from '@/components/Blog/BlogListItem.vue'
</script>

<template>
  <div class="flex w-5/6 flex-col space-y-9 md:w-3/4 lg:w-2/5">
    <BlogListItem
      class="w-full border border-orange-500 bg-black"
      title="Generic title"
      excerpt="test data"
      lastUpdated="2025-01-01"
    />
    <BlogListItem
      class="w-full border border-orange-500 bg-black"
      title="Generic title"
      excerpt="test data"
      lastUpdated="2025-01-01"
    />
    <BlogListItem
      class="w-full border border-orange-500 bg-black"
      title="Generic title"
      excerpt="test data"
      lastUpdated="2025-01-01"
    />
  </div>
</template>

<script>
export default {}
</script>
