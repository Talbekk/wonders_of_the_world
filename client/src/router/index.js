import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
<<<<<<< HEAD
import Wonder from '../views/Wonder'
import MoreDetail from '../views/MoreDetail'
=======
import Quiz from '../views/Quiz'
>>>>>>> develop

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
<<<<<<< HEAD
    path: '/wonder',
    name: 'wonder',
    component: Wonder
  },
  {
    path: '/details',
    name: 'details',
    component: MoreDetail
}
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
=======
    path: '/quiz',
    name: 'quiz',
    component: Quiz
  },
>>>>>>> develop
]
const router = new Router({
  routes
})
export default router
