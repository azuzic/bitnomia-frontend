<template>
    <div class="relative">
        <textarea v-model="value" class="w-full h-64 text-2xl p-4 peer
            focus:border-BN_PRIMARY hover:border-BN_BACKGROUND2 border-BN_BACKGROUND border-8 rounded-xl transition-all" 
            type="text" res></textarea>
        <div class="absolute text-BN_FONT peer-focus:-top-8 peer-focus:left-0 peer-focus:text-base transition-all pointer-events-none"
            :class="value ? '-top-8 left-0 text-base' : 'top-6 left-8 text-xl'">
            {{ placeholder }} <b v-if="important">*</b>
        </div>
    </div>
</template>

<script>
export default {
    name: "BN_AreaInput",
    props: {
        placeholder: String,
        important: Boolean
    },
    data() { return {
        value: ""
    } },
}
</script>

<style lang="scss" scoped>
textarea {
    outline: none;
    background-color: transparent;
    resize: none;
}
</style>