import { defineStore } from "pinia";

import { API_articles } from '../../api/index.js';

const useArticles = defineStore('articles', {
    state: () => ({
        articles: []
    }),
    actions: {
        setArticles(payload) {
            this.articles = payload;
        },
        async fetchArticles() {
            let res = await API_articles()
            return res;
        }
    }
})

export default useArticles;