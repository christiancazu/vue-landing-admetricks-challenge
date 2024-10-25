import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import homeRoutes from '@/modules/home/routes'
import graphicRoutes from '@/modules/chart/routes'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/modules/common/layouts/MainLayout.vue'),
    children: [
      ...homeRoutes
    ]
  },
  ...graphicRoutes,
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/modules/common/views/Error404.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
