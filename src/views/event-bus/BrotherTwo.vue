<template>
  <div>
    购物车数量=====>{{num}}
  </div>
</template>

<script>
import EventBus from '../../utils/eventBus.js'
export default {
  name: 'brother-two',
  data () {
    return {
      num: 0
    }
  },
  created () {
    EventBus.$on('add', num => {
      this.num += num
    })
  }
}
</script>

<style>

</style>
