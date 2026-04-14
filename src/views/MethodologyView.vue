<template>
  <div class="methodology-view page-padding">
    <Methodology :t="t" />
  </div>
</template>

<script setup>
import Methodology from '../components/Methodology.vue'
defineProps({ t: Object })
</script>

<style scoped>
.page-padding { padding-top: 80px; }
</style>
