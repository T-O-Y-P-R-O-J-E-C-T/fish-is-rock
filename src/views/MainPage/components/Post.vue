<template>
	<div class="post">
		<Badge :title="props.forumPost.location" :mode="'location'"></Badge>
		<p class="post-text">{{ props.forumPost.title }}</p>
		<div class="post-date"><span>{{ props.forumPost.forum_date }}</span></div>
	</div>
</template>

<script setup lang="ts">
import Badge from '@/components/ui/Badge.vue';
import type { ForumType } from '@/types/ForumApiType';

const props = defineProps<{
	forumPost: ForumType;
}>();

</script>

<style scoped lang="scss">
.post {
	width: 100%;
	display: flex;
	align-items: center;

	.location-tag {
		border-radius: 10px;
		height: 20px;
		border: 1px solid #245e6a;
		color: #245e6a;
		font-size: 12px;
		text-align: center;
		line-height: 19px;
		white-space: nowrap;
		padding: 0 5px;
	}

	.post-text {
		font-size: 20px;
		color: #111;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		margin: 0 0.5rem;
		flex: 1;
	}

	.post-date {
		color: #717171;
	}

	&:not(:last-child) {
		margin-bottom: 20px;
	}
}
</style>