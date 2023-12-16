import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';
import "@/assets/css/style.css";
import { Carousel3d } from 'vue-carousel-3d'; // Import Carousel3d from vue-carousel-3d

const app = createApp(App);
app.use(router);
app.use(Carousel3d); // Use Carousel3d as a plugin
app.mount("#app");
