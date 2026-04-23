<template>
  <div class="page-community">
    <Hero 
      :t="t"
      :lang="lang"
      backgroundType="image"
      backgroundImage="/backgrounds/community.png"
      :title="t.community.hero_title"
      :subtitle="t.community.hero_subtitle"
      height="100vh"
    />

    <!-- Intro -->
    <section class="section intro-section">
      <div class="container intro-layout">
        <div class="intro-label" v-reveal>Human Connection</div>
        <div class="intro-content" v-reveal>
          <h2 class="heading-xl">{{ t.community.title }}</h2>
          <p class="body-lg">{{ t.community.desc }}</p>
        </div>
      </div>
    </section>

    <!-- Impact items -->
    <section class="section impact-section">
      <div class="container">
        <div class="impact-grid">
          <div class="impact-card" v-for="(item, idx) in impactItems" :key="idx" v-reveal :style="{ transitionDelay: idx * 100 + 'ms' }">
            <span class="impact-num">{{ String(idx + 1).padStart(2, '0') }}</span>
            <h3 class="impact-title">{{ item.name }}</h3>
            <p class="impact-text">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Community image split -->
    <section class="section community-split">
      <div class="container split-layout">
        <div class="split-images" v-reveal>
          <div class="img-primary">
            <img src="/backgrounds/community.png" alt="Community" />
          </div>
          <div class="img-secondary">
            <img src="/backgrounds/our_approach.png" alt="Approach" />
          </div>
        </div>
        <div class="split-text" v-reveal>
          <div class="section-tag">{{ lang === 'en' ? 'Our Pillars' : 'Pilar Kami' }}</div>
          <h2 class="heading-lg">{{ lang === 'en' ? 'Three Ways We Support Communities' : 'Tiga Cara Kami Mendukung Komunitas' }}</h2>
          <div class="pillar-list">
            <div class="pillar-row" v-for="pillar in pillars" :key="pillar.title">
              <div class="pillar-icon-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" v-html="pillar.icon"></svg>
              </div>
              <div>
                <h4 class="pr-title">{{ pillar.title }}</h4>
                <p class="pr-text">{{ pillar.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonial -->
    <section class="section quote-section">
      <div class="container">
        <div class="quote-block" v-reveal>
          <div class="quote-mark">"</div>
          <p class="quote-text">
            {{ lang === 'en' ? 'The forest is our life. Protecting it with modern support ensures our children have a future.' : 'Hutan adalah hidup kami. Melindunginya dengan dukungan modern memastikan anak-anak kami punya masa depan.' }}
          </p>
          <div class="quote-author">
            <span class="qa-name">Indigenous Elder</span>
            <span class="qa-loc">Mamberamo Raya, Papua</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Hero from '../components/Hero.vue'

const props = defineProps({ t: Object, lang: String })

const impactItems = computed(() => {
  if (props.lang === 'id') return [
    { name: 'Patroli Bersama', text: 'Anggota komunitas terlatih melakukan patroli bersama jagawana untuk menjaga wilayah adat.' },
    { name: 'Madu Hutan', text: 'Mendukung budidaya madu hutan berkelanjutan sebagai pendapatan alternatif berbasis kearifan lokal.' },
    { name: 'Pendidikan', text: 'Program literasi lingkungan untuk sekolah-sekolah di sekitar Memberamo.' }
  ]
  return [
    { name: 'Collaborative Patrols', text: 'Trained community members patrolling alongside forest rangers to protect ancestral territories.' },
    { name: 'Forest Honey', text: 'Supporting sustainable forest honey cultivation as an alternative income based on local wisdom.' },
    { name: 'Education', text: 'Environmental literacy programs for schools around Mamberamo for a sustainable future.' }
  ]
})

const pillars = computed(() => {
  if (props.lang === 'id') return [
    { title: 'Mata Pencaharian', text: 'Produk hutan non-kayu dan usaha berbasis ekosistem.', icon: '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 6v6l4 2"/>' },
    { title: 'Infrastruktur', text: 'Air bersih, layanan kesehatan, dan komunikasi berkelanjutan.', icon: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>' },
    { title: 'Pengetahuan', text: 'Mengintegrasikan kearifan lokal ke dalam metodologi konservasi.', icon: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>' }
  ]
  return [
    { title: 'Livelihoods', text: 'Non-timber forest products and ecosystem-based enterprises.', icon: '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 6v6l4 2"/>' },
    { title: 'Infrastructure', text: 'Clean water, healthcare access, and sustainable communication networks.', icon: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>' },
    { title: 'Knowledge', text: 'Integrating indigenous wisdom into our conservation methodology.', icon: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>' }
  ]
})
</script>

<style scoped>
.page-community { background: #fff; }

/* Intro */
.intro-section { background: var(--bg-eco-neutral); }
.intro-layout { display: grid; grid-template-columns: 220px 1fr; gap: 80px; align-items: start; }
.intro-label { font-family: var(--font-primary); font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.18em; color: var(--medium-teal); padding-top: 12px; }
.heading-xl { font-family: var(--font-display); font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; color: var(--dark-charcoal); line-height: 1.15; margin-bottom: 24px; letter-spacing: -0.02em; }
.heading-lg { font-family: var(--font-display); font-size: clamp(1.8rem, 3.5vw, 2.5rem); font-weight: 800; color: var(--dark-charcoal); line-height: 1.2; margin-bottom: 32px; letter-spacing: -0.02em; }
.body-lg { font-family: var(--font-primary); font-size: 1.15rem; line-height: 1.75; color: var(--slate-gray); font-weight: 300; }

/* Impact Section */
.impact-section { background: #fff; }
.impact-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; background: var(--border-color); border-radius: 20px; overflow: hidden; }
.impact-card { background: #fff; padding: 56px 48px; transition: background 0.3s; }
.impact-card:hover { background: var(--bg-eco-neutral); }
.impact-num { display: block; font-family: var(--font-display); font-size: 0.7rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.12em; color: var(--medium-teal); margin-bottom: 32px; }
.impact-title { font-family: var(--font-display); font-size: 1.3rem; font-weight: 700; color: var(--dark-charcoal); margin-bottom: 16px; }
.impact-text { font-family: var(--font-primary); font-size: 0.95rem; line-height: 1.75; color: var(--slate-gray); }

/* Community Split */
.community-split { background: var(--bg-eco-neutral); }
.split-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }

.split-images { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.img-primary img { width: 100%; height: 480px; object-fit: cover; border-radius: 16px; }
.img-secondary { padding-top: 60px; }
.img-secondary img { width: 100%; height: 380px; object-fit: cover; border-radius: 16px; }

.pillar-list { display: flex; flex-direction: column; gap: 32px; }
.pillar-row { display: flex; align-items: flex-start; gap: 20px; }
.pillar-icon-sm { width: 40px; height: 40px; flex-shrink: 0; background: var(--bg-section-alt); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: var(--dark-teal); }
.pr-title { font-family: var(--font-display); font-size: 1rem; font-weight: 700; color: var(--dark-charcoal); margin-bottom: 6px; }
.pr-text { font-family: var(--font-primary); font-size: 0.9rem; line-height: 1.6; color: var(--slate-gray); }

/* Quote Section */
.quote-section { background: #fff; }
.quote-block { max-width: 800px; margin: 0 auto; text-align: center; padding: 80px 60px; background: var(--bg-eco-neutral); border-radius: 24px; }
.quote-mark { font-family: var(--font-display); font-size: 6rem; color: var(--medium-teal); opacity: 0.15; line-height: 0.8; margin-bottom: 24px; }
.quote-text { font-family: var(--font-display); font-size: clamp(1.3rem, 3vw, 1.8rem); font-weight: 700; color: var(--dark-charcoal); line-height: 1.5; margin-bottom: 40px; letter-spacing: -0.01em; }
.quote-author { display: flex; flex-direction: column; align-items: center; gap: 4px; }
.qa-name { font-family: var(--font-primary); font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: var(--dark-charcoal); }
.qa-loc { font-family: var(--font-primary); font-size: 0.85rem; color: var(--medium-teal); font-weight: 500; }

@media (max-width: 960px) {
  .intro-layout { grid-template-columns: 1fr; gap: 16px; }
  .intro-label { padding-top: 0; }
  .heading-xl { font-size: 1.9rem; }
  .heading-lg { font-size: 1.7rem; }
  .impact-grid { grid-template-columns: 1fr; border-radius: 16px; }
  .impact-card { padding: 40px 32px; }
  .split-layout { grid-template-columns: 1fr; gap: 48px; }
  .split-images { grid-template-columns: 1fr 1fr; gap: 12px; }
  .img-primary img { height: 280px; }
  .img-secondary { padding-top: 32px; }
  .img-secondary img { height: 240px; }
  .quote-block { padding: 56px 40px; border-radius: 16px; }
  .quote-text { font-size: 1.3rem; }
}

@media (max-width: 640px) {
  .intro-layout { gap: 12px; }
  .heading-xl { font-size: 1.55rem; }
  .heading-lg { font-size: 1.4rem; }
  .body-lg { font-size: 0.95rem; }
  .impact-card { padding: 28px 20px; }
  .impact-num { margin-bottom: 20px; }
  .impact-title { font-size: 1.1rem; }
  .impact-text { font-size: 0.88rem; }
  .split-images { grid-template-columns: 1fr; }
  .img-secondary { padding-top: 0; }
  .img-primary img, .img-secondary img { height: 220px; }
  .pillar-list { gap: 24px; }
  .pr-title { font-size: 0.95rem; }
  .pr-text { font-size: 0.85rem; }
  .quote-block { padding: 40px 24px; border-radius: 14px; }
  .quote-mark { font-size: 4rem; }
  .quote-text { font-size: 1.1rem; }
  .qa-name, .qa-loc { font-size: 0.8rem; }
}
</style>
