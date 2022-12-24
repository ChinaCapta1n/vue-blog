<template>
    <div class="files">
        <h2 class="article-length">共发表了 {{ articlesLen }} 文章</h2>
        <ul class="time-line" v-for="(article, index) in articles">
            <h3 class="article-year" @click="foldFn">
                <div class="fold">
                    <span class="line line-1"></span>
                    <span class="line line-2"></span>
                </div>
                <div class="year-text">
                    {{ article.year }}
                </div>
            </h3>
            <li class="item" v-for="(single, index) in article.articles">
                <p class="create-at">{{ formatTime(single.craetedAt) }}</p>
                <router-link :to="'/detail/' + single.article">
                    {{ single.title }}
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { onMounted, computed } from 'vue';
import { formatTime } from '../../../utils/format_time';

const props = defineProps({
    articles: {
        type: Array,
        required: true
    }
})

const foldFn = e => {
    let childTarget = e.currentTarget.children[0];
    if (childTarget.classList.contains('fold')) {
        childTarget.classList.toggle('collapse');
    }

    let parentTarget = e.currentTarget.parentNode;
    if (parentTarget.classList.contains('time-line')) {
        parentTarget.classList.toggle('collapse');
    }
}

const articlesLen = computed(() => {
    let len = 0;
    props.articles.forEach(article => {
        len += article.articles.length;
    })
    return len;
})

onMounted(() => {
    setTimeout(() => {
        const timeLine = document.querySelectorAll('.time-line');
        timeLine.forEach(item => {
            item.style.height = getComputedStyle(item).height;
        })
    }, 1000)
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
        transition: all .3s;
        overflow: hidden;
        height: auto;

        .article-year {
            margin: 2rem 0;
            display: flex;
            align-items: center;
            cursor: pointer;

            .fold {
                position: relative;
                width: .7rem;
                height: .7rem;

                &.collapse {

                    .line-1,
                    .line-2 {
                        transform: rotate(90deg);
                    }

                    .line-2 {
                        opacity: 0;
                    }
                }

                .line {
                    display: block;
                    background-color: #000;
                    position: absolute;
                    transition: all .3s;

                }

                .line-1 {
                    width: .7rem;
                    height: .1rem;
                    top: 50%;
                    left: 0;
                    transform: translateY(-50%);

                }

                .line-2 {
                    width: .1rem;
                    height: .7rem;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                }
            }

            .year-text {
                margin-left: 1rem;
            }
        }

        &.collapse {
            height: calc(12.67px + 2rem) !important;
        }

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