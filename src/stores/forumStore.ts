import type { ForumType } from '@/types/ForumApiType';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useForumStore = defineStore('forum', () => {
	//state
	const totalLength = ref<number>(0); //게시글 총 갯수
	const likeForum = ref<ForumType[]>([]); //좋아요 게시글 데이터
	const popularForum = ref<ForumType[]>([]); //인기 게시글 데이터

	//action
	const fetchTotalForumLength = async () => {
		try {
			const response = await fetch('http://localhost:3000/total_forum_length');

			const responseData = (await response.json()) as number;

			totalLength.value = responseData;
		} catch (err) {
			console.log(err);
		}
	};

	const fetchPopularPostsForum = async (pages: number) => {
		try {
			const response = await fetch(
				`http://localhost:3000/popular_forum?_start=${5 * (pages - 1)}&_end=${5 * pages}`
			);

			const responseData = (await response.json()) as ForumType[];

			popularForum.value = responseData;
			console.log('호출되었음', responseData);
		} catch (err) {
			console.log(err);
		}
	};

	const fetchLikePostsForum = async (pages: number) => {
		try {
			const response = await fetch(
				`http://localhost:3000/likes_forum?_start=${5 * (pages - 1)}&_end=${5 * pages}`
			);

			const responseData = (await response.json()) as ForumType[];

			likeForum.value = responseData;
			console.log('호출되었음', responseData);
		} catch (err) {
			console.log(err);
		}
	};

	return {
		fetchPopularPostsForum,
		fetchTotalForumLength,
		fetchLikePostsForum,
		likeForum,
		popularForum,
		totalLength,
	};
});
