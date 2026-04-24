<template>
  <div class="dashboard-layout" :class="{ 'poppins-font': true }">
    <!-- SIDEBAR -->
    <aside class="sidebar" :class="{ 'collapsed': isCollapsed, 'mobile-open': isMobileMenuOpen }">
      <div class="sidebar-top">
        <div class="brand-logo-container">
          <!-- Website Logo -->
          <div class="hhmr-brand" v-if="!isCollapsed">
            <img src="/logo/logo-putih.png" alt="Logo PT Hutan Harapan" class="logo-img-main" />
            <div class="logo-text">
              <span class="logo-name">PT Hutan Harapan</span>
              <span class="logo-sub">Mamberamo</span>
            </div>
          </div>
          <div class="hhmr-brand collapsed-logo" v-else>
            <img src="/logo/logo-putih.png" alt="Logo" class="logo-img-small" />
          </div>
        </div>

        <div class="user-profile-nav" v-if="!isCollapsed">
          <div class="avatar-nav">
            <img :src="`https://ui-avatars.com/api/?name=${userName}&background=f1f5f9&color=0a2540`" alt="Avatar" />
          </div>
          <div class="user-info-nav">
            <p class="name-nav">{{ userName }}</p>
            <p class="role-nav">Admin Staff</p>
          </div>
          <button class="profile-dropdown-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
          </button>
        </div>
      </div>

      <nav class="sidebar-nav">
        <router-link 
          v-for="menu in menus" 
          :key="menu.name" 
          :to="menu.path" 
          class="nav-item" 
          :class="{ 'active': isActiveRoute(menu.path) }"
          @click="closeMobileMenu"
        >
          <span class="icon" v-html="getIcon(menu.icon)"></span>
          <span class="label" v-if="!isCollapsed">{{ menu.name }}</span>
          <span class="chevron-right" v-if="!isCollapsed && menu.hasChevron">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
          </span>
        </router-link>
      </nav>

      <div class="sidebar-footer">
        <button class="integrated-collapse-btn" @click="handleSidebarCollapse">
          <span class="label" v-if="!isCollapsed">Persingkat Menu</span>
          <span class="icon collapse-icon" :class="{ 'rotated': isCollapsed }">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
          </span>
        </button>
      </div>
    </aside>

    <!-- MOBILE OVERLAY -->
    <div class="mobile-sidebar-overlay" v-if="isMobile && isMobileMenuOpen" @click="isMobileMenuOpen = false"></div>

    <!-- MAIN CONTENT -->
    <main class="main-content">
      <!-- Top Header -->
      <header class="top-header">
        <div class="header-left">
          <button class="back-btn" @click="goBack" v-if="!isMobile">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button class="hamburger-btn" @click="isMobileMenuOpen = true" v-if="isMobile">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0a2540" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
        
        <div class="header-right">
          <button class="header-icon-btn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0a2540" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></button>
          <button class="header-icon-btn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0a2540" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg></button>
          <button class="header-icon-btn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0a2540" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></button>
          <button class="header-icon-btn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0a2540" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg></button>
          <div class="header-avatar">
            <img :src="`https://ui-avatars.com/api/?name=${userName}&background=f1f5f9&color=0a2540`" alt="Avatar" />
          </div>
        </div>
      </header>

      <!-- Dashboard Body -->
      <div class="dashboard-body">
        
        <div class="page-header">
          <h1 class="page-title">{{ currentMenuName }}</h1>
        </div>

        <!-- Dynamic Content Slot -->
        <div class="content-area">
          <div v-if="isActiveRoute('/dashboard')" class="dashboard-home">
            <p class="current-date">{{ currentDate }}</p>
            <h2 class="greeting">Halo, {{ userName }}</h2>
            <p class="subtitle">Pantau dan kelola event, lowongan, dan merchandise</p>

            <div class="action-card mt-8">
              <div class="card-content">
                <h3>Rekap Semua Event</h3>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
            </div>
          </div>
          
          <div v-else class="placeholder-content">
            <h2 class="greeting">Halaman {{ currentMenuName }}</h2>
            <p class="subtitle">Area ini bersifat modular dan dapat diisi dengan komponen sesuai kebutuhan.</p>
          </div>
        </div>

      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const isCollapsed = ref(false)
const isMobile = ref(false)
const isMobileMenuOpen = ref(false)
const userName = ref('Moofeet') // Dynamic via localStorage
const currentDate = ref('')

const menus = [
  { name: 'Dashboard', path: '/dashboard', icon: 'home', hasChevron: false },
  { name: 'Proyek Karbon', path: '/proyek-karbon', icon: 'box', hasChevron: true },
  { name: 'Status Lahan', path: '/lahan', icon: 'map-pin', hasChevron: true },
  { name: 'Blog & Media', path: '/blog-media', icon: 'file-text', hasChevron: false },
  { name: 'Pesan', path: '/pesan', icon: 'message-square', hasChevron: false },
  { name: 'Laporan', path: '/laporan', icon: 'calendar', hasChevron: false },
  { name: 'Akun Saya', path: '/akun-saya', icon: 'user', hasChevron: false }
]

const currentMenuName = computed(() => {
  const active = menus.find(m => route.path === m.path || route.path.startsWith(m.path + '/'))
  return active ? active.name : 'Dashboard'
})

function isActiveRoute(path) {
  if (path === '/dashboard') return route.path === '/dashboard'
  return route.path === path || route.path.startsWith(path + '/')
}

function closeMobileMenu() {
  if (isMobile.value) isMobileMenuOpen.value = false
}

function handleSidebarCollapse() {
  if (!isMobile.value) {
    isCollapsed.value = !isCollapsed.value
  }
}

function goBack() {
  router.back()
}

function getIcon(name) {
  const icons = {
    'home': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    'calendar': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    'box': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
    'map-pin': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    'file-text': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
    'message-square': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    'user': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    'globe': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>'
  }
  return icons[name] || icons['home']
}

function handleResize() {
  isMobile.value = window.innerWidth <= 1024
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
  
  // Dynamic User Name logic
  const name = localStorage.getItem('user_name')
  if (name) {
    userName.value = name.split(' ')[0] // Simple first name or use full based on preference
  }

  // Format date loosely to match "Jumat • 24 Apr, 2026"
  const dateOptions = { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' }
  let formatted = new Date().toLocaleDateString('id-ID', dateOptions)
  // "Jumat, 24 Apr 2026" -> "Jumat • 24 Apr, 2026"
  const parts = formatted.split(', ')
  if(parts.length > 1) {
     currentDate.value = `${parts[0]} • ${parts[1].replace(' ', ', ')}`
  } else {
     currentDate.value = formatted
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

.poppins-font {
  font-family: 'Poppins', sans-serif;
}

.dashboard-layout {
  display: flex;
  height: 100vh;
  width: 100%;
  background: #ffffff; /* Main background matches ref more closely if white, but let's use a very light tint for contrast */
  overflow: hidden;
  position: relative;
}

/* SIDEBAR */
.sidebar {
  width: 250px;
  background: #0F2D2D; /* Dark teal for website brand */
  color: #fff;
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2000;
  flex-shrink: 0;
}

.sidebar.collapsed {
  width: 80px;
}

@media (max-width: 1024px) {
  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    transform: translateX(-100%);
  }
  .sidebar.mobile-open {
    transform: translateX(0);
    box-shadow: 20px 0 50px rgba(0,0,0,0.3);
  }
  .mobile-sidebar-overlay {
    position: fixed;
    inset: 0;
    background: rgba(10, 37, 64, 0.6);
    backdrop-filter: blur(4px);
    z-index: 1500;
  }
}

.sidebar-top {
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.brand-logo-container {
  padding: 24px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hhmr-brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.hhmr-brand.collapsed-logo {
  justify-content: center;
}

.logo-img-main {
  height: 28px;
  width: auto;
  object-fit: contain;
}

.logo-img-small {
  height: 24px;
  width: auto;
  object-fit: contain;
}

.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.logo-name {
  font-family: 'Poppins', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  color: #fff;
}

.logo-sub {
  font-size: 0.65rem;
  font-weight: 600;
  color: rgba(255,255,255,0.85);
  margin-top: 2px;
}

.user-profile-nav {
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.avatar-nav {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;
  background: white;
  border: 2px solid rgba(255,255,255,0.1);
}

.avatar-nav img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.user-info-nav {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.name-nav {
  font-size: 0.85rem;
  font-weight: 600;
  color: #fff;
  line-height: 1.2;
}

.role-nav {
  font-size: 0.65rem;
  color: #94a3b8;
}

.profile-dropdown-btn {
  background: transparent;
  border: 1px solid rgba(255,255,255,0.3);
  color: white;
  width: 22px;
  height: 22px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

/* NAV ITEMS */
.sidebar-nav {
  flex-grow: 1;
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.sidebar-nav::-webkit-scrollbar {
  width: 4px;
}
.sidebar-nav::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,0.1);
  border-radius: 4px;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 12px 24px;
  color: #cbd5e1;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s;
  border-left: 3px solid transparent;
}

.nav-item:hover {
  background: rgba(255,255,255,0.05);
  color: #fff;
}

.nav-item.active {
  background: #1A6B6B; /* Primary teal for active state */
  color: #fff;
  border-left-color: #fff;
  font-weight: 500;
}

.nav-item .icon {
  width: 20px;
  display: flex;
  justify-content: center;
  opacity: 0.7;
}

.nav-item.active .icon {
  opacity: 1;
}

.nav-item .label {
  margin-left: 16px;
  font-size: 0.85rem;
}

.nav-item .chevron-right {
  margin-left: auto;
  opacity: 0.5;
}

.sidebar-footer {
  padding: 0;
  background: #0A1E1E; /* Darker bottom bar */
}

.integrated-collapse-btn {
  width: 100%;
  padding: 16px 24px;
  background: transparent;
  border: none;
  color: #cbd5e1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: inherit;
}

.integrated-collapse-btn:hover {
  color: #fff;
  background: rgba(255,255,255,0.02);
}

.integrated-collapse-btn .label {
  font-size: 0.85rem;
  font-weight: 400;
}

.collapse-icon.rotated {
  transform: rotate(180deg);
}

/* MAIN CONTENT */
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  background: #fafafa;
}

/* TOP HEADER */
.top-header {
  height: 60px;
  background: white;
  border-bottom: 1px solid #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  flex-shrink: 0;
}

.header-left .back-btn, .header-left .hamburger-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.header-icon-btn {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: #0f172a;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;
}

.header-icon-btn:hover {
  background: #f1f5f9;
}

.header-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 8px;
}

.header-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* DASHBOARD BODY */
.dashboard-body {
  padding: 32px 48px;
  max-width: 1200px;
}

@media (max-width: 768px) {
  .dashboard-body {
    padding: 24px;
  }
}

.page-header {
  margin-bottom: 32px;
}

.page-title {
  font-size: 2.2rem;
  font-weight: 600;
  color: #000;
  letter-spacing: -0.5px;
}

.current-date {
  font-size: 0.85rem;
  color: #64748b;
  margin-bottom: 20px;
}

.greeting {
  font-size: 1.4rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 6px;
}

.subtitle {
  font-size: 0.9rem;
  color: #64748b;
  margin-bottom: 40px;
}

.mt-8 {
  margin-top: 40px;
}

.action-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0; 
  padding: 20px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s;
}

.action-card:hover {
  border-color: #cbd5e1;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.action-card h3 {
  font-size: 0.95rem;
  font-weight: 600;
  color: #0f172a;
}

.placeholder-content {
  background: white;
  border: 1px dashed #cbd5e1;
  padding: 40px;
  text-align: center;
  border-radius: 4px;
}
</style>
