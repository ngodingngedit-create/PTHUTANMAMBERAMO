<template>
  <section id="contact" class="section contact">
    <div class="container">
      <div class="contact-grid">
        <!-- Left: Info -->
        <div class="contact-info">
          <div class="section-tag">{{ t.contact.section_tag }}</div>
          <h2 class="section-title">{{ t.contact.title }}</h2>
          <div class="divider"></div>
          <p class="contact-sub">{{ t.contact.subtitle }}</p>

          <div class="info-items">
            <div class="info-item">
              <div class="info-ico">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <div class="info-label">{{ t.contact.address_title }}</div>
                <div class="info-val">{{ t.contact.address }}</div>
              </div>
            </div>
            <div class="info-item">
              <div class="info-ico">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div>
                <div class="info-label">{{ t.contact.email_title }}</div>
                <div class="info-val">info@hutanharapanmemberamo.com</div>
              </div>
            </div>
            <div class="info-item">
              <div class="info-ico">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <div class="info-label">{{ t.contact.phone_title }}</div>
                <div class="info-val">+62 811-XXXX-XXXX</div>
              </div>
            </div>
          </div>

          <!-- Partners quick links -->
          <div class="partner-quick">
            <div class="pq-label">{{ lang === 'en' ? 'Strategic Partners' : 'Mitra Strategis' }}</div>
            <div class="pq-links">
              <!-- <a href="https://enkingint.org/" target="_blank" class="pq-link">EKI Energy</a>
              <a href="https://www.pertamina.com/id" target="_blank" class="pq-link">Pertamina</a>
              <a href="https://3sahabatlingkungan.com/" target="_blank" class="pq-link">3 Sahabat</a> -->
            </div>
          </div>
        </div>

        <!-- Right: Form -->
        <div class="contact-form-wrap">
          <form class="contact-form" @submit.prevent="submitForm">
            <Transition name="success-fade" mode="out-in">
              <div v-if="submitted" class="success-msg">
                <div class="success-icon">✓</div>
                <div class="success-title">{{ lang === 'en' ? 'Message Sent!' : 'Pesan Terkirim!' }}</div>
                <div class="success-sub">{{ lang === 'en' ? 'We\'ll get back to you shortly.' : 'Kami akan segera menghubungi Anda.' }}</div>
              </div>
              <div v-else class="form-fields" key="form">
                <div class="form-row">
                  <div class="form-group">
                    <label class="form-label">{{ t.contact.name_label }}</label>
                    <input v-model="form.name" type="text" class="form-input" :placeholder="t.contact.name_placeholder" required />
                  </div>
                  <div class="form-group">
                    <label class="form-label">{{ t.contact.email_label }}</label>
                    <input v-model="form.email" type="email" class="form-input" :placeholder="t.contact.email_placeholder" required />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group">
                    <label class="form-label">{{ t.contact.company_label }}</label>
                    <input v-model="form.company" type="text" class="form-input" :placeholder="t.contact.company_placeholder" />
                  </div>
                  <div class="form-group">
                    <label class="form-label">{{ t.contact.interest_label }}</label>
                    <select v-model="form.interest" class="form-input form-select">
                      <option value="">--</option>
                      <option>{{ t.contact.interest_opt1 }}</option>
                      <option>{{ t.contact.interest_opt2 }}</option>
                      <option>{{ t.contact.interest_opt3 }}</option>
                      <option>{{ t.contact.interest_opt4 }}</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label class="form-label">{{ t.contact.message_label }}</label>
                  <textarea v-model="form.message" class="form-input form-textarea" :placeholder="t.contact.message_placeholder" rows="5" required></textarea>
                </div>
                <button type="submit" class="btn-primary submit-btn" :disabled="loading">
                  <span v-if="loading" class="spinner"></span>
                  <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  {{ t.contact.submit }}
                </button>
              </div>
            </Transition>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

defineProps({ t: Object, lang: String })

const submitted = ref(false)
const loading = ref(false)
const form = reactive({ name: '', email: '', company: '', interest: '', message: '' })

function submitForm() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    submitted.value = true
  }, 1200)
}
</script>

<style scoped>
.contact {
  background: var(--bg-section-alt);
}

.contact-grid {
  display: grid;
  grid-template-columns: 420px 1fr;
  gap: 80px;
  align-items: start;
}

/* Info */
.contact-sub {
  font-size: 0.95rem;
  color: var(--slate-gray);
  line-height: 1.85;
  margin-bottom: 36px;
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.info-ico {
  width: 42px;
  height: 42px;
  background: white;
  border: 1px solid rgba(43, 144, 144, 0.15);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--medium-teal);
  flex-shrink: 0;
  box-shadow: var(--shadow-sm);
}

.info-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--muted);
  margin-bottom: 4px;
  font-weight: 800;
}

.info-val {
  font-size: 0.9rem;
  color: var(--dark-charcoal);
  font-weight: 700;
}

/* Partner Quick Links */
.partner-quick {
  border-top: 1px solid rgba(43, 144, 144, 0.1);
  padding-top: 28px;
}

.pq-label {
  font-size: 0.75rem;
  font-weight: 800;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 14px;
}

.pq-links {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.pq-link {
  padding: 8px 18px;
  background: white;
  border: 1px solid rgba(43, 144, 144, 0.15);
  border-radius: 10px;
  color: var(--medium-teal);
  font-size: 0.8rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.25s;
  box-shadow: var(--shadow-sm);
}

.pq-link:hover {
  background: var(--teal-5);
  border-color: var(--medium-teal);
  transform: translateY(-2px);
}

/* Form */
.contact-form-wrap {
  background: white;
  border: 1px solid rgba(43, 144, 144, 0.15);
  border-radius: 24px;
  padding: 48px;
  box-shadow: var(--shadow-md);
  min-height: 520px;
  display: flex;
  flex-direction: column;
}

.form-fields {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form-label {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--dark-charcoal);
  letter-spacing: 0.02em;
}

.form-input {
  background: var(--bg-section-alt);
  border: 1.5px solid rgba(43, 144, 144, 0.1);
  border-radius: 12px;
  padding: 14px 20px;
  color: var(--dark-charcoal);
  font-family: 'Inter', sans-serif;
  font-size: 0.92rem;
  transition: all 0.25s;
  outline: none;
}

.form-input::placeholder {
  color: var(--muted);
}

.form-input:focus {
  border-color: var(--medium-teal);
  background: white;
  box-shadow: 0 0 0 4px rgba(43, 144, 144, 0.08);
}

.form-select {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%232B9090' stroke-width='3'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 20px center;
  background-size: 14px;
}

.form-textarea {
  resize: vertical;
  min-height: 130px;
}

.submit-btn {
  width: 100%;
  justify-content: center;
  padding: 18px;
  font-size: 1.05rem;
  margin-top: 10px;
}

.spinner {
  width: 18px;
  height: 18px;
  border: 2.5px solid rgba(255,255,255,0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Success */
.success-msg {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  text-align: center;
  gap: 16px;
  padding: 40px;
}

.success-icon {
  width: 72px;
  height: 72px;
  background: linear-gradient(135deg, var(--dark-teal), var(--medium-teal));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  box-shadow: 0 10px 30px rgba(26, 107, 107, 0.2);
  margin-bottom: 8px;
}

.success-title {
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--dark-charcoal);
}

.success-sub {
  font-size: 1rem;
  color: var(--slate-gray);
}

.success-fade-enter-active, .success-fade-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.success-fade-enter-from, .success-fade-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(10px);
}

@media (max-width: 1024px) {
  .contact-grid { grid-template-columns: 1fr; gap: 56px; }
  .contact-form-wrap { padding: 32px; }
}

@media (max-width: 650px) {
  .form-row { grid-template-columns: 1fr; }
  .contact-form-wrap { padding: 24px; }
}
</style>
