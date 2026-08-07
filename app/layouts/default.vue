<template>
  <div class="min-h-screen flex flex-col">
    <header class="border-b">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-xl font-bold">{{ $t('company.name', 'Nexa Mandiri') }}</h1>
        <nav class="space-x-4">
          <NuxtLinkLocale to="/">Home</NuxtLinkLocale>
          <NuxtLinkLocale to="/about">About</NuxtLinkLocale>
          <NuxtLinkLocale to="/services">Services</NuxtLinkLocale>
          <NuxtLinkLocale to="/projects">Projects</NuxtLinkLocale>
          <NuxtLinkLocale to="/insights">Insights</NuxtLinkLocale>
          <NuxtLinkLocale to="/contact">Contact</NuxtLinkLocale>
        </nav>
      </div>
    </header>
    <main class="flex-grow">
      <slot />
    </main>
    <footer class="border-t py-8">
      <div class="container mx-auto px-4 text-center">
        <p>&copy; {{ new Date().getFullYear() }} Nexa Mandiri Group. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>
