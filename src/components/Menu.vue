<template>
	<Clouds
		:curr="curr"
		:max="items.length"
	/>
	<nav>
		<router-link
			v-for="(item, index) in items"
			:to="item"
			custom
			v-slot="{ navigate }"
		>
			<a
				@click="navigate"
				@mouseenter="onMouseEnter(index)"
			>
				{{ item }}
			</a>
		</router-link>
	</nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Clouds from './Clouds.vue';
import { ref } from 'vue';

export default defineComponent({
	name: 'Menu',
	components: {
		Clouds,
	},
	setup() {
		const curr = ref(0);
		const items = [
			'pics',
			'paints',
			'sculpture',
		];
		const onMouseEnter = (index: number) => {

		};

		return {
			curr,
			items,
			onMouseEnter,
		};
	},
});
</script>

<style scoped>
	nav {
		display: flex;
		justify-content: space-around;
		cursor: pointer;
	}
</style>
