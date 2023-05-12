<script setup>
import BinomiaLogo from "@/assets/Logos/BitnomiaLogo.svg"
import TopTitleBGElement from "@/assets/Logos/BGelements/TopTitleBGElement.svg"
</script>

<template>
    <div class="bg-BN_BACKGROUND h-screen w-full px-32 pt-16 relative overflow-hidden">

        <button class="mt-8 absolute right-32 h-14 w-56 | rounded-2xl text-2xl | font-bold text-BN_FONT_WHITE hover:text-BN_BG_WHITE | flex justify-center items-center 
                        z-10 overflow-hidden border-4 group | hover:h-16 hover:mt-7 hover:w-60 hover:right-[120px] hover:border-0 
                        border-BN_PRIMARY hover:border-opacity-0 transition-all duration-500">
            <div class="absolute h-0 w-0 opacity-0 bg-BN_PRIMARY -z-[1] rounded-2xl
                        group-hover:h-14 group-hover:w-56 group-hover:opacity-100 transition-all duration-500"></div>
            Contact Us <i class="ml-2 group-hover:ml-4 fa fa-solid fa-circle-right transition-all duration-500"></i>
        </button>

        <img class="absolute -right-32 -top-44" :src="TopTitleBGElement">

        <div class="flex flex-col w-fit gap-16">
            <img :src="BinomiaLogo">
            <hr class="border-BN_FONT_WHITE border-4 rounded-full">
        </div>

        <div class="text-BN_FONT_WHITE text-7xl font-bold leading-tight my-16">
            A team of battle-tested experts <br>
            to help you deliver value <br>
            by extracting insights <br>
            from your data.
        </div>

        <div class="text-BN_FONT_WHITE text-4xl leading-tight">
            Delivering value since <b>2017</b>
        </div>

        <div class="text-BN_PRIMARY font-bold text-2xl leading-tight flex gap-4 mt-8">
            <div class="hover:underline cursor-pointer">#machine-learning</div>
            <div class="hover:underline cursor-pointer">#big-data</div>
            <div class="hover:underline cursor-pointer">#artificial-intelligence</div>
            <div class="hover:underline cursor-pointer">#cloud</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BN_TopTitle",
}
</script>