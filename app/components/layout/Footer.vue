<template>
  <footer class="bg-slate-950 text-slate-300 pt-20 pb-10 mt-auto border-t border-slate-900">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Top Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
        
        <!-- Company Info -->
        <div class="lg:col-span-5">
          <NuxtLinkLocale to="/" class="inline-flex items-center gap-3 mb-6">
            <NuxtImg src="/Logo.webp" alt="Nexa Mandiri Logo" class="h-10 w-auto brightness-0 invert" />
            <span class="text-2xl font-bold text-white">{{ content.company.name }}</span>
          </NuxtLinkLocale>
          <p class="text-slate-400 leading-relaxed max-w-sm mb-6">
            {{ content.footer.description }}
          </p>
        </div>
        
        <!-- Quick Links -->
        <div class="lg:col-span-3">
          <h3 class="text-lg font-semibold text-white mb-6 uppercase tracking-wider text-sm">{{ content.footer.quickLinks }}</h3>
          <ul class="space-y-4">
            <li><NuxtLinkLocale to="/" class="hover:text-blue-400 transition-colors">Home</NuxtLinkLocale></li>
            <li><NuxtLinkLocale to="/about" class="hover:text-blue-400 transition-colors">About Us</NuxtLinkLocale></li>
            <li><NuxtLinkLocale to="/services" class="hover:text-blue-400 transition-colors">Services</NuxtLinkLocale></li>
            <li><NuxtLinkLocale to="/projects" class="hover:text-blue-400 transition-colors">Projects</NuxtLinkLocale></li>
            <li><NuxtLinkLocale to="/contact" class="hover:text-blue-400 transition-colors">Contact</NuxtLinkLocale></li>
          </ul>
        </div>
        
        <!-- Contact Info -->
        <div class="lg:col-span-4">
          <h3 class="text-lg font-semibold text-white mb-6 uppercase tracking-wider text-sm">{{ content.footer.contact }}</h3>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <MapPinIcon class="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <span>{{ content.footer.address }}</span>
            </li>
            <li class="flex items-center gap-3">
              <MailIcon class="w-5 h-5 text-blue-500 flex-shrink-0" />
              <a :href="'mailto:' + content.footer.email" class="hover:text-blue-400 transition-colors">{{ content.footer.email }}</a>
            </li>
            <li class="flex items-center gap-3">
              <PhoneIcon class="w-5 h-5 text-blue-500 flex-shrink-0" />
              <a :href="'tel:' + content.footer.phone" class="hover:text-blue-400 transition-colors">{{ content.footer.phone }}</a>
            </li>
          </ul>
        </div>
        
      </div>
      
      <!-- Bottom Section -->
      <div class="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="text-slate-500 text-sm">
          &copy; {{ new Date().getFullYear() }} {{ content.company.name }}. {{ content.footer.rights }}
        </div>
        <div class="flex items-center gap-6 text-sm text-slate-500">
          <NuxtLinkLocale to="/" class="hover:text-slate-300 transition-colors">Privacy Policy</NuxtLinkLocale>
          <NuxtLinkLocale to="/" class="hover:text-slate-300 transition-colors">Terms of Service</NuxtLinkLocale>
        </div>
      </div>
      
    </div>
  </footer>
</template>

<script setup lang="ts">
import { MapPinIcon, MailIcon, PhoneIcon } from 'lucide-vue-next'
import { useCompanyData } from '~/composables/useCompanyData'
const { content } = useCompanyData()
</script>
