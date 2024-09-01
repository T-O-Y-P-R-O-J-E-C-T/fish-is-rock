<template>
	<div class="badge-container" :class="badgeClassName">
		<p>{{ props.title }}</p>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
	title: String;
	mode: String;
}>();

const badgeClassName = computed(() => {
	if (props.mode === 'status') {
		if (props.title === '모집 중') {
			return 'ing';
		}
		if (props.title === '라스트 원') {
			return 'last';
		}
		if (props.title === '기간 임박') {
			return 'close';
		}
		if (props.title === '모집 종료') {
			return 'end';
		}
	}

	if (props.mode === 'location') {
		return 'location'
	}

	return '';
});
</script>

<style lang="scss" scoped>
.badge-container {
	margin-right: 8px;
	border-radius: 4px;
	white-space: nowrap;
	line-height: 1rem;

	p {
		font-size: 14px;
	}

	&.ing {
		padding: 2px 10px;
		color: $color-green;
		background-color: $badge-color-ing;
	}

	&.last {
		padding: 2px 10px;
		color: $color-yellow;
		background-color: $badge-color-last;
	}

	&.close {
		padding: 2px 10px;
		color: $color-red;
		background-color: $badge-color-close;
	}

	&.end {
		padding: 2px 10px;
		color: $main-text-disable;
		background-color: $badge-color-end;
	}

	&.location {
		padding: 2px 12px;
		color: $main-color-defualt;
		background-color: $badge-color-location;
	}
}
</style>
