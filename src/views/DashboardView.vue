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
        <template v-for="menu in menus" :key="menu.name">
          <!-- Normal Link -->
          <router-link 
            v-if="!menu.children"
            :to="menu.path" 
            class="nav-item" 
            :class="{ 'active': isActiveRoute(menu.path) }"
            @click="closeMobileMenu"
          >
            <span class="icon" v-html="getIcon(menu.icon)"></span>
            <span class="label" v-if="!isCollapsed">{{ menu.name }}</span>
          </router-link>

          <!-- Accordion Menu -->
          <div v-else class="nav-group">
            <div 
              class="nav-item accordion-toggle" 
              :class="{ 'active': isActiveRoute(menu.path) }"
              @click="toggleAccordion(menu.name)"
            >
              <span class="icon" v-html="getIcon(menu.icon)"></span>
              <span class="label" v-if="!isCollapsed">{{ menu.name }}</span>
              <span class="chevron-right" :class="{ 'rotated': openAccordion === menu.name }" v-if="!isCollapsed">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
              </span>
            </div>
            
            <div class="nav-children" v-show="openAccordion === menu.name && !isCollapsed">
              <router-link 
                v-for="child in menu.children" 
                :key="child.name"
                :to="child.path"
                class="nav-child-item"
                :class="{ 'active': route.path === child.path }"
                @click="closeMobileMenu"
              >
                {{ child.name }}
              </router-link>
            </div>
          </div>
        </template>
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
      <header class="top-header" :class="{ 'mobile-header-style': isMobile }">
        <!-- Sidebar Toggle (Left) -->
        <div class="header-left">
          <button class="hamburger-btn" @click="isMobileMenuOpen = true" v-if="isMobile">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A6B6B" stroke-width="2.5"><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></svg>
          </button>
          <button class="back-btn" @click="goBack" v-else>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
          </button>
        </div>

        <!-- Right Side: Language + Profile -->
        <div class="header-right">
          <!-- Language Selector Dropdown -->
          <div class="k-lang-container">
            <div class="k-lang-selector" @click="isLangDropdownOpen = !isLangDropdownOpen">
              <div class="flag-wrapper">
                <img :src="lang === 'id' ? '/button_language/indo.png' : '/button_language/english.png'" alt="Flag">
              </div>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="#1A6B6B" stroke-width="2"><path d="M1 1L5 5L9 1" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            
            <transition name="slide-down">
              <div class="k-lang-dropdown" v-if="isLangDropdownOpen">
                <div class="lang-option" @click="lang = 'id'; isLangDropdownOpen = false" :class="{ 'active': lang === 'id' }">
                  <img src="/button_language/indo.png" alt="ID"> <span>Bahasa Indonesia</span>
                </div>
                <div class="lang-option" @click="lang = 'en'; isLangDropdownOpen = false" :class="{ 'active': lang === 'en' }">
                  <img src="/button_language/english.png" alt="EN"> <span>English</span>
                </div>
              </div>
            </transition>
          </div>

          <!-- Unified Profile Toggle -->
          <div class="profile-menu-container">
            <button class="k-profile-toggle" @click="isProfileMenuOpen = !isProfileMenuOpen">
              <div class="mini-avatar">
                <img :src="`https://ui-avatars.com/api/?name=${userName}&background=f1f5f9&color=0a2540`" alt="Avatar" />
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A6B6B" stroke-width="2"><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></svg>
            </button>

            <!-- Unified Dropdown Accordion -->
            <transition name="slide-down">
              <div class="mobile-profile-dropdown unified-dropdown" v-if="isProfileMenuOpen">
                <!-- Profile Header -->
                <div class="dropdown-profile-header">
                  <p class="p-name">{{ userName }}</p>
                  <p class="p-email">admin@hutanharapan.id</p>
                </div>

                <div class="dropdown-item" @click="isProfileMenuOpen = false">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  <span>{{ lang === 'id' ? 'Beranda' : 'Home' }}</span>
                </div>
                <div class="dropdown-item" @click="isProfileMenuOpen = false">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                  <span>{{ lang === 'id' ? 'Notifikasi' : 'Notifications' }}</span>
                </div>
                <div class="divider"></div>
                <div class="dropdown-item logout" @click="isProfileMenuOpen = false">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/></svg>
                  <span>{{ lang === 'id' ? 'Keluar' : 'Logout' }}</span>
                </div>
              </div>
            </transition>
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
          
          <!-- DASHBOARD -->
          <!-- DASHBOARD (Reference Image Layout) -->
          <div v-if="isActiveRoute('/dashboard')" class="dashboard-home">
            <div class="page-header" style="margin-bottom: 24px;">

            </div>

            <!-- Top Cards -->
            <div class="k-grid-4">
              <!-- Card 1 -->
              <div class="k-card k-stat-card">
                <div class="k-stat-header">
                  <span class="k-stat-title">Total Proyek</span>
                  <div class="k-stat-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg></div>
                </div>
                <div class="k-stat-value">12</div>
                <div class="k-stat-trend positive">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
                  <span>8.2%</span> <span class="trend-text">since last month</span>
                </div>
              </div>
              
              <!-- Card 2 -->
              <div class="k-card k-stat-card">
                <div class="k-stat-header">
                  <span class="k-stat-title">Lahan Aktif (Ha)</span>
                  <div class="k-stat-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
                </div>
                <div class="k-stat-value">4.890</div>
                <div class="k-stat-trend positive">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
                  <span>3.4%</span> <span class="trend-text">since last month</span>
                </div>
              </div>

              <!-- Card 3 -->
              <div class="k-card k-stat-card">
                <div class="k-stat-header">
                  <span class="k-stat-title">Serapan Karbon (Ton)</span>
                  <div class="k-stat-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
                </div>
                <div class="k-stat-value">25.410</div>
                <div class="k-stat-trend negative">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
                  <span>0.2%</span> <span class="trend-text">since last month</span>
                </div>
              </div>

              <!-- Card 4 -->
              <div class="k-card k-stat-card">
                <div class="k-stat-header">
                  <span class="k-stat-title">Pesan Baru</span>
                  <div class="k-stat-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
                </div>
                <div class="k-stat-value">36</div>
                <div class="k-stat-trend positive">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
                  <span>1.2%</span> <span class="trend-text">since last month</span>
                </div>
              </div>
            </div>

            <!-- Middle Row -->
            <div class="k-grid-charts mt-6">
              <!-- Bar Chart -->
              <div class="k-card">
                 <div class="k-card-header">
                   <h3>Dinamika Penyerapan</h3>
                   <span class="k-dropdown-text">2026 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></span>
                 </div>
                 <div class="css-bar-chart">
                    <div class="bar-col"><div class="bar" style="height: 40%"></div><span class="bar-label">Jan</span></div>
                    <div class="bar-col"><div class="bar" style="height: 55%"></div><span class="bar-label">Feb</span></div>
                    <div class="bar-col"><div class="bar" style="height: 45%"></div><span class="bar-label">Mar</span></div>
                    <div class="bar-col"><div class="bar" style="height: 70%"></div><span class="bar-label">Apr</span></div>
                    <div class="bar-col"><div class="bar" style="height: 60%"></div><span class="bar-label">Mei</span></div>
                    <div class="bar-col"><div class="bar" style="height: 85%"></div><span class="bar-label">Jun</span></div>
                    <div class="bar-col"><div class="bar" style="height: 30%"></div><span class="bar-label">Jul</span></div>
                 </div>
              </div>

              <!-- Circular Progress / Status -->
              <div class="k-card">
                <div class="k-card-header">
                   <h3>Status Kondisi Lahan</h3>
                </div>
                <div class="k-donut-chart-container">
                  <div class="k-donut-chart"></div>
                  <div class="k-donut-legend">
                     <div class="legend-item"><span class="dot" style="background:#4ade80"></span> 70% Aman</div>
                     <div class="legend-item"><span class="dot" style="background:#facc15"></span> 20% Rawan</div>
                     <div class="legend-item"><span class="dot" style="background:#f87171"></span> 10% Bahaya</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Bottom Row: Table -->
            <div class="k-card mt-6" style="overflow-x: auto;">
               <div class="k-card-header">
                 <h3>Aktivitas Proyek Terbaru</h3>
                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
               </div>
               <table class="k-table">
                  <thead>
                    <tr>
                      <th>Nama Proyek</th>
                      <th>Lokasi</th>
                      <th>Tanggal</th>
                      <th>Status</th>
                      <th>Luas (Ha)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="flex-td"><div class="avatar-small">H</div> <span style="font-weight:600; color:#0f172a">Hutan Konservasi</span></td>
                      <td>Papua</td>
                      <td>22.08.2026</td>
                      <td><span class="k-badge success">Aktif</span></td>
                      <td style="font-weight:600; color:#0f172a">1,200</td>
                    </tr>
                    <tr>
                      <td class="flex-td"><div class="avatar-small">G</div> <span style="font-weight:600; color:#0f172a">Restorasi Gambut</span></td>
                      <td>Kalteng</td>
                      <td>24.08.2026</td>
                      <td><span class="k-badge warning">Proses</span></td>
                      <td style="font-weight:600; color:#0f172a">452</td>
                    </tr>
                    <tr>
                      <td class="flex-td"><div class="avatar-small">M</div> <span style="font-weight:600; color:#0f172a">Mangrove Center</span></td>
                      <td>Maluku</td>
                      <td>18.08.2026</td>
                      <td><span class="k-badge danger">Batal</span></td>
                      <td style="font-weight:600; color:#0f172a">850</td>
                    </tr>
                  </tbody>
               </table>
            </div>
          </div>
          
          <!-- DAFTAR PROYEK KARBON -->
          <div v-else-if="route.path === '/proyek-karbon/daftar'" class="view-proyek">
            <div class="table-container">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Nama Proyek</th>
                    <th>Lokasi</th>
                    <th>Status</th>
                    <th>Tanggal Dibuat</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Konservasi Hutan Mamberamo</td><td>Mamberamo Raya, Papua</td><td><span class="badge active">Aktif</span></td><td>12 Jan 2026</td></tr>
                  <tr><td>Restorasi Ekosistem Gambut</td><td>Katingan, Kalteng</td><td><span class="badge pending">Pending</span></td><td>05 Mar 2026</td></tr>
                  <tr><td>Pengelolaan Hutan Desa</td><td>Kapuas, Kalteng</td><td><span class="badge active">Aktif</span></td><td>20 Mar 2026</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- PENGAJUAN BARU -->
          <div v-else-if="route.path === '/proyek-karbon/pengajuan'" class="view-pengajuan">
            <div class="form-container">
              <h3>Form Pengajuan Proyek Karbon Baru</h3>
              <div class="form-group"><label>Nama Proyek</label><input type="text" placeholder="Masukkan nama proyek" /></div>
              <div class="form-group"><label>Lokasi</label><input type="text" placeholder="Masukkan lokasi" /></div>
              <div class="form-group"><label>Deskripsi</label><textarea placeholder="Deskripsi proyek"></textarea></div>
              <button class="btn-primary">Ajukan Proyek</button>
            </div>
          </div>

          <!-- PETA LAHAN -->
          <div v-else-if="route.path === '/lahan/peta'" class="view-peta">
            <div class="map-placeholder">
              <img src="/home/map.png" class="map-placeholder-img" alt="HHM Map" />
              <p>Peta Interaktif Hutan Harapan Mamberamo</p>
              <span>(Map Component Placeholder)</span>
            </div>
          </div>

          <!-- LEGALITAS LAHAN -->
          <div v-else-if="route.path === '/lahan/legalitas'" class="view-legalitas">
            <div class="doc-list">
              <div class="doc-card" v-for="i in 3" :key="i">
                <div class="doc-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A6B6B" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg></div>
                <div class="doc-info"><h4>Sertifikat Hak Guna Usaha {{i}}</h4><p>Diperbarui: 10 Apr 2026</p></div>
                <button class="btn-outline">Unduh PDF</button>
              </div>
            </div>
          </div>

          <!-- BLOG & MEDIA -->
          <div v-else-if="isActiveRoute('/blog-media')" class="view-blog">
            <!-- MODE: LIST -->
            <div v-if="blogViewMode === 'list'">
              <div class="blog-header-creative">
                <h3>{{ lang === 'id' ? 'Manajemen Artikel' : 'Article Management' }}</h3>
                <div class="header-actions-group">
                  <button 
                    class="btn-icon-circle" 
                    :class="{ 'is-active-red': isSelectionMode, 'is-mobile-oval': isMobile }"
                    @click="isSelectionMode ? exitSelectionMode() : enterSelectionMode()" 
                    :title="isSelectionMode ? 'Batal Hapus' : 'Mode Hapus'"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6"/></svg>
                  </button>
                  <button 
                    class="btn-primary" 
                    :class="{ 'is-disabled': isSelectionMode, 'btn-mobile-compact': isMobile }" 
                    @click="!isSelectionMode && createNewBlog()"
                  >
                    {{ lang === 'id' ? 'Tulis Artikel Baru' : 'Write New Article' }}
                  </button>
                </div>
              </div>
              <div class="blog-grid-real">
                <article 
                  v-for="post in blogPosts" 
                  :key="post.id" 
                  class="real-blog-card" 
                  :class="{ 'is-selected': selectedBlogIds.includes(post.id), 'selection-mode': isSelectionMode }"
                  @click="handleBlogClick(post)"
                >
                  <!-- Selection Indicator -->
                  <div class="selection-indicator" v-if="isSelectionMode">
                    <div class="check-dot">
                      <svg v-if="selectedBlogIds.includes(post.id)" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="4"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                  </div>
                  <div class="image-wrapper">
                    <div class="card-image" :style="{ backgroundImage: `url(${post.image})` }"></div>
                    <div class="status-badge-card" :class="post.status">
                      {{ post.status === 'published' ? (lang === 'id' ? 'PUBLISHED' : 'PUBLISHED') : (lang === 'id' ? 'DRAFT' : 'DRAFT') }}
                    </div>
                  </div>
                  <div class="card-content">
                    <div class="meta-info">
                      <span class="date">{{ post.date }}</span>
                    </div>
                    <h3 class="blog-title">{{ typeof post.title === 'string' ? post.title : (post.title[lang] || post.title.en) }}</h3>
                    <p class="blog-excerpt">{{ typeof post.excerpt === 'string' ? post.excerpt : (post.excerpt[lang] || post.excerpt.en) }}</p>
                    <span class="read-more">Lihat Detail <span class="arrow">&rarr;</span></span>
                  </div>
                </article>
              </div>

              <transition name="slide-up">
                <div class="fixed-bottom-bar selection-bar" v-if="isSelectionMode">
                  <div class="bar-container">
                    <div class="selection-info">
                      <span class="selection-text">Terpilih: <strong>{{ selectedBlogIds.length }}</strong> Artikel</span>
                    </div>
                    <div class="bar-actions">
                      <button class="btn-bar-outline" @click="exitSelectionMode">Batal</button>
                      <button class="btn-bar-danger" @click="deleteSelectedBlogs" :disabled="selectedBlogIds.length === 0">
                        Hapus Blog
                      </button>
                    </div>
                  </div>
                </div>
              </transition>
            </div>

            <!-- MODE: DETAIL -->
            <div v-else-if="blogViewMode === 'detail' && selectedBlog" class="blog-detail-view">
              <div class="detail-header-actions">
                <button class="btn-outline btn-sm" @click="goBackToList">&larr; Kembali</button>
                <button class="btn-primary btn-sm" @click="editBlog">Edit Artikel</button>
              </div>
              <div class="detail-content">
                <div class="detail-hero-wrapper">
                  <img :src="selectedBlog.image" class="detail-hero-img" alt="Blog cover" />
                  <div v-if="selectedBlog.status === 'draft'" class="draft-badge large">DRAFT</div>
                </div>
                <h1 class="detail-title">{{ typeof selectedBlog.title === 'string' ? selectedBlog.title : (selectedBlog.title[lang] || selectedBlog.title.en) }}</h1>
                <div class="detail-meta">
                  <span><strong>Penulis:</strong> {{ selectedBlog.author }}</span>
                  <span><strong>Tanggal:</strong> {{ selectedBlog.date }}</span>
                  <span v-if="selectedBlog.source"><strong>Sumber:</strong> {{ selectedBlog.source }}</span>
                </div>
                <div class="detail-body">
                  <div class="content-html" v-html="typeof selectedBlog.content === 'string' ? selectedBlog.content : (selectedBlog.content?.[lang] || selectedBlog.content?.en || (typeof selectedBlog.excerpt === 'string' ? selectedBlog.excerpt : (selectedBlog.excerpt[lang] || selectedBlog.excerpt.en)))"></div>
                </div>
              </div>
            </div>

            <!-- MODE: EDIT / NEW -->
            <div v-else-if="blogViewMode === 'edit'" class="blog-edit-view">
              <div class="edit-header-actions">
                <button class="btn-outline btn-sm" @click="cancelEdit">&larr; Kembali</button>
              </div>
              <div class="form-container full-width">
                <div class="edit-view-header">
                  <h3>{{ selectedBlog ? 'Edit Artikel' : 'Tulis Artikel Baru' }}</h3>
                  <button v-if="selectedBlog" class="btn-delete-trash" @click="deleteBlog" title="Hapus Artikel">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6"/></svg>
                  </button>
                </div>
                <div class="form-group">
                  <label>Judul Artikel</label>
                  <input type="text" v-model="editForm.title[lang]" placeholder="Masukkan judul" />
                </div>
                <div class="form-group">
                  <label>Deskripsi / Konten Singkat</label>
                  <textarea v-model="editForm.excerpt[lang]" placeholder="Tuliskan cuplikan artikel" style="min-height: 80px;"></textarea>
                </div>
                <div class="form-group">
                  <label>Konten Lengkap</label>
                  <textarea v-model="editForm.content[lang]" placeholder="Tuliskan isi artikel lengkap"></textarea>
                </div>
                <div class="form-row" style="display: flex; gap: 20px;">
                  <div class="form-group" style="flex: 1;">
                    <label>Tanggal Publikasi</label>
                    <input type="text" v-model="editForm.date" placeholder="Contoh: 12 Apr 2026" />
                  </div>
                  <div class="form-group" style="flex: 1;">
                    <label>Sumber (Opsional)</label>
                    <input type="text" v-model="editForm.source" placeholder="Contoh: Reuters" />
                  </div>
                </div>
                <div class="form-group">
                  <label>Gambar Banner</label>
                  <div class="drag-drop-zone">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                    <p><strong>Drag and drop</strong> gambar di sini atau <span class="browse-link">telusuri</span></p>
                    <p class="file-hint">Mendukung format JPG, PNG</p>
                    <input type="file" accept=".jpg,.jpeg,.png" class="file-input-hidden" />
                  </div>
                </div>

                <!-- Status Section -->
                <div class="form-group status-selection-group">
                  <label>{{ lang === 'id' ? 'Status Artikel' : 'Article Status' }}</label>
                  <div class="status-buttons-row">
                    <button 
                      class="btn-status-option" 
                      :class="{ 'active draft': editForm.status === 'draft' }"
                      @click="editForm.status = 'draft'"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                      {{ lang === 'id' ? 'Simpan Draft' : 'Save Draft' }}
                    </button>
                    <button 
                      class="btn-status-option" 
                      :class="{ 'active published': editForm.status === 'published' }"
                      @click="editForm.status = 'published'"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                      {{ lang === 'id' ? 'Publish' : 'Publish' }}
                    </button>
                  </div>
                </div>
                
              </div>

              <!-- EDIT BOTTOM BAR -->
              <div class="fixed-bottom-bar edit-bar">
                <div class="bar-container">
                  <button class="btn-bar-outline" @click="cancelEdit">{{ lang === 'id' ? 'Batal' : 'Cancel' }}</button>
                  <div class="bar-actions">
                    <button class="btn-bar-primary" @click="saveBlog(editForm.status)">{{ lang === 'id' ? 'Simpan Perubahan' : 'Save Changes' }}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- PESAN -->
          <div v-else-if="isActiveRoute('/pesan')" class="view-pesan">
            <div class="message-list">
              <div class="message-item unread">
                <div class="msg-avatar">K</div>
                <div class="msg-body"><h4>Kementerian LHK</h4><p>Pembaruan Regulasi Karbon 2026...</p></div>
                <div class="msg-time">10:00 AM</div>
              </div>
              <div class="message-item">
                <div class="msg-avatar">D</div>
                <div class="msg-body"><h4>Dinas Kehutanan Papua</h4><p>Jadwal Inspeksi Lahan Bulan Mei...</p></div>
                <div class="msg-time">Kemarin</div>
              </div>
            </div>
          </div>

          <!-- LAPORAN -->
          <div v-else-if="isActiveRoute('/laporan')" class="view-laporan">
            <div class="dashboard-grid">
              <div class="action-card">
                <div class="card-content"><h3>Laporan Tahunan 2025</h3><p class="subtitle">PDF • 2.4 MB</p></div>
                <button class="btn-outline">Unduh</button>
              </div>
              <div class="action-card">
                <div class="card-content"><h3>Laporan Q1 2026</h3><p class="subtitle">PDF • 1.1 MB</p></div>
                <button class="btn-outline">Unduh</button>
              </div>
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
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { blogPosts as staticPosts } from '../data/blogPosts'

const router = useRouter()
const route = useRoute()

const isCollapsed = ref(false)
const isMobile = ref(false)
const isMobileMenuOpen = ref(false)
const lang = ref(localStorage.getItem('dashboard_lang') || 'id')
const userName = ref('Admin')
const currentDate = ref('')
const openAccordion = ref('')
const isProfileMenuOpen = ref(false)
const isLangDropdownOpen = ref(false)

watch(lang, (newVal) => {
  localStorage.setItem('dashboard_lang', newVal)
})

// Blog Management State
const blogPosts = ref([])
const blogViewMode = ref('list') // 'list' | 'detail' | 'edit'
const selectedBlog = ref(null)
const isSelectionMode = ref(false)
const selectedBlogIds = ref([])
const editForm = ref({
  id: '',
  title: { en: '', id: '' },
  excerpt: { en: '', id: '' },
  content: { en: '', id: '' },
  author: '',
  date: '',
  source: '',
  image: '',
  status: 'published'
})

const menus = [
  { name: 'Dashboard', path: '/dashboard', icon: 'home', hasChevron: false },
  { 
    name: 'Proyek Karbon', path: '/proyek-karbon', icon: 'box', hasChevron: true,
    children: [
      { name: 'Daftar Proyek', path: '/proyek-karbon/daftar' },
      { name: 'Pengajuan Baru', path: '/proyek-karbon/pengajuan' }
    ]
  },
  { 
    name: 'Status Lahan', path: '/lahan', icon: 'map-pin', hasChevron: true,
    children: [
      { name: 'Peta Lahan', path: '/lahan/peta' },
      { name: 'Legalitas', path: '/lahan/legalitas' }
    ]
  },
  { name: 'Blog & Media', path: '/blog-media', icon: 'file-text', hasChevron: false },
  { name: 'Laporan', path: '/laporan', icon: 'calendar', hasChevron: false },
  ]

function toggleAccordion(name) {
  openAccordion.value = openAccordion.value === name ? '' : name
}

const currentMenuName = computed(() => {
  for (const m of menus) {
    if (m.children) {
      const child = m.children.find(c => route.path === c.path)
      if (child) return child.name
      if (route.path.startsWith(m.path)) return m.name
    } else {
      if (route.path === m.path || route.path.startsWith(m.path + '/')) return m.name
    }
  }
  return 'Dashboard'
})

function isActiveRoute(path) {
  if (path === '/dashboard') return route.path === '/dashboard'
  return route.path === path || route.path.startsWith(path + '/')
}

function closeMobileMenu() {
  if (isMobile.value) isMobileMenuOpen.value = false
}

function handleSidebarCollapse() {
  if (isMobile.value) {
    isMobileMenuOpen.value = false
  } else {
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

function loadBlogs() {
  const customBlogs = JSON.parse(localStorage.getItem('custom_blogs') || '[]')
  const deletedStaticIds = JSON.parse(localStorage.getItem('deleted_static_ids') || '[]')
  
  const customIds = customBlogs.map(b => b.id)
  const filteredStatic = staticPosts.filter(p => !customIds.includes(p.id) && !deletedStaticIds.includes(p.id))
  
  blogPosts.value = [...customBlogs, ...filteredStatic]
}

function createNewBlog() {
  selectedBlog.value = null
  editForm.value = {
    id: Date.now(),
    title: { en: '', id: '' },
    excerpt: { en: '', id: '' },
    content: { en: '', id: '' },
    author: userName.value,
    date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }),
    source: '',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070',
    status: ''
  }
  blogViewMode.value = 'edit'
}

function viewBlogDetail(post) {
  selectedBlog.value = post
  blogViewMode.value = 'detail'
}

function goBackToList() {
  blogViewMode.value = 'list'
  selectedBlog.value = null
  exitSelectionMode()
}

function handleBlogClick(post) {
  if (isSelectionMode.value) {
    toggleSelection(post.id)
  } else {
    viewBlogDetail(post)
  }
}

function toggleSelection(id) {
  const index = selectedBlogIds.value.indexOf(id)
  if (index === -1) {
    selectedBlogIds.value.push(id)
  } else {
    selectedBlogIds.value.splice(index, 1)
  }
}

function enterSelectionMode() {
  isSelectionMode.value = true
}

function exitSelectionMode() {
  isSelectionMode.value = false
  selectedBlogIds.value = []
}

function deleteSelectedBlogs() {
  if (selectedBlogIds.value.length === 0) return
  
  if (!confirm(`Apakah Anda yakin ingin menghapus ${selectedBlogIds.value.length} artikel ini?`)) return

  const customBlogs = JSON.parse(localStorage.getItem('custom_blogs') || '[]')
  const deletedStaticIds = JSON.parse(localStorage.getItem('deleted_static_ids') || '[]')
  
  selectedBlogIds.value.forEach(id => {
    const isStatic = staticPosts.some(p => p.id === id)
    if (isStatic) {
      if (!deletedStaticIds.includes(id)) {
        deletedStaticIds.push(id)
      }
    } else {
      const index = customBlogs.findIndex(b => b.id === id)
      if (index !== -1) {
        customBlogs.splice(index, 1)
      }
    }
  })
  
  localStorage.setItem('custom_blogs', JSON.stringify(customBlogs))
  localStorage.setItem('deleted_static_ids', JSON.stringify(deletedStaticIds))
  
  loadBlogs()
  exitSelectionMode()
}

function editBlog() {
  const blog = JSON.parse(JSON.stringify(selectedBlog.value))
  
  // Normalize legacy string structure to bilingual object structure if needed
  if (blog.title && typeof blog.title === 'string') {
    blog.title = { en: blog.title, id: blog.title }
  }
  if (blog.excerpt && typeof blog.excerpt === 'string') {
    blog.excerpt = { en: blog.excerpt, id: blog.excerpt }
  }
  if (blog.content && typeof blog.content === 'string') {
    blog.content = { en: blog.content, id: blog.content }
  }
  
  editForm.value = blog
  blogViewMode.value = 'edit'
}

function cancelEdit() {
  if (selectedBlog.value) {
    blogViewMode.value = 'detail'
  } else {
    blogViewMode.value = 'list'
  }
}

function deleteBlog() {
  if (!selectedBlog.value) return
  
  if (!confirm('Apakah Anda yakin ingin menghapus artikel ini?')) return

  const isStatic = staticPosts.some(p => p.id === selectedBlog.value.id)
  
  if (isStatic) {
    const deletedStaticIds = JSON.parse(localStorage.getItem('deleted_static_ids') || '[]')
    if (!deletedStaticIds.includes(selectedBlog.value.id)) {
      deletedStaticIds.push(selectedBlog.value.id)
      localStorage.setItem('deleted_static_ids', JSON.stringify(deletedStaticIds))
    }
  } else {
    const customBlogs = JSON.parse(localStorage.getItem('custom_blogs') || '[]')
    const filtered = customBlogs.filter(b => b.id !== selectedBlog.value.id)
    localStorage.setItem('custom_blogs', JSON.stringify(filtered))
  }
  
  loadBlogs()
  blogViewMode.value = 'list'
  selectedBlog.value = null
}

function saveBlog(status) {
  editForm.value.status = status // 'published' or 'draft'
  const customBlogs = JSON.parse(localStorage.getItem('custom_blogs') || '[]')
  
  const index = customBlogs.findIndex(b => b.id === editForm.value.id)
  if (index !== -1) {
    customBlogs[index] = editForm.value
  } else {
    customBlogs.push(editForm.value)
  }
  
  localStorage.setItem('custom_blogs', JSON.stringify(customBlogs))
  loadBlogs()
  
  selectedBlog.value = editForm.value
  blogViewMode.value = 'detail'
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
  loadBlogs()

  const savedLang = localStorage.getItem('dashboard_lang')
  if (savedLang) lang.value = savedLang
  
  const activeMenu = menus.find(m => route.path.startsWith(m.path))
  if (activeMenu && activeMenu.children) {
    openAccordion.value = activeMenu.name
  }

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
  transition: transform 0.3s ease;
}

.chevron-right.rotated {
  transform: rotate(90deg);
}

.nav-children {
  background: #0B2222; /* Slightly darker inner background */
  display: flex;
  flex-direction: column;
}

.nav-child-item {
  padding: 10px 24px 10px 60px;
  color: #cbd5e1;
  text-decoration: none;
  font-size: 0.8rem;
  transition: all 0.2s;
  border-left: 3px solid transparent;
}

.nav-child-item:hover {
  background: rgba(255,255,255,0.05);
  color: #fff;
}

.nav-child-item.active {
  color: #fff;
  font-weight: 500;
  border-left-color: #4FD1C5; /* Distinct color for child active */
  background: rgba(255,255,255,0.02);
}

.accordion-toggle {
  user-select: none;
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
  height: 64px;
  background: white;
  border-bottom: 1px solid #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  flex-shrink: 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0,0,0,0.02);
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

/* DASHBOARD CONTENT STYLES */
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.action-card .big-number {
  font-size: 2rem;
  font-weight: 700;
  color: #0F2D2D;
  margin-top: 8px;
}

.icon-wrapper {
  background: #F4FAFA;
  padding: 16px;
  border-radius: 50%;
}

.table-container {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 20px;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th, .data-table td {
  padding: 16px 24px;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
}

.data-table th {
  background: #f8fafc;
  font-weight: 600;
  color: #64748b;
  font-size: 0.85rem;
}

.badge {
  padding: 4px 12px;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
}
.badge.active { background: #dcfce7; color: #166534; }
.badge.pending { background: #fef9c3; color: #854d0e; }

.form-container {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 32px;
  max-width: 600px;
  margin-top: 20px;
}

.form-container.full-width {
  max-width: 100%;
}

.edit-view-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.header-actions-group {
  display: flex;
  align-items: center;
  gap: 12px;
}

.btn-icon-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #e2e8f0;
  background: white;
  color: #64748b;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-icon-circle:hover {
  background: #f8fafc;
  color: #1A6B6B;
  border-color: #1A6B6B;
}

.btn-icon-circle.is-active-red {
  background: #ef4444;
  color: white !important;
  border-color: #ef4444;
}

.btn-icon-circle.is-mobile-oval {
  border-radius: 20px;
  width: 44px;
}

.btn-mobile-compact {
  padding: 6px 12px !important;
  font-size: 0.75rem !important;
}

.btn-primary.is-disabled {
  background: #e2e8f0;
  border-color: #e2e8f0;
  color: #94a3b8;
  cursor: not-allowed;
  pointer-events: none;
}

.btn-outline-red {
  background: transparent;
  color: #ef4444;
  border: 1px solid #ef4444;
  padding: 8px 20px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
}

/* FIXED BOTTOM BAR */
.fixed-bottom-bar {
  position: fixed;
  bottom: 0;
  left: 250px; /* Sidebar width */
  right: 0;
  background: white;
  padding: 16px 48px;
  box-shadow: 0 -10px 30px rgba(0,0,0,0.1);
  z-index: 1100;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-top: 1px solid #f1f5f9;
}

.selection-text {
  color: #64748b;
  font-size: 0.95rem;
}

.selection-text strong {
  color: #0F2D2D;
}

.sidebar.collapsed ~ .main-content .fixed-bottom-bar {
  left: 80px;
}

@media (max-width: 1024px) {
  .fixed-bottom-bar {
    left: 0;
    padding: 16px 24px;
  }
}

@media (max-width: 640px) {
  .fixed-bottom-bar {
    padding: 12px 16px;
  }
  
  .bar-container {
    gap: 8px;
    justify-content: center;
  }
  
  .btn-bar-outline, .btn-bar-primary, .btn-bar-danger {
    padding: 8px 12px;
    font-size: 0.75rem;
    border-radius: 6px;
  }
  
  .selection-text {
    font-size: 0.8rem;
    white-space: nowrap;
  }
}

.bar-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.bar-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.btn-bar-outline {
  padding: 10px 24px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  background: white;
  color: #64748b;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-bar-outline:hover {
  background: #f8fafc;
  border-color: #cbd5e1;
}

.btn-bar-primary {
  padding: 10px 24px;
  border-radius: 8px;
  background: #1A6B6B;
  color: white;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-bar-primary:hover {
  background: #0F2D2D;
  transform: translateY(-1px);
}

.btn-bar-danger {
  padding: 10px 24px;
  border-radius: 8px;
  background: #0F2D2D; /* Primary website color */
  color: white;
  border: none;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
}

.btn-bar-danger:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.count-badge {
  background: white;
  color: #ef4444;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  border: 2px solid #ef4444;
}

/* SELECTION UI */
.real-blog-card.selection-mode:hover {
  transform: translateY(-4px);
}

.real-blog-card.is-selected {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.selection-indicator {
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 100;
}

.check-dot {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid white;
  background: rgba(0,0,0,0.2);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.is-selected .check-dot {
  background: #ef4444;
  border-color: #ef4444;
}

/* TRANSITIONS */
.slide-up-enter-active, .slide-up-leave-active {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-up-enter-from, .slide-up-leave-to {
  transform: translateY(100%);
}

.btn-delete-trash {
  background: #fee2e2;
  color: #ef4444;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-delete-trash:hover {
  background: #fecaca;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .btn-delete-trash {
    width: 36px;
    height: 36px;
  }
}

.form-container h3 { margin-bottom: 0; color: #0F2D2D; }

.form-group { margin-bottom: 20px; }
.form-group label { display: block; margin-bottom: 8px; font-weight: 500; font-size: 0.9rem; }
.form-group input, .form-group textarea {
  width: 100%; padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-family: inherit;
}
.form-group textarea { min-height: 120px; }

/* DRAG AND DROP ZONE */
.drag-drop-zone {
  border: 2px dashed #cbd5e1;
  border-radius: 8px;
  padding: 40px 20px;
  text-align: center;
  background: #f8fafc;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
}
.drag-drop-zone:hover {
  border-color: #1A6B6B;
  background: #f0fdfa;
}
.drag-drop-zone svg {
  margin-bottom: 12px;
}
.drag-drop-zone p {
  color: #475569;
  font-size: 0.95rem;
  margin-bottom: 4px;
}
.drag-drop-zone .browse-link {
  color: #1A6B6B;
  font-weight: 600;
}
.drag-drop-zone .file-hint {
  font-size: 0.8rem;
  color: #94a3b8;
}
.file-input-hidden {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  opacity: 0;
  cursor: pointer;
}

.btn-primary {
  background: #1A6B6B; color: white; border: none; padding: 12px 24px; border-radius: 6px; font-weight: 600; cursor: pointer; transition: 0.2s;
}
.btn-primary:hover { background: #0F2D2D; }

.btn-outline {
  background: transparent; color: #1A6B6B; border: 1px solid #1A6B6B; padding: 8px 16px; border-radius: 6px; font-weight: 600; cursor: pointer; transition: 0.2s;
}
.btn-outline:hover { background: #F4FAFA; }

/* NEW MOBILE HEADER STYLES */
.mobile-controls-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.k-lang-selector {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 12px;
  background: #f8fdfd;
  border: 1px solid rgba(26, 107, 107, 0.15);
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.k-lang-selector:hover {
  background: #f0fafa;
  border-color: rgba(26, 107, 107, 0.3);
}

.flag-wrapper {
  width: 28px;
  height: 18px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.flag-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.k-hamburger {
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  color: #1A6B6B;
}

.mobile-logo-left .nav-logo img {
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.05));
}

.view-peta .map-placeholder {
  height: auto; 
  min-height: 400px;
  background: #e2e8f0; 
  border-radius: 12px; 
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
  color: #64748b; 
  margin-top: 20px;
  padding: 20px;
  overflow: hidden;
}

.map-placeholder-img {
  width: 100%;
  height: auto;
  max-height: 350px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.doc-list { display: flex; flex-direction: column; gap: 16px; margin-top: 20px; }
.doc-card {
  background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; display: flex; align-items: center; gap: 20px;
}
.doc-info { flex: 1; }
.doc-info h4 { margin-bottom: 4px; color: #0F2D2D; }
.doc-info p { font-size: 0.85rem; color: #64748b; }

/* ================= DASHBOARD BLOG CARD DESIGN ================= */
.blog-header-creative { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }

.blog-grid-real {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.real-blog-card {
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.04);
  border: 1px solid rgba(43,144,144,0.08);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
}

.real-blog-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(26,107,107,0.12);
  border-color: rgba(43,144,144,0.2);
}

.real-blog-card .image-wrapper {
  overflow: hidden;
  height: 160px;
  width: 100%;
  position: relative;
}

.real-blog-card .card-image {
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;
}

.real-blog-card:hover .card-image {
  transform: scale(1.05); 
}

.draft-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: #fef9c3;
  color: #854d0e;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  z-index: 10;
}

.draft-badge.large {
  font-size: 0.9rem;
  padding: 6px 16px;
}

.real-blog-card .card-content {
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background: white;
  position: relative;
  z-index: 2;
}

.real-blog-card .meta-info {
  font-size: 0.75rem;
  color: #8FA8A8;
  margin-bottom: 12px;
  font-weight: 500;
}

.real-blog-card .blog-title {
  font-size: 1rem;
  color: #1A6B6B;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 12px;
  transition: color 0.3s;
}

.real-blog-card .blog-excerpt {
  color: #5A7070;
  font-size: 0.85rem;
  line-height: 1.6;
  margin-bottom: 24px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.real-blog-card:hover .blog-title {
  color: #2B9090;
}

.real-blog-card .read-more {
  margin-top: auto;
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #1A6B6B;
  font-weight: 600;
  font-size: 0.85rem;
}

/* ================= DASHBOARD BLOG DETAIL ================= */
.blog-detail-view {
  background: white;
  border-radius: 12px;
  padding: 32px;
  border: 1px solid #e2e8f0;
}

.edit-header-actions {
  display: flex;
  margin-bottom: 24px;
}

.detail-header-actions {
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  gap: 12px;
}

.btn-sm {
  padding: 6px 12px !important;
  font-size: 0.85rem !important;
}

/* FORM ACTIONS STACK */
.form-actions-stack {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
}

.primary-row {
  display: flex;
  gap: 12px;
  justify-content: center;
  width: 100%;
}

.btn-text-center {
  background: transparent;
  border: none;
  color: #64748b;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.9rem;
  padding: 8px;
}


.detail-hero-wrapper {
  position: relative;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 10px;
}

.detail-hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.detail-title {
  font-size: 1.8rem;
  color: #0F2D2D;
  margin-bottom: 16px;
  font-weight: 700;
}

.detail-meta {
  display: flex;
  gap: 24px;
  color: #64748b;
  font-size: 0.8rem;
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e2e8f0;
}

.detail-body .content-html p {
  color: #334155;
  line-height: 1.8;
  font-size: 1.05rem;
  margin-bottom: 1.2rem;
}
.message-list { background: white; border: 1px solid #e2e8f0; border-radius: 8px; margin-top: 20px;}
.message-item { display: flex; align-items: center; gap: 16px; padding: 20px; border-bottom: 1px solid #e2e8f0; }
.message-item.unread { background: #f8fafc; }
.msg-avatar { width: 40px; height: 40px; background: #1A6B6B; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; }
.msg-body { flex: 1; }
.msg-body h4 { color: #0F2D2D; margin-bottom: 4px; }
.msg-body p { font-size: 0.9rem; color: #64748b; }
.msg-time { font-size: 0.8rem; color: #94a3b8; }
/* K-DASHBOARD STYLES (Matching Image Reference) */
.k-grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.k-grid-charts { display: grid; grid-template-columns: 2fr 1fr; gap: 24px; }
.mt-6 { margin-top: 24px; }

.k-card { 
  background: #ffffff; 
  border-radius: 12px; 
  padding: 24px; 
  border: 1px solid #f1f5f9;
  box-shadow: 0 4px 24px rgba(15, 23, 42, 0.03); 
}

/* STAT CARD */
.k-stat-card { display: flex; flex-direction: column; gap: 16px; }
.k-stat-header { display: flex; justify-content: space-between; align-items: center; }
.k-stat-title { font-size: 0.9rem; font-weight: 600; color: #334155; }
.k-stat-icon { 
  border: 1px solid #e2e8f0; 
  border-radius: 8px; 
  width: 36px; height: 36px; 
  display: flex; align-items: center; justify-content: center; 
  color: #0F2D2D; 
}
.k-stat-value { font-size: 2.2rem; font-weight: 700; color: #0f172a; line-height: 1; }
.k-stat-trend { display: flex; align-items: center; gap: 4px; font-size: 0.8rem; font-weight: 600; }
.k-stat-trend.positive { color: #22c55e; }
.k-stat-trend.negative { color: #ef4444; }
.trend-text { color: #94a3b8; font-weight: 400; margin-left: 4px; }

/* CHARTS HEADER */
.k-card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
.k-card-header h3 { font-size: 1.05rem; font-weight: 600; color: #0f172a; }
.k-dropdown-text { font-size: 0.85rem; color: #64748b; display: flex; align-items: center; gap: 4px; font-weight: 500; cursor: pointer; }

/* DONUT CHART */
.k-donut-chart-container { display: flex; flex-direction: column; align-items: center; gap: 30px; margin-top: 10px; }
.k-donut-chart {
  width: 140px; height: 140px; border-radius: 50%;
  background: conic-gradient(#4ade80 0% 70%, #facc15 70% 90%, #f87171 90% 100%);
  display: flex; align-items: center; justify-content: center;
}
.k-donut-chart::before {
  content: ''; width: 90px; height: 90px; border-radius: 50%; background: #ffffff;
}
.k-donut-legend { display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; width: 100%;}
.legend-item { display: flex; align-items: center; gap: 8px; font-size: 0.8rem; font-weight: 600; color: #64748b; }

/* TABLE */
.k-table { width: 100%; border-collapse: collapse; min-width: 600px; }
.k-table th { text-align: left; padding: 12px 16px; font-size: 0.8rem; color: #94a3b8; font-weight: 500; border-bottom: 1px solid #f1f5f9; }
.k-table td { padding: 16px; font-size: 0.85rem; color: #64748b; border-bottom: 1px solid #f1f5f9; font-weight: 500; }
.flex-td { display: flex; align-items: center; gap: 16px; }
.avatar-small { width: 36px; height: 36px; border-radius: 50%; background: #f1f5f9; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.85rem; color: #0F2D2D; }
.k-badge { padding: 6px 12px; border-radius: 6px; font-size: 0.75rem; font-weight: 600; display: inline-block; }
.k-badge.success { background: #dcfce7; color: #166534; }
.k-badge.warning { background: #fef9c3; color: #854d0e; }
.k-badge.danger { background: #fee2e2; color: #991b1b; }

/* BAR CHART overrides for new layout */
.css-bar-chart {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 220px;
  width: 100%;
}
.bar-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  height: 100%;
  justify-content: flex-end;
  flex: 1;
}
.bar {
  width: 24px;
  background: #3b82f6; /* Blue matching the reference */
  border-radius: 4px 4px 0 0;
  transition: height 1s ease-out;
}
.bar-col:hover .bar {
  background: #1d4ed8;
}
.bar-label {
  font-size: 0.7rem;
  font-weight: 600;
  color: #94a3b8;
  text-transform: uppercase;
}

@media (max-width: 1024px) {
  .k-grid-4 { grid-template-columns: repeat(2, 1fr); }
  .k-grid-charts { grid-template-columns: 1fr; }
}
@media (max-width: 640px) {
  .k-grid-4 { grid-template-columns: 1fr; }
  .form-actions {
    gap: 8px !important;
    justify-content: center !important;
  }
  .form-actions button {
    padding: 8px 12px !important;
    font-size: 0.8rem !important;
    white-space: nowrap;
  }
}
/* STATUS BADGES ON CARDS */
.status-badge-card {
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  z-index: 10;
  background: #0F2D2D;
  color: white;
  border: 2px solid #0F2D2D;
  box-shadow: 0 4px 12px rgba(15, 45, 45, 0.2);
  text-transform: uppercase;
}

/* STATUS SECTION IN EDITOR */
.status-buttons-row {
  display: flex;
  gap: 12px;
  margin-top: 8px;
}

.btn-status-option {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  background: white;
  color: #64748b;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-status-option:hover {
  background: #f8fafc;
  border-color: #cbd5e1;
}

.btn-status-option.active.draft {
  border-color: #f59e0b;
  background: #fffbeb;
  color: #d97706;
}

.btn-status-option.active.published {
  border-color: #10b981;
  background: #ecfdf5;
  color: #059669;
}

/* HEADER IMPROVEMENTS */
.profile-menu-container {
  position: relative;
}

.k-profile-toggle {
  background: #f8fdfd;
  border: 1px solid rgba(26, 107, 107, 0.15);
  padding: 2px 6px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.k-profile-toggle svg {
  width: 16px;
  height: 16px;
}

.mini-avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid rgba(26, 107, 107, 0.2);
}

.mini-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-info-desktop {
  display: flex;
  flex-direction: column;
  text-align: left;
  line-height: 1.2;
}

.p-name { font-weight: 700; color: #0F2D2D; font-size: 0.85rem; }
.p-email { font-weight: 400; color: #64748b; font-size: 0.75rem; }

.unified-dropdown {
  position: absolute;
  top: 50px;
  right: 0;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
  border: 1px solid #f1f5f9;
  padding: 8px;
  width: 200px;
  z-index: 2000;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.dropdown-profile-header {
  padding: 8px 12px;
  border-bottom: 1px solid #f1f5f9;
  margin-bottom: 4px;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  border-radius: 10px;
  color: #475569;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;
}

.dropdown-item:hover {
  background: #f8fafc;
  color: #1A6B6B;
}

.dropdown-item svg {
  color: #94a3b8;
}

.dropdown-item:hover svg {
  color: #1A6B6B;
}

.divider {
  height: 1px;
  background: #f1f5f9;
  margin: 8px 0;
}

.dropdown-item.logout {
  color: #ef4444;
}

.dropdown-item.logout:hover {
  background: #fee2e2;
  color: #ef4444;
}

/* LANGUAGE DROPDOWN */
.k-lang-container {
  position: relative;
}

.k-lang-dropdown {
  position: absolute;
  top: 50px;
  right: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
  border: 1px solid #f1f5f9;
  padding: 8px;
  width: 180px;
  z-index: 2000;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.lang-option {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.85rem;
  color: #475569;
  transition: all 0.2s;
}

.lang-option:hover {
  background: #f8fafc;
  color: #1A6B6B;
}

.lang-option.active {
  background: #f0fafa;
  color: #1A6B6B;
  font-weight: 600;
}

.lang-option img {
  width: 24px;
  height: 16px;
  border-radius: 2px;
  object-fit: cover;
}

/* TRANSITIONS */
.slide-down-enter-active, .slide-down-leave-active {
  transition: all 0.3s ease-out;
}
.slide-down-enter-from, .slide-down-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

@media (max-width: 1024px) {
  .top-header {
     position: sticky;
     top: 0;
     z-index: 1000;
  }
}
</style>

/* ================= MOBILE REFINEMENTS ================= */
@media (max-width: 1024px) {
  .table-container {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    width: 100%;
    border-radius: 8px;
  }
  
  .data-table {
    min-width: 600px; /* Force visibility of all columns via scroll */
  }

  /* Blog Detail Refinements */
  .blog-detail-view {
    padding: 20px 15px;
  }

  .detail-hero-wrapper {
    height: auto !important;
    aspect-ratio: 1 / 1 !important;
    margin-bottom: 5px !important;
    border-radius: 16px;
  }

  .detail-hero-img {
    height: 100% !important;
  }

  .detail-title {
    font-size: 1.5rem !important;
    text-align: center;
    margin-bottom: 12px;
    line-height: 1.3;
  }

  .detail-meta {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 8px;
    font-size: 0.8rem !important;
    padding-bottom: 16px;
    margin-bottom: 24px;
  }

  .detail-meta span {
    display: block;
  }
}
