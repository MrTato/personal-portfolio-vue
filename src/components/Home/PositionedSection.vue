<template>
  <div
    class="relative h-fit w-full md:w-150 lg:flex lg:w-240"
    :class="isLeft ? 'justify-start' : 'justify-end'"
  >
    <!-- Connector line and dot -->
    <div
      class="absolute top-1/2 flex items-center justify-center"
      :class="isLeft ? 'right-1/2' : 'left-1/2 flex-row-reverse'"
    >
      <span class="z-10 hidden h-4 w-4 rounded-full bg-white lg:block"></span>
      <span class="z-10 hidden h-1 w-10 bg-white lg:block"></span>
    </div>

    <div class="h-max space-y-4 bg-[#181818] p-8 text-left lg:w-[45%]">
      <h2 class="text-2xl font-bold text-orange-400 sm:text-3xl">{{ title }}</h2>
      <ul class="list-inside list-disc text-base text-gray-200 sm:text-lg">
        <li v-for="(item, index) in detailItems" :key="index" class="mb-8 list-none space-y-1">
          <div class="text-lg font-semibold text-orange-400">
            {{ item.title }}
          </div>
          <div class="text-sm tracking-wide text-gray-400 italic">
            {{ item.subtitle }}
          </div>
          <div class="font-mono text-sm text-gray-500 uppercase">
            {{ item.dateRange }}
          </div>
          <div class="text-base leading-relaxed text-gray-300">
            {{ item.description }}
          </div>
        </li>
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
    title: {
      type: String,
      required: true,
    },
    detailItems: {
      type: Array,
      required: true,
      validator(value) {
        return (
          Array.isArray(value) &&
          value.every(
            (item) =>
              typeof item.dateRange === 'string' &&
              typeof item.title === 'string' &&
              typeof item.subtitle === 'string' &&
              typeof item.description === 'string',
          )
        )
      },
    },
  },
}
</script>
