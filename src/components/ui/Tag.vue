<template>
	<div class="tag-container" :class="tagClassName">
		<p>{{ props.title }}</p>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
	title: String;
	mode: String;
}>();

const tagClassName = computed(() => {
	if (props.mode === 'status') {
		if (props.title === '모집중') {
			return 'green';
		}
	}

	if (props.mode === 'location') {
		if (props.title === '경상남도') {
			return 'skyblue';
		}
	}

	return;
});
</script>

<style lang="scss" scoped>
.tag-container {
	padding: 4px 12px;
	border-radius: 1rem;
	margin-right: 8px;

	&.green {
		color: #00ad30;
		border: 1px solid #00ad30;
	}

	&.skyblue {
		color: #1b8297;
		border: 1px solid #1b8297;
	}
}
</style>
