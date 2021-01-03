import Vue from 'vue'
import Router from 'vue-router'

import Main from '../components/main/Main'
import Prepared from '../components/Prepared'

import studyRouter from '../modules/study/router/router'
import portfolioRouter from '../modules/portfolio/router/router'
import lotteryRouter from '../modules/lottery/router/router'

Vue.use(Router)

const router = [
  { path: '/main', name: 'Main', component: Main },
  { path: '/prepared', name: 'Prepared', component: Prepared }
]

export default new Router({
  mode: 'history',
  base: '/',
  routes: [...router, ...portfolioRouter, ...lotteryRouter, ...studyRouter]
})
