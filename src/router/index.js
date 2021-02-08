import Vue from 'vue'
import VueRouter from 'vue-router'

// Landing Page
import Landing from '../views/landing/Landing.vue'
// Auth
import Auth from './auth'
// Main
import Main from './main'
// Admin
import Admin from '../views/admin/AdminPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: { requiresAdmin: true }
  },
  Auth,
  Main
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem('token')) {
      next({ path: '/auth/login' })
    } else if (localStorage.getItem('token') && localStorage.getItem('id') === `${process.env.VUE_APP_ADMIN}`) {
      next({ path: '/admin' })
    } else if (localStorage.getItem('token') && localStorage.getItem('id') !== `${process.env.VUE_APP_ADMIN}`) {
      next()
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (localStorage.getItem('token') && localStorage.getItem('id') !== `${process.env.VUE_APP_ADMIN}`) {
      next({ path: '/main/dashboard' })
    } else if (localStorage.getItem('token') && localStorage.getItem('id') === `${process.env.VUE_APP_ADMIN}`) {
      next({ path: '/admin' })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresAdmin)) {
    if (!localStorage.getItem('token')) {
      next({ path: '/auth/login' })
    } if (localStorage.getItem('token') && localStorage.getItem('id') !== `${process.env.VUE_APP_ADMIN}`) {
      next({ path: '/main/dashboard' })
    } else if (localStorage.getItem('token') && localStorage.getItem('id') === `${process.env.VUE_APP_ADMIN}`) {
      next()
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
