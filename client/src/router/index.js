import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Wonder from '../views/Wonder'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/wonder',
    name: 'wonder',
    component: Wonder
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]
const router = new Router({
  routes
})
export default router
