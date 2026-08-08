<template>
  <section class="py-16 md:py-24 bg-white" ref="ctaSection">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="bg-slate-900 rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl cta-content opacity-0 translate-y-8 flex flex-col md:flex-row items-center justify-between gap-10">
        
        <!-- Decorative subtle elements -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        
        <!-- Text Structure (Left Side) -->
        <div class="relative z-10 md:w-2/3 text-left">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {{ content.cta.headline }}
          </h2>
          <p class="text-lg text-slate-300 font-medium max-w-xl">
            {{ content.cta.statement }}
          </p>
        </div>
        
        <!-- Button (Right Side) -->
        <div class="relative z-10 flex-shrink-0 md:w-1/3 flex md:justify-end w-full md:w-auto">
          <NuxtLinkLocale 
            to="/contact" 
            class="inline-flex w-full md:w-auto justify-center items-center px-8 py-4 text-base font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all duration-300 group shadow-lg shadow-blue-900/50"
          >
            {{ content.cta.button }}
            <ArrowRightIcon class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </NuxtLinkLocale>
        </div>

      </div>
      
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ArrowRightIcon } from 'lucide-vue-next'
import { useCompanyData } from '~/composables/useCompanyData'
import { useNuxtApp } from '#app'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const { content } = useCompanyData()
const ctaSection = ref<HTMLElement | null>(null)
const { $gsap } = useNuxtApp()

onMounted(() => {
  const gsapInstance = $gsap || gsap
  gsapInstance.registerPlugin(ScrollTrigger)
  
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
  if (prefersReducedMotion) {
    gsapInstance.set('.cta-content', { opacity: 1, y: 0 })
    return
  }

  const ctx = gsapInstance.context(() => {
    gsapInstance.to('.cta-content', {
      scrollTrigger: {
        trigger: ctaSection.value,
        start: 'top 85%',
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out'
    })
  }, ctaSection.value)

  return () => ctx.revert()
})
</script>
