<script setup>
import BN_TopTitle from "@/components/Home/BN_TopTitle.vue";
import BN_Description from "@/components/Home/BN_Description.vue";
import BN_Description2 from "@/components/Home/BN_Description2.vue";
import BN_BigDivider from "@/components/Home/BN_BigDivider.vue";
import BN_Work_1 from "@/components/Home/BN_Work_1.vue";
import BN_Work_2 from "@/components/Home/BN_Work_2.vue";
import BN_ContactUs from "@/components/BN_ContactUs.vue";
</script>
<template>
	<div class="bg-BN_BG_WHITE relative">
		<BN_TopTitle />
		<BN_Description />
		<BN_BigDivider text="Some of our work" />
		<BN_Description2 />
		<BN_Work_1 class="mt-8 lg:mt-32" />
		<BN_Work_2 class="mt-16" />
		<BN_BigDivider class="mt-16" text="Got a challenge for us?" id="contact" />
		<BN_ContactUs />
	</div>
</template>
