import Vue from 'vue'

Vue.component('public-layout', 
  () => import('@/components/layout/public/AppLayout')
)
Vue.component('avatar', 
  () => import('@/components/common/Avatar')
)
Vue.component('modal', 
  () => import('@/components/common/Modal')
)