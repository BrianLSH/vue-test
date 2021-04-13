export default {
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
