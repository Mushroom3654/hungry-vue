<template>
  <div class="left-sidebar">
<!--    <a href="javascript:void(0)" class="btn-toggle" @click="closeSidebar">&times;</a>-->
    <b-link :class="{'active': $route.name === 'Portfolio'}" to="/portfolio"><span>Portfolio</span></b-link>
    <b-link :class="{'active': $route.name === 'Record'}" to="/record"><span>Record</span></b-link>
    <b-link :class="{'active': $route.name === 'Lotto'}" to="/lotto"><span>Lotto</span></b-link>
    <b-link :class="{'active': $route.name === 'Example'}" to="/example"><span>Example</span></b-link>
    <b-link :class="{'active': $route.name === 'Map'}" to="/map"><span>Map</span></b-link>
    <b-link :class="{'active': $route.name === 'Test'}" to="/test"><span>Test</span></b-link>
    <b-link :class="{'active': $route.name === 'Draw'}" to="/draw"><span>Drawer</span></b-link>
  </div>
</template>

<script>
export default {
  name: 'SideBar',

  mounted () {
    document.querySelector('.left-sidebar').addEventListener('mouseleave', this.closeSidebar, false)
  },

  beforeDestroy () {
    document.querySelector('.left-sidebar').removeEventListener('mouseleave', this.closeSidebar, false)
  },

  methods: {
    closeSidebar () {
      document.querySelector('.left-sidebar').style.width = null
      document.getElementsByClassName('btn-hamburger')[0].classList.remove('hover')
    }
  }
}
</script>
