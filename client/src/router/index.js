import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Quiz from '../views/Quiz'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: Quiz
  },
]
const router = new Router({
  routes
})
export default router
