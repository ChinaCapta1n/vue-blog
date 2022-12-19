<template>
    <div class="detail" id="detail">
        <banner :backgroundImage="getAssetUrl('component-banner/4.jpg')" />
        <article class="article-markdown">
            <Markdown :source="source" />
        </article>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import banner from '../../components/banner/index.vue';
import { getAssetUrl } from '../../utils/get_assets_img';

import Markdown from 'vue3-markdown-it';
import 'highlight.js/styles/obsidian.css';

import axios from 'axios';

const route = useRoute();

const source = ref('')
axios.get(`http://localhost:5173/mock/articles/${route.params.id}`).then(res => {
    source.value = res.data;
})



</script>
<style lang="less">
#detail {
    .article-markdown {
        padding: 0 3rem;
        max-width: 1150px;
        margin: 0 auto;
        margin-top: 3rem;
        margin-bottom: 10rem;

        div {
            h2 {
                font-size: 2rem !important;
                margin: 1.2rem 0;
            }

            li {
                margin: 1rem 0;
            }
        }
    }
}
</style>