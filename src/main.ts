import 'ant-design-vue/dist/antd.css';
// tailwindcss 要放置在antd样式之后 否则会被覆盖
import '@/assets/style/tailwind.css';

import { createApp } from 'vue';
import { setupRouter } from '@/router/router';
import App from './App.vue';
import 'vue-global-api';

function bootstrap() {
  const app = createApp(App);
  setupRouter(app);
  app.mount('#app');
}

bootstrap();
