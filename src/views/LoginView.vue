<template>
  <div class="login-split-layout">
    <div class="login-container">
      <!-- LEFT SIDE: MAMBERAMO IMAGE SLIDESHOW -->
      <div class="login-visual">
        <div class="visual-wrapper">
          <transition-group name="fade">
            <img 
              v-for="(img, index) in backgroundImages" 
              :key="img"
              v-show="index === currentImageIndex"
              :src="img" 
              alt="Mamberamo Visual" 
              class="visual-bg" 
            />
          </transition-group>
          <div class="visual-overlay"></div>
        </div>
      </div>

      <!-- RIGHT SIDE: LOGIN FORM CONTAINER -->
      <div class="login-form-container">
        <div class="login-card">
          <div class="form-header">
            <!-- Logo & Brand Text (Replicated from Header) -->
            <div class="brand-logo-container">
              <img src="/logo/logo-membrano.png" alt="Logo PT Hutan Harapan" class="brand-logo" />
              <div class="brand-logo-text">
                <span class="brand-logo-name">PT Hutan Harapan</span>
                <span class="brand-logo-sub">Mamberamo</span>
              </div>
            </div>
            
            <h1>Masuk sebagai Creator/Staff</h1>
            <p class="subtitle">
              Belum punya akun? <router-link to="/signup" class="link">Daftar Akun</router-link>
            </p>
          </div>

          <form class="auth-form" @submit.prevent="handleAuth">
            <div class="input-group">
              <label>Email</label>
              <input type="email" v-model="email" placeholder="Masukan Email" required />
            </div>

            <div class="input-group">
              <label>Password</label>
              <div class="password-wrapper">
                <input 
                  :type="showPassword ? 'text' : 'password'" 
                  v-model="password" 
                  placeholder="Masukan Password" 
                  required 
                />
                <button type="button" class="visibility-toggle" @click="showPassword = !showPassword">
                  <!-- Eye Open Icon -->
                  <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                  <!-- Eye Closed Icon -->
                  <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" y1="2" x2="22" y2="22"/></svg>
                </button>
              </div>
              <div class="forgot-password-row">
                <a href="#" class="link forgot-link">Lupa Password?</a>
              </div>
            </div>

            <button class="btn-submit" type="submit">Selanjutnya</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const showPassword = ref(false)

const backgroundImages = [
  '/backgrounds/forestry.png',
  '/backgrounds/community.png',
  '/backgrounds/environment.png',
  '/backgrounds/m_biodiversity.png',
  '/backgrounds/patrol.png'
]
const currentImageIndex = ref(0)
let intervalId

onMounted(() => {
  intervalId = setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % backgroundImages.length
  }, 4000) // Change image every 4 seconds
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})

function handleAuth() {
  localStorage.setItem('user_name', 'Admin Staff')
  localStorage.setItem('user_email', email.value || 'admin@hhmr.co.id')
  router.push('/dashboard')
}
</script>

<style scoped>
.login-split-layout {
  display: flex;
  min-height: 100vh;
  width: 100%;
  background: #F4FAFA; 
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
}

.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px; /* Tighter gap between image and card */
  max-width: 1100px;
  width: 100%;
  margin-top: 40px; /* Lowering the whole thing */
}

/* LEFT SIDE VISUAL */
.login-visual {
  flex: 1.3;
  display: none; 
}
@media (min-width: 900px) {
  .login-visual {
    display: block;
  }
}
.visual-wrapper {
  position: relative;
  width: 100%;
  height: 560px; /* Height to match the card */
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(26,107,107,0.1);
}
.visual-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.visual-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(10,30,30,0.3) 0%, rgba(20,50,50,0.1) 100%);
  z-index: 1;
}

/* Image Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  position: absolute;
  z-index: -1;
}

/* RIGHT SIDE FORM CONTAINER */
.login-form-container {
  flex: 1;
  display: flex;
  justify-content: center;
}

/* CENTERED LOGIN CARD */
.login-card {
  background: #ffffff;
  width: 100%;
  max-width: 360px;
  height: 560px; /* Same height as visual wrapper */
  padding: 40px 32px;
  border-radius: 20px;
  box-shadow: 0 12px 40px rgba(26,107,107,0.08);
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center form vertically within card */
  animation: fadeUpIn 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes fadeUpIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* BRAND LOGO */
.brand-logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 24px;
}
.brand-logo {
  height: 32px;
  width: auto;
  object-fit: contain;
}
.brand-logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
  text-align: left;
}
.brand-logo-name {
  font-family: 'Poppins', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  color: #1A2A2A;
}
.brand-logo-sub {
  font-size: 0.75rem;
  font-weight: 600;
  color: #2B9090;
}

.form-header {
  margin-bottom: 25px;
  text-align: center;
}
.form-header h1 {
  font-family: var(--font-display, 'Playfair Display', serif);
  color: var(--dark-charcoal, #1A2A2A);
  font-size: 1.5rem;
  margin-bottom: 8px;
  font-weight: 800;
}
.form-header .subtitle {
  color: var(--slate-gray, #5A7070);
  font-size: 0.85rem;
}
.link {
  color: var(--primary-teal, #1A6B6B);
  font-weight: 600;
  text-decoration: none;
}

/* INPUT GROUPS */
.input-group {
  margin-bottom: 18px;
  text-align: left;
}
.input-group label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: #1A2A2A;
  margin-bottom: 6px;
}
.input-group input {
  width: 100%;
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid #E2E8F0;
  background: #F8FAFC;
}

.password-wrapper { position: relative; }
.visibility-toggle {
  position: absolute;
  right: 12px; top: 50%;
  transform: translateY(-50%);
  background: none; border: none; color: #94A3B8; cursor: pointer;
}
.forgot-password-row { display: flex; justify-content: flex-end; margin-top: 8px; }
.forgot-link { font-size: 0.8rem; }

.btn-submit {
  width: 100%;
  padding: 14px;
  border-radius: 50px;
  background: #1A6B6B;
  color: white;
  font-weight: 700;
  border: none;
  cursor: pointer;
  margin-top: 10px;
}

@media (max-width: 900px) {
  .login-container { flex-direction: column; padding: 20px; }
  .login-card { height: auto; max-width: 100%; }
}
</style>
