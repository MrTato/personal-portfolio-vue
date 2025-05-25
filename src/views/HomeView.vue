<script setup>
import PositionedSection from '@/components/Home/PositionedSection.vue'
import HeroSection from '@/components/Home/HeroSection.vue'
import DownloadCVSection from '@/components/Home/DownloadCVSection.vue'
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
    <section
      class="relative flex flex-col items-center justify-center space-y-8 p-8 text-white md:pb-20"
    >
      <!-- Central vertical line -->
      <span class="absolute top-0 right-1/2 left-1/2 z-0 h-full w-1 bg-white"></span>

      <PositionedSection
        :isLeft="true"
        title="Experience"
        :detail-items="[
          {
            dateRange: '(October 2023 - Present)',
            title: 'Data Engineer',
            subtitle: 'SISTEMÁTICA',
            description:
              'I maintain over 200 ETL pipelines and internal dashboards that support data-driven decision-making. I collaborate with non-technical managers to build tools tailored to business needs, using Databricks, Spark, Pandas, SQL, DBT, and Quicksight.',
          },
          {
            dateRange: '(September 2021 - August 2023)',
            title: 'Web Developer | Data Engineer',
            subtitle: 'OOQIA',
            description:
              'Initially hired as a web developer, I quickly took on both development and data roles thanks to my adaptability and fast learning. I collaborated in building a customizable marketing website using Vue and a headless WordPress CMS, later porting it to Vue with Laravel. I also maintained batch ETL workflows in Azure Databricks using PySpark to support internal analytics tools.',
          },
          {
            dateRange: '(September 2020 - September 2021)',
            title: 'NOC Technician',
            subtitle: 'GBM',
            description:
              'Started as an intern focused on database and server administration courses, then moved into a NOC technician role where I served as the first respondent in a 24/7 operation. I monitored infrastructure using Nagios and OTRS, reported incidents, and ensured SLA compliance by following standard procedures.',
          },
          {
            dateRange: '(December 2019 - May 2020)',
            title: 'Software Developer',
            subtitle: 'MLS DATA TOOLS',
            description:
              'Maintained a production MLS listings application in a fast-paced team, resolving bugs, server issues, and automation script errors related to data ingestion. Gained practical experience with PHP, MongoDB, Ubuntu Server, Docker, and advanced Git workflows.',
          },
        ]"
      />

      <PositionedSection
        :isLeft="false"
        title="Contact"
        :detail-items="[
          {
            dateRange: '',
            title: 'Phone',
            subtitle: '',
            description: '+505 8238 8579',
          },
          {
            dateRange: '',
            title: 'Email',
            subtitle: '',
            description: 'developer@bayardolopez.com',
          },
        ]"
      />

      <PositionedSection
        :isLeft="true"
        title="Education"
        :detail-items="[
          {
            dateRange: '2016',
            title: 'IB Programme',
            subtitle: 'The Notre Dame School',
            description: '',
          },
          {
            dateRange: '2021',
            title: 'Systems Engineer',
            subtitle: 'Universidad Americana UAM',
            description: '',
          },
        ]"
      />

      <PositionedSection
        :isLeft="false"
        title="Certifications"
        :detail-items="[
          {
            dateRange: '',
            title: '',
            subtitle: '',
            description: 'AWS CLOUD PRACTITIONER',
          },
        ]"
      />

      <PositionedSection
        :isLeft="true"
        title="Expertise"
        :detail-items="[
          {
            dateRange: '',
            title: 'Vue | Nuxt',
            subtitle: 'Frontend',
            description: '⭐⭐⭐',
          },
          {
            dateRange: '',
            title: 'Django | DRF',
            subtitle: 'Backend',
            description: '⭐⭐',
          },
          {
            dateRange: '',
            title: 'SQL | Postgresql',
            subtitle: 'Databases',
            description: '⭐⭐⭐',
          },
          {
            dateRange: '',
            title: 'Pandas',
            subtitle: 'ETL',
            description: '⭐⭐⭐',
          },
          {
            dateRange: '',
            title: 'Git',
            subtitle: 'Version Control',
            description: '⭐⭐⭐',
          },
        ]"
      />

      <PositionedSection
        :isLeft="false"
        title="Language"
        :detail-items="[
          {
            dateRange: '',
            title: 'English',
            subtitle: 'Bilingual',
            description: '',
          },
          {
            dateRange: '',
            title: 'Spanish',
            subtitle: 'Native',
            description: '',
          },
        ]"
      />
    </section>
    <DownloadCVSection />
  </div>
</template>
