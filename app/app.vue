<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useSchemaOrg, defineLocalBusiness } from '#imports'

useSchemaOrg([
  defineLocalBusiness({
    name: 'PT Nexa Mandiri Group',
    description: 'Perusahaan Konstruksi dan Kontraktor Umum terpercaya yang berbasis di Batam, Kepulauan Riau.',
    address: {
      streetAddress: 'Batam',
      addressLocality: 'Batam',
      addressRegion: 'Kepulauan Riau',
      addressCountry: 'ID'
    },
    telephone: '+6285121538265',
    email: 'nexamandirigroup@gmail.com',
    image: '/Logo.webp',
  })
])
</script>
