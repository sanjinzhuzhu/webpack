<template>
  <a :href="url">
    <slot :slotData="website">
      <!-- 不传的话则用默认值 -->
      {{ website.title }}
    </slot>
  </a>
</template>

<script>
export default {
  props: ["url"],
  data() {
    return {
      website: {
        url: "https://im.qq.com/index",
        title: "hahaha",
        subTitle: "xinxinzhuzhu",
      },
    };
  },
};
</script>

