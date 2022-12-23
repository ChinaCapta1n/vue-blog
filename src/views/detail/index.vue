<template>
    <div class="detail" id="detail">
        <banner :backgroundImage="getAssetUrl('component-banner/4.jpg')" />
        <article class="article-markdown">
            <articleComponent :source="source" />
        </article>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import articleComponent from './components/article/index.vue';
import { useRoute } from 'vue-router';
import banner from '../../components/banner/index.vue';
import { getAssetUrl } from '../../utils/get_assets_img';



import axios from 'axios';

const route = useRoute();

const source = ref('')
axios.get(`http://localhost:5173/mock/articles/${route.params.id}`).then(res => {
    source.value = res.data;
})



</script>
<style lang="less">
#detail {
    * {
        line-height: 2rem;
    }

    .article-markdown {
        padding: 0 3rem 10rem;
        max-width: 1150px;
        margin: 0 auto;
        margin-top: 3rem;
        margin-bottom: 10rem;
        border: 1.5px dotted;
        border-top-color: #633bd3;
        border-left-color: #2980b9;
        border-right-color: #192f44;
        border-bottom-color: #27ae60;

        @media screen and (max-width: 768px) {
            border-color: #fff;
        }


        div {
            p {
                margin: 1.5rem 0;
            }

            h2 {
                font-size: 2rem;
                margin: 3rem 0;
                position: relative;
                margin-left: 3rem;

                &::before {
                    position: absolute;
                    top: 50%;
                    left: -3rem;
                    transform: translateY(-50%);
                    content: "##";
                }
            }

            h3 {
                font-size: 1.7rem;
                margin: 1.2rem 0;
                position: relative;
                margin-left: 3.5rem;

                &::before {
                    position: absolute;
                    top: 50%;
                    left: -3.5rem;
                    transform: translateY(-50%);
                    content: "###";
                }
            }

            li {
                margin: 1rem 0;
            }
        }
    }
}
</style>