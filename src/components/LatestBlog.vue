<template>
  <section class="latest-blog-section">
    <div class="container blog-container">
      <h2 class="section-title">Latest Blog</h2>
      
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
            <h3 class="blog-title">Our Power, Our Planet: Why Clean Energy is the Future We Must Build Together</h3>
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
            <h3 class="blog-title">India's Role in the Global Carbon Credit Market: An Emerging Leader?</h3>
            <router-link to="/blog" class="read-more">Read More <span class="arrow">&rarr;</span></router-link>
          </div>
        </article>

      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.latest-blog-section {
  padding: 100px 0;
  background-color: var(--bg-section-alt, #FAFCFC);
  font-family: 'Poppins', sans-serif;
  position: relative;
  z-index: 10;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  margin-top: -60px;
}

.section-title {
  text-align: center;
  font-size: 2.8rem;
  color: #1A2A2A;
  font-weight: 800;
  margin-bottom: 60px;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

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
  transform: scale(1.05);
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
  font-size: 1.2rem;
  color: #1A6B6B;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 24px;
  transition: color 0.3s;
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
  color: #D4F442;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .blog-grid {
    grid-template-columns: 1fr;
  }
  .section-title {
    font-size: 2.2rem;
    margin-bottom: 40px;
  }
  .image-wrapper {
    height: 220px;
  }
}
</style>
