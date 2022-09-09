<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <TplDemo/>
     <ComputedDemo/> 
     <WatchDemo/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import TplDemo from '/src/components/baseUse/TplDemo'
import ComputedDemo from '/src/components/baseUse/ComputedDemo'
import WatchDemo from '/src/components/baseUse/WatchDemo'
export default {
  name: 'App',
  components: {
    // HelloWorld
    TplDemo,
    ComputedDemo,
    WatchDemo
  }
}
</script>


