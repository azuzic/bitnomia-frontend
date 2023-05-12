<script setup>
import MachineLearningIcon from "@/assets/Images/MachineLearningIcon.png"
</script>
<template>
    <div class="w-full flex justify-between p-32">
        <div class="text-9xl">
            <div class="text-BN_FONT_BOLD py-2">We specialize in</div>
            <div class="test font-bold py-2">big-data</div>
            <div class="test font-bold py-2">machine-learning</div>
            <div class="text-BN_FONT_BOLD py-2">pipelines.</div>
        </div>
        <img class="h-[512px]" :src="MachineLearningIcon">
    </div>
</template>

<script>
export default {
    name: "BN_Description2",
}
</script>

<style lang="scss" scoped>
.test {
    background: linear-gradient(99.14deg, #07ABCF 3.85%, #635CA7 68.5%, #6A56A4 73.2%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
</style>