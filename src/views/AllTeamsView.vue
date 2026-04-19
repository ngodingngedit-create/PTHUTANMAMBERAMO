<template>
  <div class="all-teams-view">
    <!-- HERO SECTION -->
    <section class="teams-hero">
      <div class="container hero-container">
        <div class="hero-content">
          <h1 class="hero-title">
            Meet the 
            <span class="outline-text block-outline">Heart of HHM</span>
          </h1>
          <p class="hero-desc">
            {{ t?.career?.teams_hero_desc || 'Our teams are a vibrant mix of environmentalists, analysts, and leaders working together for a sustainable Papua.' }}
          </p>
        </div>
        <div class="hero-visual">
          <div class="visual-blob"></div>
          <div class="visual-img"></div>
        </div>
      </div>
    </section>

    <!-- TEAMS GRID -->
    <section class="teams-grid-section">
      <div class="container">
        <div class="category-block" v-for="category in filteredTeams" :key="category.name">
          <h2 class="category-title">{{ category.name }}</h2>
          <div class="teams-grid">
            <div class="team-card" v-for="member in category.members" :key="member.name">
              <div class="card-inner">
                <div class="card-img" :style="{ backgroundImage: 'url(' + member.photo + ')' }"></div>
                <div class="card-overlay">
                  <h4 class="member-name">{{ member.name }}</h4>
                  <p class="member-role">{{ member.role }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- JOIN US FOOTER -->
    <section class="join-banner">
      <div class="container banner-container">
        <div class="banner-content">
          <h2>{{ t?.career?.join_title || 'Join our mission' }}</h2>
          <p>{{ t?.career?.join_desc || 'Find your place at PT Hutan Harapan Memberamo and help us build a greener future.' }}</p>
          <router-link to="/jobs" class="cta-btn primary">View Openings</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  t: { type: Object, default: () => ({}) },
  lang: { type: String, default: 'id' }
})

const teammates = [
  { name: 'Budi Santoso', role: 'Direktur Utama', photo: '/team/direktur_utama.png', category: 'Executive' },
  { name: 'Sari Dewi', role: 'Direktur', photo: '/team/direktur.png', category: 'Executive' },
  { name: 'H. Ahmad Fauzi', role: 'Komisaris', photo: '/team/komisaris.png', category: 'Executive' },
  { name: 'Hendra Wijaya', role: 'Manager Operasional', photo: '/team/manager_operasional.png', category: 'Operations' },
  { name: 'Siska Amelia', role: 'Finance Manager', photo: '/team/manager_operasional.png', category: 'Operations' }, // Reusing or need unique
  { name: 'Anita Rahayu', role: 'Asisten Manajer SDM', photo: '/team/asisten_manajer.png', category: 'Operations' },
  { name: 'Rizky Pratama', role: 'Manajer Divisi Konservasi', photo: '/team/manajer_divisi.png', category: 'Conservation' },
  { name: 'Dafa Nugraha', role: 'Supervisor Lapangan', photo: '/team/supervisor.png', category: 'Conservation' },
  { name: 'Bagus Pratama', role: 'Field Officer', photo: '/team/field_officer.png', category: 'Conservation' },
  { name: 'Maya Putri', role: 'Head of Sustainability', photo: '/team/head_sustainability.png', category: 'Sustainability' }
]

const filteredTeams = computed(() => {
  const categories = [
    { name: props.t?.career?.cat_executive || 'Executive Leadership', id: 'Executive' },
    { name: props.t?.career?.cat_conservation || 'Conservation & Field', id: 'Conservation' },
    { name: props.t?.career?.cat_operations || 'Operations & Support', id: 'Operations' },
    { name: props.t?.career?.cat_sustainability || 'Sustainability & Impact', id: 'Sustainability' }
  ]
  
  return categories.map(cat => ({
    ...cat,
    members: teammates.filter(m => m.category === cat.id)
  })).filter(cat => cat.members.length > 0)
})
</script>

<style scoped>
.all-teams-view {
  min-height: 100vh;
  padding-top: 80px;
  background-color: #ffffff;
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* 1. HERO SECTION */
.teams-hero {
  padding: 100px 0;
  background: #F4FBFC;
  position: relative;
  overflow: hidden;
}
.hero-container {
  display: flex;
  align-items: center;
  gap: 60px;
}
.hero-content { flex: 1; }
.hero-title {
  font-size: 4.5rem;
  color: #1A6B6B;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 24px;
}
.outline-text {
  color: transparent;
  -webkit-text-stroke: 1.5px #1A6B6B;
}
.block-outline { display: block; }
.hero-desc {
  font-size: 1.25rem;
  color: #5A7070;
  max-width: 540px;
  line-height: 1.6;
}
.hero-visual {
  flex: 1;
  position: relative;
  height: 400px;
}
.visual-blob {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(26,107,107,0.08) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 1;
}
.visual-img {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background-image: url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071');
  background-size: cover;
  background-position: center;
  border-radius: 40px;
  box-shadow: 0 40px 80px rgba(26,107,107,0.1);
  z-index: 2;
}

/* 2. TEAMS GRID */
.teams-grid-section {
  padding: 120px 0;
}
.category-block {
  margin-bottom: 100px;
}
.category-title {
  font-size: 2.25rem;
  color: #1A6B6B;
  font-weight: 800;
  margin-bottom: 40px;
  padding-bottom: 15px;
  border-bottom: 2px solid #E8F6F6;
}
.teams-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 32px;
}
.team-card {
  perspective: 1000px;
}
.card-inner {
  position: relative;
  height: 460px;
  border-radius: 32px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.card-img {
  width: 100%; height: 100%;
  background-size: cover;
  background-position: center top;
  transition: transform 0.6s ease;
}
.team-card:hover .card-img {
  transform: scale(1.08);
}
.card-overlay {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  padding: 50px 30px 30px;
  background: linear-gradient(to top, rgba(10, 40, 40, 0.95) 0%, rgba(10,40,40,0.5) 50%, transparent 100%);
  color: white;
  transition: all 0.3s ease;
}
.member-name {
  font-size: 1.4rem;
  font-weight: 700;
  color: white;
  margin-bottom: 6px;
}
.member-role {
  font-size: 0.95rem;
  color: #D4F442;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

/* 3. JOIN US BANNER */
.join-banner {
  padding: 120px 0;
  background: #1A6B6B;
  color: white;
  text-align: center;
}
.banner-container {
  max-width: 800px;
}
.join-banner h2 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 24px;
}
.join-banner p {
  font-size: 1.25rem;
  opacity: 0.9;
  margin-bottom: 40px;
}
.cta-btn.primary {
  background: #D4F442;
  color: #1A6B6B;
  padding: 16px 40px;
  border-radius: 50px;
  font-weight: 800;
  text-decoration: none;
  font-size: 1.1rem;
  transition: all 0.3s;
  display: inline-block;
}
.cta-btn.primary:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.2);
  background: white;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .hero-container {
    flex-direction: column;
    text-align: center;
  }
  .hero-title { font-size: 3.5rem; }
  .hero-visual { width: 100%; max-width: 600px; height: 350px; }
  .teams-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .teams-hero { padding: 60px 0; }
  .hero-title { font-size: 2.8rem; }
  .category-title { font-size: 1.75rem; }
  .teams-grid { grid-template-columns: 1fr; }
  .card-inner { height: 400px; border-radius: 24px; }
  .join-banner h2 { font-size: 2.5rem; }
}
</style>
