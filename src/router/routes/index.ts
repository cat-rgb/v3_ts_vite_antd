import { RouteRecordRaw } from 'vue-router';
import Layout from '@/views/Layout/index.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Root',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/Login.vue'),
    meta: {
      title: '登陆',
      // title: t('routes.basic.login'),
    },
  },
  {
    path: '/home',
    name: 'home',
    component: Layout,
    meta: {
      title: '首页',
      // title: t('routes.basic.login'),
    },
    children: [
      {
        path: 'index',
        name: 'homeIndex',
        component: () => import('@/views/Home/Home.vue'),
      },
    ],
  },
];

export const basicRoutes = [...routes];
