<script setup>
import HeroSection from '@/components/Home/HeroSection.vue'
import DownloadCVSection from '@/components/Home/DownloadCVSection.vue'
import WhatIDoSection from '@/components/Home/WhatIDoSection.vue'
</script>

<template>
  <section class="flex flex-col items-center">
    <HeroSection
      profileImage="/public/profile.jpeg"
      name="Bayardo López"
      profession="Full Stack Web Developer"
      description="Web Developer with 2 years of experience and 5 years of total professional experience with a passion on translating ideas into tools that users not only depend on but enjoy relying on. I am at my most comfortable when using JavaScript and Python, love learning, brainstorming my way towards a solution, and constantly improving towards excellency."
      class="w-screen lg:w-6xl"
    />

    <WhatIDoSection class="max-w-6xl" />

    <DownloadCVSection />
  </section>
</template>
