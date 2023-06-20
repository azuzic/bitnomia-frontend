<script setup>
import { useGlobalStore } from '@/stores/globalStore'
const globalStore = useGlobalStore()
</script>
<template>
    <div class="w-full flex justify-center text-center items-center relative" ref="elementToObserve">
        <div class="absolute bg-gradient-to-r from-BN_BACKGROUND via-sky-950 to-indigo-950 h-full transition-all duration-1000" :class="entered && globalStore.loaded3 ? 'w-full' : 'w-[0px]'"></div>
        <div class="font-bold test text-3xl sm:text-7xl py-5 sm:py-6 relative"> {{ text }} </div>
    </div>
</template>

<script>
export default {
    name: "BN_BigDivider",
    props: { text: String },
    data() {
        return {         
            entered: false
        }
    },
    mounted() {
        this.$nextTick(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.35,
        };

        const observer = new IntersectionObserver(this.handleIntersect, options);
        observer.observe(this.$refs.elementToObserve);
        });
    },
    methods: {
        handleIntersect(entries) { if(!this.entered) entries.forEach(entry => { this.entered = entry.isIntersecting; }) },
    },
};
</script>

<style lang="scss" scoped>
.test {
    background: linear-gradient(268.34deg, #D8E1E1 14.22%, #F4F8FF 84.58%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
</style>