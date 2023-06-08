import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CheckView from '../views/CheckView.vue'
import DayView from '../views/DayView.vue'
import WordView from '../views/WordView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/check',
    name: 'check',
    component: CheckView
  },
  {
    path: '/day',
    name: 'day',
    component: DayView
  },
  {
    path: '/word',
    name: 'word',
    component: WordView
  },
 
]

const router = new VueRouter({
  routes
})

export default router
