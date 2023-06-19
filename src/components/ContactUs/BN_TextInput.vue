<template>
    <div class="relative">
        <input v-model="value" class="peer w-full h-9" type="text">
        <div class="absolute text-BN_FONT peer-focus:-top-4 peer-focus:text-xs text-opacity-75 transition-all pointer-events-none"
            :class="value ? '-top-4 text-xs' : 'top-2'">
            {{ placeholder }} <b v-if="important">*</b>
        </div>
        <hr class="peer-focus:border-BN_PRIMARY peer-hover:border-BN_BACKGROUND2 border-BN_BACKGROUND border-2 rounded-full  transition-all">
    </div>
</template>

<script>
export default {
    name: "BN_TextInput",
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
input {
    outline: none;
    background-color: transparent;
}
</style>