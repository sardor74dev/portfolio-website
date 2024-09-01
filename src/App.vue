<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue'
</script>

<template>
  <div id="app" class="min-h-screen flex flex-col bg-custom-gradient text-gray-200">
    <Header />
    <main class="flex-grow container mx-auto max-w-7xl px-10">
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>