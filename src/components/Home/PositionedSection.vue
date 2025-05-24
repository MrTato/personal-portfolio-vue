<template>
  <div class="relative h-60 md:w-150 lg:w-240">
    <!-- Connector line and dot -->
    <div
      class="absolute top-[47.5%] z-10 hidden h-4 w-4 rounded-full bg-white lg:block"
      :class="isLeft ? 'left-[45%]' : 'right-[45%]'"
    ></div>
    <div
      class="absolute top-1/2 right-1/2 z-10 hidden h-1 w-10 bg-white lg:block"
      :class="isLeft ? 'right-1/2' : 'left-1/2'"
    ></div>

    <div
      class="space-y-4 bg-[#181818] p-8 text-left lg:absolute lg:w-[45%]"
      :class="isLeft ? 'left-0' : 'right-0'"
    >
      <h2 class="text-2xl font-bold text-orange-400 sm:text-3xl">Previous Positions</h2>
      <ul class="list-inside list-disc text-base text-gray-200 sm:text-lg">
        <li>Frontend Developer at XYZ Inc. (2022–2024)</li>
        <li>Junior Developer at ABC Co. (2020–2022)</li>
        <li>Intern at DevStart (2019–2020)</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isLeft: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
