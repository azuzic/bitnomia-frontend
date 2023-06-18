<template>
    <div class="w-full z-50 | bg-gradient-to-r from-BN_BACKGROUND via-sky-950 to-indigo-950 drop-shadow-2xl | flex flex-col justify-center items-center | py-3">

        <div class="flex flex-col justify-center items-center w-full">
            <b class="text-BN_FONT_WHITE mb-1">Bitnomia™</b>

            <hr class="border-1 border-BN_FONT_WHITE opacity-25 w-32 mb-1.5">

            <div class="text-BN_FONT_WHITE opacity-75 text-xs flex justify-center items-center">
                Copyright 
                <div class="ml-1 text-lg -mb-2 -mt-2">©</div>{{ new Date().getFullYear() }}
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: "BN_footer",
}
</script>