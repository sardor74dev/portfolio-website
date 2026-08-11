<script>
import { useMainStore } from '../stores/MainStore';
import { IconChevronRight } from '@tabler/icons-vue';
import { IconChevronLeft } from '@tabler/icons-vue';

export default {
    name: "Carousel",
    components: {
        IconChevronRight,
        IconChevronLeft
    },
    data() {
        return {
            activeIndex: 0
        }
    },
    computed: {
        mainStore() {
            return useMainStore()
        },
        projectImages() {
            return this.mainStore.projects[this.$route.params.id - 1].fileName
        }
    },
    methods: {
        nextSlide() {
            this.activeIndex = (this.activeIndex + 1) % this.projectImages.length
        },
        prevSlide() {
            this.activeIndex = (this.activeIndex - 1 + this.projectImages.length) % this.projectImages.length
        },
        goToSlide(index) {
            this.activeIndex = index
        }
    }
}
</script>

<template>
    <div class="relative w-full min-[900px]:w-1/2 overflow-hidden">
        <!-- Carousel Items -->
        <div
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
        >
            <div
                v-for="(image, index) in mainStore.projects[$route.params.id-1].fileName"
                :key="index"
                class="min-w-full"
            >
                <img :src="`/${image}`" alt="" class="w-full object-cover rounded-lg" />
            </div>
        </div>

        <!-- Navigation -->
        <button
            @click="prevSlide"
            class="absolute md:top-[40%] top-1/2 left-0 transform -translate-y-1/2 bg-transparent text-white sm:p-2 min-[425px]:p-1 min-[375px]:p-0.5 p-px rounded-full"
        >
            <IconChevronLeft class="text-gray-300 hover:text-gray-50 min-[425px]:w-10 min-[375px]:w-8 min-[320px]:w-6 w-4" stroke={2} />
        </button>
        <button
            @click="nextSlide"
            class="absolute md:top-[40%] top-1/2 right-0 transform -translate-y-1/2 bg-transparent text-white sm:p-2 min-[425px]:p-1 min-[375px]:p-0.5 p-px rounded-full"
        >
            <IconChevronRight class="text-gray-300 hover:text-gray-50 min-[425px]:w-10 min-[375px]:w-8 min-[320px]:w-6 w-4" stroke={2} />
        </button>

        <!-- Anchor Links -->
        <div class="mt-4 hidden md:flex justify-center space-x-4">
            <a
                v-for="(image, index) in mainStore.projects[$route.params.id-1].fileName"
                :key="index"
                href="#"
                @click.prevent="goToSlide(index)"
                class="text-blue-500 hover:underline"
            >
                <img :src="`/${image}`" class="w-fit rounded-lg">
            </a>
        </div>
        <div class="absolute bottom-0 left-1/2 flex md:hidden transform -translate-x-1/2 space-x-2 sm:p-4 min-[425px]:p-3 min-[375px]:p-2 p-1">
            <span
                v-for="(image, index) in mainStore.projects[$route.params.id-1].fileName"
                :key="index"
                @click="goToSlide(index)"
                class="cursor-pointer min-[425px]:h-2 min-[425px]:w-2 w-1 h-1 rounded-full"
                :class="{
                'bg-white': activeIndex === index,
                'bg-gray-500': activeIndex !== index,
                }"
            ></span>
        </div>
        <h2>{{ $route.params.title }}</h2>
    </div>
</template>

<style scoped>

</style>