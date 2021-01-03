<template>
  <div class="project-experience">
    <div class="project-header">
      <h1 class="project-title">Project Experience</h1>
    </div>
    <div class="project-content">
<!--      <component :is="currentProject"/>-->
      <duce v-if="projectPage === 'DUCE'"/>
      <araboza v-if="projectPage === 'ARABOZA'"/>
      <erp v-if="projectPage === 'NEWERP'"/>
      <hoban-safe v-if="projectPage === 'HOBANSAFE'"/>
      <seil-labor v-if="projectPage === 'SEILENSLABOR'"/>
    </div>
    <div class="project-time-line">
      <div class="project-time-line-body">
        <div class="project-time-line-item item-duce" @click="changeProject('DUCE')"><span>Duce</span></div>
        <div class="project-time-line-item item-araboza" @click="changeProject('ARABOZA')"><span>Araboza</span></div>
        <div class="project-time-line-item item-hoban" @click="changeProject('NEWERP')"><span>차세대<br>ERP<br></span></div>
        <div class="project-time-line-item item-hoban" @click="changeProject('HOBANSAFE')"><span>호반건설<br>안전관리<br>앱</span></div>
        <div class="project-time-line-item item-seilens" @click="changeProject('SEILENSLABOR')"><span>세일<br>노무자관리<br>앱</span></div>
      </div>
      <div class="project-time-line-footer">
        <div class="time-line"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Duce from './project/Duce'
import Araboza from './project/Araboza'
import NewErp from './project/NewErp'
import HobanSafe from './project/HobanSafe'
import SeilEnsLabor from './project/SeilEnsLabor'

export default {
  name: 'Portfolio',

  components: {
    duce: Duce,
    araboza: Araboza,
    erp: NewErp,
    hobanSafe: HobanSafe,
    seilLabor: SeilEnsLabor
  },

  data () {
    return {
      projectPage: 'SEILENSLABOR',
      projectCount: 5
    }
  },

  computed: {
    currentProject () {
      if (this.projectPage === 'DUCE') return () => import('./project/Duce')
      if (this.projectPage === 'ARABOZA') return () => import('./project/Araboza')
      if (this.projectPage === 'NEWERP') return () => import('./project/NewErp')
      if (this.projectPage === 'HOBANSAFE') return () => import('./project/HobanSafe')
      if (this.projectPage === 'SEILENSLABOR') return () => import('./project/SeilEnsLabor')
      return () => import('./project/Duce')
    }
  },

  methods: {
    changeProject (page) {
      this.projectPage = page
    }
  }
}
</script>
