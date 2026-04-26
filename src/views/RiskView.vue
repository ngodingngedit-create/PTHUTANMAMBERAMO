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
            <img src="/backgrounds/patrol.png" alt="Security Patrol" class="rounded-img shadow-teal">
          </div>
          <div class="editorial-text">
            <span class="tag">{{ lang === 'id' ? 'Keamanan & Integritas' : 'Security & Integrity' }}</span>
            <h2 class="heading-lg">{{ lang === 'id' ? 'Manajemen Risiko Proaktif' : 'Proactive Risk Management' }}</h2>
            <p class="body-lg">{{ lang === 'id' ? 'Kami mengidentifikasi dan menetralkan potensi gangguan di lima domain utama untuk memastikan tidak ada gangguan pada misi konservasi kami.' : 'We identify and neutralize potential disruptions across five key domains to ensure zero interruption to our conservation mission.' }}</p>
            <div class="stat-row">
              <div class="simple-stat">
                <span class="s-val">0%</span>
                <span class="s-lbl">{{ lang === 'id' ? 'Penebangan Liar' : 'Illegal Logging' }}</span>
              </div>
              <div class="simple-stat">
                <span class="s-val">25Y+</span>
                <span class="s-lbl">{{ lang === 'id' ? 'Keamanan Terjamin' : 'Guaranteed Safety' }}</span>
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
          <h2 class="heading-md white-text">{{ lang === 'id' ? 'Domain Risiko' : 'Risk Domains' }}</h2>
          <p class="body-md gray-text">{{ lang === 'id' ? 'Pemantauan komprehensif di lima dimensi kritis.' : 'Comprehensive monitoring across five critical dimensions.' }}</p>
        </div>

        <div class="simple-grid">
          <div class="pillar-box dark-box" v-reveal v-for="(risk, idx) in riskDomains" :key="idx">
            <div class="pillar-icon-simple"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg></div>
            <h3 class="white-text">{{ lang === 'id' ? risk.titleID : risk.title }}</h3>
            <p class="gray-text">{{ lang === 'id' ? risk.descID : risk.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: PROTOCOLS -->
    <section class="section">
      <div class="container">
        <div class="protocol-card glass-card" v-reveal>
          <div class="psc-header">
            <h2 class="heading-md">{{ lang === 'id' ? 'Protokol Mitigasi' : 'Mitigation Protocols' }}</h2>
            <p class="body-md">{{ lang === 'id' ? 'Strategi "Defense in Depth" kami memastikan perlindungan berlapis untuk seluruh hektar proyek.' : 'Our "Defense in Depth" strategy ensures multi-layered protection for all project hectares.' }}</p>
          </div>
          <div class="psc-grid">
            <div class="p-item" v-for="(p, i) in protocols" :key="i">
              <div class="p-icon">
                <span class="p-number">0{{ i + 1 }}</span>
              </div>
              <div class="p-content">
                <h4>{{ lang === 'id' ? p.titleID : p.title }}</h4>
                <p>{{ lang === 'id' ? p.descID : p.desc }}</p>
              </div>
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
  { 
    title: 'Environmental', titleID: 'Lingkungan',
    desc: 'Counteracting fire risks and biodiversity shifts through early warning systems.',
    descID: 'Menangkal risiko kebakaran dan pergeseran keanekaragaman hayati melalui sistem peringatan dini.'
  },
  { 
    title: 'Operational', titleID: 'Operasional',
    desc: 'Ensuring logistics and field safety in remote jungle environments.',
    descID: 'Memastikan logistik dan keamanan lapangan di lingkungan hutan yang terpencil.'
  },
  { 
    title: 'Regulatory', titleID: 'Regulasi',
    desc: '100% compliance with Indonesian SRN PPI and global carbon laws.',
    descID: 'Kepatuhan 100% terhadap SRN PPI Indonesia dan hukum karbon global.'
  },
  { 
    title: 'Market', titleID: 'Pasar',
    desc: 'Protection against price volatility through long-term off-take agreements.',
    descID: 'Perlindungan terhadap volatilitas harga melalui perjanjian off-take jangka panjang.'
  },
  { 
    title: 'Social', titleID: 'Sosial',
    desc: 'Maintaining strong FPIC standards with indigenous land owners.',
    descID: 'Menjaga standar FPIC yang kuat dengan pemilik lahan adat.'
  }
]

const protocols = [
  {
    title: 'Satellite Surveillance', titleID: 'Pengawasan Satelit',
    desc: '24/7 real-time monitoring of forest cover using high-resolution spectral data.',
    descID: 'Pemantauan real-time 24/7 tutupan hutan menggunakan data spektral resolusi tinggi.'
  },
  {
    title: 'Indigenous Rangers', titleID: 'Penjaga Hutan Adat',
    desc: 'On-the-ground protection teams formed by local community members.',
    descID: 'Tim perlindungan di lapangan yang dibentuk oleh anggota masyarakat setempat.'
  },
  {
    title: 'Independent Audits', titleID: 'Audit Independen',
    desc: 'Annual verification by accredited 3rd-party bodies to ensure methodology integrity.',
    descID: 'Verifikasi tahunan oleh badan pihak ketiga yang terakreditasi untuk memastikan integritas metodologi.'
  }
]
</script>

<style scoped>
.simple-premium { background: #fff; color: var(--dark-charcoal); }
.bg-dark { background: var(--dark-teal); position: relative; overflow: hidden; }
.bg-dark::before {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(circle at 80% 20%, rgba(43, 144, 144, 0.15) 0%, transparent 60%);
}
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
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: var(--dark-teal);
  line-height: 1.1;
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

.shadow-teal {
  box-shadow: 0 20px 40px rgba(26, 107, 107, 0.15) !important;
}



.stat-row { display: flex; gap: 40px; }
.simple-stat { display: flex; flex-direction: column; }
.s-val { font-family: var(--font-display); font-size: 2.5rem; color: var(--dark-teal); font-weight: 800; }
.s-lbl { font-size: 0.85rem; color: var(--slate-gray); font-weight: 600; text-transform: uppercase; }

/* DOMAINS */
.section-header.centered { text-align: center; max-width: 700px; margin: 0 auto 60px; }
.simple-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.pillar-box {
  background: white;
  padding: 40px;
  border-radius: 24px;
  border: 1px solid rgba(0,0,0,0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.pillar-box:hover { transform: translateY(-5px); box-shadow: 0 12px 32px rgba(26, 107, 107, 0.08); }
.pillar-box h3 { font-family: var(--font-display); font-size: 1.25rem; margin-bottom: 12px; color: var(--dark-teal); }
.pillar-box p { font-size: 0.95rem; line-height: 1.6; color: var(--slate-gray); }

.dark-box { 
  background: rgba(255,255,255,0.05); 
  border-color: rgba(255,255,255,0.1); 
  backdrop-filter: blur(10px);
  color: white;
}
.dark-box:hover { background: rgba(255,255,255,0.08); }
.dark-box h3 { color: white !important; }
.dark-box p { color: rgba(255,255,255,0.8) !important; }
.dark-box .pillar-icon-simple { color: white !important; }

/* PROTOCOLS */
.glass-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 60px;
  border-radius: 40px;
  box-shadow: 0 20px 50px rgba(26, 107, 107, 0.05);
}
.psc-header { margin-bottom: 50px; text-align: center; max-width: 650px; margin-left: auto; margin-right: auto; }
.psc-header p { color: var(--slate-gray); font-size: 1.1rem; margin-top: 14px; }
.psc-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
.p-item {
  display: flex; flex-direction: column; gap: 20px; padding: 30px; 
  background: white; border-radius: 24px; border: 1.5px solid #F4FAFA;
  transition: all 0.3s;
}
.p-item:hover { border-color: var(--medium-teal); transform: scale(1.02); }
.p-number { 
  font-weight: 900; color: var(--medium-teal); font-size: 1.5rem; 
  opacity: 0.3; font-family: var(--font-display); 
}
.p-content h4 { font-family: var(--font-display); font-size: 1.15rem; color: var(--dark-teal); margin-bottom: 8px; }
.p-content p { font-size: 0.9rem; color: var(--slate-gray); line-height: 1.6; }

@media (max-width: 1024px) {
  .section { padding: 70px 0; }
  .editorial-layout { grid-template-columns: 1fr !important; gap: 40px; }
  .editorial-image { order: 1; }
  .editorial-text { order: 2; text-align: center; }
  .stat-row { justify-content: center; }
  .simple-grid { grid-template-columns: repeat(2, 1fr); }
  .psc-grid { grid-template-columns: 1fr; gap: 20px; }
  .glass-card { padding: 40px 24px; }
}

@media (max-width: 768px) {
  .heading-lg { font-size: 2.2rem; }
  .simple-grid { grid-template-columns: 1fr; }
  .editorial-image { order: 1; max-width: 500px; margin: 0 auto; }
}</style>
