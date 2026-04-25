<template>
  <div class="corporate-view simple-premium nature-theme">
    <Hero 
      :t="t"
      :lang="lang"
      backgroundType="image"
      backgroundImage="/backgrounds/environment.png"
      :title="lang === 'en' ? 'Environmental Study' : 'Studi Lingkungan'"
      :subtitle="lang === 'en' ? 'Preserving the biological diversity and ecological integrity of the Mamberamo Basin.' : 'Menjaga keanekaragaman hayati dan integritas ekologis Cekungan Mamberamo.'"
      height="70vh"
    />

    <!-- SECTION 1: STEWARDSHIP -->
    <section class="section">
      <div class="container">
        <div class="editorial-layout" v-reveal>
          <div class="editorial-text">
            <span class="tag">Ecosystem Stewardship</span>
            <h2 class="heading-lg">Nature at its Purest</h2>
            <p class="body-lg">The Mamberamo Basin is one of the last great wildernesses. Our Environmental Study ensures that our presence only serves to strengthen its natural resilience, protecting thousands of endemic species.</p>
            <div class="stat-row">
              <div class="simple-stat">
                <span class="s-val">1,500+</span>
                <span class="s-lbl">Endemic Species</span>
              </div>
              <div class="simple-stat">
                <span class="s-val">100%</span>
                <span class="s-lbl">Zero-Deforestation</span>
              </div>
            </div>
          </div>
          <div class="editorial-image">
            <img src="/backgrounds/environment.png" alt="Nature Monitoring" class="rounded-img">
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2: FOCUS AREAS -->
    <section class="section bg-eco">
      <div class="container">
        <div class="section-header centered" v-reveal>
          <h2 class="heading-md">Our Environmental Focus</h2>
          <p class="body-md">Scientific rigor applied to the conservation of vital carbon sinks.</p>
        </div>

        <div class="simple-grid">
          <div class="pillar-box" v-reveal>
            <div class="pillar-icon-simple"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
            <h3>Baseline Inventory</h3>
            <p>Mapping flora and fauna to establish a scientific baseline for all project outcomes.</p>
          </div>
          <div class="pillar-box" v-reveal>
            <div class="pillar-icon-simple"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2"><path d="M12 2v20"/><path d="M2 12h20"/></svg></div>
            <h3>Impact Analysis</h3>
            <p>Predictive modeling of climate benefits to ensure 100% positive net impact on the basin.</p>
          </div>
          <div class="pillar-box" v-reveal>
            <div class="pillar-icon-simple"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg></div>
            <h3>Mitigation Planning</h3>
            <p>Active reforestation of corridors and advanced fire detection systems across the zone.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: PARTNERSHIP -->
    <section class="section">
      <div class="container">
        <div class="nature-simple-banner" v-reveal>
          <div class="nsb-content">
            <h2 class="heading-md">Community as Guardians</h2>
            <p>Integrating ancient indigenous wisdom with modern conservation science to protect ancestral lands for future generations.</p>
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
.bg-eco { background: #f0fdf4; }

.section { padding: 100px 0; }

.tag {
  display: inline-block;
  color: #059669;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.8rem;
  margin-bottom: 20px;
}

.heading-lg {
  font-family: var(--font-display);
  font-size: 3rem;
  color: #064e3b;
  margin-bottom: 24px;
}

.body-lg {
  font-size: 1.15rem;
  color: #374151;
  line-height: 1.7;
  margin-bottom: 40px;
}

.editorial-layout {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 80px;
  align-items: center;
}

.rounded-img {
  width: 100%;
  border-radius: 32px;
  box-shadow: 0 20px 40px rgba(6, 78, 59, 0.05);
}

.stat-row { display: flex; gap: 40px; }
.simple-stat { display: flex; flex-direction: column; }
.s-val { font-family: var(--font-display); font-size: 2.5rem; color: #059669; font-weight: 800; }
.s-lbl { font-size: 0.85rem; color: #6b7280; font-weight: 600; text-transform: uppercase; }

/* PILLARS */
.section-header.centered { text-align: center; max-width: 700px; margin: 0 auto 60px; }
.simple-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
.pillar-box {
  background: white;
  padding: 40px;
  border-radius: 24px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s;
}
.pillar-box:hover { transform: translateY(-5px); box-shadow: 0 10px 30px rgba(0,0,0,0.03); }
.pillar-icon-simple { margin-bottom: 24px; }
.pillar-box h3 { font-family: var(--font-display); font-size: 1.2rem; margin-bottom: 12px; color: #064e3b; }
.pillar-box p { font-size: 0.95rem; color: #4b5563; line-height: 1.6; }

/* BANNER */
.nature-simple-banner {
  background: #064e3b;
  color: white;
  padding: 80px;
  border-radius: 40px;
  text-align: center;
}
.nsb-content { max-width: 700px; margin: 0 auto; }
.nsb-content p { font-size: 1.1rem; opacity: 0.8; margin-top: 20px; line-height: 1.6; }

@media (max-width: 1024px) {
  .editorial-layout { grid-template-columns: 1fr; gap: 40px; }
  .simple-grid { grid-template-columns: 1fr; }
  .nature-simple-banner { padding: 40px 24px; }
}
</style>
