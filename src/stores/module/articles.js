import { defineStore } from "pinia";

import { API_articles } from '../../api/index.js';

const useArticles = defineStore('articles', {
    state: () => ({
        articles: []
    }),
    actions: {
        setArticles(playload) {
            this.articles = playload;
        },
        async fetchArticles() {
            const res = await API_articles();
            return res;
        }
    }
})

export default useArticles;