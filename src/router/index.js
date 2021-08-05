import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'feed',
      component: require('@/views/public/Feed.vue').default
    },
    {
      path: '/post',
      name: 'post',
      meta: {
        returnToFeed: true
      },
      component: () => import('@/views/public/Post.vue')
    },
    {
      path: '/recipe',
      name: 'recipe',
      meta: {
        returnToFeed: true
      },
      component: () => import('@/views/public/Recipe.vue')
    },
    {
      path: '/admin',
      name: 'admin-home',
      meta: { layout: 'admin' },
      component: () => import('@/views/admin/Home.vue')
    },
  ]
})