<template>
  <section class="py-20 md:py-28 bg-slate-50 overflow-hidden" ref="whySection">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-20">
        <!-- Header Area -->
        <div class="lg:w-1/2 why-header opacity-0 translate-y-8">
          <span class="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
            {{ content.why.label }}
          </span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
            {{ content.why.headline }}
          </h2>
          <p class="text-lg text-slate-600 font-medium">
            {{ content.why.introduction }}
          </p>
        </div>

        <!-- Challenges List -->
        <div class="lg:w-1/2">
          <div class="space-y-4">
            <div 
              v-for="(problem, index) in content.why.problems" 
              :key="index"
              class="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-slate-100 why-problem opacity-0 translate-x-8 transition-transform hover:-translate-y-1"
            >
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 mt-0.5">
                <span class="text-sm font-bold">{{ index + 1 }}</span>
              </div>
              <p class="text-slate-800 font-medium">
                {{ problem }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Response Area -->
    
      
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { CheckCircleIcon } from 'lucide-vue-next'
import { useCompanyData } from '~/composables/useCompanyData'
import { useNuxtApp } from '#app'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const { content } = useCompanyData()
const whySection = ref<HTMLElement | null>(null)
const { $gsap } = useNuxtApp()

onMounted(() => {
  const gsapInstance = $gsap || gsap
  gsapInstance.registerPlugin(ScrollTrigger)
  
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
  if (prefersReducedMotion) {
    gsapInstance.set('.why-header, .why-problem, .why-response', { opacity: 1, x: 0, y: 0 })
    return
  }

  const ctx = gsapInstance.context(() => {
    // Header animation
    gsapInstance.to('.why-header', {
      scrollTrigger: {
        trigger: whySection.value,
        start: 'top 80%',
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out'
    })
    
    // Problems stagger
    gsapInstance.to('.why-problem', {
      scrollTrigger: {
        trigger: '.why-problem',
        start: 'top 85%',
      },
      opacity: 1,
      x: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out'
    })

    // Response animation
    gsapInstance.to('.why-response', {
      scrollTrigger: {
        trigger: '.why-response',
        start: 'top 90%',
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out'
    })
  }, whySection.value)

  return () => ctx.revert()
})
</script>
