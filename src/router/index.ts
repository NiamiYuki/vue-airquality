import { createRouter, createWebHistory } from 'vue-router'
import TownManagementContainer from '../components/TownManagementContainer.vue'
import AirInfoContainer from '../components/AirInfoContainer.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'data',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AirInfoContainer,
      alias: '/data',
    },
    {
      path: '/manage',
      name: 'manage',
      component: TownManagementContainer,
    },
  ],
})

export default router
