<script setup>
import HeroSection from '@/components/Home/HeroSection.vue'
import WhatIDoSection from '@/components/Home/WhatIDoSection.vue'
import SkillsSection from '@/components/Home/SkillsSection.vue'
</script>

<template>
  <section class="flex flex-col items-center pb-12 md:pb-20">
    <HeroSection
      profileImage="/profile.webp"
      name="Bayardo López"
      profession="Full Stack Web Developer"
      description="Web Developer with 6 years of experience with a passion on translating ideas into tools that users not only depend on but enjoy relying on. I am at my most comfortable when using JavaScript and Python, love learning, brainstorming my way towards a solution, and constantly improving towards excellency."
      class="w-screen lg:w-6xl"
    />

    <WhatIDoSection class="max-w-4xl" />

    <SkillsSection class="w-screen max-w-6xl" />
  </section>
</template>
