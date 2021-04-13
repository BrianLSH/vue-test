export default {
  state: {
    uName: '张三'
  },
  mutations: {},
  actions: {},
  getters: {
    getConsole () {
      console.log('来自users模块')
    },
    getConsole2 () {
      console.log('来自users木块2')
    }
  },
  namespaced: true
}
