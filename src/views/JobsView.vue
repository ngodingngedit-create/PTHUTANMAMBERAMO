<template>
  <div class="jobs-page">
    <div class="header-bg">
      <div class="header-overlay"></div>
      <div class="container relative z-10 text-center">
        <h1 class="page-title">Explore Open <span class="outline-text">Roles</span></h1>
        <p class="page-subtitle">Join PT Hutan Harapan Memberamo and ignite planetary impact.</p>
      </div>
    </div>

    <div class="container main-content">
      
      <!-- Mobile Filter Toggle Accordion -->
      <button class="mobile-filter-btn" @click="showFilters = !showFilters">
        <div class="btn-group">
          <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"></path></svg>
          <span>{{ showFilters ? 'Hide Filters' : 'Filter & Search Jobs' }}</span>
        </div>
        <svg :class="['chevron', { 'rotate-180': showFilters }]" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"></path></svg>
      </button>

      <!-- Search & Filtering Section -->
      <div class="filter-section" :class="{ 'open': showFilters }">
        <div class="filter-card">
          <div class="filter-inputs">
            
            <div class="input-group">
              <label>Search Keyword</label>
              <div class="search-wrap">
                <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <input type="text" v-model="searchDraft" placeholder="e.g. Forest Analyst" />
              </div>
            </div>

            <div class="input-group">
              <label>Team / Department</label>
              <div class="search-wrap">
                <select v-model="teamDraft">
                  <option value="">All Teams (Bagian yang diinginkan)</option>
                  <option value="Conservation Team">Conservation Team</option>
                  <option value="Social Impact">Social Impact</option>
                  <option value="Government Relations">Government Relations</option>
                  <option value="Technology & R&D">Technology & R&D</option>
                </select>
              </div>
            </div>

            <button class="action-btn" @click="applyFilters">
              Search Jobs
            </button>
            
          </div>
        </div>
      </div>

      <!-- Results Section -->
      <div class="results-header">
        <h3>{{ filteredJobs.length }} open roles found</h3>
      </div>

      <div class="jobs-grid">
        <div class="premium-job-card" v-for="job in filteredJobs" :key="job.title">
          <div class="card-head">
            <h4 class="job-title">{{ job.title }}</h4>
            <span class="job-badge">{{ job.type }}</span>
          </div>
          <div class="card-body">
            <p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> {{ job.location }}</p>
            <p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg> {{ job.team }}</p>
          </div>
          <div class="card-foot">
            <router-link to="/job-detail" class="apply-btn">Apply Now</router-link>
            <button class="save-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </button>
          </div>
        </div>
        
        <div v-if="filteredJobs.length === 0" class="no-results">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <p>No open roles found matching your criteria.</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const showFilters = ref(false)
const searchDraft = ref('')
const teamDraft = ref('')

const appliedSearch = ref('')
const appliedTeam = ref('')

const allJobs = ref([
  { title: 'Carbon Forestry Specialist', location: 'Mamberamo Raya, Papua', team: 'Conservation Team', type: 'Full-time' },
  { title: 'Community Engagement Lead', location: 'Jayapura, Papua', team: 'Social Impact', type: 'Full-time' },
  { title: 'Policy & Regulatory Analyst', location: 'Jakarta, Indonesia', team: 'Government Relations', type: 'Contract' },
  { title: 'Data Scientist (Spatial LiDAR)', location: 'Jakarta, Indonesia', team: 'Technology & R&D', type: 'Full-time' },
  { title: 'Field Researcher (Biodiversity)', location: 'Mamberamo Raya, Papua', team: 'Conservation Team', type: 'Contract' },
  { title: 'Social Media Manager', location: 'Jakarta, Indonesia', team: 'Social Impact', type: 'Full-time' },
  { title: 'Public Policy Consultant', location: 'Jakarta, Indonesia', team: 'Government Relations', type: 'Part-time' },
  { title: 'Software Engineer, Data Systems', location: 'Jakarta, Indonesia', team: 'Technology & R&D', type: 'Full-time' }
])

function applyFilters() {
  appliedSearch.value = searchDraft.value
  appliedTeam.value = teamDraft.value
  if (window.innerWidth <= 768) {
    showFilters.value = false // collapse accordion on mobile after search
  }
}

const filteredJobs = computed(() => {
  return allJobs.value.filter(job => {
    const matchesKeyword = job.title.toLowerCase().includes(appliedSearch.value.toLowerCase()) || 
                           job.location.toLowerCase().includes(appliedSearch.value.toLowerCase())
    const matchesTeam = appliedTeam.value === '' || job.team === appliedTeam.value
    return matchesKeyword && matchesTeam
  })
})
</script>

<style scoped>
.jobs-page {
  min-height: 100vh;
  background-color: #F8FCFC;
  font-family: 'Poppins', sans-serif;
  padding-bottom: 100px;
}
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}
.relative { position: relative; }
.z-10 { z-index: 10; }
.text-center { text-align: center; }

/* Header BG */
.header-bg {
  position: relative;
  padding: 120px 0 80px;
  background: linear-gradient(135deg, #1A6B6B 0%, #2B9090 100%);
  overflow: hidden;
}
.header-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-image: radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 40%);
}
.page-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 16px;
  line-height: 1.1;
}
.outline-text {
  color: transparent;
  -webkit-text-stroke: 1.5px white;
}
.page-subtitle {
  font-size: 1.2rem;
  color: rgba(255,255,255,0.85);
}

/* Main Content & Accordion */
.main-content {
  margin-top: -40px;
  position: relative;
  z-index: 20;
}

.mobile-filter-btn {
  display: none;
  width: 100%;
  background: white;
  border: 1px solid rgba(43,144,144,0.2);
  padding: 16px 20px;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 700;
  color: #1A6B6B;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 15px rgba(26,107,107,0.08);
  margin-bottom: 16px;
}
.btn-group {
  display: flex; gap: 12px; align-items: center;
}
.chevron { transition: transform 0.3s; }
.rotate-180 { transform: rotate(180deg); }

.filter-section {
  display: block;
  margin-bottom: 40px;
}

.filter-card {
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: 24px 30px;
  box-shadow: 0 10px 40px rgba(26,107,107,0.08);
  border: 1px solid rgba(255,255,255,1);
}
.filter-inputs {
  display: flex;
  align-items: flex-end;
  gap: 20px;
}
.input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}
.input-group label {
  font-size: 0.85rem;
  font-weight: 600;
  color: #5A7070;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.search-wrap {
  display: flex;
  align-items: center;
  background: #F4FAFA;
  border-radius: 12px;
  padding: 0 16px;
  border: 1px solid rgba(43,144,144,0.15);
  transition: all 0.3s;
}
.search-wrap:focus-within {
  border-color: #2B9090;
  background: white;
  box-shadow: 0 0 0 3px rgba(43,144,144,0.1);
}
.search-wrap svg {
  color: #1A6B6B;
  flex-shrink: 0;
  margin-right: 12px;
}
.search-wrap input, .search-wrap select {
  width: 100%;
  border: none;
  background: transparent;
  padding: 14px 0;
  font-family: inherit;
  font-size: 1rem;
  color: #1A2A2A;
  outline: none;
}
.search-wrap select { cursor: pointer; }

.action-btn {
  background: #1A6B6B;
  color: white;
  height: 52px;
  padding: 0 32px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 8px 20px rgba(26,107,107,0.2);
  flex-shrink: 0;
}
.action-btn:hover {
  background: #2B9090;
  transform: translateY(-2px);
}

/* Results */
.results-header {
  margin-bottom: 24px;
}
.results-header h3 {
  font-size: 1.1rem;
  color: #5A7070;
  font-weight: 600;
}
.jobs-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.premium-job-card {
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 8px 25px rgba(26,107,107,0.05);
  border: 1px solid rgba(43,144,144,0.1);
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.premium-job-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(26,107,107,0.12);
  border-color: rgba(43,144,144,0.3);
}

.card-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
}
.job-title {
  font-size: 1.4rem;
  color: #1A2A2A;
  font-weight: 700;
  margin-right: 16px;
  line-height: 1.3;
}
.job-badge {
  background: #E8F6F6;
  color: #1A6B6B;
  padding: 6px 12px;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  flex-shrink: 0;
}
.card-body {
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.card-body p {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.95rem;
  color: #5A7070;
}
.card-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  border-top: 1px solid rgba(43,144,144,0.1);
  padding-top: 20px;
}
.apply-btn {
  background: transparent;
  color: #1A6B6B;
  font-weight: 700;
  font-size: 1rem;
  border: 1.5px solid #1A6B6B;
  padding: 8px 24px;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s;
}
.apply-btn:hover {
  background: #1A6B6B;
  color: white;
}
.save-icon {
  background: transparent;
  border: none;
  color: #8FA8A8;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.3s;
}
.save-icon:hover {
  color: #E53935;
  background: #FFF1F1;
}

.no-results {
  grid-column: 1 / -1;
  text-align: center;
  padding: 60px 20px;
  color: #8FA8A8;
}
.no-results svg { margin-bottom: 16px; color: #2B9090; opacity: 0.5; }
.no-results p { font-size: 1.1rem; }

/* Responsive */
@media (max-width: 900px) {
  .jobs-grid { grid-template-columns: 1fr; }
}

@media (max-width: 768px) {
  .page-title { font-size: 2.8rem; }
  .mobile-filter-btn { display: flex; }
  
  /* According logic for mobile */
  .filter-section {
    display: none;
    margin-bottom: 24px;
  }
  .filter-section.open {
    display: block;
    animation: slideDown 0.3s ease-out forwards;
  }
  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .filter-inputs {
    flex-direction: column;
    align-items: stretch;
  }
  .action-btn { width: 100%; margin-top: 10px; }
}
</style>
