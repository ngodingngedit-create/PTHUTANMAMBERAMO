<template>
  <div class="blog-page">
    
    <!-- Hero Section -->
    <section class="blog-hero">
      <div class="video-container">
        <div class="bg-image" style="background-image: url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070');"></div>
        <div class="video-overlay"></div>
      </div>

      <div class="container hero-wrapper">
        <div class="hero-content">
          <h1 class="hero-title">
            {{ lang === 'en' ? 'Our Blog' : 'Blog Kami' }}
          </h1>
          <p class="hero-subtitle">
            {{ lang === 'en' ? 'Discover our latest news, trends, and sustainability initiatives.' : 'Temukan berita, tren, dan inisiatif keberlanjutan terbaru kami.' }}
          </p>
        </div>
      </div>
    </section>

    <!-- Blog Content Grid Section -->
    <section class="blog-content-section">
      <div class="container">
        <div class="blog-grid">
          
          <!-- Card 1 -->
          <article class="blog-card">
            <div class="image-wrapper">
              <div class="card-image" style="background-image: url('https://images.unsplash.com/photo-1542601098369-7c0432c0fbdd?q=80&w=2070');"></div>
            </div>
            <div class="card-content">
              <div class="meta-info">
                <span class="author">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  EKI Energy
                </span>
                <span class="date">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  February 3, 2026
                </span>
              </div>
              <h3 class="blog-title">Recruitment Trends in 2026 for Climate & Carbon Markets</h3>
              <p class="blog-excerpt">
                As the demand for climate solutions grows, the job market is shifting rapidly. Discover what skills are in high demand for the upcoming year...
              </p>
              <router-link to="/blog" class="read-more">Read More <span class="arrow">&rarr;</span></router-link>
            </div>
          </article>

          <!-- Card 2 -->
          <article class="blog-card">
            <div class="image-wrapper">
              <div class="card-image" style="background-image: url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070');"></div>
            </div>
            <div class="card-content">
              <div class="meta-info">
                <span class="author">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  PT HHM
                </span>
                <span class="date">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  April 23, 2025
                </span>
              </div>
              <h3 class="blog-title">Our Power, Our Planet: Why Clean Energy is the Future</h3>
              <p class="blog-excerpt">
                Exploring the crucial steps we need to take globally to transition our infrastructure towards renewable energy sources and sustainable practices...
              </p>
              <router-link to="/blog" class="read-more">Read More <span class="arrow">&rarr;</span></router-link>
            </div>
          </article>

          <!-- Card 3 -->
          <article class="blog-card">
            <div class="image-wrapper">
              <div class="card-image" style="background-image: url('https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2070');"></div>
            </div>
            <div class="card-content">
              <div class="meta-info">
                <span class="author">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  EKI Energy
                </span>
                <span class="date">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  April 11, 2025
                </span>
              </div>
              <h3 class="blog-title">India's Role in the Global Carbon Credit Market</h3>
              <p class="blog-excerpt">
                An analysis of how emerging economies are participating in global carbon initiatives, focusing on India's rapid market expansion and policy changes...
              </p>
              <router-link to="/blog" class="read-more">Read More <span class="arrow">&rarr;</span></router-link>
            </div>
          </article>
          
          <!-- Card 4 (Additional placeholder) -->
          <article class="blog-card">
            <div class="image-wrapper">
              <div class="card-image" style="background-image: url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070');"></div>
            </div>
            <div class="card-content">
              <div class="meta-info">
                <span class="author">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  Market Insights
                </span>
                <span class="date">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  March 28, 2025
                </span>
              </div>
              <h3 class="blog-title">Investing in Green Technologies for Tomorrow</h3>
              <p class="blog-excerpt">
                A comprehensive guide to understanding green tech investments, the risks, and the long-term environmental benefits for stakeholders.
              </p>
              <router-link to="/blog" class="read-more">Read More <span class="arrow">&rarr;</span></router-link>
            </div>
          </article>
          
          <!-- Card 5 (Additional placeholder) -->
          <article class="blog-card">
            <div class="image-wrapper">
              <div class="card-image" style="background-image: url('https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2070');"></div>
            </div>
            <div class="card-content">
              <div class="meta-info">
                <span class="author">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  PT HHM
                </span>
                <span class="date">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  March 15, 2025
                </span>
              </div>
              <h3 class="blog-title">Landscape Conservation and Business Ethics</h3>
              <p class="blog-excerpt">
                Discussing how PT HHM integrates strict landscape conservation policies with operational business ethics to create a balanced approach...
              </p>
              <router-link to="/blog" class="read-more">Read More <span class="arrow">&rarr;</span></router-link>
            </div>
          </article>

          <!-- Card 6 (Additional placeholder) -->
          <article class="blog-card">
            <div class="image-wrapper">
              <div class="card-image" style="background-image: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073');"></div>
            </div>
            <div class="card-content">
              <div class="meta-info">
                <span class="author">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  Eco News
                </span>
                <span class="date">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  February 21, 2025
                </span>
              </div>
              <h3 class="blog-title">Water Security: Protecting Our Most Vital Resource</h3>
              <p class="blog-excerpt">
                A look into current global water security challenges and the innovative technologies being designed to preserve our oceans and lakes.
              </p>
              <router-link to="/blog" class="read-more">Read More <span class="arrow">&rarr;</span></router-link>
            </div>
          </article>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
defineProps({
  t: Object,
  lang: String
})
</script>

<style scoped>
.blog-page {
  background-color: var(--bg-primary, #ffffff);
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
}

/* ================= HERO SECTION ================= */
.blog-hero {
  position: relative;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1A2A2A;
  overflow: hidden;
  text-align: center;
  margin-bottom: 20px;
}

.video-container {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.bg-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transform: scale(1.05); /* Slight scale to prevent edge bleed */
}

.video-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(26,42,42, 0.4) 0%, rgba(10,20,20, 0.7) 100%);
  backdrop-filter: blur(3px);
}

.hero-wrapper {
  position: relative;
  z-index: 2;
  width: 100%;
  padding-top: 80px; /* Accounts for navbar */
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  animation: fadeUpIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.hero-title {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 20px;
  color: #ffffff;
  letter-spacing: -0.02em;
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #ffffff;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  font-weight: 300;
  opacity: 0.9;
}

@keyframes fadeUpIn {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ================= BLOG CONTENT ================= */
.blog-content-section {
  padding: 80px 0;
  background-color: #FAFCFC;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

/* ================= MODERN CARD DESIGN ================= */
.blog-card {
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.04);
  border: 1px solid rgba(43,144,144,0.08);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  text-decoration: none;
}

.blog-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(26,107,107,0.12);
  border-color: rgba(43,144,144,0.2);
}

.image-wrapper {
  overflow: hidden;
  height: 240px;
  width: 100%;
}

.card-image {
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;
}

.blog-card:hover .card-image {
  transform: scale(1.05); /* Smooth zoom effect */
}

.card-content {
  padding: 30px 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background: white;
  position: relative;
  z-index: 2;
}

.meta-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: #8FA8A8;
  margin-bottom: 16px;
  font-weight: 500;
}

.meta-info span {
  display: flex;
  align-items: center;
  gap: 6px;
}

.meta-info svg {
  color: #2B9090;
}

.blog-title {
  font-size: 1.25rem;
  color: #1A6B6B;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 12px;
  transition: color 0.3s;
}

.blog-excerpt {
  color: #5A7070;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 24px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.blog-card:hover .blog-title {
  color: #2B9090;
}

.read-more {
  margin-top: auto;
  align-self: flex-start;
  color: #1A6B6B;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
}

.arrow {
  transition: transform 0.3s ease;
}

.read-more:hover {
  color: #2B9090;
}

.read-more:hover .arrow {
  transform: translateX(5px);
  color: #D4F442; /* Highlight color to draw attention */
}

/* ================= RESPONSIVE DESIGN ================= */
@media (max-width: 1024px) {
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .blog-hero {
    min-height: 40vh;
    padding: 0 20px;
  }
  
  .hero-wrapper {
    padding-top: 60px;
  }
  
  .blog-grid {
    grid-template-columns: 1fr;
  }
  
  .image-wrapper {
    height: 220px;
  }
  
  .blog-content-section {
    padding: 60px 0;
  }
}
</style>
