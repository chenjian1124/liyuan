import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Workprocess from '../views/Workprocess.vue'
import Solution from '../views/Solution.vue'

const router = createRouter({
  history: createWebHistory('/liyuan/'),
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
  ],
})

export default router




