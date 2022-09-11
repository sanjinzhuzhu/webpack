<template>
  <div>
    <p>{{num}}</p>
  <button @click="jia1">+1</button>
  <button @click="jia2(2,$event)">+2</button>
  <!-- 阻止单击事件继续传播 -->
  <a @click.stop="doThis"></a>
  <!-- 提交时间不在重载页面 -->
  <form @submit.prevent="onSubmit"></form>
  <!-- 修饰符可以串联 -->
  <a @click.stop.prevent>doThat</a>
  <!-- 只有修饰符 -->
  <form @submit.prevent>
    
  </form>
  <!-- 添加时间监听起时使用事件捕获模式 -->
  <!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
  <div @click.capture="doThis">...</div>
  <!-- 只当在event.target是当前元素触发自身时触发处理函数 -->
  <!-- 即事件不是从内部元素触发的 -->
  <div @click.self="doThat">...</div>

<!-- 即使Alt或Shif被一同按下时也会触发 -->
  <button @click.ctrl="onClick">A</button>
  <!-- 有且只有Ctrl被按下的时候才触发 -->
  <button @click.ctrl.exact="onCtrlClick">A</button>
  <!-- 没有任何系统修饰符按下的时候才触发 -->
  <button @click.exact="onClick">A</button>
  </div>
</template>

<script>

export default {
data(){
    return {
        num:0
    }
},
methods:{
    jia1(event){
     console.log('event',event,event.__proto__.constructor)
        console.log(event.target);
        console.log(event.currentTarget);
        this.num++
    },
    jia2(val,event){
        console.log(event.target);
        this.num = this.num +val
    },
    // loadHandler(){  
    // }
}
}
</script>

<style>

</style>