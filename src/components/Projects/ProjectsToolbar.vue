<script setup>
defineProps({ categories: { type: Array, required: true } })
const activeCategory = defineModel('activeCategory', { type: String, required: true })
const sortOrder = defineModel('sortOrder', { type: String, required: true })
</script>

<template>
  <div
    class="mb-[27px] flex items-center justify-between gap-5 border-b border-[#3a3a3a] pb-1 max-sm:flex-wrap max-sm:gap-2"
  >
    <div
      class="flex gap-2 max-sm:w-full max-sm:justify-between max-sm:gap-0"
      role="group"
      aria-label="Filter projects by category"
    >
      <button
        v-for="category in categories"
        :key="category"
        :aria-pressed="activeCategory === category"
        class="cursor-pointer rounded-2xl px-[22px] py-2.5 text-base transition-colors duration-200 max-sm:px-3 max-sm:py-[9px] max-sm:text-sm"
        :class="
          activeCategory === category ? 'bg-[#ff7900] text-[#080808]' : 'hover:bg-[#ffffff12]'
        "
        @click="activeCategory = category"
      >
        {{ category }}
      </button>
    </div>
    <label
      class="flex items-center text-sm whitespace-nowrap max-sm:ml-auto [&_option]:bg-[#171717] [&_select]:cursor-pointer [&_select]:bg-transparent [&_select]:px-1 [&_select]:py-2 [&_select]:font-semibold [&_select]:text-white"
      >Sort by:
      <select v-model="sortOrder" aria-label="Sort projects">
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="name">Name</option>
      </select></label
    >
  </div>
</template>
