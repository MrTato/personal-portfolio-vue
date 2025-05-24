<template>
  <section
    class="relative flex flex-col items-center justify-center overflow-hidden bg-[#0D0D0D] px-6 py-20 text-center text-white"
  >
    <!-- Profile Image -->
    <img
      :src="profileImage"
      alt="Profile"
      class="animate-bounce-slow mb-6 h-36 w-36 rounded-full border-4 border-orange-500 object-cover shadow-lg"
    />

    <!-- Title -->
    <h1 class="text-4xl font-extrabold text-orange-500 sm:text-5xl">
      {{ name }}
    </h1>

    <!-- Subtitle -->
    <h2 class="mt-2 text-xl font-semibold tracking-wide text-gray-300 sm:text-2xl">
      {{ profession }}
    </h2>

    <!-- Description -->
    <p
      class="mt-6 max-w-xl text-justify text-base leading-relaxed tracking-wide text-gray-300 sm:px-0 sm:text-lg"
    >
      {{ description }}
    </p>

    <!-- Decorative background effects -->
    <div
      class="animate-pulse-fast absolute -top-16 -left-16 h-64 w-64 rounded-full bg-orange-500 opacity-10 blur-3xl"
    ></div>
    <div
      class="animate-pulse-slow absolute right-0 -bottom-24 h-64 w-64 rounded-full bg-orange-700 opacity-10 blur-3xl"
    ></div>
  </section>
</template>

<script>
export default {
  props: {
    profileImage: {
      type: String,
      default: '/profile.jpg', // You can change this to your uploaded image path
    },
    name: {
      type: String,
      default: 'Bayardo López',
    },
    profession: {
      type: String,
      default: 'Web Developer',
    },
    description: {
      type: String,
      default:
        'Passionate about building sleek, performant web experiences with Vue, Tailwind, and Django. Focused on bringing clean design and modern functionality to every project.',
    },
  },
}
</script>

<style scoped>
@keyframes bounce-slow {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}
.animate-bounce-slow {
  animation: bounce-slow 2.5s infinite;
}

@keyframes pulse-fast {
  0%,
  100% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.3;
  }
}
.animate-pulse-fast {
  animation: pulse-fast 3s ease-in-out infinite;
}
.animate-pulse-slow {
  animation: pulse-fast 6s ease-in-out infinite;
}
</style>
