<script setup>
import BN_Menu from '@/components/BN_Menu.vue';
import BN_footer from './components/BN_footer.vue';
</script>

<template>
  <div class="theme-default relative">
    <BN_Menu/>
    <router-view class="h-full"></router-view>
    <BN_footer class="mt-16"/>
  </div>
</template>

<script>
export default {
    name: "App.vue",
    mounted() {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        };
    },
    components: { BN_footer }
}
</script>

<style scoped>
</style>
