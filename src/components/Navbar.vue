<template>
  <nav class="navbar" :class="{ scrolled: isScrolled || !isHome }">
    <div class="container nav-inner">
      <router-link to="/" class="nav-logo">
        <img :src="(isScrolled || !isHome) ? '/logo/logo-membrano.png' : '/logo/logo-putih.png'" alt="Logo PT Hutan Harapan" class="logo-image">
        <div class="logo-text">
          <span class="logo-name">PT Hutan Harapan</span>
          <span class="logo-sub">Memberamo</span>
        </div>
      </router-link>

      <ul class="nav-links">
        <li v-for="link in navLinks" :key="link.id" :class="{ 'has-dropdown': link.children || link.megaMenu, 'is-mega': link.megaMenu }">
          <router-link v-if="!(link.children || link.megaMenu)" :to="link.path" active-class="active">
            {{ t.nav[link.key] || link.defaultLabel }}
          </router-link>
          
          <div v-else class="dropdown-toggle">
            {{ t.nav[link.key] }}
            <svg class="dropdown-arrow" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            
            <ul v-if="link.children && !link.megaMenu" class="dropdown-menu">
              <li v-for="child in link.children" :key="child.id">
                <router-link :to="child.path" active-class="active">
                  {{ t.nav[child.key] || child.defaultLabel }}
                </router-link>
              </li>
            </ul>

            <div v-if="link.megaMenu" class="mega-menu">
              <div class="mega-menu-inner">
                <div class="mega-column" v-for="(group, idx) in link.groups" :key="idx">
                  <span class="mega-title">{{ t.nav[group.key] }}</span>
                  <router-link v-for="child in group.children" :key="child.id" :to="child.path" active-class="active">
                    {{ t.nav[child.key] }}
                  </router-link>
                </div>
              </div>
            </div>

          </div>
        </li>
      </ul>

      <div class="nav-controls">
        <div class="lang-switch-wrapper">
          <button class="lang-active-btn" :title="lang === 'id' ? 'Bahasa' : 'English'">
            <img :src="lang === 'id' ? '/button_leaguage/indo.png' : '/button_leaguage/english.png'" alt="Language">
            <svg class="dropdown-arrow" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          
          <ul class="lang-dropdown">
            <li>
              <button @click="$emit('set-lang', 'id')" :class="{ active: lang === 'id' }">
                <img src="/button_leaguage/indo.png" alt="Bahasa">
                <span>Bahasa</span>
              </button>
            </li>
            <li>
              <button @click="$emit('set-lang', 'en')" :class="{ active: lang === 'en' }">
                <img src="/button_leaguage/english.png" alt="English">
                <span>English</span>
              </button>
            </li>
          </ul>
        </div>

        <router-link to="/login" class="profile-btn" aria-label="User Profile">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </router-link>

        <button class="hamburger" @click="menuOpen = true" :class="{ open: menuOpen }" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <!-- Mobile Sidebar -->
    <div class="sidebar-overlay" :class="{ open: menuOpen }" @click="menuOpen = false"></div>
    <div class="sidebar" :class="{ open: menuOpen }">
      <button class="close-sidebar" @click="menuOpen = false" aria-label="Close Menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <ul class="nav-links-mobile">
        <li v-for="link in navLinks" :key="link.id">
          <template v-if="!(link.children || link.megaMenu)">
            <router-link :to="link.path" @click="menuOpen = false" active-class="active">{{ t.nav[link.key] || link.defaultLabel }}</router-link>
          </template>
          
          <template v-else-if="link.children && !link.megaMenu">
            <div class="mobile-dropdown-title" @click="toggleAccordion(link.key)">
              <span>{{ t.nav[link.key] }}</span>
              <svg :class="{'rotated': activeAccordion === link.key}" width="12" height="8" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M1 1L5 5L9 1"/>
              </svg>
            </div>
            <ul class="mobile-dropdown-list" v-show="activeAccordion === link.key">
              <li v-for="child in link.children" :key="child.id">
                <router-link :to="child.path" @click="menuOpen = false" active-class="active">{{ t.nav[child.key] }}</router-link>
              </li>
            </ul>
          </template>

          <template v-else-if="link.megaMenu">
            <div class="mobile-dropdown-title" @click="toggleAccordion(link.key)">
              <span>{{ t.nav[link.key] }}</span>
              <svg :class="{'rotated': activeAccordion === link.key}" width="12" height="8" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M1 1L5 5L9 1"/>
              </svg>
            </div>
            <div v-show="activeAccordion === link.key" class="mobile-accordion-content">
              <div v-for="(group, idx) in link.groups" :key="idx" class="mobile-mega-group">
                <span class="mobile-mega-subtitle">{{ t.nav[group.key] }}</span>
                <ul class="mobile-dropdown-list">
                  <li v-for="child in group.children" :key="child.id">
                    <router-link :to="child.path" @click="menuOpen = false" active-class="active">{{ t.nav[child.key] }}</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </template>
        </li>
      </ul>
      <div class="mobile-lang">
        <button @click="$emit('set-lang', 'id'); menuOpen = false" :class="['lang-btn', { active: lang === 'id' }]">
          <img src="/button_leaguage/indo.png" alt="Bahasa"> Bahasa
        </button>
        <button @click="$emit('set-lang', 'en'); menuOpen = false" :class="['lang-btn', { active: lang === 'en' }]">
          <img src="/button_leaguage/english.png" alt="English"> English
        </button>
      </div>

      <router-link to="/login" class="mobile-profile-btn" @click="menuOpen = false">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        Login / Profile
      </router-link>

    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({ t: Object, lang: String })
defineEmits(['set-lang'])

const isScrolled = ref(false)
const menuOpen = ref(false)
const activeAccordion = ref(null)
const route = useRoute()
const isHome = computed(() => route.path === '/')

function toggleAccordion(key) {
  activeAccordion.value = activeAccordion.value === key ? null : key
}

const navLinks = [
  { id: 'home', key: 'home', path: '/' },
  {
    id: 'who_we_are', key: 'who_we_are',
    megaMenu: true,
    groups: [
      {
        key: 'about_us_group',
        children: [
          { id: 'leadership', key: 'leadership', path: '/leadership' },
          { id: 'subsidiaries', key: 'subsidiaries', path: '/subsidiaries' },
          { id: 'milestones', key: 'milestones', path: '/milestones' }
        ]
      },
      {
        key: 'philosophy_group',
        children: [
          { id: 'vision', key: 'vision', path: '/vision' },
          { id: 'mission', key: 'mission', path: '/mission' },
          { id: 'manifesto', key: 'manifesto', path: '/manifesto' }
        ]
      },
      {
        key: 'career_group',
        children: [
          { id: 'life_at', key: 'life_at', path: '/life-at' },
          { id: 'values', key: 'values', path: '/values' },
          { id: 'openings', key: 'openings', path: '/openings' }
        ]
      },
      {
        key: 'media_group',
        children: [
          { id: 'blog', key: 'blog', path: '/blog' }
        ]
      }
    ]
  },
  {
    id: 'what_we_do', key: 'what_we_do',
    children: [
      { id: 'projects', key: 'projects', path: '/projects' },
      { id: 'methodology', key: 'methodology', path: '/methodology' }
    ]
  },
  { id: 'career_btn', key: 'career', defaultLabel: 'Career', path: '/career' },
  { id: 'investor', key: 'investor', path: '/investor' },
  { id: 'contact', key: 'contact', path: '/contact' },
]

function handleScroll() {
  // Trigger state change after 50px of scroll
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() 
})
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  padding: 24px 0;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

/* --- STATE: TOP (WHITE) --- */
/* These styles apply when NOT scrolled */
.logo-name { color: #FFFFFF; transition: color 0.3s; }
.logo-sub { color: rgba(255,255,255,0.85); transition: color 0.3s; }
.nav-links a { color: rgba(255,255,255,0.9); transition: all 0.3s; }
.nav-links a:hover { color: #FFFFFF; background: rgba(255,255,255,0.1); }
.nav-links a.active { color: #FFFFFF; background: rgba(255,255,255,0.2); }

.lang-switch {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  transition: all 0.3s;
}
.lang-btn.active { background: white; }

.nav-cta {
  background: transparent;
  border: 1.5px solid white;
  color: white;
  box-shadow: none;
  transition: all 0.3s;
}
.nav-cta:hover {
  background: white;
  color: var(--dark-teal);
  box-shadow: 0 4px 15px rgba(255,255,255,0.3);
}

.hamburger span { background: #FFFFFF; }

/* --- STATE: SCROLLED (LIGHT THEME) --- */
.navbar.scrolled {
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(43,144,144,0.12);
  box-shadow: 0 4px 24px rgba(26,107,107,0.08);
  padding: 12px 0;
}

.navbar.scrolled .logo-name { color: #1A2A2A; }
.navbar.scrolled .logo-sub { color: #2B9090; }
.navbar.scrolled .nav-links a { color: #5A7070; }
.navbar.scrolled .nav-links a:hover { color: #1A6B6B; background: rgba(43,144,144,0.06); }
.navbar.scrolled .nav-links a.active { color: #1A6B6B; background: rgba(43,144,144,0.08); }

.navbar.scrolled .lang-switch {
  background: #F4FAFA;
  border-color: rgba(43,144,144,0.2);
}

.navbar.scrolled .nav-cta {
  background: linear-gradient(135deg, var(--dark-teal), var(--medium-teal));
  border: none;
  color: white;
  box-shadow: 0 4px 15px rgba(26,107,107,0.2);
}

.navbar.scrolled .hamburger span { background: #2B9090; }

/* --- ICON & LAYOUT BASE --- */
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.nav-logo { display: flex; align-items: center; gap: 12px; text-decoration: none; flex-shrink: 0; }
.logo-image {
  height: 32px;
  width: auto;
  object-fit: contain;
}
.logo-text { display: flex; flex-direction: column; line-height: 1.2; }
.logo-name { font-family: 'Poppins', sans-serif; font-size: 0.84rem; font-weight: 700; }
.logo-sub { font-size: 0.68rem; font-weight: 600; }

.nav-links { display: flex; list-style: none; gap: 2px; }
.nav-links li { position: relative; }
.nav-links a {
  display: block; padding: 7px 13px;
  text-decoration: none; font-size: 0.86rem; font-weight: 600;
  border-radius: 8px; 
}

.dropdown-toggle {
  display: flex; align-items: center; gap: 6px;
  padding: 7px 13px; font-size: 0.86rem; font-weight: 600;
  border-radius: 8px; cursor: pointer; color: rgba(255,255,255,0.9);
  transition: all 0.3s;
}
.dropdown-toggle:hover { color: #FFFFFF; background: rgba(255,255,255,0.1); }
.navbar.scrolled .dropdown-toggle { color: #5A7070; }
.navbar.scrolled .dropdown-toggle:hover { color: #1A6B6B; background: rgba(43,144,144,0.06); }

.dropdown-arrow { transition: transform 0.3s; }
.nav-links li:hover .dropdown-arrow { transform: rotate(180deg); }

.dropdown-menu {
  position: absolute; top: calc(100% + 15px); left: 0;
  background: rgba(255, 255, 255, 0.97); 
  backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 16px 40px rgba(26, 107, 107, 0.12);
  border-radius: 16px; min-width: 220px; list-style: none;
  padding: 12px;
  opacity: 0; visibility: hidden; transform: translateY(10px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.dropdown-menu::before {
  content: ''; position: absolute;
  top: -15px; left: 0; right: 0; height: 15px;
}
.nav-links li:hover .dropdown-menu {
  opacity: 1; visibility: visible; transform: translateY(0);
}
.dropdown-menu a {
  color: #5A7070 !important; border-radius: 8px;
  padding: 10px 16px; font-weight: 500; font-size: 0.9rem;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.dropdown-menu a:hover, .dropdown-menu a.active {
  background: rgba(43,144,144,0.08) !important; color: #1A6B6B !important;
  transform: translateX(4px);
}

/* MEGA MENU STYLES */
.nav-links li.is-mega { position: static; }
.mega-menu {
  position: absolute; 
  top: calc(100% + 10px); 
  left: 50%; 
  transform: translateX(-50%) translateY(15px);
  width: 950px; max-width: 95vw;
  background: rgba(255, 255, 255, 0.97); 
  backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 20px 48px rgba(26, 107, 107, 0.15), 0 0 0 1px rgba(255,255,255,0.4) inset;
  border-radius: 20px;
  padding: 35px 45px;
  opacity: 0; visibility: hidden; 
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.mega-menu::before {
  content: ''; position: absolute;
  top: -15px; left: 0; right: 0; height: 15px;
}
.nav-links li.is-mega:hover .mega-menu {
  opacity: 1; visibility: visible; transform: translateX(-50%) translateY(0);
}
.mega-menu-inner {
  display: flex; gap: 40px; justify-content: space-between; width: 100%;
}
.mega-column {
  display: flex; flex-direction: column; gap: 4px; flex: 1;
}
.mega-title {
  color: #1A6B6B; font-family: 'Poppins', sans-serif; font-weight: 700; 
  font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; 
  margin-bottom: 12px; border-bottom: 2px solid rgba(43, 144, 144, 0.1); 
  padding-bottom: 10px; display: inline-block;
}
.mega-column a {
  color: #5A7070 !important; text-decoration: none; font-weight: 500; font-size: 0.9rem; 
  padding: 8px 12px; border-radius: 8px; margin-left: -12px;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.mega-column a:hover, .mega-column a.active { 
  color: #1A6B6B !important; background: rgba(43,144,144,0.08); 
  transform: translateX(4px); 
}

.nav-controls { display: flex; align-items: center; gap: 12px; }

.lang-switch-wrapper {
  position: relative;
}
.lang-active-btn {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  border-radius: 12px;
  padding: 10px 12px;
  display: flex; align-items: center; gap: 8px;
  cursor: pointer; transition: all 0.3s;
  color: white;
}
.navbar.scrolled .lang-active-btn {
  background: #F4FAFA;
  border-color: rgba(43,144,144,0.2);
  color: #1A6B6B;
}
.lang-active-btn:hover {
  background: rgba(255, 255, 255, 0.25);
}
.navbar.scrolled .lang-active-btn:hover {
  background: rgba(43,144,144,0.06);
}
.lang-active-btn img {
  width: 34px; height: auto; border-radius: 3px; display: block;
}
.lang-switch-wrapper:hover .dropdown-arrow { transform: rotate(180deg); }

.profile-btn {
  display: flex; align-items: center; justify-content: center;
  width: 44px; height: 44px; border-radius: 12px;
  background: rgba(255, 255, 255, 0.15); border: 1px solid rgba(255, 255, 255, 0.25);
  color: white; transition: all 0.3s; backdrop-filter: blur(4px);
}
.navbar.scrolled .profile-btn {
  background: #F4FAFA; border-color: rgba(43,144,144,0.2); color: #1A6B6B;
}
.profile-btn:hover {
  background: rgba(255, 255, 255, 0.25); transform: translateY(-2px);
}
.navbar.scrolled .profile-btn:hover {
  background: rgba(43,144,144,0.06);
}
.lang-active-btn img {
  width: 34px; height: auto; border-radius: 3px; display: block;
}
.lang-switch-wrapper:hover .dropdown-arrow { transform: rotate(180deg); }

.lang-dropdown {
  position: absolute; top: calc(100% + 15px); right: 0;
  background: rgba(255, 255, 255, 0.97); 
  backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 16px 40px rgba(26, 107, 107, 0.12);
  border-radius: 14px; min-width: 140px; list-style: none;
  padding: 8px;
  opacity: 0; visibility: hidden; transform: translateY(10px);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.lang-switch-wrapper:hover .lang-dropdown {
  opacity: 1; visibility: visible; transform: translateY(0);
}
.lang-dropdown::before {
  content: ''; position: absolute;
  top: -15px; left: 0; right: 0; height: 15px;
}
.lang-dropdown button {
  width: 100%; display: flex; align-items: center; gap: 12px;
  background: transparent; border: none; padding: 12px 14px;
  border-radius: 8px; cursor: pointer; color: #5A7070; font-weight: 500;
  font-size: 0.95rem; transition: all 0.2s;
}
.lang-dropdown button img {
  width: 26px; height: auto; border-radius: 2px; display: block;
}
.lang-dropdown button:hover, .lang-dropdown button.active {
  background: rgba(43,144,144,0.08); color: #1A6B6B;
}

.nav-cta { padding: 9px 18px; font-size: 0.82rem; font-weight: 700; }

.hamburger { display: none; flex-direction: column; gap: 5px; background: transparent; border: none; cursor: pointer; padding: 6px; border-radius: 8px; }
.hamburger span { display: block; width: 21px; height: 2px; border-radius: 2px; }

/* SIDEBAR LAYOUT */
.sidebar-overlay {
  position: fixed; top: 0; left: 0; width: 100%; height: 100vh;
  background: rgba(0,0,0,0.5); backdrop-filter: blur(4px);
  z-index: 1999; opacity: 0; visibility: hidden; transition: all 0.3s;
}
.sidebar-overlay.open { opacity: 1; visibility: visible; }

.sidebar {
  position: fixed; top: 0; right: -100%; width: 300px; height: 100vh;
  background: rgba(255, 255, 255, 0.98); 
  backdrop-filter: blur(25px);
  z-index: 2000; padding: 100px 24px 40px;
  box-shadow: -10px 0 40px rgba(26,107,107,0.15);
  overflow-y: auto; transition: right 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
}
.sidebar.open { right: 0; }

.close-sidebar {
  position: absolute; top: 30px; right: 24px;
  width: 44px; height: 44px;
  background: #F4FAFA; border: 1px solid rgba(43,144,144,0.1);
  border-radius: 50%; display: flex; align-items: center; justify-content: center;
  color: #1A6B6B; cursor: pointer; transition: all 0.3s;
}
.close-sidebar:hover { background: #1A6B6B; color: white; transform: rotate(90deg); }

.nav-links-mobile { list-style: none; display: flex; flex-direction: column; gap: 8px; margin-bottom: 40px; }
.nav-links-mobile > li > a {
  text-decoration: none; color: #1A2A2A; font-weight: 700;
  display: block; font-size: 1.1rem; padding: 14px 16px;
  border-radius: 12px; transition: all 0.3s;
}
.nav-links-mobile > li > a:active, .nav-links-mobile > li > a.active { 
  background: rgba(43,144,144,0.08); color: #1A6B6B; 
}

.mobile-dropdown-title {
  display: flex; align-items: center; justify-content: space-between; cursor: pointer;
  font-size: 1rem; font-weight: 700; color: #1A2A2A;
  margin-bottom: 4px; padding: 14px 16px; border-radius: 12px;
  text-transform: uppercase; letter-spacing: 0.8px; transition: all 0.3s;
}
.mobile-dropdown-title:hover { background: rgba(43,144,144,0.05); }
.mobile-dropdown-title svg { transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); color: #2B9090; }
.mobile-dropdown-title svg.rotated { transform: rotate(180deg); color: #1A6B6B; }
.mobile-accordion-content { padding-left: 12px; padding-bottom: 10px; margin-top: 4px; }

.mobile-dropdown-list { list-style: none; padding-left: 12px; display: flex; flex-direction: column; gap: 6px; border-left: 2px solid rgba(43,144,144,0.1); margin-left: 16px; }
.mobile-mega-group { margin-bottom: 16px; }
.mobile-mega-subtitle {
  display: block; font-size: 0.8rem; font-weight: 800; color: #2F327D;
  margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px; padding-left: 14px;
}
.mobile-dropdown-list a { 
  font-size: 0.95rem; font-weight: 500; color: #5A7070; padding: 8px 14px; border-radius: 8px;
}
.mobile-dropdown-list a.active { color: #1A6B6B; background: rgba(43,144,144,0.06); }

.mobile-lang {
  display: flex; background: #F4FAFA; padding: 6px; border-radius: 50px;
  border: 1px solid rgba(43,144,144,0.15); margin-top: 20px;
}
.mobile-lang .lang-btn {
  border: none; background: transparent;
  color: #5A7070; font-weight: 700; padding: 12px 10px; border-radius: 50px;
  flex: 1; display: flex; align-items: center; justify-content: center; gap: 8px; 
  font-size: 0.9rem; transition: all 0.3s;
}
.mobile-lang .lang-btn img { width: 22px; height: auto; border-radius: 2px; filter: grayscale(0.5); transition: all 0.3s; }
.mobile-lang .lang-btn.active { background: white; color: #1A6B6B; box-shadow: 0 4px 12px rgba(26,107,107,0.1); }
.mobile-lang .lang-btn.active img { filter: grayscale(0); }

.mobile-profile-btn {
  display: flex; align-items: center; justify-content: center; gap: 10px;
  background: #1A6B6B; color: white; padding: 14px; border-radius: 12px;
  text-decoration: none; font-weight: 700; font-size: 1rem;
  margin-top: 15px; transition: all 0.3s; text-align: center;
}
.mobile-profile-btn:hover {
  background: #2B9090; transform: translateY(-2px);
}

@media (max-width: 960px) {
  .nav-links, .nav-cta, .lang-switch-wrapper, .profile-btn { display: none; }
  .hamburger { display: flex; }
  
  .logo-image { height: 26px; }
  .logo-name { font-size: 0.75rem; }
  .logo-sub { font-size: 0.6rem; }
  .nav-logo { gap: 8px; }
}
</style>
