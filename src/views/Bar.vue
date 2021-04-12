<template>
  <div class="com">
    <h2>Bar 组件</h2>
    <p>{{ $store.state.count }}</p>
    <button @click="$store.dispatch('jian')">我不是助手函数-</button>
    <button @click="jian()">助手函数-</button>
    <p @click='miniusNum'> <button>点我异步减</button></p>
    <p @click='miniusNum1'> <button>助手函数异步减</button></p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['jian']),
    // miniusNum: function () {
    //   this.$store.dispatch('jian')
    // }
    miniusNum () {
      this.$store.dispatch('jian')
    },
    miniusNum1 () {
      this.jian()
    }

  }
}
</script>

<style></style>
