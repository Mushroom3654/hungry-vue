import * as types from './types'

export default {
  [types.RECORD]: state => state.record,
  [types.FIELDS]: state => state.fields
}
