<template>
  <section
    class="flex flex-col-reverse items-center justify-between gap-10 px-6 py-12 text-white md:flex-row md:gap-16 md:px-16 lg:px-32"
  >
    <!-- Text Section -->
    <div class="flex-1 text-center md:text-left">
      <p class="mb-2 text-sm tracking-wide text-orange-400 uppercase">About Me</p>
      <h1 class="mb-4 text-3xl leading-tight font-bold text-white md:text-5xl">
        Turning Ideas<br class="hidden md:inline" />
        Into Impactful Software
      </h1>
      <p class="mb-6 max-w-xl text-gray-300">
        I’m a full stack web developer passionate about building fast, scalable tools that solve
        real-world problems. With a background in Python and JavaScript, I translate ideas into
        clean code and seamless experiences.
      </p>
      <router-link
        to="/contact"
        class="inline-block rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
      >
        Contact Me
      </router-link>
    </div>

    <!-- Image Section -->
    <div class="flex flex-1 justify-center">
      <img
        src="https://placehold.co/500x400?text=Your+Photo+Here"
        alt="Developer at work"
        class="w-full max-w-sm rounded-lg object-cover shadow-lg"
      />
    </div>
  </section>
</template>
