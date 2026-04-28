<template>
  <section class="video-showcase">
    <div class="container">
      <div class="video-header">
        <span class="section-tag">{{ t.video_showcase.section_tag }}</span>
        <h2 class="section-title">{{ t.video_showcase.title }}</h2>
      </div>

      <div class="video-container-wrapper">
        <div class="video-aspect-ratio">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/jjg8d3Bja3A" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
          </iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  t: Object,
  lang: { type: String, default: 'id' }
})
</script>

<style scoped>
.video-showcase {
  padding: 80px 0;
  background-color: #fff;
}

.video-header {
  text-align: center;
  margin-bottom: 48px;
}

.section-tag {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #2B9090;
  margin-bottom: 12px;
  padding: 6px 18px;
  background: rgba(43, 144, 144, 0.08);
  border-radius: 50px;
}

.section-title {
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  font-weight: 800;
  color: #1A2A2A;
}

.video-container-wrapper {
  max-width: 1000px;
  margin: 0 auto;
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(26, 107, 107, 0.18);
  background: #000;
}

.video-aspect-ratio {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
}

.video-aspect-ratio iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

@media (max-width: 768px) {
  .section-title { font-size: 1.8rem; }
  .video-showcase { padding: 60px 0; }
  .video-container-wrapper { border-radius: 20px; }
}
</style>
