<template>
	<div class="post-filter-container">
		<nav class="filter-nav">
			<ul>
				<li class="active">전체</li>
				<li>모집 중</li>
				<li>모집 완료</li>
			</ul>
			<div class="posting-container">
				<span>글쓰기</span>
			</div>
		</nav>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.post-filter-container {
	width: 100%;
	margin-bottom: 31px;

	.filter-nav {
		display: flex;
		justify-content: space-between;
		align-items: center;

		ul {
			display: flex;

			li {
				font-size: 28px;
				margin-right: 24px;

				&.active {
					color: #1b8297;
					border-bottom: 1px solid #1b8297;
				}
			}
		}
	}

	.posting-container {
		padding: 0.5rem;
		border-radius: 5px;
		border: 1px solid #dfdfdf;

		span {
			padding-left: 24px;
			position: relative;

			&::after {
				display: block;
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				background: url(/src/assets/images/icon/posting-icon.png) no-repeat;
				width: 24px;
				height: 24px;
				background-size: 100% 100%;
				background-position: center center;
			}
		}
	}
}
</style>
