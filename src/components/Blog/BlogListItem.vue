<template>
  <div
    v-if="isPublished"
    class="flex items-center rounded-full border border-orange-500 bg-black px-9 py-4"
  >
    <!-- Round image -->
    <img
      class="h-16 w-16 rounded-full border-4 border-white object-cover"
      :src="imageUrl"
      alt="Blog Thumbnail"
    />

    <!-- Text content -->
    <div class="ml-4 flex flex-col">
      <h2 class="text-xl font-bold text-orange-500">{{ title }}</h2>
      <p class="mt-1 text-sm text-white">{{ excerpt }}</p>
      <span class="mt-2 text-xs text-gray-400">Last updated: {{ lastUpdated }}</span>
    </div>
  </div>
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
  },
}
</script>

<style scoped>
/* You can add more custom styles if needed */
</style>
