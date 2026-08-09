<template>
  <section class="pt-5 pb-36 md:pt-5 bg-slate-50" ref="industriesSection">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Header Area -->
      <div class="w-full industries-header opacity-0 translate-y-8 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div class="max-w-3xl">
          <span class="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
            {{ content.industries.label }}
          </span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
            {{ content.industries.headline }}
          </h2>
          <p class="text-lg text-slate-600 font-medium max-w-2xl">
            {{ content.industries.statement }}
          </p>
        </div>
        
        <div class="flex-shrink-0 md:mb-2">
          <NuxtLinkLocale 
            to="/projects" 
            class="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors group"
          >
            {{ locale === 'id' ? 'Jelajahi Semua Proyek' : 'Explore All Projects' }}
            <ArrowRightIcon class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </NuxtLinkLocale>
        </div>
      </div>

      <!-- Image Overlay Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16 industries-grid opacity-0 translate-y-8">
        <NuxtLinkLocale 
          to="/projects"
          v-for="item in content.industries.items" 
          :key="item.id"
          class="group relative overflow-hidden rounded-2xl h-[360px] md:h-[400px] flex items-end shadow-md hover:shadow-2xl transition-shadow duration-500"
        >
          <!-- Background Image -->
          <div class="absolute inset-0 z-0">
            <img 
              :src="imageMap[item.id]" 
              :alt="item.name" 
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              loading="lazy"
            />
          </div>
          
          <!-- Gradients for readability -->
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent z-10"></div>
          <div class="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-multiply"></div>
          
          <!-- Content -->
          <div class="relative z-20 w-full p-6 md:p-8 transform transition-transform duration-500">
            <h3 class="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:-translate-y-2 transition-transform duration-500">
              {{ item.name }}
            </h3>
            
            <div class="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
              <p class="text-slate-200 text-sm md:text-base leading-relaxed mb-4">
                {{ locale === 'id' ? captionMapID[item.id] : captionMapEN[item.id] }}
              </p>
              
              <div class="flex items-center gap-2 text-blue-300 font-medium">
                <span>{{ locale === 'id' ? 'Jelajahi Proyek Kami' : 'Explore Our Project' }}</span>
                <ArrowRightIcon class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </NuxtLinkLocale>
      </div>
      
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ArrowRightIcon } from 'lucide-vue-next'
import { useCompanyData } from '~/composables/useCompanyData'
import { useNuxtApp, useI18n } from '#imports'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const { content } = useCompanyData()
const { locale } = useI18n()
const industriesSection = ref<HTMLElement | null>(null)
const { $gsap } = useNuxtApp()

const imageMap: Record<string, string> = {
  hospitality: 'images/projects/hospitality/1.webp',
  industrial: 'images/projects/industrial/1.webp',
  commercial: 'images/projects/commercial/1.webp',
  educational: 'images/projects/school/1.webp',
  infrastructure: 'images/projects/infrastructure/1.webp',
  specialised: 'images/projects/specialized/1.webp'
}

const captionMapEN: Record<string, string> = {
  hospitality: 'Delivering premium resorts and hospitality facilities with a focus on guest experience and architectural excellence.',
  industrial: 'Robust and efficient manufacturing plants designed for heavy-duty operations and scalability.',
  commercial: 'Modern retail and commercial spaces tailored to enhance business operations and customer engagement.',
  educational: 'Safe, sustainable, and inspiring learning environments built for the future of education.',
  infrastructure: 'Essential infrastructure and utility projects supporting regional growth and connectivity.',
  specialised: 'Custom construction packages requiring unique engineering solutions and precise execution.'
}

const captionMapID: Record<string, string> = {
  hospitality: 'Menghadirkan resort dan fasilitas perhotelan premium dengan fokus pada pengalaman tamu dan keunggulan arsitektur.',
  industrial: 'Pabrik manufaktur yang kuat dan efisien yang dirancang untuk operasi tugas berat dan skalabilitas.',
  commercial: 'Ruang ritel dan komersial modern yang disesuaikan untuk meningkatkan operasi bisnis dan keterlibatan pelanggan.',
  educational: 'Lingkungan belajar yang aman, berkelanjutan, dan inspiratif yang dibangun untuk masa depan pendidikan.',
  infrastructure: 'Proyek infrastruktur dan utilitas penting yang mendukung pertumbuhan dan konektivitas regional.',
  specialised: 'Paket konstruksi khusus yang membutuhkan solusi teknik unik dan eksekusi presisi.'
}

onMounted(() => {
  const gsapInstance = $gsap || gsap
  gsapInstance.registerPlugin(ScrollTrigger)
  
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
  if (prefersReducedMotion) {
    gsapInstance.set('.industries-header, .industries-grid', { opacity: 1, y: 0 })
    return
  }

  const ctx = gsapInstance.context(() => {
    gsapInstance.to('.industries-header', {
      scrollTrigger: {
        trigger: industriesSection.value,
        start: 'top 80%',
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out'
    })
    
    gsapInstance.to('.industries-grid', {
      scrollTrigger: {
        trigger: '.industries-grid',
        start: 'top 80%',
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.2
    })
  }, industriesSection.value)

  return () => ctx.revert()
})
</script>
