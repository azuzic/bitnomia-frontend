<script setup>
import TransationIcon from "@/assets/BigIcons/TransationIcon.svg"
import ServerIcon from "@/assets/BigIcons/ServerIcon.svg"
import GraphIcon from "@/assets/BigIcons/GraphIcon.svg"
</script>
<template>
    <div class="w-full flex justify-evenly py-32">
        <div class="flex flex-col justify-center items-center">
            <img class="w-[386px]" :src="ServerIcon"/>
            <div class="font-bold text-BN_FONT_BOLD text-5xl mt-4">Terabytes</div> 
            <div class="text-BN_FONT text-3xl mt-1">processed daily</div>
        </div>
        <div class="flex flex-col justify-center items-center">
            <img v-if="!true" class="w-[484px]" :src="TransationIcon"/>
            <div v-else class="w-[484px] h-[540px] flex justify-center items-center">
                <div class="scale-[60%]">
                    <spline-viewer loading-anim url="https://prod.spline.design/oVFATqd-odiZgqRV/scene.splinecode"></spline-viewer>
                </div>
            </div>

            <div class="font-bold text-BN_FONT_BOLD text-6xl mt-4 z-10">Transactions</div> 
            <div class="text-BN_FONT text-4xl mt-1  z-10">per second</div>
        </div>
        <div class="flex flex-col justify-center items-center">
            <img class="w-[386px]" :src="GraphIcon"/>
                <div class="font-bold text-BN_FONT_BOLD text-5xl mt-4">1M$ monthly</div> 
                <div class="text-BN_FONT text-3xl mt-1">processes value</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BN_Description",
    components: { },
    props: {},
    data() { return {} },
}
</script>

<style lang="scss" scoped></style>