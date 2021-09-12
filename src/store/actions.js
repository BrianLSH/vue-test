export default
  {
    // jian (context) {
    //   setTimeout(() => {
    //     context.commit('jian')
    //   }, 3000)
    // }
    jian ({ commit }) {
      setTimeout(() => {
        commit('jian')
      }, 1000)
    }
  }
