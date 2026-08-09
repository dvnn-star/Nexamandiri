<template>
  <main class="bg-white min-h-screen pt-32 pb-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      
      <!-- Header -->
      <div class="mb-16 md:mb-24 proj-header">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">Our Projects</h1>
        <p class="text-xl text-slate-600 max-w-3xl leading-relaxed">
          Explore our portfolio of engineering and construction projects spanning multiple industries. We pride ourselves on delivering excellence, innovation, and sustainability.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 proj-grid">
        <NuxtLink 
          v-for="project in content.projects" 
          :key="project.id"
          :to="`/projects/${project.slug}`"
          class="group block relative rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 bg-slate-50 project-card w-full"
        >
          <!-- Image Wrapper -->
          <div class="relative h-[350px] sm:h-[400px] w-full overflow-hidden">
            <NuxtImg 
              v-if="project.image"
              :src="project.image" 
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div v-else class="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
              No Image
            </div>
            
            <!-- Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent opacity-90 transition-opacity duration-500"></div>
          </div>
          
          <!-- Content -->
          <div class="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <div class="flex items-center gap-3 mb-4">
              <span class="px-3 py-1 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-sm">
                {{ project.category }}
              </span>
              <span class="text-slate-300 text-sm font-medium">{{ project.year }}</span>
            </div>
            <h3 class="text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight">{{ project.title }}</h3>
            <p class="text-slate-300 text-sm line-clamp-2 leading-relaxed">{{ project.description }}</p>
          </div>
        </NuxtLink>
      </div>
      
    </div>
  </main>
</template>

<script setup lang="ts">
import { useCompanyData } from '~/composables/useCompanyData'
import { useHead } from '#imports'

const { content } = useCompanyData()

useHead({
  title: 'Projects | Nexa Mandiri Group',
  meta: [
    { name: 'description', content: 'Explore our comprehensive portfolio of engineering and construction projects across various industries.' }
  ]
})
</script>

<style scoped>
/* Empty style block to fix Vite HMR cache issue */
</style>
