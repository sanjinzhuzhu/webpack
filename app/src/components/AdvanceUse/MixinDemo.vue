<template>
  <div>
    <p>{{ name }} <br />{{ hobby }}<br />{{ city }}<br />{{ age }}</p>
    <button @click="showName">显示姓名</button>
    <MixinVM v-model="name"/>
  </div>
</template>

<script>
import myMixin from "./mixin";
import MixinVM from "./MixinVM";
export default {
  components: {
    MixinVM,
  },
  mixins: [myMixin], //可以添加多个，会自动合并起来
  data() {
    return {
      name: "zhuzhu",
      hobby: "henduo",
    };
  },
  methods: {},
  mounted() {
    console.log("component mounted", this.name);
  },
};
</script>

<style>
</style>