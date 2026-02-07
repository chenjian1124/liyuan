import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Workprocess from '../views/Workprocess.vue'
import Solution from '../views/Solution.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
  // 跟随 Vite 的 base（vite.config.js 的 base 会体现在 BASE_URL 上）
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/workprocess',
      name: 'workprocess',
      component: Workprocess,
    },
    {
      path: '/solution',
      name: 'solution',
      component: Solution,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ],
})

export default router




