<template>
    <div class="relative pr-28">
        <div class="w-1/2 h-16 focus:border-BN_PRIMARY border-dashed hover:border-BN_BACKGROUND2 border-BN_BACKGROUND border-4 rounded-xl 
            transition-all relative flex justify-center items-center">
            <input type="file" class="w-full h-full p-4 peer cursor-pointer">
            <div class="absolute font-bold text-BN_FONT peer-hover:underline hover:underline cursor-pointer pointer-events-none"><i class="fa-solid fa-paperclip mr-2"></i>Attach files</div>
        </div>
        
        <div class="absolute text-BN_FONT peer-focus:-top-8 peer-focus:left-0 peer-focus:text-base transition-all pointer-events-none"
            :class="value ? '-top-8 left-0 text-base' : 'top-6 left-8 text-2xl'">
            {{ placeholder }} <b v-if="important">*</b>
        </div>
    </div>
</template>

<script>
export default {
    name: "BN_FileInput",
}
</script>

<style lang="scss" scoped>
input {
    outline: none;
    background-color: transparent;
    opacity: 0;
}
</style>