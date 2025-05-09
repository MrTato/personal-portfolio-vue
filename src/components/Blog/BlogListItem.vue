<template>
  <li v-if="isPublished">
    <RouterLink
      :to="to"
      class="flex min-h-fit transform items-center rounded-md border-l-5 border-orange-500 bg-[#111] p-4 transition-all duration-300 hover:scale-105 hover:bg-[#1a1a1a]"
    >
      <article class="flex w-full items-center">
        <!-- Round image -->
        <img
          class="hidden h-16 w-16 rounded-full object-cover sm:block"
          :src="imageUrl"
          alt="Blog Thumbnail"
        />

        <!-- Text content -->
        <div class="mx-4 flex w-5/6 flex-col">
          <h2 class="text-xl font-bold text-orange-400">{{ title }}</h2>
          <p class="mt-1 line-clamp-2 text-sm text-ellipsis text-white">{{ excerpt }}</p>
          <span class="mt-1 font-mono text-xs text-gray-400">Last updated: {{ lastUpdated }}</span>
        </div>
      </article>
    </RouterLink>
  </li>
</template>

<script>
export default {
  name: 'BlogListItem',
  props: {
    title: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      default: 'https://placehold.co/150', // Placeholder image
    },
    lastUpdated: {
      type: String,
      required: true,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    to: {
      type: String,
      default: '/',
    },
  },
}
</script>

<style scoped>
/* You can add more custom styles if needed */
</style>
