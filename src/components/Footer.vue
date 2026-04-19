<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="container footer-inner">
        <!-- Brand -->
        <div class="footer-brand">
          <router-link to="/" class="footer-logo">
            <img src="/logo/logo-membrano.png" alt="Logo PT Hutan Harapan Memberamo" class="footer-logo-img">
            <div class="footer-logo-text">
              <span class="fl-name">PT Hutan Harapan</span>
              <span class="fl-sub">Memberamo</span>
            </div>
          </router-link>
          <p class="footer-tagline">{{ t.footer.tagline }}</p>
          <div class="footer-socials">
            <a href="#" class="social-link" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" class="social-link" aria-label="Email">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
            <a href="#" class="social-link" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer-col">
          <div class="footer-col-title">{{ t.footer.quick_links }}</div>
          <ul class="footer-links">
            <li><router-link to="/">{{ t.nav.home }}</router-link></li>
            <li><router-link to="/about">{{ t.nav.about }}</router-link></li>
            <li><router-link to="/projects">{{ t.nav.projects }}</router-link></li>
            <li><router-link to="/methodology">{{ t.footer.methodology_label }}</router-link></li>
            <li><router-link to="/partnership">{{ t.nav.partnership }}</router-link></li>
          </ul>
        </div>

        <!-- Partners -->
        <!-- <div class="footer-col">
          <div class="footer-col-title">{{ lang === 'en' ? 'Partners' : 'Mitra' }}</div>
          <ul class="footer-links">
            <li><a href="https://enkingint.org/" target="_blank">EKI Energy Services ↗</a></li>
            <li><a href="https://www.pertamina.com/id" target="_blank">Pertamina ↗</a></li>
            <li><a href="https://3sahabatlingkungan.com/" target="_blank">3 Sahabat Lingkungan ↗</a></li>
            <li><a href="https://verra.org" target="_blank">Verra (VCS) ↗</a></li>
          </ul>
        </div> -->

        <!-- Contact -->
        <div class="footer-col">
          <div class="footer-col-title">{{ t.footer.contact_label }}</div>
          <div class="footer-contact">
            <div class="fc-item">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Memberamo Raya, Papua, Indonesia
            </div>
            <div class="fc-item">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              info@hutanharapanmemberamo.com
            </div>
          </div>
        </div>
      </div>
<!-- Associations & Accreditations -->
      <!--  -->
      <div class="footer-associations">
        <div class="container">
          <div class="assoc-header">
            <span class="assoc-divider"></span>
            <span class="assoc-title">{{ t.footer.associations_title }}</span>
            <span class="assoc-divider"></span>
          </div>
          <div class="assoc-grid">
            <div class="assoc-item">
              <img src="/associtions/cmai.png" alt="CMAI" class="assoc-logo">
              <!-- <span class="assoc-name">CMAI</span> -->
            </div>
            <div class="assoc-item">
              <img src="/associtions/ch.png" alt="CH" class="assoc-logo">
              <!-- <span class="assoc-name">CH</span> -->
            </div>
            <div class="assoc-item">
              <img src="/associtions/ficci.png" alt="FICCI" class="assoc-logo">
              <!-- <span class="assoc-name">FICCI</span> -->
            </div>
            <div class="assoc-item">
              <img src="/associtions/icroa.png" alt="ICROA" class="assoc-logo">
              <!-- <span class="assoc-name">ICROA</span> -->
            </div>
            <div class="assoc-item">
              <img src="/associtions/sepc.png" alt="SEPC" class="assoc-logo">
              <!-- <span class="assoc-name">SEPC</span> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <!-- <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <span class="footer-rights">{{ t.footer.rights }}</span>
        <div class="footer-badges">
          <span class="f-badge">🌿 Verra VCS Certified</span>
          <span class="f-badge">🇮🇩 Papua, Indonesia</span>
        </div>
      </div>
    </div> -->
  </footer>
</template>

<script setup>
defineProps({ t: Object, lang: String })
</script>

<style scoped>
.footer {
  border-top: 1px solid rgba(43,144,144,0.1);
  background: #F4FAFA;
}

.footer-top {
  padding: 60px 0 40px;
}

.footer-inner {
  display: grid;
  grid-template-columns: 1.8fr 1fr 1fr 1.2fr;
  gap: 40px;
}

/* Brand */
.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
  text-decoration: none;
}

.footer-logo-img {
  height: 38px;
  width: auto;
  object-fit: contain;
  flex-shrink: 0;
}

.footer-logo-text {
  display: flex;
  flex-direction: column;
}

.fl-name {
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #1A2A2A;
  line-height: 1.1;
}

.fl-sub {
  font-size: 0.85rem;
  font-weight: 600;
  color: #6A8080;
  line-height: 1.1;
}

.footer-tagline {
  font-size: 0.82rem;
  color: #5A7070;
  line-height: 1.7;
  margin-bottom: 20px;
  max-width: 280px;
}

.footer-socials {
  display: flex;
  gap: 10px;
}

.social-link {
  width: 34px;
  height: 34px;
  background: white;
  border: 1px solid rgba(43,144,144,0.15);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6A8080;
  text-decoration: none;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}

.social-link:hover {
  background: #F4FAFA;
  border-color: #2B9090;
  color: #1A6B6B;
  transform: translateY(-2px);
}

/* Columns */
.footer-col-title {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #1A6B6B;
  margin-bottom: 16px;
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-links a {
  font-size: 0.82rem;
  color: #5A7070;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: #1A6B6B;
}

/* Contact */
.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.fc-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 0.8rem;
  color: #5A7070;
  line-height: 1.5;
}

.fc-item svg {
  color: #2B9090;
  margin-top: 2px;
  flex-shrink: 0;
}

/* Associations */
.footer-associations {
  margin-top: 50px;
  padding-top: 30px;
  border-top: 1px solid rgba(43,144,144,0.08);
}

.assoc-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 24px;
}

.assoc-divider {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(43,144,144,0.15), transparent);
}

.assoc-title {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #8FA8A8;
  white-space: nowrap;
}

.assoc-grid {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.assoc-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  background: #1A2A2A;
  border: 1px solid rgba(43,144,144,0.3);
  border-radius: 8px;
  transition: all 0.3s ease;
  flex-shrink: 1;
}

.assoc-item:hover {
  border-color: #2B9090;
  box-shadow: 0 4px 12px rgba(26,107,107,0.06);
  transform: translateY(-2px);
}

.assoc-logo {
  height: 36px;
  width: auto;
  object-fit: contain;
  transition: all 0.3s ease;
}

.assoc-name {
  font-size: 0.65rem;
  font-weight: 700;
  color: #8FA8A8;
  letter-spacing: 0.05em;
}

.text-badge {
  background: rgba(43, 144, 144, 0.03);
  padding: 10px 18px;
}

.assoc-item:hover .assoc-name {
  color: #FFFFFF;
}

/* Bottom */
.footer-bottom {
  border-top: 1px solid rgba(43,144,144,0.07);
  padding: 18px 0;
  background: white;
}

.footer-bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.footer-rights {
  font-size: 0.78rem;
  color: #8FA8A8;
}

.footer-badges {
  display: flex;
  gap: 10px;
}

.f-badge {
  font-size: 0.72rem;
  font-weight: 600;
  color: #6A8080;
  background: #F4FAFA;
  border: 1px solid rgba(43,144,144,0.12);
  padding: 4px 12px;
  border-radius: 50px;
}

@media (max-width: 1024px) {
  .footer-inner { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 600px) {
  .footer-inner { grid-template-columns: 1fr; gap: 32px; }
  .footer-bottom-inner { flex-direction: column; text-align: center; }

  .assoc-grid {
    gap: 6px;
  }
  .assoc-item {
    flex-shrink: 1;
    padding: 3px 6px;
    border-radius: 5px;
  }
  .assoc-logo {
    height: 18px;
  }
}
</style>
