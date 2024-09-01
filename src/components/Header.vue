<script setup>
import BurgerMenu from "./BurgerMenu.vue";
import { onMounted, onBeforeUnmount, computed, ref } from "vue";

// header blurring
const scrolled = ref(false)
const blurBackground = () => {
  return 'bg-[#0F172A] bg-opacity-40 backdrop-blur-lg'
}

const headerClass = computed(() => {
  return scrolled.value ? blurBackground() : 'bg-transparent'
})

const handleScroll = () => {
  scrolled.value = window.scrollY > 0
  console.log('Scroll Y:', window.scrollY)
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll))

// header menu & burger menu
const menuItems = ref(['Home', 'Projects', 'Skills', 'Contacts'])

const isMenuOpened = ref(false),
toggleMenu = () => {
  isMenuOpened.value = !isMenuOpened.value
}

// logo
const isHovered = ref(false)

const handleMouseBehavior = (condition) => {
  condition ? isHovered.value = true : isHovered.value = false
}

const changeLogo = computed(() => {
  const res =  isHovered.value ? 'sky-500' : 'white'
  console.log(res)
  return res
})  
</script>

<template>
  <header :class="headerClass" class="fixed top-0 left-0 z-50 w-full text-gray-200 py-6 shadow-md transition duration-500">
      <div class="container max-w-7xl mx-auto px-10 flex justify-between text-center">
        <img
          @mouseover="handleMouseBehavior(true)"
          @mouseleave="handleMouseBehavior(false)" 
          class="w-8"
          :src="`/src/assets/images/logos&me/si-high-resolution-logo-${changeLogo}-transparent-2.svg`" 
          alt="logo"
        >
        <nav class="flex">
          <ul class="sm:flex hidden gap-1 lg:gap-4 md:gap-2">
            <li v-for="item in menuItems" :key="item" class="m-auto">
              <a
                :href="`#${item.toLowerCase()}`"
                class="px-4 py-2 rounded-md hover:text-sky-500 font-semibold font-sans text-sm leading-6"
              >
                {{ item }}
              </a>
            </li>
          </ul>
        </nav>
        <button @click="toggleMenu" class="sm:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 stroke-slate-200 hover:stroke-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
        <BurgerMenu 
          :isMenuOpened="isMenuOpened" 
          :toggleMenu="toggleMenu"
          :menuItems="menuItems"
        />
      </div>
    </header>
</template>

<style scoped>

</style>