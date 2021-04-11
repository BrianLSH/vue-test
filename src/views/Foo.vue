<template>
  <div class="com">
    <h2>Foo 组件</h2>

    <p @click='addNum'><button>点我同步修改</button></p>

    <p>{{showData}}</p>
    ----------
    <p>{{ $store.state.count }}</p>
    <button @click="$store.commit('add', 1)">+</button>
    <!-- @click="$store.commit('add')" -->
  </div>
</template>

<script>
// console.log(this.$store.state.count)
export default {
  data () {
    return {}
  },
  methods: {
    // addNum: function () {
    //   this.$store.commit('add', 2)
    // }

    addNum () {
      this.$store.commit('add', 2)
    }
  },
  computed: {
    showData: function () {
      return this.$store.state.count
    }
  }
}
</script>

<style></style>
