import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';

import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';

import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component('HeaderSection', TheHeader);
app.component('FooterSection', TheFooter);
app.mount('#app');
