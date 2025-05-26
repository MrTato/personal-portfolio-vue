<template>
  <section class="mx-auto max-w-4xl animate-pulse md:my-8 md:mb-20">
    <!-- Cover Image Skeleton -->
    <div class="h-64 w-full bg-gray-300 md:mb-6 md:rounded-xl"></div>

    <!-- Metadata Skeleton -->
    <div class="mb-6 space-y-2">
      <div class="h-12 w-full rounded bg-orange-500 md:text-4xl"></div>
      <div class="h-4 w-1/3 rounded bg-gray-400"></div>
    </div>

    <!-- Article Skeleton -->
    <article
      class="relative space-y-4 rounded-lg bg-gray-200 px-8 pt-5 pb-20 text-gray-800 transition-all md:px-20 dark:bg-[#1e1e1e] dark:text-gray-200"
    >
      <!-- Theme Switch Placeholder -->
      <div class="mb-4 h-6 w-24 rounded bg-gray-400"></div>

      <!-- Paragraphs -->
      <div v-for="i in 30" :key="i" class="space-y-2">
        <div class="h-4 w-full rounded bg-gray-400"></div>
        <div class="h-4 w-[90%] rounded bg-gray-300"></div>
        <div class="h-4 w-[95%] rounded bg-gray-400"></div>
      </div>
    </article>
  </section>
</template>
