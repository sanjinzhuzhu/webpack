<template>
  <div>
    <p>{{num}}</p>
  <button @click="increment1">+1</button>
  <button @click="increment2(2,$event)">+2</button>
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
    increment1(event){
        console.log('event',event,event._proto_.constructor)
        console.log(event.target);
        console.log(event.currentTarget);
        this.num++
    },
    increment2(val,event){
        console.log(event.target);
        this.num = this.num +val
    },
    loadHandler(){  
    }
}
}
</script>

<style>

</style>