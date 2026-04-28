<template>
  <section class="hashim-gallery">
    <div class="container gallery-header">
      <span class="section-tag">{{ t.hashim_gallery.section_tag }}</span>
      <h2 class="section-title">{{ t.hashim_gallery.title }}</h2>
      <p class="section-subtitle">
        {{ t.hashim_gallery.subtitle }}
      </p>
    </div>

    <div class="marquee-wrapper">
      <div class="marquee-track">
        <!-- Loop 1 -->
        <div v-for="(img, i) in images" :key="'h1-'+i" class="marquee-item" @click="openLb(img)">
          <div class="image-inner">
            <img :src="img" :alt="'Hashim Gallery ' + (i+1)" loading="lazy" />
          </div>
        </div>
        <!-- Loop 2 for seamless -->
        <div v-for="(img, i) in images" :key="'h2-'+i" class="marquee-item" @click="openLb(img)">
          <div class="image-inner">
            <img :src="img" :alt="'Hashim Gallery ' + (i+1)" loading="lazy" />
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <Transition name="fade">
      <div v-if="lbImg" class="lb-overlay" @click="lbImg = null">
        <div class="lb-box" @click.stop>
          <img :src="lbImg" alt="Foto Dokumentasi" />
          <button class="lb-close" @click="lbImg = null">&times;</button>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  t: Object,
  lang: { type: String, default: 'id' }
})

const images = [
  '/blog/pahasyim.webp',
  '/blog/pahasyim1.jpg',
  '/blog/pahasyim2.webp',
  '/blog/pahasyim3.jpg',
  '/blog/pahasyiim.webp',
  '/blog/pahasyimm.webp',
  '/blog/pahasyim.jpg'
]

const lbImg = ref(null)
const openLb = (img) => { lbImg.value = img }
</script>

<style scoped>
.hashim-gallery {
  padding: 100px 0 80px;
  background: #fff;
  overflow: hidden;
}

.gallery-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-tag {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #2B9090;
  margin-bottom: 12px;
  padding: 6px 18px;
  background: rgba(43, 144, 144, 0.08);
  border-radius: 50px;
}

.section-title {
  font-family: 'Poppins', sans-serif;
  font-size: 2.8rem;
  font-weight: 800;
  color: #1A2A2A;
  margin-bottom: 20px;
}

.section-subtitle {
  max-width: 700px;
  margin: 0 auto;
  color: #6a8080;
  font-size: 1.1rem;
  line-height: 1.7;
}

.marquee-wrapper {
  width: 100%;
  display: flex;
  overflow: hidden;
  user-select: none;
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

.marquee-track {
  display: flex;
  flex-shrink: 0;
  gap: 24px;
  padding: 20px 0;
  animation: scrollLeft 45s linear infinite;
}

.marquee-track:hover {
  animation-play-state: paused;
}

.marquee-item {
  width: 350px;
  height: 250px;
  flex-shrink: 0;
  cursor: pointer;
}

.image-inner {
  width: 100%;
  height: 100%;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0,0,0,0.08);
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s;
}

.marquee-item:hover .image-inner {
  transform: scale(1.05) translateY(-5px);
  box-shadow: 0 25px 60px rgba(26, 107, 107, 0.15);
}

.image-inner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s ease;
}

.marquee-item:hover img {
  transform: scale(1.1);
}

@keyframes scrollLeft {
  from { transform: translateX(0); }
  to { transform: translateX(calc(-50% - 12px)); }
}

/* Lightbox */
.lb-overlay {
  position: fixed; inset: 0; z-index: 5000;
  background: rgba(13, 59, 56, 0.95);
  backdrop-filter: blur(12px);
  display: flex; align-items: center; justify-content: center;
  padding: 20px;
}
.lb-box {
  position: relative;
  max-width: 90vw;
  max-height: 85vh;
}
.lb-box img {
  max-width: 100%;
  max-height: 85vh;
  object-fit: contain;
  border-radius: 20px;
  box-shadow: 0 40px 100px rgba(0,0,0,0.5);
}
.lb-close {
  position: absolute; top: -60px; right: 0;
  background: none; border: none; color: #fff;
  font-size: 3.5rem; cursor: pointer;
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 768px) {
  .section-title { font-size: 1.8rem; }
  .marquee-item { width: 260px; height: 180px; }
  .hashim-gallery { padding: 60px 0; }
}
</style>
