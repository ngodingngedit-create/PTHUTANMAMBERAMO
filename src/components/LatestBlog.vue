<template>
  <section class="latest-blog-section">
    <div class="container blog-container">
      <h2 class="section-title">{{ t.knowledge_hub.blog_title }}</h2>
      
      <div class="blog-grid">
        
        <!-- Dynamic Blog Cards -->
        <article v-for="post in latestPosts" :key="post.id" class="blog-card">
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
            <router-link :to="'/blog/' + post.id" class="read-more-btn">{{ t.knowledge_hub.read_more_blog }} <span class="arrow">→</span></router-link>
          </div>
        </article>

      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { blogPosts } from '../data/blogPosts';

const props = defineProps({
  t: Object,
  lang: { type: String, default: 'en' }
});

const latestPosts = computed(() => {
  return blogPosts.slice(0, 3);
});
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

.read-more-btn {
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

.read-more-btn:hover {
  background: #1A6B6B;
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(26,107,107,0.2);
}

.read-more-btn:hover .arrow {
  transform: translateX(3px);
  display: inline-block;
}

.arrow {
  transition: transform 0.3s ease;
  display: inline-block;
}

@media (max-width: 1024px) {
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .blog-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 14px;
    scrollbar-width: thin;
    scrollbar-color: #1A6B6B rgba(26, 107, 107, 0.08);
  }
  .blog-grid::-webkit-scrollbar {
    height: 3px;
  }
  .blog-grid::-webkit-scrollbar-track {
    background: rgba(26, 107, 107, 0.05);
    border-radius: 10px;
  }
  .blog-grid::-webkit-scrollbar-thumb {
    background: #1A6B6B;
    border-radius: 10px;
  }
  .blog-card {
    min-width: 210px;
    max-width: 210px;
  }
  .section-title {
    font-size: 1.5rem;
    margin-bottom: 28px;
  }
  .image-wrapper {
    height: 125px; /* Slightly increased from 110px */
  }
  .card-content {
    padding: 14px 12px; /* Slightly increased padding */
  }
  .blog-title {
    font-size: 0.88rem; /* Slightly larger */
    margin-bottom: 14px;
    line-height: 1.35;
  }
  .meta-info {
    font-size: 0.68rem;
    margin-bottom: 8px;
    gap: 8px;
  }
  .read-more-btn {
    font-size: 0.75rem;
    padding: 5px 12px;
  }
}
</style>
