import { defineStore } from "pinia";
import { reactive } from "vue";

export const useMainStore = defineStore("MainStore", () => {
    const projects = reactive([
        { 
            id: 1,
            title: 'Go Corona', 
            subtitle: 'Stay Informed During the Pandemic',
            link: 'https://go-corona-health-care.netlify.app/',
            repository: 'https://github.com/sardor74dev/gocorona',
            fileName: ['gocorona', 'gocorona2', 'gocorona3', 'gocorona4'],  
            techStack: ['HTML5', 'CSS3'],
            description: 'A simple informational website about COVID-19. It provides key healthcare information and safety guidelines during the pandemic. Developed using HTML5 and CSS3 for responsive layouts.'
        },
        { 
            id: 2,
            title: 'Taste Eat',  
            subtitle: 'Discover and Savor the Best Dishes',
            link: 'https://taste-eat-drab.vercel.app/', 
            repository: 'https://github.com/sardor74dev/TasteEat',
            fileName: ['tasteeat', 'tasteeat2', 'tasteeat3', 'tasteeat4'],
            techStack: ['HTML5', 'CSS3', 'JS', 'Spide.js'],
            description: 'A restaurant website showcasing delicious food options. Includes interactive features to explore the menu and learn more about the dishes. Built using HTML5, CSS3, JavaScript, and Spide.js for a smooth user experience.'
        },
        { 
            id: 3,
            title: 'Travel App', 
            subtitle: 'Plan Your Adventures with Ease',
            link: 'https://vue-school-travel-app-one.vercel.app/',
            repository: 'https://github.com/sardor74dev/vue-school-travel-app', 
            fileName: ['travelapp', 'travelapp2', 'travelapp3', 'travelapp4'],
            techStack: ['Vue 3', 'Vue Router'],
            description: 'A travel booking app built with Vue 3. Users can explore various destinations and book trips with ease. The app includes smooth navigation using Vue Router for seamless transitions between pages.'
        },
        { 
            id: 4,
            title: 'Палитра вакансий', 
            subtitle: 'Connecting You to Career Opportunities', 
            link: 'https://job-searching-phi.vercel.app/', 
            repository: 'https://github.com/sardor74dev/JobSearching',
            fileName: ['palitravakansiy', 'palitravakansiy2', 'palitravakansiy3'],
            techStack: ['Vue 3', 'Vue Router', 'Pinia', 'Axios', 'TailwindCSS'],
            description: 'A job searching platform for Russian-speaking users, allowing them to browse and apply for job openings. Developed with Vue 3, Vue Router, Pinia, Axios, and TailwindCSS, the app offers a clean and functional UI for job seekers.' 
        },
        { 
            id: 5,
            title: 'SHOP.CO',  
            subtitle: 'Effortless Online Shopping',
            link: 'https://shopco-sardors-projects-3d2a3aae.vercel.app/', 
            repository: 'https://github.com/sardor74dev/vite-ecommerce',
            fileName: ['shopdotco', 'shopdotco2', 'shopdotco3', 'shopdotco4'],
            techStack: ['Vue 3', 'Vue Router', 'Pinia', 'Axios', 'TailwindCSS', '@formkit/auto-animate'],
            description: 'A modern e-commerce platform built with Vue 3 and TailwindCSS. It includes features like product listings, filters, and a dynamic shopping cart. The app uses Pinia for state management and Axios for data fetching.'
        },
        { 
            id: 6,
            title: 'Nuxt Dojo',  
            subtitle: 'Master Product Listings with Speed and Simplicity',
            link: 'https://nuxt-dojo-three.vercel.app/products',
            repository: 'https://github.com/sardor74dev/nuxt-dojo',
            fileName: ['nuxtdojo', 'nuxtdojo2', 'nuxtdojo3'],
            techStack: ['Vue 3', 'Nuxt', 'Pinia', 'TailwindCSS'],
            description: 'A product listing site built with Nuxt, showcasing the power of Vue 3 and Nuxt for server-side rendering and SEO optimization. Pinia and TailwindCSS enhance the performance and design of the app.'
        },
    ])

    return {
        projects, 
    }
})