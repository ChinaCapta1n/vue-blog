<template>
    <div class="tags-section">
        <div class="search-wrapper">
            <input class="search-box" type="text" placeholder="请输入文章题目关键字" ref="searchBox">
            <div class="search-btn" @click.prevent="inputDataFilterFn">
                <van-icon name="search" size="2rem" />
            </div>
        </div>
        <div class="category-wrapper">
            <h2 class="category-title">
                <div class="icon">
                    <van-icon name="bookmark-o" />
                </div>
                <div class="icon-text">
                    分类
                </div>
            </h2>
            <div class="items">
                <span class="item" v-for="item in tags" :key="item" @click="filterCategoryFn(item)">
                    {{ item }}
                </span>
            </div>
        </div>
        <div class="category-tags">
            <h2 class="tags-title">
                <div class="icon">
                    <van-icon name="bar-chart-o" />
                </div>
                <div class="icon-text">
                    标签云
                </div>
            </h2>
            <div class="items">
                <span class="item" v-for="item in category" :key="item" @click="filterTagFn(item)">
                    {{ item }}
                </span>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useArticles from '../../../stores/module/articles';
const searchBox = ref(null);

defineProps({
    tags: {
        type: Array,
        required: true
    },
    category: {
        type: Array,
        required: true
    }
})

const router = useRouter();

const store = useArticles();


const setDataFn = (arg1, arg2) => {
    let data = [];
    store.fetchArticles().then(res => {
        res.filter(item => {
            if (item[arg1] === arg2) {
                data.push(item);
            }
        })
        store.setArticles(data);
        router.push('/home');
    })
}

const filterCategoryFn = category => {
    setDataFn('tag', category);
}

const filterTagFn = tag => {
    setDataFn('category', tag);
}

const inputDataFilterFn = async () => {
    let data = [];
    await store.fetchArticles().then(res => {
        res.filter(item => {

            if (item.title.search(searchBox.value.value) !== -1) {
                data.push(item);
            }
        })
        store.setArticles(data);
        router.push('/home');
    })
}






</script>
<style lang="less" scoped>
.tags-section {
    max-width: 1200px;
    margin: 0 auto;
    padding: 3rem 4rem;

    .search-wrapper {
        display: flex;
        border-radius: .4rem;
        overflow: hidden;

        .search-box {
            width: 100%;
            height: 40px;
            padding: .7rem;
            font-size: 1.3rem;
            flex: 1;
            border: 1px solid #dcdfe6;
            color: #606266;
        }

        .search-btn {
            width: 4rem;
            height: 4rem;
            background-color: #f2f4f7;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #dcdfe6;
            border-left: none;
            cursor: pointer;
        }
    }

    .category-tags {
        .tags-title {
            margin-bottom: 2rem;
            border-bottom: 1px solid #dcdfe6;
            padding-bottom: 2rem;
            color: #888;
            display: flex;
            align-items: center;

            .icon {
                margin-right: .7rem;
                transform: translateY(.2rem);
            }
        }

        .items {
            display: flex;

            .item {
                display: block;
                padding: .8rem;
                background-color: #ba9efa;
                color: #fff;
                border-radius: .5rem;
                text-align: center;
                line-height: 1.3rem;
                font-size: 1.3rem;
                margin-right: 1rem;
                margin-bottom: 1rem;
                cursor: pointer;
                transition: transform .4s;

                &:hover {
                    transform: rotate3d(10, 20, 0, 30deg);
                }
            }
        }
    }

    .category-wrapper {
        margin: 3rem 0;

        .category-title {
            margin-bottom: 2rem;
            border-bottom: 1px solid #dcdfe6;
            padding-bottom: 2rem;
            color: #888;
            display: flex;
            align-items: center;

            .icon {
                margin-right: .7rem;
                transform: translateY(.2rem);
            }
        }

        .items {
            display: flex;

            .item {
                display: block;
                padding: .8rem;
                background-color: #ba9efa;
                color: #fff;
                border-radius: .5rem;
                text-align: center;
                line-height: 1.3rem;
                font-size: 1.3rem;
                margin-right: 1rem;
                margin-bottom: 1rem;
                cursor: pointer;
                transition: transform .4s;

                &:hover {
                    transform: rotate3d(10, 20, 0, 30deg);
                }
            }
        }


    }
}

::-webkit-input-placeholder {
    /* WebKit browsers */
    color: #dcdfe6;
}

:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #dcdfe6;
}

::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #dcdfe6;
}

:-ms-input-placeholder {
    /* Internet Explorer 10+ */
    color: #dcdfe6;
}
</style>