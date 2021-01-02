import Example from '../view/Example'
import Map from '../view/Map'
import Test from '../view/Test'
import CanvasDraw from '../view/CanvasDraw'

export default [
  { path: '/example', name: 'Example', component: Example },
  { path: '/map', name: 'Map', component: Map },
  { path: '/test', name: 'Test', component: Test },
  { path: '/draw', name: 'CanvasDraw', component: CanvasDraw }
]
