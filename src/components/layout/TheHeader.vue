<!-- eslint-disable prettier/prettier -->
<template>
	<section id="header">
		<header>
			<div class="header-left">
				<h1 class="logo-container">
					<router-link to="/" class="logo"></router-link>
				</h1>
				<div class="header-nav">
					<ul>
						<li v-for="item in mainNav" :key="item.title">
							<router-link :to="item.link">{{ item.title }}</router-link>
						</li>
					</ul>
				</div>
			</div>
			<div class="toggle-nav"></div>
			<div class="header-rigth">
				<div class="sub-nav">
					<ul>
						<li v-for="(item, idx) in subNav" :key="item.title" :class="`sub-nav-item-` + idx">
							<router-link :to="item.link">{{ item.title }}</router-link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	</section>
</template>

<script setup lang="ts">
const mainNav = [
	{ title: '홈', link: '/' },
	{ title: '낚시포럼', link: '/' },
	{ title: '동출구인', link: '/companionPage' },
];
const subNav = [
	{ title: '마이페이지', link: '/' },
	{ title: '채팅창', link: '/' },
];
</script>

<style scoped lang="scss">
#header {
	width: 100%;

	header {
		width: 1440px;
		height: 60px;
		margin: 0 auto;
		border-bottom: #ebebeb;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.header-left {
			display: flex;
			align-items: center;

			.logo-container {
				width: 100px;
				height: 46px;
				margin-right: 2.5rem;

				.logo {
					width: 100%;
					height: 100%;
					display: block;
					background: url(/src/assets/images/logo.png) no-repeat;
					background-position: center center;
					background-size: 100% 100%;
				}
			}

			.header-nav {
				ul {
					display: flex;

					li {
						padding: 0 1.5rem;
						margin-right: 1rem;
					}
				}
			}
		}

		.header-rigth {
			.sub-nav {
				ul {
					display: flex;

					li {
						padding: 0 2rem;
						position: relative;

						a {
							color: $main-text-disable;
						}

						&.sub-nav-item-0 {
							&::before {
								position: absolute;
								content: '';
								width: 20px;
								height: 20px;
								display: block;
								background: url(/src/assets/images/icon/mypage-icon.png) no-repeat;
								background-size: 100% 100%;
								top: 1px;
								left: 13px;
							}
						}

						&.sub-nav-item-1 {
							&::before {
								position: absolute;
								content: '';
								width: 20px;
								height: 20px;
								display: block;
								background: url(/src/assets/images/icon/chatting-icon.png) no-repeat;
								background-size: 100% 100%;
								top: 3px;
								left: 13px;
							}
						}
					}
				}
			}
		}
	}
}
</style>
