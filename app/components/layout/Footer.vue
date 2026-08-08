<template>
  <footer class="border-t py-12 bg-slate-50 mt-auto">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h2 class="text-xl font-bold text-slate-800">{{ content.company.name }}</h2>
          <p class="text-slate-500 mt-1">Building the Future Together</p>
        </div>
        <div class="text-slate-500 text-sm">
          &copy; {{ new Date().getFullYear() }} Nexa Mandiri Group. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useCompanyData } from '~/composables/useCompanyData'
const { content } = useCompanyData()
</script>
