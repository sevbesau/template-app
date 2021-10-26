import { createRouter, createWebHashHistory } from 'vue-router';

// Import generated routes
import routes from 'vue-auto-routing'; // eslint-disable-line

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
