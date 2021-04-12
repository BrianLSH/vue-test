import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    user: [{ id: 1, name: '张' }, { id: 2, name: '王' }, { id: 3, name: '李' }, { id: 4, name: '赵' }]
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
    // getDataByGetters: function (state) {
    //   return state.count
    // }

    getDataByGetters: (state) => {
      return state.count
    },
    findUserById: (state) => (id) => {
      // id = 2
      return state.user.find(item => item.id === id)
    }
  }
})
