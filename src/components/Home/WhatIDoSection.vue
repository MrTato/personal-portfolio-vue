<template>
  <section class="bg-[#0d0d0d] px-6 py-20 text-center text-white">
    <h2 class="mb-12 text-3xl font-extrabold text-orange-400 sm:text-4xl">What I Do</h2>

    <div class="grid gap-8 md:grid-cols-3">
      <!-- Frontend -->
      <div class="flex flex-col items-center space-y-4 rounded-lg bg-[#181818] p-6 shadow-md">
        <font-awesome-icon :icon="['fab', 'vuejs']" class="text-4xl text-green-400" />
        <h3 class="text-xl font-semibold">Frontend</h3>
        <p class="text-sm leading-relaxed text-gray-400">
          I build responsive, interactive web interfaces using Vue / Nuxt, Tailwind CSS, and modern
          frontend tools. I focus on clean design, animations, and usability.
        </p>
      </div>

      <!-- Backend -->
      <div class="flex flex-col items-center space-y-4 rounded-lg bg-[#181818] p-6 shadow-md">
        <font-awesome-icon :icon="['fab', 'python']" class="text-4xl text-white" />
        <h3 class="text-xl font-semibold">Backend</h3>
        <p class="text-sm leading-relaxed text-gray-400">
          I develop secure, efficient backend systems using Django and DRF, managing logic, data
          validation, and integration with frontend apps.
        </p>
      </div>

      <!-- ETL -->
      <div class="flex flex-col items-center space-y-4 rounded-lg bg-[#181818] p-6 shadow-md">
        <font-awesome-icon :icon="['fas', 'database']" class="text-4xl text-blue-400" />
        <h3 class="text-xl font-semibold">ETL Pipelines</h3>
        <p class="text-sm leading-relaxed text-gray-400">
          I design and maintain automated ETL workflows using Pandas, PySpark, DBT, SQL, and
          Databricks, turning raw data into clean, insightful dashboards.
        </p>
      </div>
    </div>
  </section>
</template>

<script></script>
