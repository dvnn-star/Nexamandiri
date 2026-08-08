<template>
  <main class="bg-white min-h-screen text-slate-800">

    <!-- Hero (Classic Enterprise) -->
    <section class="relative h-[40vh] min-h-[500px] flex items-center overflow-hidden">
      <div class="absolute inset-0">
        <img src="/images/projects/commercial/1.webp" class="w-full h-full object-cover hero-bg" alt="Hero Background" />
        <div class="absolute inset-0 bg-slate-900/70"></div>
      </div>
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-3xl">
          <h1 class="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight hero-text opacity-0 translate-y-8">
            {{ content.aboutPage.heroTitle }}
          </h1>
          <p class="text-xl md:text-2xl text-slate-200 font-light leading-relaxed hero-text opacity-0 translate-y-8">
            {{ content.aboutPage.heroSubtitle }}
          </p>
        </div>
      </div>
    </section>

    <!-- Who We Are -->
    <section class="py-20 lg:py-25 overflow-hidden who-we-are-section">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div class="lg:w-1/2">
            <h3 class="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight wwa-text opacity-0 translate-y-8">{{
              content.aboutPage.whoWeAre.title }}</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-8 wwa-text opacity-0 translate-y-8">
              {{ content.aboutPage.whoWeAre.description }}
            </p>
            <div class="w-20 h-1 bg-blue-600 wwa-text opacity-0 translate-y-8"></div>
          </div>
          <div class="lg:w-1/2 w-full wwa-image opacity-0 translate-x-8">
            <img src="/documents/holidayinn.webp" alt="Who We Are"
              class="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>



    <!-- Core Services -->
    <section class="py-20 lg:py-28 bg-slate-50 services-section">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div class="text-center mb-16 services-header opacity-0 translate-y-8">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{{ content.aboutPage.coreServices.title }}</h2>
          <p class="text-lg text-slate-600 max-w-2xl mx-auto">{{ content.aboutPage.coreServices.description }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(service, index) in content.aboutPage.coreServices.items" :key="index"
            class="bg-white p-8 rounded-lg shadow-sm border border-slate-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 service-card opacity-0 translate-y-8">
            <div class="w-12 h-12 bg-blue-50 text-blue-600 flex items-center justify-center rounded-lg mb-6">
              <BriefcaseIcon class="w-6 h-6" />
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">{{ service.title }}</h3>
            <p class="text-slate-600 leading-relaxed">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- The Nexa Way -->
    <section class="py-20 lg:py-28 bg-white border-t border-slate-100 nexa-way-section">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div class="flex flex-col lg:flex-row gap-16">
          <div class="lg:w-1/3 nw-header opacity-0 translate-x-[-1rem]">
            <h2 class="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Philosophy</h2>
            <h3 class="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{{ content.aboutPage.nexaWay.title }}</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-8">{{ content.aboutPage.nexaWay.description }}</p>
          </div>
          <div class="lg:w-2/3">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              <div v-for="(pillar, idx) in content.aboutPage.nexaWay.pillars" :key="idx" class="flex gap-5 nw-pillar opacity-0 translate-y-8">
                <div class="mt-1 flex-shrink-0">
                  <CheckCircle2Icon class="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 class="text-xl font-bold text-slate-900 mb-2">{{ pillar }}</h4>
                  <p class="text-slate-500 leading-relaxed">Our dedication to this principle ensures that every project
                    meets the highest industry standards for success and sustainability.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <SectionsClientsSection />
  </main>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { BriefcaseIcon, CheckCircle2Icon } from 'lucide-vue-next'
import { useCompanyData } from '~/composables/useCompanyData'
import { useHead, useNuxtApp } from '#imports'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const { content } = useCompanyData()
const { $gsap } = useNuxtApp()
let ctx: gsap.Context

useHead({
  title: 'About Us | Nexa Mandiri Group',
  meta: [
    { name: 'description', content: 'Learn about Nexa Mandiri Group, our core services, and our philosophy.' }
  ]
})

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const gsapInstance = $gsap || gsap
  gsapInstance.registerPlugin(ScrollTrigger)

  if (prefersReducedMotion) {
    gsapInstance.set('.hero-text, .wwa-text, .wwa-image, .services-header, .service-card, .nw-header, .nw-pillar', { opacity: 1, x: 0, y: 0 })
    return
  }

  ctx = gsapInstance.context(() => {
    // Hero Animations
    gsapInstance.to('.hero-text', {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      delay: 0.2
    })
    
    gsapInstance.from('.hero-bg', {
      scale: 1.1,
      duration: 2,
      ease: 'power2.out'
    })

    // Who We Are Animations
    gsapInstance.to('.wwa-text', {
      scrollTrigger: {
        trigger: '.who-we-are-section',
        start: 'top 80%',
      },
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    })

    gsapInstance.to('.wwa-image', {
      scrollTrigger: {
        trigger: '.who-we-are-section',
        start: 'top 80%',
      },
      x: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out'
    })

    // Core Services
    gsapInstance.to('.services-header', {
      scrollTrigger: {
        trigger: '.services-section',
        start: 'top 85%',
      },
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out'
    })

    gsapInstance.to('.service-card', {
      scrollTrigger: {
        trigger: '.services-section',
        start: 'top 75%',
      },
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    })

    // The Nexa Way
    gsapInstance.to('.nw-header', {
      scrollTrigger: {
        trigger: '.nexa-way-section',
        start: 'top 85%',
      },
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out'
    })

    gsapInstance.to('.nw-pillar', {
      scrollTrigger: {
        trigger: '.nexa-way-section',
        start: 'top 80%',
      },
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    })
  })
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>
