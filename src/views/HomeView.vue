<script setup>
import LeftSection from '@/components/Home/LeftSection.vue'
import RightSection from '@/components/Home/RightSection.vue'
</script>

<template>
  <section class="relative px-4 py-20 text-white">
    <!-- Central vertical line -->
    <div class="absolute top-0 right-1/2 left-1/2 z-0 hidden h-full w-1 bg-white md:block"></div>

    <LeftSection />

    <RightSection />

    <LeftSection />

    <RightSection />

    <LeftSection />

    <RightSection />
  </section>
</template>
