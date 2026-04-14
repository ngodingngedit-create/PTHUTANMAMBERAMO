<template>
  <section id="home" class="hero">
    <!-- Video Background -->
    <div class="video-container">
      <video
        autoplay
        muted
        loop
        playsinline
        class="bg-video"
      >
        <source src="/home/home.mp4" type="video/mp4" />
      </video>
      <!-- Subtle Overlay for contrast -->
      <div class="video-overlay"></div>
    </div>

    <div class="container hero-wrapper">
      <div class="hero-content">
        <div class="hero-glass-panel">
          <h1 class="hero-title">
            {{ t.hero.tagline }}
          </h1>

          <p class="hero-subtitle">{{ t.hero.subtitle }}</p>

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
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="scroll-indicator">
      <div class="scroll-mouse">
        <div class="mouse-wheel"></div>
      </div>
      <span class="scroll-text">{{ lang === 'en' ? 'EXPLORE' : 'EKSPLORASI' }}</span>
    </div>
  </section>
</template>

<script setup>
defineProps({ t: Object, lang: String })
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
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

.bg-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.05);
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
}

.hero-glass-panel {
  padding: 40px;
  animation: fadeUpIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 900;
  line-height: 1.05;
  margin-bottom: 32px;
  color: #ffffff;
  letter-spacing: -0.02em;
}

.hero-subtitle {
  font-size:normal;
  color: #ffffff;
  max-width: 780px;
  margin: 0 auto 56px;
  line-height: 1.7;
  font-weight: 400;
  opacity: 0.95;
}

.hero-actions {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.hero-actions .btn-primary {
  padding: 18px 48px;
  font-size: 1.1rem;
  border-radius: 20px;
  min-width: 220px;
  box-shadow: 0 10px 40px rgba(26,107,107,0.3);
}

.hero-actions .btn-secondary {
  padding: 17px 48px;
  font-size: 1.1rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255,255,255,0.4);
  color: #ffffff;
  min-width: 220px;
}

.hero-actions .btn-secondary:hover {
  background: white;
  color: var(--dark-teal);
}

@keyframes fadeUpIn {
  from { opacity: 0; transform: translateY(50px); filter: blur(10px); }
  to { opacity: 1; transform: translateY(0); filter: blur(0); }
}

@media (max-width: 768px) {
  .hero-glass-panel { padding: 48px 24px; }
  .hero-title { font-size: clamp(2.2rem, 10vw, 3.5rem); }
}
</style>
