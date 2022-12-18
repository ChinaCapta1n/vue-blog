<template>
    <div class="files">
        <banner :backgroundImage="getAssetUrl('component-banner/3.jpg')" />
    </div>
</template>
<script setup>
import banner from '../../components/banner/index.vue';
import { getAssetUrl } from '../../utils/get_assets_img';

</script>
<style scoped>

</style>