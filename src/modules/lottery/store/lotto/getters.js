import * as types from './types'

export default {
  [types.NUMBER_LIST]: state => state.lotto,
  [types.WINNING]: state => state.winning
}
