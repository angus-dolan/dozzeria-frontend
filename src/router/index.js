import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'Feed',
      component: require('@/views/public/Feed.vue').default
    },
    {
      path: '/post',
      name: 'View Post',
      component: () => import('@/views/public/Post.vue')
    },
    {
      path: '/recipe',
      name: 'Recipe',
      component: () => import('@/views/public/Recipe.vue')
    },
    {
      path: '/admin',
      name: 'Admin Home',
      meta: { layout: 'admin' },
      component: () => import('@/views/admin/Home.vue')
    },
  ]
})