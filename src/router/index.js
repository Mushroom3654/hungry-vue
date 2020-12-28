import Vue from 'vue'
import Router from 'vue-router'
import Record from '../view/Record'
import Lotto from '../view/Lotto'
import Example from '../view/Example'
import Map from '../view/Map'
import Test from '../view/Test'
import CanvasDraw from '../view/CanvasDraw'

import portfolioRoute from '@/modules/portfolio/router/router'

Vue.use(Router)

const routes = [
  { path: '/record', name: 'Record', component: Record },
  { path: '/lotto', name: 'Lotto', component: Lotto },
  { path: '/example', name: 'Example', component: Example },
  { path: '/map', name: 'Map', component: Map },
  { path: '/test', name: 'Test', component: Test },
  { path: '/draw', name: 'CanvasDraw', component: CanvasDraw }
]

export default new Router({
  mode: 'history',
  base: '/',
  routes: routes.concat(portfolioRoute.route)
})
