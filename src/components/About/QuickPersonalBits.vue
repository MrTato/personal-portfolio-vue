<template>
  <section class="w-screen bg-[#121212] px-6 py-16 text-white md:px-12 lg:max-w-4xl lg:px-32">
    <h2 class="mb-12 text-center text-3xl font-bold md:text-4xl">Quick Personal Bits</h2>

    <div class="grid auto-rows-[100px] grid-cols-2 gap-4 sm:grid-cols-5">
      <PersonalBitCard
        class="row-span-4 sm:col-span-2 sm:row-span-3"
        :icon="['fas', 'gamepad']"
        title="Gaming"
      />

      <PersonalBitCard
        class="row-span-1 sm:col-span-1 sm:row-span-2"
        :icon="['fas', 'language']"
        title="Japanese"
      />

      <PersonalBitCard
        class="row-span-2 sm:col-span-2"
        :icon="['fas', 'language']"
        title="English"
      />

      <PersonalBitCard
        class="row-span-2 bg-orange-500 sm:col-span-1 sm:row-span-1"
        :icon="['fas', 'code']"
        title="Coding"
      />

      <PersonalBitCard
        class="row-span-4 sm:col-span-2 sm:row-span-3"
        :icon="['fas', 'book']"
        title="Reading"
      />

      <PersonalBitCard
        class="row-span-2 sm:col-span-2"
        :icon="['fas', 'language']"
        title="Spanish"
      />

      <PersonalBitCard
        class="row-span-1 sm:col-span-1 sm:row-span-2"
        :icon="['fas', 'pen']"
        title="Journaling"
      />
    </div>
  </section>
</template>

<script setup>
import PersonalBitCard from './PersonalBitCard.vue'
</script>
