<script setup>
import BlogPosts from '@/components/BlogPosts.vue'
</script>

<template>
  <header
    class="fixed top-0 flex w-full items-center justify-between p-8 md:justify-center md:bg-[#181818] md:p-4"
  >
    <h1 class="font-sans text-3xl text-orange-500">
      Bayardo
      <span class="text-white">López</span>
    </h1>

    <!-- This is the mobile view navbar -->
    <nav class="flex flex-col md:hidden">
      <Transition name="spiral-collapse">
        <button
          @click="toggleMenu"
          v-if="!isMenuOpen"
          class="text-3xl text-orange-500 transition-all duration-300"
        >
          <font-awesome-icon :icon="['fas', 'bars']" />
          <!-- Hamburger icon -->
        </button>
      </Transition>
      <Transition name="slide">
        <div
          v-if="isMenuOpen"
          class="fixed inset-0 z-40 h-full w-full bg-transparent"
          @click.self="closeMenu"
        >
          <div
            class="fixed top-0 right-0 z-50 flex h-screen w-1/3 flex-col space-y-4 bg-orange-500 pt-8 text-white"
          >
            <a href="#" @click="navigate" class="w-full px-4 py-2 text-2xl md:rounded-md">Blog</a>
            <a href="#" @click="navigate" class="w-full px-4 py-2 text-2xl md:rounded-md"
              >Projects</a
            >
            <a href="#" @click="navigate" class="w-full px-4 py-2 text-2xl md:rounded-md">About</a>
          </div>
        </div>
      </Transition>
    </nav>
    <!-- This is the desktop view navbar -->
    <nav class="hidden flex-row text-2xl text-orange-500 md:flex md:space-x-8 md:pl-36">
      <a
        href="#"
        @click="navigate"
        class="w-full rounded-md px-4 py-2 hover:bg-orange-500 hover:text-white"
        >Blog</a
      >
      <a
        href="#"
        @click="navigate"
        class="w-full rounded-md px-4 py-2 hover:bg-orange-500 hover:text-white"
        >Projects</a
      >
      <a
        href="#"
        @click="navigate"
        class="w-full rounded-md px-4 py-2 hover:bg-orange-500 hover:text-white"
        >About</a
      >
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false, // Tracks whether the menu is open or not
    }
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
  },
}
</script>

<style scoped>
.slide-enter-from {
  transform: translateX(100%);
}
.slide-enter-active {
  transition: all 0.3s ease;
}
.slide-enter-to {
  transform: translateX(0%);
}
.slide-leave-from {
  transform: translateX(0%);
}
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-leave-to {
  transform: translateX(100%);
}

.spiral-collapse-enter-from {
  opacity: 0;
  transform: scale(0) rotate(-180deg);
}
.spiral-collapse-enter-active {
  transition: all 0.2s ease-out;
}
.spiral-collapse-enter-to {
  opacity: 1;
  transform: scale(1) rotate(0deg);
}

.spiral-collapse-leave-from {
  opacity: 1;
  transform: scale(1) rotate(0deg);
}
.spiral-collapse-leave-active {
  transition: all 0.2s ease-in;
}
.spiral-collapse-leave-to {
  opacity: 0;
  transform: scale(0) rotate(360deg);
}
</style>
