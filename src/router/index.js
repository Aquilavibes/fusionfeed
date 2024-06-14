import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

import EntertainmentView from '../views/EntertainmentView.vue'

import SportsView from '../views/SportsView.vue'
import BusinessView from '../views/BusinessView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/entertainment',
      name: 'entertainment',
      component: EntertainmentView
    },
    {
      path: '/sports',
      name: 'sports',
      component: SportsView
    },

    {
      path: '/business',
      name: 'business',
      component: BusinessView
    }

  ]
})

export default router
