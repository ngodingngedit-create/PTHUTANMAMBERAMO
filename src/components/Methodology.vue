<template>
  <section id="methodology" class="section methodology">
    <div class="container">
      <div class="section-header">
        <div class="section-tag">{{ t.methodology.section_tag }}</div>
        <h2 class="section-title">{{ t.methodology.title }}</h2>
        <p class="section-subtitle">{{ t.methodology.subtitle }}</p>
      </div>

      <!-- <div class="method-grid">
        <div
          v-for="(m, i) in methods"
          :key="m.code"
          class="method-card card"
        >
          <div class="method-top">
            <div class="method-code">{{ m.code }}</div>
            <div class="method-icon">
              <component :is="'svg'" v-html="m.icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"></component>
            </div>
          </div>
          <div class="method-name">{{ m.name }}</div>
          <div class="method-full">{{ m.full }}</div>
          <div class="method-divider"></div>
          <p class="method-desc">{{ m.desc }}</p>
        </div>
      </div> -->

      <!-- Verra Banner -->
      <div class="verra-banner">
        <!-- <div class="verra-logo">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <polyline points="9 12 11 14 15 10"/>
          </svg>
        </div> -->
        <div class="verra-content">
          <!-- <div class="verra-text">
            <span class="verra-title">Verra Verified Carbon Standard (VCS)</span>
            <span class="verra-sub">Seluruh kredit karbon yang dihasilkan diverifikasi oleh standar Verra yang diakui secara global.</span>
          </div> -->
          <!-- <div class="verra-action">
            <a href="https://verra.org" target="_blank" class="btn-secondary verra-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              verra.org
            </a>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({ t: Object })

const methods = computed(() => [
  {
    code: props.t.methodology.m1_code,
    name: props.t.methodology.m1_name,
    full: props.t.methodology.m1_full,
    desc: props.t.methodology.m1_desc,
    icon: '<path d="M2 22 L22 22 M3 17 L3 9 L12 3 L21 9 L21 17"/><path d="M9 22 L9 15 L15 15 L15 22"/><path d="M7 12 L12 8 L17 12"/>',
  },
  {
    code: props.t.methodology.m2_code,
    name: props.t.methodology.m2_name,
    full: props.t.methodology.m2_full,
    desc: props.t.methodology.m2_desc,
    icon: '<path d="M3 17l4-8 4 4 3-6 4 8"/><path d="M2 20h20"/>',
  },
  {
    code: props.t.methodology.m3_code,
    name: props.t.methodology.m3_name,
    full: props.t.methodology.m3_full,
    desc: props.t.methodology.m3_desc,
    icon: '<path d="M12 22V12M12 12C12 8 8 6 4 7M12 12C12 8 16 6 20 7"/><path d="M5 19c2-2 4-3 7-3s5 1 7 3"/>',
  },
  {
    code: props.t.methodology.m4_code,
    name: props.t.methodology.m4_name,
    full: props.t.methodology.m4_full,
    desc: props.t.methodology.m4_desc,
    icon: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>',
  },
])
</script>

<style scoped>
.methodology {
  background: white;
}

.section-header {
  text-align: center;
  margin-bottom: 56px;
}
.section-header .section-subtitle { margin: 14px auto 0; }

.method-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 48px;
}

.method-card {
  padding: 28px;
  background: white;
  border: 1px solid rgba(43, 144, 144, 0.12);
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
}

.method-card:hover {
  border-color: var(--medium-teal);
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(26, 107, 107, 0.08);
}

.method-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
}

.method-code {
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  background: var(--teal-10);
  color: var(--dark-teal);
  padding: 4px 10px;
  border-radius: 6px;
  border: 1px solid rgba(43, 144, 144, 0.15);
}

.method-icon {
  width: 42px;
  height: 42px;
  background: var(--teal-5);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--medium-teal);
  border: 1px solid rgba(43, 144, 144, 0.12);
}

.method-name {
  font-family: 'Poppins', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--dark-charcoal);
  margin-bottom: 4px;
}

.method-full {
  font-size: 0.72rem;
  color: var(--medium-teal);
  font-weight: 600;
  margin-bottom: 16px;
  font-style: italic;
}

.method-divider {
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, var(--medium-teal), var(--light-teal));
  border-radius: 1px;
  margin-bottom: 16px;
}

.method-desc {
  font-size: 0.85rem;
  color: var(--slate-gray);
  line-height: 1.7;
  flex: 1;
}

/* Verra Banner */
.verra-banner {
  display: flex;
  align-items: center;
  gap: 24px;
  background: var(--bg-section-alt);
  border: 1px solid rgba(43, 144, 144, 0.15);
  border-radius: 20px;
  padding: 24px 32px;
}

.verra-logo {
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, var(--dark-teal), var(--medium-teal));
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 4px 15px rgba(26, 107, 107, 0.15);
}

.verra-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.verra-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.verra-title {
  font-weight: 700;
  font-size: 1rem;
  color: var(--dark-charcoal);
}

.verra-sub {
  font-size: 0.85rem;
  color: var(--slate-gray);
}

.verra-btn {
  font-size: 0.82rem;
  padding: 10px 20px;
  white-space: nowrap;
}

@media (max-width: 1100px) {
  .method-grid { grid-template-columns: repeat(2, 1fr); }
  .verra-content { flex-direction: column; align-items: flex-start; gap: 16px; }
}

@media (max-width: 650px) {
  .method-grid { grid-template-columns: 1fr; }
  .verra-banner { flex-direction: column; align-items: flex-start; padding: 24px; }
}
</style>
