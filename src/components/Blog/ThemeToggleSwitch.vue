<template>
  <!-- Theme Toggle Switch -->
  <div class="absolute top-6 right-6 flex flex-col items-center">
    <!-- Switch Button -->
    <button
      @click="emitToggle"
      class="relative h-8 w-28 cursor-pointer rounded-full"
      :class="
        contentTheme === 'dark' ? 'bg-[#181818] text-orange-500' : 'bg-orange-500 text-[#181818]'
      "
    >
      <!-- Slider -->
      <span
        class="absolute left-0 z-10 h-full w-1/2 transform content-center rounded-full bg-gray-800 transition-all duration-300 ease-in-out"
        :class="contentTheme === 'dark' ? 'translate-x-full' : 'translate-x-0'"
        ><!-- Icon (on top of the switch) -->
        <transition name="fade" mode="out-in">
          <font-awesome-icon
            :key="contentTheme"
            :icon="contentTheme === 'dark' ? ['fas', 'moon'] : ['fas', 'sun']"
            class="text-2xl transition-transform duration-300"
            :class="contentTheme === 'dark' ? 'text-gray-300' : 'text-yellow-400'"
          /> </transition
      ></span>

      <!-- Labels -->
      <div
        class="flex h-full items-center justify-between px-4 text-xs font-semibold tracking-wider uppercase"
      >
        <span
          :class="contentTheme === 'dark' ? 'opacity-100' : 'opacity-0'"
          class="transition-opacity duration-300"
          >Dark</span
        >
        <span
          :class="contentTheme === 'dark' ? 'opacity-0' : 'opacity-100'"
          class="transition-opacity duration-300"
          >Light</span
        >
      </div>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    contentTheme: {
      type: String,
      default: 'dark',
    },
  },
  methods: {
    emitToggle() {
      this.$emit('toggle-theme')
    },
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
