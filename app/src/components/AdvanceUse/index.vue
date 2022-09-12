<template>
  <div>
    <hr />
    <h3>二、插槽的使用</h3>
    <h5>
      <span style="color: skyblue">1、默认插槽:</span
      >父组件不传值则默认插槽里面的值
    </h5>
    <SlotDemo :url="website.url">
      <!-- 不传的话则用默认值 -->
      {{ website.title }}
    </SlotDemo>
    <h5>
      <span style="color: skyblue">2、作用域插槽:</span
      >子组件里面有一个作用域的data,怎么去把里面的data扔出让父组件收到
    </h5>
    <ScopedSlotDemo :url="website.url">
      <template v-slot="slotProps">
        {{ slotProps.slotData.title }}
      </template>
    </ScopedSlotDemo>
    <h5>
      <span style="color: skyblue">3、具名插槽:</span
      >多个slot给name,同样用template来绑定对应slot
    </h5>
    <NameSlot>
      <template v-slot:header>
        <h6>将插入header slot中</h6>
      </template>
      <h6>将插入到main slot 中,即未命名的slot</h6>
      <template v-slot:footer>
        <h6>将插入footer slot中</h6>
      </template>
    </NameSlot>
    <hr />
    <h3>三、动态异步组件</h3>
    <h5>如ant design、E-charts、element-UI等组件按需加载</h5>
    <div v-for="(val, key) in newsData" :key="key">
      <component :is="val.type"></component>
    </div>
    <hr />
    <h3>四、vue如何缓存组件</h3>
    <KeepAlive />
    <hr />
    <h3>mix in</h3>
    <h5>多个组件有相同的逻辑,抽离出来</h5>
    <MixinDemo></MixinDemo>
  </div>
</template>

<script>
import SlotDemo from "./SlotDemo";
import ScopedSlotDemo from "./ScopedSlotDemo";
import NameSlot from "./NameSlot";
import KeepAlive from "./KeepAlive";
import MixinDemo from './MixinDemo'
export default {
  components: {
    SlotDemo,
    ScopedSlotDemo,
    NameSlot,
    KeepAlive,
    MixinDemo
  },
  data() {
    return {
      name: "zhuzhu",
      website: {
        url: "http://imooc.com",
        title: "imooc",
        subTitle: "xinxin",
      },
      newsData: {
        a: {
          type: "text",
        },
        b: {
          type: "text",
        },
        c: {
          type: "image",
        },
      },
    };
  },
};
</script>


