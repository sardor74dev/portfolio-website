import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'

const routes = [
  {
    path: '/',
    name: 'Home', 
    component: () => import('./pages/Home.vue')
  },
  {
    path: '/project/:id',
    name: 'ProjectPage', 
    component: () => import('./pages/ProjectPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition){
    if(to.hash){
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    return { top: 0 };
  }
})

const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')