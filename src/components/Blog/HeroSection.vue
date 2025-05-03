<template>
  <section
    class="relative h-[400px] w-screen overflow-hidden sm:h-[500px] md:h-[600px] lg:w-3/5 lg:rounded-b-4xl"
  >
    <!-- Slides -->
    <div
      class="flex h-full"
      :class="{
        'transition-transform duration-700 ease-in-out': areTransitionsOn,
      }"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(slide, index) in circularSlides"
        :key="index"
        class="flex h-full min-w-full items-center justify-center bg-cover bg-center md:justify-start"
        :style="{ backgroundImage: `url(${slide.backgroundImage})` }"
      >
        <div
          class="bg-opacity-70 mx-4 max-w-full rounded-lg bg-black p-6 shadow-2xl backdrop-blur-md sm:mx-8 sm:max-w-md sm:p-8 md:ml-16"
        >
          <p class="mb-2 font-mono text-xs tracking-widest text-orange-400 uppercase sm:text-sm">
            {{ slide.date }}
          </p>
          <h2 class="mb-4 text-2xl leading-tight font-bold text-white sm:text-3xl md:text-4xl">
            {{ slide.title }}
          </h2>
          <p class="mb-6 text-sm text-gray-300 sm:text-base">
            {{ slide.excerpt }}
          </p>

          <RouterLink
            :to="slide.link"
            class="group inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-2 text-sm font-semibold text-white shadow-lg transition duration-300 ease-in-out hover:bg-orange-600 hover:shadow-xl active:scale-95"
          >
            Read Full Post
            <font-awesome-icon
              :icon="['fas', 'arrow-right']"
              class="transition-transform duration-300 group-hover:translate-x-1"
            />
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Navigation Dots -->
    <div class="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
      <button
        v-for="(slide, index) in slides"
        :key="index"
        @click="goToSlide(index)"
        :class="[
          'h-3 w-3 rounded-full transition-all duration-300',
          currentIndex === index
            ? 'scale-110 bg-orange-500'
            : 'bg-gray-400 hover:scale-110 hover:bg-orange-500',
        ]"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroGallery',
  data() {
    return {
      currentIndex: 0,
      interval: null,
      areTransitionsOn: true,
      slides: [
        {
          backgroundImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
          date: 'April 30, 2025',
          title: 'Vue 3 Composition API Mastery',
          excerpt: 'Learn how to harness the power of Vue 3 with real-world examples.',
          link: '/blog/vue-composition-api',
        },
        {
          backgroundImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
          date: 'May 1, 2025',
          title: 'CSS Grid Layouts for Developers',
          excerpt: 'Explore complex layouts made easy with modern CSS Grid tricks.',
          link: '/blog/css-grid-layouts',
        },
        {
          backgroundImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
          date: 'May 2, 2025',
          title: 'TailwindCSS Tips and Tricks',
          excerpt: 'Style your app with elegance and efficiency using Tailwind.',
          link: '/blog/tailwind-tips',
        },
      ],
    }
  },
  computed: {
    circularSlides() {
      return [...this.slides, this.slides[0]]
    },
  },
  mounted() {
    this.startAutoSlide()
  },
  beforeUnmount() {
    clearInterval(this.interval)
  },
  methods: {
    goToSlide(index) {
      this.areTransitionsOn = true
      this.currentIndex = index
      clearInterval(this.interval)
    },
    startAutoSlide() {
      this.interval = setInterval(() => {
        this.areTransitionsOn = true
        this.currentIndex++
        if (this.currentIndex === this.circularSlides.length - 1) {
          setTimeout(() => {
            this.areTransitionsOn = false
            this.currentIndex = 0
          }, 700)
        }
      }, 5000)
    },
  },
}
</script>
