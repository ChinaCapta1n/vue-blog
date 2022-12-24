<template>
    <div class="articles" id="article-section">
        <ul class="article-wrapper">
            <li ref="singleArticle" class="article-item" v-for="(article, index) in articleData">

                <div class="summary-img">
                    <img :src="article.imgCover" alt="">
                </div>
                <div class="summary-text">
                    <p class="summary-createdAt">{{ article.craetedAt }}</p>
                    <h2 class="summary-title">
                        <router-link :to="'/detail/' + article.article" @click="showNav">
                            {{ article.title }}
                        </router-link>
                    </h2>
                    <p class="article-summary">{{ summaryFilterFn(article.summary) }}</p>
                    <p class="summary-tags">
                        <span>{{ article.category }}</span>|<span>{{ article.tag }}</span><span>{{ article.views
                        }}</span><span>{{ article.comments }}</span><span>{{
        article.likes
}}</span>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { API_articles } from '../../../../api/index.js'
import useFlags from '../../../../stores/module/flags';
import useArticles from '../../../../stores/module/articles';

const articleData = ref([]);
const singleArticle = ref(null);

const store = useFlags();
const articleFilterData = useArticles();

const showNav = () => {
    store.setTopScroll(false);
}

const summaryFilterFn = summary => {
    return summary.substring(0, 100);
}

API_articles().then(res => {
    let data = [];
    res.forEach(item => {
        data.push(...item.articles);
    })

    if (articleFilterData.articles.length) {
        articleData.value = articleFilterData.articles
    } else {
        articleData.value = data;
    }

})


onMounted(() => {


    setTimeout(() => {


        setTimeout(() => {
            const oberser = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    }
                });
            })

            singleArticle?.value.forEach(el => {
                oberser.observe(el);
            })
        }, 500)

    })
})


</script>
<style lang="less" scoped>
.articles {
    padding: 0 2rem;
    position: relative;
    padding-top: 10rem;

    &::after {
        content: "";
        position: absolute;
        left: 50%;
        height: calc(100% + 10rem);
        top: -10rem;
        transform: translateX(-50%);
        width: 1px;
        background-color: rgb(236, 228, 228);
        z-index: -1;
    }

    .article-wrapper {
        display: flex;
        flex-direction: column;
        max-width: 1200px;
        margin: 0 auto;

        .article-item {
            display: flex;
            align-items: center;
            margin-bottom: 10rem;
            opacity: 0;
            transition: all 1s;



            &:hover .summary-img {
                transform: scale(0.99);
                transition: transform .5s;
            }

            &:nth-child(even) {
                flex-direction: row-reverse;
                transform: translate(50px);

                .summary-text {
                    margin-right: -2rem;
                    padding: 5rem 10rem 5rem 8rem;
                }
            }

            &:nth-child(odd) {
                transform: translate(-50px);

                .summary-text {
                    padding: 5rem 8rem 5rem 10rem;
                    margin-left: -2rem;
                }
            }

            &.show {
                opacity: 1;
                transform: translateX(0px);
            }

            .summary-img {
                width: 700px;
                overflow: hidden;
                z-index: 2;

                img {
                    width: 100%;
                    border-radius: 0.7rem;
                    object-fit: cover;
                }
            }

            .summary-text {
                width: 500px;
                height: 300px;
                border: 1px solid rgb(236, 228, 228);
                border-radius: 0.7rem;
                background-color: #fff;

                .summary-createdAt {
                    color: rgb(167, 159, 159);
                    font-size: 1.3rem;
                    margin-bottom: 1rem;
                }

                .summary-title {
                    font-size: 1.8rem;
                    margin-bottom: 1rem;
                }

                .article-summary {
                    word-wrap: break-word;
                    font-size: 1.6rem;
                    color: grey;
                    word-break: break-all;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                }
            }

            .summary-tags {
                margin-top: 4rem;

                span {
                    display: inline-block;
                    margin: 0 0.5rem;

                    &:first-child {
                        margin-left: 0;
                    }
                }
            }
        }

        @media screen and (max-width: 1150px) {
            .article-item {

                &:nth-child(even),
                &:nth-child(odd) {
                    flex-direction: column;
                    margin-bottom: 2rem;

                    .summary-img,
                    .summary-text {
                        width: 100%;
                    }

                    .summary-text {
                        margin-left: 0;
                        border: none;
                        border-bottom: 1px solid rgb(238, 228, 228);
                        padding: 0;
                        padding-top: 4rem;
                        padding-bottom: 4rem;
                        height: auto;
                    }
                }
            }
        }
    }
}
</style> 