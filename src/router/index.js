import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/test01',
    name: 'Test01',
    component: () => import('../views/testCode/test01.vue')
  },
  {
    path: '/test02',
    name: 'Test02',
    component: () => import('../views/testCode/test02.vue')
  },
  {
    path: '/test03',
    name: 'Test03',
    component: () => import('../views/testCode/test03.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
