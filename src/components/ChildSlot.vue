<template>
  <!-- 匿名组件 -->
  <div class="jumingchacao">
    <slot>jumingchacao我没穿内容</slot>

    <!-- 具名插槽-->

    <!-- <slot name="nav"></slot>
  <slot name="header"></slot>
     <p>
      ajdflasdjfl
    </p> -->

     <!-- <slot name="footer"></slot> -->

    <!-- 作用域插槽 -->
    <!-- <slot></slot> -->
    <!-- <slot></slot> -->
    <!-- <slot></slot> -->
  </div>
</template>

<script>
export default {
  name: 'ChildSlot'
}
</script>

<style></style>
