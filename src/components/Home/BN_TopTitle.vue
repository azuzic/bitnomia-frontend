<script setup>
import { useGlobalStore } from "@/stores/globalStore";
import TopTitleBGElement from "@/assets/Logos/BGelements/TopTitleBGElement.svg";
const globalStore = useGlobalStore();
</script>

<template>
	<div
		class="bg-gradient-to-r from-BN_BACKGROUND via-sky-950 to-indigo-950 h-fit xl:h-screen w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 pt-44 sm:pt-32 relative transition-all duration-1000"
		:class="[globalStore.loaded2 ? '-mt-[160px] ' : '-mt-[840px]', globalStore.loaded3 ? 'overflow-hidden' : 'overflow-hidden sm:overflow-visible']">
		<img loading="eager" class="absolute -right-36 top-8 sm:-right-32 sm:-top-44 z-0 w-72 sm:w-auto" :src="TopTitleBGElement" />

		<div
			class="text-BN_FONT_WHITE font-bold sm:text-left | sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl | mt-4 sm:mt-16 md:mt-24 lg:mt-28 xl:mt-32 | leading-6 sm:leading-normal | relative transition-all duration-1000"
			ref="elementToObserve1"
			:class="entered1 && globalStore.loaded2 ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-25'">
			A team of battle-tested experts <br />
			to help you deliver value <br />
			by extracting insights <br />
			from your data.
		</div>

		<div
			class="text-BN_FONT_WHITE | text-lg sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl | leading-tight relative transition-all duration-1000 | mt-4 sm:mt-8 md:mt-16 lg:mt-24 xl:mt-32"
			ref="elementToObserve2"
			:class="entered2 && globalStore.loaded2 ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-25'">
			Delivering value since <b>2017</b>
		</div>

		<div
			class="text-BN_PRIMARY font-bold leading-tight pr-32 sm:pr-0 gap-2 mb-4 xl:mb-0 sm:gap-4 flex flex-wrap mt-2 sm:mt-8 text-xs lg:text-base relative transition-all duration-1000"
			ref="elementToObserve3"
			:class="entered3 && globalStore.loaded2 ? 'translate-y-0 opacity-100' : 'translate-y-0 sm:translate-y-16 opacity-25'">
			<span>#<u class="underline">machine-learning</u> </span>
			<span>#<u class="underline">big-data</u></span>
			<span>#<u class="underline">artificial-intelligence</u></span>
			<span>#<u class="underline">cloud</u></span>
		</div>

		<div
			class="absolute -bottom-[280px] sm:-bottom-[220px] md:-bottom-[180px] lg:-bottom-[160px] xl:-bottom-[120px] -right-64 sm:-right-40 md:-right-24 lg:-right-12 xl:-right-0 flex justify-start items-start aspect-square h-[700px] rounded-full overflow-hidden scale-[25%] sm:scale-[50%] md:scale-[65%] lg:scale-75 xl:scale-100 transition-all duration-500">
			<spline-viewer
				v-if="globalStore.showSplines"
				loading="eager"
				class="absolute -bottom-32 block h-[950px] w-[950px] scale-50"
				url="https://prod.spline.design/cjloRKM5g-U1lcQI/scene.splinecode"
				:class="entered3 && globalStore.loaded2 ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-25'"></spline-viewer>
		</div>
	</div>
</template>

<script>
export default {
	name: "BN_TopTitle",
	data() {
		return {
			entered1: false,
			entered2: false,
			entered3: false,
		};
	},
	mounted() {
		this.$nextTick(() => {
			const options = {
				root: null,
				rootMargin: "0px",
				threshold: 0.25,
			};

			const observer1 = new IntersectionObserver(this.handleIntersect1, options);
			const observer2 = new IntersectionObserver(this.handleIntersect2, options);
			const observer3 = new IntersectionObserver(this.handleIntersect3, options);
			observer1.observe(this.$refs.elementToObserve1);
			observer2.observe(this.$refs.elementToObserve2);
			observer3.observe(this.$refs.elementToObserve3);
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
	},
};
</script>
