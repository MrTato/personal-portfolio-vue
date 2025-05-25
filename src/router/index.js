import { createRouter, createWebHistory } from 'vue-router'
import BlogView from '@/views/BlogView.vue'
import BlogDetailView from '@/views/BlogDetailView.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/blog/:slug',
      name: 'blog-detail',
      component: BlogDetailView,
      props: true,
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/MaintenanceView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/MaintenanceView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/MaintenanceView.vue'),
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('@/views/MaintenanceView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFoundView.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
