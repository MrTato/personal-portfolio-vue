<template>
  <section class="bg-[#0d0d0d] px-6 py-10 text-center text-white">
    <!-- Section Title -->
    <h2 class="mb-12 text-3xl font-extrabold text-orange-400 sm:text-4xl">Skills</h2>

    <div class="mx-auto max-w-3xl space-y-8 text-left">
      <div v-for="(skill, index) in skills" :key="index" class="space-y-2">
        <div class="flex items-center justify-between">
          <span class="text-base font-semibold text-white sm:text-lg">
            {{ skill.title }}
          </span>
          <span class="text-sm text-gray-400">{{ skill.level }}%</span>
        </div>

        <div class="h-3 w-full overflow-hidden rounded-full bg-gray-700">
          <div
            class="h-full bg-orange-500 transition-all duration-500"
            :style="{ width: skill.level + '%' }"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection',
  data() {
    return {
      skills: [
        { title: 'Vue | Nuxt', level: 90 },
        { title: 'Django | DRF', level: 75 },
        { title: 'SQL | PostgreSQL', level: 95 },
        { title: 'Pandas', level: 95 },
        { title: 'Git', level: 90 },
      ],
    }
  },
}
</script>
