<template>
  <RouterLink
    :to="to"
    :class="{ 'header-link-active': $route.path === to || $route.path.startsWith(`${to}/`) }"
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

<style scoped>
@media (min-width: 768px) {
  .header-link-active {
    text-decoration: underline;
    text-decoration-color: #ff7900;
    text-decoration-thickness: 3px;
    text-underline-offset: 12px;
  }
}
</style>
