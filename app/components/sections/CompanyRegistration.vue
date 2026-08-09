<template>
  <section class="bg-slate-50 py-24 relative overflow-hidden reg-section">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
          Registered Company Information
        </h2>
        <p class="text-lg text-slate-600">
          Official registration and corporate details of PT Nexa Mandiri Group.
        </p>
      </div>

      <!-- Content Grid -->
      <div class="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
        
        <!-- Left: Company Information Card (68%) -->
        <div class="lg:w-[68%] bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div class="flex-grow p-8 md:p-10 flex flex-col justify-center">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              
              <!-- Row 1 -->
              <div class="md:col-span-2 border-b border-slate-100 pb-4">
                <span class="block text-xs font-bold uppercase tracking-wider text-red-600 mb-1">Registered Name</span>
                <span class="block text-2xl md:text-3xl font-bold text-slate-900">PT Nexa Mandiri Group</span>
              </div>

              <!-- Row 2 -->
              <div class="border-b md:border-b-0 border-slate-100 pb-4 md:pb-0">
                <span class="block text-xs font-bold uppercase tracking-wider text-red-600 mb-1">Legal Form</span>
                <span class="block text-xl md:text-2xl font-bold text-slate-900">Indonesian Limited Liability Company (PT)</span>
              </div>

              <!-- Row 3 -->
              <div class="border-b md:border-b-0 border-slate-100 pb-4 md:pb-0">
                <span class="block text-xs font-bold uppercase tracking-wider text-red-600 mb-1">NIB</span>
                <span class="block text-xl md:text-2xl font-bold text-slate-900">1905260072336</span>
              </div>

              <!-- Row 4 -->
              <div class="border-b border-slate-100 pb-4 md:pt-4">
                <span class="block text-xs font-bold uppercase tracking-wider text-red-600 mb-1">Investment Status</span>
                <span class="block text-xl md:text-2xl font-bold text-slate-900">PMDN</span>
              </div>

              <!-- Row 5 -->
              <div class="border-b border-slate-100 pb-4 md:pt-4">
                <span class="block text-xs font-bold uppercase tracking-wider text-red-600 mb-1">Registered Domicile</span>
                <span class="block text-xl md:text-2xl font-bold text-slate-900">Batam City, Riau Islands</span>
              </div>

              <!-- Row 6 -->
              <div class="md:col-span-2 pt-1 md:pt-4">
                <span class="block text-xs font-bold uppercase tracking-wider text-red-600 mb-1">Established</span>
                <span class="block text-xl md:text-2xl font-bold text-slate-900">2026</span>
              </div>

            </div>
          </div>
        </div>

        <!-- Right: Corporate Registration Card (32%) -->
        <div class="lg:w-[32%] bg-slate-900 rounded-2xl p-8 md:p-10 flex flex-col justify-between shadow-lg">
          <div>
            <NuxtImg 
              src="/logoteks.png" 
              alt="Nexa Mandiri Logo" 
              class="h-18 rounded-3xl w-full  mb-5" 
            />
            
            <h3 class="text-2xl font-bold text-white mb-6">Corporate Registration</h3>
            
            <p class="text-slate-300 leading-relaxed">
              PT Nexa Mandiri Group is an Indonesian limited liability company established in 2026 and registered to provide construction, project consultancy, material supply, and related project support services.
            </p>
          </div>
          
          <div class="mt-12 pt-8 border-t border-slate-800">
            <p class="text-sm text-slate-400">
              Based on the company's available registration records.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Company registration section component
</script>
