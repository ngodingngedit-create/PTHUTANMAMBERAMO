<template>
  <div id="app-root">
    <Navbar :t="t" :lang="lang" @set-lang="setLang" />
    <main>
      <router-view :t="t" :lang="lang"></router-view>
    </main>
    <Footer :t="t" :lang="lang" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { translations } from './i18n.js'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { useRouter } from 'vue-router'

const lang = ref('id')
const t = computed(() => translations[lang.value])
const router = useRouter()

function setLang(l) {
  lang.value = l
  localStorage.setItem('user-lang', l)
}

onMounted(() => {
  const savedLang = localStorage.getItem('user-lang')
  if (savedLang) lang.value = savedLang
})
</script>

<style>
/* Global reset handled in style.css */
#app-root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
}

/* Page transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
