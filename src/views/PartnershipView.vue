<template>
  <div class="partnership-view page-padding">
    <Partnership :t="t" :lang="lang" />
    <Revenue :t="t" :lang="lang" />
  </div>
</template>

<script setup>
import Partnership from '../components/Partnership.vue'
import Revenue from '../components/Revenue.vue'
defineProps({ t: Object, lang: String })
</script>

<style scoped>
.page-padding { padding-top: 80px; }
</style>
