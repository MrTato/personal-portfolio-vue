<script setup>
defineProps({ project: { type: Object, required: true } })
</script>

<template>
  <a
    :href="project.url"
    target="_blank"
    rel="noopener noreferrer"
    class="block h-[190px] overflow-hidden border-b border-[#383838] bg-[#181818] max-sm:h-[220px] min-[1400px]:h-[210px]"
    tabindex="-1"
    aria-hidden="true"
  >
    <img
      :src="project.image"
      alt=""
      loading="lazy"
      decoding="async"
      class="h-full w-full object-cover"
    />
  </a>
</template>
