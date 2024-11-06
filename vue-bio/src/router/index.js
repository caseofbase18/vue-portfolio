import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Contact from '../pages/Contact.vue';
import Portfolio from '../pages/Portfolio.vue';

const routes = [
  { path: '/', component: Home }, 
  { path: '/portfolio', component: Portfolio },
  { path: '/contact', component: Contact }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;


