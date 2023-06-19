<script setup>
import TransationIcon from "@/assets/BigIcons/TransationIcon.svg"
import ServerIcon from "@/assets/BigIcons/ServerIcon.svg"
import GraphIcon from "@/assets/BigIcons/GraphIcon.svg"
</script>
<template>
    <div class="w-full flex justify-evenly py-32" ref="elementToObserve">
        <div class="flex flex-col justify-center items-center">
            <img loading="eager" class="w-52 transition-all duration-700" :src="ServerIcon"
                :class="entered ? 'translate-y-0 opacity-100 delay-100' : 'opacity-50 translate-y-16'">
            <div class="font-bold text-BN_FONT_BOLD mt-4 text-3xl transition-all duration-1000"
                :class="entered ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-16 opacity-25'">Terabytes</div> 
            <div class="text-BN_FONT mt-1 text-xl transition-all duration-1000"
                :class="entered ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-16 opacity-25'">processed daily</div>
        </div>
        <div class="flex flex-col justify-center items-center">
            <img loading="eager" class="w-72 transition-all duration-700" :src="TransationIcon"
                :class="entered ? 'translate-y-0 opacity-100' : 'w-[184px] opacity-50 translate-y-16'">
            <div class="font-bold text-BN_FONT_BOLD text-4xl mt-4 z-10 transition-all duration-1000"
                :class="entered ? 'translate-y-0 opacity-100 delay-100' : 'translate-y-16 opacity-25'">Transactions</div> 
            <div class="text-BN_FONT text-2xl mt-1 z-10 transition-all duration-1000"
                :class="entered ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-16 opacity-25'">per second</div>
        </div>
        <div class="flex flex-col justify-center items-center">
            <img loading="eager" class="w-52 transition-all duration-700" :src="GraphIcon"
                :class="entered ? 'translate-y-0 opacity-100 delay-100' : 'opacity-50 translate-y-16'">
            <div class="font-bold text-BN_FONT_BOLD mt-4 text-3xl transition-all duration-1000"
                :class="entered ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-16 opacity-25'">1M$ monthly</div> 
            <div class="text-BN_FONT mt-1  text-xl transition-all duration-1000"
                :class="entered ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-16 opacity-25'">processes value</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BN_Description",
    data() {
        return {         
            entered: false
        }
    },
    mounted() {
        this.$nextTick(() => {
        const options = {
            root: null,
            rootMargin: '50px',
            threshold: 0.35,
        };

        const observer = new IntersectionObserver(this.handleIntersect, options);
        observer.observe(this.$refs.elementToObserve);
        });
    },
    methods: {
        handleIntersect(entries) {
        entries.forEach(entry => { this.entered = entry.isIntersecting; })
        },
    },
};
</script>

<style lang="scss" scoped></style>