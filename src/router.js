import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/inprogress',
      name: 'inProgress',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/InProgress.vue')
    },
    {
      path: '/completed',
      name: 'completed',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Completed.vue')
    }
  ]
})
