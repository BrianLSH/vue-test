import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add (state, num) {
      state.count += num
    },
    jian (state) {
      state.count--
    }
  },
  actions: {
    // jian (context) {
    //   setTimeout(() => {
    //     context.commit('jian')
    //   }, 3000)
    // }
    jian ({ commit }) {
      setTimeout(() => {
        commit('jian')
      }, 3000)
    }
  },
  modules: {},
  getters: {
    getDataByGetters: function (state) {
      return state.count
    }
  }
})
