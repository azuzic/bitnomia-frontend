<script setup>
import TopTitleBGElement from "@/assets/Logos/BGelements/TopTitleBGElement2.svg"
import BinomiaLogo from "@/assets/Logos/BitnomiaLogo.svg"
</script>

<template>
    <div class="sticky top-0 w-full transition-all duration-1000 z-50 overflow-hidden"
    :class="[scrolled ? 'drop-shadow-2xl' : 'drop-shadow-none', loaded2 ? 'h-24 mt-24' : 'h-screen mt-0 pointer-events-none']">

        <div class="fixed top-0 left-0 w-full h-full bbg-BN_BACKGROUND flex justify-center items-center z-[200] text-5xl text-BN_FONT_WHITE font-bold transition-all duration-1000"
            :class="loaded3 ? 'opacity-0 pointer-events-none' : 'opacity-100'">
            <svg :class="[loaded2 ? 'left-[156px] -mt-[18px] h-9 drop-shadow-lg' : 'h-20 -mt-[0px] -translate-y-1/2 left-1/2 drop-shadow-2xl', loaded1 ? '' : 'animate-pulse']" class="absolute top-1/2 -translate-x-1/2 transition-all duration-1000" viewBox="0 0 133 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M132.8 40.8C132.8 63.3 114.6 81.5 92.1 81.5H30.6C13.7 81.5 0 67.8 0 50.9C0 34 13.7 20.3 30.6 20.3C30.8 20.3 31.1 20.3 31.3 20.3C31.5 20.3 31.7 20.3 31.9 20.3H32C32.2 20.3 32.3 20.3 32.5 20.3C32.7 20.3 32.8 20.3 33 20.3C33.2 20.3 33.3 20.3 33.5 20.3C34 20.3 34.4 20.4 34.9 20.5C35.1 20.5 35.2 20.5 35.4 20.6C35.5 20.6 35.7 20.6 35.8 20.7C36.1 20.7 36.3 20.8 36.6 20.8C36.8 20.8 36.9 20.9 37.1 20.9C37.2 20.9 37.2 20.9 37.3 20.9C37.4 20.9 37.6 21 37.7 21C38.2 21.1 38.7 21.2 39.2 21.4C39.5 21.5 39.7 21.6 40 21.6C40.1 21.6 40.3 21.7 40.4 21.7C44.8 23.1 49.1 25.3 53.3 28C69.6 38.5 84.9 56.5 99.9 62.3C102.7 63.5 105.9 64.2 109.2 64.2C122.3 64.5 132.8 53.9 132.8 40.8Z" fill="#09B5DA"/>
                <path d="M132.8 40.8C132.8 53.8 122.2 64.4 109.2 64.4C106.1 64.4 103 63.7 99.9 62.5C84.9 56.7 69.7 38.7 53.3 28.2C58.6 11.9 73.9 0 92 0C114.6 0.1 132.8 18.3 132.8 40.8Z" fill="#0096C5"/>
            </svg>
        </div>

        <div class="absolute w-full h-full flex bg-gradient-to-r from-BN_BACKGROUND via-sky-950 to-indigo-950">
            <div class="grow h-full flex relative justify-center items-center" :class="loaded3 ? 'opacity-100' : 'opacity-0'">

                <img loading="eager" class="absolute -right-32 -top-44 -mt-24 z-10 transition-all duration-1000" :src="TopTitleBGElement"
                    :class="[scrolled ? '-right-8' : '-right-32', loaded3 ? 'opacity-100 -right-32' : 'opacity-0 -right-[680px]']">

                <button @click="scroll('contact')" class="absolute right-32 h-14 w-56 | rounded-2xl text-2xl | font-bold text-BN_FONT_WHITE hover:text-BN_BG_WHITE | flex justify-center items-center 
                    z-50 overflow-hidden border-4 group | hover:h-16 hover:-mt-1 hover:w-60 hover:right-[120px] hover:border-0 
                    border-BN_PRIMARY hover:border-opacity-0 transition-all duration-500" :class="loaded3 ? 'opacity-100' : 'opacity-0'">
                    <div class="absolute h-0 w-0 opacity-0 bg-BN_PRIMARY -z-[1] rounded-2xl
                        group-hover:h-14 group-hover:w-56 group-hover:opacity-100 transition-all duration-500"></div>
                        Contact Us <i class="ml-2 group-hover:ml-4 fa fa-solid fa-circle-right transition-all duration-500"></i>
                </button>
                
            </div>
        </div>
        
        <div class="absolute flex h-full flex-col ml-32 transition-all duration-500 overflow-hidden" :class="loaded3 ? 'w-64' : 'w-0'">
            <img loading="eager" class="absolute h-full min-w-[256px] w-64 drop-shadow-lg" :src="BinomiaLogo">
        </div>

        <div class="absolute flex flex-col justify-center items-center w-64 h-32 right-32">
            
        </div>
    </div>
</template>

<script>
export default {
    name: "Menu.vue",
    data() { return {
        scrolled: false,
        loaded1: false,
        loaded2: false,
        loaded3: false
    } },
    mounted() {
        document.documentElement.style.backgroundImage = 'linear-gradient(to right, rgb(22, 54, 94), rgb(8, 47, 73), rgb(30, 27, 75))';
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('load', () => {
            setTimeout(() => {
                this.loaded1 = true;
            }, 500);
            setTimeout(() => {
                this.loaded2 = true;
            }, 2500);
            setTimeout(() => {
                this.loaded3 = true;
                document.documentElement.style.overflow = 'auto';
                document.documentElement.style.backgroundImage = 'none';
            }, 3500);
        });
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const scrollPosition = window.scrollY;
            this.scrolled = scrollPosition > 127;
        },
        scroll(id) {
            document.getElementById(id).scrollIntoView({ behavior: "smooth", });
        }
    },

}
</script>

<style>
html {
    overflow: hidden;
}
</style>