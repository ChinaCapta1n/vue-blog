import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '../views/home/index.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/about',
            component: () => import('../views/about/index.vue')
        },
        {
            path: '/files',
            component: () => import('../views/files/index.vue')
        },
        {
            path: '/search',
            component: () => import('../views/search/index.vue')
        },
        {
            path: '/detail/:id',
            component: () => import('../views/detail/index.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            component: () => import('../views/not-found/index.vue')
        }
    ]
})

router.beforeEach((to, from, next) => {
    if(to.path != from.path) {
        window.scrollTo(0, 0);
    }
    next();
})

export default router;