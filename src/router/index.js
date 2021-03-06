import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
      path: '/',
      name: 'home',
      component: () => import("@/components/home.vue"),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import("@/components/about.vue"),
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return {x: 0, y: 0}
  }
});

export default router
