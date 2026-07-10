<template>
  <section
    class="contact-fire relative isolate flex min-h-[60vh] w-full items-center overflow-hidden px-6 py-16 text-white lg:py-30"
  >
    <div class="relative z-10 mx-auto flex max-w-3xl flex-col items-start gap-8">
      <div class="space-y-5">
        <p class="font-mono text-sm font-semibold tracking-widest text-orange-400 uppercase">
          Contact
        </p>
        <h1 class="text-4xl font-extrabold text-white sm:text-5xl">Let's work together.</h1>
        <p class="max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
          For project inquiries, collaboration ideas, or anything you think I should see, send me an
          email and I will get back to you as soon as possible.
        </p>
      </div>

      <div class="flex flex-col items-start gap-4">
        <a
          href="mailto:developer@bayardolopez.com?subject=Portfolio%20Inquiry"
          class="inline-flex items-center gap-3 rounded-full bg-orange-500 px-7 py-3 font-semibold text-white shadow-lg transition duration-300 hover:bg-orange-600 active:scale-95"
        >
          <font-awesome-icon :icon="['fas', 'envelope']" />
          Email Me
        </a>
        <a
          href="mailto:developer@bayardolopez.com"
          class="text-lg font-semibold text-white underline decoration-orange-500 underline-offset-6 transition hover:text-orange-400"
        >
          developer@bayardolopez.com
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-fire {
  background:
    radial-gradient(circle at 18% 100%, rgba(255, 107, 0, 0.32), transparent 34%),
    radial-gradient(circle at 76% 104%, rgba(255, 183, 77, 0.22), transparent 30%),
    linear-gradient(135deg, #070707 0%, #111 48%, #170b05 100%);
}

.contact-fire::before {
  content: '';
  position: absolute;
  inset: auto -12% -42% -12%;
  height: 70%;
  background:
    radial-gradient(ellipse at 28% 82%, rgba(255, 75, 0, 0.34), transparent 34%),
    radial-gradient(ellipse at 50% 70%, rgba(255, 135, 36, 0.28), transparent 36%),
    radial-gradient(ellipse at 68% 90%, rgba(255, 199, 89, 0.18), transparent 28%);
  filter: blur(28px);
  opacity: 0.8;
  pointer-events: none;
}

.contact-fire::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, transparent 0%, rgba(255, 129, 35, 0.06) 48%, transparent 72%),
    radial-gradient(circle at 44% 86%, rgba(255, 231, 161, 0.08), transparent 22%),
    linear-gradient(to top, rgba(10, 4, 0, 0.32), transparent 45%);
  mix-blend-mode: screen;
  opacity: 0.7;
  pointer-events: none;
}
</style>
