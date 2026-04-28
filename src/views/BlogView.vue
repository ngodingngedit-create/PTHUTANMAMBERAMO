<template>
  <div class="blog-page">
    
    <!-- Hero Section -->
    <Hero 
      :t="t" 
      :lang="lang" 
      backgroundType="image"
      backgroundImage="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070"
      :title="lang === 'en' ? 'Our Blog' : 'Blog Kami'"
      :subtitle="lang === 'en' ? 'Discover our latest news, trends, and sustainability initiatives.' : 'Temukan berita, tren, dan inisiatif keberlanjutan terbaru kami.'"
      height="60vh"
      :showScrollIndicator="false"
    />

    <!-- Blog Content Grid Section -->
    <section class="blog-content-section">
      <div class="container">
        <div class="blog-grid">
          
          <!-- Dynamic Blog Cards -->
          <article v-for="post in blogPosts" :key="post.id" class="blog-card">
            <div class="image-wrapper">
              <div class="card-image" :style="{ backgroundImage: `url(${post.image})` }"></div>
            </div>
            <div class="card-content">
              <div class="meta-info">
                <span class="author">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  {{ post.author }}
                </span>
                <span class="date">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  {{ post.date }}
                </span>
                <span v-if="post.source" class="source">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                  {{ post.source }}
                </span>
              </div>
              <h3 class="blog-title">{{ post.title[lang] || post.title.en }}</h3>
              <p class="blog-excerpt">
                {{ post.excerpt[lang] || post.excerpt.en }}
              </p>
              <router-link :to="'/blog/' + post.id" class="read-more">Read More <span class="arrow">&rarr;</span></router-link>
            </div>
          </article>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { blogPosts as staticPosts } from '../data/blogPosts';
import Hero from '../components/Hero.vue'

defineProps({
  t: Object,
  lang: String
})

const blogPosts = ref([...staticPosts]);
</script>

<style scoped>
.blog-page {
  background-color: var(--bg-primary, #ffffff);
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
}

/* ================= HERO SECTION ================= */


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
  flex-wrap: wrap;
  gap: 12px;
  justify-content: flex-start;
  font-size: 0.75rem;
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
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #1A6B6B;
  font-weight: 600;
  font-size: 0.85rem;
  text-decoration: none;
  padding: 8px 16px;
  border: 1.5px solid #2B9090;
  border-radius: 8px;
  transition: all 0.3s ease;
  background: transparent;
}

.arrow {
  transition: transform 0.3s ease;
  display: inline-block;
}

.read-more:hover {
  background: #1A6B6B;
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(26,107,107,0.2);
}

.read-more:hover .arrow {
  transform: translateX(3px);
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
