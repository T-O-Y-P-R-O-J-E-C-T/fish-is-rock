<template>
	<div class="post-container">
		<div class="post-title-container">
			<p class="title">지금 핫한 모임</p>
			<div class="pages-container">
				<span class="prevBtn btn"> < </span>
				<span>1 / 3</span>
				<span class="nextBtn btn"> > </span>
			</div>
		</div>
		<div class="contents-container">
			<div class="content">
				<div class="location-tag">#제주</div>
				<p class="post-text">
					일이삼사오육칠팔구일이삼사오육칠팔구일이삼사오육칠팔구일이삼사오육칠팔구일이삼사오육칠팔구
				</p>
				<div class="post-date"><span>24.99.99</span></div>
			</div>
			<div class="content">
				<div class="location-tag">#제주</div>
				<p class="post-text">
					일이삼사오육칠팔구일이삼사오육칠팔구일이삼사오육칠팔구일이삼사오육칠팔구일이삼사오육칠팔구
				</p>
				<div class="post-date"><span>24.99.99</span></div>
			</div>
			<div class="content">
				<div class="location-tag">#제주</div>
				<p class="post-text">
					일이삼사오육칠팔구일이삼사오육칠팔구일이삼사오육칠팔구일이삼사오육칠팔구일이삼사오육칠팔구
				</p>
				<div class="post-date"><span>24.99.99</span></div>
			</div>
			<div class="content">
				<div class="location-tag">#제주</div>
				<p class="post-text">
					일이삼사오육칠팔구일이삼사오육칠팔구일이삼사오육칠팔구일이삼사오육칠팔구일이삼사오육칠팔구
				</p>
				<div class="post-date"><span>24.99.99</span></div>
			</div>
			<div class="content">
				<div class="location-tag">#제주</div>
				<p class="post-text">
					일이삼사오육칠팔구일이삼사오육칠팔구일이삼사오육칠팔구일이삼사오육칠팔구일이삼사오육칠팔구
				</p>
				<div class="post-date"><span>24.99.99</span></div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.post-container {
	width: 700px;
	margin-top: 5rem;
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
		}
	}

	.contents-container {
		width: 100%;

		.content {
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
			}

			.post-date {
				color: #717171;
			}

			&:not(:last-child) {
				margin-bottom: 20px;
			}
		}
	}
}
</style>
