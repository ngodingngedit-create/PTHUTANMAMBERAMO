<template>
  <section class="ready-to-partner">
    <div class="container">
      <div class="cta-glass-card" v-reveal>
        <div class="cta-content">
          <div class="section-tag">{{ lang === 'en' ? 'Get Involved' : 'Mari Berkontribusi' }}</div>
          <h2 class="cta-title">{{ lang === 'en' ? 'Ready to safeguard Papua\'s future?' : 'Siap menjaga masa depan Papua?' }}</h2>
          <p class="cta-text">
            {{ lang === 'en' ? 'Connect with our team to discuss partnerships, carbon investments, or technical inquiries.' : 'Hubungi tim kami untuk mendiskusikan kemitraan, investasi karbon, atau pertanyaan teknis.' }}
          </p>
          <div class="cta-actions">
            <router-link to="/contact" class="btn-primary">
              {{ lang === 'en' ? 'Contact Us' : 'Hubungi Kami' }}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </router-link>
          </div>
        </div>
        <div class="cta-visual">
          <div class="abstract-nodes">
            <div class="node n1"></div>
            <div class="node n2"></div>
            <div class="node n3"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({ lang: String })
</script>

<style scoped>
.ready-to-partner {
  padding: 120px 0;
  background: white;
}

.cta-glass-card {
  background: var(--dark-charcoal);
  border-radius: 40px;
  padding: 80px;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 60px;
  align-items: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 40px 100px -20px rgba(26,107,107,0.3);
}

.cta-content { position: relative; z-index: 2; }

.section-tag {
  background: rgba(91,184,184,0.15);
  color: var(--light-teal);
  border: 1px solid rgba(91,184,184,0.3);
}

.cta-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: white;
  line-height: 1.2;
  margin-bottom: 24px;
}

.cta-text {
  font-size: 1.1rem;
  color: rgba(255,255,255,0.7);
  max-width: 500px;
  margin-bottom: 40px;
  line-height: 1.8;
}

.cta-actions { display: flex; gap: 20px; }

.btn-primary {
  padding: 16px 40px;
  font-size: 1rem;
  background: var(--light-teal);
}

/* Background Visuals */
.cta-visual { position: relative; height: 300px; }
.abstract-nodes {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
}
.node {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(91,184,184,0.3);
  background: radial-gradient(circle, rgba(91,184,184,0.1) 0%, transparent 70%);
}
.n1 { width: 300px; height: 300px; animation: orbit 20s linear infinite; }
.n2 { width: 450px; height: 450px; animation: orbit 30s linear reverse infinite; opacity: 0.5; }
.n3 { width: 150px; height: 150px; background: rgba(91,184,184,0.2); filter: blur(40px); }

@keyframes orbit {
  from { transform: rotate(0deg) scale(1); }
  to { transform: rotate(360deg) scale(1.1); }
}

@media (max-width: 960px) {
  .cta-glass-card { grid-template-columns: 1fr; padding: 60px 40px; text-align: center; }
  .cta-text { margin: 0 auto 40px; }
  .cta-actions { justify-content: center; }
  .cta-visual { display: none; }
}
</style>
