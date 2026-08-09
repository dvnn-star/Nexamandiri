<template>
  <div class="min-h-screen flex flex-col font-sans">
    <LayoutNavbar />
    <main class="flex-grow">
      <slot />
    </main>
    <LayoutFooter />
    <WhatsAppButton />
  </div>
</template>

<script setup lang="ts">
// Default layout
</script>
