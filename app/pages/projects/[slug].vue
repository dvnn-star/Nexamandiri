<template>
  <main class="bg-white min-h-screen pt-32 pb-0">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-20">
      
      <!-- Back Button -->
      <NuxtLinkLocale to="/projects" class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mb-8 transition-colors" v-if="$localeRoute">
        <ArrowLeftIcon class="w-5 h-5 mr-2" />
        {{ $i18n.locale === 'id' ? 'Kembali ke Proyek' : 'Back to Projects' }}

      </NuxtLinkLocale>

      <div v-if="project" class="project-content">
        <!-- Header -->
        <div class="mb-12">
          <div class="flex items-center gap-3 mb-4">
            <span class="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-md">
              {{ project.category }}
            </span>
            <span class="text-slate-500 font-medium">{{ project.year }}</span>
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">{{ project.title }}</h1>
          <p class="text-xl text-slate-600 max-w-3xl leading-relaxed">
            {{ project.description }}
          </p>
        </div>

        <!-- Gallery -->
        <div class="mb-16">
          <div v-if="project.gallery && project.gallery.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              v-for="(img, idx) in project.gallery" 
              :key="idx"
              class="relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-[300px]"
            >
              <NuxtImg 
                :src="img" 
                :alt="`${project.title} - Image ${idx + 1}`"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          <div v-else class="p-12 bg-slate-50 rounded-xl text-center border border-slate-100">
            <p class="text-slate-500">No gallery images available for this project.</p>
          </div>
        </div>

        <!-- Project Details Table -->
        <div class="mb-8">
          <h2 class="text-3xl font-bold text-slate-900 mb-8">Project Details</h2>
          <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <table class="w-full text-left border-collapse">
              <tbody>
                <tr class="border-b border-slate-200">
                  <th class="py-5 px-6 md:px-8 text-sm font-bold text-slate-500 uppercase tracking-widest w-1/3 md:w-1/4 bg-slate-50/50">{{ content.projectsPage.details.client }}</th>
                  <td class="py-5 px-6 md:px-8 text-lg font-semibold text-slate-900">{{ project.client || 'Confidential' }}</td>
                </tr>
                <tr class="border-b border-slate-200">
                  <th class="py-5 px-6 md:px-8 text-sm font-bold text-slate-500 uppercase tracking-widest w-1/3 md:w-1/4 bg-slate-50/50">{{ content.projectsPage.details.year }}</th>
                  <td class="py-5 px-6 md:px-8 text-lg font-semibold text-slate-900">{{ project.year || 'Ongoing' }}</td>
                </tr>
                <tr class="border-b border-slate-200">
                  <th class="py-5 px-6 md:px-8 text-sm font-bold text-slate-500 uppercase tracking-widest w-1/3 md:w-1/4 bg-slate-50/50">{{ content.projectsPage.details.budget }}</th>
                  <td class="py-5 px-6 md:px-8 text-lg font-semibold text-slate-900">{{ project.budget || 'Undisclosed' }}</td>
                </tr>
                <tr>
                  <th class="py-5 px-6 md:px-8 text-sm font-bold text-slate-500 uppercase tracking-widest w-1/3 md:w-1/4 bg-slate-50/50 align-top">{{ content.projectsPage.details.scope }}</th>
                  <td class="py-5 px-6 md:px-8">
                    <ul v-if="project.scopeOfService && project.scopeOfService.length" class="text-slate-900 font-medium space-y-2">
                      <li v-for="scope in project.scopeOfService" :key="scope" class="flex items-start">
                        <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span class="leading-relaxed">{{ scope }}</span>
                      </li>
                    </ul>
                    <p v-else class="text-slate-900 font-medium">N/A</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
      
      <div v-else class="py-20 text-center">
        <h2 class="text-2xl font-bold text-slate-900 mb-4">Project Not Found</h2>
        <p class="text-slate-600 mb-8">The project you are looking for does not exist or has been removed.</p>
        <NuxtLinkLocale to="/projects" class="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700">
          Return to Projects
        </NuxtLinkLocale>
      </div>

    </div>

    <!-- CTA Section at bottom -->
    <SectionsCtaSection />
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, showError } from '#imports'
import { ArrowLeftIcon } from 'lucide-vue-next'
import { useCompanyData } from '~/composables/useCompanyData'
import { useHead } from '#imports'

const route = useRoute()
const { content } = useCompanyData()

const project = computed(() => {
  const slug = route.params.slug as string
  return content.value.projects.find(p => p.slug === slug)
})

if (!project.value) {
  showError({ statusCode: 404, statusMessage: 'Project Not Found' })
}

useHead({
  title: project.value ? `${project.value.title} | Nexa Mandiri Group` : 'Project Not Found',
  meta: [
    { 
      name: 'description', 
      content: project.value ? project.value.description : 'Project details'
    }
  ]
})
</script>
