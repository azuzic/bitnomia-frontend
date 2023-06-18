<template>
    <div class="w-fit mb-16 px-32 flex flex-col rounded-l-3xl right-0 absolute overflow-hidden bg-gradient-to-b from-amber-200 via-orange-300 to-rose-400">

        <img loading="eager" class="absolute left-32 top-16 h-[520px] transition-all duration-1000" src="https://talenttechlabs.com/wp-content/uploads/2021/01/advisory-understand-the-need.png" alt="" ref="elementToObserve1"
                :class="entered1 ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-25'">

        <div class="text-6xl py-16 font-bold text-amber-950 underline underline-offset-[6px] transition-all duration-1000 text-right"
                :class="entered1 ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-25'">Market selection tool</div>


        <div class="flex w-full">
            <div class="w-3/5"></div>
            <div class="flex flex-col text-2xl w-2/5 gap-8 text-orange-950 text-right">
                <div class="transition-all duration-1000"
                    :class="entered1 ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-25'">
                    Transform your digital campaigns with our powerful market <b>clustering tool</b>.
                </div>
                <div class="transition-all duration-1000" ref="elementToObserve2"
                    :class="entered2 ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-25'">
                    Clustering algorithms apply a mix of <b>time-series</b>, <b>transactional</b> and classical <b>meta-data</b>.
                </div>
                <div class="transition-all duration-1000" ref="elementToObserve3"
                    :class="entered3 ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-25'">
                    <b>Statistical balancing</b> ensures an easy-to-read <b>lift measurement</b>, making our tool the perfect choice for digital campaigns. 
                </div>
            </div>
        </div>

        <div class="pt-16 pb-52 font-bold text-3xl text-rose-950 transition-all duration-1000 text-right"
                :class="entered3 ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-25'">
            Technologies applied:
        </div>
        <div class="absolute bottom-0 flex flex-row-reverse w-full gap-8 -left-0 pr-32 py-4 text-BN_FONT_WHITE bg-gradient-to-r from-amber-900 via-orange-900 to-rose-900" ref="elementToObserve">
            <div class="flex flex-col w-32 h-36 justify-center items-center gap-2 hover:bg-rose-950 rounded-lg py-1 transition-all duration-500 group"
                :class="entered ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-25'">
                <img loading="eager" class="h-20 p-0 w-auto" src="https://cdn.getmidnight.com/171293841d3fdd4af2e12426ce202ac9/2022/09/dsfmlogo-1.png" alt="">
                <div class="text-lg text-center group-hover:grow h-0 overflow-hidden flex items-center transition-all duration-300"> Clustering <br> Algorithms </div>
            </div>
            <div class="flex flex-col w-32 h-36 justify-center items-center gap-2 hover:bg-rose-950 rounded-lg py-1 transition-all duration-500 group"
                :class="entered ? 'translate-x-0 opacity-100 delay-50' : 'translate-x-8 opacity-25'">
                <img loading="eager" class="h-20 p-4 w-auto invert" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png" alt="">
                <div class="text-lg text-center group-hover:grow h-0 overflow-hidden flex items-center transition-all duration-300"> Amazon <br> Web Service </div>
            </div>
            <div class="flex flex-col w-32 h-36 justify-center items-center gap-2 hover:bg-rose-950 rounded-lg py-1 transition-all duration-500 group"
                :class="entered ? 'translate-x-0 opacity-100 delay-100' : 'translate-x-8 opacity-25'">
                <img loading="eager" class="h-20 p-3 w-auto invert" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Apache_Spark_logo.svg/2560px-Apache_Spark_logo.svg.png" alt="">
                <div class="text-lg text-center group-hover:grow h-0 overflow-hidden flex items-center transition-all duration-300"> Apache <br> Spark </div>
            </div>
            <div class="flex flex-col w-32 h-36 justify-center items-center gap-2 hover:bg-rose-950 rounded-lg py-1 transition-all duration-500 group"
                :class="entered ? 'translate-x-0 opacity-100 delay-150' : 'translate-x-8 opacity-25'">
                <img loading="eager" class="h-20 p-1 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png" alt="">
                <div class="text-lg text-center group-hover:grow h-0 overflow-hidden flex items-center transition-all duration-300"> Jenkins </div>
            </div>
            <div class="flex flex-col w-32 h-36 justify-center items-center gap-2 hover:bg-rose-950 rounded-lg py-1 transition-all duration-500 group"
                :class="entered ? 'translate-x-0 opacity-100 delay-200' : 'translate-x-8 opacity-25'">
                <img loading="eager" class="h-20 p-1 w-auto" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png" alt="">
                <div class="text-lg text-center group-hover:grow h-0 overflow-hidden flex items-center transition-all duration-300"> Python </div>
            </div>
            <div class="absolute left-0 h-full flex flex-col justify-center items-start ml-16 gap-4 text-2xl -mt-4">
                <div class="">Domain: <i class="text-orange-300 font-bold">Marketing</i> </div>
                <div class="">Client: <i class="text-orange-300 font-bold">Fortune 500 enterprise</i></div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: "BN_Work_2",
    data() { return { 
        entered: false, 
        entered1: false, 
        entered2: false, 
        entered3: false, 
    } },
    mounted() {
        this.$nextTick(() => {
        const options = {
            root: null,
            rootMargin: '50px',
            threshold: 0.25,
        };

        const observer = new IntersectionObserver(this.handleIntersect, options);
        const observer1 = new IntersectionObserver(this.handleIntersect1, options);
        const observer2 = new IntersectionObserver(this.handleIntersect2, options);
        const observer3 = new IntersectionObserver(this.handleIntersect3, options);
        observer.observe(this.$refs.elementToObserve);
        observer1.observe(this.$refs.elementToObserve1);
        observer2.observe(this.$refs.elementToObserve2);
        observer3.observe(this.$refs.elementToObserve3);
        });
    },
    methods: {
        handleIntersect(entries) { entries.forEach(entry => { this.entered = entry.isIntersecting; }) },
        handleIntersect1(entries) { entries.forEach(entry => { this.entered1 = entry.isIntersecting; }) },
        handleIntersect2(entries) { entries.forEach(entry => { this.entered2 = entry.isIntersecting; }) },
        handleIntersect3(entries) { entries.forEach(entry => { this.entered3 = entry.isIntersecting; }) },
    },
};
</script>