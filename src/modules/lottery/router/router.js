export default [
  { path: '/lottery/record', name: 'Record', component: () => import('../view/Record') },
  { path: '/lottery/draw', name: 'Lotto', component: () => import('../view/Lotto') }
]
