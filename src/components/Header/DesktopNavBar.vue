<template>
  <nav class="hidden flex-row text-2xl text-orange-500 md:flex md:space-x-8 md:pl-36">
    <HeaderLink to="/blog">Blog</HeaderLink>
    <HeaderLink to="/projects">Projects</HeaderLink>
    <HeaderLink to="/contact">Contact</HeaderLink>
    <HeaderLink to="/about">About</HeaderLink>
  </nav>
</template>

<script>
import HeaderLink from '@/components/Header/HeaderLink.vue'

export default {
  components: {
    HeaderLink,
  },
}
</script>
