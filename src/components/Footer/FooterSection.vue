<template>
  <div class="gap-8 space-y-10 md:grid md:grid-cols-4 md:space-y-0 md:px-18 lg:w-2/3">
    <!-- Bio -->
    <div class="md:col-span-1">
      <h2 class="text-2xl font-bold text-orange-500">Bayardo López</h2>
      <p class="mt-2 text-sm italic">Data Developer</p>
    </div>

    <!-- Navigation -->
    <nav aria-label="Footer navigation" class="md:col-span-1">
      <h3 class="mb-2 text-lg font-semibold text-white">Navigation</h3>
      <ul class="space-y-1">
        <li><RouterLink to="/blog" class="transition hover:text-orange-400">Blog</RouterLink></li>
        <li>
          <RouterLink to="/projects" class="transition hover:text-orange-400">Projects</RouterLink>
        </li>
        <li>
          <RouterLink to="/contact" class="transition hover:text-orange-400">Contact</RouterLink>
        </li>
        <li><RouterLink to="/about" class="transition hover:text-orange-400">About</RouterLink></li>
        <li>
          <RouterLink to="/services" class="transition hover:text-orange-400">Services</RouterLink>
        </li>
      </ul>
    </nav>

    <!-- Social Links -->
    <div class="md:col-span-1">
      <h3 class="mb-2 text-lg font-semibold text-white">Find Me</h3>
      <div class="flex space-x-5 text-3xl" aria-label="Social media links">
        <a
          href="https://github.com/MrTato"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          class="transition-transform duration-300 hover:scale-120 hover:text-[#333]"
        >
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a
          href="https://www.linkedin.com/in/bayardo-lopez"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          class="transition-transform duration-300 hover:scale-120 hover:text-[#0077B5]"
        >
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
        <a
          href="mailto:developer@bayardolopez.com"
          aria-label="Email"
          class="transition-transform duration-300 hover:scale-120 hover:text-red-500"
        >
          <font-awesome-icon :icon="['fas', 'envelope']" />
        </a>
      </div>
    </div>

    <!-- Contact CTA -->
    <div class="md:col-span-1">
      <h3 class="mb-2 text-xl font-bold text-white">Let’s work together</h3>
      <a
        href="mailto:developer@bayardolopez.com"
        class="mt-2 inline-block rounded border border-orange-500 px-4 py-2 text-orange-500 transition hover:bg-orange-500 hover:text-black"
      >
        Get in Touch
      </a>
    </div>

    <!-- Full Width Section -->
    <div class="space-y-6 border-t border-gray-700 pt-6 md:col-span-4">
      <!-- Featured Project Teaser -->
      <div class="text-sm">
        <h4 class="mb-1 font-semibold text-orange-400">Featured Project</h4>
        <p class="text-white">
          Check out my latest project:
          <RouterLink to="/projects/latest" class="underline hover:text-orange-400">
            Smart Portfolio Generator
          </RouterLink>
        </p>
      </div>

      <!-- GitHub Contribution Chart -->
      <div>
        <h4 class="mb-2 font-semibold text-orange-400">GitHub Contributions</h4>
        <img
          src="https://ghchart.rshah.org/MrTato"
          alt="GitHub contribution chart for MrTato"
          class="w-full"
        />
      </div>

      <!-- Signature -->
      <div class="mt-6 text-center">
        <p class="text-sm text-gray-500">
          © {{ getCurrentYear }} Bayardo López. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterSection',
  data() {
    return {
      githubUsername: 'MrTato',
    }
  },
  computed: {
    githubChartUrl() {
      return `https://ghchart.rshah.org/${this.githubUsername}`
    },
    getCurrentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>
