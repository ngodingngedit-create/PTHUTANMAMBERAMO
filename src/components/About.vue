<template>
  <section id="about" class="section about">
    <div class="container">
      <div class="about-grid">
        <div class="about-text">
          <div class="section-tag">{{ t.about.section_tag }}</div>
          <h2 class="section-title">{{ t.about.title }}</h2>
          <div class="divider"></div>
          <p class="about-desc">{{ t.about.description }}</p>
          <div class="about-cards">
            <div class="about-info-card" v-for="item in infoItems" :key="item.title">
              <div class="info-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" v-html="item.icon"></svg>
              </div>
              <div>
                <div class="info-title">{{ item.title }}</div>
                <div class="info-text">{{ item.text }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="about-visual">
          <div class="visual-map">
            <svg viewBox="0 0 400 400" fill="none" class="map-svg">
              <circle cx="200" cy="200" r="190" fill="rgba(43,144,144,0.05)" stroke="rgba(43,144,144,0.15)" stroke-width="1"/>
              <circle cx="200" cy="200" r="130" fill="rgba(43,144,144,0.04)" stroke="rgba(43,144,144,0.10)" stroke-width="1"/>
              <path d="M120 280 L120 220 L95 220 L140 160 L105 160 L150 100 L200 160 L165 160 L210 220 L175 220 L175 280Z" fill="url(#treeL1)" opacity="0.85"/>
              <path d="M230 280 L230 230 L208 230 L248 175 L218 175 L255 120 L295 175 L265 175 L305 230 L275 230 L275 280Z" fill="url(#treeL2)" opacity="0.65"/>
              <circle cx="200" cy="200" r="9" fill="#2B9090" opacity="0.9">
                <animate attributeName="r" values="9;16;9" dur="2.5s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.9;0.15;0.9" dur="2.5s" repeatCount="indefinite"/>
              </circle>
              <circle cx="200" cy="200" r="4" fill="#1A6B6B"/>
              <line x1="60" y1="200" x2="340" y2="200" stroke="rgba(43,144,144,0.08)" stroke-width="1"/>
              <line x1="200" y1="60" x2="200" y2="340" stroke="rgba(43,144,144,0.08)" stroke-width="1"/>
              <path d="M60 80 L60 60 L80 60" stroke="rgba(43,144,144,0.4)" stroke-width="2" stroke-linecap="round"/>
              <path d="M320 80 L320 60 L300 60" stroke="rgba(43,144,144,0.4)" stroke-width="2" stroke-linecap="round"/>
              <path d="M60 320 L60 340 L80 340" stroke="rgba(43,144,144,0.4)" stroke-width="2" stroke-linecap="round"/>
              <path d="M320 320 L320 340 L300 340" stroke="rgba(43,144,144,0.4)" stroke-width="2" stroke-linecap="round"/>
              <defs>
                <linearGradient id="treeL1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#5BB8B8"/>
                  <stop offset="100%" stop-color="#1A6B6B"/>
                </linearGradient>
                <linearGradient id="treeL2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#2B9090"/>
                  <stop offset="100%" stop-color="#14453D"/>
                </linearGradient>
              </defs>
            </svg>
            <div class="map-label">
              <span class="label-dot"></span>Memberamo Raya, Papua
            </div>
          </div>
          <div class="floating-card card-ha">
            <div class="fc-value">300.000 Ha</div>
            <div class="fc-label">Total Area</div>
          </div>
          <div class="floating-card card-coord">
            <div class="fc-value">2°30'S 138°45'E</div>
            <div class="fc-label">Koordinat</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({ t: Object })
const infoItems = computed(() => [
  { title: props.t.about.vision_title, text: props.t.about.vision_text, icon: '<circle cx="12" cy="12" r="10"/><polyline points="12 8 12 12 14 14"/>' },
  { title: props.t.about.mission_title, text: props.t.about.mission_text, icon: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>' },
  { title: props.t.about.location_title, text: props.t.about.location_text, icon: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>' },
])
</script>

<style scoped>
.about { background: #F4FAFA; }

.about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }

.about-desc { font-size: 0.97rem; color: #5A7070; line-height: 1.9; margin-bottom: 32px; }

.about-cards { display: flex; flex-direction: column; gap: 14px; }

.about-info-card {
  display: flex; align-items: flex-start; gap: 14px;
  padding: 18px;
  background: white;
  border: 1px solid rgba(43,144,144,0.12);
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(26,107,107,0.06);
  transition: all 0.25s;
}
.about-info-card:hover {
  border-color: rgba(43,144,144,0.3);
  transform: translateX(4px);
  box-shadow: 0 6px 24px rgba(26,107,107,0.1);
}

.info-icon {
  width: 40px; height: 40px;
  background: rgba(43,144,144,0.1);
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  color: #2B9090; flex-shrink: 0;
}
.info-title { font-weight: 700; font-size: 0.875rem; color: #1A2A2A; margin-bottom: 4px; }
.info-text { font-size: 0.82rem; color: #5A7070; line-height: 1.6; }

/* Visual */
.about-visual { position: relative; }
.visual-map {
  background: white;
  border: 1px solid rgba(43,144,144,0.15);
  border-radius: 24px;
  padding: 20px;
  box-shadow: 0 4px 30px rgba(26,107,107,0.08);
  position: relative;
}
.map-svg { width: 100%; height: auto; display: block; }
.map-label {
  position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%);
  background: white;
  border: 1px solid rgba(43,144,144,0.2);
  border-radius: 50px;
  padding: 6px 16px;
  font-size: 0.75rem; color: #2B9090; font-weight: 600;
  white-space: nowrap; display: flex; align-items: center; gap: 6px;
  box-shadow: 0 2px 12px rgba(26,107,107,0.1);
}
.label-dot { width: 6px; height: 6px; border-radius: 50%; background: #2B9090; animation: pulse 2s infinite; }

.floating-card {
  position: absolute;
  background: white;
  border: 1px solid rgba(43,144,144,0.2);
  border-radius: 14px;
  padding: 12px 18px;
  box-shadow: 0 8px 28px rgba(26,107,107,0.12);
}
.card-ha { top: -16px; right: -16px; }
.card-coord { left: -16px; bottom: 60px; }
.fc-value { font-family: 'Poppins', sans-serif; font-size: 0.93rem; font-weight: 700; color: #2B9090; }
.fc-label { font-size: 0.68rem; color: #8FA8A8; margin-top: 2px; }

@media (max-width: 900px) { .about-grid { grid-template-columns: 1fr; gap: 40px; } .about-visual { display: none; } }
</style>
