<template>
    <div class="w-full h-44 flex justify-center items-center bg-BN_BACKGROUND">
        <div class="font-bold test text-8xl"> {{ text }} </div>
    </div>
</template>

<script>
export default {
    name: "BN_BigDivider",
    props: { text: String },
}
</script>

<style lang="scss" scoped>
.test {
    background: linear-gradient(268.34deg, #D8E1E1 14.22%, #F4F8FF 84.58%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
</style>