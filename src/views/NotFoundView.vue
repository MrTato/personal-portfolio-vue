<template>
  <section
    class="flex h-screen w-screen items-center justify-center bg-[#1e1e1e] p-8 text-center text-gray-200"
    aria-live="polite"
  >
    <div>
      <!-- Visually animated 404 -->
      <h1 class="mb-4 animate-bounce text-7xl font-bold text-red-600">404</h1>

      <!-- Screen reader description -->
      <span class="sr-only"
        >Error 404: Page not found. The page you are looking for does not exist.</span
      >

      <!-- Visible explanation -->
      <p class="mb-2 text-2xl font-medium">Looks like you've hit a dead link.</p>
      <p class="mb-6 text-base text-gray-400">This page doesn't exist... yet 👀</p>

      <!-- Accessible link back home -->
      <RouterLink
        to="/blog"
        class="inline-block rounded-lg bg-red-600 px-6 py-2 font-semibold text-[#1e1e1e] hover:bg-red-800"
        aria-label="Return to the blog homepage"
      >
        Take me home
      </RouterLink>
    </div>
  </section>
</template>
