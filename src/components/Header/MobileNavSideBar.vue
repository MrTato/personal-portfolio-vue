<template>
  <nav class="flex flex-col md:hidden">
    <Transition name="spiral-collapse">
      <BarsButton @click="toggleMenu" v-if="!isMenuOpen" />
    </Transition>
    <Transition name="slide">
      <SideBar v-if="isMenuOpen" @click.self="closeMenu" @navigation="closeMenu" />
    </Transition>
  </nav>
</template>

<script>
import BarsButton from './BarsButton.vue'
import SideBar from './SideBar.vue'

// All data and methods related to isMenuOpen are used for mobile devices
export default {
  components: {
    BarsButton,
    SideBar,
  },
  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
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
