import * as types from './types'

export default {
  [types.SAVE_RESULT] ({commit}, payload) {
    commit(types.MU_WINNING, payload)
  },
  [types.CLEAR_WINNING] ({commit}, payload) {
    commit(types.MU_WINNING, null)
  },
  [types.SET_NUMBER_LIST] ({commit}, payload) {
    commit(types.MU_NUMBER_LIST, {})
  }
}
