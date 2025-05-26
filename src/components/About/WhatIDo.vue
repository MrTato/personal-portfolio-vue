<template>
  <section class="w-screen bg-[#121212] px-6 py-16 text-white md:px-12 lg:max-w-4xl lg:px-24">
    <h2 class="mb-4 text-center text-3xl font-bold md:text-4xl">What I Do</h2>
    <p class="mx-auto mb-12 max-w-2xl text-center text-gray-400">
      I help individuals and companies turn ideas into functional, scalable tools. From polished
      interfaces to automated workflows, here’s how I typically add value to a project.
    </p>

    <div class="grid gap-8 md:grid-cols-3">
      <!-- Card 1 -->
      <div
        class="rounded-xl bg-[#1E1E1E] p-6 shadow-md transition duration-300 hover:shadow-orange-500/30"
      >
        <div class="mb-4 text-3xl text-orange-400">
          <font-awesome-icon :icon="['fas', 'laptop-code']" />
        </div>
        <h3 class="mb-2 text-xl font-semibold text-white">Frontend & Backend Development</h3>
        <p class="text-gray-300">
          I build responsive interfaces with Vue and Tailwind, and powerful backend APIs with Django
          REST Framework and PostgreSQL.
        </p>
      </div>

      <!-- Card 2 -->
      <div
        class="rounded-xl bg-[#1E1E1E] p-6 shadow-md transition duration-300 hover:shadow-orange-500/30"
      >
        <div class="mb-4 text-3xl text-orange-400">
          <font-awesome-icon :icon="['fas', 'database']" />
        </div>
        <h3 class="mb-2 text-xl font-semibold text-white">Data Pipelines & Automation</h3>
        <p class="text-gray-300">
          I design and implement efficient ETL workflows that help automate reporting, analytics,
          and backend processing.
        </p>
      </div>

      <!-- Card 3 -->
      <div
        class="rounded-xl bg-[#1E1E1E] p-6 shadow-md transition duration-300 hover:shadow-orange-500/30"
      >
        <div class="mb-4 text-3xl text-orange-400">
          <font-awesome-icon :icon="['fas', 'users']" />
        </div>
        <h3 class="mb-2 text-xl font-semibold text-white">Client-Focused Solutions</h3>
        <p class="text-gray-300">
          My focus is always on functionality, usability, and long-term maintainability — not just
          what looks good, but what works well.
        </p>
      </div>
    </div>
  </section>
</template>
