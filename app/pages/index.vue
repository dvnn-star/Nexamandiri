<template>
  <main>
    <SectionsHeroSection />
    <SectionsAboutSection />
    <SectionsWhySection />
    <SectionsIndustriesSection />
    <SectionsClientsSection />
    <SectionsCtaSection />
  </main>
</template>

<script setup lang="ts">
import { useSeoMeta } from '#imports'
import { useCompanyData } from '~/composables/useCompanyData'

const { content } = useCompanyData()

useSeoMeta({
  title: () => content.value.seo.index.title,
  ogTitle: () => content.value.seo.index.title,
  description: () => content.value.seo.index.description,
  ogDescription: () => content.value.seo.index.description,
  ogImage: '/Logo.webp',
  twitterCard: 'summary_large_image',
})
</script>
