import { createRouter, createWebHistory } from 'vue-router'
import BlogView from '@/views/BlogView.vue'
import BlogDetail from '@/components/Blog/BlogDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/blog/:slug', // dynamic route
      name: 'blog-detail',
      component: BlogDetail,
      props: true, // passes `slug` as a prop
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
})

export default router
