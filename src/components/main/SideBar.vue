<template>
  <div class="sidebar">
<!--    <a href="javascript:void(0)" class="btn-side-close" @click="closeSidebar">&times;</a>-->
    <a class="btn-side-close" @click="closeSidebar">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </a>
    <router-link :class="{'active': $route.name === 'Portfolio'}" :to="{name: 'Portfolio'}"><span>Portfolio</span></router-link>
    <router-link :class="{'active': $route.name === 'Record'}" :to="{name: 'Record'}"><span>Record</span></router-link>
    <router-link :class="{'active': $route.name === 'Lotto'}" :to="{name: 'Lotto'}"><span>Lotto</span></router-link>
    <router-link :class="{'active': $route.name === 'Example'}" :to="{name: 'Example'}"><span>Example</span></router-link>
    <router-link :class="{'active': $route.name === 'Map'}" :to="{name: 'Map'}"><span>Map</span></router-link>
    <router-link :class="{'active': $route.name === 'Test'}" :to="{name: 'Test'}"><span>Test</span></router-link>
    <router-link :class="{'active': $route.name === 'CanvasDraw'}" :to="{name: 'CanvasDraw'}"><span>Drawer</span></router-link>
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
      document.getElementsByClassName('btn-hamburger')[0].classList.remove('hover')
    }
  }
}
</script>
