<template>
  <div>
    <!-- <slot-1>
      <p>我是匿名插槽, 会把父组件中所有东西拿过来</p>
    </slot-1> -->

    <!-- 插槽后备内容
<slot-1></slot-1> -->

    <!-- <slot-1>
      <p slot="first">具名插槽 </p>
      <p slot='haha'>hahah</p>
    </slot-1> -->

<slot-1> </slot-1>
  </div>
</template>

<script>
import slot1 from '../../components/slots/slot1.vue'

export default {
  components: { slot1 },
  name: 'SoltOne'
}
</script>

<style></style>
