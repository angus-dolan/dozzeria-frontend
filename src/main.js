import '@/assets/css/tailwind.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'

import PublicAppLayout from '@/components/layout/public/AppLayout.vue'
import AdminAppLayout from '@/components/layout/admin/AppLayout.vue'

Vue.component('public-layout', PublicAppLayout);
Vue.component('admin-layout', AdminAppLayout);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
