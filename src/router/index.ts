import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import homeRoutes from '@/modules/home/routes'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/modules/common/layouts/MainLayout.vue'),
    children: [
      ...homeRoutes
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/modules/common/views/Error404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
