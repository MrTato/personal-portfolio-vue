<template>
  <transition name="fade" @click="overlayClicked">
    <div
      v-if="show"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-12"
    >
      <div
        class="w-full max-w-md rounded-xl border-l-4 border-green-500 bg-[#181818] p-6 shadow-2xl"
      >
        <div class="flex items-center gap-4">
          <font-awesome-icon :icon="['fas', 'circle-check']" class="text-3xl text-green-500" />
          <div>
            <h2 class="text-xl font-bold text-green-500">Success</h2>
            <p class="mt-1 text-gray-300">Your message has been sent. I’ll be in touch soon.</p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    overlayClicked() {
      this.$emit('toggle-success-modal')
    },
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
