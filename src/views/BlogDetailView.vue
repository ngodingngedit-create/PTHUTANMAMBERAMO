<template>
  <div class="blog-detail-page">
    <template v-if="post">
      <!-- Article Hero -->
      <header class="article-hero" :style="{ backgroundImage: `url(${post.image})` }">
        <div class="hero-overlay"></div>
        <div class="container hero-container">
          <router-link to="/blog" class="back-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            {{ lang === 'id' ? 'Kembali ke Blog' : 'Back to Blog' }}
          </router-link>
          <div class="article-meta-top">
            <span class="category-badge">{{ post.author }}</span>
            <span class="article-date">{{ post.date }}</span>
          </div>
          <h1 class="article-title">{{ post.title[lang] || post.title.en }}</h1>
        </div>
      </header>

      <!-- Article Content -->
      <article class="article-body">
        <div class="container body-container">
          <div class="share-sidebar">
            <div class="sticky-share">
              <span class="share-label">{{ lang === 'id' ? 'BAGIKAN' : 'SHARE' }}</span>
              <div class="share-links">
                <a href="#" class="share-btn" aria-label="Share on LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
                <a href="#" class="share-btn" aria-label="Share on Twitter"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg></a>
                <a href="#" class="share-btn" aria-label="Copy Link"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a>
              </div>
            </div>
          </div>
          
          <div class="content-wrapper" v-html="post.content[lang] || post.content.en"></div>
        </div>
      </article>

      <!-- Related Section Placeholder -->
      <section class="related-posts">
        <div class="container">
          <h2 class="section-title-small">{{ lang === 'id' ? 'Artikel Terkait' : 'Related Articles' }}</h2>
          <div class="related-grid">
            <template v-for="rp in relatedPosts" :key="rp.id">
              <router-link :to="'/blog/' + rp.id" class="related-card">
                <div class="rc-image" :style="{ backgroundImage: `url(${rp.image})` }"></div>
                <div class="rc-content">
                  <h3>{{ rp.title[lang] || rp.title.en }}</h3>
                  <span>{{ rp.date }}</span>
                </div>
              </router-link>
            </template>
          </div>
        </div>
      </section>
    </template>
    
    <div v-else class="not-found">
      <div class="container">
        <h2>Post Not Found</h2>
        <router-link to="/blog" class="btn-primary">Back to Blog</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { blogPosts } from '../data/blogPosts';

const props = defineProps({
  lang: { type: String, default: 'en' },
  t: Object
});

const route = useRoute();
const post = computed(() => {
  return blogPosts.find(p => p.id === parseInt(route.params.id));
});

const relatedPosts = computed(() => {
  if (!post.value) return [];
  return blogPosts
    .filter(p => p.id !== post.value.id)
    .slice(0, 3);
});

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style scoped>
.blog-detail-page {
  min-height: 100vh;
  background-color: #ffffff;
  font-family: 'Poppins', sans-serif;
}

/* Hero Section */
.article-hero {
  position: relative;
  height: 60vh;
  min-height: 400px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  padding-bottom: 80px;
  color: white;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(26, 42, 42, 0.9) 0%, rgba(26, 42, 42, 0.4) 50%, transparent 100%);
}

.hero-container {
  position: relative;
  z-index: 2;
  max-width: 900px;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 40px;
  transition: all 0.3s;
}

.back-link:hover {
  color: #ffffff;
  transform: translateX(-5px);
}

.article-meta-top {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.category-badge {
  background: #D4F442;
  color: #1A6B6B;
  padding: 4px 12px;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.article-date {
  font-size: 0.9rem;
  opacity: 0.9;
}

.article-title {
  font-size: clamp(1.4rem, 4vw, 2.4rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

/* Article Body */
.article-body {
  padding: 80px 0;
  background: #ffffff;
}

.body-container {
  max-width: 1000px;
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 40px;
}

.sticky-share {
  position: sticky;
  top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.share-label {
  font-size: 0.65rem;
  font-weight: 800;
  color: #8FA8A8;
  writing-mode: vertical-lr;
  letter-spacing: 0.2em;
}

.share-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.share-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #F4FAFA;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1A6B6B;
  transition: all 0.3s;
}

.share-btn:hover {
  background: #1A6B6B;
  color: white;
  transform: scale(1.1);
}

.content-wrapper {
  color: #3D5050;
  font-size: 1.15rem;
  line-height: 1.8;
  max-width: 720px;
}

.content-wrapper :deep(p) {
  margin-bottom: 24px;
}

.content-wrapper :deep(h3) {
  font-size: 1.3rem;
  color: #1A2A2A;
  margin: 32px 0 12px;
  font-weight: 700;
}

/* Related Posts */
.related-posts {
  padding: 80px 0;
  background: #F4FAFA;
}

.section-title-small {
  font-size: 1.5rem;
  color: #1A2A2A;
  margin-bottom: 32px;
  font-weight: 700;
  text-align: center;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.related-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(0,0,0,0.03);
  transition: all 0.4s;
}

.related-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(26, 107, 107, 0.1);
}

.rc-image {
  height: 180px;
  background-size: cover;
  background-position: center;
}

.rc-content {
  padding: 20px;
}

.rc-content h3 {
  font-size: 1rem;
  color: #1A6B6B;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.rc-content span {
  font-size: 0.8rem;
  color: #8FA8A8;
}

.not-found {
  padding: 200px 0;
  text-align: center;
}

/* Mobile Adjustments */
@media (max-width: 900px) {
  .body-container {
    grid-template-columns: 1fr;
  }
  .share-sidebar {
    display: none;
  }
  .article-hero {
    height: 50vh;
  }
}

@media (max-width: 768px) {
  .related-grid {
    grid-template-columns: 1fr;
  }
  .article-title {
    font-size: 1.4rem;
  }
  .content-wrapper {
    font-size: 1.05rem;
  }
}
</style>
