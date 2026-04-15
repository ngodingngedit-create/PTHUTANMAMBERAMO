<template>
  <div class="job-detail-page">
    <div class="header-bg">
      <div class="container text-center relative z-10">
        <h1 class="page-title">Carbon Forestry Specialist</h1>
        <div class="job-meta">
          <span class="badge">Full-time</span>
          <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Mamberamo Raya, Papua</span>
          <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg> Conservation Team</span>
        </div>
      </div>
    </div>

    <div class="container content-container">
      <button class="back-btn" @click="$router.push('/jobs')">&larr; Back to all open roles</button>
      
      <div class="job-sections">
        <section>
          <h2>The Role</h2>
          <p>As a Carbon Forestry Specialist at PT Hutan Harapan Memberamo, you will be in charge of monitoring and evaluating the carbon stock across our sustainable concessions. You'll work closely with local communities and external auditors to ensure our carbon credits meet international standards. We expect you to bring a mix of fieldwork expertise and analytical rigor into the conservation ecosystem.</p>
        </section>

        <section>
          <h2>Skills you need</h2>
          <ul>
            <li>At least 3+ years of experience in carbon accounting, REDD+ frameworks, or forest conservation.</li>
            <li>Proficiency with spatial analysis software (ArcGIS, QGIS) and handling LiDAR data.</li>
            <li>Excellent communication skills, both written and spoken, to interact with stakeholders and local leaders.</li>
            <li>A deep passion for sustainability and a proactive attitude in tackling environmental challenges.</li>
          </ul>
        </section>

        <section>
          <h2>What we offer</h2>
          <ul>
            <li>Competitive salary tailored to your experience.</li>
            <li>Premium health and life insurance for you and your direct dependents.</li>
            <li>Opportunities for continuous learning and fully sponsored certifications.</li>
            <li>A dynamic and purpose-driven work culture dedicated to planetary impact.</li>
          </ul>
        </section>

        <section>
          <h2>Life at PT Hutan Harapan Memberamo</h2>
          <p>We believe that working together brings out the best in everyone. We are deeply committed to empowering local communities in Papua while protecting the planet. Our workplace is built upon our 4Hs: Heart, Hunger, Honour, and Humility. We celebrate diversity, foster innovation, and ensure every employee has the support they need to grab their career with both hands.</p>
        </section>
      </div>

      <!-- Application Process similar to Grab styling -->
      <div class="application-process mt-5">
        <div class="process-header">
          <h2>The Application <br/><span class="outline-text block-outline">Process</span></h2>
          <p>What can you expect when you apply for a role with us? Here's what our hiring process looks like.</p>
        </div>

        <div class="process-grid">
          <div class="process-card">
            <div class="icon-circle"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></div>
            <h3>Step 1: Apply.</h3>
            <p>We have a range of open roles from Conservation to Technology and everything in between.</p>
          </div>
          <div class="process-card">
            <div class="icon-circle"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div>
            <h3>Step 2: Getting to know you.</h3>
            <p>Next, you'll have a video or phone interview with one of our recruiters to go over your profile.</p>
          </div>
          <div class="process-card">
            <div class="icon-circle"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>
            <h3>Step 3: Testing, testing... 123.</h3>
            <p>Some technical or specialized roles might require assessments and/or a case study.</p>
          </div>
          <div class="process-card">
            <div class="icon-circle"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg></div>
            <h3>Step 4: Is it a culture match?</h3>
            <p>Finally, we'll find out how we fit together. If everything aligns, you're hired!</p>
          </div>
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
        <router-link to="/apply-job" class="btn-primary">Apply Now</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.job-detail-page {
  min-height: 100vh;
  background: white;
  padding-bottom: 120px;
  font-family: 'Poppins', sans-serif;
}
.header-bg {
  background: linear-gradient(135deg, #0e4c4c 0%, #1A6B6B 100%);
  padding: 140px 0 60px;
  color: white;
}
.page-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 16px;
}
.job-meta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-size: 1.05rem;
  color: rgba(255,255,255,0.9);
}
.job-meta span { display: flex; align-items: center; gap: 8px; }
.badge {
  background: #D4F442;
  color: #1A6B6B;
  padding: 6px 14px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.85rem;
}

.content-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 24px;
}
.back-btn {
  background: transparent;
  border: none;
  color: #1A6B6B;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 30px;
  font-size: 1rem;
}
.back-btn:hover { text-decoration: underline; }

.job-sections section {
  margin-bottom: 40px;
}
.job-sections h2 {
  font-size: 1.8rem;
  color: #1A2A2A;
  margin-bottom: 16px;
  font-weight: 700;
}
.job-sections p {
  font-size: 1.1rem;
  color: #5A7070;
  line-height: 1.7;
}
.job-sections ul {
  padding-left: 20px;
  color: #5A7070;
  font-size: 1.1rem;
  line-height: 1.7;
}
.job-sections li { margin-bottom: 8px; }

/* Application Process */
.application-process {
  margin-top: 80px;
  border-top: 1px solid rgba(43,144,144,0.1);
  padding-top: 60px;
  display: flex;
  gap: 40px;
}
.process-header {
  flex: 1;
}
.process-header h2 {
  font-size: 2.5rem;
  color: #1A6B6B;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 16px;
}
.outline-text {
  color: transparent;
  -webkit-text-stroke: 1.5px #1A6B6B;
}
.block-outline { display: block; }
.process-header p {
  color: #5A7070;
  font-size: 1.1rem;
  line-height: 1.6;
}

.process-grid {
  flex: 2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.process-card {
  background: #E8F6F6;
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.icon-circle {
  width: 50px; height: 50px;
  background: white;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: #1A6B6B;
  margin-bottom: 8px;
}
.process-card h3 {
  font-size: 1.1rem;
  color: #1A6B6B;
  font-weight: 700;
}
.process-card p {
  font-size: 0.95rem;
  color: #3F5555;
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
  padding: 12px 32px;
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

@media (max-width: 900px) {
  .application-process { flex-direction: column; }
}
@media (max-width: 600px) {
  .page-title { font-size: 2rem; }
  .job-meta { flex-direction: column; gap: 8px; text-align: center; }
  .process-grid { grid-template-columns: 1fr; }
  
  .sticky-bottom-bar { padding: 12px 0; }
  .bar-container { padding: 0 16px; gap: 12px; }
  .bar-left h4 { font-size: 0.95rem; line-height: 1.2; }
  .bar-left p { font-size: 0.8rem; }
  .btn-primary { padding: 10px 20px; font-size: 0.95rem; }
}
</style>
