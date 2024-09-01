<template>
	<div class="category-filter-container">
		<nav class="filter-nav">
			<ul>
				<li class="active">전체</li>
				<li>날짜선택</li>
				<li>지역선택</li>
				<li>어종선택</li>
			</ul>
			<div class="search-container">
				<form>
					<div class="input-wrapper">
						<input type="text" placeholder="검색어를 입력해주세요." />
					</div>
				</form>
			</div>
		</nav>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.category-filter-container {
	.filter-nav {
		display: flex;
		justify-content: space-between;
		align-items: center;

		ul {
			display: flex;

			li {
				font-size: 20px;
				margin-right: 24px;

				&.active {
					color: #1b8297;
					border-bottom: 1px solid #1b8297;
				}
			}
		}
	}

	.search-container {
		padding: 12px 0.5rem;
		border-radius: 5px;
		border: 1px solid #dfdfdf;

		form {
			width: 480px;

			.input-wrapper {
				display: flex;
				align-items: center;

				input {
					border: none;
					font-size: 20px;
					padding: 0 0.5rem;
					width: 100%;

					&:focus {
						outline: none;
					}
				}

				&::before {
					display: block;
					content: '';
					background: url(/src/assets/images/icon/search-icon.png) no-repeat;
					width: 24px;
					height: 24px;
					background-size: 100% 100%;
					background-position: center center;
					pointer-events: none;
				}
			}
		}
	}
}
</style>
