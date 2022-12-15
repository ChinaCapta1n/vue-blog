<template>
    <div class="home">
        <!-- banner -->
        <banner-background />

        <!-- all articles -->
        <home-articles />
    </div>
</template>
<script setup>
import BannerBackground from './components/banner/index.vue';
// import ArrowDowm from './components/arrow-down/index.vue';
import HomeArticles from './components/articles/index.vue';

</script>
<style lang="less" scoped>
.home {
    position: relative;
}
</style>