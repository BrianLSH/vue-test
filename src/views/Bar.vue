<template>
  <div class="com">
    <h2>Bar 组件</h2>
    <p>{{ $store.state.count }}</p>
    <button @click="$store.dispatch('jian')">-</button>
    <p @click='miniusNum'> <button>点我异步减</button></p>
  </div>
</template>

<script>
export default {
  methods: {
    // miniusNum: function () {
    //   this.$store.dispatch('jian')
    // }
    miniusNum () {
      this.$store.dispatch('jian')
    }
  }
}
</script>

<style></style>
