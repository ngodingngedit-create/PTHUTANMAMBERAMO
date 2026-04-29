<template>
  <div class="all-teams-view">
    <!-- HERO SECTION -->
    <Hero 
      :t="t" 
      :lang="lang" 
      backgroundType="image" 
      backgroundImage="/backgrounds/community.png"
    >
      <div class="hero-simple-content">
        <h1 class="hero-title">
          {{ lang === 'en' ? 'Meet the' : 'Mengenal' }} 
          <span class="white-text">Heart of PT HHMR</span>
        </h1>
        <p class="hero-subtitle">
          {{ t?.career?.teams_hero_desc || 'Our teams are a vibrant mix of environmentalists, analysts, and leaders working together for a sustainable Papua.' }}
        </p>
      </div>
    </Hero>

    <!-- TEAM GRID SECTION (SIMPLE) -->
    <section class="teams-grid-section">
      <div class="container">
        <div class="teams-grid">
          <div class="team-card" v-for="member in teammates" :key="member.name">
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
    </section>

    <!-- JOIN US BANNER -->
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
import Hero from '../components/Hero.vue'

const props = defineProps({
  t: { type: Object, default: () => ({}) },
  lang: { type: String, default: 'id' }
})

const teammates = [
  {
    name: 'Harry Khoirul Anwar',
    role: 'Komisaris utama PT Hutan Harapan Mamberamo Raya',
    photo: '/career/HarryKhoirul.png'
  },
  {
    name: 'Hashim Djojohadikusumo',
    role: 'Komisaris Utama Arsari Group',
    photo: '/career/Hashim.png'
  },
  {
    name: 'H. Amir Mahpud',
    role: 'Presiden Direktur PT Primajasa Perdana Raya Utama',
    photo: '/career/H_Amir_Mahpud.png'
  }
]
</script>

<style scoped>
.all-teams-view {
  min-height: 100vh;
  padding-top: 0;
  background-color: #ffffff;
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.hero-simple-content {
  width: 100%;
}
@media (min-width: 1025px) {
  .hero-simple-content {
    padding-left: 50px;
  }
}
.hero-title {
  color: #ffffff !important;
  font-size: clamp(2.4rem, 4.2vw, 3.4rem) !important;
  font-weight: 800 !important;
  margin-bottom: 20px !important;
  line-height: 1.3 !important;
}
.white-text {
  color: #ffffff;
  display: block;
}
.hero-subtitle {
  color: #ffffff !important;
  font-size: clamp(1rem, 1.8vw, 1.2rem) !important;
  font-weight: 500 !important;
  max-width: 800px;
  margin: 0 auto 35px !important;
  line-height: 1.6;
  opacity: 1 !important;
  text-shadow: 0 2px 8px rgba(0,0,0,0.4);
}

/* 2. TEAMS GRID */
.teams-grid-section {
  padding: 100px 0;
  background: #ffffff;
}
.teams-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}
.card-inner {
  position: relative;
  height: 460px;
  border-radius: 32px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}
.card-inner:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(26,107,107,0.15);
}
.card-img {
  width: 100%; height: 100%;
  background-size: cover;
  background-position: center top;
  transition: transform 0.6s ease;
}
.card-inner:hover .card-img {
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
  color:#5BB8B8;
  margin-bottom: 6px;
}
.member-role {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

/* 3. JOIN US BANNER */
.join-banner {
  padding: 80px 0;
  background: #f8fbfb;
  text-align: center;
  border-top: 1px solid #e8f6f6;
}
.banner-container {
  max-width: 700px;
}
.join-banner h2 {
  font-size: 2.2rem;
  font-weight: 800;
  color: #1A6B6B;
  margin-bottom: 16px;
}
.join-banner p {
  font-size: 1.1rem;
  color: #5A7070;
  margin-bottom: 32px;
  line-height: 1.6;
}
.cta-btn.primary {
  background: #1A6B6B;
  color: white;
  padding: 12px 32px;
  border-radius: 50px;
  font-weight: 700;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s;
  display: inline-block;
}
.cta-btn.primary:hover {
  background: #2B9090;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(26,107,107,0.15);
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .teams-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .hero-simple-content { 
    text-align: center !important; 
    display: flex !important; 
    flex-direction: column !important; 
    align-items: center !important; 
    width: 100% !important;
    padding-left: 50px !important;
  }
  .hero-title { 
    font-size: 1.8rem !important; 
    text-align: center !important; 
    width: 100% !important;
  }
  .hero-subtitle { 
    font-size: 0.8rem !important; 
    text-align: center !important; 
    width: 100% !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }
  .teams-grid { grid-template-columns: 1fr; }
  .card-inner { height: 400px; border-radius: 24px; }
  .join-banner h2 { font-size: 1.8rem; }
}
</style>
