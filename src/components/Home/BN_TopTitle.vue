<script setup>
import TopTitleBGElement from "@/assets/Logos/BGelements/TopTitleBGElement.svg"
</script>

<template>
    <div class="bg-BN_BACKGROUND h-screen w-full px-32 -mt-48 pt-32 relative overflow-hidden">

        <img class="absolute -right-32 -top-44 z-0" :src="TopTitleBGElement">

        <div class="text-BN_FONT_WHITE text-6xl font-bold leading-tight my-32 relative">
            A team of battle-tested experts <br>
            to help you deliver value <br>
            by extracting insights <br>
            from your data.
        </div>

        <div class="text-BN_FONT_WHITE text-3xl leading-tight relative">
            Delivering value since <b>2017</b>
        </div>

        <div class="text-BN_PRIMARY font-bold leading-tight gap-4 flex mt-8 relative">
            <span>#<u class="underline">machine-learning</u> </span>
            <span>#<u class="underline">big-data</u></span>
            <span>#<u class="underline">artificial-intelligence</u></span>
            <span>#<u class="underline">cloud</u></span>
        </div>

        <spline-viewer class="absolute -bottom-[180px] -right-[640px] scale-50" url="https://prod.spline.design/cjloRKM5g-U1lcQI/scene.splinecode"></spline-viewer>
    </div>
</template>

<script>
export default {
    name: "BN_TopTitle",
}
</script>