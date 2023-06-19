<template>
    <div class="w-full z-50 | text-BN_FONT_WHITE bg-gradient-to-r from-BN_BACKGROUND via-sky-950 to-indigo-950 drop-shadow-2xl | flex flex-col justify-center items-center | py-2">

        <div class="flex gap-2 justify-center items-center w-full text-[13px]">
            <span class="text-xs flex justify-center items-center">
                Copyright
                <span class="ml-1 text-lg -mb-2 -mt-2">©</span>{{ new Date().getFullYear() }}
            </span>
            <span>-</span>
            <span>Bitnomia™</span>
            <span>-</span>
            <span>All rights reserved.</span>
        </div>
        <div class="text-[11.5px] opacity-50">
            served by <a class="hover:underline" href="https://github.com/azuzic">Alesandro Žužić</a>
        </div>
        
    </div>
</template>

<script>
export default {
    name: "BN_footer",
}
</script>