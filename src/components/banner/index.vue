<template>
    <div class="banner-img">
        <img :src="backgroundImage" alt="">
    </div>
</template>
<script setup>
defineProps({
    backgroundImage: {
        type: String,
        default: 'https://picx.zhimg.com/80/v2-597a23f8427f41a41dfd2f5b8474d09d_1440w.webp?source=1940ef5c'
    }
})
</script>
<style lang="less" scoped>
.banner-img {
    padding-bottom: 20%;
    position: relative;

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>