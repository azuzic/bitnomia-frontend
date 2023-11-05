<script setup>
import BN_Menu from "@/components/BN_Menu.vue";
import BN_footer from "./components/BN_footer.vue";
import { useGlobalStore } from "@/stores/globalStore";
const globalStore = useGlobalStore();
</script>

<template>
	<div class="theme-default bg-BN_BG_WHITE" :class="globalStore.loaded3 ? '' : 'overflow-hidden h-full'">
		<BN_Menu />
		<router-view></router-view>
		<BN_footer class="mt-16" />
	</div>
</template>

<script>
export default {
	name: "App.vue",
	mounted() {
		window.onbeforeunload = function () {
			window.scrollTo(0, 0);
		};
	},
	components: { BN_footer },
};
</script>

<style scoped></style>
