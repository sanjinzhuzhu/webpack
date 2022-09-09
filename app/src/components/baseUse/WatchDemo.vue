<template>
  <div>
    <input v-model="name" />
    <input v-model="info.city" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "zhuzhu",
      info: {
        city: "深圳",
      },
    };
  },
  watch: {
    name(oldVal, val) {
        //eslint-disable-next-line
      console.log("watch name", oldVal, val); //值类型，可正常拿到
    },
    info: {
      handler(oldVal, val) {
        //eslint-disable-next-line
        console.log("watch info", oldVal, val);//引用类型，拿不到。因为此时已经指向新的val
      },
      deep: true, //深度监听
    },
  },
};
</script>

<style>
</style>