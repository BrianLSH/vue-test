import mutations from './mutations'
import actions from './actions'
export default {
  state: {
    uName: '张三',
    UNam: 1
  },

  getters: {
    getConsole () {
      console.log('来自users模块')
    },
    getConsole2 () {
      console.log('来自users木块2')
    }
  },
  namespaced: true,
  mutations,
  actions

}
