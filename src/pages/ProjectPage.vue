<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useMainStore } from '../stores/MainStore'
import Carousel from '../components/Carousel.vue'

const route = useRoute()
const mainStore = useMainStore()

const projectInfo = computed(() => {
    return mainStore.projects[route.params.id-1]
})
</script>

<template>
    <div class="flex min-[900px]:flex-row flex-col gap-5 min-[425px]:p-5 p-4 bg-gray-800 bg-opacity-80 min-[425px]:rounded-[1.5rem] rounded-[1.5rem] shadow-lg mt-36 w-full">
        <Carousel />
        <div class="flex flex-col">
            <div class="flex flex-col">
                <h3 class="text-lg leading-6 font-semibold text-left text-[#38bdf8] mb-2">{{ projectInfo.subtitle }}</h3>
                <h2 class="title text-left mb-4">{{ projectInfo.title }}</h2>
                <p class="p text-left min-[900px]:max-w-md">{{ projectInfo.description }}</p>
            </div>
            <div class="flex flex-col">
                <div class="flex flex-wrap mt-4">
                    <span 
                        v-for="tech in mainStore.projects[$route.params.id-1].techStack"
                        :key="tech"
                        class="badge"
                    >
                        {{ tech }}
                    </span>
                </div>
                <div class="flex min-[425px]:flex-row flex-col mt-4 gap-2">
                    <a 
                        class="button bg-gray-200 hover:bg-gray-300 text-black min-[425px]:w-fit w-full" 
                        :href="`${projectInfo.link}`" 
                        target="_blank"
                    >
                        Visit
                    </a>
                    <a
                        class="button bg-gray-200 hover:bg-gray-300 text-black min-[425px]:w-fit w-full flex justify-center items-center gap-2" 
                        :href="`${projectInfo.repository}`" 
                        target="_blank"
                    >
                        <img
                            :src="`https://cdn.simpleicons.org/github`" 
                            class="w-4 h-4"
                        />
                        Repository
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>