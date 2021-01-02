import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

import lotto from './lotto/store'
import record from './record/store'

export default ({
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
  modules: {
    lotto,
    record
  }
})
