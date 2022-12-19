<template>
    <div class="detail">
        <banner :backgroundImage="getAssetUrl('component-banner/4.jpg')" />
        article-detail
    </div>
</template>
<script setup>
import banner from '../../components/banner/index.vue';
import { getAssetUrl } from '../../utils/get_assets_img';

</script>
<style lang="less" scoped>

</style>