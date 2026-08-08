<template>
  <section ref="heroSection" class="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
    <!-- Placeholder Image Background -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40 z-10"></div>
      <img 
        src="https://images.unsplash.com/photo-1541888088320-bf1bce046fa6?q=80&w=2000&auto=format&fit=crop" 
        alt="Nexa Mandiri Engineering Construction Placeholder" 
        class="w-full h-full object-cover opacity-60"
        loading="eager"
      />
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
      <div class="max-w-3xl hero-content opacity-0 translate-y-8">
        <!-- Subheading / Badge -->
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-6">
          <span class="w-2 h-2 rounded-full bg-blue-500"></span>
          {{ content.company.name }}
        </div>

        <!-- Headline -->
        <h1 class="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
          {{ content.hero.headline }}
        </h1>
        
        <!-- Description -->
        <p class="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
          {{ content.hero.description }}
        </p>
        
        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row gap-4">
          <NuxtLink 
            to="/contact" 
            class="inline-flex justify-center items-center px-8 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300 group"
          >
            {{ content.hero.primaryCta }}
            <ArrowRightIcon class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </NuxtLink>
          
          <NuxtLink 
            to="/projects" 
            class="inline-flex justify-center items-center px-8 py-4 text-base font-semibold text-white bg-slate-800/80 hover:bg-slate-700/80 backdrop-blur-sm border border-slate-700 rounded-lg transition-colors duration-300"
          >
            {{ content.hero.secondaryCta }}
          </NuxtLink>
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

const { content } = useCompanyData()
const heroSection = ref<HTMLElement | null>(null)
const { $gsap } = useNuxtApp()

onMounted(() => {
  // Use Nuxt's $gsap if available, fallback to imported gsap
  const gsapInstance = $gsap || gsap

  // Respect prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
  if (prefersReducedMotion) {
    gsapInstance.set('.hero-content', { opacity: 1, y: 0 })
    return
  }

  const ctx = gsapInstance.context(() => {
    gsapInstance.to('.hero-content', {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: 'power3.out',
      clearProps: 'all'
    })
  }, heroSection.value)

  return () => ctx.revert()
})
</script>
