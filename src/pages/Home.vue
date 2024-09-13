<script setup>
import { reactive } from "vue";
import { useMainStore } from "../stores/MainStore"

const mainStore = useMainStore()

const techStackIcons = reactive([
  { name: "HTML5", slug: "html5", color: "#E34F26" },
  { name: "CSS3", slug: "css3", color: "#1572B6" },
  { name: "JavaScript", slug: "javascript", color: "#F7DF1E" },
  { name: "TailwindCSS", slug: "tailwindcss", color: "#06B6D4" },
  { name: "Vue.js", slug: "vuedotjs", color: "#4FC08D" },
  { name: "Git", slug: "git", color: "#F05032" },
  { name: "GitHub", slug: "github", color: "#F05032" },
])

const contacts = reactive([
  { title: 'Location', link_or_info: 'Fergana, Uzbekistan' },
  { title: 'Telegram / Whatsapp', link_or_info: '+998 (91) 040-14-85' },
  { title: 'Email', link_or_info: 'sardor777ibragimov@gmail.com' }
])
</script>

<template>
  <div class="text-center">
    <section id="home" class="flex flex-col items-center pt-36">
      <img class="w-96 mt-4" src="/1 (2).jpg" alt="my photo">
      <h1 class="text-4xl font-bold mt-6">Hi, my name is Sardor</h1>
      <p class="text-xl my-2">I'm a Frontend Developer</p>
      <a 
        class="button bg-gray-800 hover:bg-gray-700 text-white"
        href="/Ибрагимов_Сардор_резюме.pdf"
        download="Sardor_CV.pdf"  
      >
        Download CV
      </a>
    </section>
    <section id="projects" class="pt-40 text-center">
      <h2 class="title mb-10">Projects</h2>
      <ul class="grid lg:grid-cols-3 sm:grid-cols-2">
        <li
          class="lg:m-4 sm:m-2 m-1 p-4 bg-gray-800 bg-opacity-80 rounded-[1.25rem] shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-200 ease-in-out"
          v-for="project in mainStore.projects"
          :key="project.title"
        >
          <img :src="`/${project.fileName[0]}.png`" class="rounded-t-lg">
          <div class="py-4 text-left">
            <router-link :to="`/project/${project.id}`">
              <h2 class="text-xl font-semibold">{{ project.title }}</h2>
            </router-link>
            <p class="mt-2 p">
              Technologies used:
              <span
                v-for="tech in project.techStack" 
                :key="tech" 
                class="badge"
              >
                {{ tech }}
              </span>
            </p>
          </div>
        </li>
      </ul>
    </section>
    <section id="skills" class="pt-40 text-center">
      <h2 class="title">Skills</h2>
      <ul class="grid grid-cols-1 min-[425px]:grid-cols-2 lg:grid-cols-4 md:grid-cols-3">
        <li
          v-for="icon in techStackIcons"
          :key="icon" 
          class="relative group m-1 max-[400px]:m-2 p-4  flex flex-col items-center bg-gray-800 hover:bg-slate-100"
        >
          <img
            :src="`https://cdn.simpleicons.org/${icon.slug}/e2e8f0`" 
            class="transition-opacity duration-100 group-hover:opacity-0 w-52 h-52"
          />
          <img
            :src="`https://cdn.simpleicons.org/${icon.slug}`" 
            class="absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100 w-52 h-52"
          />
        </li>
      </ul>
    </section>
    <section id="contacts" class="pt-40 text-center">
      <h2 class="title">Contact me</h2>
      <ul class="flex flex-col items-center justify-center mt-12 lg:gap-10 md:gap-8 sm:gap-6 gap-4">
        <li
          v-for="contact in contacts" 
          :key="contact"
          class="relative group flex flex-col gap-4 justify-center"
        >
          <h2 class="subtitle">{{ contact.title }}</h2>
          <p class="p">{{ contact.link_or_info }}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>

</style>