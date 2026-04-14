<template>
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
        <!-- <div class="partner-card card">
          <a href="https://enkingint.org/" target="_blank">
            <div class="partner-icon eki">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>
              </svg>
            </div>
            <div class="partner-label">{{ t.partnership.p1_name }}</div>
            <div class="partner-role">{{ t.partnership.p1_role }}</div>
            <p class="partner-desc">{{ t.partnership.p1_desc }}</p>
            <div class="partner-link">
              enkingint.org
            </div>
          </a>
        </div> -->

        <!-- Pertamina -->
        <!-- <div class="partner-card card">
          <a href="https://www.pertamina.com/id" target="_blank">
            <div class="partner-icon pertamina">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div class="partner-label">{{ t.partnership.p2_name }}</div>
            <div class="partner-role">{{ t.partnership.p2_role }}</div>
            <p class="partner-desc">{{ t.partnership.p2_desc }}</p>
            <div class="partner-link">
              pertamina.com
            </div>
          </a>
        </div> -->

        <!-- 3 Sahabat -->
        <!-- <div class="partner-card card">
          <a href="https://3sahabatlingkungan.com/" target="_blank">
            <div class="partner-icon sahabat">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <polyline points="9 12 11 14 15 10"/>
              </svg>
            </div>
            <div class="partner-label">{{ t.partnership.p3_name }}</div>
            <div class="partner-role">{{ t.partnership.p3_role }}</div>
            <p class="partner-desc">{{ t.partnership.p3_desc }}</p>
            <div class="partner-link">
              3sahabatlingkungan.com
            </div>
          </a>
        </div> -->

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

const props = defineProps({
  t: Object,
  lang: String
})

const roadmapSteps = computed(() =>
  props.lang === 'en'
    ? [
        { phase: 'Phase 1', title: 'Technical Preparation & MRV', partner: '3 Sahabat Lingkungan' },
        { phase: 'Phase 2', title: 'Capitalization & Investment', partner: 'EKI Energy Services + Pertamina NRE' },
        { phase: 'Phase 3a', title: 'Domestic Carbon Sales', partner: 'Pertamina (IDX Carbon)' },
        { phase: 'Phase 3b', title: 'International Carbon Sales', partner: 'EKI Global Network' },
      ]
    : [
        { phase: 'Fase 1', title: 'Persiapan Teknis & Registrasi MRV', partner: '3 Sahabat Lingkungan' },
        { phase: 'Fase 2', title: 'Kapitalisasi & Investasi', partner: 'EKI Energy Services + Pertamina NRE' },
        { phase: 'Fase 3a', title: 'Penjualan Karbon Domestik', partner: 'Pertamina (IDX Carbon)' },
        { phase: 'Fase 3b', title: 'Penjualan Karbon Internasional', partner: 'EKI Global Network' },
      ]
)
</script>

<style scoped>
.partnership {
  background: white;
}
</style>