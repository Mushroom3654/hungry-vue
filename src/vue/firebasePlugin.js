// import Vue from 'vue'
import { database } from 'firebase/app'

export default {
  install (Vue, option) {
    Vue.prototype.$firebase = database().ref('/')
  }
}
