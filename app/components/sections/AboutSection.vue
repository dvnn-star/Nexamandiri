<template>
  <section class="py-20 md:py-28 bg-white" ref="aboutSection">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        <!-- Text Content -->
        <div class="lg:w-1/2 about-content opacity-0 translate-y-8">

          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
            {{ content.about.subheading }}
          </h2>

          <div class="space-y-6 text-lg text-slate-600">
            <p class="font-medium text-slate-800">
              {{ content.about.description }}
            </p>
            <p>
              {{ content.about.details }}
            </p>
            <p class="border-l-4 border-blue-600 pl-4 py-3 italic text-slate-700 bg-slate-50 rounded-r-lg">
              {{ content.about.role }}
            </p>
          </div>

          <div class="mt-10">
            <NuxtLinkLocale to="/about"
              class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
              v-if="$localeRoute">

              {{ $i18n.locale === 'id' ? 'Pelajari Lebih Lanjut' : 'Learn More' }}

              <ArrowRightIcon class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </NuxtLinkLocale>
          </div>
        </div>

        <!-- Image Graphic -->
        <div class="lg:w-1/2 w-full about-image opacity-0 translate-x-8">
          <div class="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
            <div class="absolute inset-0 bg-blue-900/10 z-10 mix-blend-multiply"></div>
            <img src="/about.avif" alt="Nexa Mandiri Construction Placeholder" class="w-full h-full object-cover"
              loading="lazy" />

            <!-- Decorative badge -->
            <div class="absolute bottom-0 left-0 bg-white p-6 rounded-tr-2xl z-20">
              <div class="flex items-center gap-2">
                <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                  <Building2Icon class="w-6 h-6" />
                </div>
                <div>
                  <p class="font-bold text-slate-900">Batam, Indonesia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ArrowRightIcon, Building2Icon } from 'lucide-vue-next'
import { useCompanyData } from '~/composables/useCompanyData'
import { useNuxtApp } from '#app'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const { content } = useCompanyData()
const aboutSection = ref<HTMLElement | null>(null)
const { $gsap } = useNuxtApp()

onMounted(() => {
  const gsapInstance = $gsap || gsap
  gsapInstance.registerPlugin(ScrollTrigger)

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReducedMotion) {
    gsapInstance.set('.about-content, .about-image', { opacity: 1, x: 0, y: 0 })
    return
  }

  const ctx = gsapInstance.context(() => {
    gsapInstance.to('.about-content', {
      scrollTrigger: {
        trigger: aboutSection.value,
        start: 'top 80%',
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out'
    })

    gsapInstance.to('.about-image', {
      scrollTrigger: {
        trigger: aboutSection.value,
        start: 'top 75%',
      },
      opacity: 1,
      x: 0,
      duration: 1,
      delay: 0.2,
      ease: 'power3.out'
    })
  }, aboutSection.value)

  return () => ctx.revert()
})
</script>
