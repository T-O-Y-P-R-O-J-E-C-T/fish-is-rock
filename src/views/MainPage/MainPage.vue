<template>
	<div class="wrap">
		<div class="intro-container">
			<Map></Map>
			<div class="right-contents">
				<LoginLogout></LoginLogout>
				<Calendar></Calendar>
			</div>
		</div>
		<div class="post-section">
			<PostContainer title="지금 핫한 모임" :forumPosts="popularForum" :totalLength="totalLength"
				@update:currentPages="updatePopularPage"></PostContainer>
			<PostContainer title="인기 게시글" :forumPosts="likeForum" :totalLength="totalLength"
				@update:currentPages="updateLikePage"></PostContainer>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useForumStore } from '@/stores/forumStore';

import Calendar from './components/Calendar.vue';
import LoginLogout from './components/LoginLogout.vue';
import Map from './components/Map.vue';
import PostContainer from './components/PostContainer.vue';
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';

const forumStore = useForumStore();

onMounted(() => {
	forumStore.fetchPopularPostsForum(1);
	forumStore.fetchLikePostsForum(1);
	forumStore.fetchTotalForumLength();
});

const { totalLength, likeForum, popularForum } = storeToRefs(forumStore);

// "지금 핫한 모임" 페이지 업데이트
const updatePopularPage = (newPage: number) => {
	forumStore.fetchPopularPostsForum(newPage);
}

// "인기 게시글" 페이지 업데이트
const updateLikePage = (newPage: number) => {
	forumStore.fetchLikePostsForum(newPage);
}

</script>

<style lang="scss" scoped>
.wrap {
	width: 1440px;
	margin: 0 auto;

	.intro-container {
		width: 100%;
		margin: 4rem 0 3rem 0;
		display: flex;
		justify-content: space-between;

		.right-contents {
			display: flex;
			flex-direction: column;
		}
	}

	.post-section {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
}
</style>
