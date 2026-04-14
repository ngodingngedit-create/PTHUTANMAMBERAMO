<template>
  <div class="about-view page-padding">
    <About :t="t" />
  </div>
</template>

<script setup>
import About from '../components/About.vue'
defineProps({ t: Object })
</script>

<style scoped>
.page-padding { padding-top: 80px; }
</style>
