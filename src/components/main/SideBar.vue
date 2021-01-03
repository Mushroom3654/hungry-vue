<template>
  <div class="sidebar">
<!--    <a href="javascript:void(0)" class="btn-side-close" @click="closeSidebar">&times;</a>-->
    <a class="btn-side-close" @click="closeSidebar">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </a>
<!--    <div class="dept-portfolio dept-1">-->
<!--      <router-link :class="{'active': $route.name === 'Portfolio'}" :to="{name: 'Portfolio'}"><span>Portfolio</span></router-link>-->
<!--    </div>-->
    <div class="dept-study dept-1">
      <div class="dept-title" @click="toggleDept1">Portfolio<a class="dept-toggle"></a></div>
      <div class="dept-study-list dept-1-list">
        <div class="dept-1-item"><router-link :class="{'active': $route.name === 'Portfolio'}" :to="{name: 'Portfolio'}"><span>Project</span></router-link></div>
<!--        <div class="dept-1-item"><router-link :class="{'active': $route.name === 'TimeLine'}" :to="{name: 'TimeLine'}"><span>TimeLine</span></router-link></div>-->
      </div>
    </div>
    <div class="dept-study dept-1">
      <div class="dept-title" @click="toggleDept1">Study<a class="dept-toggle"></a></div>
      <div class="dept-study-list dept-1-list">
        <div class="dept-1-item"><router-link :class="{'active': $route.name === 'Record'}" :to="{name: 'Record'}"><span>Record</span></router-link></div>
        <div class="dept-1-item"><router-link :class="{'active': $route.name === 'Lotto'}" :to="{name: 'Lotto'}"><span>Lotto</span></router-link></div>
        <div class="dept-1-item"><router-link :class="{'active': $route.name === 'Example'}" :to="{name: 'Example'}"><span>Example</span></router-link></div>
        <div class="dept-1-item"><router-link :class="{'active': $route.name === 'Map'}" :to="{name: 'Map'}"><span>Map</span></router-link></div>
        <div class="dept-1-item"><router-link :class="{'active': $route.name === 'Test'}" :to="{name: 'Test'}"><span>Test</span></router-link></div>
        <div class="dept-1-item"><router-link :class="{'active': $route.name === 'CanvasDraw'}" :to="{name: 'CanvasDraw'}"><span>Drawer</span></router-link></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',

  mounted () {
    // document.querySelector('.sidebar').addEventListener('mouseleave', this.closeSidebar, false)
  },

  beforeDestroy () {
    document.querySelector('.sidebar').removeEventListener('mouseleave', this.closeSidebar, false)
  },

  methods: {
    closeSidebar () {
      document.querySelector('.sidebar').classList.remove('active')
    },

    toggleDept1 (e) {
      let parent = e.target.parentElement
      if (parent.classList.contains('active')) {
        return parent.classList.remove('active')
      }
      parent.classList.add('active')
    }
  }
}
</script>
