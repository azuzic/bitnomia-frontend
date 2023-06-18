<script setup>
import BN_Menu from '@/components/BN_Menu.vue';
</script>

<template>
  <div class="theme-default relative">
    <BN_Menu/>
    <router-view class="h-full"></router-view>
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
}
</script>

<style scoped>
</style>
