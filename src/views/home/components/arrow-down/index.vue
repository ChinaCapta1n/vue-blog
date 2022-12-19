<template>
    <a class="home-arrow-down" @click="goAnchor('#article-section')">
        <svg focusable="false" class="" data-icon="down" width="4rem" height="4rem" fill="#fff" aria-hidden="true"
            viewBox="64 64 896 896">
            <path
                d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z">
            </path>
        </svg>
    </a>
</template>
<script setup>
import { goAnchor } from '../../../../utils/go_anchor_fn';

</script>
<style lang="less" scoped>
.home-arrow-down {
    display: block;
    position: absolute;
    top: calc(100vh - 10rem);
    left: 50%;
    margin-left: -2rem;
    z-index: 2;
    width: 4rem;
    height: 4rem;
    transition: all 1s;
    animation: arrow-animation 1s infinite alternate;
    cursor: pointer;
}

@keyframes arrow-animation {
    from {
        transform: translateY(0rem);
    }

    to {
        transform: translateY(1rem);
    }
}
</style>