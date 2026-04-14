<!-- <template>
  <section id="partnership" class="section partnership">
    <div class="container">
      <div class="section-header">
        <div class="section-tag">{{ t.partnership.section_tag }}</div>
        <h2 class="section-title">{{ t.partnership.title }}</h2>
        <p class="section-subtitle">{{ t.partnership.subtitle }}</p>
      </div>

      <!-- Partners Grid -->
      <div class="partners-grid">
        <!-- EKI -->
        <a href="https://enkingint.org/" target="_blank" class="partner-card card">
          <div class="partner-icon eki">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg>
          </div>
          <div class="partner-label">{{ t.partnership.p1_name }}</div>
          <div class="partner-role">{{ t.partnership.p1_role }}</div>
          <p class="partner-desc">{{ t.partnership.p1_desc }}</p>
          <div class="partner-link">
            enkingint.org
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
          </div>
        </a>

        <!-- Pertamina -->
        <a href="https://www.pertamina.com/id" target="_blank" class="partner-card card">
          <div class="partner-icon pertamina">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          </div>
          <div class="partner-label">{{ t.partnership.p2_name }}</div>
          <div class="partner-role">{{ t.partnership.p2_role }}</div>
          <p class="partner-desc">{{ t.partnership.p2_desc }}</p>
          <div class="partner-link">
            pertamina.com
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
          </div>
        </a>

        <!-- 3 Sahabat -->
        <a href="https://3sahabatlingkungan.com/" target="_blank" class="partner-card card">
          <div class="partner-icon sahabat">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
          </div>
          <div class="partner-label">{{ t.partnership.p3_name }}</div>
          <div class="partner-role">{{ t.partnership.p3_role }}</div>
          <p class="partner-desc">{{ t.partnership.p3_desc }}</p>
          <div class="partner-link">
            3sahabatlingkungan.com
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
          </div>
        </a>
      </div>

      <!-- Roadmap -->
      <div class="roadmap">
        <h3 class="roadmap-title">
          <span class="gradient-text">Strategic Roadmap</span>
        </h3>
        <div class="roadmap-steps">
          <div class="roadmap-step" v-for="(step, i) in roadmapSteps" :key="i">
            <div class="step-num">{{ String(i+1).padStart(2,'0') }}</div>
            <div class="step-line" v-if="i < roadmapSteps.length - 1"></div>
            <div class="step-content">
              <div class="step-phase">{{ step.phase }}</div>
              <div class="step-title">{{ step.title }}</div>
              <div class="step-partner">{{ step.partner }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({ t: Object, lang: String })

const roadmapSteps = computed(() => props.lang === 'en' ? [
  { phase: 'Phase 1', title: 'Technical Preparation & MRV', partner: '3 Sahabat Lingkungan' },
  { phase: 'Phase 2', title: 'Capitalization & Investment', partner: 'EKI Energy Services + Pertamina NRE' },
  { phase: 'Phase 3a', title: 'Domestic Carbon Sales', partner: 'Pertamina (IDX Carbon)' },
  { phase: 'Phase 3b', title: 'International Carbon Sales', partner: 'EKI Global Network' },
] : [
  { phase: 'Fase 1', title: 'Persiapan Teknis & Registrasi MRV', partner: '3 Sahabat Lingkungan' },
  { phase: 'Fase 2', title: 'Kapitalisasi & Investasi', partner: 'EKI Energy Services + Pertamina NRE' },
  { phase: 'Fase 3a', title: 'Penjualan Karbon Domestik', partner: 'Pertamina (IDX Carbon)' },
  { phase: 'Fase 3b', title: 'Penjualan Karbon Internasional', partner: 'EKI Global Network' },
])
</script>

<style scoped>
.partnership {
  background: white;
}

.section-header {
  text-align: center;
  margin-bottom: 56px;
}
.section-header .section-subtitle { margin: 14px auto 0; }

.partners-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 64px;
}

.partner-card {
  padding: 32px;
  text-decoration: none;
  background: white;
  border: 1px solid rgba(43, 144, 144, 0.15);
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
  color: inherit;
}

.partner-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(26, 107, 107, 0.1);
}

.partner-card:hover .partner-link {
  color: var(--dark-teal);
}

/* Icons */
.partner-icon {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  border: 1.5px solid transparent;
}

.eki {
  background: var(--teal-5);
  border-color: rgba(43, 144, 144, 0.2);
  color: var(--dark-teal);
}

.pertamina {
  background: rgba(232, 148, 58, 0.05);
  border-color: rgba(232, 148, 58, 0.2);
  color: #E8943A;
}

.sahabat {
  background: rgba(76, 175, 141, 0.05);
  border-color: rgba(76, 175, 141, 0.2);
  color: #14453D;
}

.partner-label {
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--dark-charcoal);
  margin-bottom: 6px;
}

.partner-role {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--medium-teal);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 16px;
}

.partner-desc {
  font-size: 0.88rem;
  color: var(--slate-gray);
  line-height: 1.75;
  flex: 1;
  margin-bottom: 24px;
}

.partner-link {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--muted);
  transition: color 0.2s;
}

/* Roadmap */
.roadmap {
  background: var(--bg-section-alt);
  border: 1px solid rgba(43, 144, 144, 0.15);
  border-radius: 24px;
  padding: 48px;
}

.roadmap-title {
  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
}

.roadmap-steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  position: relative;
}

.roadmap-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
}

.step-num {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--dark-teal), var(--medium-teal));
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  font-size: 0.8rem;
  font-weight: 800;
  color: white;
  margin-bottom: 16px;
  position: relative;
  z-index: 2;
  box-shadow: 0 4px 15px rgba(26, 107, 107, 0.25);
}

.step-line {
  position: absolute;
  top: 24px;
  left: calc(50% + 24px);
  right: calc(-50% + 24px);
  height: 2px;
  background: rgba(43, 144, 144, 0.15);
  z-index: 1;
}

.step-phase {
  font-size: 0.7rem;
  font-weight: 800;
  color: var(--medium-teal);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 6px;
}

.step-title {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--dark-charcoal);
  margin-bottom: 6px;
  line-height: 1.4;
  padding: 0 10px;
}

.step-partner {
  font-size: 0.78rem;
  color: var(--slate-gray);
  line-height: 1.5;
}

@media (max-width: 1024px) {
  .partners-grid { grid-template-columns: repeat(2, 1fr); }
  .roadmap-steps { grid-template-columns: repeat(2, 1fr); gap: 32px; }
  .step-line { display: none; }
}

@media (max-width: 650px) {
  .partners-grid { grid-template-columns: 1fr; }
  .roadmap-steps { grid-template-columns: 1fr; }
  .roadmap { padding: 32px; }
}
</style> -->
