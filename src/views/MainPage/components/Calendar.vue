<template>
	<div class="calendar-wrap">
		<div class="calendar">

			<div class="calendar-header">
				<span class="btn prev-btn"></span>
				<span class="month">{{ formmattedMonth }}월 모임</span>
				<span class="btn next-btn"></span>
			</div>

			<div class="calendar-main">
				<div class="calendar-days">
					<div class="days" v-for="day in daysOfWeek" :key="day"><span>{{ day }}</span></div>
				</div>

				<div class="calendar-dates">
					<div v-for="empty in emptyDays" :key="'empty-' + empty"></div>
					<div class="date" v-for="date in dates" :key="date">
						<span>{{ date }}</span>
						<p class="post-count">1개</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const daysOfWeek = ["월", "화", "수", "목", "금", "토", "일"];
const currentDate = new Date();

const formmattedMonth = computed(() => {
	const currentMonth = currentDate.getMonth() + 1;
	return currentMonth;
});

const dates = computed(() => {
	let datesArray = [];

	const year = currentDate.getFullYear();
	const month = currentDate.getMonth();

	const lasyDay = new Date(year, month + 1, 0);

	for (let i = 1; i <= lasyDay.getDate(); i++) {
		datesArray.push(i);
	};

	return datesArray;
})

const emptyDays = computed(() => {
	const firstDay = new Date(
		currentDate.getFullYear(),
		currentDate.getMonth(),
		1
	).getDate();
	return Array(firstDay).fill(null);
})

</script>

<style scoped lang="scss">
.calendar-wrap {
	width: 100%;
	padding-top: 3rem;
	border-top: 2px solid $color-white-100;

	.calendar {
		width: 100%;
		padding: 1rem;

		.calendar-header {
			width: 100%;
			margin-bottom: 1.75rem;
			display: flex;
			align-items: center;
			justify-content: center;

			.btn {
				width: 1.5rem;
				height: 1.5rem;
				display: block;

				&.prev-btn {
					background: url(/src/assets/images/icon/prev-icon.png) no-repeat;
					background-size: 100% 100%;
					background-position: center center;
				}

				&.next-btn {
					background: url(/src/assets/images/icon/next-icon.png) no-repeat;
					background-size: 100% 100%;
					background-position: center center;
				}
			}

			.month {
				font-size: 1.5rem;
				padding: 0 1rem;
			}
		}

		.calendar-main {
			width: 100%;
			text-align: center;

			.calendar-days {
				width: 100%;
				margin-bottom: 1.5rem;
				display: grid;
				grid-template-columns: repeat(7, 1fr);
				gap: 1rem;

				span {
					padding: 0 2px;
					color: $main-text-regular;
				}
			}

			.calendar-dates {
				width: 100%;
				display: grid;
				grid-template-columns: repeat(7, 1fr);
				gap: 1.5rem 1rem;

				.date {

					span {
						padding: 0 2px;
						color: $main-text-regular;
					}

					.post-count {
						padding-top: 2px;
						color: $main-text-bold;
						font-size: .8rem;
					}
				}
			}
		}
	}
}
</style>
