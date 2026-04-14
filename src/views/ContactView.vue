<template>
  <div class="contact-view page-padding">
    <Contact :t="t" :lang="lang" />
  </div>
</template>

<script setup>
import Contact from '../components/Contact.vue'
defineProps({ t: Object, lang: String })
</script>

<style scoped>
.page-padding { padding-top: 80px; }
</style>
