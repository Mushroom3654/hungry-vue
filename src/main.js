// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import * as firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import firebaseSetting from './vue/firebaseSetting'

import '../static/css/layout.css'
import '../static/css/app.css'

import './components/components'

import firebasePlugin from './vue/firebasePlugin'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

// firebase config
// Initialize Firebase
firebase.initializeApp(firebaseSetting)

Vue.use(firebasePlugin)

router.beforeEach((to, from, next) => {
  if (!to.name) next({name: 'Main'})
  else next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
