<template>
    <div class="files">
        <h2 class="article-length">共发表了 {{ articles.length }} 文章</h2>
        <ul class="time-line">
            <li class="item" v-for="(article, index) in articles" :key="article.id">
                <p class="create-at">{{ article.craetedAt }}</p>
                <router-link :to="'/detail/' + article.article">
                    {{ article.title }}
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script setup>
defineProps({
    articles: {
        type: Array,
        required: true
    }
})
</script>
<style lang="less" scoped>
.files {
    max-width: 800px;
    margin: 0 auto;
    padding: 4rem 3rem;

    .article-length {
        margin-bottom: 2rem;
        font-size: 2rem;
    }

    .time-line {
        .item {
            display: flex;
            align-items: center;
            line-height: 1.4rem;
            padding: 1rem 0;

            .create-at {
                font-size: 1.3rem;
                color: grey;
                margin: 0 1.5rem 0 2rem;
                position: relative;

                &::before {
                    position: absolute;
                    content: '';
                    top: 50%;
                    left: -2rem;
                    transform: translateY(-50%);
                    width: 1rem;
                    height: 1rem;
                    border-radius: 50%;
                    border: 1.5px solid rgb(13, 103, 74);
                    background-color: #fff;
                }
            }

            &:not(:last-child) {
                .create-at::after {
                    position: absolute;
                    content: '';
                    top: 0.2rem;
                    left: -1.6rem;
                    height: calc(100% + 2rem);
                    width: 0.1rem;
                    background-color: rgb(239, 234, 234);
                    z-index: -1;
                }
            }

            a {
                display: block;
                font-size: 1.6rem;
            }
        }
    }
}
</style>