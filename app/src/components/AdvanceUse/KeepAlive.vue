<template>
  <div>
    <button @click="changeState('A')">A</button>
    <button @click="changeState('B')">B</button>
    <button @click="changeState('C')">C</button>
    
    <keep-alive>
    <KeepAliveStateA v-if="state === 'A'"></KeepAliveStateA>
    <KeepAliveStateB v-if="state === 'B'"></KeepAliveStateB>
    <KeepAliveStateC v-if="state === 'C'"></KeepAliveStateC>
    </keep-alive>
  </div>
</template>

<script>
import KeepAliveStateA from "./KeepAliveStateA";
import KeepAliveStateB from "./KeepAliveStateB";
import KeepAliveStateC from "./KeepAliveStateC";
export default {
  components: {
    KeepAliveStateA,
    KeepAliveStateB,
    KeepAliveStateC,
  },
  data() {
    return {
      state: "A",
    };
  },
  methods: {
    changeState(state) {
      this.state = state;
    },
  },
};
</script>

<style>
</style>