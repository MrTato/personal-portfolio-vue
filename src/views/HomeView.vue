<template>
  <section class="relative px-4 py-20 text-white">
    <!-- Central vertical line -->
    <div class="absolute top-0 right-1/2 left-1/2 z-0 hidden h-full w-1 bg-white md:block"></div>

    <!-- Section 1: Previous Positions -->
    <div class="relative h-100 w-200 border-10 border-red-500">
      <!-- Connector line and dot (left side) -->
      <div class="absolute top-[48.5%] left-[32%] h-4 w-4 rounded-full bg-white"></div>
      <div class="absolute top-1/2 right-1/2 h-1 w-32 bg-white"></div>

      <!-- <div class="space-y-4 text-left md:w-1/2">
        <h2 class="text-2xl font-bold text-orange-400 sm:text-3xl">Previous Positions</h2>
        <ul class="list-inside list-disc text-base text-gray-200 sm:text-lg">
          <li>Frontend Developer at XYZ Inc. (2022–2024)</li>
          <li>Junior Developer at ABC Co. (2020–2022)</li>
          <li>Intern at DevStart (2019–2020)</li>
        </ul>
      </div> -->
    </div>
  </section>
</template>

<script setup>
// No logic needed
</script>
