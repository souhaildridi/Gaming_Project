//houa kal inajem yaamlha hedhi fi main ema ahna chnaaamlouha hne kal khir w hana amlnelha export f w naamloulha impoort fel main js
// routes.js
// routes.js
import { createRouter, createWebHistory } from 'vue-router';
import Home2 from './components/home2.vue';
import AppelCard from './AppelCard.vue';
import Signup from './components/items/Signup_Signin.vue';

const routes = [
  { path: '/', name: 'home', component: Home2 },
  { path: '/AppelCard', name: 'Appel', component: AppelCard },
  { path: '/Signup', name: 'Signup', component: Signup},


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

