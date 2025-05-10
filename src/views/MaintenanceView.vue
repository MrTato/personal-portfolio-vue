<template>
  <section
    class="flex h-screen w-screen items-center justify-center bg-[#1e1e1e] p-8 text-center text-gray-200"
  >
    <div>
      <div class="mb-4 animate-pulse text-6xl font-bold text-yellow-400">🚧</div>
      <h1 class="mb-2 text-2xl font-semibold">Page Under Construction</h1>
      <p class="mb-6 text-base text-gray-400">
        We're working hard to bring this page to life. Check back soon!
      </p>
      <RouterLink
        to="/blog"
        class="inline-block rounded-lg bg-yellow-400 px-6 py-2 font-semibold text-[#1e1e1e] hover:bg-yellow-500"
      >
        Go Back to Blog
      </RouterLink>
    </div>
  </section>
</template>
