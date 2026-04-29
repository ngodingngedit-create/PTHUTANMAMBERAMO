<template>
  <div class="page-container">
    <!-- Hero Section -->
    <section class="exchange-hero">
      <div class="container">
        <div class="hero-content">
          <span class="badge">Market Insights</span>
          <h1>{{ lang === 'id' ? 'Bursa Karbon Indonesia' : 'Indonesia Carbon Exchange' }}</h1>
          <p>{{ lang === 'id' ? 'Pantauan aktivitas perdagangan kredit karbon nasional melalui IDX Carbon.' : 'Monitoring national carbon credit trading activity through IDX Carbon.' }}</p>
          
          <div class="date-container">
            <button class="date-badge interactive" @click="handleDateClick">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span>{{ lang === 'id' ? '' : 'Data as of:' }} {{ formattedDate }}</span>
              <svg class="chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <input 
              type="date" 
              ref="dateInput" 
              class="hidden-date-input" 
              v-model="selectedDate" 
              @change="onDateChange"
            >
          </div>
        </div>
      </div>
      <div class="hero-pattern"></div>
    </section>

    <!-- Market Dashboard Section -->
    <section class="market-dashboard">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-card glass-card">
            <div class="stat-icon price">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1v22M17 5H9.5a4.5 4.5 0 0 0 0 9h5a4.5 4.5 0 0 1 0 9H6"/></svg>
            </div>
            <div class="stat-info">
              <span class="stat-label">{{ lang === 'id' ? 'Harga Karbon Rata-rata' : 'Average Carbon Price' }}</span>
              <div class="stat-value">Rp {{ statsData.price }} <span class="trend" :class="statsData.trendUp ? 'up' : 'down'">{{ statsData.trend }}</span></div>
              <span class="stat-sub">{{ lang === 'id' ? 'per tCO₂e' : 'per tCO₂e' }}</span>
            </div>
          </div>
          <div class="stat-card glass-card">
            <div class="stat-icon volume">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
            </div>
            <div class="stat-info">
              <span class="stat-label">{{ lang === 'id' ? 'Volume Transaksi' : 'Trading Volume' }}</span>
              <div class="stat-value">{{ statsData.volume }}</div>
              <span class="stat-sub">{{ lang === 'id' ? 'Unit Karbon (tCO₂e)' : 'Carbon Units (tCO₂e)' }}</span>
            </div>
          </div>
          <div class="stat-card glass-card">
            <div class="stat-icon value">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            </div>
            <div class="stat-info">
              <span class="stat-label">{{ lang === 'id' ? 'Nilai Perdagangan' : 'Trading Value' }}</span>
              <div class="stat-value">Rp {{ statsData.value }}</div>
              <span class="stat-sub">{{ lang === 'id' ? 'Total Akumulasi' : 'Total Accumulation' }}</span>
            </div>
          </div>
          <div class="stat-card glass-card">
            <div class="stat-icon participants">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <div class="stat-info">
              <span class="stat-label">{{ lang === 'id' ? 'Partisipasi Pelaku Pasar' : 'Market Participants' }}</span>
              <div class="stat-value">{{ statsData.participants }} {{ lang === 'id' ? 'Entitas' : 'Entities' }}</div>
              <span class="stat-sub">{{ lang === 'id' ? 'Perusahaan Terdaftar' : 'Registered Companies' }}</span>
            </div>
          </div>
        </div>

        <div class="content-box glass-card">
          <div class="content-header">
            <img src="/registrasi/idxcarbon.jpg" alt="IDX Carbon" class="idx-logo" @error="handleLogoError">
          </div>
          <div class="content-body">
            <p v-if="lang === 'id'">Menu "Bursa Karbon" menampilkan pantauan aktivitas perdagangan kredit karbon di Indonesia melalui <strong>IDX Carbon (Indonesia Carbon Exchange)</strong>.</p>
            <p v-else>The "Carbon Exchange" menu displays monitoring of carbon credit trading activity in Indonesia through <strong>IDX Carbon (Indonesia Carbon Exchange)</strong>.</p>
            
            <p v-if="lang === 'id'">Halaman ini menyajikan data pasar terbaru yang mencakup volume transaksi, nilai perdagangan, harga karbon, serta partisipasi pelaku pasar. Kredit karbon yang diperdagangkan merepresentasikan unit pengurangan atau penyerapan emisi karbon (CO₂), di mana satu unit setara dengan satu ton CO₂.</p>
            <p v-else>This page presents the latest market data including transaction volume, trading value, carbon prices, and market participant participation. Traded carbon credits represent units of carbon emission reduction or sequestration (CO₂), where one unit is equivalent to one ton of CO₂.</p>
            
            <p v-if="lang === 'id'">Informasi ini memberikan gambaran mengenai perkembangan pasar karbon nasional sebagai bagian dari upaya menuju ekonomi hijau dan pencapaian target net zero emission Indonesia.</p>
            <p v-else>This information provides an overview of national carbon market developments as part of efforts toward a green economy and achieving Indonesia's net zero emission targets.</p>
            
            <div class="info-note">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              <span>{{ lang === 'id' ? 'Sumber data: IDX Carbon (Indonesia Carbon Exchange) - Data diperbarui secara berkala.' : 'Data source: IDX Carbon (Indonesia Carbon Exchange) - Data updated periodically.' }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project List / Market Activity -->
    <section class="market-activity">
      <div class="container">
        <div class="section-title">
          <h3>{{ lang === 'id' ? 'Aktivitas Terkini' : 'Recent Activity' }}</h3>
          <p>{{ lang === 'id' ? 'Daftar unit karbon yang baru saja ditransaksikan atau didaftarkan.' : 'List of carbon units recently traded or registered.' }}</p>
        </div>
        <div class="activity-table-wrapper glass-card">
          <table class="activity-table">
            <thead>
              <tr>
                <th>{{ lang === 'id' ? 'Proyek' : 'Project' }}</th>
                <th>{{ lang === 'id' ? 'Jenis' : 'Type' }}</th>
                <th>{{ lang === 'id' ? 'Volume (tCO₂)' : 'Volume (tCO₂)' }}</th>
                <th>{{ lang === 'id' ? 'Harga' : 'Price' }}</th>
                <th>{{ lang === 'id' ? 'Status' : 'Status' }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in 5" :key="i">
                <td>
                  <div class="project-name">
                    <strong>PT Rimba Lestari {{ i }}</strong>
                    <span>Kalimantan Tengah</span>
                  </div>
                </td>
                <td>{{ lang === 'id' ? 'Kehutanan' : 'Forestry' }}</td>
                <td>{{ (Math.random() * 50000).toFixed(0) }}</td>
                <td>Rp 69.000</td>
                <td><span class="status-badge">{{ lang === 'id' ? 'Ditransaksikan' : 'Transacted' }}</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({ t: Object, lang: String })

const dateInput = ref(null)
const selectedDate = ref(new Date().toISOString().split('T')[0])

const statsData = ref({
  price: '69.500',
  trend: '+2.4%',
  trendUp: true,
  volume: '1.458.290',
  value: '101,34 M',
  participants: '74'
})

const formattedDate = computed(() => {
  const date = new Date(selectedDate.value)
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const locale = props.lang === 'id' ? 'id-ID' : 'en-US';
  return new Intl.DateTimeFormat(locale, options).format(date);
});

function handleDateClick() {
  if (dateInput.value) {
    dateInput.value.showPicker()
  }
}

function onDateChange(e) {
  selectedDate.value = e.target.value
  updateStats(e.target.value)
}

function updateStats(dateStr) {
  // Deterministic "random" data based on date
  const date = new Date(dateStr)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  
  const seed = day + month * 31 + (year - 2024) * 366
  
  // Price: 65k - 75k
  const priceVal = 65000 + (seed * 137 % 10000)
  statsData.value.price = priceVal.toLocaleString('id-ID')
  
  // Trend
  const trendVal = (seed * 7 % 50) / 10
  const isUp = (seed % 3 !== 0)
  statsData.value.trend = `${isUp ? '+' : '-'}${trendVal}%`
  statsData.value.trendUp = isUp
  
  // Volume: 1.2M - 1.6M
  const volVal = 1200000 + (seed * 233 % 400000)
  statsData.value.volume = volVal.toLocaleString('id-ID')
  
  // Value: 90M - 110M
  const valueVal = 90 + (seed * 47 % 20) + (seed % 100 / 100)
  statsData.value.value = `${valueVal.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} M`
  
  // Participants: 65 - 85
  const partVal = 65 + (seed * 13 % 20)
  statsData.value.participants = `${partVal} Entitas`
}

function handleLogoError(e) {
  e.target.style.display = 'none'
}
</script>

<style scoped>
.page-container {
  min-height: 100vh;
  background: #fcfdfe;
  padding-bottom: 80px;
}

/* Hero Section */
.exchange-hero {
  position: relative;
  padding: 180px 0 100px;
  background: linear-gradient(rgba(26, 42, 42, 0.85), rgba(26, 42, 42, 0.85)), url('/backgrounds/forestry.png');
  background-size: cover;
  background-position: center;
  color: white;
  overflow: hidden;
  text-align: center;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

.badge {
  display: inline-block;
  padding: 6px 16px;
  background: rgba(43, 144, 144, 0.2);
  border: 1px solid rgba(43, 144, 144, 0.3);
  border-radius: 100px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #4FB3B3;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.exchange-hero h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 24px;
  background: linear-gradient(135deg, #fff 0%, #a5dada 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.exchange-hero p {
  font-size: 1.25rem;
  color: rgba(255,255,255,0.8);
  max-width: 600px;
  margin: 0 auto;
}

.hero-pattern {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0);
  background-size: 40px 40px;
}

.date-container {
  display: flex;
  justify-content: center;
  margin-top: 32px;
}

.date-badge {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(8px);
  padding: 8px 18px;
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.95);
  font-size: 0.95rem;
  font-weight: 500;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}

.date-badge.interactive:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.date-badge .chevron {
  opacity: 0.5;
  margin-left: 4px;
}

.hidden-date-input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  width: 0; height: 0;
}

.date-badge svg {
  color: #4FB3B3;
}

/* Dashboard Section */
.market-dashboard {
  margin-top: -60px;
  position: relative;
  z-index: 10;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}

.glass-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  padding: 24px;
}

.stat-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.stat-icon {
  width: 48px; height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.stat-icon.price { background: #1A6B6B; }
.stat-icon.volume { background: #2B9090; }
.stat-icon.value { background: #0F766E; }
.stat-icon.participants { background: #4FB3B3; }

.stat-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: #64748b;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 800;
  color: #1A2A2A;
  display: flex;
  align-items: center;
  gap: 8px;
}

.trend {
  font-size: 0.8rem;
  padding: 2px 8px;
  border-radius: 100px;
}

.trend.up { background: #dcfce7; color: #15803d; }
.trend.down { background: #fee2e2; color: #b91c1c; }

.stat-sub {
  font-size: 0.8rem;
  color: #94a3b8;
}

/* Content Box */
.content-box {
  display: grid;
  grid-template-columns: 1.8fr 1.2fr;
  gap: 60px;
  margin-bottom: 60px;
  padding: 50px;
}

.content-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 24px;
}

.idx-logo {
  max-height: 700px;
  width: 100%;
  object-fit: contain;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-header h2 {
  font-size: 1.75rem;
  font-weight: 800;
  color: #1A2A2A;
}

.content-body p {
  font-size: 1.10rem;
  line-height: 1.7;
  color: #475569;
  margin-bottom: 20px;
}

.info-note {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: #f0f9ff;
  border-radius: 12px;
  color: #0369a1;
  font-size: 0.9rem;
  font-weight: 500;
}

.mini-chart {
  display: flex;
  align-items: flex-end;
  gap: 12px;
  width: 100%;
  height: 150px;
}

.bar {
  flex: 1;
  background: linear-gradient(to top, #2B9090, #4FB3B3);
  border-radius: 4px 4px 0 0;
  transition: height 1s ease;
}

/* Market Activity */
.market-activity {
  padding: 40px 0;
}

.section-title {
  margin-bottom: 30px;
}

.section-title h3 {
  font-size: 1.5rem;
  font-weight: 800;
  color: #1A2A2A;
  margin-bottom: 8px;
}

.section-title p {
  color: #1A2A2A;
}

.activity-table-wrapper {
  padding: 0;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.activity-table-wrapper::-webkit-scrollbar {
  height: 4px;
}

.activity-table-wrapper::-webkit-scrollbar-track {
  background: #f1f5f9;
}

.activity-table-wrapper::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 10px;
}

.activity-table-wrapper::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

.activity-table {
  width: 100%;
  border-collapse: collapse;
}

.activity-table th {
  text-align: left;
  padding: 20px;
  background: #f8fafc;
  font-size: 0.85rem;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.activity-table td {
  padding: 20px;
  border-top: 1px solid #f1f5f9;
}

.project-name {
  display: flex;
  flex-direction: column;
}

.project-name span {
  font-size: 0.8rem;
  color: #94a3b8;
}

.status-badge {
  background: #f1f5f9;
  color: #475569;
  padding: 4px 12px;
  border-radius: 100px;
  font-size: 0.8rem;
  font-weight: 600;
}

@media (max-width: 1024px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .content-box { grid-template-columns: 1fr; padding: 30px; }
}

@media (max-width: 768px) {
  .exchange-hero h1 { font-size: 2.2rem; }
  .market-dashboard { margin-top: 20px; }
  .stats-grid { grid-template-columns: 1fr; }
  .idx-logo { max-height: 180px; margin-bottom: 20px; }
  .content-box { 
    padding: 24px 16px; 
    gap: 20px; 
    text-align: center;
  }
  .section-title {
    text-align: center;
    padding: 0 15px;
  }
  .activity-table {
    min-width: 500px;
  }
  .activity-table th, .activity-table td {
    padding: 12px 10px;
    font-size: 0.75rem;
  }
  .project-name strong { font-size: 0.8rem; }
  .project-name span { font-size: 0.7rem; }
  .status-badge { padding: 2px 8px; font-size: 0.7rem; }
  .activity-table-wrapper.glass-card {
    margin: 0 -15px;
    border-radius: 0;
  }
}
</style>
