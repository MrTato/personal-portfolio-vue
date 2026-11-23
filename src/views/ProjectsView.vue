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
  <div class="projects-page">
    <div class="projects-container">
      <section class="projects-intro" aria-labelledby="projects-title">
        <div>
          <p class="eyebrow">Projects</p>
          <h1 id="projects-title">Selected<br />Projects</h1>
        </div>
        <div class="intro-details">
          <p>
            A collection of web applications and websites I’ve built, from lead-generation sites to
            custom tools and experiments.
          </p>
          <ul class="project-stats">
            <li>
              <span class="stat-icon" aria-hidden="true">&lt;/&gt;</span><strong>6+</strong
              ><span>Projects</span>
            </li>
            <li>
              <svg
                class="stat-icon"
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
                class="stat-icon"
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

      <div class="project-toolbar">
        <div class="category-filters" role="group" aria-label="Filter projects by category">
          <button
            v-for="category in categories"
            :key="category"
            :aria-pressed="activeCategory === category"
            :class="{ active: activeCategory === category }"
            @click="activeCategory = category"
          >
            {{ category }}
          </button>
        </div>
        <label class="sort-control"
          >Sort by:
          <select v-model="sortOrder" aria-label="Sort projects">
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="name">Name</option>
          </select></label
        >
      </div>

      <section class="project-grid" aria-label="Projects" aria-live="polite">
        <article v-for="project in visibleProjects" :key="project.slug" class="project-card">
          <RouterLink
            :to="`/projects/${project.slug}`"
            class="project-image"
            tabindex="-1"
            aria-hidden="true"
            :class="project.screen"
          >
            <div class="laptop">
              <div class="laptop-screen" :class="project.screen">
                <div class="mock-nav">
                  <b>{{ project.screen === 'recipes' ? 'Bayardo’s Kitchen' : project.name }}</b
                  ><span>Discover  About  Contact</span>
                </div>
                <div v-if="project.screen === 'editor'" class="mock-editor">
                  <aside>
                    Dashboard<br /><br />Posts<br /><br />Media<br /><br />Recipes<br /><br />Settings
                  </aside>
                  <div>
                    <span class="wordpress-mark">Ⓦ</span>
                    <h3>Recipe Editor</h3>
                    <p>Your next great recipe starts here.</p>
                    <i></i><i></i><i></i>
                  </div>
                </div>
                <div v-else-if="project.screen === 'analytics'" class="mock-analytics">
                  <h3>{{ project.headline }}</h3>
                  <div class="chart">
                    <i v-for="n in 12" :key="n" :style="{ height: `${15 + ((n * 19) % 75)}%` }"></i>
                  </div>
                  <div class="chart-lines">╱╲____╱╲___╱╲╱╲_____╱</div>
                </div>
                <div
                  v-else
                  class="mock-hero"
                  :style="
                    project.image
                      ? {
                          backgroundImage: `linear-gradient(90deg, #0009, #0001), url(https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=700&q=80)`,
                        }
                      : {}
                  "
                >
                  <h3>{{ project.headline }}</h3>
                  <span class="mock-button">{{
                    project.screen === 'recipes' ? 'Explore Recipes' : 'Discover More'
                  }}</span
                  ><span v-if="project.screen === 'gaming'" class="game-controller"
                    >✚<span>● ●</span></span
                  >
                </div>
              </div>
              <div class="laptop-base"></div>
            </div>
          </RouterLink>
          <div class="project-content">
            <span class="project-label">{{ project.label }}</span>
            <h2>
              <RouterLink :to="`/projects/${project.slug}`">{{ project.name }}</RouterLink>
            </h2>
            <p>{{ project.description }}</p>
            <div class="card-bottom">
              <ul class="technology-list">
                <li v-for="technology in project.technologies" :key="technology">
                  {{ technology }}
                </li>
              </ul>
              <RouterLink
                :to="`/projects/${project.slug}`"
                class="project-link"
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

      <section class="projects-cta" aria-labelledby="cta-title">
        <h2 id="cta-title">Have a project<br />in mind?</h2>
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

<style scoped>
.projects-page {
  --orange: #ff7900;
  width: 100%;
  color: #f5f5f5;
  background:
    radial-gradient(ellipse 240px 230px at -3% 12%, #a544004a, transparent),
    radial-gradient(ellipse 240px 200px at 103% 8%, #a5440038, transparent),
    radial-gradient(ellipse 270px 230px at 103% 97%, #ae470050, transparent), #090909;
  padding: 50px 5% 68px;
}
.projects-container {
  max-width: 1200px;
  margin: auto;
}
.projects-intro {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 65px;
  align-items: center;
  padding: 0 20px 50px;
}
.eyebrow {
  color: var(--orange);
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 14px;
}
h1 {
  font-family: Impact, 'Arial Narrow', sans-serif;
  font-size: clamp(54px, 6.4vw, 88px);
  font-weight: 900;
  text-transform: uppercase;
  line-height: 0.99;
  letter-spacing: 0.015em;
}
.intro-details {
  border-left: 2px solid var(--orange);
  padding-left: 54px;
  margin-top: 30px;
}
.intro-details > p {
  font-size: 16px;
  letter-spacing: 0.045em;
  line-height: 1.6;
  max-width: 430px;
}
.project-stats {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 28px;
}
.project-stats li {
  display: flex;
  flex-direction: column;
  font-size: 16px;
  line-height: 1.25;
}
.stat-icon {
  display: block;
  width: 29px;
  height: 29px;
  color: var(--orange);
  margin-bottom: 14px;
  font-size: 26px;
  line-height: 29px;
}
.project-toolbar {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  border-bottom: 1px solid #3a3a3a;
  padding-bottom: 4px;
  margin-bottom: 27px;
}
.category-filters {
  display: flex;
  gap: 8px;
}
.category-filters button {
  padding: 10px 22px;
  border-radius: 16px;
  cursor: pointer;
  font-size: 16px;
  transition:
    background 0.2s,
    color 0.2s;
}
.category-filters button:hover {
  background: #ffffff12;
}
.category-filters button.active {
  background: var(--orange);
  color: #080808;
}
.sort-control {
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-size: 14px;
}
.sort-control select {
  cursor: pointer;
  color: white;
  background: transparent;
  font-weight: 600;
  padding: 8px 4px;
}
.sort-control option {
  background: #171717;
}
.project-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}
.project-card {
  overflow: hidden;
  border: 1px solid #343434;
  border-radius: 12px;
  background: linear-gradient(125deg, #181818, #101010);
  display: flex;
  flex-direction: column;
  transition:
    border-color 0.2s,
    transform 0.2s;
}
.project-card:hover {
  border-color: #98602f;
  transform: translateY(-3px);
}
.project-image {
  height: 190px;
  overflow: hidden;
  position: relative;
  display: block;
  background: radial-gradient(ellipse at 30% 10%, #888, #454440 48%, #242423);
  border-bottom: 1px solid #383838;
}
.project-image.recipes {
  background: linear-gradient(110deg, #75634b, #b1a38e, #37312c);
}
.project-image.gaming {
  background: radial-gradient(ellipse at 50% 20%, #4f5557, #151a1c);
}
.project-image.tours {
  background: linear-gradient(120deg, #5b5246, #9c8f7d);
}
.laptop {
  width: 80%;
  height: 85%;
  position: absolute;
  top: 10%;
  left: 10%;
  transform: perspective(650px) rotateY(-9deg) rotateZ(2deg);
}
.laptop-screen {
  background: #111;
  border: 7px solid #0b0b0b;
  border-radius: 9px 9px 3px 3px;
  height: 100%;
  box-shadow: 0 4px 16px #0009;
  overflow: hidden;
}
.laptop-base {
  height: 8px;
  width: 120%;
  margin-left: -10%;
  background: linear-gradient(#a2a1a0, #535452);
  clip-path: polygon(8% 0, 92% 0, 100% 75%, 85% 100%, 15% 100%, 0 75%);
}
.mock-nav {
  display: flex;
  justify-content: space-between;
  padding: 7px 8px;
  gap: 8px;
  font-size: 7px;
  background: #faf9f4;
  color: #171717;
}
.mock-nav span {
  font-size: 4px;
  white-space: nowrap;
}
.mock-hero {
  height: 100%;
  padding: 20px 12px;
  background-position: center;
  background-size: cover;
  position: relative;
}
.mock-hero h3 {
  font-weight: 800;
  font-size: 17px;
  line-height: 1.05;
  width: 58%;
  position: relative;
  z-index: 1;
}
.mock-button {
  display: inline-block;
  background: var(--orange);
  color: white;
  font-size: 5px;
  padding: 5px 8px;
  margin-top: 12px;
  position: relative;
  z-index: 1;
}
.gaming .mock-nav,
.tours .mock-nav {
  background: #0b1119;
  color: white;
}
.gaming .mock-hero {
  background: radial-gradient(ellipse at 80% 65%, #46249c, #0b0a15 65%);
}
.game-controller {
  position: absolute;
  right: 8%;
  top: 23%;
  background: linear-gradient(135deg, #944be0, #25213f);
  width: 75px;
  height: 43px;
  border-radius: 20px 20px 30% 30%;
  border: 2px solid #a478ec;
  box-shadow: 0 0 18px #8751cf;
  color: #111;
  font-size: 26px;
  padding-left: 7px;
  transform: rotate(-12deg);
}
.game-controller span {
  font-size: 10px;
  float: right;
  padding: 10px 5px;
  color: #bda1fc;
}
.mock-editor {
  display: flex;
  height: 100%;
  color: #444;
  background: #eee;
  font-size: 6px;
}
.mock-editor aside {
  background: #192531;
  color: #d6dce3;
  padding: 10px;
  width: 27%;
}
.mock-editor > div {
  padding: 10px;
  flex: 1;
  text-align: center;
}
.wordpress-mark {
  font-size: 24px;
}
.mock-editor h3 {
  font-size: 10px;
  font-weight: bold;
  margin-bottom: 5px;
}
.mock-editor i {
  display: block;
  height: 9px;
  margin-top: 7px;
  background: white;
  border: 1px solid #ddd;
}
.analytics .mock-nav {
  background: #151c23;
  color: #bbb;
}
.mock-analytics {
  height: 100%;
  background: #151c23;
  padding: 8px 16px;
}
.mock-analytics h3 {
  font-size: 8px;
  color: #a4adb8;
}
.chart {
  height: 65px;
  border-bottom: 1px solid #555;
  display: flex;
  gap: 6px;
  align-items: end;
  padding-top: 10px;
  background: repeating-linear-gradient(0deg, transparent 0 19px, #ffffff08 20px);
}
.chart i {
  flex: 1;
  background: #e87808;
}
.chart-lines {
  font-size: 22px;
  color: #d97c1e;
  overflow: hidden;
  white-space: nowrap;
  padding-top: 8px;
}
.project-content {
  padding: 0 21px 14px;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: start;
}
.project-label {
  background: var(--orange);
  color: #080808;
  padding: 4px 11px;
  border-radius: 9px;
  font-size: 11px;
  font-weight: 750;
  text-transform: uppercase;
  margin-top: 5px;
}
.project-content h2 {
  font-size: 23px;
  line-height: 1.2;
  font-weight: 750;
  margin: 5px 0;
  letter-spacing: -0.025em;
}
.project-content h2 a:hover {
  color: var(--orange);
}
.project-content > p {
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 14px;
}
.card-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 8px;
  margin-top: auto;
}
.technology-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.technology-list li {
  font-size: 11px;
  padding: 4px 11px;
  border-radius: 20px;
  background: #292b2c;
}
.project-link {
  color: var(--orange);
  padding: 3px;
  flex-shrink: 0;
}
.project-link svg {
  width: 23px;
  height: 23px;
}
a:focus-visible,
button:focus-visible,
select:focus-visible {
  outline: 2px solid var(--orange);
  outline-offset: 4px;
}
.projects-cta {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 55px;
  align-items: center;
  margin-top: 48px;
  border-top: 1px solid #3a3a3a;
  padding: 35px 40px 0;
}
.projects-cta h2 {
  position: relative;
  font-family: Impact, 'Arial Narrow', sans-serif;
  font-size: clamp(30px, 3.6vw, 48px);
  font-weight: 900;
  text-transform: uppercase;
  line-height: 1.1;
  padding-left: 55px;
}
.projects-cta h2::before {
  content: '';
  position: absolute;
  left: 17px;
  top: 0;
  height: 100%;
  width: 5px;
  background: var(--orange);
  transform: skewX(-24deg);
}
.projects-cta > div {
  border-left: 1px solid #454545;
  padding-left: 50px;
}
.projects-cta p {
  font-size: 20px;
  margin-bottom: 20px;
}
.projects-cta a {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 11px 32px;
  border-radius: 30px;
  background: var(--orange);
  font-weight: 700;
}
.projects-cta a:hover {
  background: #e66c00;
}
@media (min-width: 1400px) {
  .project-image {
    height: 210px;
  }
}
@media (max-width: 1000px) {
  .projects-intro {
    gap: 30px;
    padding-left: 0;
    padding-right: 0;
  }
  .intro-details {
    padding-left: 28px;
  }
  .project-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .projects-cta {
    padding-left: 0;
    padding-right: 0;
    gap: 25px;
  }
  .projects-cta > div {
    padding-left: 30px;
  }
}
@media (max-width: 640px) {
  .projects-page {
    padding: 30px 20px 45px;
  }
  .projects-intro {
    grid-template-columns: 1fr;
    gap: 28px;
    padding-bottom: 35px;
  }
  h1 {
    font-size: clamp(50px, 13vw, 76px);
  }
  .intro-details {
    margin-top: 0;
    padding-left: 20px;
  }
  .project-stats {
    gap: 12px;
  }
  .project-stats li {
    font-size: 14px;
  }
  .project-toolbar {
    flex-wrap: wrap;
    gap: 8px;
  }
  .category-filters {
    width: 100%;
    justify-content: space-between;
    gap: 0;
  }
  .category-filters button {
    font-size: 14px;
    padding: 9px 12px;
  }
  .sort-control {
    margin-left: auto;
  }
  .project-grid {
    grid-template-columns: 1fr;
    gap: 22px;
  }
  .project-image {
    height: 220px;
  }
  .project-content {
    padding: 0 20px 18px;
  }
  .project-content > p {
    font-size: 16px;
  }
  .technology-list li {
    font-size: 12px;
  }
  .projects-cta {
    grid-template-columns: 1fr;
    gap: 25px;
    margin-top: 35px;
  }
  .projects-cta h2 {
    font-size: 36px;
  }
  .projects-cta > div {
    border: 0;
    padding-left: 20px;
  }
  .projects-cta p {
    font-size: 18px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .project-card {
    transition: none;
  }
}
</style>
