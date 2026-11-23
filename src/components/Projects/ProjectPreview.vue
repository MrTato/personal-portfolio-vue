<script setup>
defineProps({ project: { type: Object, required: true } })
</script>

<template>
  <RouterLink
    :to="`/projects/${project.slug}`"
    class="relative block h-[190px] overflow-hidden border-b border-[#383838] max-sm:h-[220px] min-[1400px]:h-[210px]"
    tabindex="-1"
    aria-hidden="true"
    :class="{
      'bg-[linear-gradient(110deg,#75634b,#b1a38e,#37312c)]': project.screen === 'recipes',
      'bg-[radial-gradient(ellipse_at_50%_20%,#4f5557,#151a1c)]': project.screen === 'gaming',
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
</template>
