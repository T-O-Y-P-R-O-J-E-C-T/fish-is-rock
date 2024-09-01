<template>
	<div class="CompanionPageHeader">
		<PostFilter></PostFilter>
		<CategoryFilter></CategoryFilter>
		좆같다~
	</div>
</template>

<script setup lang="ts">
import CategoryFilter from './CategoryFilter.vue';
import PostFilter from './PostFilter.vue';
</script>

<style scoped>
.CompanionPageHeader {
	margin: 40px 0;
	padding: 123px;
}
</style>
