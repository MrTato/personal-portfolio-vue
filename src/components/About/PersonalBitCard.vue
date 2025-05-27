<template>
  <div
    class="flex flex-col items-center justify-center rounded-lg bg-[#1E1E1E] p-4 text-center shadow-md transition duration-300 hover:shadow-orange-400/40"
  >
    <font-awesome-icon :icon="icon" class="mb-2 text-2xl text-orange-400" />
    <span class="text-base font-medium text-white">{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
