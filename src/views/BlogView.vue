<script setup>
import BlogListItem from '@/components/Blog/BlogListItem.vue'
import BlogPosts from '@/components/BlogPosts.vue'
import DesktopNavBar from '@/components/Header/DesktopNavBar.vue'
import MobileNavSideBar from '@/components/Header/MobileNavSideBar.vue'
</script>

<template>
  <div class="flex justify-center">
    <header
      class="fixed top-0 flex w-full items-center justify-between p-8 md:justify-center md:bg-[#181818] md:p-4"
    >
      <h1 class="font-sans text-3xl text-orange-500">
        Bayardo
        <span class="text-white">López</span>
      </h1>

      <!-- The mobile nav side bar controls opening and closing the menu -->
      <MobileNavSideBar />
      <!-- The desktop nav bar is only visible starting on tablet devices -->
      <DesktopNavBar />
    </header>
    <main class="mt-32 flex w-full flex-col space-y-9 md:w-3/4 lg:w-2/5">
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
    </main>
  </div>
</template>

<script>
export default {}
</script>
