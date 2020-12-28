<template>
    <div id="header">
      <div class="btn-hamburger" @click="toggleSidebar">
        <span class="hamburger-bar"></span>
        <span class="hamburger-bar"></span>
        <span class="hamburger-bar"></span>
      </div>

      <span class="header-title"><b-link href="/">{{ $route.name }}</b-link></span>
    </div>
</template>

<script>

export default {
  name: 'Header',

  mounted () {
    // document.getElementsByClassName('btn-hamburger')[0].addEventListener('mouseenter', this.toggleSidebar, false)
  },

  beforeDestroy () {
    // document.getElementsByClassName('btn-hamburger')[0].removeEventListener('mouseenter', this.toggleSidebar, false)
  },

  methods: {
    toggleSidebar () {
      let sideBar = document.querySelector('.left-sidebar')
      let btnHamburger = document.getElementsByClassName('btn-hamburger')
      if (!sideBar.style.width) {
        sideBar.style.width = '200px'
        btnHamburger[0].classList.add('hover')
      } else {
        sideBar.style.width = null
        btnHamburger[0].classList.remove('hover')
      }
    }
  }
}
</script>
