import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Contact from '../pages/Contact.vue';
import Portfolio from '../pages/Portfolio.vue';
import Hobbies from '../pages/HobbiesInterests.vue';

const routes = [
  { path: '/', component: Home }, 
  { path: '/portfolio', component: Portfolio },
  { path: '/contact', component: Contact },
  { path: '/hobbiesandinterests', component: Hobbies }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;


