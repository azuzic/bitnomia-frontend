<script setup>
import Menu from './components/Menu.vue';

</script>

<template>
  <div class="theme-default relative">
    <Menu/>
    <router-view class="h-full"></router-view>
  </div>
</template>

<style scoped>
</style>
