<template>
  <div class="fixed inset-0 z-40 h-full w-full bg-transparent">
    <div
      class="fixed top-0 right-0 z-50 flex h-screen w-1/3 flex-col space-y-4 bg-orange-500 pt-8 text-2xl text-white"
    >
      <HeaderLink to="/blog">Blog</HeaderLink>
      <HeaderLink to="/projects">Projects</HeaderLink>
      <HeaderLink to="/contact">Contact</HeaderLink>
      <HeaderLink to="/about">About</HeaderLink>
    </div>
  </div>
</template>

<script>
import HeaderLink from '@/components/Header/HeaderLink.vue'

export default {
  components: {
    HeaderLink,
  },
}
</script>
