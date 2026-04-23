<template>
  <section class="sub-hero-editorial">
    <div class="editorial-wrapper">
      <div class="editorial-bg-container">
        <div class="bg-image-wrapper">
          <img :src="imageSrc" class="bg-image-editorial" />
          <div class="film-grain-overlay"></div>
        </div>
        <div class="editorial-vignette"></div>
      </div>

      <div class="container editorial-content-box">
        <div class="text-floating-layer">
          <h1 class="editorial-title" v-reveal>{{ title }}</h1>
          <div class="editorial-line" v-reveal></div>
          <p class="editorial-subtitle-inline" v-reveal>{{ subtitle }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  imageSrc: String
})
</script>

<style scoped>
.sub-hero-editorial {
  position: relative;
  min-height: 85vh;
  background: var(--bg-eco-neutral);
  display: flex;
  align-items: center;
  overflow: hidden;
}

.editorial-wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  align-items: center;
  position: relative;
}

.editorial-bg-container {
  position: absolute;
  right: 0;
  top: 0;
  width: 60%;
  height: 90%;
  z-index: 1;
}

.bg-image-wrapper {
  width: 100%;
  height: 100%;
  clip-path: polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%);
  overflow: hidden;
  position: relative;
}

.bg-image-editorial {
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: slowFloat 40s linear infinite alternate;
}

.editorial-vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at left, var(--bg-eco-neutral) 0%, transparent 60%);
}

.editorial-content-box {
  position: relative;
  z-index: 5;
  padding-right: 50px;
}

.text-floating-layer {
  max-width: 700px;
}

.editorial-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(3rem, 10vw, 6rem);
  font-weight: 900;
  color: var(--dark-charcoal);
  line-height: 0.95;
  margin-bottom: 30px;
  letter-spacing: -0.03em;
}

.editorial-line {
  width: 100px;
  height: 1px;
  background: var(--medium-teal);
  margin-bottom: 30px;
}

.editorial-subtitle-inline {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: clamp(1.1rem, 3vw, 1.6rem);
  color: var(--medium-teal);
  line-height: 1.5;
  max-width: 500px;
}

@keyframes slowFloat {
  from { transform: scale(1) translateX(0); }
  to { transform: scale(1.15) translateX(20px); }
}

@media (max-width: 960px) {
  .sub-hero-editorial { min-height: 70vh; padding: 100px 0; }
  .editorial-wrapper { grid-template-columns: 1fr; }
  .editorial-bg-container { width: 100%; height: 100%; top: 0; opacity: 0.3; }
  .bg-image-wrapper { clip-path: none; }
  .editorial-content-box { text-align: center; display: flex; justify-content: center; }
  .text-floating-layer { display: flex; flex-direction: column; align-items: center; }
  .editorial-line { margin: 0 auto 30px; }
}
</style>
