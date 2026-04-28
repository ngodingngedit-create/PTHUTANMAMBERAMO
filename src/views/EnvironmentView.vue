<template>
  <div class="page-environment">
    <Hero 
      :t="t"
      :lang="lang"
      backgroundType="image"
      backgroundImage="/backgrounds/environment.png"
      height="100vh"
    >
      <h1 class="hero-title">{{ t.environment.hero_title }}</h1>
      <p class="hero-subtitle">{{ t.environment.hero_subtitle }}</p>
    </Hero>

    <!-- Main split -->
    <section class="section main-split">
      <div class="container split-layout">
        <div class="split-image" v-reveal>
          <img src="/backgrounds/environment.png" alt="Environment" />
          <div class="img-tag">
            <span class="tag-dot"></span>
            {{ lang === 'en' ? 'Live Monitoring Active' : 'Pemantauan Aktif' }}
          </div>
        </div>
        <div class="split-text" v-reveal>
          <div class="section-tag">{{ lang === 'en' ? 'Stewardship' : 'Pengelolaan' }}</div>
          <h2 class="heading-lg">{{ t.environment.title }}</h2>
          <p class="body-md">{{ t.environment.desc }}</p>
          <div class="stat-row">
            <div class="inline-stat" v-for="(stat, idx) in envStats" :key="idx">
              <span class="inline-val">{{ stat.val }}</span>
              <span class="inline-lbl">{{ stat.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What we monitor -->
    <section class="section monitor-section">
      <div class="container">
        <div class="section-header" v-reveal>
          <h2 class="heading-md">{{ lang === 'en' ? 'What We Monitor' : 'Yang Kami Pantau' }}</h2>
          <p class="body-md max-600">{{ lang === 'en' ? 'A comprehensive, multi-layer approach to environmental tracking across the Mamberamo ecosystem.' : 'Pendekatan multi-lapisan komprehensif untuk pelacakan lingkungan di seluruh ekosistem Mamberamo.' }}</p>
        </div>
        <div class="monitor-grid">
          <div class="monitor-item" v-reveal v-for="item in monitorItems" :key="item.label">
            <div class="m-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" v-html="item.icon"></svg>
            </div>
            <div>
              <h4 class="m-title">{{ item.label }}</h4>
              <p class="m-desc">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Full-width image with overlay text -->
    <section class="section banner-section" v-reveal>
      <div class="container">
        <div class="banner-card">
          <img src="/backgrounds/forestry.png" alt="Forestry Ecosystem" class="banner-img" />
          <div class="banner-overlay">
            <div class="banner-text">
              <p class="banner-eyebrow">{{ lang === 'en' ? 'Our Commitment' : 'Komitmen Kami' }}</p>
              <h3 class="banner-heading">{{ lang === 'en' ? 'Protecting 300,000+ Hectares of Pristine Tropical Forest' : 'Melindungi 300.000+ Hektar Hutan Tropis Murni' }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Hero from '../components/Hero.vue'

const props = defineProps({ t: Object, lang: String })

const envStats = computed(() => {
  if (props.lang === 'id') {
    return [
      { label: 'Spesies Dilindungi', val: '500+' },
      { label: 'Stasiun Pantau', val: '12' },
      { label: 'Data Realtime', val: '24/7' }
    ]
  }
  return [
    { label: 'Protected Species', val: '500+' },
    { label: 'Monitoring Stations', val: '12' },
    { label: 'Realtime Data', val: '24/7' }
  ]
})

const monitorItems = computed(() => {
  if (props.lang === 'id') return [
    { label: 'Kualitas Udara', desc: 'Pemantauan AQI dan emisi gas terus-menerus.', icon: '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>' },
    { label: 'Kesehatan Tanah', desc: 'pH, kandungan organik, dan kepadatan akar.', icon: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>' },
    { label: 'Hidrologi', desc: 'Level air, debit sungai, dan kualitas air.', icon: '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>' },
    { label: 'Biomassa Hutan', desc: 'Estimasi karbon tersimpan berbasis LiDAR.', icon: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>' },
    { label: 'Lapisan Kanopi', desc: 'Tutupan tajuk via citra satelit resolusi tinggi.', icon: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12" y2="16"/>' },
    { label: 'Keanekaragaman Hayati', desc: 'Inventarisasi spesies flora dan fauna endemik.', icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>' }
  ]
  return [
    { label: 'Air Quality', desc: 'Continuous AQI monitoring and gas emission tracking.', icon: '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>' },
    { label: 'Soil Health', desc: 'pH levels, organic content, and root density.', icon: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>' },
    { label: 'Hydrology', desc: 'Water levels, river flow, and water quality.', icon: '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>' },
    { label: 'Forest Biomass', desc: 'LiDAR-based carbon stock estimation.', icon: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>' },
    { label: 'Canopy Cover', desc: 'High-resolution satellite canopy mapping.', icon: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12" y2="16"/>' },
    { label: 'Biodiversity', desc: 'Endemic flora and fauna species inventory.', icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>' }
  ]
})
</script>

<style scoped>
.hero-tag {
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 0.2em;
  color: #5BB8B8;
  margin-bottom: 20px;
  text-transform: uppercase;
}
.page-environment { background: #fff; }

/* Main Split */
.main-split { background: var(--bg-eco-neutral); }
.split-layout { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 80px; align-items: center; }

.split-image { position: relative; }
.split-image img { width: 100%; height: 540px; object-fit: cover; border-radius: 16px; }
.img-tag {
  position: absolute; bottom: 24px; left: 24px;
  display: flex; align-items: center; gap: 8px;
  background: rgba(255,255,255,0.92); backdrop-filter: blur(8px);
  padding: 10px 20px; border-radius: 8px;
  font-family: var(--font-primary); font-size: 0.85rem; font-weight: 600; color: var(--dark-teal);
}
.tag-dot { width: 8px; height: 8px; background: #22c55e; border-radius: 50%; flex-shrink: 0; animation: blink 1.5s ease infinite; }
@keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }

.heading-lg { font-family: var(--font-display); font-size: clamp(1.8rem, 3.5vw, 2.5rem); font-weight: 800; color: var(--dark-charcoal); line-height: 1.2; margin-bottom: 20px; letter-spacing: -0.02em; }
.heading-md { font-family: var(--font-display); font-size: clamp(1.5rem, 3vw, 2rem); font-weight: 800; color: var(--dark-charcoal); margin-bottom: 16px; letter-spacing: -0.02em; }
.body-md { font-family: var(--font-primary); font-size: 1rem; line-height: 1.8; color: var(--slate-gray); margin-bottom: 32px; }
.max-600 { max-width: 600px; }

.stat-row { display: flex; gap: 40px; }
.inline-stat { display: flex; flex-direction: column; }
.inline-val { font-family: var(--font-display); font-size: 1.8rem; font-weight: 800; color: var(--dark-teal); line-height: 1; }
.inline-lbl { font-family: var(--font-primary); font-size: 0.75rem; font-weight: 600; color: var(--slate-gray); text-transform: uppercase; letter-spacing: 0.08em; margin-top: 4px; }

/* Monitor Section */
.monitor-section { background: #fff; }
.section-header { margin-bottom: 56px; }
.monitor-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; border: 1px solid var(--border-color); border-radius: 16px; overflow: hidden; }
.monitor-item { display: flex; align-items: flex-start; gap: 18px; padding: 36px 32px; border-right: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color); transition: background 0.2s; }
.monitor-item:hover { background: var(--bg-eco-neutral); }
.monitor-item:nth-child(3n) { border-right: none; }
.monitor-item:nth-child(4), .monitor-item:nth-child(5), .monitor-item:nth-child(6) { border-bottom: none; }

.m-icon { width: 40px; height: 40px; flex-shrink: 0; background: var(--bg-section-alt); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: var(--dark-teal); }
.m-title { font-family: var(--font-display); font-size: 0.95rem; font-weight: 700; color: var(--dark-charcoal); margin-bottom: 8px; }
.m-desc { font-family: var(--font-primary); font-size: 0.88rem; line-height: 1.6; color: var(--slate-gray); }

/* Banner */
.banner-section { background: var(--bg-eco-neutral); }
.banner-card { position: relative; border-radius: 20px; overflow: hidden; height: 420px; }
.banner-img { width: 100%; height: 100%; object-fit: cover; }
.banner-overlay { position: absolute; inset: 0; background: linear-gradient(to right, rgba(26,42,42,0.85) 0%, rgba(26,42,42,0.3) 60%, transparent 100%); display: flex; align-items: flex-end; padding: 60px 64px; }
.banner-eyebrow { font-family: var(--font-primary); font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; color: var(--light-teal); margin-bottom: 12px; }
.banner-heading { font-family: var(--font-display); font-size: clamp(1.4rem, 3vw, 2rem); font-weight: 700; color: white; line-height: 1.3; max-width: 500px; }

@media (max-width: 960px) {
  .split-layout { grid-template-columns: 1fr; gap: 40px; }
  .split-image img { height: 320px; }
  .heading-lg { font-size: 1.7rem; }
  .heading-md { font-size: 1.5rem; }
  .monitor-grid { grid-template-columns: 1fr 1fr; }
  .monitor-item:nth-child(3n) { border-right: 1px solid var(--border-color); }
  .monitor-item:nth-child(2n) { border-right: none; }
  .monitor-item:nth-child(5) { border-bottom: none; }
  .monitor-item:nth-child(6) { border-bottom: none; }
  .monitor-item:nth-child(4) { border-bottom: 1px solid var(--border-color); }
  .stat-row { gap: 28px; }
  .inline-val { font-size: 1.5rem; }
  .banner-card { height: 300px; }
  .banner-overlay { padding: 40px 32px; align-items: flex-end; }
  .banner-heading { font-size: 1.3rem; }
}

@media (max-width: 640px) {
  .split-image img { height: 260px; }
  .img-tag { font-size: 0.78rem; padding: 8px 14px; bottom: 16px; left: 16px; }
  .heading-lg { font-size: 1.45rem; }
  .body-md { font-size: 0.9rem; }
  .monitor-grid { grid-template-columns: 1fr; }
  .monitor-item { border-right: none; }
  .monitor-item:not(:last-child) { border-bottom: 1px solid var(--border-color); }
  .monitor-item:nth-child(3) { border-bottom: 1px solid var(--border-color); }
  .monitor-item { padding: 24px 20px; }
  .stat-row { gap: 20px; flex-wrap: wrap; }
  .banner-card { height: 260px; border-radius: 12px; }
  .banner-overlay { padding: 28px 24px; }
  .banner-eyebrow { margin-bottom: 8px; }
  .banner-heading { font-size: 1.1rem; }
}
</style>
