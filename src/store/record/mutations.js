import * as types from './types'

export default {
  [types.MU_RESULT] (state, data) {
    if (state.result.length > 0) state.result = []
    data.map((e, i) => {
      if (i < 3) return
      let item = {}
      item.count = e[0]
      item.date = e[1]
      item.first = e[2]
      item.second = e[3]
      item.third = e[4]
      item.fourth = e[5]
      item.fifth = e[6]
      item.sixth = e[7]
      item.bonus = e[8]
      state.result.push(item)
    })
  }
}
