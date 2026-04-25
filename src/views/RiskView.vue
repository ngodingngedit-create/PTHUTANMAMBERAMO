<template>
  <div class="corporate-view simple-premium risk-theme">
    <Hero 
      :t="t"
      :lang="lang"
      backgroundType="image"
      backgroundImage="/backgrounds/forestry.png"
      :title="lang === 'en' ? 'Risk Analysis' : 'Analisis Risiko'"
      :subtitle="lang === 'en' ? 'Strategic foresight and proactive mitigation to ensure project permanence.' : 'Pandangan strategis dan mitigasi proaktif untuk memastikan permanensi proyek.'"
      height="70vh"
    />

    <!-- SECTION 1: FORESIGHT -->
    <section class="section">
      <div class="container">
        <div class="editorial-layout" v-reveal>
          <div class="editorial-image">
            <div class="risk-simple-visual">
              <svg width="200" height="200" viewBox="0 0 100 100" opacity="0.1">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" stroke-width="1"/>
                <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" stroke-width="1"/>
              </svg>
              <div class="risk-label-centered">Permanence 100%</div>
            </div>
          </div>
          <div class="editorial-text">
            <span class="tag">Security & Integrity</span>
            <h2 class="heading-lg">Proactive Risk Management</h2>
            <p class="body-lg">We identify and neutralize potential disruptions across five key domains to ensure zero interruption to our conservation mission. Every project is built for permanence and absolute integrity.</p>
            <div class="stat-row">
              <div class="simple-stat">
                <span class="s-val">0%</span>
                <span class="s-lbl">Illegal Logging</span>
              </div>
              <div class="simple-stat">
                <span class="s-val">25Y+</span>
                <span class="s-lbl">Guaranteed Safety</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2: RISK DOMAINS -->
    <section class="section bg-dark">
      <div class="container">
        <div class="section-header centered light" v-reveal>
          <h2 class="heading-md white-text">Risk Domains</h2>
          <p class="body-md gray-text">Comprehensive monitoring across five critical dimensions.</p>
        </div>

        <div class="simple-grid">
          <div class="pillar-box dark-box" v-reveal v-for="(risk, idx) in riskDomains" :key="idx">
            <div class="pillar-icon-simple"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--medium-teal)" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m16 12-4-4-4 4"/></svg></div>
            <h3 class="white-text">{{ risk.title }}</h3>
            <p class="gray-text">{{ risk.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: PROTOCOLS -->
    <section class="section">
      <div class="container">
        <div class="protocol-simple-card" v-reveal>
          <div class="psc-header">
            <h2 class="heading-md">Mitigation Protocols</h2>
            <p>Our "Defense in Depth" strategy ensures multi-layered protection for all project hectares.</p>
          </div>
          <div class="psc-list">
            <div class="p-item-simple">
              <span class="p-tag">01</span>
              <p>24/7 Satellite Surveillance</p>
            </div>
            <div class="p-item-simple">
              <span class="p-tag">02</span>
              <p>Indigenous Community Rangers</p>
            </div>
            <div class="p-item-simple">
              <span class="p-tag">03</span>
              <p>Independent 3rd-Party Audits</p>
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

const riskDomains = [
  { title: 'Environmental', desc: 'Counteracting fire risks and biodiversity shifts through early warning systems.' },
  { title: 'Operational', desc: 'Ensuring logistics and field safety in remote jungle environments.' },
  { title: 'Regulatory', desc: '100% compliance with Indonesian SRN PPI and global carbon laws.' },
  { title: 'Market', desc: 'Protection against price volatility through long-term off-take agreements.' },
  { title: 'Social', desc: 'Maintaining strong FPIC standards with indigenous land owners.' }
]
</script>

<style scoped>
.simple-premium { background: #fff; color: var(--dark-charcoal); }
.bg-dark { background: var(--dark-teal); }
.white-text { color: white; }
.gray-text { color: rgba(255,255,255,0.7); }

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
  grid-template-columns: 0.9fr 1.1fr;
  gap: 80px;
  align-items: center;
}

.risk-simple-visual {
  background: #f0fafa;
  border-radius: 32px;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: var(--medium-teal);
}

.risk-label-centered {
  position: absolute;
  font-weight: 800;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.stat-row { display: flex; gap: 40px; }
.simple-stat { display: flex; flex-direction: column; }
.s-val { font-family: var(--font-display); font-size: 2.5rem; color: var(--medium-teal); font-weight: 800; }
.s-lbl { font-size: 0.85rem; color: var(--slate-gray); font-weight: 600; text-transform: uppercase; }

/* DOMAINS */
.section-header.centered { text-align: center; max-width: 700px; margin: 0 auto 60px; }
.simple-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.pillar-box {
  background: white;
  padding: 40px;
  border-radius: 24px;
  border: 1px solid #f1f5f9;
  transition: all 0.3s;
}
.dark-box { background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.1); }
.pillar-box h3 { font-family: var(--font-display); font-size: 1.2rem; margin-bottom: 12px; color: var(--dark-teal); }
.pillar-box p { font-size: 0.95rem; line-height: 1.6; color: var(--slate-gray); }

/* PROTOCOLS */
.protocol-simple-card {
  border: 1px solid #f1f5f9;
  padding: 60px;
  border-radius: 40px;
}
.psc-header { margin-bottom: 40px; }
.psc-header p { color: var(--slate-gray); font-size: 1.1rem; margin-top: 10px; }
.psc-list { display: flex; flex-direction: column; gap: 20px; }
.p-item-simple { display: flex; align-items: center; gap: 20px; padding: 20px; background: #f0fafa; border-radius: 12px; }
.p-tag { font-weight: 900; color: var(--medium-teal); font-size: 1.2rem; }
.p-item-simple p { font-weight: 600; color: var(--dark-teal); }

@media (max-width: 1024px) {
  .editorial-layout { grid-template-columns: 1fr; gap: 40px; }
  .simple-grid { grid-template-columns: repeat(2, 1fr); }
  .protocol-simple-card { padding: 30px 24px; }
}

@media (max-width: 640px) {
  .simple-grid { grid-template-columns: 1fr; }
}
</style>
