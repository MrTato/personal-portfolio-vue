import { createRouter, createWebHistory } from 'vue-router'
import BlogView from '@/views/BlogView.vue'
import BlogDetailView from '@/views/BlogDetailView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import MaintenanceView from '@/views/MaintenanceView.vue'

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
      component: MaintenanceView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: MaintenanceView,
    },
    {
      path: '/about',
      name: 'about',
      component: MaintenanceView,
    },
    {
      path: '/services',
      name: 'services',
      component: MaintenanceView,
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
