<script setup>
import TopTitleBGElement from "@/assets/Logos/BGelements/TopTitleBGElement2.svg"
import BinomiaLogo from "@/assets/Logos/BitnomiaLogo.svg"
</script>

<template>
    <div class="sticky top-0 w-full h-24 overflow-hidden transition-all duration-500 mt-24 z-50"
    :class="scrolled ? 'drop-shadow-2xl' : 'drop-shadow-none'">

        <div class="absolute w-full h-full flex bg-BN_BACKGROUND">
            <div class="grow h-full flex relative justify-center items-center">

                <!-- background vector image decoration -->
                <img class="absolute -right-32 -top-44 -mt-24 z-10 transition-all duration-500" :src="TopTitleBGElement"
                    :class="scrolled ? '-right-8' : '-right-32'">

                <button class="absolute right-32 h-14 w-56 | rounded-2xl text-2xl | font-bold text-BN_FONT_WHITE hover:text-BN_BG_WHITE | flex justify-center items-center 
                    z-50 overflow-hidden border-4 group | hover:h-16 hover:-mt-1 hover:w-60 hover:right-[120px] hover:border-0 
                    border-BN_PRIMARY hover:border-opacity-0 transition-all duration-500">
                    <div class="absolute h-0 w-0 opacity-0 bg-BN_PRIMARY -z-[1] rounded-2xl
                        group-hover:h-14 group-hover:w-56 group-hover:opacity-100 transition-all duration-500"></div>
                        Contact Us <i class="ml-2 group-hover:ml-4 fa fa-solid fa-circle-right transition-all duration-500"></i>
                </button>
                
            </div>
        </div>
        
        <div class="absolute flex h-full flex-col ml-32">
            <img class="w-64 h-full" :src="BinomiaLogo">
        </div>

        <div class="absolute flex flex-col justify-center items-center w-64 h-32 right-32">
            
        </div>
    </div>
</template>

<script>
export default {
    name: "Menu.vue",
    data() { return {
        scrolled: false
    } },

    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const scrollPosition = window.scrollY;
            this.scrolled = scrollPosition > 127;
        }
    },

}
</script>

<style lang="scss" scoped>
</style>