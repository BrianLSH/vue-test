<!-- slotone -->
<template>
  <div style="color:red;">
      slot1
      <!-- 匿名插槽
      <slot></slot>  -->

<!-- 插槽后备 -->
      <!-- <slot> <p>我是插槽后备,没有传入内容，就会显示</p> </slot> -->

<!-- 具名插槽
<slot></slot>
<slot name='first'>
    <p></p>
</slot>
<slot name='haha'>
    <p></p>
</slot> -->

  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}

</script>

<style lang='stylus' scoped>

</style>
