<template>
  <section class="py-24 bg-white relative overflow-hidden founder-section">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      
      <!-- Section Heading -->
      <div class="text-center max-w-3xl mx-auto mb-20 founder-heading">
        <h2 class="text-base md:text-lg font-bold uppercase tracking-widest text-blue-600 mb-4">
          {{ content.aboutPage.founder.title }}
        </h2>
        <h3 class="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
          {{ content.aboutPage.founder.headline }}
        </h3>
      </div>

      <!-- 12-Column Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        <!-- Left: Image (5 cols) -->
        <div class="lg:col-span-5 founder-image">
          <NuxtImg 
            src="/cliend.webp" 
            alt="Herman Cahyadi - Founder" 
            class="w-full h-[500px] lg:h-[650px] object-cover rounded-2xl shadow-sm border border-slate-100" 
          />
        </div>

        <!-- Right: Content (7 cols) -->
        <div class="lg:col-span-7 flex flex-col justify-center founder-content">
          <div class="max-w-2xl">
            <span class="block text-base md:text-lg font-bold uppercase tracking-widest text-blue-600 mb-4">
              {{ content.aboutPage.founder.title }}
            </span>
            <h4 class="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 tracking-tight">
              {{ content.aboutPage.founder.name }}
            </h4>
            
            <div class="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p v-for="(p, i) in content.aboutPage.founder.paragraphs" :key="i">
                {{ p }}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { content } = useCompanyData()
</script>
