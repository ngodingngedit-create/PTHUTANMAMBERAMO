<template>
  <div class="corporate-view simple-premium">
    <Hero 
      :t="t"
      :lang="lang"
      backgroundType="image"
      backgroundImage="/backgrounds/our_approach.png"
      :title="lang === 'en' ? 'Feasibility Study' : 'Studi Kelayakan'"
      :subtitle="lang === 'en' ? 'Scientific validation and financial modeling for long-term ecosystem viability.' : 'Validasi ilmiah dan pemodelan finansial untuk kelangsungan ekosistem jangka panjang.'"
      height="70vh"
    />

    <!-- SECTION 1: OVERVIEW -->
    <section class="section">
      <div class="container">
        <div class="editorial-layout" v-reveal>
          <div class="editorial-image">
            <img src="/backgrounds/our_approach.png" alt="Project Overview" class="rounded-img">
          </div>
          <div class="editorial-text">
            <span class="tag">Foundation</span>
            <h2 class="heading-lg">Mamberamo Basin Overview</h2>
            <p class="body-lg">The Feasibility Study maps over 300,000 hectares of primary swamp forest in the Mamberamo Basin. We assess carbon stocks and biodiversity with precision to ensure a robust foundation for all conservation activities.</p>
            <div class="stat-row">
              <div class="simple-stat">
                <span class="s-val">300K+</span>
                <span class="s-lbl">Hectares</span>
              </div>
              <div class="simple-stat">
                <span class="s-val">98%</span>
                <span class="s-lbl">Primary Forest</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2: THE PILLARS -->
    <section class="section bg-light">
      <div class="container">
        <div class="section-header centered" v-reveal>
          <h2 class="heading-md">The Four Pillars</h2>
          <p class="body-md">Our assessment covers every critical dimension of the project ecosystem.</p>
        </div>

        <div class="simple-grid">
          <div class="pillar-box" v-reveal>
            <div class="pillar-icon-simple"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg></div>
            <h3>Technical Integrity</h3>
            <p>Adherence to global MRV standards and Verra methodologies (VM0007 / VM0015).</p>
          </div>
          <div class="pillar-box" v-reveal>
            <div class="pillar-icon-simple"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
            <h3>Financial Viability</h3>
            <p>Ensuring long-term funding through high-integrity carbon credits in global markets.</p>
          </div>
          <div class="pillar-box" v-reveal>
            <div class="pillar-icon-simple"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
            <h3>Environmental Safety</h3>
            <p>Predictive modeling of climate benefits and rigorous zero-deforestation policies.</p>
          </div>
          <div class="pillar-box" v-reveal>
            <div class="pillar-icon-simple"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><circle cx="19" cy="11" r="4"/></svg></div>
            <h3>Social Equity</h3>
            <p>Maintaining FPIC standards and direct economic benefits for local communities.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: ECONOMIC -->
    <section class="section">
      <div class="container">
        <div class="economic-simple-card" v-reveal>
          <div class="esc-content">
            <h2 class="heading-md">Economic Permanence</h2>
            <p>Our projects are designed to be self-sustaining, utilizing the Voluntary Carbon Market (VCM) to generate the capital required to maintain forest protection for decades.</p>
          </div>
          <div class="esc-visual">
            <div class="value-box">
              <span class="v-label">Longevity</span>
              <span class="v-main">25+ Years</span>
            </div>
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
.simple-premium { background: #fff; color: #1e293b; }
.bg-light { background: #f8fafc; }

.section { padding: 100px 0; }

.tag {
  display: inline-block;
  color: var(--medium-teal);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.8rem;
  margin-bottom: 20px;
}

.heading-lg {
  font-family: var(--font-display);
  font-size: 3rem;
  color: var(--dark-teal);
  margin-bottom: 24px;
}

.body-lg {
  font-size: 1.15rem;
  color: var(--slate-gray);
  line-height: 1.7;
  margin-bottom: 40px;
}

.editorial-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.rounded-img {
  width: 100%;
  border-radius: 32px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);
}

.stat-row { display: flex; gap: 40px; }
.simple-stat { display: flex; flex-direction: column; }
.s-val { font-family: var(--font-display); font-size: 2.5rem; color: var(--dark-teal); font-weight: 800; }
.s-lbl { font-size: 0.85rem; color: var(--slate-gray); font-weight: 600; text-transform: uppercase; }

/* PILLARS */
.section-header.centered { text-align: center; max-width: 700px; margin: 0 auto 60px; }
.simple-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; }
.pillar-box {
  background: white;
  padding: 40px;
  border-radius: 24px;
  border: 1px solid #f1f5f9;
  transition: all 0.3s;
}
.pillar-box:hover { transform: translateY(-5px); box-shadow: 0 10px 30px rgba(0,0,0,0.03); }
.pillar-icon-simple { color: var(--medium-teal); margin-bottom: 24px; }
.pillar-box h3 { font-family: var(--font-display); font-size: 1.2rem; margin-bottom: 12px; color: var(--dark-teal); }
.pillar-box p { font-size: 0.95rem; color: var(--slate-gray); line-height: 1.6; }

/* ECONOMIC */
.economic-simple-card {
  background: var(--dark-teal);
  color: white;
  padding: 60px 80px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
}
.esc-content { flex: 1; }
.esc-content p { font-size: 1.1rem; opacity: 0.8; line-height: 1.6; margin-top: 16px; }
.value-box {
  background: rgba(255,255,255,0.1);
  padding: 30px 50px;
  border-radius: 20px;
  text-align: center;
}
.v-label { display: block; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; opacity: 0.7; margin-bottom: 8px; }
.v-main { font-family: var(--font-display); font-size: 2rem; font-weight: 800; }

@media (max-width: 1024px) {
  .editorial-layout { grid-template-columns: 1fr; gap: 40px; }
  .simple-grid { grid-template-columns: repeat(2, 1fr); }
  .economic-simple-card { flex-direction: column; text-align: center; padding: 40px 24px; }
}

@media (max-width: 640px) {
  .simple-grid { grid-template-columns: 1fr; }
  .heading-lg { font-size: 2.2rem; }
}
</style>
