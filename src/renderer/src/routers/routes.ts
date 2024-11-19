import { RouteRecordRaw } from 'vue-router'
import UserLayout from '../layouts/UserLayout.vue'
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '主页',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/pytho',
    name: 'py语言',
    component: () => import('../views/PythoViews.vue')
  },
  {
    path: '/center',
    name: '中心',
    component: () => import('../views/Center.vue')
  },

  {
    path: '/user',
    name: '用户',
    component: UserLayout,
    children: [
      {
        path: '/user/login',
        name: '登录',
        component: () => import('../views/LoginViews.vue')
      }
    ]
  }
]
