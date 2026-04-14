<template>
  <section id="projects" class="section projects">
    <div class="container">
      <div class="section-header">
        <div class="section-tag">{{ t.project.section_tag }}</div>
        <h2 class="section-title">{{ t.project.title }}</h2>
        <p class="section-subtitle">{{ t.project.subtitle }}</p>
      </div>

      <!-- <div class="projects-grid">
        Card 1: Memberamo
        <div class="project-card card featured">
          <div class="card-header">
            <div class="card-badges">
              <span class="badge badge-teal">{{ t.project.badge_flagship }}</span>
              <span class="badge badge-active">{{ t.project.card1_status }}</span>
            </div>
            <div class="card-flag">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3h18v13l-9 4-9-4V3z"/></svg>
            </div>
          </div>

          <div class="card-icon-wrap">
            <div class="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 17l4-8 4 4 3-6 4 8"/><path d="M2 20h20"/></svg>
            </div>
          </div>

          <h3 class="card-title">{{ t.project.card1_title }}</h3>
          <p class="card-location">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            {{ t.project.card1_location }}
          </p>

          <div class="credit-highlight">
            <div class="credit-label">{{ t.project.card1_credit_label }}</div>
            <div class="credit-value">{{ t.project.card1_credit_value }}</div>
          </div>

          <div class="card-details">
            <div class="detail-row">
              <span class="detail-label">{{ t.project.label_area }}</span>
              <span class="detail-value">{{ t.project.card1_area }}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">{{ t.project.label_revenue }}</span>
              <span class="detail-value highlight">{{ t.project.card1_revenue }}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">{{ t.project.label_duration }}</span>
              <span class="detail-value">{{ t.project.card1_duration }}</span>
            </div>
          </div>

          <div class="split-bar">
            <div class="split-track">
              <div class="split-fill" style="width: 70%"></div>
            </div>
            <div class="split-labels">
              <span>PT HHM 70%</span>
              <span>Hak Ulayat 30%</span>
            </div>
          </div>
        </div>

        Card 2: Rimba Karunia
        <div class="project-card card">
          <div class="card-header">
            <div class="card-badges">
              <span class="badge badge-green">{{ t.project.badge_validated }}</span>
              <span class="badge badge-active">{{ t.project.card2_status }}</span>
            </div>
          </div>

          <div class="card-icon-wrap">
            <div class="card-icon card-icon-2">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
          </div>

          <h3 class="card-title">{{ t.project.card2_title }}</h3>
          <p class="card-location">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            {{ t.project.card2_location }}
          </p>

          <div class="credit-highlight c2">
            <div class="credit-label">{{ t.project.card2_credit_label }}</div>
            <div class="credit-value">{{ t.project.card2_credit_value }}</div>
          </div>

          <div class="card-details">
            <div class="detail-row">
              <span class="detail-label">{{ t.project.label_area }}</span>
              <span class="detail-value">{{ t.project.card2_area }}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">{{ t.project.label_revenue }}</span>
              <span class="detail-value highlight">{{ t.project.card2_revenue }}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">{{ t.project.label_duration }}</span>
              <span class="detail-value">{{ t.project.card2_duration }}</span>
            </div>
          </div>

          <div class="method-breakdown">
            <div class="mb-label">Komposisi Metodologi</div>
            <div class="mb-bars">
              <div class="mb-item">
                <span class="mb-name">CIW</span>
                <div class="mb-track"><div class="mb-fill" style="width:72%"></div></div>
                <span class="mb-pct">72%</span>
              </div>
              <div class="mb-item">
                <span class="mb-name">ARR</span>
                <div class="mb-track"><div class="mb-fill" style="width:14%"></div></div>
                <span class="mb-pct">14%</span>
              </div>
              <div class="mb-item">
                <span class="mb-name">APD</span>
                <div class="mb-track"><div class="mb-fill" style="width:11%"></div></div>
                <span class="mb-pct">11%</span>
              </div>
              <div class="mb-item">
                <span class="mb-name">LTPF+RWE</span>
                <div class="mb-track"><div class="mb-fill" style="width:3%"></div></div>
                <span class="mb-pct">3%</span>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script setup>
defineProps({ t: Object })
</script>

<style scoped>
.projects {
  background: white;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-header .section-subtitle {
  margin: 16px auto 0;
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
}

/* Project Cards */
.project-card {
  padding: 32px;
  position: relative;
  overflow: hidden;
  background: white;
  border: 1px solid rgba(43, 144, 144, 0.15);
  box-shadow: 0 4px 20px rgba(26, 107, 107, 0.05);
}

.project-card.featured {
  border-color: rgba(43,144,144,0.3);
  background: linear-gradient(135deg, rgba(43,144,144,0.03) 0%, rgba(255,255,255,1) 100%);
}

.project-card.featured::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--dark-teal), var(--medium-teal));
}

/* Header */
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.card-badges {
  display: flex;
  gap: 8px;
}

.badge-active {
  background: rgba(76,175,141,0.1);
  color: #14453D;
  border: 1px solid rgba(76,175,141,0.2);
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 50px;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.card-flag {
  color: var(--medium-teal);
  opacity: 0.6;
}

/* Icon */
.card-icon-wrap {
  margin-bottom: 20px;
}

.card-icon {
  width: 60px;
  height: 60px;
  background: rgba(43,144,144,0.08);
  border: 1px solid rgba(43,144,144,0.15);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--dark-teal);
}

.card-icon-2 {
  background: rgba(20,69,61,0.05);
  border-color: rgba(20,69,61,0.15);
  color: var(--forest-green);
}

.card-title {
  font-family: 'Poppins', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--dark-charcoal);
  margin-bottom: 8px;
  line-height: 1.3;
}

.card-location {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.82rem;
  color: var(--slate-gray);
  margin-bottom: 24px;
}

/* Credit Highlight */
.credit-highlight {
  background: rgba(43,144,144,0.05);
  border: 1px solid rgba(43,144,144,0.1);
  border-radius: 12px;
  padding: 16px 20px;
  margin-bottom: 24px;
}

.credit-highlight.c2 {
  background: rgba(20,69,61,0.04);
  border-color: rgba(20,69,61,0.1);
}

.credit-label {
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
  margin-bottom: 4px;
}

.credit-value {
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--dark-teal);
}

/* Details */
.card-details {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 28px;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  font-size: 0.88rem;
  padding-bottom: 11px;
  border-bottom: 1px solid rgba(43, 144, 144, 0.08);
}

.detail-row:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.detail-label {
  color: var(--slate-gray);
  flex-shrink: 0;
}

.detail-value {
  color: var(--dark-charcoal);
  font-weight: 600;
  text-align: right;
}

.detail-value.highlight {
  color: var(--medium-teal);
}

/* Split Bar */
.split-bar {
  margin-top: auto;
}

.split-track {
  height: 8px;
  background: rgba(43, 144, 144, 0.1);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;
}

.split-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--dark-teal), var(--medium-teal));
}

.split-labels {
  display: flex;
  justify-content: space-between;
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--slate-gray);
}

/* Methodology Breakdown */
.method-breakdown {
  border-top: 1px solid rgba(43, 144, 144, 0.1);
  padding-top: 24px;
}

.mb-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
  margin-bottom: 14px;
}

.mb-bars {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.mb-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.mb-name {
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--slate-gray);
  width: 60px;
  flex-shrink: 0;
}

.mb-track {
  flex: 1;
  height: 6px;
  background: rgba(43, 144, 144, 0.08);
  border-radius: 3px;
  overflow: hidden;
}

.mb-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--forest-green), var(--medium-teal));
  transition: width 1.2s ease;
}

.mb-pct {
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--dark-teal);
  width: 35px;
  text-align: right;
}

@media (max-width: 900px) {
  .projects-grid { grid-template-columns: 1fr; }
}
</style>
