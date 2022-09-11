<template>
 <a :href="url">
   
    <slot>
        默认内容，父组件没有设置内容时这里使用
    </slot>
 </a>
</template>

<script>
export default {
props:['url'],
data(){
    return{

    }
}
}
</script>

<style>

</style>