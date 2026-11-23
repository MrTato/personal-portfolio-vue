<script setup>
import ProjectPreview from './ProjectPreview.vue'

defineProps({ project: { type: Object, required: true } })
</script>

<template>
  <article
    class="flex flex-col overflow-hidden rounded-xl border border-[#343434] bg-[linear-gradient(125deg,#181818,#101010)] transition-[border-color,transform] duration-200 hover:-translate-y-[3px] hover:border-[#98602f] motion-reduce:transition-none"
  >
    <ProjectPreview :project="project" />
    <div
      class="flex flex-1 flex-col items-start px-[21px] pb-3.5 max-sm:px-5 max-sm:pb-[18px] [&>h2]:my-[5px] [&>h2]:text-[23px] [&>h2]:leading-[1.2] [&>h2]:font-[750] [&>h2]:tracking-[-.025em] [&>h2_a:hover]:text-[#ff7900] [&>p]:mb-3.5 [&>p]:text-sm [&>p]:leading-normal max-sm:[&>p]:text-base"
    >
      <span
        class="mt-[5px] rounded-[9px] bg-[#ff7900] px-[11px] py-1 text-[11px] font-[750] text-[#080808] uppercase"
        >{{ project.label }}</span
      >
      <h2>
        <RouterLink :to="`/projects/${project.slug}`">{{ project.name }}</RouterLink>
      </h2>
      <p>{{ project.description }}</p>
      <div class="mt-auto flex w-full items-center justify-between gap-2">
        <ul
          class="flex flex-wrap gap-2 [&>li]:rounded-[20px] [&>li]:bg-[#292b2c] [&>li]:px-[11px] [&>li]:py-1 [&>li]:text-[11px] max-sm:[&>li]:text-xs"
        >
          <li v-for="technology in project.technologies" :key="technology">
            {{ technology }}
          </li>
        </ul>
        <RouterLink
          :to="`/projects/${project.slug}`"
          class="shrink-0 p-[3px] text-[#ff7900] [&>svg]:size-[23px]"
          :aria-label="`View ${project.name}`"
          ><svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
            aria-hidden="true"
          >
            <path
              d="M14 3h7v7m0-7L10 14M10 4H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-5"
            /></svg
        ></RouterLink>
      </div>
    </div>
  </article>
</template>
