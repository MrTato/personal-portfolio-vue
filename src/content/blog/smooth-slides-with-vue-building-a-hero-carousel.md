## The Hero template

Hero sections are a nice way to grab the attention of users visiting your website. What better than a Hero section gallery that displays multiple spotlighted items. This is what we will design today using the **Vue Options API** and **TailwindCSS**. First we start with the template:

```html
<template>
  <section>
    <div>
      <h2>{{ slide.title }}</h2>
      <p>{{ slide.description }}</p>
    </div>
  </section>
</template>
```

This template does not contain any kind of CSS styling. I'll leave that up to you 😉

This would be the Vue script:

```js
export default {
  props: {
    slide: {
      type: Object,
      default: () => {},
    },
  },
}
```

This would not be the final component definition of course since we want to have an array of slides.

## Animating the gallery

Let's update the template:

```html
<template>
  <section>
    <div
      class="ease-in-out transition-transform duration-700"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div v-for="(slide, index) in slides" :key="index">
        <div>
          <h2>{{ slide.title }}</h2>
          <p>{{ slide.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
```

We've added a `v-for` in order to present each of the slides, and most importantly, we've added an x axis translation that will obey the current index being displayed. This basically means the slides will be sitting one next to the other but only the current slide will be displayed at a time. We need to update the component's script to reflect this logic.

```js
export default {
  props: {
    slides: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentIndex: 0,
      interval: null,
    }
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
    startAutoSlide() {
      this.interval = setInterval(() => {
        if (this.currentIndex < this.slides.length - 1) {
          this.currentIndex++
        } else {
          this.currentIndex = 0
        }
      }, 5000)
    },
  },
}
```

The slide Object is now an Array of Objects, but most importantly, Vue is continuously updating the value of `currentIndex` using an interval. This is what triggers the sliding animation.

However, you will notice an issue. Once the slides reach their end, the current index will be reset to 0. The behavior that the x translation will follow is to translate the element back to its current position, making the entire gallery slide from right to left. If this is your desired behavior, great! But...

### Hack: Making the gallery always go left to right

We will have to add the first slide to the end of the queue. The first slide would be present at the beginning and end of the queue. Once the gallery is finished, we snap the last slide to become the first while keeping animations turned on. Since the last slide is the first slide, this change will be imperceptible to the user visiting our website. We start by updating the template:

```html
<template>
  <section>
    <div
      :class="{
        'transition-transform duration-700 ease-in-out': areTransitionsOn,
      }"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div v-for="(slide, index) in circularSlides" :key="index">
        <div>
          <h2>{{ slide.title }}</h2>
          <p>{{ slide.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
```

#### Important changes include:

1. The transition classes will now be applied based on a property, so that we can shut them down when we make the last-to-first element switch.
2. We are not using slides in `v-for` anymore. We will use a computed property that adds the first slide to the end of the gallery like so:

```js
export default {
  props: {
    slides: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentIndex: 0,
      interval: null,
      areTransitionsOn: true,
    }
  },
  computed: {
    circularSlides() {
      if (this.slides.length > 0) {
        return [...this.slides, this.slides[0]]
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
```

What changed? The key is that when the current index reaches the end, in less than a second and with transitions off, the `currentIndex` will be reset to 0. Go ahead and give it a try!

I hope this helped you and thank you for reading. 😊
