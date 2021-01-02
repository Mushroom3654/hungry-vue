import * as types from './types'

export default {
  [types.MU_WINNING] (state, data) {
    if (data === null) {
      for (let i in state.winning) {
        state.winning[i] = data
      }
      return
    }
    state.winning[data.i] = data.d
    let idx = state.lotto.findIndex(dt => dt === data.d)
    state.lotto.splice(idx, 1)
  },
  [types.MU_NUMBER_LIST] (state, data) {
    state.lotto = []
    for (let i = 1; i <= 45; i++) {
      state.lotto.push(i)
    }
  }
}
