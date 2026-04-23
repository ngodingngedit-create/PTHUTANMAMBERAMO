<template>
  <div class="who-we-are-view">
    <!-- HERO SECTION -->
    <Hero 
      :t="t" 
      :lang="lang" 
      videoSrc="/pahasyim/PaHasyimMp4.mp4" 
      :title="t.who_we_are_page.hero_title"
      :subtitle="t.who_we_are_page.hero_subtitle"
    />

    <!-- vidio overlay -->
    <div class="video-overlay"></div>

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
              <div class="image-caption">Sustainable Ecosystem Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TWO REGIONS CONTRAST -->
    <section class="section regional-split bg-alt">
      <div class="container">
        <div class="section-center" v-reveal>
          <h2 class="section-title text-center mb-60">{{ t.who_we_are_page.raya_tengah_title }}</h2>
        </div>
        
        <div class="comparison-grid">
          <!-- RAYA -->
          <div class="comparison-side" v-reveal>
            <div class="side-info">
              <span class="side-tag">The Lowlands</span>
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
              <span class="side-tag">The Highlands</span>
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
            <span class="stat-digit">300k Ha</span>
            <span class="stat-name">Protected Territory</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Hero from '../components/Hero.vue'
defineProps({ t: Object, lang: String })
</script>

<style scoped>
.who-we-are-view {
  background: var(--bg-eco-neutral);
  color: var(--dark-charcoal);
  overflow-x: hidden;
}



/* --- STAGGERED GRID (GEOGRAPHY) --- */
.staggered-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 120px;
  align-items: center;
}
.editorial-title {
  font-family: 'Playfair Display', serif;
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
.mb-60 { margin-bottom: 60px; }
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
  font-family: 'Playfair Display', serif;
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
  font-family: 'Playfair Display', serif;
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
  font-family: 'Playfair Display', serif;
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

/* --- RESPONSIVE --- */
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

  .video-overlay {
  position: absolute;
  inset: 0;
  /* Darker at top to help white navbar visibility, centered for text */
  background: radial-gradient(circle at center, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.4) 100%);
  backdrop-filter: blur(2px);
}
  
}
</style>
