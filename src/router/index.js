import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/feed',
      name: 'Feed',
      component: require('@/views/public/Feed.vue').default
    },
    {
      path: '/admin',
      name: 'Admin Home',
      meta: { layout: 'admin' },
      component: () => import('@/views/admin/Home.vue')
    },
  ]
})