<template>
	<a-button
		class="go-to-top-button"
		type="primary"
		shape="circle"
		@click="goToTop"
		size="large"
		danger
	>
		<template #icon><ArrowUpOutlined /></template>
	</a-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ArrowUpOutlined } from '@ant-design/icons-vue'
import { useScroll } from '@/hooks'

export default defineComponent({
	name: 'go-to-top-button',
	setup() {
		return {
			goToTop: () => useScroll().goToTop()
		}
	},
	components: {
		ArrowUpOutlined
	}
});
</script>

<style lang="scss" scoped>
.go-to-top-button {
	position: fixed;
	right: 24px;
	bottom: 30px;
}
</style>