<script setup>
import { useGlobalStore } from "@/stores/globalStore";
const globalStore = useGlobalStore();
</script>
<template>
	<div class="relative mt-6 sm:mt-8 lg:mt-28 xl:mt-32 w-full h-fit sm:h-96 px-8 md:px-12 lg:px-16 xl:px-32 flex justify-center lg:justify-between items-center transition-all duration-500">
		<div class="text-3xl sm:text-5xl lg:text-6xl sm:pl-1 text-center lg:text-left w-full sm:w-auto">
			<div class="text-BN_FONT_BOLD py-1 sm:py-2 whitespace-nowrap transition-all duration-1000" :class="entered1 && globalStore.loaded2 ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-25'">We specialize in</div>
			<div class="test font-bold py-1 sm:py-2 whitespace-nowrap transition-all duration-1000" ref="elementToObserve2" :class="entered2 && globalStore.loaded2 ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-25'">big-data</div>
			<div class="test font-bold py-1 sm:py-2 whitespace-nowrap transition-all duration-1000" ref="elementToObserve3" :class="entered3 && globalStore.loaded2 ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-25'">machine-learning</div>
			<div class="text-BN_FONT_BOLD py-1 sm:py-2 whitespace-nowrap transition-all duration-1000" ref="elementToObserve4" :class="entered4 && globalStore.loaded2 ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-25'">pipelines.</div>
		</div>
		<div class="absolute -right-32 xl:right-0 transition-all duration-500 grow h-full hidden lg:flex justify-center items-center rounded-full min-w-[850px] overflow-hidden" ref="elementToObserve1">
			<spline-viewer
				v-if="globalStore.showSplines"
				loading="eager"
				class="-mr-48 transition-all duration-1000"
				url="https://prod.spline.design/SuzxJqULIECQ19cC/scene.splinecode"
				:class="entered1 && globalStore.loaded3 ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-25'"></spline-viewer>
		</div>
	</div>
</template>

<script>
export default {
	name: "BN_Description2",
	data() {
		return {
			entered1: false,
			entered2: false,
			entered3: false,
			entered4: false,
		};
	},
	mounted() {
		this.$nextTick(() => {
			const options = {
				root: null,
				rootMargin: "55px",
				threshold: 0.5,
			};

			const observer1 = new IntersectionObserver(this.handleIntersect1, options);
			const observer2 = new IntersectionObserver(this.handleIntersect2, options);
			const observer3 = new IntersectionObserver(this.handleIntersect3, options);
			const observer4 = new IntersectionObserver(this.handleIntersect4, options);
			observer1.observe(this.$refs.elementToObserve1);
			observer2.observe(this.$refs.elementToObserve2);
			observer3.observe(this.$refs.elementToObserve3);
			observer4.observe(this.$refs.elementToObserve4);
		});
	},
	methods: {
		handleIntersect1(entries) {
			if (!this.entered1)
				entries.forEach((entry) => {
					this.entered1 = entry.isIntersecting;
				});
		},
		handleIntersect2(entries) {
			if (!this.entered2)
				entries.forEach((entry) => {
					this.entered2 = entry.isIntersecting;
				});
		},
		handleIntersect3(entries) {
			if (!this.entered3)
				entries.forEach((entry) => {
					this.entered3 = entry.isIntersecting;
				});
		},
		handleIntersect4(entries) {
			if (!this.entered4)
				entries.forEach((entry) => {
					this.entered4 = entry.isIntersecting;
				});
		},
	},
};
</script>

<style lang="scss" scoped>
.test {
	background: linear-gradient(99.14deg, #07abcf 3.85%, #635ca7 68.5%, #6a56a4 73.2%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
}
</style>
