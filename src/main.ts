import { createApp } from 'vue'
import "./assets/style.css";
import App from './App.vue'
import VueSmoothScroll from "vue3-smooth-scroll";
import router from './router';
import 'aos/dist/aos.css';
import { inject } from '@vercel/analytics';
inject();
const app = createApp(App)
app.use(VueSmoothScroll);
app.use(router);
app.mount('#app');
