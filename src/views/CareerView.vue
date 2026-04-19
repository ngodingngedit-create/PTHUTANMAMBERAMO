<template>
  <div class="career-view">
    <!-- HERO SECTION -->
    <section class="hero-section">
      <!-- Background Video -->
      <div class="hero-video-container">
        <video class="hero-video" autoplay muted loop playsinline>
          <source src="/carerr/carerr_vidio.mp4" type="video/mp4">
        </video>
        <div class="hero-overlay"></div>
      </div>
      <!-- Content -->
      <div class="container hero-wrapper">
        <div class="hero-content">
          <div class="hero-glass-panel">
            <h1 class="hero-title">
              Grow Your Career<br />
              <span class="hero-title-outline">With Purpose</span>
            </h1>
            <p class="hero-subtitle">
              Join a team protecting 300,000 Ha of Papua's rainforest.<br />
              We're looking for bold minds across Papua and Jakarta.
            </p>
            <div class="hero-actions">
              <router-link to="/jobs" class="hero-btn-primary">Explore Open Roles</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- MISSION & VALUES -->
    <section class="values-section" id="values">
      <div class="container values-container">
        <div class="values-text">
          <h2 class="section-title">
            A mission led
            <span class="outline-text block-outline">by values</span>
          </h2>
          <p class="values-desc">
            Our mission is to create a sustainable future through carbon credits and environmental conservation. To achieve this, we live by our core principles.
          </p>
          <ul class="values-list">
            <li><strong>Heart:</strong> We put our local communities and environment first.</li>
            <li><strong>Hunger:</strong> We are visionary builders driving massive planetary impact.</li>
            <li><strong>Honour:</strong> Trust and accountability are earned through transparent actions.</li>
          </ul>
          <button class="cta-btn mt-4">Discover our culture</button>
        </div>
        <div class="values-image-wrapper">
          <div class="values-image" :style="{ backgroundImage: 'url(' + currentImage + ')' }">
            <div class="carousel-control">
              <span class="count">{{ currentIndex + 1 }}/{{ sliderImages.length }}</span>
              <div class="arrows">
                <button class="arr-btn" @click="prevSlide">&larr;</button>
                <button class="arr-btn" @click="nextSlide">&rarr;</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- LOCATIONS -->
    <!-- <section class="locations-section">
      <div class="container">
        <h2 class="section-title text-center">
          Where you can see us
          <span class="outline-text text-green">in action</span>
        </h2>
        <p class="locations-desc text-center">
          From the vibrant capital of Jakarta to the rich biodiversity of Papua, PT Hutan Harapan Memberamo spans deep into the heart of Indonesia.
        </p>

        <div class="locations-grid">
          <div class="location-card loc-1">
            <div class="loc-gradient"></div>
            <h4 class="loc-name">Mamberamo Raya</h4>
          </div>
          <div class="location-card loc-2">
            <div class="loc-gradient"></div>
            <h4 class="loc-name">Jakarta HQ</h4>
          </div>
          <div class="location-card loc-3">
            <div class="loc-gradient"></div>
            <h4 class="loc-name">Jayapura</h4>
          </div>
        </div>
      </div>
    </section> -->

    <!-- TEAMMATES SECTION -->
    <section class="teammates-section">
      <div class="container">
        <div class="teammates-heading">
          <h2 class="section-title text-center">
           Building Excellence Together
            <span class="outline-text block-outline">Driven by people, defined by results</span>
          </h2>
          <p class="teammates-desc text-center">
           Our organization brings together experienced professionals committed to collaboration, innovation, and delivering meaningful outcomes. We foster a culture where every contribution matters and continuous improvement is a priority
          </p>
        </div>
      </div>
      <div class="teammates-scroll-wrapper">
        <div class="teammates-track">
          <div class="teammate-card" v-for="mate in teammates" :key="mate.name">
            <div class="teammate-img" :style="{ backgroundImage: 'url(' + mate.photo + ')' }"></div>
            <div class="teammate-overlay">
              <h4 class="teammate-name">{{ mate.name }}</h4>
              <p class="teammate-role">{{ mate.role }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="teammates-cta-wrap">
        <router-link to="/teams" class="cta-btn teammates-cta-btn">
          {{ t?.career?.view_all_team || 'Lihat Semua Tim' }}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </router-link>
      </div>
    </section>

    <!-- TEAMS & OPPORTUNITIES -->
    <section class="opportunities-section">
      <div class="container">
        <h2 class="section-title text-center mb-5">
          Your future teammates are 
          <span class="outline-text block-outline">waiting for you</span>
        </h2>
        
        <div class="opps-wrapper">
          <div class="opps-left">
            <div class="job-card" v-for="job in jobs" :key="job.title">
              <div class="job-info">
                <h3>{{ job.title }}</h3>
                <p class="loc">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> 
                  {{ job.location }}
                </p>
                <p class="team">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg> 
                  {{ job.team }}
                </p>
              </div>
              <button class="save-job-btn" aria-label="Save Job">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              </button>
            </div>
          </div>
          <div class="opps-right">
            <h2 class="section-title" style="font-size: 2.2rem;">
              Opportunities <br />
              <span class="outline-text">at PT HHM</span>
            </h2>
            <p class="opps-desc mt-2">
             Ready to build your career with purpose?
We offer diverse opportunities, from field conservation to strategic roles, for individuals committed to creating sustainable environmental impact.
            </p>
            <p class="opps-desc mt-2">
              Explore our open roles to find the perfect fit for you.
            </p>
            <router-link to="/jobs" class="cta-btn mt-4">View more jobs</router-link>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  t: { type: Object, default: () => ({}) },
  lang: { type: String, default: 'id' }
})
const sliderImages = [
  '/team/values_forest_team.png',
  '/team/values_community.png',
  '/team/values_carbon_lab.png',
]
const currentIndex = ref(0)
const currentImage = computed(() => sliderImages[currentIndex.value])

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % sliderImages.length
}
function prevSlide() {
  currentIndex.value = (currentIndex.value - 1 + sliderImages.length) % sliderImages.length
}

const jobs = ref([
  { title: 'Carbon Forestry Specialist', location: 'Mamberamo Raya, Papua', team: 'Conservation Team' },
  { title: 'Community Engagement Lead', location: 'Jayapura, Papua', team: 'Social Impact' },
  { title: 'Policy & Regulatory Analyst', location: 'Jakarta, Indonesia', team: 'Government Relations' },
  { title: 'Data Scientist (Spatial LiDAR)', location: 'Jakarta, Indonesia', team: 'Technology & R&D' }
])

const teammates = ref([
  {
    name: 'Budi Santoso',
    role: 'Direktur Utama',
    photo: '/team/direktur_utama.png'
  },
  {
    name: 'Sari Dewi',
    role: 'Direktur',
    photo: '/team/direktur.png'
  },
  {
    name: 'H. Ahmad Fauzi',
    role: 'Komisaris',
    photo: '/team/komisaris.png'
  },
  {
    name: 'Rizky Pratama',
    role: 'Manajer Divisi Konservasi',
    photo: '/team/manajer_divisi.png'
  },
  {
    name: 'Anita Rahayu',
    role: 'Asisten Manajer SDM',
    photo: '/team/asisten_manajer.png'
  },
  {
    name: 'Dafa Nugraha',
    role: 'Supervisor Lapangan',
    photo: '/team/supervisor.png'
  },
  {
    name: 'Hendra Wijaya',
    role: 'Manager Operasional',
    photo: '/team/manager_operasional.png'
  },
  {
    name: 'Maya Putri',
    role: 'Head of Sustainability',
    photo: '/team/head_sustainability.png'
  },
  {
    name: 'Bagus Pratama',
    role: 'Field Officer',
    photo: '/team/field_officer.png'
  },
  {
    name: 'Siska Amelia',
    role: 'Finance Manager',
    photo: '/team/finance_manager.png'
  }
])
</script>

<style scoped>
.career-view {
  min-height: 100vh;
  padding-top: 0; /* video hero handles its own top space */
  background-color: #ffffff;
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
.section-title {
  font-size: 2.5rem;
  color: #1A6B6B;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 24px;
  letter-spacing: -0.5px;
}
.outline-text {
  color: transparent;
  -webkit-text-stroke: 1.5px #1A6B6B;
}
.block-outline {
  display: block;
}
.text-green {
  -webkit-text-stroke: 1.5px #1A6B6B;
}
.text-center { text-align: center; }
.mb-5 { margin-bottom: 50px; }
.mt-4 { margin-top: 24px; }
.mt-2 { margin-top: 12px; }

.cta-btn {
  background: #1A6B6B;
  color: white;
  padding: 12px 28px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  display: inline-block;
}
.cta-btn:hover {
  background: #2B9090;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(26,107,107,0.2);
}

/* 1. HERO SECTION */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  overflow: hidden;
  text-align: center;
}
.hero-video-container {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.05);
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.45) 100%);
  backdrop-filter: blur(2px);
}
.hero-wrapper {
  position: relative;
  z-index: 2;
  width: 100%;
}
.hero-content {
  max-width: 1000px;
  margin: 0 auto;
}
.hero-glass-panel {
  padding: 40px;
  animation: heroFadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
@keyframes heroFadeUp {
  from { opacity: 0; transform: translateY(50px); filter: blur(10px); }
  to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
}
.hero-title {
  font-size: clamp(2.2rem, 7vw, 4rem);
  font-weight: 900;
  color: #ffffff;
  line-height: 1.1;
  margin-bottom: 24px;
  letter-spacing: -0.02em;
}
.hero-title-outline {
  color: transparent;
  -webkit-text-stroke: 2px #ffffff;
  display: block;
}
.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: rgba(255,255,255,0.9);
  max-width: 680px;
  margin: 0 auto 48px;
  line-height: 1.7;
  font-weight: 400;
}
.hero-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}
.hero-btn-primary {
  display: inline-block;
  background: #1A6B6B;
  color: white;
  padding: 16px 44px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s;
  box-shadow: 0 10px 30px rgba(26,107,107,0.35);
}
.hero-btn-primary:hover {
  background: #2B9090;
  transform: translateY(-3px);
  box-shadow: 0 16px 40px rgba(26,107,107,0.4);
}
/* Scroll indicator */
.hero-scroll {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.hero-mouse {
  width: 22px;
  height: 36px;
  border: 2px solid rgba(255,255,255,0.5);
  border-radius: 12px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 5px;
}
.hero-wheel {
  width: 3px;
  height: 8px;
  background: rgba(255,255,255,0.8);
  border-radius: 2px;
  animation: wheelScroll 1.6s ease-in-out infinite;
}
@keyframes wheelScroll {
  0% { transform: translateY(0); opacity: 1; }
  80% { transform: translateY(10px); opacity: 0; }
  100% { transform: translateY(0); opacity: 0; }
}
.hero-scroll-text {
  font-size: 0.65rem;
  color: rgba(255,255,255,0.45);
  letter-spacing: 0.25em;
  font-weight: 600;
}



.bg-waves {
  position: absolute;
  top: -50%; left: -10%; right: -10%; bottom: -50%;
  background: radial-gradient(circle at 80% 20%, rgba(43,144,144,0.06) 0%, transparent 40%),
              radial-gradient(circle at 20% 80%, rgba(26,107,107,0.04) 0%, transparent 50%);
  border-radius: 50%;
  z-index: 0;
}
.hero-container {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 60px;
}
.hero-content {
  flex: 1;
}
.hero-title {
  font-size: 2.7rem;
  color: #ffffff;
  font-weight: 800;
  line-height: 1.05;
  margin-bottom: 24px;
}
.hero-desc {
  font-size: 1.15rem;
  color: #5A7070;
  margin-bottom: 36px;
  max-width: 480px;
  line-height: 1.6;
}
.search-box {
  display: flex;
  align-items: center;
  background: white;
  border-radius: 50px;
  padding: 6px 10px 6px 24px;
  box-shadow: 0 10px 30px rgba(26,107,107,0.08);
  border: 1px solid rgba(43,144,144,0.15);
  max-width: 500px;
}
.search-input {
  border: none;
  background: transparent;
  padding: 14px 0;
  font-size: 1rem;
  color: #1A2A2A;
  flex: 1;
  min-width: 0;
  font-family: inherit;
}
.search-input:focus { outline: none; }
.search-divider {
  width: 1px;
  height: 24px;
  background: rgba(43,144,144,0.2);
  margin: 0 16px;
}
.search-btn {
  background: #1A6B6B;
  color: white;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  flex-shrink: 0;
}
.search-btn:hover { background: #2B9090; }

.hero-media {
  flex: 1.1;
}
.media-grid {
  position: relative;
  height: 550px;
  width: 100%;
}
.media-card {
  position: absolute;
  border-radius: 30px;
  background-size: cover;
  background-position: center;
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  border: 5px solid white;
}
.card-1 {
  width: 240px; height: 180px;
  top: 40px; left: 0;
  background-image: url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop');
}
.card-2 {
  width: 200px; height: 280px;
  top: 0; right: 20px;
  background-image: url('https://images.unsplash.com/photo-1579208575657-c595a05383b7?q=80&w=2070&auto=format&fit=crop');
}
.card-3 {
  width: 320px; height: 240px;
  bottom: 30px; left: 50px;
  background-image: url('https://images.unsplash.com/photo-1542314831-c6a4203251f8?q=80&w=2070&auto=format&fit=crop');
  z-index: 2;
  display: flex; align-items: center; justify-content: center;
}
.card-4 {
  width: 180px; height: 220px;
  bottom: 0; right: 0;
  background-image: url('https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1932&auto=format&fit=crop');
}
.play-btn {
  width: 65px; height: 65px;
  border-radius: 50%;
  background: rgba(255,255,255,0.95);
  color: #1A6B6B;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
}
.play-btn:hover {
  transform: scale(1.1);
  background: white;
}

/* 2. VALUES SECTION */
.values-section {
  padding: 80px 0;
  background: #E8F6F6;
  position: relative;
  overflow: hidden;
}
.watermark-text {
  position: absolute;
  bottom: -60px; right: 0;
  font-size: 18rem;
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 2px rgba(43,144,144,0.1);
  line-height: 1;
  pointer-events: none;
  font-family: 'Poppins', sans-serif;
  letter-spacing: -2px;
}
.values-container {
  display: flex;
  align-items: center;
  gap: 80px;
  z-index: 10;
  position: relative;
}
.values-text { flex: 1; }
.values-desc {
  font-size: 1.15rem;
  color: #5A7070;
  margin-bottom: 24px;
  line-height: 1.6;
}
.values-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: #5A7070;
  font-size: 1.05rem;
}
.values-list strong {
  color: #1A6B6B;
  font-weight: 700;
}
.values-image-wrapper {
  flex: 1.1;
  position: relative;
}
.values-image {
  width: 100%;
  height: 500px;
  min-height: 300px;
  border-radius: 30px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #C8E6E6;
  box-shadow: 0 24px 50px rgba(26,107,107,0.15);
  transition: background-image 0.5s ease-in-out;
  position: relative;
  overflow: hidden;
}
.carousel-control {
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
  color: white;
  /* Hidden by default on desktop — revealed on hover */
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 5;
}
.values-image:hover .carousel-control {
  opacity: 1;
}
.arr-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1.5px solid rgba(255,255,255,0.7);
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(8px);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}
.arr-btn:hover {
  background: white;
  border-color: white;
  color: #1A6B6B;
}
.count {
  font-size: 0.85rem;
  background: rgba(0,0,0,0.3);
  backdrop-filter: blur(8px);
  padding: 4px 10px;
  border-radius: 20px;
  color: white;
}

/* 3. LOCATIONS SECTION */
.locations-section {
  padding: 70px 0;
  background: white;
}
.locations-desc {
  max-width: 700px;
  margin: 0 auto 40px;
  color: #5A7070;
  font-size: 1.15rem;
  line-height: 1.6;
}
.locations-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.location-card {
  height: 420px;
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  background-size: cover;
  background-position: center;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
}
.location-card:hover { transform: translateY(-12px); box-shadow: 0 20px 40px rgba(26,107,107,0.15); }
.loc-1 { background-image: url('https://images.unsplash.com/photo-1596404983050-98967ddc95bd?q=80&w=1935&auto=format&fit=crop'); }
.loc-2 { background-image: url('https://images.unsplash.com/photo-1555899434-94d1368aa7af?q=80&w=2070&auto=format&fit=crop'); }
.loc-3 { background-image: url('https://images.unsplash.com/photo-1506452305024-9d3f02d1c9b5?q=80&w=2070&auto=format&fit=crop'); }
.loc-gradient {
  position: absolute;
  bottom: 0; left: 0; right: 0; height: 60%;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
}
.loc-name {
  position: absolute;
  bottom: 30px; left: 30px; right: 30px;
  color: #5BB8B8;
  font-size: 1.5rem;
  font-weight: 800;
  text-align: center;
  z-index: 2;
  letter-spacing: 0.5px;
}

/* 4. OPPORTUNITIES SECTION */
.opportunities-section {
  padding: 60px 0 80px;
  background: #FCFEFE;
}
.opps-wrapper {
  display: flex;
  gap: 80px;
  align-items: center;
}
.opps-left {
  flex: 1.3;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.job-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 24px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 15px rgba(26,107,107,0.04);
  border: 1px solid rgba(43,144,144,0.15);
  border-left: 6px solid #1A6B6B;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
  z-index: 10;
}
.job-card:hover {
  transform: translateX(10px);
  border-left-color: #2B9090;
  box-shadow: 0 16px 40px rgba(26,107,107,0.12);
  z-index: 20;
}

.job-info h3 {
  font-size: 1.25rem;
  color: #1A2A2A;
  margin-bottom: 8px;
  font-weight: 700;
}
.job-info p {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: #5A7070;
  margin-bottom: 4px;
}

.save-job-btn {
  background: transparent;
  border: none;
  color: #1A6B6B;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  transition: all 0.3s;
}
.save-job-btn:hover {
  background: rgba(43,144,144,0.1);
  color: #1A2A2A;
}

.opps-right {
  flex: 1;
}
.opps-desc {
  color: #5A7070;
  font-size: 1.1rem;
  line-height: 1.6;
}

/* 5. TEAMMATES SECTION */
.teammates-section {
  padding: 60px 0 0;
  background: #ffffff;
  overflow: hidden;
}
.teammates-heading {
  margin-bottom: 36px;
}
.teammates-desc {
  max-width: 660px;
  margin: 0 auto;
  color: #5A7070;
  font-size: 1.05rem;
  line-height: 1.7;
}
.teammates-scroll-wrapper {
  width: 100%;
  overflow-x: auto;
  padding-bottom: 20px;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: #1A6B6B rgba(26, 107, 107, 0.1);
}
.teammates-scroll-wrapper::-webkit-scrollbar {
  height: 4px;
}
.teammates-scroll-wrapper::-webkit-scrollbar-track {
  background: rgba(26, 107, 107, 0.05);
  border-radius: 10px;
  margin: 0 24px;
}
.teammates-scroll-wrapper::-webkit-scrollbar-thumb {
  background: #1A6B6B;
  border-radius: 10px;
}
.teammates-scroll-wrapper::-webkit-scrollbar-thumb:hover {
  background: #2B9090;
}
.teammates-track {
  display: flex;
  gap: 20px;
  width: max-content;
  padding: 0 24px;
}
.teammate-card {
  position: relative;
  width: 230px;
  height: 380px;
  overflow: hidden;
  flex-shrink: 0;
  cursor: pointer;
  border-radius: 20px;
  transition: width 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.teammate-card:hover {
  width: 280px;
}
.teammates-cta-wrap {
  display: flex;
  justify-content: center;
  padding: 24px 0 40px;
}
.teammates-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: transparent;
  color: #1A6B6B;
  border: 2px solid #1A6B6B;
  padding: 13px 32px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
}
.teammates-cta-btn:hover {
  background: #1A6B6B;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(26,107,107,0.2);
}
.teammate-img {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center top;
  transition: transform 0.5s ease;
}
.teammate-card:hover .teammate-img {
  transform: scale(1.04);
}
.teammate-overlay {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  padding: 40px 20px 20px;
  background: linear-gradient(to top, rgba(10, 40, 40, 0.92) 0%, rgba(10,40,40,0.4) 60%, transparent 100%);
  color: white;
  transition: all 0.3s ease;
}
.teammate-name {
  font-size: 1rem;
  font-weight: 700;
  color: #5BB8B8;
  margin-bottom: 4px;
  letter-spacing: 0.2px;
}
.teammate-role {
  font-size: 0.82rem;
  color: rgba(255,255,255,0.85);
  font-weight: 400;
}

@media (max-width: 1024px) {
  .values-container, .opps-wrapper {
    flex-direction: column;
    gap: 50px;
    text-align: center;
  }
  .values-image-wrapper {
    width: 100%;
  }
  .values-image {
    height: 380px;
    min-height: 380px;
  }
  /* Always show controls on touch/tablet — no hover available */
  .carousel-control {
    opacity: 1;
    bottom: 16px;
    right: 16px;
  }
  .job-card:nth-child(even) { margin-left: 0; }
  .locations-grid { grid-template-columns: repeat(2, 1fr); }
  .loc-3 { display: none; }
  .teammate-card { width: 200px; height: 320px; }
  .teammate-card:hover { width: 240px; }
}

@media (max-width: 600px) {
  .hero-section { min-height: 100svh; }
  .hero-glass-panel { padding: 24px 10px; }
  .hero-subtitle { font-size: 0.95rem; margin-bottom: 32px; }
  .hero-btn-primary { font-size: 0.95rem; padding: 14px 32px; }
  .values-image { height: 320px; }
  .locations-grid { grid-template-columns: 1fr; }
  .section-title { font-size: 1.8rem; line-height:1.5; }
  .outline-text { font-size: 1.8rem; }
  .opps-left { padding: 0 10px; }
  .job-card { flex-direction: column; align-items: flex-start; gap: 16px; width: 100%; box-sizing: border-box; }
  .save-job-btn { align-self: flex-end; margin-top: -40px; }
  .teammates-section { padding: 70px 0 0; }
  .teammates-heading { margin-bottom: 40px; }
  .teammate-card { width: 160px; height: 260px; }
  .teammate-card:hover { width: 190px; }
  .teammate-name { font-size: 0.88rem; }
  .teammate-role { font-size: 0.75rem; }
  .teammate-overlay { padding: 30px 14px 14px; }
  .teammates-cta-btn { font-size: 0.9rem; padding: 11px 24px; }
  .teammates-cta-wrap { padding: 28px 0 48px; }
}
</style>
