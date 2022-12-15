<template>
    <img class="banner-background" src="../../../../assets/images/home-banner/1.jpg" alt="" />
    <ArrowDown />
</template>
<script setup>
import ArrowDown from '../arrow-down/index.vue';
</script>
<style lang="less" scoped>
.banner-background {
    width: 100%;
    height: 100vh;
    object-fit: cover;
}
</style>