<script setup>
import PositionedSection from '@/components/Home/PositionedSection.vue'
import HeroSection from '@/components/Home/HeroSection.vue'
</script>

<template>
  <div>
    <HeroSection
      profileImage="https://placehold.co/150"
      name="Bayardo López"
      profession="Full Stack Web Developer"
      description="Web Developer with 2 years of experience and 5 years of total professional experience with a passion on translating ideas into tools that users not only depend on but enjoy relying on. I am at my most comfortable when using JavaScript and Python, love learning, brainstorming my way towards a solution, and constantly improving towards excellency."
      class="w-screen lg:w-auto"
    />
    <section class="bspace-y-8 relative flex flex-col items-center p-8 text-white md:pb-20">
      <!-- Central vertical line -->
      <div class="absolute top-0 right-1/2 left-1/2 z-0 h-full w-1 bg-white"></div>

      <PositionedSection :isLeft="true" />

      <PositionedSection :isLeft="false" />

      <PositionedSection :isLeft="true" />

      <PositionedSection :isLeft="false" />

      <PositionedSection :isLeft="true" />

      <PositionedSection :isLeft="false" />
    </section>
  </div>
</template>
