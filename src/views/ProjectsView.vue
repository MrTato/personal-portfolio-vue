<script setup>
import ProjectsIntro from '@/components/Projects/ProjectsIntro.vue'
import ProjectCard from '@/components/Projects/ProjectCard.vue'
import { projects } from '@/data/projects'
</script>

<template>
  <div
    class="w-full bg-[#090909] bg-[radial-gradient(ellipse_240px_230px_at_-3%_12%,#a544004a,transparent),radial-gradient(ellipse_240px_200px_at_103%_8%,#a5440038,transparent),radial-gradient(ellipse_270px_230px_at_103%_97%,#ae470050,transparent)] px-[5%] pt-[50px] pb-[68px] text-[#f5f5f5] max-sm:px-5 max-sm:pt-[30px] max-sm:pb-[45px] [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-4 [&_a:focus-visible]:outline-[#ff7900]"
  >
    <div class="mx-auto max-w-[1200px]">
      <ProjectsIntro :project-count="projects.length" />

      <section
        class="grid grid-cols-3 gap-[22px] max-[1000px]:grid-cols-2 max-sm:grid-cols-1"
        aria-label="Projects"
      >
        <ProjectCard v-for="project in projects" :key="project.slug" :project="project" />
      </section>
    </div>
  </div>
</template>
