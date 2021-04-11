<template>
<!--
    vue 默认的插槽 匿名插槽
    子组件中用slot占用一个位置，父组件中传入替换内容
-->
<div>
     {{getRandom}}
      <div v-if="getRandom > 0.5">
           大于0.5
     </div>
     <div v-if="getRandom < 0.5">
          小于0.5
     </div>
     <br />

++++++++++++++
++++++++++++
+++++++++++++
<!-- <child>
    匿名插槽
</child> -->

<!-- 具名插槽 -->
<child-slot>
     <span>haha</span>\123
</child-slot>
<child-slot>
     <span>heiehi</span>456
</child-slot>
<child-slot>
     <span slot='nav'>我是nav</span>
</child-slot>
<child-slot>
     <span slot='header'>我是header</span>
</child-slot>
<child-slot>
     <span slot='body'>我是body</span>
</child-slot>
<child-slot>
     <span slot='footer'>我是三界外</span>
</child-slot>

<!-- <div class="parent">我是父亲</div>
<child-slot>
<span>我是自学的</span>
</child-slot>
<child-slot>
  <span>哈哈哈</span>
 </child-slot>
<child-slot>
 <span>你能学会吗</span>
</child-slot> -->

</div>
</template>

<script>
import ChildSlot from '../../components/ChildSlot'
export default {
  components: {
    ChildSlot: ChildSlot
  },
  data: function () {
    return {
      getRandom: Math.random()
    }
  }

}
</script>

<style>

</style>
