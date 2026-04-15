<template>
  <div class="auth-container">
    <div class="auth-card">
      <div class="auth-header">
        <h1>Welcome Back</h1>
        <p>Login to your account to continue</p>
      </div>
      <form class="auth-form" @submit.prevent="handleAuth">
        <div class="form-group">
          <label>Email Address</label>
          <input type="email" v-model="email" placeholder="Enter your email" required />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" v-model="password" placeholder="Enter your password" required />
        </div>
        <div class="auth-actions">
          <label class="remember">
            <input type="checkbox" /> Remember me
          </label>
          <a href="#" class="forgot-link">Forgot Password?</a>
        </div>
        <button class="auth-btn primary" @click="handleAuth">Login</button>
      </form>
      <div class="auth-divider"><span>OR</span></div>
      <button class="auth-btn google" @click="handleGoogle">
        <svg width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
        Continue with Google
      </button>
      <div class="auth-footer">
        Don't have an account? <router-link to="/signup">Sign up here</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

defineProps({ t: Object, lang: String })

const router = useRouter()
const email = ref('')
const password = ref('')

function handleAuth() {
  const existingName = localStorage.getItem('user_name') || 'User'
  localStorage.setItem('user_name', existingName)
  localStorage.setItem('user_email', email.value || 'user@example.com')
  router.push('/profile')
}

function handleGoogle() {
  localStorage.setItem('user_name', 'Google User')
  localStorage.setItem('user_email', 'googleuser@example.com')
  router.push('/profile')
}
</script>

<style scoped>
.auth-container {
  min-height: calc(100vh - 120px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F4FAFA;
  padding: 140px 20px 80px;
}
.auth-card {
  background: white;
  padding: 45px 40px;
  border-radius: 24px;
  box-shadow: 0 16px 40px rgba(26,107,107,0.06);
  width: 100%;
  max-width: 440px;
  border: 1px solid rgba(43,144,144,0.1);
}
.auth-header {
  text-align: center;
  margin-bottom: 35px;
}
.auth-header h1 {
  font-family: 'Poppins', sans-serif;
  color: #1A2A2A;
  font-size: 1.8rem;
  margin-bottom: 8px;
}
.auth-header p {
  color: #5A7070;
  font-size: 0.95rem;
}
.form-group {
  margin-bottom: 20px;
}
.form-group label {
  display: block;
  font-size: 0.85rem;
  font-weight: 700;
  color: #1A6B6B;
  margin-bottom: 8px;
}
.form-group input {
  width: 100%;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid rgba(43,144,144,0.2);
  background: #FAFCFC;
  color: #1A2A2A;
  font-family: inherit;
  font-size: 0.95rem;
  transition: all 0.3s;
}
.form-group input:focus {
  outline: none;
  border-color: #2B9090;
  box-shadow: 0 0 0 4px rgba(43,144,144,0.1);
  background: white;
}
.auth-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  font-size: 0.85rem;
}
.remember {
  color: #5A7070;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-weight: 500;
}
.forgot-link {
  color: #2B9090;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
}
.forgot-link:hover {
  color: #1A6B6B;
}
.auth-btn {
  width: 100%;
  padding: 15px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: none;
}
.auth-btn.primary {
  background: linear-gradient(135deg, #1A6B6B, #2B9090);
  color: white;
  box-shadow: 0 4px 15px rgba(26,107,107,0.2);
}
.auth-btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(26,107,107,0.3);
}
.auth-divider {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 24px 0;
  color: #8FA8A8;
  font-size: 0.8rem;
  font-weight: 700;
}
.auth-divider::before, .auth-divider::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid rgba(43,144,144,0.15);
}
.auth-divider span {
  padding: 0 14px;
}
.auth-btn.google {
  background: white;
  color: #1A2A2A;
  border: 1px solid rgba(43,144,144,0.2);
}
.auth-btn.google:hover {
  background: #F4FAFA;
  border-color: #2B9090;
  color: #1A6B6B;
}
.auth-footer {
  text-align: center;
  margin-top: 30px;
  font-size: 0.95rem;
  color: #5A7070;
}
.auth-footer a {
  color: #1A6B6B;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.2s;
}
.auth-footer a:hover {
  color: #2B9090;
}
@media (max-width: 600px) {
  .auth-card {
    padding: 35px 24px;
  }
}
</style>
