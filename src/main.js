import '@/assets/css/tailwind.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/globalComponents'

Vue.config.productionTip = false

Vue.prototype.$theme = localStorage.theme // NOT REACTIVE I THINK, CHANGE (VUEX??)

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
