<template>
  <section
    class="grid grid-cols-2 items-center gap-[65px] px-5 pb-[50px] max-[1000px]:gap-[30px] max-[1000px]:px-0 max-sm:grid-cols-1 max-sm:gap-7 max-sm:pb-[35px]"
    aria-labelledby="projects-title"
  >
    <div>
      <p class="mb-3.5 text-base font-bold tracking-[.12em] text-[#ff7900] uppercase">Projects</p>
      <h1
        id="projects-title"
        class="font-[Impact,Arial_Narrow,sans-serif] text-[clamp(54px,6.4vw,88px)] leading-[.99] font-black tracking-[.015em] uppercase max-sm:text-[clamp(50px,13vw,76px)]"
      >
        Selected<br />Projects
      </h1>
    </div>
    <div
      class="mt-[30px] border-l-2 border-[#ff7900] pl-[54px] max-[1000px]:pl-7 max-sm:mt-0 max-sm:pl-5 [&>p]:max-w-[430px] [&>p]:text-base [&>p]:leading-[1.6] [&>p]:tracking-[.045em]"
    >
      <p>
        A collection of web applications and websites I’ve built, from lead-generation sites to
        custom tools and experiments.
      </p>
      <ul
        class="mt-7 flex justify-between gap-5 max-sm:gap-3 [&>li]:flex [&>li]:flex-col [&>li]:text-base [&>li]:leading-tight max-sm:[&>li]:text-sm"
      >
        <li>
          <span
            class="mb-3.5 block size-[29px] text-[26px] leading-[29px] text-[#ff7900]"
            aria-hidden="true"
            >&lt;/&gt;</span
          ><strong>6+</strong><span>Projects</span>
        </li>
        <li>
          <svg
            class="mb-3.5 block size-[29px] text-[26px] leading-[29px] text-[#ff7900]"
            viewBox="0 0 32 32"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            aria-hidden="true"
          >
            <path d="m3 10 13-7 13 7-13 7-13-7Zm0 7 13 7 13-7M3 24l13 7 13-7" /></svg
          ><strong>Full Stack</strong><span>Development</span>
        </li>
        <li>
          <svg
            class="mb-3.5 block size-[29px] text-[26px] leading-[29px] text-[#ff7900]"
            viewBox="0 0 32 32"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            aria-hidden="true"
          >
            <path
              d="M12 21 8 17C13 6 22 3 29 3c0 7-3 16-14 21l-3-3Zm-4-4H3l5-8h7m0 15v5l8-5v-7M5 23l-3 7 7-3"
            />
            <circle cx="22" cy="10" r="3" /></svg
          ><strong>Real-World</strong><span>Solutions</span>
        </li>
      </ul>
    </div>
  </section>
</template>
