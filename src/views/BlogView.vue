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
  </div>
</template>

<script>
export default {}
</script>
