<script setup>
import { reactive } from 'vue'

const socialMediaIcons = reactive([
  { name: "Telegram", slug: "telegram", link: "https://t.me/Ibragimov_410", color: "#E34F26" },
  { name: "X", slug: "x", link: "https://t.me/Ibragimov_410", color: "#1572B6" },
  { name: "LinkedIn", slug: "linkedin", link: "https://t.me/Ibragimov_410", color: "#F7DF1E" },
  { name: "GitHub", slug: "github", link: "https://github.com/sardor74dev", color: "#06B6D4" },
  { name: "Gmail", slug: "gmail", link: "mailto:sardor777ibragimov@gmail.com", color: "#4FC08D" },
])
</script>

<template>
    <footer class="bg-gray-800 text-gray-200 mt-60 py-8">
      <div class="container mx-auto text-center">
        <section class="text-center">
          <ul class="flex items-center justify-center lg:gap-8 md:gap-6 sm:gap-4 gap-2">
            <li
              v-for="icon in socialMediaIcons" 
              :key="icon"
              class="relative group flex flex-col gap-5 items-center bg-gray-800"
            >
              <a :href="`${icon.link}`" class="opacity-70 hover:opacity-100 responsive-icon">
                <img 
                  :src="`https://cdn.simpleicons.org/${icon.slug}/white`"
                />
              </a>
            </li>
          </ul>
        </section>
        <p class="min-[321px]:mt-7 min-[426px]:mt-mt-10 mt-5 text-sm text-slate-500">
          2024 Sardor Ibragimov
        </p>
      </div>
    </footer>
</template>

<style lang="scss" scoped>

</style>