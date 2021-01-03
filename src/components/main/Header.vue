<template>
    <header class="header">
      <div class="header-description">
        <h1>KBY Junior Developer</h1>
      </div>
      <div class="header-nav">
        <div class="header-nav-inner">
          <div class="header-nav-inner-title">
            <router-link class="header-title" :to="{name: 'Main'}"><span @click="closeSidebar">KBY.</span></router-link>
          </div>
          <div class="header-nav-inner-right">
            <svg class="btn-hamburger" width="24" height="24" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"
                 stroke-linejoin="round" @click="openSidebar">
              <line x1="1" y1="6" x2="20" y2="6"></line>
              <line x1="1" y1="12" x2="20" y2="12"></line>
              <line x1="1" y1="18" x2="20" y2="18"></line>
            </svg>
          </div>
        </div>
      </div>
<!--      <div class="btn-hamburger" @click="toggleSidebar">-->
<!--        <span class="hamburger-bar"></span>-->
<!--        <span class="hamburger-bar"></span>-->
<!--        <span class="hamburger-bar"></span>-->
<!--      </div>-->
    </header>
</template>

<script>

export default {
  name: 'Header',

  methods: {
    openSidebar () {
      let sideBar = document.querySelector('.sidebar')
      if (sideBar.classList.contains('active')) return
      sideBar.classList.add('active')
    },

    closeSidebar () {
      document.querySelector('.sidebar').classList.remove('active')
    }
  }
}
</script>
