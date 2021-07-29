import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import theme from './modules/theme'

export default new Vuex.Store({
  modules: {
    theme
  },
})