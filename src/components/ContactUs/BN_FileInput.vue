<template>
    <div class="relative">
        <div class="w-full h-12 sm:h-16 text-sm sm:text-lg focus:border-BN_PRIMARY border-dashed hover:border-BN_BACKGROUND2 border-BN_BACKGROUND border-4 rounded-xl 
            transition-all relative flex justify-center items-center">
            <input type="file" class="w-full h-full p-4 peer cursor-pointer">
            <div class="absolute font-bold text-BN_FONT peer-hover:underline hover:underline cursor-pointer pointer-events-none"><i class="fa-solid fa-paperclip mr-2"></i>Attach files</div>
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