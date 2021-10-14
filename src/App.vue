<template>
<!--  <img class="items-center content-center content-between items-center inline" alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <calculator></calculator>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Calculator from './components/calculator.vue'

export default {
  name: 'App',
  components: {
    Calculator
  }
}
</script>

<style>
  html { height:100%; }
  body { position:absolute; top:0; bottom:0; right:0; left:0; }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
 background: ghostwhite;
}
body {
  height: 100%;
}
</style>
