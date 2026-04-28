<template>
  <div class="projects-view">
    <Projects :t="t" :lang="lang" />
  </div>
</template>

<script setup>
import Projects from '../components/Projects.vue'
defineProps({ t: Object, lang: String })
</script>

<style scoped>
.projects-view {
  min-height: 100vh;
}
</style>
