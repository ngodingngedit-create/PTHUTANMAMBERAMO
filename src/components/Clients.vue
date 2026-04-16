<template>
  <section id="clients" class="section clients-section">
    <div class="container">
      <div class="section-header" data-aos="fade-up">
        <span class="section-tag">{{ t.clients.section_tag }}</span>
        <h2 class="section-title gradient-text">{{ t.clients.title }}</h2>
        <p class="section-subtitle">{{ t.clients.subtitle }}</p>
      </div>

      <div class="clients-grid">
        <div 
          v-for="client in clients" 
          :key="client.id" 
          class="client-card"
          data-aos="fade-up"
          :data-aos-delay="client.delay"
        >
          <div class="card-inner">
            <div class="logo-wrapper">
              <img :src="client.logo" :alt="client.id" class="client-logo" />
            </div>
            <div class="client-info">
              <p class="client-desc">{{ t.clients[`${client.id}_desc`] }}</p>
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

const clients = [
  { id: 'shell', logo: '/client/shell.png', delay: 100 },
  { id: 'vitol', logo: '/client/vitol.png', delay: 200 },
  { id: 'kec', logo: '/client/kec.png', delay: 300 },
  { id: 'nestle', logo: '/client/nestle.png', delay: 400 },
  { id: 'zomato', logo: '/client/zomato.png', delay: 500 }
]
</script>

<style scoped>
.clients-section {
  background-color: var(--bg-section-alt);
  position: relative;
  margin-top: -120px;
  overflow: hidden;
}

.section-header {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 64px;
}

.clients-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  justify-content: center;
}

.client-card {
  position: relative;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  height: 140px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  cursor: pointer;
  overflow: hidden;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo-wrapper {
  transition: var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.client-logo {
  max-width: 90%;
  max-height: 85%;
  width: auto;
  height: auto;
  object-fit: contain;
  filter: opacity(0.9);
  transition: var(--transition);
}

.client-info {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  opacity: 0;
  padding: 20px;
  transition: var(--transition);
}

.client-desc {
  font-size: 0.85rem;
  color: var(--dark-teal);
  font-weight: 600;
  line-height: 1.5;
}

/* Hover Effects */
.client-card:hover {
  border-color: var(--medium-teal);
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  background: rgba(255, 255, 255, 0.95);
}

.client-card:hover .logo-wrapper {
  opacity: 0;
  transform: scale(0.8);
}

.client-card:hover .client-logo {
  filter: opacity(0);
}

.client-card:hover .client-info {
  opacity: 1;
}

@media (max-width: 1024px) {
  .clients-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .clients-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  
  .client-card {
    height: 120px;
    padding: 16px;
  }
}

@media (max-width: 480px) {
  .clients-grid {
    grid-template-columns: 1fr;
  }
}
</style>
