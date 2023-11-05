<template>
	<div class="relative w-full h-fit">
		<div class="w-full lg:w-10/12 flex flex-col justify-between lg:rounded-r-3xl relative overflow-hidden bg-gradient-to-b from-cyan-100 via-blue-200 to-indigo-300">
			<div class="w-full flex flex-row-reverse p-4 lg:p-8">
				<div class="hidden lg:flex justify-center items-center">
					<img loading="eager" class="w-10/12 transition-all duration-1000" src="@/assets/Images/ProspectSelectionPipeline.svg" alt="" ref="elementToObserve1" :class="entered1 ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-25'" />
				</div>
				<div class="w-full flex flex-col justify-between gap-6 lg:gap-8">
					<div class="w-full flex flex-col gap-6 lg:gap-8">
						<div class="text-2xl text-center lg:text-left lg:text-4xl font-bold text-cyan-950 underline underline-offset-[6px] transition-all duration-1000" :class="entered1 ? 'translate-y-0 opacity-100' : 'lg:translate-y-16 lg:opacity-25'">
							Prospect selection pipeline
						</div>

						<div class="flex flex-col w-full text-center lg:text-left lg:pr-64">
							<div class="flex flex-col text-base lg:text-lg gap-4 lg:gap-8 text-blue-950">
								<div class="transition-all duration-1000" :class="entered1 ? 'translate-y-0 opacity-100' : 'lg:translate-y-16 lg:opacity-25'"><b>Maximize</b> your <b>ROI</b> by leveraging customer and prospect data for targeted acquisitions.</div>
								<div class="transition-all duration-1000" ref="elementToObserve2" :class="entered2 ? 'translate-y-0 opacity-100' : 'lg:translate-y-16 lg:opacity-25'">
									Our <b>Long-Term Value</b> and <b>uplift models</b> deliver powerful results, driving campaigns with budgets over <b>$1M per month.</b>
								</div>
								<div class="transition-all duration-1000" ref="elementToObserve3" :class="entered3 ? 'translate-y-0 opacity-100' : 'lg:translate-y-16 lg:opacity-25'">Get the most out of your data and achieve better targeting today.</div>
							</div>
						</div>
					</div>

					<div class="font-bold text-xl lg:text-2xl text-center lg:text-left text-indigo-950 transition-all duration-1000" :class="entered3 ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-25'">Technologies applied:</div>
				</div>
			</div>

			<div class="relative flex flex-row justify-between items-center w-full gap-8 lg:pr-8 py-2 text-BN_FONT_WHITE bg-gradient-to-r from-BN_BACKGROUND via-sky-950 to-indigo-950" ref="elementToObserve">
				<div class="h-full hidden lg:flex flex-col justify-center items-start ml-16 gap-4 text-lg -mt-4">
					<div class="">Domain: <span class="text-BN_PRIMARY">Marketing</span></div>
					<div class="">Client: <span class="text-BN_PRIMARY">Fortune 500 enterprise</span></div>
				</div>
				<div
					class="relative flex overflow-x-scroll lg:justify-end justify-start lg:flex-nowrap lg:flex-row-reverse h-full gap-2 lg:gap-8 scrollbar-thumb-BN_PRIMARY scrollbar scrollbar-h-1.5 lg:scrollbar-none scrollbar-thumb-rounded-full mx-4 lg:mx-0 pb-2 lg:pb-0">
					<BN_TechnologyIcon name="Gradient <br> Boosting" imgClass="p-1" src="https://www.gormanalysis.com/logo.png" :entered="entered" class="hover:bg-BN_BACKGROUND2" />
					<BN_TechnologyIcon
						name="Amazon <br> Web Service"
						imgClass="p-4 invert"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png"
						:entered="entered"
						class="hover:bg-BN_BACKGROUND2" />
					<BN_TechnologyIcon name="Apache <br> Spark" imgClass="p-3 invert" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Apache_Spark_logo.svg/2560px-Apache_Spark_logo.svg.png" :entered="entered" class="hover:bg-BN_BACKGROUND2" />
					<BN_TechnologyIcon name="Jenkins" imgClass="p-1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png" :entered="entered" class="hover:bg-BN_BACKGROUND2" />
					<BN_TechnologyIcon name="Python" imgClass="p-1" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png" :entered="entered" class="hover:bg-BN_BACKGROUND2" />
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import BN_TechnologyIcon from "../Work/BN_TechnologyIcon.vue";
export default {
	name: "BN_Work_1",
	components: { BN_TechnologyIcon },
	data() {
		return {
			entered: false,
			entered1: false,
			entered2: false,
			entered3: false,
		};
	},
	mounted() {
		this.$nextTick(() => {
			const options = {
				root: null,
				rootMargin: "50px",
				threshold: 0.25,
			};
			const observer = new IntersectionObserver(this.handleIntersect, options);
			const observer1 = new IntersectionObserver(this.handleIntersect1, options);
			const observer2 = new IntersectionObserver(this.handleIntersect2, options);
			const observer3 = new IntersectionObserver(this.handleIntersect3, options);
			observer.observe(this.$refs.elementToObserve);
			observer1.observe(this.$refs.elementToObserve1);
			observer2.observe(this.$refs.elementToObserve2);
			observer3.observe(this.$refs.elementToObserve3);
		});
	},
	methods: {
		handleIntersect(entries) {
			if (!this.entered)
				entries.forEach((entry) => {
					this.entered = entry.isIntersecting;
				});
		},
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
