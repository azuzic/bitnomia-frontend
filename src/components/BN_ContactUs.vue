<template>
    <div class="relative w-full px-32 pt-32">
        
        <div class="text-4xl font-bold text-BN_FONT">
            About you
        </div>

        <div class="relative flex gap-32 mt-12">
            <BN_TextInput class="grow" placeholder="First Name" :important="true"/>
            <BN_TextInput class="grow" placeholder="Last Name" :important="true"/>
        </div>
        <div class="relative flex gap-32 mt-12">
            <BN_TextInput class="grow" placeholder="Company" :important="true"/>
            <BN_TextInput class="grow" placeholder="Phone" :important="true"/>
        </div>
        <div class="relative flex gap-32 mt-12 w-full">
            <BN_TextInput class="grow" placeholder="Email" :important="true"/>
            <BN_TextInput class="grow opacity-0 pointer-events-none" placeholder="Email" :important="true"/>
        </div>

        <div class="text-4xl font-bold text-BN_FONT mt-12">
            What is your budget?
        </div>

        <div class="flex gap-4 mt-12 w-1/2 pr-16">
            <button class="bg-BN_PRIMARY text-BN_FONT_WHITE font-bold py-4 rounded-xl grow text-2xl cursor-pointer hover:scale-95 transition-all">Up to 50.000$</button>
            <button class="bg-BN_PRIMARY text-BN_FONT_WHITE font-bold py-4 rounded-xl grow text-2xl cursor-pointer hover:scale-95 transition-all">50-100.00$</button>
            <button class="bg-BN_PRIMARY text-BN_FONT_WHITE font-bold py-4 rounded-xl grow text-2xl cursor-pointer hover:scale-95 transition-all">100-250.00$</button>
        </div>
        <div class="flex gap-4 mt-4 mb-12 w-1/2 pr-16">
            <button class="bg-BN_PRIMARY text-BN_FONT_WHITE font-bold py-4 rounded-xl grow text-2xl cursor-pointer hover:scale-95 transition-all">Over 250.00$</button>
            <button class="bg-BN_PRIMARY text-BN_FONT_WHITE font-bold py-4 rounded-xl grow text-2xl cursor-pointer hover:scale-95 transition-all">Can’t disclose</button>
        </div>

        <BN_AreaInput placeholder="Describe your project" :important="true"/>

        <BN_FileInput class="mt-16"/>

        <button class="h-16 w-64 | rounded-2xl text-2xl | font-bold text-BN_PRIMARY hover:text-BN_FONT_WHITE | flex justify-center items-center mt-16
            z-50 overflow-hidden border-4 group | hover:h-16 hover:w-64 hover:border-0 relative 
            border-BN_PRIMARY hover:border-opacity-0 transition-all duration-500">
            <div class="absolute h-0 w-0 opacity-0 bg-BN_PRIMARY -z-[1] rounded-2xl
                group-hover:h-16 group-hover:w-64 group-hover:opacity-100 transition-all duration-500"></div>
                Submit <i class="fa-solid fa-paper-plane ml-2 text-BN_PRIMARY group-hover:text-BN_FONT_WHITE group-hover:ml-4 transition-all duration-500"></i>
        </button>

    </div>
</template>

<script>
import BN_TextInput from "@/components/ContactUs/BN_TextInput.vue"
import BN_AreaInput from "./ContactUs/BN_AreaInput.vue";
import BN_FileInput from "./ContactUs/BN_FileInput.vue";
export default {
    name: "BN_ContactUs",
    components: { BN_TextInput, BN_AreaInput, BN_FileInput },
    props: {},
    data() { return {} },
}
</script>

<style lang="scss" scoped>
</style>