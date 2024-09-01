<template>
	<div class="wrap">
		<CompanionPageHeader></CompanionPageHeader>
		<PostContainer></PostContainer>
	</div>
</template>

<script setup lang="ts">
import CompanionPageHeader from '@/components/companionPage/CompanionPageHeader.vue';
import PostContainer from '@/components/companionPage/PostContainer.vue';
</script>

<style scoped lang="scss">
.wrap {
	width: 1440px;
	margin: 0 auto;

	header {
		margin-top: 32px;
	}
}
</style>
