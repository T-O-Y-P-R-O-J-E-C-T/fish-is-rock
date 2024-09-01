<template>
	<div class="post-container">
		<div class="post-title-container">
			<p class="title">{{ props.title }}</p>
			<div class="pages-container">
				<span class="prevBtn btn" @click="prevPostHandler"> &lt; </span>
				<span>{{ currentPages }} / {{ postTotalLength }}</span>
				<span class="nextBtn btn" @click="nextPostHandler"> &gt; </span>
			</div>
		</div>
		<div class="contents-container">
			<Post v-for="forumPost in props.forumPosts" :key="forumPost.id" :forumPost=forumPost></Post>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import Post from './Post.vue';
import type { ForumType } from '@/types/ForumApiType';

const props = defineProps<{
	title: string;
	forumPosts: ForumType[];
}>()


const currentPages = ref<number>(1);

//게시글의 마지막 페이지 수 구하기
const postTotalLength = computed(() => {
	return Math.ceil(forumLength.value / 5);
});

//post next 버튼
const nextPostHandler = () => {
	if (currentPages.value < postTotalLength.value) {
		currentPages.value++;
	} else {
		return;
	}
}

//post prev 버튼
const prevPostHandler = () => {
	if (currentPages.value <= 1) {
		return;
	} else {
		currentPages.value--;
	}
}

const forumLength = computed(() => {
	return props.forumPosts.length;
})


console.log(props.forumPosts);


</script>

<style lang="scss" scoped>
.post-container {
	width: 700px;
	padding: 1rem;

	.post-title-container {
		width: 100%;
		margin-bottom: 1.5rem;
		display: flex;
		justify-content: space-between;

		.title {
			font-size: 24px;
		}

		.pages-container {
			width: 78px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 12px;

			.btn {
				font-size: 1rem;
				cursor: pointer;
			}
		}
	}

	.contents-container {
		width: 100%;
	}
}
</style>
