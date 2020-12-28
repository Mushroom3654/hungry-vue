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
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import SideBar from './components/SideBar'
import '../src/css/app.css'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    SideBar
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
