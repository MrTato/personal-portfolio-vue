<template>
  <section class="bg-[#0d0d0d] px-6 py-15 text-center text-white lg:py-24">
    <div class="mx-auto max-w-3xl space-y-8">
      <!-- Section Title -->
      <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
        Want to know more about my experience?
      </h2>
      <p class="text-lg text-gray-400 sm:text-xl">
        Download my CV and get the full breakdown of my skills, projects, and professional journey.
      </p>

      <!-- Download Button -->
      <a
        :href="cvFile"
        download
        class="inline-block rounded-lg bg-red-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition duration-300 ease-in-out hover:bg-red-700 hover:shadow-xl active:scale-95"
      >
        Download CV
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DownloadCVSection',
  props: {
    cvFile: {
      type: String,
      default: '/public/Bayardo Lopez Web Developer CV.pdf',
    },
  },
}
</script>
