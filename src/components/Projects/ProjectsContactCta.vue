<template>
  <section
    class="mt-12 grid grid-cols-2 items-center gap-[55px] border-t border-[#3a3a3a] px-10 pt-[35px] max-[1000px]:gap-[25px] max-[1000px]:px-0 max-sm:mt-[35px] max-sm:grid-cols-1 [&_a]:inline-flex [&_a]:items-center [&_a]:gap-2.5 [&_a]:rounded-[30px] [&_a]:bg-[#ff7900] [&_a]:px-8 [&_a]:py-[11px] [&_a]:font-bold [&_a:hover]:bg-[#e66c00] [&_p]:mb-5 [&_p]:text-xl max-sm:[&_p]:text-lg [&>div]:border-l [&>div]:border-[#454545] [&>div]:pl-[50px] max-[1000px]:[&>div]:pl-[30px] max-sm:[&>div]:border-0 max-sm:[&>div]:pl-5"
    aria-labelledby="cta-title"
  >
    <h2
      id="cta-title"
      class="relative pl-[55px] font-[Impact,Arial_Narrow,sans-serif] text-[clamp(30px,3.6vw,48px)] leading-[1.1] font-black uppercase before:absolute before:top-0 before:left-[17px] before:h-full before:w-[5px] before:skew-x-[-24deg] before:bg-[#ff7900] before:content-[''] max-sm:text-4xl"
    >
      Have a project<br />in mind?
    </h2>
    <div>
      <p>Let's build something great together.</p>
      <RouterLink to="/contact"
        ><font-awesome-icon :icon="['fas', 'envelope']" />Get in Touch</RouterLink
      >
    </div>
  </section>
</template>
