<template>
  <div class="corporate-view">
    <Hero 
      :t="t"
      :lang="lang"
      backgroundType="image"
      backgroundImage="/backgrounds/environment.png"
      :title="lang === 'en' ? 'Environmental Study' : 'Studi Lingkungan'"
      :subtitle="lang === 'en' ? 'Ecosystem baseline analysis and impact mitigation planning.' : 'Analisis kondisi ekosistem awal dan rencana mitigasi dampak.'"
      height="60vh"
    />

    <section class="section">
      <div class="container">
        <div class="corp-content-card" v-reveal>
          <div class="environmental-hero-visual" v-reveal>
            <img src="/environmental_monitoring_1777102421059.png" alt="Environmental Monitoring" class="monitoring-main-img">
            <div class="image-overlay-info">
              <span>Scientific Monitoring Program</span>
              <h4>Baseline Ecosystem Analysis</h4>
            </div>
          </div>

          <div class="impact-grid">
            <div class="impact-card" v-reveal>
              <div class="impact-icon">🌿</div>
              <h3>Baseline Environment</h3>
              <p>Mendata kondisi flora, fauna, dan kualitas air di Mamberamo sebagai titik acuan keberhasilan restorasi dan perlindungan ekosistem.</p>
            </div>
            <div class="impact-card" v-reveal>
              <div class="impact-icon">📊</div>
              <h3>Impact Assessment</h3>
              <p>Evaluasi menyeluruh terhadap dampak positif restorasi hutan dan pengelolaan risiko potensial bagi ekosistem lokal.</p>
            </div>
            <div class="impact-card" v-reveal>
              <div class="impact-icon">🛡️</div>
              <h3>Mitigation Plan</h3>
              <p>Strategi aktif termasuk reforestasi area kritis, perlindungan koridor satwa, dan pencegahan kebakaran hutan dini.</p>
            </div>
            <div class="impact-card" v-reveal>
              <div class="impact-icon">🤝</div>
              <h3>Community Engagement</h3>
              <p>Melibatkan masyarakat adat sebagai subjek utama dalam penjagaan lingkungan melalui program pemberdayaan ekonomi berkelanjutan.</p>
            </div>
          </div>

          <div class="biodiversity-status" v-reveal>
            <div class="status-header">
              <h3>Biodiversity Integrity Index</h3>
              <span>Current Status: Pristine</span>
            </div>
            <div class="progress-container">
              <div class="progress-bar" style="width: 96%"></div>
              <span class="progress-label">96% Ecosystem Health</span>
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

.environmental-hero-visual {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 48px;
  height: 400px;
}
.monitoring-main-img { width: 100%; height: 100%; object-fit: cover; }
.image-overlay-info {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  padding: 40px;
  background: linear-gradient(to top, rgba(15, 45, 45, 0.9), transparent);
  color: white;
}
.image-overlay-info span { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1.5px; opacity: 0.8; }
.image-overlay-info h4 { font-size: 1.8rem; margin-top: 8px; font-family: var(--font-display); }

.impact-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; margin-bottom: 60px; }
.impact-card { 
  padding: 32px; 
  background: #f8fafc; 
  border-radius: 16px; 
  border: 1px solid #e2e8f0; 
  transition: all 0.3s ease;
}
.impact-card:hover { transform: translateY(-5px); box-shadow: 0 10px 30px rgba(0,0,0,0.05); border-color: var(--medium-teal); }
.impact-icon { font-size: 2rem; margin-bottom: 20px; }
.impact-card h3 { font-family: var(--font-display); font-size: 1.25rem; color: var(--dark-teal); margin-bottom: 12px; }
.impact-card p { font-size: 0.95rem; color: var(--slate-gray); line-height: 1.6; }

.biodiversity-status { background: #0F2D2D; padding: 40px; border-radius: 20px; color: white; }
.status-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
.status-header h3 { font-family: var(--font-display); font-size: 1.4rem; }
.progress-container { position: relative; height: 40px; background: rgba(255,255,255,0.1); border-radius: 20px; overflow: hidden; }
.progress-bar { height: 100%; background: linear-gradient(to right, #2B9090, #1A6B6B); border-radius: 20px; }
.progress-label { position: absolute; top: 50%; left: 24px; transform: translateY(-50%); font-weight: 700; font-size: 0.9rem; }

@media (max-width: 960px) {
  .corp-content-card { padding: 40px 24px; margin-top: -60px; }
  .environmental-hero-visual { height: 300px; }
  .impact-grid { grid-template-columns: 1fr; }
  .status-header { flex-direction: column; align-items: flex-start; gap: 10px; }
}
</style>
