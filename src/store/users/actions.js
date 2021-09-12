export default {
  byUserActionMin ({ commit }, num) {
    setTimeout(() => {
      commit('byUserActionMin', num)
    }, 2000)
  }
}
