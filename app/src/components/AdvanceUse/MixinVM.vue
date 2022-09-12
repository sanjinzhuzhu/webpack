<template>
  <div>
    <input type="text"  :value="text1" @input="$emit('change1',$event.target.value)" placeholder="hi zhuzhu~" />
  </div>
</template>

<script>
export default {
    //子组件收到父组件后，动态给收到的父组件绑定一个事件change1，子又通知父组件改变
    model:{
        props:'text1',
        event:'change1'
    },
    //子组件收到父组件的一个text1字符串值
  props: {
    text1: String,
    default() {
      return "";
    },
  },
};
</script>

<style>
</style>