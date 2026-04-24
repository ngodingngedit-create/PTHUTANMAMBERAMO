import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import MethodologyView from '../views/MethodologyView.vue'
import PartnershipView from '../views/PartnershipView.vue'
import ContactView from '../views/ContactView.vue'
import BlogView from '../views/BlogView.vue'
import CareerView from '../views/CareerView.vue'
import InvestorView from '../views/InvestorView.vue'
import LeadershipView from '../views/LeadershipView.vue'
import SubsidiariesView from '../views/SubsidiariesView.vue'
import MilestonesView from '../views/MilestonesView.vue'
import VisionView from '../views/VisionView.vue'
import MissionView from '../views/MissionView.vue'
import ManifestoView from '../views/ManifestoView.vue'
import LifeAtView from '../views/LifeAtView.vue'
import ValuesView from '../views/ValuesView.vue'
import OpeningsView from '../views/OpeningsView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import ProfileView from '../views/ProfileView.vue'
import JobsView from '../views/JobsView.vue'
import JobDetailView from '../views/JobDetailView.vue'
import ApplyJobView from '../views/ApplyJobView.vue'
import ApplySuccessView from '../views/ApplySuccessView.vue'
import BlogDetailView from '../views/BlogDetailView.vue'
import AllTeamsView from '../views/AllTeamsView.vue'
import OurApproachView from '../views/OurApproachView.vue'
import EnvironmentView from '../views/EnvironmentView.vue'
import ForestryView from '../views/ForestryView.vue'
import WhoWeAreView from '../views/WhoWeAreView.vue'
import CommunityView from '../views/CommunityView.vue'
import DashboardView from '../views/DashboardView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/who-we-are', name: 'WhoWeAre', component: WhoWeAreView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/projects', name: 'Projects', component: ProjectsView },
  { path: '/methodology', name: 'Methodology', component: MethodologyView },
  { path: '/partnership', name: 'Partnership', component: PartnershipView },
  { path: '/contact', name: 'Contact', component: ContactView },
  { path: '/blog', name: 'Blog', component: BlogView },
  { path: '/blog/:id', name: 'BlogDetail', component: BlogDetailView },
  { path: '/career', name: 'Career', component: CareerView },
  { path: '/investor', name: 'Investor', component: InvestorView },
  { path: '/leadership', name: 'Leadership', component: LeadershipView },
  { path: '/subsidiaries', name: 'Subsidiaries', component: SubsidiariesView },
  { path: '/milestones', name: 'Milestones', component: MilestonesView },
  { path: '/vision', name: 'Vision', component: VisionView },
  { path: '/mission', name: 'Mission', component: MissionView },
  { path: '/manifesto', name: 'Manifesto', component: ManifestoView },
  { path: '/life-at', name: 'LifeAt', component: LifeAtView },
  { path: '/values', name: 'Values', component: ValuesView },
  { path: '/openings', name: 'Openings', component: OpeningsView },
  { path: '/login', name: 'Login', component: LoginView, meta: { hideNavigation: true } },
  { path: '/signup', name: 'Signup', component: SignupView, meta: { hideNavigation: true } },
  { path: '/profile', name: 'Profile', component: ProfileView },
  { path: '/jobs', name: 'Jobs', component: JobsView },
  { path: '/job-detail', name: 'JobDetail', component: JobDetailView },
  { path: '/apply-job', name: 'ApplyJob', component: ApplyJobView },
  { path: '/apply-success', name: 'ApplySuccess', component: ApplySuccessView },
  { path: '/teams', name: 'AllTeams', component: AllTeamsView },
  { path: '/our-approach', name: 'OurApproach', component: OurApproachView },
  { path: '/environment', name: 'Environment', component: EnvironmentView },
  { path: '/forestry', name: 'Forestry', component: ForestryView },
  { path: '/community', name: 'Community', component: CommunityView },
  
  // Dashboard routes
  { path: '/dashboard', name: 'Dashboard', component: DashboardView, meta: { hideNavigation: true } },
  { path: '/proyek-karbon', name: 'Dashboard_Proyek', component: DashboardView, meta: { hideNavigation: true } },
  { path: '/proyek-karbon/daftar', name: 'Dashboard_Proyek_Daftar', component: DashboardView, meta: { hideNavigation: true } },
  { path: '/proyek-karbon/pengajuan', name: 'Dashboard_Proyek_Pengajuan', component: DashboardView, meta: { hideNavigation: true } },
  { path: '/lahan', name: 'Dashboard_Lahan', component: DashboardView, meta: { hideNavigation: true } },
  { path: '/lahan/peta', name: 'Dashboard_Lahan_Peta', component: DashboardView, meta: { hideNavigation: true } },
  { path: '/lahan/legalitas', name: 'Dashboard_Lahan_Legalitas', component: DashboardView, meta: { hideNavigation: true } },
  { path: '/blog-media', name: 'Dashboard_BlogMedia', component: DashboardView, meta: { hideNavigation: true } },
  { path: '/pesan', name: 'Dashboard_Pesan', component: DashboardView, meta: { hideNavigation: true } },
  { path: '/laporan', name: 'Dashboard_Laporan', component: DashboardView, meta: { hideNavigation: true } },
  { path: '/akun-saya', name: 'Dashboard_Akun', component: DashboardView, meta: { hideNavigation: true } }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
