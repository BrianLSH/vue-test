<template>
  <div>
    <input @click="toB" type="button" value="加入购物车2件">
  </div>
</template>

<script>
import EventBus from '../../utils/eventBus.js'
export default {
  name: 'brother-one',
  data () {
    return {
      num: 2
    }
  },
  methods: {
    toB () {
      EventBus.$emit('add', this.num)
    }
  }
}
</script>

<style>
</style>
