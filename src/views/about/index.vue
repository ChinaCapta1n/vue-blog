<template>
    <div class="about">
        <banner :backgroundImage="getAssetUrl('component-banner/2.jpg')" />
        <section class="about-wrapper">
            <h2 class="I_Luffy">{{ detailData[0].h2.text }}</h2>
            <ul class="My_Self_Introduction">
                <li v-for="(li, index) in detailData[1].li">
                    {{ li.text }}
                </li>
            </ul>
            <p class="last_but_not_least">
                {{ detailData[2].p[0].text }}
            </p>
        </section>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import banner from '../../components/banner/index.vue';
import { API_about } from '../../api';
import { getAssetUrl } from '../../utils/get_assets_img';

const detailData = ref(null);

API_about().then(res => {
    detailData.value = res;
})

// onMounted(async () => {
//     detailData.value = await API_about();
//     console.log(detailData.value)
// })
</script>
<style lang="less" scoped>
.about {
    .about-wrapper {
        max-width: 1150px;
        margin: 0 auto;
        padding: 4rem 3rem;
        user-select: none;

        .I_Luffy {
            font-size: 3rem;
            margin-bottom: 3rem;
            color: #666;
        }

        .My_Self_Introduction {
            li {
                margin-bottom: 1.2rem;
                font-size: 1.5rem;
                line-height: 3rem;
                color: #666;
            }
        }

        .last_but_not_least {
            margin-top: 4rem;
            font-size: 1.5rem;
            line-height: 3rem;
            color: #666;
        }
    }
}
</style>