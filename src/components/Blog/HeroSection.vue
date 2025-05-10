<template>
  <section
    class="relative h-[400px] w-screen overflow-hidden sm:h-[500px] md:h-[600px] lg:w-3/5 lg:rounded-b-4xl"
    aria-label="Featured blog posts"
  >
    <!-- Slides -->
    <div
      class="flex h-full"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
      :class="{
        'transition-transform duration-700 ease-in-out': areTransitionsOn,
      }"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <article
        v-for="(slide, index) in circularSlides"
        :key="index"
        class="flex h-full min-w-full items-center justify-center bg-cover bg-center md:justify-start"
        :style="{ backgroundImage: `url(${slide.cover_image})` }"
        :aria-label="`Featured post ${index + 1}`"
      >
        <div
          class="bg-opacity-70 mx-4 max-w-80 rounded-lg bg-black p-6 shadow-2xl backdrop-blur-md sm:mx-8 sm:max-w-md sm:p-8 md:ml-16"
        >
          <p class="mb-2 font-mono text-xs tracking-widest text-orange-400 uppercase sm:text-sm">
            <time :datetime="slide.updated_at">{{ slide.updated_at }}</time>
          </p>
          <h2 class="mb-4 text-2xl leading-tight font-bold text-white sm:text-3xl md:text-4xl">
            {{ slide.title }}
          </h2>
          <p class="mb-6 line-clamp-3 text-sm text-ellipsis text-gray-300 sm:text-base">
            {{ slide.description }}
          </p>

          <RouterLink
            :to="`/blog/${slide.slug}`"
            class="group inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-2 text-sm font-semibold text-white shadow-lg transition duration-300 ease-in-out hover:bg-orange-600 hover:shadow-xl active:scale-95"
          >
            Read Full Post
            <font-awesome-icon
              :icon="['fas', 'arrow-right']"
              class="transition-transform duration-300 group-hover:translate-x-1"
            />
          </RouterLink>
        </div>
      </article>
    </div>

    <!-- Navigation Dots -->
    <div
      v-if="this.slides.length > 1"
      class="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-4"
      role="tablist"
      aria-label="Slide navigation"
    >
      <button
        v-for="(slide, index) in slides"
        :key="index"
        @click="goToSlide(index + 1)"
        :aria-label="`Go to slide ${index + 1}`"
        :aria-current="currentIndex === index ? 'true' : undefined"
        :class="[
          'h-4 w-4 rounded-full transition-all duration-300',
          currentIndex === index + 1
            ? 'scale-110 bg-orange-500'
            : 'bg-gray-400 hover:scale-110 hover:bg-orange-500',
        ]"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentIndex: 1,
      interval: null,
      areTransitionsOn: true,
      touchStartX: 0,
      touchEndX: 0,
    }
  },
  computed: {
    circularSlides() {
      if (this.slides.length > 0) {
        const correctDateSlides = this.slides.map((slide) => ({
          ...slide,
          updated_at: slide.updated_at.split('T')[0], // keep only the date part
        }))
        return [
          correctDateSlides[correctDateSlides.length - 1],
          ...correctDateSlides,
          correctDateSlides[0],
        ]
      }
      return []
    },
  },
  mounted() {
    if (this.slides.length > 1) {
      this.startAutoSlide()
    }
  },
  beforeUnmount() {
    if (this.slides.length > 1) {
      clearInterval(this.interval)
    }
  },
  methods: {
    goToSlide(index) {
      this.areTransitionsOn = true
      this.currentIndex = index
      clearInterval(this.interval)
      if (this.currentIndex === this.circularSlides.length - 1) {
        setTimeout(() => {
          this.areTransitionsOn = false
          this.currentIndex = 1
        }, 700)
      } else if (this.currentIndex === 0) {
        setTimeout(() => {
          this.areTransitionsOn = false
          this.currentIndex = this.circularSlides.length - 2
        }, 700)
      }
    },
    startAutoSlide() {
      this.interval = setInterval(() => {
        this.areTransitionsOn = true
        this.currentIndex++
        if (this.currentIndex === this.circularSlides.length - 1) {
          setTimeout(() => {
            this.areTransitionsOn = false
            this.currentIndex = 1
          }, 700)
        }
      }, 10000)
    },
    handleTouchStart(event) {
      this.touchStartX = event.changedTouches[0].clientX
    },
    handleTouchEnd(event) {
      this.touchEndX = event.changedTouches[0].clientX
      this.handleSwipe()
    },
    handleSwipe() {
      const swipeDistance = this.touchEndX - this.touchStartX
      const threshold = 50 // minimum swipe distance in pixels

      if (Math.abs(swipeDistance) > threshold) {
        let nextIndex = this.currentIndex
        if (swipeDistance < 0) {
          nextIndex = this.currentIndex < this.circularSlides.length - 1 ? this.currentIndex + 1 : 0
        } else {
          nextIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.circularSlides.length - 1
        }
        this.goToSlide(nextIndex)
      }
    },
  },
}
</script>
