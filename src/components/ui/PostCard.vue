<template>
	<div class="post-card-wrapper">
		<div class="post-card-wrapper_header">
			<div class="tag-container">
				<Badge title="모집중" mode="status"></Badge>
				<Badge title="경남" mode="location"></Badge>
			</div>
			<div class="hits-container">
				<span>21</span>
			</div>
		</div>

		<div class="post-card-wrapper_post-title-container">
			<h4 class="post-title">
				쭈꾸미 금어기 해제 이후 9월 2일 대천항으로 선상출조 가실 분 계신가요
				3~4명 생각중asdasd 쭈꾸미 금어기 해제 이후 9월 2일 대천항으로 선상출조
				가실 분 계신가요 3~4명 생각중asdasd 쭈꾸미 금어기 해제 이후 9월 2일
				대천항으로 선상출조 가실 분 계신가요 3~4명 생각중asdsad
			</h4>
		</div>

		<div class="post-card-wrapper_post-sub-container">
			<div class="departure-container"><span>출조일: 09/21</span></div>

			<div class="post-sub-icon-container">
				<div class="post-icon"></div>
				<div class="post-icon"></div>
				<div class="post-icon"></div>
			</div>
		</div>

		<div class="post-card-wrapper_post-footer-container">
			<div class="post-footer-left-container">
				<div class="post-footer-left-wrap">
					<img src="http://via.placeholder.com/64.jpg/" alt="더미 이미지" />
					<div class="writer-info-container">
						<p class="writer">일이삼</p>
						<p class="user-tier">#고수</p>
					</div>
				</div>
			</div>

			<div class="post-footer-right-container">
				<div class="post-footer-right-wrap">
					<div class="people-profile-img-container">
						<img src="http://via.placeholder.com/64.jpg/" alt="더미 이미지" />
						<img src="http://via.placeholder.com/64.jpg/" alt="더미 이미지" />
						<img src="http://via.placeholder.com/64.jpg/" alt="더미 이미지" />
					</div>

					<div class="people-counter-container">
						<p class="people-max-count">정원 5명</p>
						<p class="people-current-count">3명 참여중</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import Badge from './Badge.vue';
</script>

<style scoped lang="scss">
.post-card-wrapper {
	width: 700px;
	padding: 32px;
	border: 1rem;
	border-radius: 1rem;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);

	&_header {
		width: 100%;
		margin-bottom: 1rem;
		display: flex;
		justify-content: space-between;

		.tag-container {
			display: flex;
		}

		.hits-container {
			span {
				display: block;
				padding-left: 40px;
				color: #717171;
				font-size: 20px;
				position: relative;

				&::before {
					content: '';
					position: absolute;
					top: -1.5px;
					left: 0;
					background: url(/src/assets/images/icon/hits-icon.png) no-repeat;
					background-size: contain;
					background-position: center center;
					width: 32px;
					height: 32px;
				}
			}
		}
	}

	&_post-title-container {
		width: 100%;
		margin-bottom: 1rem;

		.post-title {
			display: -webkit-box;
			-webkit-line-clamp: 2; // 최대 줄 수를 2로 설정
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: normal; // 텍스트를 여러 줄로 표시
			font-size: 28px;
		}
	}

	&_post-sub-container {
		width: 100%;
		margin-bottom: 32px;
		display: flex;
		justify-content: space-between;

		.departure-container {
			span {
				font-size: 24px;
			}
		}

		.post-sub-icon-container {
			display: flex;
			gap: 12px;

			.post-icon {
				width: 32px;
				height: 32px;
				cursor: pointer;

				&:nth-child(1) {
					background: url(/src/assets/images/icon/postLike-icon.png) no-repeat;
					background-size: contain;
				}

				&:nth-child(2) {
					background: url(/src/assets/images/icon/postShare-icon.png) no-repeat;
					background-size: contain;
				}

				&:nth-child(3) {
					background: url(/src/assets/images/icon/postChatting-icon.png) no-repeat;
					background-size: contain;
				}
			}
		}
	}

	&_post-footer-container {
		display: flex;
		justify-content: space-between;

		.post-footer-left-container {
			.post-footer-left-wrap {
				display: flex;
				gap: 0.5rem;

				img {
					border-radius: 50%;
					width: 64px;
					height: 64px;
				}

				.writer-info-container {
					.writer {
						font-size: 20px;
					}

					.user-tier {
						font-size: 1rem;
					}
				}
			}
		}

		.post-footer-right-container {
			.post-footer-right-wrap {
				display: flex;
				gap: 0.5rem;

				.people-profile-img-container {
					position: relative;

					img {
						border-radius: 50%;
						position: absolute;
						left: -100%;

						&:nth-child(1) {
							left: -168px;
							z-index: 1;
							border: 4px solid #fff;
						}

						&:nth-child(2) {
							left: -116px;
							z-index: 2;
						}

						&:nth-child(3) {
							left: -64px;
							z-index: 3;
						}

						&:not(:first-child) {
							border: 4px solid #e9f8fb;
						}
					}
				}

				.people-counter-container {}
			}
		}
	}
}
</style>
