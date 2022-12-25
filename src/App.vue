<template>
  <div class="luffy-wrapper">
    <!-- nav bar -->
    <nav-bar />
    <!-- content section -->

    <main class="main">
      <router-view></router-view>
    </main>

    <!-- back to top button -->
    <back-to-top />

    <!-- footer -->
    <nav-footer />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import NavBar from './components/nav-bar/index.vue';
import NavFooter from './components/footer/index.vue';
import BackToTop from './components/back-to-top/index.vue';
import useNav from './stores/module/nav.js';
import { API_nav } from './api/index.js';

const navList = useNav();

const router = useRouter();

const currentPath = ref(null);

const underLineShowOrNot = (path) => {
  if (!navList.navList.includes(path)) {
    document.querySelector('.undeline').style.opacity = '0';
  } else {
    document.querySelector('.undeline').style.opacity = '1';
  }
}

router.beforeEach((to, from, next) => {
  currentPath.value = to.path
  underLineShowOrNot(to.path);
  next();
})


onMounted(() => {

  setTimeout(async () => {
    const data = await API_nav();
    const pathArr = [];
    data.forEach(item => {
      pathArr.push(item.path);
    })
    navList.setNavList(pathArr);

    underLineShowOrNot(currentPath.value);
  }, 500)



})

</script>

<style lang="less" scoped>
.luffy-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>