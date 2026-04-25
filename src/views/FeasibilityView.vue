<template>
  <div class="corporate-view">
    <Hero 
      :t="t"
      :lang="lang"
      backgroundType="image"
      backgroundImage="/backgrounds/our_approach.png"
      :title="lang === 'en' ? 'Feasibility Study' : 'Studi Kelayakan'"
      :subtitle="lang === 'en' ? 'In-depth evaluation of technical, economic, and environmental aspects.' : 'Evaluasi mendalam terhadap aspek teknis, ekonomi, dan lingkungan.'"
      height="60vh"
    />

    <section class="section">
      <div class="container">
        <div class="corp-content-card" v-reveal>
          <header class="corp-header">
            <h2 class="heading-lg">Feasibility Study (Studi Kelayakan)</h2>
            <p class="body-lg">Kami melakukan evaluasi komprehensif untuk memastikan setiap inisiatif konservasi dan proyek karbon memiliki landasan yang kuat secara teknis dan finansial.</p>
          </header>

          <div class="corp-grid">
            <div class="corp-visual" v-reveal>
              <img src="/feasibility_graphic_1777102406702.png" alt="Feasibility Analysis" class="graphic-img">
              <div class="visual-caption">Technical & Economic Projection Overlay</div>
            </div>
            
            <div class="corp-details">
              <div class="corp-item">
                <h3>Project Overview</h3>
                <p>Mencakup detail lokasi di Mamberamo Raya dengan luas estimasi 300.000+ Hektar, meliputi ekosistem hutan hujan tropis dan lahan basah yang krusial.</p>
              </div>
              <div class="corp-item">
                <h3>Objectives</h3>
                <p>Tujuan utama kami adalah proteksi biodiversitas Papua melalui mekanisme Carbon Credit (NBS) yang memberdayakan masyarakat adat.</p>
              </div>
              <div class="corp-item">
                <h3>Technical Feasibility</h3>
                <p>Menggunakan metodologi Verra VM0007, didukung teknologi LiDAR dan satelit Sentinel untuk pemantauan karbon yang akurat (MRV).</p>
              </div>
            </div>
          </div>

          <div class="stats-row" v-reveal>
            <div class="stat-box">
              <span class="stat-value">92%</span>
              <span class="stat-label">Technical Viability</span>
            </div>
            <div class="stat-box">
              <span class="stat-value">12.5M</span>
              <span class="stat-label">tCO2e Capacity</span>
            </div>
            <div class="stat-box">
              <span class="stat-value">25Y</span>
              <span class="stat-label">Project Lifespan</span>
            </div>
          </div>

          <div class="corp-full-section" v-reveal>
            <h3>Environmental Feasibility</h3>
            <p>Penilaian dampak positif terhadap penyerapan karbon global dan perlindungan habitat endemik yang tidak tergantikan. Proyek ini memenuhi standar tinggi untuk integritas lingkungan dan keadilan sosial.</p>
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

.corp-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 48px; margin-top: 40px; }
.corp-visual { border-radius: 16px; overflow: hidden; background: #f8fafc; border: 1px solid #e2e8f0; }
.graphic-img { width: 100%; height: auto; display: block; object-fit: cover; }
.visual-caption { padding: 12px; font-size: 0.8rem; color: #94a3b8; text-align: center; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; }

.corp-details { display: flex; flex-direction: column; gap: 32px; }
.corp-item h3 { font-family: var(--font-display); font-size: 1.25rem; color: var(--dark-charcoal); margin-bottom: 12px; border-left: 4px solid var(--medium-teal); padding-left: 15px; }
.corp-item p { font-size: 1rem; color: var(--slate-gray); line-height: 1.7; }

.stats-row { 
  display: flex; 
  justify-content: space-between; 
  gap: 24px; 
  margin: 48px 0; 
  padding: 32px; 
  background: linear-gradient(135deg, #0F2D2D, #1A6B6B); 
  border-radius: 16px;
  color: white;
}
.stat-box { display: flex; flex-direction: column; align-items: center; flex: 1; text-align: center; }
.stat-value { font-size: 2.5rem; font-weight: 800; font-family: var(--font-display); }
.stat-label { font-size: 0.85rem; opacity: 0.8; text-transform: uppercase; letter-spacing: 1px; margin-top: 4px; }

.corp-full-section { margin-top: 60px; padding: 40px; background: var(--bg-eco-neutral); border-radius: 16px; }
.corp-full-section h3 { font-family: var(--font-display); font-size: 1.4rem; color: var(--dark-teal); margin-bottom: 16px; }
.corp-full-section p { font-size: 1.05rem; color: var(--slate-gray); line-height: 1.8; }

@media (max-width: 960px) {
  .corp-content-card { padding: 40px 24px; margin-top: -60px; }
  .heading-lg { font-size: 1.8rem; }
  .corp-grid { grid-template-columns: 1fr; gap: 40px; }
  .stats-row { flex-direction: column; gap: 32px; padding: 40px 24px; }
  .stat-value { font-size: 2rem; }
}
</style>
