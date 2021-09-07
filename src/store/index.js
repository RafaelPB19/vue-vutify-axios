import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: {
      title: '',
      state: false,
      color: 'secondary'
    }
  },
  mutations: {
    showLoading(state, value) {
      state.loading.title = value.title
      state.loading.color = value.color

      state.loading.state = true
    },
    hideLoading(state) {
      state.loading.state = false
    }
  },
  actions: {
  },
  modules: {
  }
})
