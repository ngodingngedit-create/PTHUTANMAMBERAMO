<template>
  <div class="success-page">
    <div class="success-card">
      <div class="icon-circle">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
      </div>
      <h1>Application Submitted!</h1>
      <p>Thank you for applying to the <strong>Carbon Forestry Specialist</strong> role at PT Hutan Harapan Memberamo. Our recruiters will review your profile shortly and get back to you via email.</p>
      
      <div class="next-steps">
        <p><strong>What's Next?</strong></p>
        <p>Expect to hear back from us within 7-14 business days. Keep an eye on your inbox!</p>
      </div>

      <router-link to="/jobs" class="home-btn">Browse More Jobs</router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  document.body.classList.add('hide-mobile-footer')
})

onUnmounted(() => {
  document.body.classList.remove('hide-mobile-footer')
})
</script>

<style>
@media (max-width: 600px) {
  body.hide-mobile-footer .footer,
  body.hide-mobile-footer footer {
    display: none !important;
  }
}
</style>

<style scoped>
.success-page {
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1A6B6B 0%, #2B9090 100%);
  padding: 40px 20px;
  font-family: 'Poppins', sans-serif;
}
.success-card {
  background: white;
  border-radius: 24px;
  padding: 60px 40px;
  max-width: 600px;
  text-align: center;
  box-shadow: 0 24px 60px rgba(0,0,0,0.15);
}
.icon-circle {
  width: 100px; height: 100px;
  background: #E8F6F6;
  border-radius: 50%;
  color: #1A6B6B;
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 30px;
}
.success-card h1 {
  color: #1A2A2A;
  font-size: 2.2rem;
  margin-bottom: 16px;
  font-weight: 800;
}
.success-card p {
  color: #5A7070;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 24px;
}
.next-steps {
  background: #FAFCFC;
  border: 1px solid rgba(43,144,144,0.15);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 40px;
}
.next-steps p { margin-bottom: 0; font-size: 0.95rem; }
.next-steps strong { display: block; margin-bottom: 8px; color: #1A6B6B; }

.home-btn {
  display: inline-block;
  background: #1A6B6B;
  color: white;
  padding: 14px 40px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s;
}
.home-btn:hover {
  background: #124d4d;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(26,107,107,0.2);
}

@media (max-width: 600px) {
  .success-page {
    padding: 12px;
    min-height: 100vh;
  }
  .success-card {
    padding: 24px 16px;
    border-radius: 16px;
    margin-top: 20px; /* lower slightly to exact center */
  }
  .icon-circle {
    width: 50px; height: 50px;
    margin-bottom: 12px;
  }
  .icon-circle svg {
    width: 24px; height: 24px;
  }
  .success-card h1 {
    font-size: 1.3rem;
    margin-bottom: 8px;
  }
  .success-card p {
    font-size: 0.85rem;
    margin-bottom: 12px;
    line-height: 1.4;
  }
  .next-steps {
    padding: 10px;
    margin-bottom: 16px;
  }
  .next-steps p {
    font-size: 0.8rem;
  }
  .home-btn {
    padding: 10px 16px;
    font-size: 0.85rem;
    width: 100%;
    box-sizing: border-box;
  }
}
</style>
