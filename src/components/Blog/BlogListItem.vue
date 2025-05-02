<template>
  <RouterLink
    :to="to"
    v-if="isPublished"
    class="flex h-32 transform items-center rounded-md border-l-5 border-orange-500 bg-black px-9 py-4 transition-transform duration-300 hover:scale-105"
  >
    <!-- Round image -->
    <img
      class="hidden h-16 w-16 rounded-full border-4 border-white object-cover sm:block"
      :src="imageUrl"
      alt="Blog Thumbnail"
    />

    <!-- Text content -->
    <div class="mx-4 flex w-5/6 flex-col">
      <h2 class="text-xl font-bold text-orange-500">{{ title }}</h2>
      <p class="mt-1 line-clamp-2 text-sm text-ellipsis text-white">{{ excerpt }}</p>
      <span class="mt-1 text-xs text-gray-400">Last updated: {{ lastUpdated }}</span>
    </div>
  </RouterLink>
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
