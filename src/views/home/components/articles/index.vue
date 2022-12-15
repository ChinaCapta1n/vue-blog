<template>
    <div class="articles" id="article-section">
        <ul class="article-wrapper">
            <li class="article-item" v-for="(article, index) in articleData">
                <div class="summary-img"></div>
                <div class="summary-text">
                    <p>{{ article.craetedAt }}</p>
                    <h2>{{ article.title }}</h2>
                    <p class="article-summary">{{ article.summary }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script setup>
const articleData = [
    {
        "id": 0,
        "title": "文章一",
        "craetedAt": "2022-05-16",
        "category": "学习笔记",
        "language": "Vue",
        "summary": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    },
    {
        "id": 1,
        "title": "文章一",
        "craetedAt": "2022-05-16",
        "category": "学习笔记",
        "language": "Vue",
        "summary": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    },
    {
        "id": 2,
        "title": "文章一",
        "craetedAt": "2022-05-16",
        "category": "学习笔记",
        "language": "Vue",
        "summary": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    },
    {
        "id": 3,
        "title": "文章一",
        "craetedAt": "2022-05-16",
        "category": "学习笔记",
        "language": "Vue",
        "summary": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    },
    {
        "id": 4,
        "title": "文章一",
        "craetedAt": "2022-05-16",
        "category": "学习笔记",
        "language": "Vue",
        "summary": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    },
    {
        "id": 5,
        "title": "文章一",
        "craetedAt": "2022-05-16",
        "category": "学习笔记",
        "language": "Vue",
        "summary": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    },
    {
        "id": 6,
        "title": "文章一",
        "craetedAt": "2022-05-16",
        "category": "学习笔记",
        "language": "Vue",
        "summary": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    },
]

</script>
<style lang="less" scoped>
.articles {
    .article-wrapper {
        display: flex;
        flex-direction: column;

        .article-item {
            .summary-text {
                .article-summary {
                    word-wrap: break-word;
                }
            }
        }
    }
}
</style>