import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/LoginApp.vue')
  },
  {
    path: '/Register',
    name: 'Register',
    component: () => import('../views/RegisterApp.vue')
  },
  {
    path: '/Productos',
    name: 'Productos',
    component: () => import('../views/ProductosView.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
