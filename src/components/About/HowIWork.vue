<template>
  <section class="bg-[#121212] px-6 py-16 text-white md:px-12 lg:px-32">
    <h2 class="mb-16 text-center text-3xl font-bold md:text-4xl">How I Work</h2>

    <div class="hidden md:grid md:grid-cols-3 md:gap-8">
      <div v-for="(item, index) in values" :key="index" class="contents">
        <!-- Left: Core Value -->
        <div class="flex items-start justify-end pr-6">
          <h3 class="text-right text-lg font-semibold text-gray-300">
            {{ item.title }}
          </h3>
        </div>

        <!-- Center: Timeline Dot and Line -->
        <div class="relative flex justify-center">
          <span class="z-10 h-4 w-4 rounded-full bg-orange-500"></span>
          <!-- Vertical line, except for last item -->
          <div
            v-if="index !== values.length - 1"
            class="absolute top-4 left-1/2 h-full w-px -translate-x-1/2 bg-gray-700"
          ></div>
        </div>

        <!-- Right: Description -->
        <div class="pl-6 text-justify text-gray-300">
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>

    <!-- Mobile stacked layout -->
    <div class="mt-12 space-y-12 md:hidden">
      <div
        v-for="(item, index) in values"
        :key="'mobile-' + index"
        class="flex flex-col items-center space-y-2 text-center"
      >
        <div class="h-4 w-4 rounded-full bg-orange-500"></div>
        <h3 class="text-lg font-semibold text-white">{{ item.title }}</h3>
        <p class="px-4 text-justify text-gray-300">{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HowIWork',
  data() {
    return {
      values: [
        {
          title: 'Business-First Thinking',
          description:
            'I prioritize real-world business value above everything else. That means solving the right problems first and delivering tools that make a measurable difference.',
        },
        {
          title: 'Agile Process',
          description:
            'I work in short, focused sprints to deliver functional software early and often. I believe in validating through working code and adjusting based on real needs.',
        },
        {
          title: 'Clear Communication',
          description:
            'I explain my decisions in plain terms, offer alternatives when needed, and keep clients updated regularly. I believe communication builds trust.',
        },
        {
          title: 'Flexible Collaboration',
          description:
            'Whether working independently or alongside a team, I adapt to the needs of each project. I listen carefully, contribute thoughtfully, and stay aligned with the client’s goals.',
        },
        {
          title: 'Usability over Perfection',
          description:
            'My focus is on building software that works and delivers value. I prioritize usability, UX, and performance — and polish only what matters most.',
        },
      ],
    }
  },
}
</script>
