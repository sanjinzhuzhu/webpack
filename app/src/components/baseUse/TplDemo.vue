<template>
  <div>
    <p>文本插值{{ message }}</p>
    <p>JS表达式{{ flag ? "yes" : "no" }}</p>
    <p :id="dynamicId">动态属性id</p>

    <hr />
    <p v-html="rawHtml">
      <span>【注意】使用v-html之后,将会覆盖子元素</span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "hello vue",
      flag: true,
      rawHtml: "指令-原始 hrml <b>加粗</b> <i>斜体</i>",
      dynamicId: `id-${Date.now()}`,
    };
  },
};
</script>

<style>
</style>