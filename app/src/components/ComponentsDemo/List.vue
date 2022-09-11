<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">
        {{ item.title }}
        <button @click="deleteItem(item.id)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>

import event from './event'
export default {
  props: ["list"],
  //   props: {
  //     list: {
  //       type: Array,
  //       default() {
  //         return [];
  //       },
  //     },
  //   },
  data() {
    return {};
  },
  methods: {
    deleteItem(id) {
      this.$emit("delete", id);
    },
    addTitleHandler(title){
        console.log('on add title', title);
    }
  },
  created(){
    console.log('list created');
  },
  mounted(){
    console.log('list mounted');
    //绑定一个自定义事件
    event.$on('onAddTtile',this.addTitleHandler)
  },
  beforeUpdate(){
    console.log('list before update');
  },
  updated(){
    console.log('list updated');
  },
  beforeDestroy(){
    //及时解绑自定义事件，否则可能造成内存泄漏
    event.$off('onAddTtile',this.addTitleHandler)

  }
  
};
</script>

<style>
</style>