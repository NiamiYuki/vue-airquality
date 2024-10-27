import {
  createRouter,
  createWebHistory,
  type NavigationGuardNext,
  type RouteLocation,
} from 'vue-router'
import TownManagementContainer from '../components/TownManagementContainer.vue'
import AirInfoContainer from '../components/AirInfoContainer.vue'
import { weatherDataServiceLocator } from '../service/weatherData'

const weatherResolver = async (
  to: RouteLocation,
  from: RouteLocation,
  next: NavigationGuardNext,
) => {
  await weatherDataServiceLocator().loadData()
  next()
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/data',
      name: 'data',
      component: AirInfoContainer,
      beforeEnter: weatherResolver,
    },
    {
      path: '/',
      name: 'manage',
      component: TownManagementContainer,
      alias: '/manage',
    },
  ],
})

export default router
