<template>
  <div class="apply-page">
    <div class="container form-container">
      <button class="back-btn" @click="$router.push('/job-detail')">&larr; Back to Job Detail</button>
      
      <div class="form-header">
        <h1>Submit your application</h1>
        <p>You are applying for <strong>Carbon Forestry Specialist</strong>.</p>
      </div>

      <div class="application-form">
        <div class="form-section">
          <h3>Personal Information</h3>
          <div class="input-grid">
            <div class="input-group">
              <label>Full Name *</label>
              <input type="text" placeholder="John Doe" />
            </div>
            <div class="input-group">
              <label>Email Address *</label>
              <input type="email" placeholder="john@example.com" />
            </div>
            <div class="input-group">
              <label>Phone Number *</label>
              <input type="tel" placeholder="+62 812 3456 7890" />
            </div>
            <div class="input-group">
              <label>Location / City *</label>
              <input type="text" placeholder="Jakarta, Indonesia" />
            </div>
          </div>
        </div>

        <div class="form-section">
          <h3>Professional Links</h3>
          <div class="input-grid">
            <div class="input-group col-span-2">
              <label>LinkedIn Profile *</label>
              <input type="url" placeholder="https://linkedin.com/in/johndoe" />
            </div>
            <div class="input-group col-span-2">
              <label>Portfolio / Personal Website</label>
              <input type="url" placeholder="https://johndoe.com" />
            </div>
          </div>
        </div>

        <div class="form-section">
          <h3>Documents</h3>
          <p class="section-desc">Please upload your CV/Resume and any supporting documents (PDF format, max 5MB).</p>
          
          <div class="upload-area">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
            <h4>Upload your CV/Resume</h4>
            <input type="file" id="cv-upload" class="hidden-input" accept=".pdf,.doc,.docx" />
            <label for="cv-upload" class="upload-btn">Choose File</label>
          </div>
          
          <div class="upload-area mt-4">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
            <h4>Upload Portfolio / Others (Optional)</h4>
            <input type="file" id="port-upload" class="hidden-input" accept=".pdf" />
            <label for="port-upload" class="upload-btn">Choose File</label>
          </div>
        </div>

        <div class="form-section mb-0">
          <label class="checkbox-wrapper">
            <input type="checkbox" />
            <span class="checkmark"></span>
            <p>I confirm that the information provided is accurate and I agree to PT Hutan Harapan Memberamo's Privacy Policy.</p>
          </label>
        </div>
      </div>
    </div>

    <!-- Sticky Bottom Bar -->
    <div class="sticky-bottom-bar">
      <div class="container bar-container">
        <div class="bar-left">
          <h4>Carbon Forestry Specialist</h4>
          <p>Mamberamo Raya, Papua</p>
        </div>
        <router-link to="/apply-success" class="btn-primary">Next</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.apply-page {
  min-height: 100vh;
  background: #FAFCFC;
  padding: 120px 0;
  font-family: 'Poppins', sans-serif;
}
.form-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 24px;
}
.back-btn {
  background: transparent;
  border: none;
  color: #1A6B6B;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 24px;
  font-size: 1rem;
}
.form-header {
  margin-bottom: 40px;
}
.form-header h1 {
  font-size: 2.4rem;
  color: #1A6B6B;
  font-weight: 700;
}
.form-header p {
  font-size: 1.1rem;
  color: #5A7070;
}

.application-form {
  background: white;
  border-radius: 20px;
  padding: 40px;
  border: 1px solid rgba(43,144,144,0.1);
  box-shadow: 0 10px 40px rgba(0,0,0,0.03);
}
.form-section {
  margin-bottom: 40px;
}
.mb-0 { margin-bottom: 0 !important; }
.form-section h3 {
  font-size: 1.3rem;
  color: #1A2A2A;
  margin-bottom: 16px;
  font-weight: 600;
  border-bottom: 1px solid rgba(43,144,144,0.1);
  padding-bottom: 8px;
}
.section-desc {
  font-size: 0.95rem;
  color: #5A7070;
  margin-bottom: 20px;
}
.input-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.col-span-2 { grid-column: span 2; }
.input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.input-group label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #3F5555;
}
.input-group input {
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid rgba(43,144,144,0.2);
  font-family: inherit;
  font-size: 1rem;
  background: #F8FAFA;
  transition: all 0.3s;
}
.input-group input:focus {
  outline: none;
  border-color: #2B9090;
  background: white;
  box-shadow: 0 0 0 3px rgba(43,144,144,0.1);
}

.upload-area {
  border: 2px dashed rgba(43,144,144,0.3);
  border-radius: 16px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  background: #FAFCFC;
  transition: all 0.3s;
}
.upload-area:hover {
  background: #F0F8F8;
  border-color: #2B9090;
}
.upload-area svg { color: #1A6B6B; }
.upload-area h4 { color: #1A2A2A; font-weight: 600; }
.hidden-input { display: none; }
.upload-btn {
  background: white;
  color: #1A6B6B;
  border: 1px solid #1A6B6B;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s;
}
.upload-btn:hover { background: #1A6B6B; color: white; }
.mt-4 { margin-top: 20px; }

.checkbox-wrapper {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  cursor: pointer;
}
.checkbox-wrapper input {
  margin-top: 4px;
  width: 18px; height: 18px;
  accent-color: #1A6B6B;
}
.checkbox-wrapper p {
  color: #5A7070;
  font-size: 0.95rem;
  line-height: 1.5;
}

/* Sticky Bottom Bar */
.sticky-bottom-bar {
  position: fixed;
  bottom: 0; left: 0; right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(43,144,144,0.1);
  padding: 16px 0;
  z-index: 1000;
  box-shadow: 0 -10px 30px rgba(0,0,0,0.05);
}
.bar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
}
.bar-left h4 {
  font-size: 1.2rem;
  color: #1A2A2A;
  font-weight: 700;
  margin: 0 0 2px 0;
}
.bar-left p {
  color: #5A7070;
  font-size: 0.9rem;
  margin: 0;
}
.btn-primary {
  background: #1A6B6B;
  color: white;
  padding: 12px 40px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.05rem;
  text-decoration: none;
  transition: all 0.3s;
  white-space: nowrap;
  flex-shrink: 0;
}
.btn-primary:hover {
  background: #2B9090;
  transform: translateY(-2px);
}

@media (max-width: 600px) {
  .input-grid { grid-template-columns: 1fr; }
  .col-span-2 { grid-column: span 1; }
  .application-form { padding: 24px; }
  
  .sticky-bottom-bar { padding: 12px 0; }
  .bar-container { padding: 0 16px; gap: 12px; }
  .bar-left h4 { font-size: 0.95rem; line-height: 1.2; }
  .bar-left p { font-size: 0.8rem; }
  .btn-primary { padding: 10px 20px; font-size: 0.95rem; }
}
</style>
