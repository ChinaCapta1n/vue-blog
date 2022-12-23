<template>
    <div class="files">
        <banner :backgroundImage="getAssetUrl('component-banner/3.jpg')" />
        <FileSection :articles="AllArticles" />
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';

import banner from '../../components/banner/index.vue';
import FileSection from './components/files.vue';
import { getAssetUrl } from '../../utils/get_assets_img';
import { API_articles } from '../../api/index.js';


const AllArticles = ref([]);

onMounted(async () => {
    AllArticles.value = await API_articles();
})


</script>
<style scoped>

</style>