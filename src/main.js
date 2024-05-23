import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/styles/custom.scss';
import './assets/styles/header.scss';
import './assets/styles/footer.scss';
import './assets/styles/home-page.scss';

createApp(App).use(store).use(router).mount('#app');
