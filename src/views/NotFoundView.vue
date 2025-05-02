<!-- src/views/NotFound.vue -->
<template>
  <section
    class="flex h-screen w-screen items-center justify-center bg-[#1e1e1e] p-8 text-center text-gray-200"
  >
    <div>
      <h1 class="mb-4 animate-bounce text-7xl font-bold text-red-600">404</h1>
      <p class="mb-2 text-2xl font-medium">Looks like you've hit a dead link.</p>
      <p class="mb-6 text-base text-gray-400">This page doesn't exist... yet 👀</p>
      <RouterLink
        to="/blog"
        class="inline-block rounded-lg bg-red-600 px-6 py-2 font-semibold text-[#1e1e1e] hover:bg-red-800"
      >
        Take me home
      </RouterLink>
    </div>
  </section>
</template>
