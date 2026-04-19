<template>
  <section class="section global-presence">
    <!-- Premium Eco Background -->
    <div class="gp-bg">
      <div class="gp-blob"></div>
      <div class="gp-grid"></div>
    </div>

    <div class="container gp-content">
      <div class="gp-header">
        <h2 class="section-title" v-html="t.global_presence.title"></h2>
        <p class="section-subtitle">{{ t.global_presence.subtitle }}</p>
      </div>

      <div class="gp-main-display">
        <!-- Floating Display Container -->
        <div class="gp-floating-wrapper">
          
          <!-- Map Image (Indonesia as requested) -->
          <div class="gp-map-center">
            <img src="/home/map.png" alt="Global Presence" class="global-map-img" />
            
            <!-- Pinpoint for Mamberamo (Strategic Base) -->
            <!-- <div class="map-pin" style="top: 75%; left: 90%;">
              <div class="pin-pulse"></div>
              <div class="pin-dot"></div>
              <div class="pin-label">Mamberamo, Papua</div>
            </div> -->
          </div>

          <!-- Floating Card 1: Years Experience -->
          <div class="float-card card-tl anim-float-1">
            <div class="fc-accent"></div>
            <div class="fc-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <div class="fc-content">
              <div class="fc-value gradient-text">{{ t.global_presence.stat1_value }}</div>
              <div class="fc-label">{{ t.global_presence.stat1_label }}</div>
            </div>
          </div>

          <!-- Floating Card 2: Carbon Projects -->
          <div class="float-card card-bl anim-float-2">
            <div class="fc-accent"></div>
            <div class="fc-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <div class="fc-content">
              <div class="fc-value gradient-text">{{ t.global_presence.stat2_value }}</div>
              <div class="fc-label">{{ t.global_presence.stat2_label }}</div>
            </div>
          </div>

          <!-- Floating Card 3: Global Clients -->
          <div class="float-card card-br anim-float-3">
            <div class="fc-accent"></div>
            <div class="fc-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg>
            </div>
            <div class="fc-content">
              <div class="fc-value gradient-text">{{ t.global_presence.stat3_value }}</div>
              <div class="fc-label">{{ t.global_presence.stat3_label }}</div>
            </div>
          </div>

          <!-- Floating Card 4: Forestry Experts -->
          <div class="float-card card-tr anim-float-4">
            <div class="fc-accent"></div>
            <div class="fc-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <div class="fc-content">
              <div class="fc-value gradient-text">{{ t.global_presence.stat4_value }}</div>
              <div class="fc-label">{{ t.global_presence.stat4_label }}</div>
            </div>
          </div>

        </div>
      </div>

      <!-- Mobile Fallback Grid -->
      <div class="gp-mobile-stats">
        <div v-for="i in 4" :key="i" class="mobile-stat-card">
          <div class="fc-value gradient-text">{{ t.global_presence[`stat${i}_value`] }}</div>
          <div class="fc-label">{{ t.global_presence[`stat${i}_label`] }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({ t: Object })
</script>

<style scoped>
.global-presence {
  position: relative;
  background: #ffffff;
  overflow: hidden;
  padding: 100px 0;
}

.gp-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.gp-blob {
  position: absolute;
  width: 900px; height: 900px;
  background: radial-gradient(circle, rgba(91,184,184,0.06) 0%, transparent 70%);
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  filter: blur(100px);
}

.gp-grid {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(43,144,144,0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(43,144,144,0.02) 1px, transparent 1px);
  background-size: 60px 60px;
}

.gp-content {
  position: relative;
  z-index: 2;
}

.gp-header {
  text-align: center;
  margin-bottom: 1px;
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 900;
  color: #1A2A2A;
  line-height: 1.1;
  white-space: pre-line;
  margin-bottom: 24px;
}

.section-subtitle {
  font-size: 1.1rem;
  color: var(--slate-gray);
  max-width: 650px;
  margin: 0 auto;
}

/* Floating Display */
.gp-main-display {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.gp-floating-wrapper {
  position: relative;
  height: 620px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gp-map-center {
  width: 85%;
  position: relative;
  transition: transform 0.4s ease;
}

.global-map-img {
  width: 100%;
  height: auto;
  display: block;
  filter: drop-shadow(0 20px 50px rgba(0,0,0,0.05));
}

/* --- CREATIVE FLOAT CARDS (Unique Design) --- */
.float-card {
  position: absolute;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  padding: 20px 24px;
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(26, 107, 107, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.4);
  display: flex;
  align-items: center;
  gap: 16px;
  z-index: 5;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
}

.fc-accent {
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 5px;
  background: linear-gradient(to bottom, var(--medium-teal), var(--dark-teal));
}

.fc-icon {
  width: 44px; height: 44px;
  background: rgba(43, 144, 144, 0.08);
  border-radius: 14px;
  display: flex; align-items: center; justify-content: center;
  color: var(--medium-teal);
  flex-shrink: 0;
}

.fc-content {
  text-align: left;
}

.fc-value {
  font-size: 1.6rem;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 2px;
}

.fc-label {
  font-size: 0.68rem;
  font-weight: 700;
  color: var(--slate-gray);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.8;
}

/* Card Hover State */
.float-card:hover {
  transform: translateY(-12px) scale(1.03);
  background: #ffffff;
  box-shadow: 0 20px 60px rgba(26, 107, 107, 0.15);
  border-color: rgba(43, 144, 144, 0.2);
}

.float-card:hover .fc-icon {
  background: var(--medium-teal);
  color: white;
  transform: rotate(-5deg);
}

/* Animations (Different speeds for a natural feel) */
.anim-float-1 { animation: floatY 6s ease-in-out infinite; }
.anim-float-2 { animation: floatY 8s ease-in-out infinite 1s; }
.anim-float-3 { animation: floatY 7s ease-in-out infinite 0.5s; }
.anim-float-4 { animation: floatY 9s ease-in-out infinite 1.5s; }

@keyframes floatY {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

/* Desktop Positioning (Tailored for Indonesia Map) */
.card-tl { top: 32%; left: 0%; }        /* Sumatra Area */
.card-bl { bottom: 18%; left: 12%; }    /* Java Area */
.card-br { bottom: 12%; right: 10%; }   /* Papua/South Papua Area */
.card-tr { top: 22%; right: 4%; }       /* Papua North Area */

/* Pinpoint Styling */
.map-pin {
  position: absolute;
  width: 12px; height: 12px;
  z-index: 10;
}
.pin-dot {
  width: 12px; height: 12px;
  background: var(--medium-teal);
  border-radius: 50%;
  border: 2px solid white;
}
.pin-pulse {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: var(--medium-teal);
  border-radius: 50%;
  animation: pulse 2s infinite;
}
.pin-label {
  position: absolute;
  top: 20px; left: 50%;
  transform: translateX(-50%);
  background: rgba(26, 42, 42, 0.9);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.65rem;
  font-weight: 700;
  white-space: nowrap;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 0.8; }
  100% { transform: scale(4); opacity: 0; }
}

/* Mobile Fallback */
.gp-mobile-stats {
  display: none;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 40px;
}

.mobile-stat-card {
  padding: 24px 20px;
  background: white;
  border-radius: 20px;
  border: 1px solid rgba(43, 144, 144, 0.1);
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.03);
}

@media (max-width: 1100px) {
  .float-card { padding: 16px 20px; min-width: 160px; }
  .fc-value { font-size: 1.3rem; }
  .gp-floating-wrapper { height: 500px; }
}

@media (max-width: 960px) {
  .gp-main-display { margin-bottom: 40px; }
  .float-card { display: none; }
  .gp-mobile-stats { display: grid; }
  .gp-floating-wrapper { height: auto; padding: 20px 0; }
  .gp-map-center { width: 100%; }
  .gp-header { margin-bottom: 6px; }
}

@media (max-width: 480px) {
  .gp-mobile-stats { grid-template-columns: 1fr; }
  .section-title { font-size: 1.35rem; }
}
</style>
