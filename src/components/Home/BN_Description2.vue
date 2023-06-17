<template>
    <div class="mt-32 w-full h-96 pl-32 flex justify-between items-center pr-32">
        <div class="text-7xl pl-1">
            <div class="text-BN_FONT_BOLD py-2 whitespace-nowrap transition-all duration-1000" ref="elementToObserve1"
                :class="entered1 ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-25'">We specialize in</div>
            <div class="test font-bold py-2 whitespace-nowrap transition-all duration-1000" ref="elementToObserve2"
                :class="entered2 ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-25'">big-data</div>
            <div class="test font-bold py-2 whitespace-nowrap transition-all duration-1000" ref="elementToObserve3"
                :class="entered3 ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-25'">machine-learning</div>
            <div class="text-BN_FONT_BOLD py-2 whitespace-nowrap transition-all duration-1000" ref="elementToObserve4"
                :class="entered4 ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-25'">pipelines.</div>
        </div>
        <div class="grow h-full flex justify-center items-center rounded-full overflow-hidden">
            <spline-viewer class="-mr-48" url="https://prod.spline.design/SuzxJqULIECQ19cC/scene.splinecode"></spline-viewer>
        </div>
    </div>
</template>

<script>
export default {
    name: "BN_Description2",
    data() { return { 
        entered1: false, 
        entered2: false, 
        entered3: false, 
        entered4: false, 
    } },
    mounted() {
        this.$nextTick(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer1 = new IntersectionObserver(this.handleIntersect1, options);
        const observer2 = new IntersectionObserver(this.handleIntersect2, options);
        const observer3 = new IntersectionObserver(this.handleIntersect3, options);
        const observer4 = new IntersectionObserver(this.handleIntersect4, options);
        observer1.observe(this.$refs.elementToObserve1);
        observer2.observe(this.$refs.elementToObserve2);
        observer3.observe(this.$refs.elementToObserve3);
        observer4.observe(this.$refs.elementToObserve4);
        });
    },
    methods: {
        handleIntersect1(entries) { entries.forEach(entry => { this.entered1 = entry.isIntersecting; }) },
        handleIntersect2(entries) { entries.forEach(entry => { this.entered2 = entry.isIntersecting; }) },
        handleIntersect3(entries) { entries.forEach(entry => { this.entered3 = entry.isIntersecting; }) },
        handleIntersect4(entries) { entries.forEach(entry => { this.entered4 = entry.isIntersecting; }) },
    },
};
</script>

<style lang="scss" scoped>
.test {
    background: linear-gradient(99.14deg, #07ABCF 3.85%, #635CA7 68.5%, #6A56A4 73.2%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
</style>