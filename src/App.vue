<script setup>
import { RouterView } from 'vue-router'
import DesktopNavBar from '@/components/Header/DesktopNavBar.vue'
import MobileNavSideBar from '@/components/Header/MobileNavSideBar.vue'
import SiteLogo from '@/components/Header/SiteLogo.vue'
import FooterSection from './components/Footer/FooterSection.vue'
</script>

<template>
  <header
    class="flex w-full items-center justify-between p-8 md:justify-around md:bg-[#181818] md:p-4"
  >
    <SiteLogo />
    <!-- The mobile nav side bar controls opening and closing the menu -->
    <MobileNavSideBar />
    <!-- The desktop nav bar is only visible starting on tablet devices -->
    <DesktopNavBar />
  </header>
  <main class="flex justify-center">
    <RouterView />
  </main>
  <footer class="flex justify-center bg-[#181818] px-6 py-10 text-gray-300">
    <FooterSection />
  </footer>
</template>
