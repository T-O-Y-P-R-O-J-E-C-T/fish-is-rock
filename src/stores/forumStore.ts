import type { ForumType } from '@/types/ForumApiType';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useForumStore = defineStore('forum', () => {
	//state
	const forumPosts = ref<ForumType[]>([]); //게시글데이터

	const popularPosts = computed(() => {
		return [...forumPosts.value].sort((a, b) => b.views - a.views);
	});

	//action
	const fetchForumPosts = async () => {
		try {
			const response = await fetch('http://localhost:3000/forum');

			const responseData = (await response.json()) as ForumType[];

			forumPosts.value = responseData;
		} catch (err) {
			console.log(err);
		}
	};

	return {
		fetchForumPosts,
		forumPosts,
		popularPosts,
	};
});
