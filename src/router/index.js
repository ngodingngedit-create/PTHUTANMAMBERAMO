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
const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/projects', name: 'Projects', component: ProjectsView },
  { path: '/methodology', name: 'Methodology', component: MethodologyView },
  { path: '/partnership', name: 'Partnership', component: PartnershipView },
  { path: '/contact', name: 'Contact', component: ContactView },
  { path: '/blog', name: 'Blog', component: BlogView },
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
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
