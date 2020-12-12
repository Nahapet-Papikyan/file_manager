import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'FMLayout',
    component: () => import('../views/FMLayout')
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
 