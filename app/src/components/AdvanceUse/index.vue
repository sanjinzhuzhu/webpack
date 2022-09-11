<template>
  <div>
    <hr />
    <h3>二、插槽的使用</h3>
    <h5>1、默认插槽:父组件不传值则默认插槽里面的值</h5>
    <SlotDemo :url="website.url">
      <!-- 不传的话则用默认值 -->
      {{ website.title }}
    </SlotDemo>
    <h5>
      2、作用域插槽:子组件里面有一个作用域的data,怎么去把里面的data扔出让父组件收到
    </h5>
    <ScopedSlotDemo :url="website.url">
      <template v-slot="slotProps">
        {{ slotProps.slotData.title }}
      </template>
    </ScopedSlotDemo>
    <h5>3、具名插值, 多个slot给name,同样用template来绑定对应slot</h5>
    <NameSlot>
      <template v-slot:header>
        <h6>将插入header slot中</h6>
      </template>
      <h6>将插入到main slot 中,即未命名的slot</h6>
      <template v-slot:footer>
        <h6>将插入footer slot中</h6>
      </template>
    </NameSlot>
  </div>
</template>

<script>
import SlotDemo from "./SlotDemo";
import ScopedSlotDemo from "./ScopedSlotDemo";
import NameSlot from "./NameSlot";
export default {
  components: {
    SlotDemo,
    ScopedSlotDemo,
    NameSlot,
  },
  data() {
    return {
      name: "zhuzhu",
      website: {
        url: "http://imooc.com",
        title: "imooc",
        subTitle: "xinxin",
      },
    };
  },
};
</script>

