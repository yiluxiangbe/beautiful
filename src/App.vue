<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import Home from './components/Index.vue'
import '@/assets/js/xadmin.js'
import './assets/css/global.css'
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
