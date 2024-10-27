import { createApp } from 'vue'
import 'normalize.css';
import setupPrimeVue from '@/lib/primevue';
import router from '@/router';
import '@/style.css'
import App from './App.vue'

const app = createApp(App);
setupPrimeVue(app);
app.use(router);
app.mount('#app')