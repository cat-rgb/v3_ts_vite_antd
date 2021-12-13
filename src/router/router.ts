import type { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { basicRoutes } from '@/router/routes';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_APP_WEB_URL),
  routes: basicRoutes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}
