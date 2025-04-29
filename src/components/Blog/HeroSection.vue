<template>
  <section
    class="flex h-[400px] w-screen items-center justify-center bg-cover bg-center sm:h-[500px] md:h-[600px] md:justify-start lg:w-3/5"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <div
      class="bg-opacity-70 mx-4 max-w-full rounded-lg bg-black p-6 shadow-2xl backdrop-blur-md sm:mx-8 sm:max-w-md sm:p-8 md:ml-16"
    >
      <p class="mb-2 font-mono text-xs tracking-widest text-orange-400 uppercase sm:text-sm">
        {{ date }}
      </p>
      <h1 class="mb-4 text-2xl leading-tight font-bold text-white sm:text-3xl md:text-4xl">
        {{ title }}
      </h1>
      <p class="mb-6 text-sm text-gray-300 sm:text-base">
        {{ excerpt }}
      </p>

      <!-- CTA Button -->
      <RouterLink
        :to="link"
        class="group inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-2 text-sm font-semibold text-white shadow-lg transition duration-300 ease-in-out hover:bg-orange-600 hover:shadow-xl active:scale-95"
      >
        Read Full Post
        <font-awesome-icon
          :icon="['fas', 'arrow-right']"
          class="transition-transform duration-300 group-hover:translate-x-1"
        />
      </RouterLink>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  props: {
    backgroundImage: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: '/',
    },
  },
}
</script>

<style scoped>
/* Optional: smooth text appearance or additional animations could go here */
</style>
