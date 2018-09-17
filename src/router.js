import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/professional',
      name: 'home',
      component: Home
    },
    {
      path: '/portfolio ',
      name: 'home',
      component: Home
    },
    {
      path: '/experience',
      name: 'home',
      component: Home
    },
    {
      path: '/contact',
      name: 'home',
      component: Home
    }
  ]
})
