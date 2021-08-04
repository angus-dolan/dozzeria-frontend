import Vue from 'vue'

/*
  [SHARED]
  - Components used only in public app
*/
Vue.component('public-layout', 
  () => import('@/components/layout/public/AppLayout')
)

/*
  [ADMIN APP]
  - Components used only in admin app
*/
Vue.component('admin-layout', 
  () => import('@/components/layout/admin/AppLayout')
)

/*
  [COMMON]
  - Components shared between admin and public
*/
Vue.component('avatar', 
  () => import('@/components/common/Avatar')
)