<template>
    <div class="flex flex-col w-32 h-36 justify-center items-center gap-2 rounded-lg py-1 transition-all duration-500 group"
        :class="entered ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-25'">
        <img loading="eager" class="h-20 w-auto" :class="imgClass" :src="src">
        <div class="text-lg text-center group-hover:grow group-hover:opacity-100 opacity-0 h-0 overflow-hidden flex items-center transition-all duration-300" v-html="name"> </div>
    </div>
</template>

<script>
export default {
    name: "BN_TechnologyIcon",
    props: {
        src: String,
        name: String,
        imgClass: String,
        entered: Boolean
    }
}
</script>