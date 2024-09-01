import CompanionPage from '@/views/CompanionPage.vue';
import MainPage from '@/views/MainPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			component: MainPage,
		},
		{
			path: '/companionPage',
			component: CompanionPage,
		},
	],
});

export default router;
