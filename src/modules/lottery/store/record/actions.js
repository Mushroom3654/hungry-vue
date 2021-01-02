import { database } from 'firebase/app'
import * as types from './types'

export default {
  [types.QUERY_RECORD] ({commit}, data) {
    database().ref('/record').once('value').then(res => {
      if (!res.val()) return
      commit(types.MU_RECORD, res.val())
    })
  },

  [types.SET_RECORD] ({commit}, data) {
    console.log(data)
    commit(types.MU_RECORD, data)
  }
}
