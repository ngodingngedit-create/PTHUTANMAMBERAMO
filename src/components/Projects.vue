<template>
  <div class="projects-page">

    <!-- ① HERO (same as Home) -->
    <Hero 
      :t="t" 
      :lang="lang" 
      backgroundType="image" 
      backgroundImage="/backgrounds/patrol.png" 
    />

    <!-- ② KNOWLEDGE HUB -->
    <section class="knowledge-hub">
      <div class="container">
        <div class="kh-header">
          <span class="section-tag">{{ t.knowledge_hub.section_tag }}</span>
          <h2 class="section-title">{{ t.knowledge_hub.title }}</h2>
          <p class="section-subtitle">{{ t.knowledge_hub.subtitle }}</p>
        </div>

        <div class="kh-grid-container">
          <div class="kh-grid">
            <div v-for="(item, idx) in knowledgeItems" 
                 :key="item.id" 
                 class="kh-card animate-on-load"
                 :style="{ animationDelay: (idx * 0.2) + 's' }"
                 @click="openDetail(item)">
              <div class="kh-card-image">
                <img :src="item.image" :alt="item.title[lang] || item.title.id" />
                <div class="kh-card-badge">{{ item.tag }}</div>
              </div>
              <div class="kh-card-body">
                <h3 class="kh-card-title">{{ item.title[lang] || item.title.id }}</h3>
                <p class="kh-card-desc">{{ item.excerpt[lang] || item.excerpt.id }}</p>
                <div class="kh-card-cta">
                  <span>{{ t.knowledge_hub.read_more }}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ③ PROJECT SHOWCASE — Bukit Suharto -->
    <section class="project-showcase">
      <div class="container">

        <!-- Section Label -->
        <div class="ps-label-wrap">
          <span class="section-tag">{{ t.nav.projects_nav }}</span>
        </div>

        <!-- Main 2-col grid: Image ↔ Info (equal halves) -->
        <div class="ps-grid">

          <!-- LEFT: Slider -->
          <div class="ps-slider">
            <div class="slider-wrap"
                 @mousedown="startDrag" @mousemove="moveDrag" @mouseup="endDrag" @mouseleave="endDrag"
                 @touchstart="startDrag" @touchmove="moveDrag" @touchend="endDrag">
              <div class="slider-track" :style="trackStyle">
                <div v-for="(img, i) in projectImages" :key="i" class="slide" @click="openLb(img)">
                  <img :src="img" :alt="'Dokumentasi ' + (i+1)" />
                </div>
              </div>

              <button class="snav sprev" @click.stop="prev" aria-label="Sebelumnya">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
              <button class="snav snext" @click.stop="next" aria-label="Berikutnya">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
              </button>

              <div class="sdots">
                <span v-for="(_, i) in projectImages" :key="i" :class="{ active: curIdx === i }" @click.stop="curIdx = i"></span>
              </div>
            </div>
          </div>

          <!-- RIGHT: Info -->
          <div class="ps-info">
            <p class="ps-eyebrow">28 April 2026</p>
            <h2 class="ps-title">{{ t.knowledge_hub.project_title }}</h2>

            <div class="ps-details">
              <div class="ps-detail-item">
                <span class="ps-dl">{{ lang === 'en' ? 'Organizer' : 'Penyelenggara' }}</span>
                <span class="ps-dv">{{ lang === 'en' ? 'PT HHMR in collaboration with the Association of Indonesian Environmental Experts Forum (PTALI)' : 'PT HHMR bekerjasama dengan Perkumpulan Forum Tenaga Ahli Lingkungan Indonesia (PTALI)' }}</span>
              </div>
              <div class="ps-detail-item">
                <span class="ps-dl">{{ lang === 'en' ? 'Partner Institutions' : 'Lembaga Mitra' }}</span>
                <span class="ps-dv">{{ lang === 'en' ? 'Pusrehut Mulawarman University & OIKN (Nusantara Capital City Authority)' : 'Pusrehut Universitas Mulawarman &amp; OIKN (Otoritas Ibu Kota Nusantara)' }}</span>
              </div>
            </div>

            <p class="ps-desc">
              {{ t.knowledge_hub.project_desc }}
            </p>

            <!-- PARTNERS sub-section (INSIDE project section) -->
            <div class="ps-partners">
              <p class="ps-partners-label">{{ t.knowledge_hub.partners_label }}</p>
              <div class="ps-partners-row">

                <!-- PTALI -->
                <div class="ps-partner-chip">
                  <img src="/projects/PTALI.png" alt="PTALI" class="pchip-logo" />
                  <span class="pchip-name">Forum PTALI</span>
                </div>

                <!-- Pusrehut Unmul -->
                <div class="ps-partner-chip">
                  <img src="/projects/unmul.png" alt="UNMUL" class="pchip-logo" />
                  <span class="pchip-name">Pusrehut Unmul</span>
                </div>

                <!-- OIKN -->
                <div class="ps-partner-chip">
                  <img src="/projects/ikn.png" alt="OIKN" class="pchip-logo" />
                  <span class="pchip-name">{{ t.knowledge_hub.ikn_name }}</span>
                </div>

              </div>
            </div>

          </div><!-- /ps-info -->
        </div><!-- /ps-grid -->
      </div>
    </section>

    <!-- ④ GALLERY SECTION (Looping Slow Marquee) -->
    <section class="project-gallery">
      <div class="gallery-header container">
        <span class="section-tag">{{ t.knowledge_hub.gallery_tag }}</span>
        <h2 class="section-title">{{ t.knowledge_hub.gallery_title }}</h2>
      </div>

      <div class="marquee-container">
        <div class="marquee-track">
          <!-- First set of images -->
          <div v-for="(img, i) in galleryImages" :key="'g1-'+i" class="marquee-item" @click="openLb(img)">
            <img :src="img" :alt="'Gallery ' + (i+1)" />
          </div>
          <!-- Cloned set for seamless loop -->
          <div v-for="(img, i) in galleryImages" :key="'g2-'+i" class="marquee-item" @click="openLb(img)">
            <img :src="img" :alt="'Gallery ' + (i+1)" />
          </div>
        </div>
      </div>
    </section>

    <!-- KNOWLEDGE DETAIL MODAL -->
    <Transition name="fade">
      <div v-if="selectedKnowledge" class="detail-overlay" @click="selectedKnowledge = null">
        <div class="detail-modal" @click.stop>
          <button class="detail-close" @click="selectedKnowledge = null">&times;</button>
          
          <div class="detail-scroll">
            <div class="detail-image-hero">
              <img :src="selectedKnowledge.image" alt="Detail Knowledge" />
              <div class="detail-image-tag">{{ selectedKnowledge.tag }}</div>
            </div>
            
            <div class="detail-content-wrap">
              <h2 class="detail-title">{{ selectedKnowledge.title[lang] || selectedKnowledge.title.id }}</h2>
              <div class="detail-body" v-html="selectedKnowledge.content[lang] || selectedKnowledge.content.id"></div>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- LIGHTBOX (for project images) -->
    <Transition name="fade">
      <div v-if="lbImg" class="lb-overlay" @click="lbImg = null">
        <div class="lb-box" @click.stop>
          <img :src="lbImg" alt="Foto Dokumentasi" />
          <button class="lb-close" @click="lbImg = null">&times;</button>
        </div>
      </div>
    </Transition>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import Hero from './Hero.vue'

defineProps({ t: Object, lang: { type: String, default: 'id' } })
const router = useRouter()

/* ─── Knowledge items ─── */
const knowledgeItems = [
  {
    id: 'knowledge-1',
    tag: 'Reforestasi',
    image: '/projects/knowledge_reforestasi.png',
    title: { id: 'Pentingnya Reforestasi bagi Ekosistem', en: 'Importance of Reforestation' },
    excerpt: { id: 'Reforestasi adalah senjata terkuat melawan perubahan iklim. Dengan menanam kembali lahan gundul, kita memulihkan paru-paru bumi dan habitat ribuan spesies.', en: 'Reforestation is our strongest weapon against climate change, restoring the lungs of the earth and habitats for thousands of species.' },
    content: {
      id: `
        <p>Reforestasi bukan sekadar menanam pohon; ini adalah upaya sistematis untuk memulihkan ekosistem yang telah rusak. Hutan berperan sebagai penyerap karbon alami terbesar di daratan, membantu menstabilkan iklim global dengan menyerap CO2 dari atmosfer.</p>
        <h3>Manfaat Ekologis</h3>
        <ul>
          <li><strong>Penyerapan Karbon:</strong> Satu pohon dewasa dapat menyerap hingga 22kg CO2 per tahun.</li>
          <li><strong>Konservasi Air:</strong> Akar pohon membantu menahan air di dalam tanah, mencegah kekeringan dan banjir.</li>
          <li><strong>Keanekaragaman Hayati:</strong> Memulihkan habitat bagi flora dan fauna endemik yang terancam punah.</li>
        </ul>
        <p>Melalui program di Bukit Suharto, PT HHMR berkomitmen untuk melakukan reforestasi berkelanjutan dengan pengawasan ketat terhadap tingkat kelangsungan hidup bibit.</p>
      `,
      en: `
        <p>Reforestation is not just about planting trees; it is a systematic effort to restore damaged ecosystems. Forests act as the largest natural carbon sinks on land, helping stabilize the global climate by absorbing CO2 from the atmosphere.</p>
        <h3>Ecological Benefits</h3>
        <ul>
          <li><strong>Carbon Sequestration:</strong> One mature tree can absorb up to 22kg of CO2 per year.</li>
          <li><strong>Water Conservation:</strong> Tree roots help retain water in the soil, preventing droughts and floods.</li>
          <li><strong>Biodiversity:</strong> Restoring habitats for endangered endemic flora and fauna.</li>
        </ul>
        <p>Through programs in Bukit Suharto, PT HHMR is committed to sustainable reforestation with strict monitoring of seedling survival rates.</p>
      `
    }
  },
  {
    id: 'knowledge-2',
    tag: 'Teknik Tanam',
    image: '/projects/knowledge_teknik_tanam.png',
    title: { id: 'Teknik Penanaman Pohon yang Efektif', en: 'Effective Tree Planting Techniques' },
    excerpt: { id: 'Panduan langkah demi langkah — dari pemilihan bibit endemik, kedalaman lubang tanam, hingga perawatan awal agar bibit tumbuh menjadi pohon yang kokoh.', en: 'A step-by-step guide from selecting endemic seedlings and correct planting depth to early-stage care for strong, lasting trees.' },
    content: {
      id: `
        <p>Keberhasilan penanaman pohon sangat bergantung pada teknik yang digunakan. Berikut adalah standar operasional yang kami terapkan di lapangan:</p>
        <ol>
          <li><strong>Pemilihan Bibit:</strong> Kami hanya menggunakan bibit endemik lokal yang telah melalui proses aklimatisasi.</li>
          <li><strong>Lubang Tanam:</strong> Kedalaman dan diameter lubang harus disesuaikan dengan volume akar (biasanya 40x40x40 cm).</li>
          <li><strong>Media Tanam:</strong> Pencampuran tanah topsoil dengan kompos organik untuk nutrisi awal.</li>
          <li><strong>Penyiraman & Mulsa:</strong> Menjaga kelembapan tanah di sekitar bibit baru, terutama pada fase kritis 3 bulan pertama.</li>
        </ol>
        <p>Setiap bibit diberikan identitas digital (Tagging) untuk memantau pertumbuhannya secara real-time melalui sistem monitoring kami.</p>
      `,
      en: `
        <p>The success of tree planting highly depends on the techniques used. Here are the operational standards we apply in the field:</p>
        <ol>
          <li><strong>Seedling Selection:</strong> We only use local endemic seedlings that have undergone acclimatization.</li>
          <li><strong>Planting Hole:</strong> The depth and diameter of the hole must be adjusted to the root volume (typically 40x40x40 cm).</li>
          <li><strong>Planting Medium:</strong> Mixing topsoil with organic compost for initial nutrition.</li>
          <li><strong>Watering & Mulching:</strong> Maintaining soil moisture around new seedlings, especially during the critical first 3 months.</li>
        </ol>
        <p>Each seedling is given a digital identity (Tagging) to monitor its growth in real-time through our monitoring system.</p>
      `
    }
  },
  {
    id: 'knowledge-3',
    tag: 'Konservasi',
    image: '/projects/knowledge_lahan_gambut.png',
    title: { id: 'Menjaga Lahan Gambut Kalimantan', en: 'Protecting Kalimantan Peatlands' },
    excerpt: { id: 'Lahan gambut menyimpan cadangan karbon raksasa. Restorasi gambut di Kalimantan Timur menjadi kunci mitigasi perubahan iklim global.', en: 'Peatlands hold enormous carbon reserves. Peat restoration in East Kalimantan is key to global climate change mitigation.' },
    content: {
      id: `
        <p>Lahan gambut adalah salah satu ekosistem paling berharga namun paling rentan di dunia. Di Kalimantan, lahan gambut menyimpan karbon ribuan kali lebih banyak dibandingkan hutan biasa.</p>
        <h3>Mengapa Gambut Penting?</h3>
        <ul>
          <li><strong>Penyimpan Karbon Raksasa:</strong> Gambut yang sehat mencegah lepasnya gas rumah kaca ke atmosfer.</li>
          <li><strong>Pengendali Banjir:</strong> Gambut bertindak seperti spons raksasa yang menyerap air hujan.</li>
          <li><strong>Habitat Spesies Langka:</strong> Tempat tinggal bagi Orangutan dan berbagai flora eksotis Kalimantan.</li>
        </ul>
        <p>Strategi kami mencakup pembasahan kembali (Rewetting) lahan gambut yang telah mengering untuk mencegah kebakaran hutan dan degradasi lahan.</p>
      `,
      en: `
        <p>Peatlands are one of the most valuable yet vulnerable ecosystems in the world. In Kalimantan, peatlands store thousands of times more carbon than ordinary forests.</p>
        <h3>Why are Peatlands Important?</h3>
        <ul>
          <li><strong>Giant Carbon Sink:</strong> Healthy peatlands prevent the release of greenhouse gases into the atmosphere.</li>
          <li><strong>Flood Control:</strong> Peat acts like a giant sponge that absorbs rainwater.</li>
          <li><strong>Habitat for Rare Species:</strong> Home to Orangutans and various exotic Kalimantan flora.</li>
        </ul>
        <p>Our strategy includes rewetting peatlands that have dried out to prevent forest fires and land degradation.</p>
      `
    }
  }
]

const selectedKnowledge = ref(null)
const openDetail = (item) => {
  selectedKnowledge.value = item
}

/* ─── Project images ─── */
const projectImages = [
  '/projects/FOTO (1).jpeg',
  '/projects/FOTO (2).jpeg',
  '/projects/FOTO (3).jpeg',
  '/projects/FOTO (4).jpeg',
  '/projects/FOTO (5).jpeg'
]

/* ─── Gallery images (can be more) ─── */
const galleryImages = [
  '/projects/FOTO (1).jpeg',
  '/projects/FOTO (2).jpeg',
  '/projects/FOTO (3).jpeg',
  '/projects/FOTO (4).jpeg',
  '/projects/FOTO (5).jpeg',
  '/projects/knowledge_reforestasi.png',
  '/projects/knowledge_teknik_tanam.png'
]

const curIdx   = ref(0)
const dragging = ref(false)
let sx = 0, timer = null

const trackStyle = computed(() => ({
  transform  : `translateX(-${curIdx.value * 100}%)`,
  transition : dragging.value ? 'none' : 'transform 0.55s cubic-bezier(0.16,1,0.3,1)'
}))

const next = () => { curIdx.value = (curIdx.value + 1) % projectImages.length }
const prev = () => { curIdx.value = (curIdx.value - 1 + projectImages.length) % projectImages.length }

const startDrag = e => { dragging.value = true; sx = e.touches ? e.touches[0].clientX : e.clientX; clearInterval(timer) }
const moveDrag  = e => { if (!dragging.value) return }
const endDrag   = e => {
  if (!dragging.value) return
  const ex = e.changedTouches ? e.changedTouches[0].clientX : e.clientX
  if (sx - ex > 50) next(); else if (sx - ex < -50) prev()
  dragging.value = false; startAuto()
}
const startAuto = () => { clearInterval(timer); timer = setInterval(next, 5000) }

onMounted(startAuto)
onUnmounted(() => clearInterval(timer))

/* ─── Lightbox ─── */
const lbImg    = ref(null)
const openLb   = img => { lbImg.value = img }
</script>

<style scoped>
/* ── BASE ── */
.projects-page { background: #fff; }

/* ── ANIMATIONS ── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-on-load {
  opacity: 0;
  animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* ── KNOWLEDGE HUB ── */
.knowledge-hub {
  padding: 100px 0;
  background: var(--bg-section-alt, #f4fafa);
}

.kh-header {
  text-align: center;
  margin-bottom: 64px;
}
.kh-header .section-title { 
  margin-bottom: 14px; 
}
.kh-header .section-subtitle {
  max-width: 700px;
  margin: 0 auto;
}

/* Container for smaller grid */
.kh-grid-container {
  max-width: 850px;
  margin: 0 auto;
}

/* 3-col grid */
.kh-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

/* Card */
.kh-card {
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(26,107,107,0.07);
  border: 1px solid rgba(43,144,144,0.1);
  cursor: pointer;
  transition: transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.kh-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(26,107,107,0.12);
}

/* Image area — square, centered */
.kh-card-image {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background: #e8f5f5;
}
.kh-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s cubic-bezier(0.16,1,0.3,1);
}
.kh-card:hover .kh-card-image img { transform: scale(1.08); }

/* Tag badge */
.kh-card-badge {
  position: absolute;
  top: 14px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(26, 107, 107, 0.9);
  backdrop-filter: blur(6px);
  color: #fff;
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 4px 14px;
  border-radius: 50px;
  white-space: nowrap;
}

/* Card body */
.kh-card-body {
  padding: 20px 16px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

.kh-card-title {
  font-family: var(--font-display, 'Poppins', sans-serif);
  font-size: 1rem;
  font-weight: 800;
  color: #0d3b38;
  margin-bottom: 10px;
  line-height: 1.35;
}

.kh-card-desc {
  font-size: 0.8rem;
  color: var(--slate-gray, #6a8080);
  line-height: 1.6;
  margin-bottom: 18px;
}

.kh-card-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--dark-teal, #1a6b6b);
  font-weight: 700;
  font-size: 0.8rem;
  padding: 8px 18px;
  border: 1.5px solid var(--dark-teal, #1a6b6b);
  border-radius: 50px;
  transition: all 0.3s;
  margin-top: auto;
}
.kh-card:hover .kh-card-cta {
  background: var(--dark-teal, #1a6b6b);
  color: #fff;
}

/* ── KNOWLEDGE DETAIL MODAL ── */
.detail-overlay {
  position: fixed;
  inset: 0;
  z-index: 3000;
  background: rgba(13, 59, 56, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.detail-modal {
  background: #fff;
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  border-radius: 32px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 40px 100px rgba(0,0,0,0.3);
  display: flex;
  flex-direction: column;
}

.detail-close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fff;
  border: none;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  z-index: 10;
  transition: transform 0.3s;
}
.detail-close:hover { transform: rotate(90deg); }

.detail-scroll {
  overflow-y: auto;
  flex: 1;
}

.detail-image-hero {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
}
.detail-image-hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.detail-image-tag {
  position: absolute;
  bottom: 24px;
  left: 32px;
  background: #2B9090;
  color: #fff;
  padding: 6px 18px;
  border-radius: 50px;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
}

.detail-content-wrap {
  padding: 48px;
}

.detail-title {
  font-family: var(--font-display, 'Poppins', sans-serif);
  font-size: 2.2rem;
  font-weight: 900;
  color: #0d3b38;
  margin-bottom: 24px;
  line-height: 1.2;
}

.detail-body {
  font-size: 1.1rem;
  color: #4a6060;
  line-height: 1.8;
}
.detail-body h3 {
  color: #1a6b6b;
  margin: 32px 0 16px;
  font-weight: 800;
}
.detail-body ul, .detail-body ol {
  margin-bottom: 24px;
  padding-left: 20px;
}
.detail-body li {
  margin-bottom: 12px;
}
.detail-body p {
  margin-bottom: 20px;
}

/* ── PROJECT SHOWCASE ── */
.project-showcase {
  padding: 120px 0 0; /* Removed bottom padding to pull gallery up */
  background: #fff;
}

.ps-label-wrap {
  text-align: center;
  margin-bottom: 60px;
}

/* Equal 2-col grid */
.ps-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
  align-items: start;
}

/* SLIDER */
.ps-slider { position: relative; }

.slider-wrap {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  aspect-ratio: 4 / 3;
  box-shadow: 0 24px 60px rgba(26,107,107,0.14);
  cursor: grab;
}
.slider-wrap:active { cursor: grabbing; }

.slider-track {
  display: flex;
  height: 100%;
  width: 100%;
}

.slide {
  min-width: 100%;
  height: 100%;
}
.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* nav */
.snav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.18);
  backdrop-filter: blur(12px);
  border: 1.5px solid rgba(255,255,255,0.3);
  color: #fff;
  width: 48px; height: 48px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 5;
}
.snav:hover { background: #fff; color: #1a6b6b; }
.sprev { left: 20px; }
.snext { right: 20px; }

/* dots */
.sdots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 5;
}
.sdots span {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,0.4);
  cursor: pointer;
  transition: all 0.3s;
}
.sdots span.active { background: #fff; width: 26px; border-radius: 4px; }

/* INFO */
.ps-info { display: flex; flex-direction: column; gap: 0; }

.ps-eyebrow {
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--medium-teal, #2B9090);
  margin-bottom: 14px;
}

.ps-title {
  font-family: var(--font-display, 'Poppins', sans-serif);
  font-size: clamp(1.5rem, 2.2vw, 2.1rem);
  font-weight: 900;
  color: #0d3b38;
  line-height: 1.2;
  margin-bottom: 36px;
}

.ps-details {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 28px;
}
.ps-detail-item { display: flex; flex-direction: column; gap: 5px; }
.ps-dl {
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #8fa8a8;
}
.ps-dv {
  font-size: 1rem;
  font-weight: 600;
  color: #0d3b38;
  line-height: 1.5;
}

.ps-desc {
  font-size: 1rem;
  color: #5a7070;
  line-height: 1.8;
  margin-bottom: 36px;
}

/* ── PARTNERS (inside project section) ── */
.ps-partners {
  padding-top: 32px;
  margin-top: 8px;
  position: relative;
  right: 610px;
  bottom: 98px;
}

.ps-partners-label {
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #8fa8a8;
  margin-bottom: 20px;
}

.ps-partners-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.ps-partner-chip {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #f4fafa;
  border: 1px solid rgba(43,144,144,0.15);
  border-radius: 50px;
  padding: 5px 5px 5px 5px;
  transition: all 0.3s;
}
.ps-partner-chip:hover {
  background: rgba(43,144,144,0.08);
  border-color: rgba(43,144,144,0.3);
}

.pchip-logo {
  height: 32px;
  width: auto;
  object-fit: contain;
  border-radius: 4px;
}

.pchip-name {
  font-size: 0.9rem;
  font-weight: 700;
  color: #2a3a3a;
  white-space: nowrap;
}

/* ── GALLERY SECTION (Marquee) ── */
.project-gallery {
  padding: 0px 0 20px; /* Further reduced top padding to 0px */
  background: #fff;
  overflow: hidden;
}

.gallery-header {
  text-align: center;
  margin-bottom: 60px;
}

.marquee-container {
  width: 100%;
  display: flex;
  overflow: hidden;
  user-select: none;
  mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
}

.marquee-track {
  display: flex;
  flex-shrink: 0;
  gap: 24px;
  padding: 20px 0;
  animation: scrollSlow 40s linear infinite;
}

.marquee-track:hover {
  animation-play-state: paused;
}

.marquee-item {
  width: 320px;
  height: 220px;
  flex-shrink: 0;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: transform 0.4s;
}
.marquee-item:hover {
  transform: scale(1.04);
}
.marquee-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@keyframes scrollSlow {
  from { transform: translateX(0); }
  to { transform: translateX(calc(-50% - 12px)); } /* -50% because we have 2 sets of items */
}

/* ── LIGHTBOX ── */
.lb-overlay {
  position: fixed; inset: 0; z-index: 4000;
  background: rgba(0,0,0,0.92);
  backdrop-filter: blur(10px);
  display: flex; align-items: center; justify-content: center;
}
.lb-box {
  position: relative;
  max-width: 90vw; max-height: 88vh;
}
.lb-box img {
  max-width: 100%; max-height: 88vh;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 40px 80px rgba(0,0,0,0.5);
  display: block;
}
.lb-close {
  position: absolute; top: -56px; right: 0;
  background: none; border: none; color: #fff;
  font-size: 3rem; line-height: 1; cursor: pointer;
  transition: opacity 0.2s;
}
.lb-close:hover { opacity: 0.7; }

/* ── TRANSITION ── */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* ── RESPONSIVE ── */

/* Tablet (≤1024px) */
@media (max-width: 1024px) {
  .kh-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
  .ps-grid  { grid-template-columns: 1fr; gap: 48px; }
  .ps-title { font-size: 1.8rem; }
  .kh-grid-container { max-width: 100%; }
}

/* Mobile (≤640px) */
@media (max-width: 640px) {
  .knowledge-hub  { padding: 64px 0; }
  .project-showcase { padding: 72px 0; }

  .kh-grid { grid-template-columns: 1fr; gap: 20px; }

  .kh-header { margin-bottom: 40px; }

  .kh-card-image { aspect-ratio: 4 / 3; }

  .ps-grid { gap: 36px; }
  .slider-wrap { aspect-ratio: 1 / 1; }
  .ps-title { font-size: 1.35rem; margin-bottom: 28px; }
  .ps-dv { font-size: 0.95rem; }
  .ps-desc { font-size: 0.95rem; }
  
  .marquee-item { width: 240px; height: 160px; }
}
</style>
