import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('./views/dashboard.vue')
    },
    {
      path: '/withdraw',
      name: 'withdraw',
      component: () => import('./views/withdraw.vue')
    }
  ]
})
