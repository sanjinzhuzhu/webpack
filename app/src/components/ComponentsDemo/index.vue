<template>
  <div>
    <hr><h3>一、组件通讯</h3>
    <Input @add="addHandler" />
    <List :list="list" @delete="deleteHandler" />
  </div>
</template>

<script>


import Input from "./Input";
import List from "./List";

export default {
  components: {
    Input,
    List,
  },
  data() {
    return {
      list: [
        {
          id: "id-1",
          title: "标题1",
          done:true
        },
        {
          id: "id-2",
          title: "标题2",
           done:true
        },
      ],
    };
  },
  methods: {
    addHandler(title) {
      this.list.push({
        id: `id-${Date.now()}`,
        title
      });
    },
    deleteHandler(id) {
      this.list = this.list.filter((item) => item.id !== id);
    },
  },
  created() {
    console.log("index created");
  },
  mounted() {
    console.log("index mounted");
  },
  beforeUpdate(){
    console.log('index beforeUpdate');
  },
  updated(){
    console.log('index updated');
  }
};
</script>

<style>
</style>