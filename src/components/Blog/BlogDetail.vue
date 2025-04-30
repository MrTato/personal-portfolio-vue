<template>
  <section class="mx-auto max-w-4xl px-4 py-8">
    <!-- Cover Image -->
    <img
      v-if="coverImage"
      :src="coverImage"
      alt="Cover Image"
      class="mb-6 h-auto w-full rounded-xl"
    />

    <!-- Title and Metadata -->
    <div class="mb-6">
      <h1
        class="mb-2 flex h-16 content-center items-center justify-between bg-orange-500 pr-8 pl-3 text-4xl font-bold text-white"
      >
        <span>{{ title }}</span
        ><span><font-awesome-icon :icon="['fab', 'vuejs']" /></span>
      </h1>
      <p class="text-sm text-gray-400">
        By <span class="font-medium text-white">{{ author }}</span> • {{ date }}
      </p>
    </div>

    <!-- Blog Content -->
    <div
      :class="[
        'prose relative rounded-lg p-4 transition-all',
        contentTheme === 'dark' ? 'bg-[#1e1e1e] text-gray-200' : 'bg-[#F5F5DB] text-gray-800',
      ]"
    >
      <!-- Theme Toggle Icon -->
      <button
        @click="toggleContentTheme"
        class="absolute top-4 right-4 transition-transform duration-300 hover:scale-130"
        aria-label="Toggle Theme"
      >
        <transition name="fade" mode="out-in">
          <font-awesome-icon
            :key="contentTheme"
            :icon="contentTheme === 'dark' ? ['fas', 'sun'] : ['fas', 'moon']"
            class="text-xl"
            :class="contentTheme === 'dark' ? 'text-orange-500' : 'text-gray-400'"
          />
        </transition>
      </button>
      <p>{{ content }}</p>
    </div>

    <!-- Next Post -->
    <div v-if="nextPost" class="mt-12">
      <h2 class="mb-2 text-xl font-semibold text-white">Up Next</h2>
      <RouterLink
        :to="`/blog/${nextPost.slug}`"
        class="block rounded border-l-4 border-orange-500 bg-[#111] p-4 transition hover:bg-[#1a1a1a]"
      >
        <h3 class="font-bold text-orange-400">{{ nextPost.title }}</h3>
        <p class="mt-1 text-sm text-gray-400">{{ nextPost.excerpt }}</p>
      </RouterLink>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlogDetail',
  data() {
    return {
      title: 'The Future of Vue in 2025',
      author: 'Bayardo López',
      date: 'April 26, 2025',
      coverImage: 'https://placehold.co/1200x500',
      content: `This is a sample plain-text blog content. It is not rendered in markdown just yet.`,
      tags: ['vue', 'webdev', '2025'],
      contentTheme: 'dark',
      nextPost: {
        title: 'Why Composition API Matters',
        excerpt: 'Learn why Vue’s Composition API is a game changer...',
        slug: 'composition-api-matters',
      },
      recentPosts: [
        { title: 'Understanding Reactivity in Vue', slug: 'vue-reactivity' },
        { title: 'TailwindCSS Tips & Tricks', slug: 'tailwind-tips' },
      ],
    }
  },
  methods: {
    toggleContentTheme() {
      this.contentTheme = this.contentTheme === 'dark' ? 'light' : 'dark'
    },
  },
}
</script>

<style scoped>
.prose {
  line-height: 1.75;
  font-size: 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
