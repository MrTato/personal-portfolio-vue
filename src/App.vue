<script setup>
import { RouterView } from 'vue-router'
import DesktopNavBar from '@/components/Header/DesktopNavBar.vue'
import MobileNavSideBar from '@/components/Header/MobileNavSideBar.vue'
import SiteLogo from '@/components/Header/SiteLogo.vue'
</script>

<template>
  <header
    class="fixed top-0 flex w-full items-center justify-between p-8 md:justify-center md:bg-[#181818] md:p-4"
  >
    <SiteLogo />

    <!-- The mobile nav side bar controls opening and closing the menu -->
    <MobileNavSideBar />
    <!-- The desktop nav bar is only visible starting on tablet devices -->
    <DesktopNavBar />
  </header>
  <main class="mt-32 flex justify-center">
    <RouterView />
  </main>
</template>

<style scoped></style>
