import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';

import HeaderSection from './components/layout/HeaderSection.vue';
import FooterSection from './components/layout/FooterSection.vue';

import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component('HeaderSection', HeaderSection);
app.component('FooterSection', FooterSection);
app.mount('#app');
