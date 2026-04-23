<template>
  <div class="page-forestry">
    <Hero 
      :t="t"
      :lang="lang"
      backgroundType="image"
      backgroundImage="/backgrounds/forestry.png"
      :title="t.forestry.hero_title"
      :subtitle="t.forestry.hero_subtitle"
      height="100vh"
    />

    <!-- Intro statement -->
    <section class="section intro-section">
      <div class="container intro-layout">
        <div class="intro-label" v-reveal>Conservation</div>
        <div class="intro-content" v-reveal>
          <h2 class="heading-xl">{{ t.forestry.title }}</h2>
          <p class="body-lg">{{ t.forestry.desc }}</p>
        </div>
      </div>
    </section>

    <!-- Split: Patrol -->
    <section class="section patrol-section">
      <div class="container patrol-layout">
        <div class="patrol-text" v-reveal>
          <div class="section-tag">{{ lang === 'en' ? 'Active Protection' : 'Proteksi Aktif' }}</div>
          <h2 class="heading-lg">{{ t.forestry_activities.patrol_title }}</h2>
          <p class="body-md">{{ t.forestry_activities.patrol_desc }}</p>
          <div class="activity-tags">
            <span class="a-tag">{{ lang === 'en' ? 'Joint Patrols' : 'Patroli Bersama' }}</span>
            <span class="a-tag">{{ lang === 'en' ? 'Spatial Intelligence' : 'Intelijen Spasial' }}</span>
            <span class="a-tag">{{ lang === 'en' ? 'Early Warning' : 'Peringatan Dini' }}</span>
          </div>
        </div>
        <div class="patrol-image" v-reveal>
          <img src="/backgrounds/patrol.png" alt="Forest Patrol" />
        </div>
      </div>
    </section>

    <!-- Biodiversity strip -->
    <section class="section bio-section">
      <div class="container">
        <div class="bio-header" v-reveal>
          <h2 class="heading-md">{{ lang === 'en' ? 'A Living Ecosystem' : 'Ekosistem yang Hidup' }}</h2>
          <p class="body-md max-600">{{ lang === 'en' ? 'Mamberamo hosts thousands of endemic species. Our systematic monitoring ensures their habitats remain undisturbed.' : 'Mamberamo adalah rumah bagi ribuan spesies endemik. Pemantauan sistematis kami memastikan habitat mereka tetap terjaga.' }}</p>
        </div>
        <div class="bio-split" v-reveal>
          <div class="bio-image-main">
            <img src="/backgrounds/m_biodiversity.png" alt="Biodiversity" />
            <div class="bio-badge">
              <span class="b-num">98%</span>
              <span class="b-text">{{ lang === 'en' ? 'Forest Intactness' : 'Keutuhan Hutan' }}</span>
            </div>
          </div>
          <div class="bio-facts">
            <div class="bio-fact" v-for="fact in bioFacts" :key="fact.label">
              <span class="fact-val">{{ fact.val }}</span>
              <span class="fact-label">{{ fact.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Strip (replaces editorial CTA) -->
    <section class="section cta-strip-section">
      <div class="container">
        <div class="cta-strip" v-reveal>
          <div class="cta-left">
            <p class="cta-eyebrow">{{ lang === 'en' ? 'Learn more' : 'Pelajari lebih lanjut' }}</p>
            <h2 class="cta-heading">{{ lang === 'en' ? 'Explore the Data Behind Our Forestry Work' : 'Jelajahi Data di Balik Pekerjaan Kehutanan Kami' }}</h2>
          </div>
          <router-link to="/contact" class="btn-primary cta-btn">
            {{ lang === 'en' ? 'Get in Touch' : 'Hubungi Kami' }}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Hero from '../components/Hero.vue'

const props = defineProps({ t: Object, lang: String })

const bioFacts = computed(() => {
  if (props.lang === 'id') return [
    { val: '700+', label: 'Spesies Burung' },
    { val: '400+', label: 'Spesies Ikan' },
    { val: '2,000+', label: 'Spesies Tanaman' },
    { val: '50+', label: 'Spesies Mamalia' }
  ]
  return [
    { val: '700+', label: 'Bird Species' },
    { val: '400+', label: 'Fish Species' },
    { val: '2,000+', label: 'Plant Species' },
    { val: '50+', label: 'Mammal Species' }
  ]
})
</script>

<style scoped>
.page-forestry { background: #fff; }

/* Intro */
.intro-section { background: var(--bg-eco-neutral); }
.intro-layout { display: grid; grid-template-columns: 220px 1fr; gap: 80px; align-items: start; }
.intro-label { font-family: var(--font-primary); font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.18em; color: var(--medium-teal); padding-top: 12px; }
.heading-xl { font-family: var(--font-display); font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; color: var(--dark-charcoal); line-height: 1.15; margin-bottom: 24px; letter-spacing: -0.02em; }
.heading-lg { font-family: var(--font-display); font-size: clamp(1.8rem, 3.5vw, 2.5rem); font-weight: 800; color: var(--dark-charcoal); line-height: 1.2; margin-bottom: 20px; letter-spacing: -0.02em; }
.heading-md { font-family: var(--font-display); font-size: clamp(1.5rem, 3vw, 2rem); font-weight: 800; color: var(--dark-charcoal); margin-bottom: 16px; letter-spacing: -0.02em; }
.body-lg { font-family: var(--font-primary); font-size: 1.15rem; line-height: 1.75; color: var(--slate-gray); font-weight: 300; }
.body-md { font-family: var(--font-primary); font-size: 1rem; line-height: 1.8; color: var(--slate-gray); margin-bottom: 32px; }
.max-600 { max-width: 600px; }

/* Patrol Section */
.patrol-section { background: #fff; }
.patrol-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
.patrol-image img { width: 100%; height: 500px; object-fit: cover; border-radius: 16px; }

.activity-tags { display: flex; flex-wrap: wrap; gap: 10px; }
.a-tag { font-family: var(--font-primary); font-size: 0.8rem; font-weight: 600; color: var(--dark-teal); background: var(--bg-section-alt); padding: 8px 18px; border-radius: 6px; }

/* Bio Section */
.bio-section { background: var(--bg-eco-neutral); }
.bio-header { margin-bottom: 56px; }
.bio-split { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 60px; align-items: center; }

.bio-image-main { position: relative; }
.bio-image-main img { width: 100%; height: 480px; object-fit: cover; border-radius: 16px; }
.bio-badge {
  position: absolute; bottom: 28px; right: 28px;
  background: var(--dark-teal); color: white;
  padding: 18px 24px; border-radius: 12px; text-align: center;
}
.b-num { display: block; font-family: var(--font-display); font-size: 2rem; font-weight: 800; line-height: 1; }
.b-text { display: block; font-size: 0.75rem; font-weight: 500; opacity: 0.75; margin-top: 4px; }

.bio-facts { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; background: var(--border-color); border-radius: 16px; overflow: hidden; }
.bio-fact { background: #fff; padding: 36px 28px; }
.fact-val { display: block; font-family: var(--font-display); font-size: 2rem; font-weight: 800; color: var(--dark-teal); line-height: 1; margin-bottom: 8px; }
.fact-label { display: block; font-family: var(--font-primary); font-size: 0.82rem; font-weight: 600; color: var(--slate-gray); text-transform: uppercase; letter-spacing: 0.08em; }

/* CTA Strip */
.cta-strip-section { background: #fff; }
.cta-strip {
  display: flex; align-items: center; justify-content: space-between; gap: 40px;
  padding: 56px; background: var(--dark-teal); border-radius: 20px;
}
.cta-eyebrow { font-family: var(--font-primary); font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; color: var(--light-teal); margin-bottom: 12px; }
.cta-heading { font-family: var(--font-display); font-size: clamp(1.3rem, 2.5vw, 1.8rem); font-weight: 700; color: white; line-height: 1.3; max-width: 520px; }
.cta-btn { background: white; color: var(--dark-teal); box-shadow: none; white-space: nowrap; flex-shrink: 0; }
.cta-btn:hover { background: var(--bg-eco-neutral); transform: translateY(-2px); }

@media (max-width: 960px) {
  .intro-layout { grid-template-columns: 1fr; gap: 16px; }
  .intro-label { padding-top: 0; }
  .heading-xl { font-size: 1.9rem; }
  .heading-lg { font-size: 1.7rem; }
  .patrol-layout { grid-template-columns: 1fr; gap: 40px; }
  .patrol-image { order: -1; }
  .patrol-image img { height: 320px; }
  .bio-split { grid-template-columns: 1fr; gap: 40px; }
  .bio-image-main img { height: 360px; }
  .bio-facts { grid-template-columns: repeat(4, 1fr); }
  .bio-fact { padding: 24px 20px; }
  .bio-badge { padding: 14px 18px; bottom: 20px; right: 20px; }
  .b-num { font-size: 1.6rem; }
  .cta-strip { flex-direction: column; align-items: flex-start; padding: 40px 36px; gap: 32px; }
  .cta-heading { font-size: 1.4rem; max-width: 100%; }
}

@media (max-width: 640px) {
  .intro-layout { gap: 12px; }
  .heading-xl { font-size: 1.55rem; }
  .heading-lg { font-size: 1.4rem; }
  .heading-md { font-size: 1.3rem; }
  .body-lg { font-size: 0.95rem; }
  .body-md { font-size: 0.9rem; }
  .patrol-image img { height: 240px; }
  .activity-tags { gap: 8px; }
  .a-tag { font-size: 0.75rem; padding: 6px 14px; }
  .bio-image-main img { height: 260px; }
  .bio-facts { grid-template-columns: 1fr 1fr; }
  .fact-val { font-size: 1.6rem; }
  .cta-strip { padding: 32px 24px; border-radius: 14px; }
  .cta-heading { font-size: 1.2rem; }
  .cta-btn { width: 100%; justify-content: center; }
}
</style>
