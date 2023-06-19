<script setup>
import { useGlobalStore } from '@/stores/globalStore'
import TopTitleBGElement from "@/assets/Logos/BGelements/TopTitleBGElement.svg"
const globalStore = useGlobalStore()
</script>

<template>
    <div class="bg-gradient-to-r from-BN_BACKGROUND via-sky-950 to-indigo-950 h-screen w-full px-32 -mt-48 pt-32 relative transition-all duration-1000"
        :class="[globalStore.loaded2 ? '-mt-48 ' : '-mt-96', globalStore.loaded3 ? 'overflow-hidden' : '']">

        <img loading="eager" class="absolute -right-32 -top-44 z-0" :src="TopTitleBGElement">

        <div class="text-BN_FONT_WHITE text-6xl font-bold leading-tight my-32 relative  transition-all duration-1000" ref="elementToObserve1"
                :class="entered1 ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-25'">
            A team of battle-tested experts <br>
            to help you deliver value <br>
            by extracting insights <br>
            from your data.
        </div>

        <div class="text-BN_FONT_WHITE text-3xl leading-tight relative  transition-all duration-1000" ref="elementToObserve2"
                :class="entered2 ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-25'">
            Delivering value since <b>2017</b>
        </div>

        <div class="text-BN_PRIMARY font-bold leading-tight gap-4 flex mt-8 relative transition-all duration-1000" ref="elementToObserve3"
                :class="entered3 ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-25'">
            <span>#<u class="underline">machine-learning</u> </span>
            <span>#<u class="underline">big-data</u></span>
            <span>#<u class="underline">artificial-intelligence</u></span>
            <span>#<u class="underline">cloud</u></span>
        </div>

        <spline-viewer  loading="eager" class="absolute -bottom-[180px] -right-[640px] scale-50  transition-all duration-1000" url="https://prod.spline.design/cjloRKM5g-U1lcQI/scene.splinecode"
                :class="entered3 ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-25'"></spline-viewer>
    </div>
</template>

<script>
export default {
    name: "BN_TopTitle",
    data() { return { 
        entered1: false, 
        entered2: false, 
        entered3: false, 
    } },
    mounted() {
        this.$nextTick(() => {
        const options = {
            root: null,
            rootMargin: '0px',
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
        handleIntersect1(entries) { entries.forEach(entry => { this.entered1 = entry.isIntersecting; }) },
        handleIntersect2(entries) { entries.forEach(entry => { this.entered2 = entry.isIntersecting; }) },
        handleIntersect3(entries) { entries.forEach(entry => { this.entered3 = entry.isIntersecting; }) },
    },
};
</script>