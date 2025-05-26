<template>
  <div class="w-50">
    <button
      type="submit"
      :disabled="isSending"
      class="relative inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-orange-600 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
    >
      <!-- Text -->
      <span
        class="transition-all duration-300 ease-in-out"
        :class="isSending ? 'scale-90 opacity-0' : 'scale-100 opacity-100'"
      >
        Send Message
      </span>

      <!-- Spinner (kept offscreen when hidden) -->
      <svg
        class="absolute h-5 w-5 animate-spin text-white transition-opacity duration-300 ease-in-out"
        :class="isSending ? 'opacity-100' : 'opacity-0'"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 100 16v-4l-3.5 3.5L12 24v-4a8 8 0 01-8-8z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    isSending: {
      type: Boolean,
      required: true,
    },
  },
}
</script>
