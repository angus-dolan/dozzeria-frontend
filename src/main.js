import '@/assets/css/tailwind.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import PublicAppLayout from '@/components/layout/public/AppLayout.vue'
import AdminAppLayout from '@/components/layout/admin/AppLayout.vue'

Vue.component('public-layout', PublicAppLayout);
Vue.component('admin-layout', AdminAppLayout);

Vue.config.productionTip = false

Vue.prototype.$theme = localStorage.theme // NOT REACTIVE I THINK, CHANGE (VUEX??)

new Vue({
  router,
  render: h => h(App),
  store,
}).$mount('#app')
