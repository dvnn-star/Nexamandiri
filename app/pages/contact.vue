<template>
  <main class="bg-slate-50 min-h-screen text-slate-600 py-24 lg:py-32 relative overflow-hidden">
    
    <!-- Decorative background elements -->
    <div class="absolute top-0 right-0 w-2/3 h-full bg-blue-100/50 blur-[150px] rounded-full pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-1/3 h-2/3 bg-blue-50/80 blur-[120px] rounded-full pointer-events-none"></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start max-w-7xl mx-auto">
        
        <!-- Left: Text & Info -->
        <div class="space-y-16 lg:pr-12">
          <div>
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight">
              {{ content.contactPage.title }}
            </h1>
            <p class="text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
              {{ content.contactPage.subtitle }}
            </p>
            <p class="mt-6 text-slate-500 max-w-lg leading-relaxed">
              {{ content.contactPage.description }}
            </p>
          </div>

          <!-- Contact Details (Light Mode) -->
          <div class="space-y-10 pt-10 border-t border-slate-200">
            <div class="group">
              <h3 class="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-3">
                <MapPinIcon class="w-5 h-5 text-blue-600" /> Office
              </h3>
              <p class="text-slate-900 text-xl font-medium group-hover:text-blue-600 transition-colors pl-8">{{ content.footer.address }}</p>
            </div>
            
            <div class="group">
              <h3 class="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-3">
                <MailIcon class="w-5 h-5 text-blue-600" /> Email
              </h3>
              <a :href="'mailto:' + content.footer.email" class="text-slate-900 text-xl font-medium group-hover:text-blue-600 transition-colors block pl-8">{{ content.footer.email }}</a>
            </div>

            <div class="group">
              <h3 class="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-3">
                <PhoneIcon class="w-5 h-5 text-blue-600" /> Phone
              </h3>
              <a :href="'tel:' + content.footer.phone" class="text-slate-900 text-xl font-medium group-hover:text-blue-600 transition-colors block pl-8">{{ content.footer.phone }}</a>
            </div>
          </div>
        </div>

        <!-- Right: The Form -->
        <div class="bg-white border border-slate-100 p-8 md:p-12 lg:p-14 rounded-[2.5rem] shadow-xl shadow-slate-200/50 relative">
          <!-- Subtle glow behind form -->
          <div class="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-50 rounded-[2.5rem] pointer-events-none"></div>
          
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-10 relative z-10">{{ content.contactPage.formTitle }}</h2>
          
          <form action="https://formsubmit.co/nexamandirigroup@gmail.com" method="POST" class="space-y-8 relative z-10">
            <!-- Hidden configuration for FormSubmit -->
            <input type="hidden" name="_captcha" value="false">
            <input type="hidden" name="_subject" value="New message from Nexa Mandiri website!">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="space-y-3">
                <label for="name" class="text-xs font-bold text-slate-500 uppercase tracking-widest">{{ content.contactPage.name }}</label>
                <input type="text" id="name" name="name" class="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all text-slate-900 placeholder-slate-400" required placeholder="John Doe" />
              </div>
              <div class="space-y-3">
                <label for="email" class="text-xs font-bold text-slate-500 uppercase tracking-widest">{{ content.contactPage.email }}</label>
                <input type="email" id="email" name="email" class="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all text-slate-900 placeholder-slate-400" required placeholder="john@company.com" />
              </div>
              
              <div class="space-y-3">
                <label for="phone" class="text-xs font-bold text-slate-500 uppercase tracking-widest">{{ content.contactPage.phone }}</label>
                <input type="tel" id="phone" name="phone" class="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all text-slate-900 placeholder-slate-400" required placeholder="+62 811..." />
              </div>
              <div class="space-y-3">
                <label for="country" class="text-xs font-bold text-slate-500 uppercase tracking-widest">{{ content.contactPage.country }}</label>
                <input type="text" id="country" name="country" class="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all text-slate-900 placeholder-slate-400" required placeholder="Indonesia" />
              </div>
            </div>
            
            <div class="space-y-3">
              <label for="subject" class="text-xs font-bold text-slate-500 uppercase tracking-widest">{{ content.contactPage.subject }}</label>
              <input type="text" id="subject" name="subject" class="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all text-slate-900 placeholder-slate-400" required placeholder="Project Inquiry" />
            </div>
            
            <div class="space-y-3">
              <label for="message" class="text-xs font-bold text-slate-500 uppercase tracking-widest">{{ content.contactPage.message }}</label>
              <textarea id="message" name="message" rows="5" class="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all resize-none text-slate-900 placeholder-slate-400" required placeholder="Tell us about your project requirements..."></textarea>
            </div>
            
            <div class="pt-4">
              <button type="submit" class="inline-flex items-center justify-center px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all duration-300 w-full md:w-auto shadow-lg shadow-blue-600/30 hover:shadow-xl hover:-translate-y-1">
                {{ content.contactPage.submit }}
                <SendIcon class="w-5 h-5 ml-3" />
              </button>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { MapPinIcon, MailIcon, PhoneIcon, SendIcon } from 'lucide-vue-next'
import { useSeoMeta } from '#imports'

const { content } = useCompanyData()

useSeoMeta({
  title: () => content.value.seo.contact.title,
  ogTitle: () => content.value.seo.contact.title,
  description: () => content.value.seo.contact.description,
  ogDescription: () => content.value.seo.contact.description,
  ogImage: '/Logo.webp',
})
</script>
