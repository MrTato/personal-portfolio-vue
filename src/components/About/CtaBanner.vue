<template>
  <section
    class="w-screen justify-between bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 px-6 py-8 text-white shadow-xl md:py-6 lg:max-w-4xl"
  >
    <div class="mx-auto flex flex-col items-center gap-4 md:flex-row md:justify-around">
      <!-- Text -->
      <div class="text-center md:text-left">
        <h2 class="text-2xl font-bold md:text-3xl">Let’s Build Something Together</h2>
        <p class="mt-1 text-sm text-white/90">
          Whether it’s an idea or a full project — I’d love to hear from you.
        </p>
      </div>

      <!-- CTA Button -->
      <router-link
        to="/contact"
        class="rounded-full border-2 border-transparent bg-black px-6 py-2 font-semibold text-white shadow-md transition-all hover:border-black hover:bg-white hover:text-black"
      >
        Contact Me
      </router-link>
    </div>
  </section>
</template>
