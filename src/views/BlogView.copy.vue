<script setup>
import BlogPosts from '@/components/BlogPosts.vue'
</script>

<template>
  <header
    class="fixed top-0 w-full p-8 md:p-4 flex items-center justify-between md:justify-center md:bg-[#181818]"
  >
    <h1 class="text-3xl font-sans">Bayardo <span class="text-white">López</span></h1>

    <nav class="flex flex-col md:flex-row md:space-x-8 md:pl-36">
      <div class="md:hidden">
        <button
          @click="toggleMenu"
          v-if="!isMenuOpen"
          class="text-orange-500 text-3xl transition-all duration-300"
        >
          <i class="fa fa-bars"></i>
          <!-- Hamburger icon -->
        </button>
      </div>
      <Transition name="slide">
        <div
          v-if="isMenuOpen"
          class="fixed md:static right-0 top-0 w-1/3 md:w-auto h-full md:h-auto bg-orange-500 md:bg-transparent z-40"
          @click.self="closeMenu"
        >
          <div
            class="space-y-4 md:space-y-0 md:flex-row flex flex-col md:space-x-8 text-white md:text-orange-500 transform transition-all duration-500 z-50"
            :class="{
              'translate-x-0': isMenuOpen,
              'translate-x-full': !isMenuOpen,
            }"
          >
            <a
              href="#"
              @click="navigate"
              class="text-2xl py-2 px-4 rounded-md hover:bg-orange-500 hover:text-white transition-all duration-300"
              >Blog</a
            >
            <a
              href="#"
              @click="navigate"
              class="text-2xl py-2 px-4 rounded-md hover:bg-orange-500 hover:text-white transition-all duration-300"
              >Projects</a
            >
            <a
              href="#"
              @click="navigate"
              class="text-2xl py-2 px-4 rounded-md hover:bg-orange-500 hover:text-white transition-all duration-300"
              >About</a
            >
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false, // Tracks whether the menu is open or not
      isMobile: window.innerWidth < 768, // Tailwind md breakpoint = 768px
    }
  },
  mounted() {
    window.addEventListener('resize', this.checkScreen)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreen)
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen // Toggles the menu on/off
    },
    closeMenu() {
      this.isMenuOpen = false // Close the menu when the background overlay is clicked
    },
    navigate() {
      this.isMenuOpen = false // Close the menu when a link is clicked
    },
    checkScreen() {
      this.isMobile = window.innerWidth < 768
      if (!this.isMobile) {
        this.isMenuOpen = true // Make sure menu is open when going to desktop
      }
    },
  },
}
</script>

<style scoped>
/* Transition classes */
.slide-enter-from {
  transform: translateX(100%);
}
.slide-enter-active {
  transition: transform 0.4s ease;
}
.slide-enter-to {
  transform: translateX(0%);
}

.slide-leave-from {
  transform: translateX(0%);
}
.slide-leave-active {
  transition: transform 0.4s ease;
}
.slide-leave-to {
  transform: translateX(100%);
}
</style>
