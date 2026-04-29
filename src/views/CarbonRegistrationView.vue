<template>
  <div class="page-container">
    <!-- Hero Section -->
    <section class="registration-hero">
      <div class="container">
        <div class="hero-content">
          <span class="badge">{{ lang === 'id' ? 'MANFAAT' : 'BENEFITS' }}</span>
          <h1>{{ lang === 'id' ? 'Apa Benefit Pasar Karbon?' : 'What are the Benefits of the Carbon Market?' }}</h1>
          <p>{{ lang === 'id' ? 'Dapatkan berbagai keuntungan strategis bagi lingkungan dan keberlanjutan bisnis Anda melalui ekosistem perdagangan karbon resmi.' : 'Gain various strategic benefits for the environment and your business sustainability through an official carbon trading ecosystem.' }}</p>
        </div>
      </div>
      <div class="hero-bg">
        <div class="glow glow-1"></div>
        <div class="glow glow-2"></div>
      </div>
    </section>

    <!-- Form Section -->
    <section class="form-section">
      <div class="container">
        <div class="registration-layout">
          <!-- Form Section -->
          <div v-if="!submitted" class="form-card glass-card">
            <form @submit.prevent="handleSubmit">
              
              <!-- Section 1: Informasi Perusahaan -->
              <div class="form-group-section">
                <div class="section-header">
                  <div class="section-number">01</div>
                  <h3>{{ lang === 'id' ? 'Informasi Perusahaan' : 'Company Information' }}</h3>
                </div>
                <div class="form-grid">
                  <div class="field">
                    <label>{{ lang === 'id' ? 'Nama Perusahaan' : 'Company Name' }}</label>
                    <input v-model="form.companyName" type="text" :placeholder="lang === 'id' ? 'Contoh: PT Carbon Jaya Abadi' : 'e.g., PT Carbon Jaya Abadi'" required>
                  </div>
                  <div class="field">
                    <label>{{ lang === 'id' ? 'Jenis Industri' : 'Industry Type' }}</label>
                    <input v-model="form.industry" type="text" :placeholder="lang === 'id' ? 'Contoh: Energi Terbarukan, Kehutanan' : 'e.g., Renewable Energy, Forestry'" required>
                  </div>
                  <div class="field">
                    <label>{{ lang === 'id' ? 'Email Resmi' : 'Official Email' }}</label>
                    <input v-model="form.email" type="email" placeholder="email@perusahaan.com" required>
                    <span class="helper-text">{{ lang === 'id' ? 'Gunakan email domain perusahaan untuk verifikasi cepat.' : 'Use company domain email for fast verification.' }}</span>
                  </div>
                  <div class="field">
                    <label>{{ lang === 'id' ? 'Nomor Kontak' : 'Contact Number' }}</label>
                    <input v-model="form.phone" type="tel" placeholder="+62 8xx xxxx xxxx" required>
                  </div>
                  <div class="field full-width">
                    <label>{{ lang === 'id' ? 'Lokasi Proyek' : 'Project Location' }}</label>
                    <input v-model="form.location" type="text" :placeholder="lang === 'id' ? 'Provinsi, Kabupaten, Kecamatan' : 'Province, Regency, District'" required>
                  </div>
                </div>
              </div>

              <hr class="separator">

              <!-- Section 2: Detail Proyek Karbon -->
              <div class="form-group-section">
                <div class="section-header">
                  <div class="section-number">02</div>
                  <h3>{{ lang === 'id' ? 'Detail Proyek Karbon' : 'Carbon Project Details' }}</h3>
                </div>
                <div class="form-grid">
                  <div class="field">
                    <label>{{ lang === 'id' ? 'Jenis Proyek' : 'Project Type' }}</label>
                    <select v-model="form.projectType" required>
                      <option value="" disabled selected>{{ lang === 'id' ? 'Pilih Jenis Proyek' : 'Select Project Type' }}</option>
                      <option value="Forestry">{{ lang === 'id' ? 'Forestry (Kehutanan)' : 'Forestry' }}</option>
                      <option value="Renewable Energy">{{ lang === 'id' ? 'Renewable Energy (Energi Terbarukan)' : 'Renewable Energy' }}</option>
                      <option value="Waste Management">{{ lang === 'id' ? 'Waste Management (Pengelolaan Limbah)' : 'Waste Management' }}</option>
                      <option value="Blue Carbon">{{ lang === 'id' ? 'Blue Carbon (Karbon Biru)' : 'Blue Carbon' }}</option>
                    </select>
                  </div>
                  <div class="field">
                    <label>{{ lang === 'id' ? 'Periode Proyek (Vintage Year)' : 'Project Period (Vintage Year)' }}</label>
                    <input v-model="form.vintageYear" type="number" :placeholder="lang === 'id' ? 'Contoh: 2024' : 'e.g., 2024'" required>
                  </div>
                  <div class="field full-width">
                    <label>{{ lang === 'id' ? 'Deskripsi Proyek' : 'Project Description' }}</label>
                    <textarea v-model="form.description" rows="4" :placeholder="lang === 'id' ? 'Jelaskan secara singkat mengenai metodologi dan dampak proyek...' : 'Briefly explain the methodology and project impact...'" required></textarea>
                  </div>
                  <div class="field">
                    <label>{{ lang === 'id' ? 'Estimasi Pengurangan Emisi (tCO₂)' : 'Est. Emission Reduction (tCO₂)' }}</label>
                    <div class="input-with-unit">
                      <input v-model.number="form.emissionReduction" type="number" step="0.01" placeholder="0.00" required>
                      <span class="unit">tCO₂</span>
                    </div>
                    <span class="helper-text">{{ lang === 'id' ? 'Estimasi jumlah emisi karbon yang dapat dikurangi atau diserap oleh proyek.' : 'Estimated amount of carbon emissions that can be reduced or sequestered by the project.' }}</span>
                  </div>
                </div>
              </div>

              <hr class="separator">

              <!-- Section 3: Alokasi Unit Karbon -->
              <div class="form-group-section">
                <div class="section-header">
                  <div class="section-number">03</div>
                  <h3>{{ lang === 'id' ? 'Alokasi Unit Karbon' : 'Carbon Unit Allocation' }}</h3>
                </div>
                <div class="form-grid">
                  <div class="field">
                    <label>{{ lang === 'id' ? 'Jumlah Unit Karbon (tCO₂)' : 'Carbon Unit Amount (tCO₂)' }}</label>
                    <div class="input-with-unit">
                      <input v-model.number="form.carbonUnits" type="number" step="0.01" placeholder="0.00" required>
                      <span class="unit">tCO₂</span>
                    </div>
                    <span class="helper-text">{{ lang === 'id' ? 'Satu unit karbon setara dengan satu ton pengurangan emisi CO₂.' : 'One carbon unit is equivalent to one ton of CO₂ emission reduction.' }}</span>
                  </div>
                  <div class="field">
                    <label>{{ lang === 'id' ? 'Tujuan Alokasi' : 'Allocation Goal' }}</label>
                    <select v-model="form.allocationGoal" required>
                      <option value="" disabled selected>{{ lang === 'id' ? 'Pilih Tujuan' : 'Select Goal' }}</option>
                      <option value="Sold">{{ lang === 'id' ? 'Dijual ke Pasar Karbon' : 'Sold to Carbon Market' }}</option>
                      <option value="Offset Internal">{{ lang === 'id' ? 'Offset Emisi Internal' : 'Internal Emission Offset' }}</option>
                    </select>
                  </div>
                </div>
              </div>

              <hr class="separator">

              <!-- Section 4: Upload Dokumen -->
              <div class="form-group-section">
                <div class="section-header">
                  <div class="section-number">04</div>
                  <h3>{{ lang === 'id' ? 'Upload Dokumen' : 'Upload Documents' }}</h3>
                </div>
                <div class="form-grid">
                  <div class="field file-field">
                    <label>{{ lang === 'id' ? 'Dokumen Proyek (PDF)' : 'Project Document (PDF)' }}</label>
                    <div class="file-upload-wrapper" :class="{ 'has-file': form.files.projectDoc }">
                      <input type="file" accept=".pdf" @change="handleFileChange($event, 'projectDoc')" required>
                      <div class="file-dummy">
                        <svg v-if="!form.files.projectDoc" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>
                        <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2B9090" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
                        <span>{{ form.files.projectDoc ? form.files.projectDoc.name : (lang === 'id' ? 'Pilih file PDF...' : 'Select PDF file...') }}</span>
                      </div>
                    </div>
                    <span class="helper-text">{{ lang === 'id' ? 'Dokumen akan digunakan untuk proses verifikasi dan validasi (MRV).' : 'Documents will be used for measurement, reporting, and verification (MRV) process.' }}</span>
                  </div>
                  <div class="field file-field">
                    <label>{{ lang === 'id' ? 'Sertifikasi (Opsional)' : 'Certification (Optional)' }}</label>
                    <div class="file-upload-wrapper" :class="{ 'has-file': form.files.certification }">
                      <input type="file" accept=".pdf" @change="handleFileChange($event, 'certification')">
                      <div class="file-dummy">
                        <svg v-if="!form.files.certification" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>
                        <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2B9090" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
                        <span>{{ form.files.certification ? form.files.certification.name : (lang === 'id' ? 'Pilih file PDF...' : 'Select PDF file...') }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="field file-field">
                    <label>{{ lang === 'id' ? 'Dokumen Pendukung' : 'Supporting Documents' }}</label>
                    <div class="file-upload-wrapper" :class="{ 'has-file': form.files.supporting }">
                      <input type="file" accept=".pdf" @change="handleFileChange($event, 'supporting')" required>
                      <div class="file-dummy">
                        <svg v-if="!form.files.supporting" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>
                        <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2B9090" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
                        <span>{{ form.files.supporting ? form.files.supporting.name : (lang === 'id' ? 'Pilih file PDF...' : 'Select PDF file...') }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr class="separator">

              <!-- Section 5: Metode Pembayaran -->
              <div class="form-group-section">
                <div class="section-header">
                  <div class="section-number">05</div>
                  <h3>{{ lang === 'id' ? 'Metode Pembayaran' : 'Payment Method' }}</h3>
                </div>
                <div class="payment-options">
                  <label class="payment-card" :class="{ active: form.paymentMethod === 'Transfer Bank' }">
                    <input type="radio" v-model="form.paymentMethod" value="Transfer Bank" required>
                    <div class="payment-info">
                      <span class="payment-title">{{ lang === 'id' ? 'Transfer Bank (Virtual Account)' : 'Bank Transfer (Virtual Account)' }}</span>
                      <span class="payment-desc">{{ lang === 'id' ? 'Verifikasi otomatis dalam hitungan menit.' : 'Automatic verification within minutes.' }}</span>
                    </div>
                  </label>
                  <label class="payment-card" :class="{ active: form.paymentMethod === 'Credit Card' }">
                    <input type="radio" v-model="form.paymentMethod" value="Credit Card">
                    <div class="payment-info">
                      <span class="payment-title">{{ lang === 'id' ? 'Kartu Kredit / Debit Online' : 'Credit Card / Online Debit' }}</span>
                      <span class="payment-desc">{{ lang === 'id' ? 'Mendukung Visa, Mastercard, dan JCB.' : 'Supports Visa, Mastercard, and JCB.' }}</span>
                    </div>
                  </label>
                </div>
                <p class="payment-note">{{ lang === 'id' ? 'Catatan: Pembayaran digunakan untuk proses registrasi dan verifikasi proyek oleh auditor independen.' : 'Note: Payment is used for project registration and verification by independent auditors.' }}</p>
              </div>

              <!-- NO BUTTONS HERE - MOVED TO BOTTOM BAR -->
            </form>
          </div>

          <!-- Success Message -->
          <div v-else class="success-card glass-card">
            <div class="success-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <h2>{{ lang === 'id' ? 'Registrasi Berhasil Diajukan' : 'Registration Successfully Submitted' }}</h2>
            <div class="status-steps">
              <div class="step active">
                <div class="step-dot"></div>
                <div class="step-label">{{ lang === 'id' ? 'Status: Sedang Ditinjau' : 'Status: Under Review' }}</div>
              </div>
              <div class="step">
                <div class="step-dot"></div>
                <div class="step-label">{{ lang === 'id' ? 'Akan Diverifikasi oleh Auditor' : 'To be Verified by Auditor' }}</div>
              </div>
              <div class="step">
                <div class="step-dot"></div>
                <div class="step-label">{{ lang === 'id' ? 'Notifikasi via Email Resmi' : 'Notification via Official Email' }}</div>
              </div>
            </div>
            <p class="success-desc">{{ lang === 'id' ? 'Terima kasih atas kontribusi Anda dalam pasar karbon Indonesia. Tim analis kami akan meninjau dokumen Anda dalam waktu 3-5 hari kerja.' : 'Thank you for your contribution to the Indonesian carbon market. Our analysis team will review your documents within 3-5 business days.' }}</p>
            <button class="btn-outline" @click="submitted = false">{{ lang === 'id' ? 'Registrasi Baru' : 'New Registration' }}</button>
          </div>

          <!-- Booking List Card -->
          <div class="booking-list-card glass-card">
            <div class="booking-header">
              <div class="header-title">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                <h3>{{ lang === 'id' ? 'Daftar Booking Karbon' : 'Carbon Booking List' }}</h3>
              </div>
              <span class="booking-count">{{ bookings.length }}</span>
            </div>
            
            <div class="booking-list">
              <div v-for="(booking, index) in bookings" :key="index" class="booking-item" :class="{ 'new-entry': index === 0 && isSubmitting }" @click="openDetail(booking)">
                <div class="booking-main">
                  <strong>{{ booking.companyName }}</strong>
                  <span class="project-type">{{ booking.projectType }}</span>
                </div>
                <div class="booking-details">
                  <div class="detail">
                    <span class="label">Unit</span>
                    <span class="value">{{ booking.carbonUnits }} tCO₂</span>
                  </div>
                  <div class="detail">
                    <span class="label">Status</span>
                    <span class="status-tag" :class="booking.status.toLowerCase()">{{ booking.status }}</span>
                  </div>
                </div>
                <div class="booking-footer">
                  <span class="vintage">Vintage: {{ booking.vintageYear }}</span>
                  <span class="date">{{ booking.date }}</span>
                </div>
              </div>

              <div v-if="bookings.length === 0" class="empty-state">
                <p>{{ lang === 'id' ? 'Belum ada data booking karbon.' : 'No carbon booking data yet.' }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Detail Modal -->
    <div v-if="showDetailModal" class="modal-overlay" @click.self="closeDetail">
      <div class="detail-modal glass-card" v-reveal>
        <button class="btn-close" @click="closeDetail">&times;</button>
        <div class="modal-header">
          <div class="status-badge" :class="selectedBooking.status.toLowerCase()">{{ selectedBooking.status }}</div>
          <h2>{{ selectedBooking.companyName }}</h2>
          <span class="sub">{{ selectedBooking.projectType }} {{ lang === 'id' ? 'Proyek' : 'Project' }}</span>
        </div>
        <div class="modal-body">
          <div class="detail-grid">
            <div class="detail-group">
              <label>{{ lang === 'id' ? 'Unit Karbon' : 'Carbon Units' }}</label>
              <div class="value-highlight">{{ selectedBooking.carbonUnits }} <span>tCO₂</span></div>
            </div>
            <div class="detail-group">
              <label>{{ lang === 'id' ? 'Tahun Vintage' : 'Vintage Year' }}</label>
              <div class="value">{{ selectedBooking.vintageYear }}</div>
            </div>
            <div class="detail-group">
              <label>{{ lang === 'id' ? 'Tanggal Pengajuan' : 'Submission Date' }}</label>
              <div class="value">{{ selectedBooking.date }}</div>
            </div>
            <div class="detail-group">
              <label>{{ lang === 'id' ? 'ID Proyek' : 'Project ID' }}</label>
              <div class="value">#{{ Math.random().toString(36).substr(2, 6).toUpperCase() }}</div>
            </div>
          </div>
          <div class="modal-actions">
            <button class="btn-outline" @click="closeDetail">{{ lang === 'id' ? 'Tutup Detail' : 'Close Details' }}</button>
            <button class="btn-primary">{{ lang === 'id' ? 'Unduh Dokumen' : 'Download Document' }}</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Fixed Bottom Bar -->
    <div v-if="!submitted" class="fixed-bottom-bar">
      <div class="container bar-container">
        <div class="bar-info">

        </div>
        <div class="bar-actions">
          <button type="button" class="btn-draft" @click="saveDraft">{{ lang === 'id' ? 'Simpan Draft' : 'Save Draft' }}</button>
          <button type="button" class="btn-submit" :disabled="isSubmitting" @click="handleSubmit">
            <span v-if="!isSubmitting">{{ lang === 'id' ? 'Ajukan Registrasi' : 'Submit Registration' }}</span>
            <span v-else class="loader"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const props = defineProps({ t: Object, lang: String })

const submitted = ref(false)
const isSubmitting = ref(false)
const showDetailModal = ref(false)
const selectedBooking = ref(null)

function openDetail(booking) {
  selectedBooking.value = booking
  showDetailModal.value = true
  document.body.style.overflow = 'hidden'
}

function closeDetail() {
  showDetailModal.value = false
  document.body.style.overflow = 'auto'
}

const bookings = ref([
  {
    companyName: 'PT Alam Sejahtera',
    projectType: 'Forestry',
    carbonUnits: '50.000',
    vintageYear: '2024',
    date: '24 Apr 2026',
    status: 'Verified'
  },
  {
    companyName: 'Eco Energy Corp',
    projectType: 'Renewable Energy',
    carbonUnits: '12.500',
    vintageYear: '2025',
    date: '25 Apr 2026',
    status: 'Pending'
  },
  {
    companyName: 'Mamberamo Bio-Guard',
    projectType: 'Blue Carbon',
    carbonUnits: '8.200',
    vintageYear: '2024',
    date: '26 Apr 2026',
    status: 'Reviewing'
  }
])

const form = reactive({
  companyName: '',
  industry: '',
  email: '',
  phone: '',
  location: '',
  projectType: '',
  vintageYear: '',
  description: '',
  emissionReduction: null,
  carbonUnits: null,
  allocationGoal: '',
  paymentMethod: '',
  files: {
    projectDoc: null,
    certification: null,
    supporting: null
  }
})

function handleFileChange(event, field) {
  const file = event.target.files[0]
  if (file && file.type === 'application/pdf') {
    form.files[field] = file
  } else {
    alert('Hanya file PDF yang diperbolehkan.')
    event.target.value = ''
  }
}

function handleSubmit() {
  isSubmitting.value = true
  
  // Create new booking object
  const newBooking = {
    companyName: form.companyName,
    projectType: form.projectType,
    carbonUnits: form.carbonUnits.toLocaleString('id-ID'),
    vintageYear: form.vintageYear,
    date: new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date()),
    status: 'Pending'
  }

  // Simulate API call
  setTimeout(() => {
    // Add to top of list
    bookings.value.unshift(newBooking)
    
    isSubmitting.value = false
    submitted.value = true
    window.scrollTo({ top: 0, behavior: 'smooth' })
    
    // Reset form after successful submission
    Object.assign(form, {
      companyName: '',
      industry: '',
      email: '',
      phone: '',
      location: '',
      projectType: '',
      vintageYear: '',
      description: '',
      emissionReduction: null,
      carbonUnits: null,
      allocationGoal: '',
      paymentMethod: '',
      files: {
        projectDoc: null,
        certification: null,
        supporting: null
      }
    })
  }, 2000)
}

function saveDraft() {
  alert('Draft registrasi telah disimpan di akun Anda.')
}
</script>

<style scoped>
.page-container {
  min-height: 100vh;
  background: #f8fafc;
  padding-bottom: 100px;
  overflow-x: hidden;
  width: 100%;
}

.page-container * {
  box-sizing: border-box;
}

/* Hero Section */
.registration-hero {
  position: relative;
  padding: 180px 0 100px;
  background: linear-gradient(rgba(26, 42, 42, 0.8), rgba(26, 42, 42, 0.8)), url('/backgrounds/our_approach.png');
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

.registration-hero h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 24px;
  line-height: 1.1;
  background: linear-gradient(135deg, #fff 0%, #a5dada 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.registration-hero p {
  font-size: 1.25rem;
  color: rgba(255,255,255,0.8);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.hero-bg {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
}

.glow {
  position: absolute;
  width: 600px; height: 600px;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.15;
}

.glow-1 { top: -100px; left: -100px; background: #2B9090; }
.glow-2 { bottom: -100px; right: -100px; background: #1A6B6B; }

/* Form Section */
.form-section {
  margin-top: -60px;
  position: relative;
  z-index: 10;
}

.registration-layout {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 40px;
  max-width: 1300px;
  margin: 0 auto;
  align-items: start;
}

.glass-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 24px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.02) inset;
  padding: 40px;
}

.form-card {
  width: 100%;
}

.form-group-section {
  margin-bottom: 40px;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 30px;
}

.section-number {
  width: 40px; height: 40px;
  background: #1A6B6B;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-weight: 700;
  font-size: 0.9rem;
}

.section-header h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1A2A2A;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.field.full-width {
  grid-column: span 2;
}

.field label {
  font-weight: 600;
  font-size: 0.9rem;
  color: #475569;
}

.field input, .field select, .field textarea {
  padding: 14px 18px;
  border: 1.5px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s;
  background: #fcfdfe;
}

.field input:focus, .field select:focus, .field textarea:focus {
  outline: none;
  border-color: #2B9090;
  box-shadow: 0 0 0 4px rgba(43, 144, 144, 0.1);
  background: white;
}

.helper-text {
  font-size: 0.8rem;
  color: #64748b;
  font-style: italic;
}

.input-with-unit {
  position: relative;
  display: flex;
  align-items: center;
}

.input-with-unit input {
  flex: 1;
  padding-right: 70px;
}

.unit {
  position: absolute;
  right: 18px;
  font-weight: 700;
  color: #94a3b8;
  font-size: 0.85rem;
}

.separator {
  border: none;
  border-top: 1.5px solid #f1f5f9;
  margin: 40px 0;
}

/* File Upload */
.file-upload-wrapper {
  position: relative;
  border: 2px dashed #e2e8f0;
  border-radius: 12px;
  padding: 30px;
  text-align: center;
  transition: all 0.3s;
  cursor: pointer;
}

.file-upload-wrapper:hover {
  border-color: #2B9090;
  background: rgba(43, 144, 144, 0.02);
}

.file-upload-wrapper.has-file {
  border-color: #2B9090;
  background: rgba(43, 144, 144, 0.05);
  border-style: solid;
}

.file-upload-wrapper input {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  opacity: 0;
  cursor: pointer;
}

.file-dummy {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.file-dummy span {
  font-size: 0.9rem;
  color: #64748b;
  font-weight: 500;
}

/* Payment Options */
.payment-options {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
}

.payment-card {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px;
  border: 1.5px solid #e2e8f0;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s;
}

.payment-card:hover {
  border-color: #cbd5e1;
  background: #fcfdfe;
}

.payment-card.active {
  border-color: #2B9090;
  background: rgba(43, 144, 144, 0.05);
  box-shadow: 0 4px 12px rgba(43, 144, 144, 0.08);
}

.payment-card input {
  margin-top: 4px;
  width: 18px; height: 18px;
  accent-color: #1A6B6B;
}

.payment-info {
  display: flex;
  flex-direction: column;
}

.payment-title {
  font-weight: 700;
  color: #1A2A2A;
  font-size: 1rem;
}

.payment-desc {
  font-size: 0.85rem;
  color: #64748b;
}

.payment-note {
  font-size: 0.85rem;
  color: #ef4444;
  font-weight: 500;
  background: #fef2f2;
  padding: 12px 16px;
  border-radius: 8px;
  border-left: 4px solid #ef4444;
}

/* Actions */
.form-actions {
  display: flex;
  gap: 20px;
  margin-top: 60px;
}

.btn-submit {
  flex: 2;
  background: linear-gradient(135deg, #1A6B6B, #2B9090);
  color: white;
  border: none;
  padding: 18px;
  border-radius: 14px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 25px rgba(26, 107, 107, 0.2);
}

.btn-submit:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 15px 30px rgba(26, 107, 107, 0.3);
}

.btn-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.btn-draft {
  flex: 1;
  background: white;
  color: #1A6B6B;
  border: 2px solid #1A6B6B;
  padding: 18px;
  border-radius: 14px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-draft:hover {
  background: rgba(26, 107, 107, 0.05);
}

/* Success Card */
.success-card {
  text-align: center;
  padding: 80px 40px;
}

.success-icon {
  width: 100px; height: 100px;
  background: #ecfdf5;
  color: #10b981;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 0 auto 30px;
}

.success-card h2 {
  font-size: 2.25rem;
  color: #1A2A2A;
  margin-bottom: 40px;
}

.status-steps {
  max-width: 500px;
  margin: 0 auto 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;
}

.step {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  background: #f8fafc;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}

.step.active {
  background: #f0fdf4;
  border-color: #bbf7d0;
}

.step-dot {
  width: 12px; height: 12px;
  border-radius: 50%;
  background: #cbd5e1;
}

.step.active .step-dot {
  background: #10b981;
  box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.2);
}

.step-label {
  font-weight: 600;
  color: #475569;
}

.step.active .step-label {
  color: #065f46;
}

.success-desc {
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 40px;
}

.btn-outline {
  background: transparent;
  border: 2px solid #cbd5e1;
  padding: 14px 30px;
  border-radius: 10px;
  font-weight: 600;
  color: #475569;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-outline:hover {
  background: #f8fafc;
  border-color: #94a3b8;
}

.loader {
  width: 24px; height: 24px;
  border: 3px solid rgba(255,255,255,0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Booking List Card */
.booking-list-card {
  position: sticky;
  top: 100px;
  padding: 30px;
}

.booking-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1.5px solid #f1f5f9;
}

.header-title {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #1A6B6B;
}

.header-title h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
}

.booking-count {
  background: #1A6B6B;
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 100px;
}

.booking-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: 600px;
  overflow-y: auto;
  padding-right: 5px;
}

.booking-list::-webkit-scrollbar {
  width: 4px;
}

.booking-list::-webkit-scrollbar-thumb {
  background: #e2e8f0;
  border-radius: 10px;
}

.booking-item {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 16px;
  transition: all 0.3s;
  cursor: pointer;
}

.booking-item:hover {
  border-color: #2B9090;
  background: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.03);
  transform: translateX(5px);
}

.booking-main {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 12px;
}

.booking-main strong {
  color: #1A2A2A;
  font-size: 0.95rem;
}

.project-type {
  font-size: 0.8rem;
  color: #64748b;
  font-weight: 500;
}

.booking-details {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  padding: 10px 0;
  border-top: 1px dashed #e2e8f0;
  border-bottom: 1px dashed #e2e8f0;
}

.detail {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.detail .label {
  font-size: 0.7rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.detail .value {
  font-size: 0.85rem;
  font-weight: 700;
  color: #1A6B6B;
}

.status-tag {
  font-size: 0.75rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 6px;
}

.status-tag.verified { background: #dcfce7; color: #15803d; }
.status-tag.pending { background: #fef9c3; color: #854d0e; }
.status-tag.reviewing { background: #e0f2fe; color: #0369a1; }

.booking-footer {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: #94a3b8;
}

@keyframes highlight {
  from { background: #f0fdf4; border-color: #10b981; transform: scale(1.02); }
  to { background: #f8fafc; border-color: #e2e8f0; transform: scale(1); }
}

.new-entry {
  animation: highlight 2s ease-out;
}

.empty-state {
  text-align: center;
  padding: 40px 0;
  color: #94a3b8;
  font-size: 0.9rem;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.4);
  backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.detail-modal {
  width: 100%;
  max-width: 600px;
  position: relative;
  padding: 50px;
  background: white;
  border: 1px solid rgba(255,255,255,0.8);
}

.btn-close {
  position: absolute;
  top: 20px; right: 20px;
  background: none;
  border: none;
  font-size: 2rem;
  color: #94a3b8;
  cursor: pointer;
  line-height: 1;
}

.modal-header {
  text-align: center;
  margin-bottom: 40px;
}

.modal-header .status-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 100px;
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 16px;
  text-transform: uppercase;
}

.status-badge.verified { background: #dcfce7; color: #15803d; }
.status-badge.pending { background: #fef9c3; color: #854d0e; }
.status-badge.reviewing { background: #e0f2fe; color: #0369a1; }

.modal-header h2 {
  font-size: 2rem;
  color: #1A2A2A;
  margin-bottom: 8px;
}

.modal-header .sub {
  color: #64748b;
  font-weight: 500;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-bottom: 40px;
}

.detail-group label {
  display: block;
  font-size: 0.8rem;
  color: #94a3b8;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 8px;
}

.value-highlight {
  font-size: 1.5rem;
  font-weight: 800;
  color: #1A6B6B;
}

.value-highlight span { font-size: 1rem; opacity: 0.7; }

.detail-group .value {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1A2A2A;
}

.modal-actions {
  display: flex;
  gap: 16px;
}

.modal-actions button {
  flex: 1;
  padding: 14px;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-primary {
  background: #1A6B6B;
  color: white;
  border: none;
}

.btn-primary:hover {
  background: #2B9090;
  box-shadow: 0 10px 20px rgba(26, 107, 107, 0.2);
}

/* Fixed Bottom Bar */
.fixed-bottom-bar {
  position: fixed;
  bottom: 0; left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(0,0,0,0.05);
  padding: 14px 0;
  z-index: 100;
  box-shadow: 0 -10px 40px rgba(0,0,0,0.03);
}

.bar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.bar-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.progress-indicator {
  width: 200px;
  height: 6px;
  background: #f1f5f9;
  border-radius: 100px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(to right, #1A6B6B, #2B9090);
  border-radius: 100px;
}

.step-text {
  font-size: 0.85rem;
  font-weight: 600;
  color: #64748b;
}

.bar-actions {
  display: flex;
  gap: 16px;
}

.bar-actions button {
  padding: 8px 20px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s;
}

.bar-actions .btn-draft {
  background: white;
  color: #1A6B6B;
  border: 2px solid #1A6B6B;
}

.bar-actions .btn-submit {
  background: linear-gradient(135deg, #1A6B6B, #2B9090);
  color: white;
  border: none;
  min-width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 20px rgba(26, 107, 107, 0.15);
}

.bar-actions .btn-submit:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 15px 30px rgba(26, 107, 107, 0.2);
}

.bar-actions .btn-submit:disabled {
  opacity: 0.7;
}

@media (max-width: 1200px) {
  .registration-layout {
    grid-template-columns: 1fr;
    width: 100%;
    gap: 20px;
    overflow: hidden;
  }
  
  .booking-list-card {
    position: static;
  }
}

@media (max-width: 768px) {
  .registration-hero {
    padding: 130px 0 50px;
    margin: 0;
    width: 100%;
    display: block;
    overflow-x: hidden;
  }
  .registration-hero h1 { 
    font-size: 1.8rem; 
    padding: 0 10px;
  }
  .registration-hero p {
    font-size: 0.95rem;
    padding: 0 15px;
  }
  .form-section {
    margin-top: 15px;
    width: 100%;
    overflow-x: hidden;
  }
  .registration-layout {
    grid-template-columns: 1fr;
    width: 100%;
    gap: 20px;
    overflow: hidden;
  }
  .glass-card { 
    padding: 16px 12px; 
    border-radius: 14px;
    overflow: hidden;
    width: 100%;
    max-width: 100%;
  }
  .section-header {
    gap: 8px;
    margin-bottom: 16px;
  }
  .section-header h3 {
    font-size: 1.05rem;
    line-height: 1.3;
  }
  .section-number {
    width: 26px; height: 26px;
    font-size: 0.7rem;
    flex-shrink: 0;
  }
  .form-grid { grid-template-columns: 1fr; gap: 14px; }
  .field.full-width { grid-column: span 1; }
  
  .fixed-bottom-bar {
    padding: 10px 0;
  }
  .bar-container { 
    flex-direction: row; 
    justify-content: flex-end;
    padding: 0 15px;
  }
  .bar-info { display: none; }
  .bar-actions { 
    width: 100%; 
    justify-content: flex-end; 
    display: flex;
    gap: 8px;
  }
  .bar-actions button { 
    flex: none; 
    min-width: auto; 
    padding: 8px 12px; 
    font-size: 0.8rem;
    border-radius: 6px;
  }
}
</style>
