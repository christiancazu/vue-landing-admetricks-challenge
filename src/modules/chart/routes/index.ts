import { RouteRecordRaw } from 'vue-router'

const graphicRoutes: RouteRecordRaw[] = [
  {
    path: '/chart',
    name: 'Chart',
    component: () => import('@/modules/chart/views/Index.vue')
  }
]

export default graphicRoutes
