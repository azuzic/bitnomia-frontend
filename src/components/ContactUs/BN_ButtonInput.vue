<template>
    <button class="bg-BN_PRIMARY text-sm sm:text-base text-BN_FONT_WHITE font-bold py-2 px-6 rounded-xl grow cursor-pointer hover:scale-95 transition-all whitespace-nowrap">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "BN_ButtonInput",
}
</script>