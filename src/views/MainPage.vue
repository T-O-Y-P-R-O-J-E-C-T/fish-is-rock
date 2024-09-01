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
			<Post></Post>
			<Post></Post>
		</div>
	</div>
</template>

<script setup>
import Calendar from '@/components/mainPage/Calendar.vue';
import LoginLogout from '@/components/mainPage/LoginLogout.vue';
import Map from '@/components/mainPage/Map.vue';
import Post from '@/components/mainPage/Post.vue';
</script>

<style lang="scss" scoped>
.wrap {
	width: 1440px;
	margin: 0 auto;

	.intro-container {
		width: 100%;
		margin-top: 4rem;
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
