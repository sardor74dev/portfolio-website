<script setup>
defineProps({
    isMenuOpened: {
        type: Boolean,
        required: true
    },
    toggleMenu: {
        type: Function,
        required: true
    },
    menuItems: {
        type: Array,
        required: true
    },
})
</script>

<template>
    <nav
        :class="isMenuOpened ? 'block' : 'hidden'"
        class="fixed flex justify-between sm:hidden top-4 right-0 max-w-4xl w-6/12 rounded-lg shadow-lg p-4 text-base font-semibold text-slate-400 bg-slate-800 transition transform duration-500 -translate-x-5"  
    >
        <ul class="sm:hidden text-left">
            <li v-for="item in menuItems" :key="item" class="my-8">
                <router-link
                    @click="toggleMenu"
                    :to="`/#${item.toLowerCase()}`"
                    class="px-4 py-2 rounded-md text-gray-300 hover:text-sky-500 font-semibold font-sans text-sm leading-6"
                >
                    {{ item }}
                </router-link>
            </li>
        </ul>
        <button @click="toggleMenu" class="w-6 h-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 top-5 right-5 stroke-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
        </button>
    </nav>
</template>

<style scoped>

</style>