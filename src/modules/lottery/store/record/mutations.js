import * as types from './types'

export default {
  [types.MU_RECORD] (state, data) {
    if (!data) return
    state.record = [...data]
  }
}
