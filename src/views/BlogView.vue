<script setup>
import BlogPosts from '@/components/BlogPosts.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
  <header
    class="fixed top-0 w-full p-8 md:p-4 flex items-center justify-between md:justify-center md:bg-[#181818]"
  >
    <h1 class="text-3xl text-orange-500 font-sans">
      Bayardo <span class="text-white">López</span>
    </h1>

    <!-- This is the mobile view navbar -->
    <nav class="flex flex-col md:hidden">
      <Transition name="spiral-collapse">
        <button
          @click="toggleMenu"
          v-if="!isMenuOpen"
          class="text-orange-500 text-3xl transition-all duration-300"
        >
          <font-awesome-icon :icon="['fas', 'bars']" />
          <!-- Hamburger icon -->
        </button>
      </Transition>
      <Transition name="slide">
        <div
          v-if="isMenuOpen"
          class="fixed inset-0 w-full h-full bg-transparent z-40"
          @click.self="closeMenu"
        >
          <div
            class="fixed top-0 right-0 h-screen w-1/3 z-50 bg-orange-500 text-white space-y-4 pt-8 flex flex-col"
          >
            <a href="#" @click="navigate" class="text-2xl py-2 px-4 md:rounded-md w-full">Blog</a>
            <a href="#" @click="navigate" class="text-2xl py-2 px-4 md:rounded-md w-full"
              >Projects</a
            >
            <a href="#" @click="navigate" class="text-2xl py-2 px-4 md:rounded-md w-full">About</a>
          </div>
        </div>
      </Transition>
    </nav>
    <!-- This is the desktop view navbar -->
    <nav class="md:flex flex-row md:space-x-8 md:pl-36 hidden">hello world</nav>
    <!--
    <nav class="flex flex-col md:flex-row md:space-x-8 md:pl-36">
      <div class="md:hidden">
        <button
          @click="toggleMenu"
          v-if="!isMenuOpen"
          class="text-orange-500 text-3xl transition-all duration-300"
        >
          <i class="fa fa-bars"></i>
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
    </nav> -->
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
