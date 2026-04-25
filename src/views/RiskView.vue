<template>
  <div class="corporate-view">
    <Hero 
      :t="t"
      :lang="lang"
      backgroundType="image"
      backgroundImage="/backgrounds/forestry.png"
      :title="lang === 'en' ? 'Risk Analysis' : 'Analisis Risiko'"
      :subtitle="lang === 'en' ? 'Identification and mitigation strategies for sustainable project operations.' : 'Identifikasi dan strategi mitigasi untuk operasional proyek yang berkelanjutan.'"
      height="60vh"
    />

    <section class="section">
      <div class="container">
        <div class="corp-content-card" v-reveal>
          <div class="risk-dashboard" v-reveal>
            <div class="risk-matrix-container">
              <div class="matrix-header">
                <h3>Project Risk Matrix</h3>
                <p>Visualisasi probabilitas vs dampak untuk setiap kategori risiko.</p>
              </div>
              <div class="risk-matrix">
                <div class="matrix-cell red" title="Market Risks">Critical</div>
                <div class="matrix-cell orange">High</div>
                <div class="matrix-cell yellow">Medium</div>
                <div class="matrix-cell orange">High</div>
                <div class="matrix-cell yellow" title="Operational Risks">Medium</div>
                <div class="matrix-cell green">Low</div>
                <div class="matrix-cell yellow">Medium</div>
                <div class="matrix-cell green" title="Regulatory Risks">Low</div>
                <div class="matrix-cell green">Low</div>
              </div>
              <div class="matrix-labels">
                <span class="y-label">Dampak ➔</span>
                <span class="x-label">Probabilitas ➔</span>
              </div>
            </div>

            <div class="risk-legend">
              <div class="legend-item"><span class="dot red"></span> Critical</div>
              <div class="legend-item"><span class="dot orange"></span> High</div>
              <div class="legend-item"><span class="dot yellow"></span> Medium</div>
              <div class="legend-item"><span class="dot green"></span> Low</div>
            </div>
          </div>

          <div class="corp-grid">
            <div class="risk-card" v-reveal>
              <div class="risk-icon">🌡️</div>
              <h3>Environmental & Operational</h3>
              <p>Mitigasi terhadap risiko kebakaran hutan, dampak perubahan iklim, serta tantangan logistik di medan terpencil Papua.</p>
            </div>
            <div class="risk-card" v-reveal>
              <div class="risk-icon">⚖️</div>
              <h3>Regulatory & Social</h3>
              <p>Kepatuhan terhadap kebijakan karbon nasional (SRN PPI) dan manajemen hubungan harmonis dengan masyarakat adat.</p>
            </div>
            <div class="risk-card" v-reveal>
              <div class="risk-icon">📉</div>
              <h3>Market Risks</h3>
              <p>Analisis volatilitas harga karbon global dan strategi penjaminan mutu kredit karbon integritas tinggi.</p>
            </div>
            <div class="risk-card" v-reveal>
              <div class="risk-icon">🛡️</div>
              <h3>Mitigation Strategy</h3>
              <p>Implementasi sistem monitoring real-time dan audit independen berkala untuk meminimalkan potensi gangguan.</p>
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
.corporate-view { background: #fff; }
.corp-content-card {
  background: white;
  border-radius: 24px;
  padding: 60px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.05);
  margin-top: -100px;
  position: relative;
  z-index: 10;
  border: 1px solid rgba(0,0,0,0.05);
}
.corp-header { margin-bottom: 48px; text-align: center; max-width: 800px; margin-left: auto; margin-right: auto; }
.heading-lg { font-family: var(--font-display); font-size: 2.5rem; color: var(--dark-teal); margin-bottom: 20px; }
.body-lg { font-size: 1.1rem; color: var(--slate-gray); line-height: 1.6; }

.risk-dashboard {
  background: #f8fafc;
  padding: 40px;
  border-radius: 24px;
  border: 1px solid #e2e8f0;
  margin-bottom: 60px;
  display: flex;
  gap: 40px;
  align-items: center;
}

.risk-matrix-container { flex: 1; }
.matrix-header { margin-bottom: 24px; }
.matrix-header h3 { font-family: var(--font-display); font-size: 1.4rem; color: var(--dark-teal); margin-bottom: 4px; }
.matrix-header p { font-size: 0.9rem; color: #64748b; }

.risk-matrix {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 16px;
}
.matrix-cell {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  color: white;
}
.matrix-cell.red { background: #ef4444; }
.matrix-cell.orange { background: #f97316; }
.matrix-cell.yellow { background: #eab308; }
.matrix-cell.green { background: #22c55e; }

.matrix-labels { display: flex; justify-content: space-between; font-size: 0.75rem; font-weight: 600; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; }

.risk-legend { display: flex; flex-direction: column; gap: 16px; min-width: 150px; }
.legend-item { display: flex; align-items: center; gap: 12px; font-size: 0.9rem; font-weight: 600; color: #475569; }
.dot { width: 12px; height: 12px; border-radius: 50%; }
.dot.red { background: #ef4444; }
.dot.orange { background: #f97316; }
.dot.yellow { background: #eab308; }
.dot.green { background: #22c55e; }

.corp-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; }
.risk-card { 
  padding: 32px; 
  background: white; 
  border-radius: 20px; 
  border: 1px solid #f1f5f9; 
  box-shadow: 0 10px 30px rgba(0,0,0,0.03);
  transition: all 0.3s ease;
}
.risk-card:hover { transform: translateY(-5px); box-shadow: 0 15px 40px rgba(0,0,0,0.06); border-color: var(--medium-teal); }
.risk-icon { font-size: 2rem; margin-bottom: 20px; }
.risk-card h3 { font-family: var(--font-display); font-size: 1.25rem; color: var(--dark-teal); margin-bottom: 12px; }
.risk-card p { font-size: 0.95rem; color: var(--slate-gray); line-height: 1.6; }

@media (max-width: 960px) {
  .corp-content-card { padding: 40px 24px; margin-top: -60px; }
  .risk-dashboard { flex-direction: column; padding: 24px; gap: 30px; }
  .corp-grid { grid-template-columns: 1fr; }
  .matrix-cell { height: 60px; font-size: 0.7rem; }
}
</style>
