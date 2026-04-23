<template>
  <section id="home" class="hero" :style="{ minHeight: height }">
    <!-- Background -->
    <div class="video-container">
      <video
        v-if="backgroundType === 'video'"
        autoplay
        muted
        loop
        playsinline
        class="bg-video"
      >
        <source :src="videoSrc" type="video/mp4" />
      </video>
      <div 
        v-else 
        class="bg-image" 
        :style="{ backgroundImage: `url(${backgroundImage})` }"
      ></div>
      
      <!-- Subtle Overlay for contrast -->
      <div class="video-overlay"></div>
    </div>

    <div class="container hero-wrapper">
      <div class="hero-content">
        <div class="hero-glass-panel">
          <slot>
            <h1 class="hero-title">
              {{ title || t.hero.tagline }}
            </h1>

            <p class="hero-subtitle">{{ subtitle || t.hero.subtitle }}</p>

            <!-- <div class="hero-actions">
              <router-link to="/projects" class="btn-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="16" y2="12"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="12" y1="12" x2="12" y2="16"/></svg>
                {{ t.hero.cta_primary }}
              </router-link>
              <router-link to="/contact" class="btn-secondary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                {{ t.hero.cta_secondary }}
              </router-link>
            </div> -->
          </slot>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div v-if="showScrollIndicator" class="scroll-indicator">
      <div class="scroll-mouse">
        <div class="mouse-wheel"></div>
      </div>
      <span class="scroll-text">{{ lang === 'en' ? 'EXPLORE' : 'EKSPLORASI' }}</span>
    </div>
  </section>
</template>

<script setup>
defineProps({
  t: Object,
  lang: String,
  videoSrc: { type: String, default: '/home/home.mp4' },
  backgroundType: { type: String, default: 'video' }, // 'video' or 'image'
  backgroundImage: { type: String, default: '' },
  title: String,
  subtitle: String,
  height: { type: String, default: '100vh' },
  showScrollIndicator: { type: Boolean, default: true }
})
</script>

<style scoped>
.hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  overflow: hidden;
  text-align: center;
}

.video-container {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.bg-video, .bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.05);
}

.bg-image {
  background-size: cover;
  background-position: center;
}

.video-overlay {
  position: absolute;
  inset: 0;
  /* Darker at top to help white navbar visibility, centered for text */
  background: radial-gradient(circle at center, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.4) 100%);
  backdrop-filter: blur(2px);
}

.hero-wrapper {
  position: relative;
  z-index: 2;
  width: 100%;
}

.hero-content {
  max-width: 1000px;
  margin: 0 auto;
  transform: translateX(30px);
}

.hero-glass-panel {
  padding: 40px;
  animation: fadeUpIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(2.6rem, 5vw, 4rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 24px;
  color: #ffffff;
  letter-spacing: -0.02em;
  text-align: center;
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.3rem);
  color: #ffffff;
  max-width: 850px;
  margin: 0 auto 30px;
  line-height: 1.7;
  font-weight: 400;
  opacity: 0.95;
}

@keyframes fadeUpIn {
  from { opacity: 0; transform: translateY(50px); filter: blur(10px); }
  to { opacity: 1; transform: translateY(0); filter: blur(0); }
}

@media (max-width: 768px) {
  .hero-glass-panel { 
    padding: 24px 10px; 
  }
  .hero-content {
    transform: translateX(60px);
  }
  .hero-title { 
    font-size: clamp(2rem, 8vw, 3rem); 
  }
  .hero-subtitle { 
    font-size: 0.95rem;
    margin-bottom: 20px !important;
  }
}
</style>
