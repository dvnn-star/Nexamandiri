<template>
  <header class="border-b bg-white sticky top-0 z-50">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Logo / Company Name -->
      <NuxtLinkLocale to="/" class="text-xl font-bold flex items-center gap-2">
        <NuxtImg src="/Logo.webp" alt="Nexa Mandiri Logo" class="h-8 w-auto" />
        {{ content.company.name }}
      </NuxtLinkLocale>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center space-x-8">
        <NuxtLinkLocale to="/" class="text-slate-600 hover:text-blue-600 font-medium transition-colors">Home</NuxtLinkLocale>
        <NuxtLinkLocale to="/about" class="text-slate-600 hover:text-blue-600 font-medium transition-colors">About</NuxtLinkLocale>
        <NuxtLinkLocale to="/services" class="text-slate-600 hover:text-blue-600 font-medium transition-colors">Services</NuxtLinkLocale>
        <NuxtLinkLocale to="/projects" class="text-slate-600 hover:text-blue-600 font-medium transition-colors">Projects</NuxtLinkLocale>
        <NuxtLinkLocale to="/insights" class="text-slate-600 hover:text-blue-600 font-medium transition-colors">Insights</NuxtLinkLocale>
        <NuxtLinkLocale to="/contact" class="text-slate-600 hover:text-blue-600 font-medium transition-colors">Contact</NuxtLinkLocale>
        
        <!-- Language Switcher -->
        <div class="relative group">
          <button class="flex items-center gap-1 text-slate-600 hover:text-blue-600 font-medium transition-colors py-2">
            <GlobeIcon class="w-4 h-4" />
            <span class="uppercase">{{ locale }}</span>
            <ChevronDownIcon class="w-4 h-4" />
          </button>
          
          <!-- Dropdown -->
          <div class="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <div class="py-1">
              <button 
                v-for="l in availableLocales" 
                :key="l.code"
                @click="setLocale(l.code)"
                class="block w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                :class="{ 'font-bold bg-slate-50 text-blue-600': l.code === locale }"
              >
                {{ l.name || l.code.toUpperCase() }}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <!-- Mobile Menu Button -->
      <div class="md:hidden flex items-center gap-4">
        <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="text-slate-600 hover:text-blue-600 p-2 focus:outline-none">
          <MenuIcon v-if="!isMobileMenuOpen" class="w-6 h-6" />
          <XIcon v-else class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Nav -->
    <div 
      v-show="isMobileMenuOpen"
      class="md:hidden border-t bg-white absolute top-full left-0 w-full shadow-lg"
    >
      <nav class="flex flex-col px-4 py-4 space-y-4">
        <NuxtLinkLocale to="/" @click="isMobileMenuOpen = false" class="text-slate-600 font-medium px-2 py-1">Home</NuxtLinkLocale>
        <NuxtLinkLocale to="/about" @click="isMobileMenuOpen = false" class="text-slate-600 font-medium px-2 py-1">About</NuxtLinkLocale>
        <NuxtLinkLocale to="/services" @click="isMobileMenuOpen = false" class="text-slate-600 font-medium px-2 py-1">Services</NuxtLinkLocale>
        <NuxtLinkLocale to="/projects" @click="isMobileMenuOpen = false" class="text-slate-600 font-medium px-2 py-1">Projects</NuxtLinkLocale>
        <NuxtLinkLocale to="/insights" @click="isMobileMenuOpen = false" class="text-slate-600 font-medium px-2 py-1">Insights</NuxtLinkLocale>
        <NuxtLinkLocale to="/contact" @click="isMobileMenuOpen = false" class="text-slate-600 font-medium px-2 py-1">Contact</NuxtLinkLocale>
        
        <div class="border-t pt-4 mt-2">
          <p class="text-xs text-slate-400 mb-2 px-2 uppercase font-semibold">Language</p>
          <div class="flex flex-wrap gap-2 px-2">
            <button 
              v-for="l in availableLocales" 
              :key="l.code"
              @click="setLocaleAndClose(l.code)"
              class="px-3 py-1 text-sm border rounded-full transition-colors"
              :class="l.code === locale ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-600 border-slate-300'"
            >
              {{ l.name || l.code.toUpperCase() }}
            </button>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { MenuIcon, XIcon, GlobeIcon, ChevronDownIcon } from 'lucide-vue-next'
import { useCompanyData } from '~/composables/useCompanyData'
import { useI18n } from '#imports'

const { content } = useCompanyData()
const { locale, locales, setLocale } = useI18n()

const isMobileMenuOpen = ref(false)

const availableLocales = computed(() => {
  return locales.value.map(l => typeof l === 'string' ? { code: l } : l)
})

const setLocaleAndClose = (code: string) => {
  setLocale(code)
  isMobileMenuOpen.value = false
}
</script>
