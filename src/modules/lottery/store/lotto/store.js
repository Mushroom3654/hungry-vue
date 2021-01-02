import { createNamespacedHelpers } from 'vuex'

import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import { NAMESPACE } from './types'

const { mapGetters, mapActions } = createNamespacedHelpers(NAMESPACE)

export { mapGetters, mapActions }

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
