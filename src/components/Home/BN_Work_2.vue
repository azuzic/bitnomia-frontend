<template>
    <div class="relative w-full h-fit flex justify-end">
        <div class="w-10/12 flex flex-col justify-between rounded-l-3xl relative overflow-hidden bg-gradient-to-b from-amber-200 via-orange-300 to-rose-400">

            <div class="w-full flex p-8">
                <div class="flex justify-center items-center">
                    <img loading="eager" class="w-10/12 transition-all duration-1000" src="https://talenttechlabs.com/wp-content/uploads/2021/01/advisory-understand-the-need.png" alt="" ref="elementToObserve1"
                    :class="entered1 ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-25'">
                </div>
                <div class="w-full flex flex-col justify-between gap-8">
                    <div class="w-full flex flex-col gap-8">
                        <div class="text-4xl font-bold text-amber-950 underline underline-offset-[6px] transition-all duration-1000 text-right"
                            :class="entered1 ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-25'">Market selection tool</div>

                        <div class="flex flex-col w-full pl-16 text-right">
                            <div class="flex flex-col text-lg gap-8 text-orange-950">
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
                    </div>
                    
                    <div class="font-bold text-2xl text-rose-950 transition-all duration-1000  text-right"
                            :class="entered3 ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-25'">
                        Technologies applied:
                    </div>
                </div>            
            </div>     

            <div class="relative flex flex-row justify-between items-center w-full gap-8 pr-8 py-2 text-BN_FONT_WHITE bg-gradient-to-r from-amber-900 via-orange-900 to-rose-900" ref="elementToObserve">     
                <div class="h-full flex flex-col justify-center items-start ml-16 gap-4 text-lg -mt-4">
                    <div class="">Domain: <span class="text-orange-300">Marketing</span> </div>
                    <div class="">Client: <span class="text-orange-300">Fortune 500 enterprise</span></div>
                </div>
                <div class="relative flex flex-row-reverse h-full gap-8">
                    <BN_TechnologyIcon name="Clustering <br> Algorithms" imgClass="p-0" src="https://cdn.getmidnight.com/171293841d3fdd4af2e12426ce202ac9/2022/09/dsfmlogo-1.png" :entered="entered" class="hover:bg-rose-950"/>
                    <BN_TechnologyIcon name="Amazon <br> Web Service" imgClass="p-4 invert" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png" :entered="entered" class="hover:bg-rose-950"/>
                    <BN_TechnologyIcon name="Apache <br> Spark" imgClass="p-3 invert" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Apache_Spark_logo.svg/2560px-Apache_Spark_logo.svg.png" :entered="entered" class="hover:bg-rose-950"/>
                    <BN_TechnologyIcon name="Jenkins" imgClass="p-1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png" :entered="entered" class="hover:bg-rose-950"/>
                    <BN_TechnologyIcon name="Python" imgClass="p-1" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png" :entered="entered" class="hover:bg-rose-950"/>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import BN_TechnologyIcon from '@/components/Work/BN_TechnologyIcon.vue';
export default {
    name: "BN_Work_2",
    components: { BN_TechnologyIcon },
    data() {
        return {
            entered: false,
            entered1: false,
            entered2: false,
            entered3: false,
        };
    },
    mounted() {
        this.$nextTick(() => {
            const options = {
                root: null,
                rootMargin: "50px",
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
        handleIntersect(entries) { entries.forEach(entry => { this.entered = entry.isIntersecting; }); },
        handleIntersect1(entries) { entries.forEach(entry => { this.entered1 = entry.isIntersecting; }); },
        handleIntersect2(entries) { entries.forEach(entry => { this.entered2 = entry.isIntersecting; }); },
        handleIntersect3(entries) { entries.forEach(entry => { this.entered3 = entry.isIntersecting; }); },
    }
};
</script>