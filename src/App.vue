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
import NavBar from './components/nav-bar/index.vue';
import NavFooter from './components/footer/index.vue';
import BackToTop from './components/back-to-top/index.vue';

</script>

<style lang="less" scoped>
.luffy-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>