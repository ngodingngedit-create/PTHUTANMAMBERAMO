<template>
  <section id="revenue" class="section revenue">
    <div class="container">
      <div class="section-header">
        <div class="section-tag">{{ t.revenue.section_tag }}</div>
        <h2 class="section-title">{{ t.revenue.title }}</h2>
        <p class="section-subtitle">{{ t.revenue.subtitle }}</p>
      </div>

      <!-- Toggle: IDR / USD -->
      <div class="currency-toggle">
        <button @click="currency = 'idr'" :class="['cur-btn', { active: currency === 'idr' }]">
          🇮🇩 IDR (Rp)
        </button>
        <button @click="currency = 'usd'" :class="['cur-btn', { active: currency === 'usd' }]">
          🌐 USD ($)
        </button>
      </div>

      <!-- Revenue Table -->
      <div class="rev-matrix">
        <!-- Header -->
        <div class="rev-header">
          <div class="rev-cell rev-empty"></div>
          <div class="rev-cell rev-col-header">
            <div class="col-icon domestic">🏛️</div>
            <div class="col-title">{{ t.revenue.domestic_label }}</div>
            <div class="col-price">{{ currency === 'idr' ? t.revenue.domestic_price_idr : t.revenue.domestic_price_usd }}</div>
          </div>
          <div class="rev-cell rev-col-header highlighted">
            <div class="col-icon intl">🌍</div>
            <div class="col-title">{{ t.revenue.intl_label }}</div>
            <div class="col-price">{{ currency === 'idr' ? t.revenue.intl_price_idr : t.revenue.intl_price_usd }}</div>
          </div>
        </div>

        <!-- Conservative Row -->
        <div class="rev-row">
          <div class="rev-cell rev-row-header">
            <div class="row-scenario">{{ t.revenue.conservative }}</div>
            <div class="row-volume">559.676 tCO₂e/yr</div>
          </div>
          <div class="rev-cell rev-value">
            <Transition name="flip" mode="out-in">
              <span :key="currency + 'cd'">{{ currency === 'idr' ? t.revenue.c_dom_idr : t.revenue.c_dom_usd }}</span>
            </Transition>
          </div>
          <div class="rev-cell rev-value highlighted">
            <Transition name="flip" mode="out-in">
              <span :key="currency + 'ci'">{{ currency === 'idr' ? t.revenue.c_int_idr : t.revenue.c_int_usd }}</span>
            </Transition>
          </div>
        </div>

        <!-- Aggressive Row -->
        <div class="rev-row">
          <div class="rev-cell rev-row-header">
            <div class="row-scenario agr">{{ t.revenue.aggressive }}</div>
            <div class="row-volume">883.895 tCO₂e/yr</div>
          </div>
          <div class="rev-cell rev-value">
            <Transition name="flip" mode="out-in">
              <span :key="currency + 'ad'">{{ currency === 'idr' ? t.revenue.a_dom_idr : t.revenue.a_dom_usd }}</span>
            </Transition>
          </div>
          <div class="rev-cell rev-value highlighted best">
            <div class="best-badge">★ Best Case</div>
            <Transition name="flip" mode="out-in">
              <span :key="currency + 'ai'" class="best-val">{{ currency === 'idr' ? t.revenue.a_int_idr : t.revenue.a_int_usd }}</span>
            </Transition>
          </div>
        </div>
      </div>

      <!-- ROI Summary Cards -->
      <div class="roi-grid">
        <div class="roi-card">
          <div class="roi-icon">💰</div>
          <div class="roi-num gradient-text">$30–40M</div>
          <div class="roi-label">{{ lang === 'en' ? 'Required Investment (10yr)' : 'Investasi Diperlukan (10 thn)' }}</div>
        </div>
        <div class="roi-card featured">
          <div class="roi-icon">📈</div>
          <div class="roi-num gradient-text">$59–94M</div>
          <div class="roi-label">{{ lang === 'en' ? 'Total Sales Potential (10yr)' : 'Potensi Penjualan Total (10 thn)' }}</div>
        </div>
        <div class="roi-card">
          <div class="roi-icon">⚡</div>
          <div class="roi-num gradient-text">~Yr 4–5</div>
          <div class="roi-label">{{ lang === 'en' ? 'Estimated Break-even Point' : 'Estimasi Break-even Point' }}</div>
        </div>
        <div class="roi-card">
          <div class="roi-icon">🏆</div>
          <div class="roi-num gradient-text">$360M</div>
          <div class="roi-label">{{ lang === 'en' ? '55-Year Total Potential' : 'Potensi Total 55 Tahun' }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

defineProps({ t: Object, lang: String })

const currency = ref('idr')
</script>

<style scoped>
.revenue {
  background: white;
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
}
.section-header .section-subtitle { margin: 14px auto 0; }

/* Currency Toggle */
.currency-toggle {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 40px;
}

.cur-btn {
  padding: 10px 24px;
  border-radius: 10px;
  border: 1px solid rgba(43, 144, 144, 0.2);
  background: var(--bg-section-alt);
  color: var(--slate-gray);
  font-family: 'Inter', sans-serif;
  font-size: 0.88rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s;
}

.cur-btn.active {
  background: linear-gradient(135deg, var(--dark-teal), var(--medium-teal));
  border-color: transparent;
  color: white;
  box-shadow: 0 4px 15px rgba(26, 107, 107, 0.2);
}

/* Revenue Matrix */
.rev-matrix {
  border: 1px solid rgba(43, 144, 144, 0.15);
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 48px;
  background: white;
  box-shadow: var(--shadow-sm);
}

.rev-header, .rev-row {
  display: grid;
  grid-template-columns: 240px 1fr 1fr;
}

.rev-header {
  background: var(--bg-section-alt);
  border-bottom: 1px solid rgba(43, 144, 144, 0.15);
}

.rev-row {
  border-bottom: 1px solid rgba(43, 144, 144, 0.08);
  transition: background 0.2s;
}
.rev-row:last-child { border-bottom: none; }
.rev-row:hover { background: var(--teal-5); }

.rev-cell {
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.rev-cell + .rev-cell {
  border-left: 1px solid rgba(43, 144, 144, 0.08);
}

.rev-col-header {
  align-items: center;
  text-align: center;
  gap: 6px;
}

.col-icon {
  font-size: 1.5rem;
  margin-bottom: 4px;
}

.col-title {
  font-size: 0.88rem;
  font-weight: 800;
  color: var(--dark-charcoal);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.col-price {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--medium-teal);
}

.rev-cell.highlighted {
  background: var(--teal-5);
}

.rev-row-header {
  gap: 4px;
}

.row-scenario {
  font-family: 'Poppins', sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--dark-charcoal);
}

.row-scenario.agr {
  color: var(--dark-teal);
}

.row-volume {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--muted);
}

.rev-value {
  align-items: center;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--dark-charcoal);
}

.rev-value.highlighted { color: var(--dark-teal); }

.rev-value.best {
  position: relative;
  gap: 8px;
}

.best-badge {
  font-size: 0.65rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--dark-teal), var(--medium-teal));
  color: white;
  padding: 4px 12px;
  border-radius: 50px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.best-val {
  font-size: 1.4rem;
}

/* Flip Transition */
.flip-enter-active, .flip-leave-active {
  transition: all 0.25s ease;
}
.flip-enter-from { opacity: 0; transform: translateY(-8px); }
.flip-leave-to { opacity: 0; transform: translateY(8px); }

/* ROI Grid */
.roi-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.roi-card {
  background: white;
  border: 1px solid rgba(43, 144, 144, 0.15);
  border-radius: 20px;
  padding: 32px 20px;
  text-align: center;
  transition: all 0.3s;
  box-shadow: var(--shadow-sm);
}

.roi-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
  border-color: var(--medium-teal);
}

.roi-card.featured {
  background: var(--bg-section-alt);
  border-color: var(--teal-20);
}

.roi-icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

.roi-num {
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  font-weight: 800;
  margin-bottom: 8px;
}

.roi-label {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--slate-gray);
  line-height: 1.5;
}

@media (max-width: 1024px) {
  .rev-header, .rev-row { grid-template-columns: 200px 1fr 1fr; }
  .roi-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 650px) {
  .rev-header, .rev-row { grid-template-columns: 1fr; }
  .rev-empty { display: none; }
  .rev-row-header { display: none; }
  .rev-cell { padding: 20px; }
  .rev-cell + .rev-cell { border-left: none; border-top: 1px solid rgba(43, 144, 144, 0.08); }
}
</style>
