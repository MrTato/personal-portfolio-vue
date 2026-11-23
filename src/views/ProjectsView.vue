<script setup>
import { computed, ref } from 'vue'

const categories = ['All', 'Websites', 'Web Apps', 'Experiments']
const activeCategory = ref('All')
const sortOrder = ref('newest')
// Placeholder content and ordering, ready for real project data.
const projects = [
  {
    slug: 'optimaclean',
    name: 'OptimaClean',
    label: 'Website',
    category: 'Websites',
    description:
      'A lead-generation website for a professional cleaning service, built with Nuxt and Strapi.',
    technologies: ['Nuxt', 'Strapi', 'Netlify'],
    screen: 'cleaning',
    headline: 'Professional Cleaning for Your Home and Business',
    image: 'photo-1600210492486-724fe5c67fb0',
  },
  {
    slug: 'recipe-manager',
    name: 'Recipe Manager',
    label: 'Web App',
    category: 'Web Apps',
    description:
      'A bilingual recipe website with search, categories, servings calculator, and ingredient filters.',
    technologies: ['WordPress', 'Custom Theme', 'ACF'],
    screen: 'recipes',
    headline: 'Simple Recipes for Everyday Cooking',
    image: 'photo-1547592180-85f173990554',
  },
  {
    slug: 'gaming-shop',
    name: 'Gaming Shop',
    label: 'Experiment',
    category: 'Experiments',
    description:
      'An e-commerce concept for a gaming store, exploring modern UI and shopping flows.',
    technologies: ['Nuxt', 'Stripe', 'Tailwind'],
    screen: 'gaming',
    headline: 'Gaming Gear for Every Player',
  },
  {
    slug: 'divein-studio',
    name: 'DiveIn Studio',
    label: 'Web App',
    category: 'Web Apps',
    description: 'A 360° virtual tour platform with an interactive and customizable experience.',
    technologies: ['Angular', 'TypeScript', 'Three.js'],
    screen: 'tours',
    headline: 'Explore in 360°',
    image: 'photo-1515542622106-78bda8ba0e5b',
  },
  {
    slug: 'recipe-editor',
    name: 'Recipe Editor (Plugin)',
    label: 'Plugin',
    category: 'Experiments',
    description:
      'A custom WordPress plugin to create and manage recipes with structured fields and rich media.',
    technologies: ['PHP', 'WordPress', 'ACF'],
    screen: 'editor',
    headline: 'Recipe Editor',
  },
  {
    slug: 'adtech-reporting',
    name: 'AdTech Reporting (ETL)',
    label: 'Data/ETL',
    category: 'Experiments',
    description:
      'Automated data pipelines and reporting for multi-DSP campaigns using Airflow and BigQuery.',
    technologies: ['Airflow', 'BigQuery', 'Python'],
    screen: 'analytics',
    headline: 'Campaign Overview',
  },
]
const visibleProjects = computed(() => {
  const filtered = projects.filter(
    (project) => activeCategory.value === 'All' || project.category === activeCategory.value,
  )
  if (sortOrder.value === 'oldest') return [...filtered].reverse()
  if (sortOrder.value === 'name') return [...filtered].sort((a, b) => a.name.localeCompare(b.name))
  return filtered
})
</script>

<template>
  <div
    class="w-full bg-[#090909] bg-[radial-gradient(ellipse_240px_230px_at_-3%_12%,#a544004a,transparent),radial-gradient(ellipse_240px_200px_at_103%_8%,#a5440038,transparent),radial-gradient(ellipse_270px_230px_at_103%_97%,#ae470050,transparent)] px-[5%] pt-[50px] pb-[68px] text-[#f5f5f5] max-sm:px-5 max-sm:pt-[30px] max-sm:pb-[45px] [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-4 [&_a:focus-visible]:outline-[#ff7900] [&_button:focus-visible]:outline-2 [&_button:focus-visible]:outline-offset-4 [&_button:focus-visible]:outline-[#ff7900] [&_select:focus-visible]:outline-2 [&_select:focus-visible]:outline-offset-4 [&_select:focus-visible]:outline-[#ff7900]"
  >
    <div class="mx-auto max-w-[1200px]">
      <section
        class="grid grid-cols-2 items-center gap-[65px] px-5 pb-[50px] max-[1000px]:gap-[30px] max-[1000px]:px-0 max-sm:grid-cols-1 max-sm:gap-7 max-sm:pb-[35px]"
        aria-labelledby="projects-title"
      >
        <div>
          <p class="mb-3.5 text-base font-bold tracking-[.12em] text-[#ff7900] uppercase">
            Projects
          </p>
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

      <div
        class="mb-[27px] flex items-center justify-between gap-5 border-b border-[#3a3a3a] pb-1 max-sm:flex-wrap max-sm:gap-2"
      >
        <div
          class="flex gap-2 max-sm:w-full max-sm:justify-between max-sm:gap-0"
          role="group"
          aria-label="Filter projects by category"
        >
          <button
            v-for="category in categories"
            :key="category"
            :aria-pressed="activeCategory === category"
            class="cursor-pointer rounded-2xl px-[22px] py-2.5 text-base transition-colors duration-200 max-sm:px-3 max-sm:py-[9px] max-sm:text-sm"
            :class="
              activeCategory === category ? 'bg-[#ff7900] text-[#080808]' : 'hover:bg-[#ffffff12]'
            "
            @click="activeCategory = category"
          >
            {{ category }}
          </button>
        </div>
        <label
          class="flex items-center text-sm whitespace-nowrap max-sm:ml-auto [&_option]:bg-[#171717] [&_select]:cursor-pointer [&_select]:bg-transparent [&_select]:px-1 [&_select]:py-2 [&_select]:font-semibold [&_select]:text-white"
          >Sort by:
          <select v-model="sortOrder" aria-label="Sort projects">
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="name">Name</option>
          </select></label
        >
      </div>

      <section
        class="grid grid-cols-3 gap-[22px] max-[1000px]:grid-cols-2 max-sm:grid-cols-1"
        aria-label="Projects"
        aria-live="polite"
      >
        <article
          v-for="project in visibleProjects"
          :key="project.slug"
          class="flex flex-col overflow-hidden rounded-xl border border-[#343434] bg-[linear-gradient(125deg,#181818,#101010)] transition-[border-color,transform] duration-200 hover:-translate-y-[3px] hover:border-[#98602f] motion-reduce:transition-none"
        >
          <RouterLink
            :to="`/projects/${project.slug}`"
            class="relative block h-[190px] overflow-hidden border-b border-[#383838] max-sm:h-[220px] min-[1400px]:h-[210px]"
            tabindex="-1"
            aria-hidden="true"
            :class="{
              'bg-[linear-gradient(110deg,#75634b,#b1a38e,#37312c)]': project.screen === 'recipes',
              'bg-[radial-gradient(ellipse_at_50%_20%,#4f5557,#151a1c)]':
                project.screen === 'gaming',
              'bg-[linear-gradient(120deg,#5b5246,#9c8f7d)]': project.screen === 'tours',
              'bg-[radial-gradient(ellipse_at_30%_10%,#888,#454440_48%,#242423)]': ![
                'recipes',
                'gaming',
                'tours',
              ].includes(project.screen),
            }"
          >
            <div
              class="absolute top-[10%] left-[10%] h-[85%] w-4/5 [transform:perspective(650px)_rotateY(-9deg)_rotateZ(2deg)]"
            >
              <div
                class="h-full overflow-hidden rounded-t-[9px] rounded-b-[3px] border-[7px] border-[#0b0b0b] bg-[#111] shadow-[0_4px_16px_#0009]"
              >
                <div
                  class="flex justify-between gap-2 px-2 py-[7px] text-[7px] [&>span]:text-[4px] [&>span]:whitespace-nowrap"
                  :class="
                    ['gaming', 'tours'].includes(project.screen)
                      ? 'bg-[#0b1119] text-white'
                      : project.screen === 'analytics'
                        ? 'bg-[#151c23] text-[#bbb]'
                        : 'bg-[#faf9f4] text-[#171717]'
                  "
                >
                  <b>{{ project.screen === 'recipes' ? 'Bayardo’s Kitchen' : project.name }}</b
                  ><span>Discover About Contact</span>
                </div>
                <div
                  v-if="project.screen === 'editor'"
                  class="flex h-full bg-[#eee] text-[6px] text-[#444] [&_h3]:mb-[5px] [&_h3]:text-[10px] [&_h3]:font-bold [&_i]:mt-[7px] [&_i]:block [&_i]:h-[9px] [&_i]:border [&_i]:border-[#ddd] [&_i]:bg-white [&>aside]:w-[27%] [&>aside]:bg-[#192531] [&>aside]:p-2.5 [&>aside]:text-[#d6dce3] [&>div]:flex-1 [&>div]:p-2.5 [&>div]:text-center"
                >
                  <aside>
                    Dashboard<br /><br />Posts<br /><br />Media<br /><br />Recipes<br /><br />Settings
                  </aside>
                  <div>
                    <span class="text-2xl">Ⓦ</span>
                    <h3>Recipe Editor</h3>
                    <p>Your next great recipe starts here.</p>
                    <i></i><i></i><i></i>
                  </div>
                </div>
                <div
                  v-else-if="project.screen === 'analytics'"
                  class="h-full bg-[#151c23] px-4 py-2 [&>h3]:text-[8px] [&>h3]:text-[#a4adb8]"
                >
                  <h3>{{ project.headline }}</h3>
                  <div
                    class="flex h-[65px] items-end gap-1.5 border-b border-[#555] bg-[repeating-linear-gradient(0deg,transparent_0_19px,#ffffff08_20px)] pt-2.5 [&>i]:flex-1 [&>i]:bg-[#e87808]"
                  >
                    <i v-for="n in 12" :key="n" :style="{ height: `${15 + ((n * 19) % 75)}%` }"></i>
                  </div>
                  <div class="overflow-hidden pt-2 text-[22px] whitespace-nowrap text-[#d97c1e]">
                    ╱╲____╱╲___╱╲╱╲_____╱
                  </div>
                </div>
                <div
                  v-else
                  class="relative h-full bg-cover bg-center px-3 py-5 [&>h3]:relative [&>h3]:z-1 [&>h3]:w-[58%] [&>h3]:text-[17px] [&>h3]:leading-[1.05] [&>h3]:font-extrabold"
                  :class="{
                    'bg-[radial-gradient(ellipse_at_80%_65%,#46249c,#0b0a15_65%)]':
                      project.screen === 'gaming',
                  }"
                  :style="
                    project.image
                      ? {
                          backgroundImage: `linear-gradient(90deg, #0009, #0001), url(https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=700&q=80)`,
                        }
                      : {}
                  "
                >
                  <h3>{{ project.headline }}</h3>
                  <span
                    class="relative z-1 mt-3 inline-block bg-[#ff7900] px-2 py-[5px] text-[5px] text-white"
                    >{{ project.screen === 'recipes' ? 'Explore Recipes' : 'Discover More' }}</span
                  ><span
                    v-if="project.screen === 'gaming'"
                    class="absolute top-[23%] right-[8%] h-[43px] w-[75px] -rotate-12 rounded-t-[20px] rounded-b-[30%] border-2 border-[#a478ec] bg-[linear-gradient(135deg,#944be0,#25213f)] pl-[7px] text-[26px] text-[#111] shadow-[0_0_18px_#8751cf] [&>span]:float-right [&>span]:px-[5px] [&>span]:py-2.5 [&>span]:text-[10px] [&>span]:text-[#bda1fc]"
                    >✚<span>● ●</span></span
                  >
                </div>
              </div>
              <div
                class="-ml-[10%] h-2 w-[120%] bg-[linear-gradient(#a2a1a0,#535452)] [clip-path:polygon(8%_0,92%_0,100%_75%,85%_100%,15%_100%,0_75%)]"
              ></div>
            </div>
          </RouterLink>
          <div
            class="flex flex-1 flex-col items-start px-[21px] pb-3.5 max-sm:px-5 max-sm:pb-[18px] [&>h2]:my-[5px] [&>h2]:text-[23px] [&>h2]:leading-[1.2] [&>h2]:font-[750] [&>h2]:tracking-[-.025em] [&>h2_a:hover]:text-[#ff7900] [&>p]:mb-3.5 [&>p]:text-sm [&>p]:leading-normal max-sm:[&>p]:text-base"
          >
            <span
              class="mt-[5px] rounded-[9px] bg-[#ff7900] px-[11px] py-1 text-[11px] font-[750] text-[#080808] uppercase"
              >{{ project.label }}</span
            >
            <h2>
              <RouterLink :to="`/projects/${project.slug}`">{{ project.name }}</RouterLink>
            </h2>
            <p>{{ project.description }}</p>
            <div class="mt-auto flex w-full items-center justify-between gap-2">
              <ul
                class="flex flex-wrap gap-2 [&>li]:rounded-[20px] [&>li]:bg-[#292b2c] [&>li]:px-[11px] [&>li]:py-1 [&>li]:text-[11px] max-sm:[&>li]:text-xs"
              >
                <li v-for="technology in project.technologies" :key="technology">
                  {{ technology }}
                </li>
              </ul>
              <RouterLink
                :to="`/projects/${project.slug}`"
                class="shrink-0 p-[3px] text-[#ff7900] [&>svg]:size-[23px]"
                :aria-label="`View ${project.name}`"
                ><svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.6"
                  aria-hidden="true"
                >
                  <path
                    d="M14 3h7v7m0-7L10 14M10 4H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-5"
                  /></svg
              ></RouterLink>
            </div>
          </div>
        </article>
      </section>

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
    </div>
  </div>
</template>
