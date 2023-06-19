<template>
    <div class="relative w-full px-96 pt-32">
        
        <div class="text-2xl font-bold text-BN_FONT">
            About you
        </div>

        <div class="w-full flex flex-col gap-8 mt-12">
            <div class="relative flex gap-16">
                <BN_TextInput class="grow" placeholder="First Name" :important="true"/>
                <BN_TextInput class="grow" placeholder="Last Name" :important="true"/>
            </div>
            <div class="relative flex gap-16">
                <BN_TextInput class="grow" placeholder="Company" :important="true"/>
                <BN_TextInput class="grow" placeholder="Phone" :important="true"/>
            </div>
            <div class="relative flex gap-16 w-full">
                <BN_TextInput class="grow" placeholder="Email" :important="true"/>
                <BN_TextInput class="grow opacity-0 pointer-events-none" placeholder="Email" :important="true"/>
            </div>
        </div>

        <div class="text-2xl font-bold text-BN_FONT mt-8">
            What is your budget?
        </div>

        <div class="w-1/2 pr-8 mt-4">
            <div class="flex gap-4">
                <BN_ButtonInput>Up to 50.000$</BN_ButtonInput>
                <BN_ButtonInput>50-100.00$</BN_ButtonInput>
                <BN_ButtonInput>100-250.00$</BN_ButtonInput>
            </div>
            <div class="flex gap-4 mt-4">
                <BN_ButtonInput>Over 250.00$</BN_ButtonInput>
                <BN_ButtonInput>Can't disclose</BN_ButtonInput>
            </div>
        </div>

        <BN_AreaInput class="mt-8" placeholder="Describe your project" :important="true"/>

        <BN_FileInput class="mt-4"/>

        <button class="h-12 w-52 | rounded-xl text | font-bold text-BN_PRIMARY hover:text-BN_FONT_WHITE | flex justify-center items-center mt-8
            z-50 overflow-hidden border-4 group | hover:h-12 hover:w-52 hover:border-0 relative 
            border-BN_PRIMARY hover:border-opacity-0 transition-all duration-500">
            <div class="absolute h-0 w-0 opacity-0 bg-BN_PRIMARY -z-[1] rounded-2xl
                group-hover:h-12 group-hover:w-52 group-hover:opacity-100 transition-all duration-500"></div>
                Submit <i class="fa-solid fa-paper-plane ml-2 text-BN_PRIMARY group-hover:text-BN_FONT_WHITE group-hover:ml-4 transition-all duration-500"></i>
        </button>

    </div>
</template>

<script>
import BN_TextInput from "@/components/ContactUs/BN_TextInput.vue"
import BN_ButtonInput from "@/components/ContactUs/BN_ButtonInput.vue";
import BN_AreaInput from "@/components/ContactUs/BN_AreaInput.vue";
import BN_FileInput from "@/components/ContactUs/BN_FileInput.vue";
export default {
    name: "BN_ContactUs",
    components: { BN_TextInput, BN_AreaInput, BN_FileInput, BN_ButtonInput },
}
</script>