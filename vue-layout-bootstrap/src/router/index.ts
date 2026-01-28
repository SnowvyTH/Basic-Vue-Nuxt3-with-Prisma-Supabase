import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/Home.vue'),
    meta: {
      title: 'Home - Vue Layout Bootstrap'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../pages/About.vue'),
    meta: {
      title: 'About - Vue Layout Bootstrap'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../pages/Contact.vue'),
    meta: {
      title: 'Contact - Vue Layout Bootstrap'
    } 
  }
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, _, next) => {
  document.title = to.meta.title as string
  next()
})

export default router
