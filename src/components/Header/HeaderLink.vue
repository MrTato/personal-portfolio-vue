<template>
  <RouterLink
    :to="to"
    class="w-full rounded-lg px-4 py-2 transition-colors duration-300 md:hover:bg-orange-500 md:hover:text-white"
  >
    <slot></slot>
  </RouterLink>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
}
</script>
