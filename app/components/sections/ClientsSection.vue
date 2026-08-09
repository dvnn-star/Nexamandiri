<template>
  <section class="py-20 md:py-24 bg-slate-50 border-y border-slate-100 overflow-hidden" ref="clientsSection">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Header Area -->
      <div class="text-center max-w-2xl mx-auto mb-16 clients-header opacity-0 translate-y-8">
        <span class="text-slate-400 font-bold tracking-widest uppercase text-xs mb-4 block">
          {{ content.clients.label }}
        </span>
        <h2 class="text-2xl md:text-3xl font-semibold text-slate-800">
          {{ content.clients.headline }}
        </h2>
      </div>

      <!-- Marquee Carousel -->
      <div class="relative w-full overflow-hidden clients-grid opacity-0 translate-y-8 flex mt-8">
        <!-- Gradient masks for seamless edges -->
        <div class="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
        <div class="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
        
        <!-- Scrolling wrapper -->
        <div class="marquee-track flex items-center">
          <div 
            class="flex items-center gap-16 md:gap-24 lg:gap-32 px-8 md:px-12 lg:px-16"
            v-for="n in 2" 
            :key="n"
          >
            <div 
              v-for="(logo, index) in duplicatedLogos" 
              :key="`${n}-${index}`"
              class="w-32 md:w-48 lg:w-64 flex-shrink-0   transition-all duration-300 cursor-pointer flex justify-center items-center"
            >
              <img 
                :src="logo.src" 
                :alt="logo.alt" 
                class="w-full h-auto max-h-20 md:max-h-24 lg:max-h-32 object-contain brightness-125" 
                loading="lazy" 
              />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useCompanyData } from '~/composables/useCompanyData'
import { useNuxtApp } from '#app'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const { content } = useCompanyData()
const clientsSection = ref<HTMLElement | null>(null)
const { $gsap } = useNuxtApp()

const baseLogos = [
  { src: '/documents/bai.webp', alt: 'Client BAI' },
  { src: '/documents/bpbatam.webp', alt: 'Client BP Batam' },
  { src: '/documents/clubmed.webp', alt: 'Client Club Med' },
  { src: '/documents/holidayinn.webp', alt: 'Client Holiday Inn' },
  { src: '/documents/hotel.webp', alt: 'Client Hotel' }
]

// Duplicate base logos to ensure the track is always wider than any monitor
const duplicatedLogos = [...baseLogos, ...baseLogos, ...baseLogos]

onMounted(() => {
  const gsapInstance = $gsap || gsap
  gsapInstance.registerPlugin(ScrollTrigger)
  
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
  if (prefersReducedMotion) {
    gsapInstance.set('.clients-header, .clients-grid', { opacity: 1, y: 0 })
    return
  }

  const ctx = gsapInstance.context(() => {
    gsapInstance.to('.clients-header', {
      scrollTrigger: {
        trigger: clientsSection.value,
        start: 'top 85%',
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out'
    })
    
    gsapInstance.to('.clients-grid', {
      scrollTrigger: {
        trigger: '.clients-grid',
        start: 'top 85%',
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.2
    })
  }, clientsSection.value)

  return () => ctx.revert()
})
</script>

<style scoped>
.marquee-track {
  width: max-content;
  animation: marquee 40s linear infinite;
}
.marquee-track:hover {
  animation-play-state: paused;
}
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
</style>
