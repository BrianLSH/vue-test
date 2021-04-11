import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login'
import Slots from '../views/slot/Slots.vue'
import Ca from '../views/Ca'
import getPic from '../views/GetPic'
import SlotOne from '../views/slot/SlotOne'
import Book from '../views/Book'
import HomePage from '../views/home/homepage'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/slots',
    name: 'Slots',
    component: Slots
  }, {
    path: '/ca',
    name: 'Ca',
    component: Ca
  }, {
    path: '/get-pic',
    name: 'getPic',
    component: getPic
  }, {
    path: '/slotone',
    name: 'SlotOne',
    component: SlotOne
  }, {
    path: '/book',
    name: 'book',
    component: Book
  },
  {
    path: '/homepage',
    name: HomePage,
    component: HomePage
  }
]

const router = new VueRouter({
  routes
})

export default router
