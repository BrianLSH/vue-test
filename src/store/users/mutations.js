export default {

  byUserMutationAdd (state) {
    state.UNam++
  },
  byUserActionMin (state, num) {
    console.log('num', num)
    state.UNam = state.UNam - num
  }

}
