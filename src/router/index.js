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
        }
    ]
})

export default router;