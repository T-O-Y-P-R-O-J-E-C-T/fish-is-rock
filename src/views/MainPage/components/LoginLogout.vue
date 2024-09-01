<template>
	<div class="login-container">
		<p class="title">지금낚낙과 함께하기</p>
		<form class="form-container">
			<div>
				<input type="email" placeholder="이메일 주소를 입력해주세요." />
				<input type="password" placeholder="비밀번호를 입력하세요." />
			</div>
		</form>
		<div class="btn-container">
			<div class="btn login-btn"><span>로그인</span></div>
			<div class="btn signin-btn"><span>회원가입</span></div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.login-container {
	width: 456px;
	padding-bottom: 32px;

	.title {
		font-size: 1.5rem;
		padding-bottom: 1rem;
	}

	.form-container {
		width: 100%;
		display: flex;
		flex-direction: column;
		margin-bottom: 1.5rem;

		div {
			input {
				width: 100%;
				height: 50px;
				border: 1px solid $color-gray-300;
				padding: 1rem;
				font-size: 20px;

				&:first-child {
					margin-bottom: .5rem;
				}
			}
		}
	}

	.btn-container {
		width: 100%;
		display: flex;
		justify-content: space-between;

		.btn {
			width: 216px;
			height: 50px;
			font-size: 1.5rem;
			position: relative;
			border-radius: 0.5rem;

			&.login-btn {
				background-color: #bae0e8;
				color: #245e6a;
			}

			&.signin-btn {
				background-color: #1b8297;
				color: #fff;
			}

			span {
				@include position-center(absolute);
			}
		}
	}
}
</style>
