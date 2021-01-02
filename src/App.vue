<template>
  <div id="app">
    <Header/>
    <side-bar/>
    <div class="main">
      <router-view/>
    </div>
<!--    <Footer/>-->
  </div>
</template>

<script>
import Header from './components/main/Header'
import Footer from './components/main/Footer'
import SideBar from './components/main/SideBar'

export default {
  name: 'App',

  components: {
    Header,
    Footer,
    SideBar
  },

  created () {
    console.log('%c%s %c%s %c%s', 'font-size: 2.5rem; color: #ff595e', 'Study', 'font-size: 2.5rem; color: #ffca3a', 'Vue', 'font-size: 2.5rem; color: #8ac926', 'Page')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
