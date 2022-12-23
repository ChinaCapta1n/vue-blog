<template>
    <div class="tags">
        <banner />
        <tags-section :tags="tags" :category="category" />
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import banner from '../../components/banner/index.vue';
import TagsSection from './components/tags.vue';
import { API_tags } from '../../api/index.js';

const tags = ref([]);
const category = ref([]);

onMounted(async () => {
    const res = await API_tags();
    res.filter(t => {
        if (category.value.indexOf(t.category) === -1) {
            category.value.push(t.category.toLowerCase());
        }
        if (tags.value.indexOf(t.tag) === -1) {
            tags.value.push(t.tag);
        }
    })
})


</script>
<style scoped>

</style>