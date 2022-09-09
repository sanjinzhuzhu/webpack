<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <TplDemo/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import TplDemo from '/src/components/baseUse/TplDemo'
export default {
  name: 'App',
  components: {
    // HelloWorld
    TplDemo
  }
}
</script>


