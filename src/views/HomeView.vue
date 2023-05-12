<template>
<div class="bg-BN_BG_WHITE w-full">
    <BN_TopTitle/>
    <BN_Description/>
    <BN_BigDivider text="Some of our work"/>
    <BN_Description2/>
</div>
</template>

<script>
import BN_TopTitle from '@/components/Home/BN_TopTitle.vue';
import BN_Description from '@/components/Home/BN_Description.vue';
import BN_Description2 from '@/components/Home/BN_Description2.vue';
import BN_BigDivider from '@/components/Home/BN_BigDivider.vue';

export default {
    name: "HomeView",
    components: { BN_TopTitle, BN_Description, BN_BigDivider, BN_Description2 }
}
</script>