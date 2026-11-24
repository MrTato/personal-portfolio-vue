<template>
  <RouterLink
    :to="to"
    :class="{
      'md:underline md:decoration-[#ff7900] md:decoration-3 md:underline-offset-[12px]':
        $route.path === to || $route.path.startsWith(`${to}/`),
    }"
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
