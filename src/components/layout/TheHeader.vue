<template>
	<section id="header">
		<header>
			<div class="header-left">
				<h1 class="logo-container">
					<router-link to="/" class="logo"></router-link>
				</h1>
				<div class="header-nav">
					<ul class="header-nav-container">
						<li v-for="(item, idx) in mainNav" :key="item.titleMenu" @mouseenter="showSubMenu(idx)"
							@mouseleave="hideSubMenu(idx)">
							<router-link :to="item.link">{{ item.titleMenu }}</router-link>
							<div v-if="headersIsVisible[idx] && item.subMenu" class="sub-menu-container">
								<ul v-for="sub in item.subMenu" :key="sub.subTitle" @mouseenter="subTitleActive"
									@mouseleave="subTitleInactive">
									<li class="submenu-title">{{ sub.subTitle }}</li>
									<li v-for="subItem in sub.subNav" :key="subItem.title">
										<router-link :to="subItem.link">{{ subItem.title }}</router-link>
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</div>
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
import { ref } from 'vue';

const mainNav = [
	{ titleMenu: '홈', link: '/' },
	{
		titleMenu: '낚시포럼', link: '/', subMenu: [
			{
				subTitle: '바다',
				subNav: [
					{ title: '루어낚시', link: '/' },
					{ title: '찌낚시', link: '/' },
					{ title: '선상낚시', link: '/' },
					{ title: '좌대낚시', link: '/' },
				]
			},
			{
				subTitle: '민물',
				subNav: [
					{ title: '루어낚시', link: '/' },
					{ title: '좌대낚시', link: '/' },
					{ title: '저수지낚시', link: '/' },
					{ title: '좌대낚시', link: '/' },
				]
			},
			{
				subTitle: '기타',
				subNav: [
					{ title: '루어낚시', link: '/' },
					{ title: '찌낚시', link: '/' },
					{ title: '선상낚시', link: '/' },
					{ title: '좌대낚시', link: '/' },
				]
			},
		]
	},
	{ titleMenu: '동출구인', link: '/companionPage' },
];
const subNav = [
	{ title: '마이페이지', link: '/' },
	{ title: '채팅창', link: '/' },
];

const headersIsVisible = ref<boolean[]>([false, false, false]);

const showSubMenu = (idx: number) => {
	headersIsVisible.value[idx] = true;
};

const hideSubMenu = (idx: number) => {
	headersIsVisible.value[idx] = false;
}

const subTitleActive = (ev: any) => {
	ev.target.childNodes[0].classList.add('active');
};

const subTitleInactive = (ev: any) => {
	ev.target.childNodes[0].classList.remove('active');
};

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
				.header-nav-container {
					display: flex;

					li {
						padding: 0 1.5rem;
						margin-right: 1rem;
						position: relative;

						.sub-menu-container {
							position: absolute;
							top: 100%;
							left: 0;
							width: 1000px;
							display: flex;
							flex-direction: row;
							background-color: rgba(255, 255, 255, 0.95);
							z-index: 10000;

							ul {
								display: flex;
								flex-direction: column;
								align-items: flex-start;
								padding: 1.5rem;

								li {
									width: 100%;
									margin: 0;
									padding: 0 .5rem;
									margin-bottom: .5rem;
								}

								.submenu-title {
									font-size: 20px;
									font-weight: 700;
									color: $main-color-defualt;
									margin-bottom: 1rem;
									border-left: 2px solid transparent;

									&.active {
										background-color: rgba(233, 248, 251, .6);
										border-left: 2px solid $main-color-defualt ;

									}
								}
							}
						}
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
