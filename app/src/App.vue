<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <TplDemo />
    <ComputedDemo />
    <WatchDemo />
    <ClassDemo />
    <ConditionDemo />
    <!-- <ListDemo/> -->
    <EventDemo />
    <ComponentsDemo />
    <AdvanceUse />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import TplDemo from "/src/components/baseUse/TplDemo";
import ComputedDemo from "/src/components/baseUse/ComputedDemo";
import WatchDemo from "/src/components/baseUse/WatchDemo";
import ClassDemo from "/src/components/baseUse/ClassDemo";
import ConditionDemo from "/src/components/baseUse/ConditionDemo";
// import ListDemo from '/src/components/baseUse/ListDemo'
import EventDemo from "/src/components/baseUse/EventDemo";
import ComponentsDemo from "/src/components/ComponentsDemo";
import AdvanceUse from "/src/components/AdvanceUse";
export default {
  name: "App",
  components: {
    // HelloWorld
    TplDemo,
    ComputedDemo,
    WatchDemo,
    ClassDemo,
    ConditionDemo,
    //  ListDemo
    EventDemo,
    ComponentsDemo,
    AdvanceUse
  },
};
</script>


