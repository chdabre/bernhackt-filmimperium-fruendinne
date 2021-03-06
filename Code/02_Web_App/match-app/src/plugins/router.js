import Vue from 'vue'
import Router from 'vue-router'
import * as firebase from 'firebase/app'

import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import ContextWizard from '../views/ContextWizard.vue'
import MovieDetail from '../views/MovieDetail.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/dashboard'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: MovieDetail,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/wizard',
      name: 'contextwizard',
      component: ContextWizard,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = firebase.auth().currentUser

  if (requiresAuth && !currentUser) {
    next('/login')
  } else if (to.name === 'login' && currentUser) {
    next('/dashboard')
  } if (requiresAuth && currentUser) {
    next()
  } else {
    next()
  }
})

export default router
