/* eslint-disable */

export default {
  namespaced: true,

  state: {
    theme: ''
  },
  getters: {
    getTheme: state => {
      return state.theme
    }
  },
  actions: {
    setTheme ({ commit }, payload) {
      commit('setTheme', payload)
    }
  },
  mutations: {
    setTheme (state, payload) {
      state.theme = payload
    }
  }
}