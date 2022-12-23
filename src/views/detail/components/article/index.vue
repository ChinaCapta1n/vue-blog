<template>
    <Markdown :source="source" />
</template>
<script setup>
import Markdown from 'vue3-markdown-it';
import 'highlight.js/styles/obsidian.css';

defineProps({
    source: {
        type: String,
        required: true
    }
})
</script>
<style lang="less" scoped>

</style>