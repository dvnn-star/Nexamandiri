<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-4">Insight Details</h1>
    <p>Insight slug: {{ $route.params.slug }}</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
</script>
