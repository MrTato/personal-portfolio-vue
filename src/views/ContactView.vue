<script setup>
import * as Sentry from '@sentry/vue'
import SuccessModal from '@/components/shared/SuccessModal.vue'
</script>

<template>
  <section class="bg-[#0d0d0d] px-6 py-10 text-white lg:py-30">
    <div class="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 lg:grid-cols-2">
      <!-- Contact Info -->
      <div class="space-y-9">
        <h2 class="text-3xl font-extrabold text-orange-400">Get in Touch</h2>
        <p class="text-base text-gray-300">
          Feel free to reach out by filling out the form — I’ll get back to you as soon as possible.
        </p>
        <p class="text-sm text-gray-400">Or send an email directly:</p>
        <p class="text-xl font-semibold text-white">
          <a href="mailto:bayardo@example.com" class="hover:underline"
            >developer@bayardolopez.com</a
          >
        </p>
      </div>
      <!-- Contact Form -->
      <form class="space-y-6" @submit.prevent="submitForm">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <input
            type="text"
            v-model="form.name"
            placeholder="Your name*"
            required
            class="w-full rounded bg-[#181818] p-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />
          <input
            type="email"
            v-model="form.email"
            placeholder="Your email*"
            required
            class="w-full rounded bg-[#181818] p-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />
        </div>
        <input
          type="tel"
          v-model="form.phone"
          placeholder="Your phone"
          class="w-full rounded bg-[#181818] p-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:outline-none"
        />
        <textarea
          v-model="form.message"
          rows="5"
          placeholder="Message"
          required
          class="w-full rounded bg-[#181818] p-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:outline-none"
        ></textarea>

        <button
          type="submit"
          class="rounded-full bg-orange-500 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-orange-600 active:scale-95"
        >
          Send Message
        </button>
      </form>
    </div>

    <SuccessModal :show="showSuccess" @toggle-success-modal="onToggleSuccessModal" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: '',
      },
      showSuccess: false,
      showFailure: true,
    }
  },
  methods: {
    onToggleSuccessModal() {
      this.showSuccess = false
    },
    async submitForm() {
      let response
      if (import.meta.env.MODE === 'development') {
        try {
          response = await this.$axios.post('/contact/', this.form)

          if (response.status !== 200 && response.status !== 201) {
            throw new Error(response.data)
          }
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error(error)
        }
      } else {
        try {
          // Get token from reCAPTCHA v3
          const token = await this.$recaptcha('contact_form')

          // Prepare form payload
          const payload = {
            ...this.form,
            recaptchaToken: token,
          }

          // Send with Axios
          response = await this.$axios.post('/contact/', payload)

          if (response.status !== 200 && response.status !== 201) {
            throw new Error(response.data)
          }
        } catch (error) {
          Sentry.captureException(new Error(error))
        }
      }

      if (response.status === 200 || response.status === 201) {
        this.showSuccess = true

        this.form = {
          name: '',
          email: '',
          phone: '',
          message: '',
        }
      }
    },
  },
}
</script>
