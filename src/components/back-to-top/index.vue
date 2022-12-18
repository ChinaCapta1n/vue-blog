<template>
    <div class="back-to-top" ref="backTop" @click="backToTopFn">
        <img src="../../../public/rocket.png" alt="">
    </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const backTop = ref(null);

const scrollNum = () => {
    const height = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    if (height > 400) {
        backTop.value.classList.add('show');
    } else {
        backTop.value.classList.remove('show');
    }
}

const backToTopFn = () => {
    const height = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    if (height > 0) {
        window.requestAnimationFrame(backToTopFn);

        window.scrollTo(0, height - height / 12);
    } else {
        return false;
    }
}

onMounted(() => {

    window.addEventListener('scroll', scrollNum, false);

})

onUnmounted(() => {

    window.removeEventListener('scroll', scrollNum);

})


</script>
<style lang="less" scoped>
.back-to-top {
    position: fixed;
    right: 4rem;
    bottom: 4rem;
    width: 6rem;
    height: 6rem;
    opacity: 0;
    transform: translateX(10rem) rotate(400deg);
    transition: all .6s ease-in-out;
    z-index: 101;
    cursor: pointer;

    img {
        width: 100%;
    }

    &.show {
        opacity: 1;
        transform: translateX(0rem) rotate(0);
    }
}
</style>