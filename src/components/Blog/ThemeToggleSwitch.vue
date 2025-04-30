<template>
  <!-- Theme Toggle Switch -->
  <div class="absolute top-6 right-6 flex flex-col items-center space-y-2">
    <!-- Switch Button -->
    <button
      @click="emitToggle"
      class="relative h-10 w-32 overflow-hidden rounded-full bg-gray-800 shadow-inner focus:outline-none"
    >
      <!-- Slider -->
      <span
        class="absolute left-0 z-10 h-full w-1/2 transform content-center rounded-full bg-orange-500 shadow-md transition-all duration-300 ease-in-out"
        :class="contentTheme === 'dark' ? 'translate-x-16' : 'translate-x-0'"
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
        class="flex h-full items-center justify-between px-4 text-xs font-semibold tracking-wider text-white uppercase"
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
