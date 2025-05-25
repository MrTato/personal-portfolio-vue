<script setup>
import PositionedSection from '@/components/Home/PositionedSection.vue'
import HeroSection from '@/components/Home/HeroSection.vue'
</script>

<template>
  <div>
    <HeroSection
      profileImage="https://placehold.co/150"
      name="Bayardo López"
      profession="Full Stack Web Developer"
      description="Web Developer with 2 years of experience and 5 years of total professional experience with a passion on translating ideas into tools that users not only depend on but enjoy relying on. I am at my most comfortable when using JavaScript and Python, love learning, brainstorming my way towards a solution, and constantly improving towards excellency."
      class="w-screen lg:w-auto"
    />
    <section class="relative flex flex-col items-center space-y-8 p-8 text-white md:pb-20">
      <!-- Central vertical line -->
      <span class="absolute top-0 right-1/2 left-1/2 z-0 h-full w-1 bg-white"></span>

      <PositionedSection
        :isLeft="true"
        title="Experience"
        :detail-items="[
          {
            dateRange: '(October2023 - Present)',
            title: 'Data Engineer',
            subtitle: 'SISTEMÁTICA',
            description:
              'I play a critical role in both transforming data business needs into ETL pipelines and dashboards used to gain insights, and keeping over 200 ETL pipelines working and online. Many of these dashboards are made out of a collaboration between non-technical managers and myself, and they are currently being used as internal tools for their decision-making processes. I use Databricks, Spark, Pandas, SQL, DBT and Quicksight as my primary tools',
          },
        ]"
      />

      <PositionedSection :isLeft="false" title="Contact" />

      <PositionedSection :isLeft="true" title="Education" />

      <PositionedSection :isLeft="false" title="Certifications" />

      <PositionedSection :isLeft="true" title="Expertise" />

      <PositionedSection :isLeft="false" title="Language" />

      <PositionedSection :isLeft="true" title="References" />
    </section>
  </div>
</template>
