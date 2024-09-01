<template>
	<div class="post-container">
		<PostCard></PostCard>
		<PostCard></PostCard>
		<PostCard></PostCard>
		<PostCard></PostCard>
	</div>
</template>

<script setup lang="ts">
import PostCard from '../ui/PostCard.vue';
</script>

<style scoped lang="scss">
.post-container {
	width: 100%;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 36px;
}
</style>
