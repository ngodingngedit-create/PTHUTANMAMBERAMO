<template>
  <div class="career-view">
    <!-- HERO SECTION -->
    <section class="hero-section">
      <div class="bg-waves"></div>
      <div class="container hero-container">
        <div class="hero-content">
          <h1 class="hero-title">
            Grow your career with
            <span class="outline-text block-outline">purpose</span>
          </h1>
          <p class="hero-desc">
            We are looking for bold minds to help us build a sustainable future. Find open roles across Papua and Jakarta.
          </p>
        </div>
        <div class="hero-media">
          <div class="media-grid">
            <div class="media-card card-1"></div>
            <div class="media-card card-2"></div>
            <div class="media-card card-3">
              <div class="play-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </div>
            </div>
            <div class="media-card card-4"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- MISSION & VALUES -->
    <section class="values-section">
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
          <div class="values-image" :style="{ backgroundImage: 'url(' + currentImage + ')' }"></div>
          <div class="carousel-control">
            <span class="count">{{ currentIndex + 1 }}/4</span>
            <div class="arrows">
              <button class="arr-btn" @click="prevSlide">&larr;</button>
              <button class="arr-btn" @click="nextSlide">&rarr;</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- LOCATIONS -->
    <section class="locations-section">
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
              Ready to grab your career with both hands? We offer opportunities for everyone, from field conservationists to policy analysts!
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

const sliderImages = [
  'https://images.unsplash.com/photo-1542601098369-7c0432c0fbdd?q=80&w=2070',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071',
  'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070',
  'https://images.unsplash.com/photo-1506452305024-9d3f02d1c9b5?q=80&w=2070'
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
</script>

<style scoped>
.career-view {
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
.section-title {
  font-size: 3rem;
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
  overflow: hidden;
  padding: 80px 0 100px;
  background: #F4FBFC;
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
  font-size: 4.5rem;
  color: #1A6B6B;
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
  padding: 140px 0;
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
  border-radius: 30px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 24px 50px rgba(26,107,107,0.15);
  transition: background-image 0.5s ease-in-out;
}
.carousel-control {
  position: absolute;
  top: -40px; right: 0;
  display: flex;
  align-items: center;
  gap: 16px;
  font-weight: 700;
  color: #1A6B6B;
}
.arrows { display: flex; gap: 8px; }
.arr-btn {
  width: 36px; height: 36px;
  border-radius: 50%;
  border: 1.5px solid #1A6B6B;
  background: transparent;
  color: #1A6B6B;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.2s;
}
.arr-btn:hover { background: #1A6B6B; color: white; }

/* 3. LOCATIONS SECTION */
.locations-section {
  padding: 120px 0;
  background: white;
}
.locations-desc {
  max-width: 700px;
  margin: 0 auto 60px;
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
  color: #D4F442;
  font-size: 1.5rem;
  font-weight: 800;
  text-align: center;
  z-index: 2;
  letter-spacing: 0.5px;
}

/* 4. OPPORTUNITIES SECTION */
.opportunities-section {
  padding: 100px 0 140px;
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

@media (max-width: 1024px) {
  .hero-container, .values-container, .opps-wrapper {
    flex-direction: column;
    gap: 50px;
    text-align: center;
  }
  .hero-title { font-size: 3.5rem; }
  .search-box { margin: 0 auto; flex-direction: column; align-items: stretch; border-radius: 20px; padding: 12px; }
  .search-divider { height: 1px; width: 100%; margin: 8px 0; }
  .search-btn { width: 100%; border-radius: 12px; margin-top: 10px; height: 50px; }
  .media-grid { height: 450px; max-width: 500px; margin: 0 auto; }
  
  .job-card:nth-child(even) { margin-left: 0; }
  .locations-grid { grid-template-columns: repeat(2, 1fr); }
  .loc-3 { display: none; }
  .watermark-text { font-size: 10rem; }
}

@media (max-width: 600px) {
  .hero-title { font-size: 2.8rem; }
  .media-grid { display: none; }
  .values-image { height: 320px; }
  .locations-grid { grid-template-columns: 1fr; }
  .section-title { font-size: 2.4rem; }
  .opps-left { padding: 0 10px; }
  .job-card { flex-direction: column; align-items: flex-start; gap: 16px; width: 100%; box-sizing: border-box; }
  .save-job-btn { align-self: flex-end; margin-top: -40px; }
}
</style>
