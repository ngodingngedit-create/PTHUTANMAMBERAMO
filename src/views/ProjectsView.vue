<template>
  <div class="projects-view page-padding">
    <Projects :t="t" />
  </div>
</template>

<script setup>
import Projects from '../components/Projects.vue'
defineProps({ t: Object })
</script>

<style scoped>
.page-padding { padding-top: 80px; }
</style>
