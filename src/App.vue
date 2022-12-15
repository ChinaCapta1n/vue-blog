<template>
    <nav-bar />
    <main class="main">
      <router-view></router-view>
    </main>
    <nav-footer />
</template>

<script setup>
import NavBar from './components/nav-bar/index.vue';
import NavFooter from './components/footer/index.vue';

</script>

<style scoped></style>