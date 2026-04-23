<template>
  <div class="page-our-approach">
    <Hero 
      :t="t"
      :lang="lang"
      backgroundType="image"
      backgroundImage="/backgrounds/our_approach.png"
      :title="t.our_approach.hero_title"
      :subtitle="t.our_approach.hero_subtitle"
      height="100vh"
    />
    
    <!-- Intro statement -->
    <section class="section intro-section">
      <div class="container intro-layout">
        <div class="intro-label" v-reveal>The Methodology</div>
        <div class="intro-content" v-reveal>
          <h2 class="heading-xl">{{ t.our_approach.title }}</h2>
          <p class="body-lg">We integrate ecological science, local wisdom, and precision carbon monitoring to deliver measurable conservation outcomes at scale.</p>
        </div>
      </div>
    </section>

    <!-- Approach pillars -->
    <section class="section pillars-section">
      <div class="container">
        <div class="pillars-grid">
          <div class="pillar-card" v-for="(item, idx) in approachItems" :key="idx" v-reveal :style="{ transitionDelay: idx * 100 + 'ms' }">
            <div class="pillar-number">{{ String(idx + 1).padStart(2, '0') }}</div>
            <div class="pillar-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" v-html="item.icon"></svg>
            </div>
            <h3 class="pillar-title">{{ item.name }}</h3>
            <p class="pillar-text">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Data precision -->
    <section class="section data-section">
      <div class="container data-layout">
        <div class="data-image" v-reveal>
          <img src="/backgrounds/patrol.png" alt="Field Monitoring" />
          <div class="data-stat">
            <span class="stat-number">99.8%</span>
            <span class="stat-label">Monitoring Accuracy</span>
          </div>
        </div>
        <div class="data-text" v-reveal>
          <div class="section-tag">{{ lang === 'en' ? 'Powered by Data' : 'Berbasis Data' }}</div>
          <h2 class="heading-lg">{{ lang === 'en' ? 'Precision at Every Layer' : 'Presisi di Setiap Lapisan' }}</h2>
          <p class="body-md">{{ lang === 'en' ? 'Satellite imagery, remote sensing, and on-ground verification combine to ensure every hectare of Mamberamo Basin is monitored with the highest integrity.' : 'Citra satelit, penginderaan jauh, dan verifikasi lapangan digabungkan untuk memastikan setiap hektar Cekungan Mamberamo dipantau dengan integritas tertinggi.' }}</p>
          <ul class="check-list">
            <li><span class="check-dot"></span>{{ lang === 'en' ? 'Continuous surveillance & real-time alerts' : 'Pengawasan berkelanjutan & peringatan real-time' }}</li>
            <li><span class="check-dot"></span>{{ lang === 'en' ? 'Biomass assessment via peer-reviewed models' : 'Penilaian biomassa via model terverifikasi' }}</li>
            <li><span class="check-dot"></span>{{ lang === 'en' ? 'Transparent, open-source methodology' : 'Metodologi transparan & bersumber terbuka' }}</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Hero from '../components/Hero.vue'

const props = defineProps({ t: Object, lang: String })

const approachItems = computed(() => {
  if (props.lang === 'id') {
    return [
      { name: 'Solusi Alam', text: 'Perlindungan ekosistem langsung yang mengurangi emisi melalui pemulihan habitat dan pencegahan deforestasi.', icon: '<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>' },
      { name: 'Integritas Karbon', text: 'Kredit karbon berkualitas tinggi menggunakan metodologi Verra yang diakui secara internasional.', icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>' },
      { name: 'Manfaat Lokal', text: 'Memberdayakan ekonomi lokal melalui konservasi dan penciptaan lapangan kerja hijau bagi komunitas adat.', icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>' }
    ]
  }
  return [
    { name: 'Nature-based Solutions', text: 'Direct ecosystem protection reducing emissions through habitat restoration and deforestation prevention.', icon: '<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>' },
    { name: 'Carbon Integrity', text: 'High-quality carbon credits using Verra methodologies recognized internationally for full transparency.', icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>' },
    { name: 'Local Benefits', text: 'Empowering local economies through conservation and green job creation for indigenous communities.', icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>' }
  ]
})
</script>

<style scoped>
.page-our-approach { background: #fff; }

/* Intro */
.intro-section { background: var(--bg-eco-neutral); }
.intro-layout { display: grid; grid-template-columns: 220px 1fr; gap: 80px; align-items: start; }
.intro-label { font-family: var(--font-primary); font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.18em; color: var(--medium-teal); padding-top: 12px; }

.heading-xl { font-family: var(--font-display); font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; color: var(--dark-charcoal); line-height: 1.15; margin-bottom: 24px; letter-spacing: -0.02em; }
.heading-lg { font-family: var(--font-display); font-size: clamp(1.8rem, 3.5vw, 2.5rem); font-weight: 800; color: var(--dark-charcoal); line-height: 1.2; margin-bottom: 20px; letter-spacing: -0.02em; }
.body-lg { font-family: var(--font-primary); font-size: 1.15rem; line-height: 1.75; color: var(--slate-gray); font-weight: 300; }
.body-md { font-family: var(--font-primary); font-size: 1rem; line-height: 1.8; color: var(--slate-gray); margin-bottom: 32px; }

/* Pillars */
.pillars-section { background: #fff; }
.pillars-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; border: 1px solid var(--border-color); border-radius: 20px; overflow: hidden; }

.pillar-card {
  padding: 48px 40px; background: #fff;
  border-right: 1px solid var(--border-color);
  transition: background 0.3s;
  position: relative;
}
.pillar-card:last-child { border-right: none; }
.pillar-card:hover { background: var(--bg-eco-neutral); }

.pillar-number { font-family: var(--font-display); font-size: 0.7rem; font-weight: 800; letter-spacing: 0.15em; color: var(--medium-teal); margin-bottom: 32px; }
.pillar-icon { width: 44px; height: 44px; background: var(--bg-section-alt); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: var(--dark-teal); margin-bottom: 24px; }
.pillar-title { font-family: var(--font-display); font-size: 1.2rem; font-weight: 700; color: var(--dark-charcoal); margin-bottom: 16px; }
.pillar-text { font-family: var(--font-primary); font-size: 0.95rem; line-height: 1.75; color: var(--slate-gray); }

/* Data Section */
.data-section { background: var(--bg-eco-neutral); }
.data-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }

.data-image { position: relative; }
.data-image img { width: 100%; height: 520px; object-fit: cover; border-radius: 16px; }
.data-stat {
  position: absolute; bottom: 32px; left: 32px;
  background: var(--dark-teal); color: white;
  padding: 20px 28px; border-radius: 12px;
}
.stat-number { display: block; font-family: var(--font-display); font-size: 2rem; font-weight: 800; line-height: 1; }
.stat-label { display: block; font-size: 0.8rem; font-weight: 500; opacity: 0.75; margin-top: 4px; }

.check-list { list-style: none; display: flex; flex-direction: column; gap: 16px; }
.check-list li { display: flex; align-items: center; gap: 14px; font-family: var(--font-primary); font-size: 0.95rem; color: var(--dark-charcoal); font-weight: 500; }
.check-dot { width: 8px; height: 8px; background: var(--medium-teal); border-radius: 50%; flex-shrink: 0; }

@media (max-width: 960px) {
  .intro-layout { grid-template-columns: 1fr; gap: 16px; }
  .intro-label { padding-top: 0; }
  .heading-xl { font-size: 1.9rem; }
  .pillars-grid { grid-template-columns: 1fr; border-radius: 16px; }
  .pillar-card { border-right: none; border-bottom: 1px solid var(--border-color); padding: 36px 28px; }
  .pillar-card:last-child { border-bottom: none; }
  .data-layout { grid-template-columns: 1fr; gap: 48px; }
  .data-image img { height: 300px; }
  .data-stat { padding: 16px 20px; bottom: 20px; left: 20px; }
  .stat-number { font-size: 1.5rem; }
}

@media (max-width: 640px) {
  .intro-layout { gap: 12px; }
  .heading-xl { font-size: 1.6rem; }
  .heading-lg { font-size: 1.5rem; }
  .body-lg { font-size: 1rem; }
  .pillar-card { padding: 28px 20px; }
  .pillar-icon { width: 38px; height: 38px; border-radius: 10px; }
  .data-image img { height: 240px; }
  .body-md { font-size: 0.92rem; }
  .check-list li { font-size: 0.88rem; }
}
</style>
