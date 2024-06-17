import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import SecondPage from '../views/SecondPage.vue';
import ThirdPage from '../views/ThirdPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/secondpage',
    name: 'SecondPage',
    component: SecondPage
  },
  {
    path: '/thirdpage',
    name: 'ThirdPage',
    component: ThirdPage
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
