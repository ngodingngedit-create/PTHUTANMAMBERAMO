<template>
  <div class="who-we-are-view">
    <Hero backgroundType="image" backgroundImage="/backgrounds/our_approach.png">
      <h1 class="hero-title">{{ t.who_we_are_page.hero_title }}</h1>
      <p class="hero-subtitle">{{ t.who_we_are_page.hero_subtitle }}</p>
    </Hero>

    <!-- TEAMMATES SECTION -->
    <section class="teammates-section">
      <div class="container">
        <div class="teammates-heading">
          <h2 class="section-title text-center">
            {{ t.who_we_are_page.leadership_title }}<br />
            <span class="highlight-text">{{ t.who_we_are_page.leadership_subtitle }}</span>
          </h2>
          <p class="teammates-desc text-center">
           {{ t.who_we_are_page.leadership_desc }}
          </p>
        </div>
      </div>
      <div class="teammates-scroll-wrapper">
        <div class="teammates-track">
          <div class="teammate-card" v-for="mate in teammates" :key="mate.name">
            <div class="teammate-img" :style="{ backgroundImage: 'url(' + mate.photo + ')' }"></div>
            <div class="teammate-overlay">
              <h4 class="teammate-name">{{ mate.name }}</h4>
              <p class="teammate-role">{{ mate.role }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="teammates-cta-wrap">
        <router-link to="/teams" class="cta-btn teammates-cta-btn">
          {{ t?.career?.view_all_team || 'Lihat Semua Tim' }}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </router-link>
      </div>
    </section>

    <!-- BASIN GEOGRAPHY (THE SYSTEM) -->
    <section class="section geography-basin">
      <div class="container">
        <div class="staggered-grid">
          <div class="stagger-item text-block" v-reveal>
            <div class="section-tag">{{ t.who_we_are_page.basin_tag }}</div>
            <h2 class="editorial-title">{{ t.who_we_are_page.basin_title }}</h2>
            <p class="editorial-desc">{{ t.who_we_are_page.basin_desc }}</p>
            
            <div class="stats-mini-grid">
              <div class="stat-mini">
                <span class="stat-val">{{ t.who_we_are_page.stats_area_val }}</span>
                <span class="stat-lab">{{ t.who_we_are_page.stats_area }}</span>
              </div>
              <div class="stat-mini">
                <span class="stat-val">{{ t.who_we_are_page.stats_species_val }}</span>
                <span class="stat-lab">{{ t.who_we_are_page.stats_species }}</span>
              </div>
            </div>
          </div>
          <div class="stagger-item image-block" v-reveal>
            <div class="editorial-image-wrapper">
              <img src="/backgrounds/environment.png" alt="Mamberamo Basin">
              <div class="image-caption">{{ t.who_we_are_page.monitoring_caption }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TWO REGIONS CONTRAST -->
    <section class="section regional-split bg-alt">
      <div class="container">
        <div class="section-center" v-reveal>
          <h2 class="section-title text-center mb-80">{{ t.who_we_are_page.raya_tengah_title }}</h2>
        </div>
        
        <div class="comparison-grid">
          <!-- RAYA -->
          <div class="comparison-side" v-reveal>
            <div class="side-info">
              <span class="side-tag">{{ t.who_we_are_page.lowlands_tag }}</span>
              <h3>{{ t.who_we_are_page.raya_subtitle }}</h3>
              <p>{{ t.who_we_are_page.raya_desc }}</p>
            </div>
            <div class="side-visual">
              <img src="/backgrounds/forestry.png" alt="Mamberamo Raya">
            </div>
          </div>

          <!-- TENGAH -->
          <div class="comparison-side reverse" v-reveal>
            <div class="side-visual">
              <img src="/backgrounds/our_approach.png" alt="Mamberamo Tengah">
            </div>
            <div class="side-info">
              <span class="side-tag">{{ t.who_we_are_page.highlands_tag }}</span>
              <h3>{{ t.who_we_are_page.tengah_subtitle }}</h3>
              <p>{{ t.who_we_are_page.tengah_desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- BIODIVERSITY ARK (EDITORIAL FOCUS) -->
    <section class="section biodiversity-ark">
      <div class="container grid-layout">
        <div class="grid-item main-content" v-reveal>
          <div class="section-tag">{{ t.who_we_are_page.bio_tag }}</div>
          <h2 class="editorial-title-md">{{ t.who_we_are_page.bio_title }}</h2>
          <p class="editorial-desc-md">{{ t.who_we_are_page.bio_desc }}</p>
        </div>
        <div class="grid-item side-image" v-reveal>
          <div class="organic-frame">
            <img src="/backgrounds/m_biodiversity.png" alt="Endemic Biodiversity">
          </div>
        </div>
      </div>
    </section>

    <!-- TRADITIONAL GUARDIANS -->
    <section class="section social-impact glass-free-bg">
      <div class="container text-center max-w-900" v-reveal>
        <div class="section-tag">{{ t.who_we_are_page.social_tag }}</div>
        <h2 class="editorial-title-sm mb-30">{{ t.who_we_are_page.social_title }}</h2>
        <p class="editorial-desc-lg mb-50">{{ t.who_we_are_page.social_desc }}</p>
        
        <div class="impact-stats">
          <div class="impact-stat-item">
            <span class="stat-digit">{{ t.who_we_are_page.stats_tribes_val }}</span>
            <span class="stat-name">{{ t.who_we_are_page.stats_tribes }}</span>
          </div>
          <div class="impact-stat-item highlight">
            <span class="stat-digit">{{ t.who_we_are_page.protected_val }}</span>
            <span class="stat-name">{{ t.who_we_are_page.protected_label }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Hero from '../components/Hero.vue'
defineProps({ t: Object, lang: String })

const teammates = ref([
  {
    name: 'Harry Khoirul Anwar',
    role: 'Komisaris utama PT Hutan Harapan Mamberamo Raya',
    photo: '/career/HarryKhoirul.png'
  },
  {
    name: 'Hashim Djojohadikusumo',
    role: 'Komisaris Utama Arsari Group',
    photo: '/career/Hashim.png'
  },
  {
    name: 'H. Amir Mahpud',
    role: 'Presiden Direktur PT Primajasa Perdana Raya Utama',
    photo: '/career/H_Amir_Mahpud.png'
  }
])
</script>

<style scoped>
.who-we-are-view {
  background: var(--bg-eco-neutral);
  color: var(--dark-charcoal);
  overflow-x: hidden;
  font-family: 'Poppins', sans-serif;
}

/* --- HERO STYLES --- */
.hero-title {
  font-family: 'Poppins', sans-serif;
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
  text-align: center;
}



/* --- STAGGERED GRID (GEOGRAPHY) --- */
.staggered-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 120px;
  align-items: center;
}
.editorial-title {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.1;
  margin-bottom: 30px;
}
.editorial-desc {
  font-size: 1.15rem;
  line-height: 1.8;
  color: var(--slate-gray);
  margin-bottom: 40px;
}
.stats-mini-grid {
  display: flex;
  gap: 60px;
}
.stat-mini .stat-val {
  display: block;
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--dark-teal);
  margin-bottom: 4px;
}
.stat-mini .stat-lab {
  font-size: 0.85rem;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.editorial-image-wrapper {
  position: relative;
}
.editorial-image-wrapper img {
  width: 100%;
  border-radius: 4px; /* Organic feel, not too round */
  box-shadow: 0 30px 60px rgba(0,0,0,0.1);
}
.image-caption {
  position: absolute;
  bottom: -40px;
  right: 0;
  font-style: italic;
  font-size: 0.9rem;
  color: var(--medium-teal);
}

/* --- REGIONAL COMPARISON --- */
.bg-alt { background: white; }
.mb-80 { margin-bottom: 80px; }
.regional-split {
  padding: 120px 0;
}
.section-center {
  text-align: center;
  margin-bottom: 40px;
}
.comparison-grid {
  display: flex;
  flex-direction: column;
  gap: 100px;
}
.comparison-side {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 80px;
  align-items: center;
}
.comparison-side.reverse {
  grid-template-columns: 1.2fr 0.8fr;
}
.side-tag {
  color: var(--medium-teal);
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.8rem;
  display: block;
  margin-bottom: 15px;
}
.side-info h3 {
  font-family: 'Poppins', sans-serif;
  font-size: 2.2rem;
  margin-bottom: 20px;
}
.side-info p {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--slate-gray);
}
.side-visual img {
  width: 100%;
  height: 450px;
  object-fit: cover;
  border-radius: 2px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.08);
}

/* --- BIODIVERSITY GRID --- */
.grid-layout {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 80px;
  align-items: center;
}
.editorial-title-md {
  font-family: 'Poppins', sans-serif;
  font-size: 3rem;
  margin-bottom: 30px;
}
.organic-frame {
  position: relative;
}
.organic-frame::after {
  content: '';
  position: absolute;
  inset: -20px;
  border: 1px solid var(--teal-15);
  z-index: -1;
}
.organic-frame img {
  width: 100%;
  box-shadow: 20px 20px 0 var(--bg-section-alt);
}

/* --- SOCIAL IMPACT --- */
.glass-free-bg {
  background: var(--section-bg-alt2);
  padding: 120px 0;
}
.max-w-900 { max-width: 900px; margin: 0 auto; }
.editorial-title-sm {
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
}
.editorial-desc-lg {
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 1.6;
  color: var(--body-text);
}
.impact-stats {
  display: flex;
  justify-content: center;
  gap: 100px;
}
.stat-digit {
  display: block;
  font-size: 4rem;
  font-weight: 900;
  color: var(--dark-teal);
  line-height: 1;
}
.stat-name {
  font-size: 1rem;
  color: var(--slate-gray);
  font-weight: 500;
}
.impact-stat-item.highlight .stat-digit {
    color: var(--medium-teal);
}

.mb-30 { margin-bottom: 30px; }
.mb-50 { margin-bottom: 50px; }

.hero-tag {
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 0.2em;
  color: #5BB8B8;
  margin-bottom: 20px;
  text-transform: uppercase;
}

/* --- RESPONSIVE --- */

/* --- TEAMMATES SECTION --- */
.teammates-section {
  padding: 80px 0 60px;
  background: white;
  overflow: hidden;
}
.teammates-heading {
  margin-bottom: 48px;
  text-align: center;
}
.teammates-desc {
  max-width: 660px;
  margin: 0 auto;
  color: var(--slate-gray);
  font-size: 1.05rem;
  line-height: 1.7;
}
.section-title {
  font-size: 2.5rem;
  color: #1A6B6B;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 40px;
  letter-spacing: -0.5px;
  text-align: center;
}
.highlight-text {
  display: block;
  color: #2B9090;
  font-size: 2rem;
}
.teammates-scroll-wrapper {
  width: 100%;
  overflow-x: auto;
  padding-bottom: 20px;
  -webkit-overflow-scrolling: touch;
}
.teammates-track {
  display: flex;
  gap: 20px;
  width: max-content;
  min-width: 100%;
  justify-content: center;
  margin: 0 auto;
  padding: 0 24px;
  box-sizing: border-box;
}
.teammate-card {
  position: relative;
  width: 230px;
  height: 380px;
  overflow: hidden;
  flex-shrink: 0;
  cursor: pointer;
  border-radius: 20px;
  transition: width 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.teammate-card:hover {
  width: 280px;
}
.teammates-cta-wrap {
  display: flex;
  justify-content: center;
  padding: 40px 0 0;
}
.teammates-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: transparent;
  color: #1A6B6B;
  border: 2px solid #1A6B6B;
  padding: 13px 32px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s;
}
.teammates-cta-btn:hover {
  background: #1A6B6B;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(26,107,107,0.2);
}
.teammate-img {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center top;
  transition: transform 0.5s ease;
}
.teammate-card:hover .teammate-img {
  transform: scale(1.04);
}
.teammate-overlay {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  padding: 40px 20px 20px;
  background: linear-gradient(to top, rgba(10, 40, 40, 0.92) 0%, rgba(10,40,40,0.4) 60%, transparent 100%);
  color: white;
  transition: all 0.3s ease;
}
.teammate-name {
  font-size: 1rem;
  font-weight: 700;
  color: #5BB8B8;
  margin-bottom: 4px;
  letter-spacing: 0.2px;
}
.teammate-role {
  font-size: 0.82rem;
  color: rgba(255,255,255,0.85);
  font-weight: 400;
}

@media (max-width: 960px) {
  .staggered-grid, .comparison-side, .comparison-side.reverse, .grid-layout {
    grid-template-columns: 1fr;
    gap: 50px;
    text-align: center;
  }
  .image-block { order: -1; }
  .side-visual { order: -1; }
  .side-visual img { height: 300px; }
  .stats-mini-grid, .impact-stats {
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }
  .hero-title { font-size: 4rem; }
  .teammate-card { width: 200px; height: 320px; }
  .teammate-card:hover { width: 240px; }

  .video-overlay {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.4) 100%);
    backdrop-filter: blur(2px);
  }
}

@media (max-width: 600px) {
  .hero-title { 
    font-size: 2.5rem !important; 
    padding-left: 50px;
    text-align: left !important;
    line-height: 1.1 !important;
  }
  .hero-subtitle { 
    font-size: 1rem !important;
    padding-left: 50px;
    text-align: left !important;
    line-height: 1.5 !important;
  }
  .teammates-section { padding: 70px 0 0; }
  .teammate-card { width: 160px; height: 260px; }
  .teammate-card:hover { width: 190px; }
  .teammates-cta-wrap { padding: 28px 0 48px; }
}
</style>
