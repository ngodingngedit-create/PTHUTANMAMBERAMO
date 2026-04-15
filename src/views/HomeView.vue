<template>
  <div class="home-view">
    <Hero :t="t" :lang="lang" />
    <GlobalPresence :t="t" :lang="lang" />
    <Clients :t="t" :lang="lang" />
  </div>
</template>

<script setup>
import Hero from '../components/Hero.vue'
import GlobalPresence from '../components/GlobalPresence.vue'
import Clients from '../components/Clients.vue'

defineProps({ t: Object, lang: String })
</script>
