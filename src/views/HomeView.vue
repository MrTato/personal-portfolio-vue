<script setup>
import PositionedSection from '@/components/Home/PositionedSection.vue'
</script>

<template>
  <section class="relative space-y-4 px-4 text-white md:space-y-0 md:py-20">
    <!-- Central vertical line -->
    <div class="absolute top-0 right-1/2 left-1/2 z-0 hidden h-full w-1 bg-white md:block"></div>

    <PositionedSection :isLeft="true" />

    <PositionedSection :isLeft="false" />

    <PositionedSection :isLeft="true" />

    <PositionedSection :isLeft="false" />

    <PositionedSection :isLeft="true" />

    <PositionedSection :isLeft="false" />
  </section>
</template>
