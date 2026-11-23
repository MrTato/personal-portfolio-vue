<script setup>
import { computed, ref } from 'vue'
import ProjectsIntro from '@/components/Projects/ProjectsIntro.vue'
import ProjectsToolbar from '@/components/Projects/ProjectsToolbar.vue'
import ProjectCard from '@/components/Projects/ProjectCard.vue'
import { projects, projectCategories } from '@/data/projects'

const activeCategory = ref('All')
const sortOrder = ref('newest')
const visibleProjects = computed(() => {
  const filtered = projects.filter(
    (project) => activeCategory.value === 'All' || project.category === activeCategory.value,
  )
  if (sortOrder.value === 'oldest') return [...filtered].reverse()
  if (sortOrder.value === 'name') return [...filtered].sort((a, b) => a.name.localeCompare(b.name))
  return filtered
})
</script>

<template>
  <div
    class="w-full bg-[#090909] bg-[radial-gradient(ellipse_240px_230px_at_-3%_12%,#a544004a,transparent),radial-gradient(ellipse_240px_200px_at_103%_8%,#a5440038,transparent),radial-gradient(ellipse_270px_230px_at_103%_97%,#ae470050,transparent)] px-[5%] pt-[50px] pb-[68px] text-[#f5f5f5] max-sm:px-5 max-sm:pt-[30px] max-sm:pb-[45px] [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-4 [&_a:focus-visible]:outline-[#ff7900] [&_button:focus-visible]:outline-2 [&_button:focus-visible]:outline-offset-4 [&_button:focus-visible]:outline-[#ff7900] [&_select:focus-visible]:outline-2 [&_select:focus-visible]:outline-offset-4 [&_select:focus-visible]:outline-[#ff7900]"
  >
    <div class="mx-auto max-w-[1200px]">
      <ProjectsIntro />

      <ProjectsToolbar
        :categories="projectCategories"
        v-model:active-category="activeCategory"
        v-model:sort-order="sortOrder"
      />

      <section
        class="grid grid-cols-3 gap-[22px] max-[1000px]:grid-cols-2 max-sm:grid-cols-1"
        aria-label="Projects"
        aria-live="polite"
      >
        <ProjectCard v-for="project in visibleProjects" :key="project.slug" :project="project" />
      </section>
    </div>
  </div>
</template>
