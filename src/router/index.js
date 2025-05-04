import { createRouter, createWebHistory } from 'vue-router'
import BlogView from '@/views/BlogView.vue'
import BlogDetailView from '@/views/BlogDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/blog',
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/blog/:slug', // dynamic route
      name: 'blog-detail',
      component: BlogDetailView,
      props: true, // passes `slug` as a prop
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
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // Use browser's saved position (e.g., back/forward)
      return savedPosition
    } else {
      // Scroll to top
      return { top: 0 }
    }
  },
})

export default router
